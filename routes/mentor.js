const express = require('express');
const router = express.Router();
const mentorController = require('../controllers/mentorController');

router.post('/create', mentorController.createMentor);
router.post('/assign-students', mentorController.assignStudentsToMentor);
router.get('/:mentorId/students', mentorController.getStudentsByMentor);

module.exports = router;
