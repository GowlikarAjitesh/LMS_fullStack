import { courseCuriculumInitialFormData, courseLandingInitialFormData } from "@/config";
import { useState, createContext } from "react";

const InstructorContext = createContext(null);
export default InstructorContext;

export function InstructorProvider({ children }) {
  const [courseLandingFormData, setCourseLandingFormData] =
    useState(courseLandingInitialFormData);
  const [courseCurriculumFormData, setCourseCurriculumFormData] = useState(courseCuriculumInitialFormData);
  return (
    <InstructorContext.Provider
      value={{ courseLandingFormData, setCourseLandingFormData, courseCurriculumFormData, setCourseCurriculumFormData }}
    >
      {children}
    </InstructorContext.Provider>
  );
}
