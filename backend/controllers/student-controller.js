const Course = require('../models/course');

const getAllCoursesToStudentView = async  (req, res) => {
    try {
        const {category=[], level=[], primaryLanguage=[], sortBy="price-lowToHigh"} = req.query;
        console.log(req.query);
        let filters = {};
        if(category && category.length){
            filters.category = {$in : category.split(",")};
        }
        if(level && level.length){
            filters.level = {$in : level.split(",")};
        }
        if(primaryLanguage && primaryLanguage.length){
            filters.primaryLanguage = {$in : primaryLanguage.split(",")};
        }
        console.log("filter= ",filters);

        let sort={};
        switch(sortBy){
            case 'price-lowToHigh':
                sort.pricing = 1;
                break;
            case 'price-highToLow':
                sort.pricing=-1;
                break;
            case 'title-aToZ':
                sort.title=1;
                break;
            case 'title-zToA':
                sort.title=-1;
                break;
            default:
                sort.pricing=1;

        }
        const coursesList = await Course.find(filters).sort(sort);
        if(!coursesList){
            return res.status(400).json({
                success: false,
                message: 'Courses fetching Failed'
            })
        }
        res.status(200).json({
            success: true,
            message: 'Courses fetched Successfully',
            data: coursesList
        })
    } catch (error) {
        console.log("student controller = ", error);
        res.status(500).json({
            success: false,
            message: 'Something went wrong'
        })
    }
}

const getSingleCourseToStudentView = async (req, res) => {
    try {
        const {id} = req.params;
        const singleCourse = await Course.findById(id);
        if(!singleCourse){
            return res.status(400).json({
                success: false,
                message: 'Course fetching Failed'
            })
        }
        res.status(200).json({
            success: true,
            message: 'Course fetched Successfully',
            data: singleCourse
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Something went wrong'
        })
    }
}

module.exports = {getAllCoursesToStudentView, getSingleCourseToStudentView};