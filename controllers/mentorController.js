const Mentor = require('../models/mentor');
const Student = require('../models/student');

// Create a new mentor
exports.createMentor = async (req, res) => {
  try {
    const { name, email } = req.body;
    const mentor = new Mentor({ name, email });
    await mentor.save();
    res.status(201).json({ message: 'Mentor created', mentor });
  } catch (err) {
    res.status(500).json({ message: 'Error creating mentor', error: err });
  }
};

// Assign multiple students to a mentor
exports.assignStudentsToMentor = async (req, res) => {
  try {
    const { mentorId, studentIds } = req.body;
    const mentor = await Mentor.findById(mentorId);
    if (!mentor) return res.status(404).json({ message: 'Mentor not found' });

    const students = await Student.find({ _id: { $in: studentIds }, mentor: null });
    students.forEach(async student => {
      student.mentor = mentorId;
      student.previousMentors.push(mentorId);
      await student.save();
    });
    mentor.students.push(...studentIds);
    await mentor.save();

    res.status(200).json({ message: 'Students assigned to mentor', mentor });
  } catch (err) {
    res.status(500).json({ message: 'Error assigning students', error: err });
  }
};

// Get all students assigned to a particular mentor
exports.getStudentsByMentor = async (req, res) => {
  try {
    const { mentorId } = req.params;
    const mentor = await Mentor.findById(mentorId).populate('students');
    if (!mentor) return res.status(404).json({ message: 'Mentor not found' });
    res.status(200).json({ students: mentor.students });
  } catch (err) {
    res.status(500).json({ message: 'Error retrieving students', error: err });
  }
};
