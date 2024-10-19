module.exports = (req, res, next) => {
    const userRole = req.user.role; 
    if (userRole !== 'Admin') {
      return res.status(403).json({ message: 'Access denied: Only admins can perform this action.' });
    }
    next(); 
  };
  