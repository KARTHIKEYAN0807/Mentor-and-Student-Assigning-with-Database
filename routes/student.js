const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

router.post('/create', studentController.createStudent);
router.post('/assign-mentor', studentController.assignMentorToStudent);
router.get('/:studentId/previous-mentors', studentController.getPreviousMentorForStudent);

module.exports = router;
