import jwt from 'jsonwebtoken';
import dotenv from "dotenv";


dotenv.config();

export const authenticateAdmin = (req, res, next) => {
  const { authorization } = req.headers;

  console.log("Authorization: ", authorization);
  if (!authorization) {
    return res.status(401).json({
      status: false,
      message: "Unauthorized. No Authorization header provided.",
      data: [],
    });
  }

  const token = authorization.split(' ')[1];

  if (!token) {
    return res.status(403).json({
      status: false,
      message: 'Access denied. No token provided.',
       data: []
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Check if the user is an admin
    if (decoded.role !== 'teacher') {
      return res.status(403).json({
        status: false,
        message: 'Access denied. You are not a Teacher.',
      });
    }

    req.user = decoded; 
    // Attach user info to the request object
    next();
  } catch (error) {
    res.status(401).json({
      status: false,
      message: 'Invalid token.',
    });
  }
};