const express = require('express');
const router = express.Router();
const authMiddleware = require('../Middleware/authMiddleware');
const {
  createTicket,
  getTickets,
  getTicketById,
  updateTicket,
  deleteTicket
} = require('../Controllers/ticketController');

// Create a new ticket
router.post('/', authMiddleware, createTicket);

// Get all tickets
router.get('/', authMiddleware, getTickets);

// Get ticket by ID
router.get('/:id', authMiddleware, getTicketById);

// Update a ticket
router.put('/:id', authMiddleware, updateTicket);

// Delete a ticket
router.delete('/:id', authMiddleware, deleteTicket);

module.exports = router;
