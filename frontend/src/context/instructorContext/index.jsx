import { courseCuriculumInitialFormData, courseLandingInitialFormData } from "@/config";
import { useState, createContext } from "react";

const InstructorContext = createContext(null);
export default InstructorContext;

export function InstructorProvider({ children }) {
  const [courseLandingFormData, setCourseLandingFormData] =
    useState(courseLandingInitialFormData);
  const [courseCurriculumFormData, setCourseCurriculumFormData] = useState(courseCuriculumInitialFormData);
  const [instructorCoursesList, setInstructorCoursesList] = useState([]);
  const [courseMediaProgress, setCourseMediaProgress] = useState(false);
  const [courseMediaProgressPercentage, setCourseMediaProgressPercentage] = useState(0);
  const [editSingleCourseData, setEditSingleCourseData] = useState(null);
  return (
    <InstructorContext.Provider
      value={{ courseLandingFormData, setCourseLandingFormData, courseCurriculumFormData, setCourseCurriculumFormData, instructorCoursesList, setInstructorCoursesList, courseMediaProgress, setCourseMediaProgress,courseMediaProgressPercentage, setCourseMediaProgressPercentage, editSingleCourseData, setEditSingleCourseData }}
    >
      {children}
    </InstructorContext.Provider>
  );
}
