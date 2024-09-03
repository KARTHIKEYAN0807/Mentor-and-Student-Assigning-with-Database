const Student = require('../models/student');

// Create a new student
exports.createStudent = async (req, res) => {
  try {
    const { name, email } = req.body;
    const student = new Student({ name, email });
    await student.save();
    res.status(201).json({ message: 'Student created', student });
  } catch (err) {
    res.status(500).json({ message: 'Error creating student', error: err });
  }
};

// Assign or change mentor for a student
exports.assignMentorToStudent = async (req, res) => {
  try {
    const { studentId, mentorId } = req.body;
    const student = await Student.findById(studentId);
    if (!student) return res.status(404).json({ message: 'Student not found' });

    const previousMentor = student.mentor;
    if (previousMentor) {
      student.previousMentors.push(previousMentor);
    }
    student.mentor = mentorId;
    await student.save();

    res.status(200).json({ message: 'Mentor assigned to student', student });
  } catch (err) {
    res.status(500).json({ message: 'Error assigning mentor', error: err });
  }
};

// Get the previous mentors for a student
exports.getPreviousMentorForStudent = async (req, res) => {
  try {
    const { studentId } = req.params;
    const student = await Student.findById(studentId).populate('previousMentors');
    if (!student) return res.status(404).json({ message: 'Student not found' });

    res.status(200).json({ previousMentors: student.previousMentors });
  } catch (err) {
    res.status(500).json({ message: 'Error retrieving previous mentors', error: err });
  }
};
