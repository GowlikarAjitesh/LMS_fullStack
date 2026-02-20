import React, { createContext, useState } from 'react'

const StudentContext = createContext();
export default StudentContext;

export function StudentProvider({children}) {
    const [studentCoursesList, setStudentCoursesList] = useState([]);
  return (
    <StudentContext.Provider value={{studentCoursesList, setStudentCoursesList}}>{children}</StudentContext.Provider>
  )
}
