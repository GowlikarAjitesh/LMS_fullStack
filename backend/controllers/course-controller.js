const Course = require('../models/course');


const createNewCourseController = async (req, res) => {
    try {
        const courseDetails = req.body;
        if(!courseDetails){
            res.status(400).json({
                success: false,
                message: 'Course Details are Incorrect'
            })
        }
        const newlyCreatedCourse = await Course.create({
            ...courseDetails, 
  pricing: Number(req.body.pricing),
        });
        if(!newlyCreatedCourse){
            return res.status(400).json({
                success: false,
                message: 'Course creation Failed'
            })
        }
        res.status(201).json({
            success: true,
            message: 'Course Created Successfully',
            data: newlyCreatedCourse
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Something went wrong'
        })
    }
}


const getSingleCourseController = async (req, res) => {
    try {
        const {id} = req.params;
        if(!id){
            return res.status(400).json({
                success: false,
                message: 'Invalid Details'
            })
        }

        const courseDetails = await Course.findById(id);
        if(!courseDetails){
            return res.status(400).json({
                success: false,
                message: 'Course details cannot be retrieved'
            })
        }

        res.status(200).json({
            success: true,
            message: 'Course details retrieved successfully',
            data: courseDetails
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Something went wrong'
        })
    }
}

const getAlloursesController = async (req, res) => {
    try {
        const allCoursesList = await Course.find({});
        if(!allCoursesList){
            return res.status(400).json({
                success: false,
                message: 'Courses cannot be retrieved'
            })
        }
        res.status(200).json({
            success: true,
            message: 'Couses retrieved successfully',
            data: allCoursesList
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Something went wrong'
        })
    }
}

const updateCourseController = async (req, res) => {
    try {
        const {id} = req.params;

        if(!id){
            return res.status(400).json({
                success: false,
                message: 'Invalid Details'
            })
        }
        const courseDetails = req.body;
        if(!courseDetails){
            res.status(400).json({
                success: false,
                message: 'Course Details are Incorrect'
            })
        }

        const updatedCourseDetails = await Course.findByIdAndUpdate(id, courseDetails, 
  { new: true, runValidators: true });

        if(!updatedCourseDetails){
            res.status(400).json({
                success: false,
                message: 'Course Updation Failed'
            })
        }

        res.status(200).json({
            success: true,
            message: 'Course Updated Successfully',
            data: updatedCourseDetails
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Something went wrong'
        })
    }
}


const deleteCourseController = async (req, res) => {
    try {
        console.log('Delete functionality is not yet implemented...')
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Something went wrong'
        })
    }
}

module.exports = {createNewCourseController, getSingleCourseController, getAlloursesController, updateCourseController, deleteCourseController};