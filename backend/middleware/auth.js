const jwt = require('jsonwebtoken');

const auth = (roles = []) => {
  if (typeof roles === 'string') {
    roles = [roles];
  }

  return (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) return res.status(401).json({ message: 'Access denied. No token provided.' });

    try {
      // Expecting standard "Bearer <token>"
      const decoded = jwt.verify(token.replace('Bearer ', ''), process.env.JWT_SECRET);
      req.user = decoded;
      
      if (roles.length && !roles.includes(req.user.role)) {
        return res.status(403).json({ message: 'Forbidden. You do not have access.' });
      }

      next();
    } catch (ex) {
      res.status(400).json({ message: 'Invalid token.' });
    }
  };
};

module.exports = auth;
