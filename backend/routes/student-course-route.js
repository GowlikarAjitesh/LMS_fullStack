const express = require('express');
const { getAllCoursesToStudentView, getSingleCourseToStudentView } = require('../controllers/student-controller');
const authMiddleware = require('../middleware/auth-middleware');

const router = express.Router();

router.get('/get', authMiddleware, getAllCoursesToStudentView);
router.get('/get/:id', authMiddleware, getSingleCourseToStudentView);

module.exports = router;