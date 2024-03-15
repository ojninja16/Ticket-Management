import React, { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TicketList from '../components/TicketList';
import CreateTicketForm from '../components/CreateTicketForm';
import { useAuth } from '../context/AuthContext';

function Tickets() {
  const { currentUser } = useAuth();
  const history = useNavigate();
  const [showCreateTicketModal, setShowCreateTicketModal] = useState(false);

  // Redirect to login if user is not authenticated
  if (!currentUser) {
    history.push('/login');
    return null;
  }

  // Open modal to create ticket
  const openCreateTicketModal = () => {
    setShowCreateTicketModal(true);
  };

  // Close modal
  const closeCreateTicketModal = () => {
    setShowCreateTicketModal(false);
  };

  // Handle ticket creation success
  const handleTicketCreationSuccess = () => {
    closeCreateTicketModal();
    toast.success('Ticket created successfully');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Ticket List</h2>
          <button onClick={openCreateTicketModal} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
            Create Ticket
          </button>
        </div>
        <TicketList />
      </div>
      {showCreateTicketModal && (
        <CreateTicketForm onClose={closeCreateTicketModal} onSuccess={handleTicketCreationSuccess} />
      )}
    </div>
  );
}

export default Tickets;
