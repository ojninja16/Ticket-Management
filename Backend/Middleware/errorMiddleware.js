const errorHandler = (err, req, res, next) => {
    // Check if the error is a known error with a status code
    if (err.statusCode) {
      return res.status(err.statusCode).json({ error: err.message });
    }
  
    // Handle mongoose validation errors
    if (err.name === 'ValidationError') {
      const errors = Object.values(err.errors).map((error) => error.message);
      return res.status(400).json({ error: errors });
    }
  
    // Handle JWT token errors
    if (err.name === 'JsonWebTokenError') {
      return res.status(401).json({ error: 'Invalid token' });
    }
  
    // Handle expired JWT token
    if (err.name === 'TokenExpiredError') {
      return res.status(401).json({ error: 'Token expired' });
    }
  
    // Handle other unknown errors
    console.error(err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
  };
  
  module.exports = errorHandler;
  