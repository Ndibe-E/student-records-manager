// controllers/studentController.js
import Student from "../models/student.js";

// Create a new student
export const createStudent = async (req, res) => {
    const { regNumber, fullName, email, department, level } = req.body;
  
  try {
    const student = await Student.create( regNumber, fullName, email, department, level);

    if (!book) {
    return res.status(400).json({
      status: false,
      message: "Could not create the book",
      data: null,
    });
  }

    res.status(201).json({
      status: true,
      message: 'Student created successfully',
      data: student,
    });
  }
   catch (error) {
    res.status(500).json({
      status: false,
      message: 'Error creating student',
      error: error.message,
    });
  }
};

// Get all students
export const getStudents = async (req, res) => {
  const LIMIT = 15;
  const page = parseInt(req.query.page) || 1;
  const offset = (page - 1) * LIMIT;
  try {
    const students = await Student.findAndCountAll({ limit: LIMIT, offset });

     if (students.count === 0) {
    return res.status(400).json({
      status: false,
      message: "Could not get the students",
      data: [],
    });
  }
    res.status(200).json({
      status: true,
      data:  {
      students: students.rows,
      total: students.count,
      pages: Math.ceil(students.count / LIMIT),
      page,
    },

    });
  } 
  catch (error) {
    res.status(500).json({
      status: false,
      message: 'Error fetching students',
      error: error.message,
    });
  }
};

// Get a student by ID
export const getStudentById = async (req, res) => {
  try {
    const student = await Student.findByPk(req.params.id);
    if (!student) {
      return res.status(404).json({
        status: false,
        message: 'Student not found',
      });
    }
    res.status(200).json({
      status: true,
      data: student,
    });
  } 
  catch (error) {
    res.status(500).json({
      status: false,
      message: 'Error fetching student',
      error: error.message,
    });
  }
};

// Update student details
export const updateStudent = async (req, res) => {
  try {
    const student = await Student.findByPk(req.params.id);
    
    if (!student) {
      return res.status(404).json({
        status: false,
        message: 'Student not found',
      });
    }
    await student.update(req.body);
    res.status(200).json({
      status: true,
      message: 'Student updated successfully',
      data: student,
    });
  } 
  catch (error) {
    res.status(500).json({
      status: false,
      message: 'Error updating student',
      error: error.message,
    });
  }
};

// Delete student
export const deleteStudent = async (req, res) => {
  try {
    const student = await Student.findByPk(req.params.id);
    if (!student) {
      return res.status(404).json({
        status: false,
        message: 'Student not found',
      });
    }
    await student.destroy();
    res.status(200).json({
      status: true,
      message: 'Student deleted successfully',
    });
  } 
  catch (error) {
    res.status(500).json({
      status: false,
      message: 'Error deleting student',
      error: error.message,
    });
  }
};