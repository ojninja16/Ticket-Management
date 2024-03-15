import React, { useEffect, useState } from 'react';
import api from '../services/api';

const TicketList = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await api.get('/tickets');
        setTickets(response.data);
      } catch (error) {
        console.error('Fetch tickets error:', error);
      }
    };

    fetchTickets();
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="px-4 py-5 sm:px-6">
        <h2 className="text-xl font-bold text-gray-900">Ticket List</h2>
      </div>
      <ul className="divide-y divide-gray-200">
        {tickets.map((ticket) => (
          <li key={ticket._id} className="px-4 py-4 hover:bg-gray-100">
            <div className="flex justify-between space-x-4">
              <div className="flex items-center space-x-4">
                <h3 className="text-lg font-bold text-gray-900 truncate">{ticket.title}</h3>
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                  {ticket.priority}
                </span>
              </div>
              <p className="text-gray-500 truncate">{ticket.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TicketList;
