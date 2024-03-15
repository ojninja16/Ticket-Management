
const Ticket = require('../Model/Ticket');

const createTicket = async (req, res) => {
  const { title, description, priority, deadline } = req.body;
  try {
    const newTicket = new Ticket({
      title,
      description,
      priority,
      deadline,
      createdBy: req.user.id
    });

    const ticket = await newTicket.save();
    res.json(ticket);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};

const getTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find({ createdBy: req.user.id }).sort({ createdAt: -1 });
    res.json(tickets);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};

const getTicketById = async (req, res) => {
  const id = req.params.id;
  try {
    const ticket = await Ticket.findById(id);
    if (!ticket) {
      return res.status(404).json({ msg: 'Ticket not found' });
    }
    res.json(ticket);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};

const updateTicket = async (req, res) => {
  const id = req.params.id;
  const { title, description, priority, deadline } = req.body;
  try {
    let ticket = await Ticket.findById(id);
    if (!ticket) {
      return res.status(404).json({ msg: 'Ticket not found' });
    }

    // Check if the ticket was created by the authenticated user
    if (ticket.createdBy.toString() !== req.user.id) {
      return res.status(403).json({ msg: 'Not authorized to update this ticket' });
    }

    ticket.title = title;
    ticket.description = description;
    ticket.priority = priority;
    ticket.deadline = deadline;
    ticket.updatedAt = Date.now();

    await ticket.save();

    res.json(ticket);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};

const deleteTicket = async (req, res) => {
  const id = req.params.id;
  try {
    let ticket = await Ticket.findById(id);
    if (!ticket) {
      return res.status(404).json({ msg: 'Ticket not found' });
    }

    // Check if the ticket was created by the authenticated user
    if (ticket.createdBy.toString() !== req.user.id) {
      return res.status(403).json({ msg: 'Not authorized to delete this ticket' });
    }

    await ticket.remove();

    res.json({ msg: 'Ticket removed' });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};

module.exports = { createTicket, getTickets, getTicketById, updateTicket, deleteTicket };
