import React, { useContext } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { AppWindowIcon, LucideBookText, Settings } from "lucide-react";
import CourseCurriculum from "./components/courses/addNewCourse/CourseCurriculum";
import CourseLanding from "./components/courses/addNewCourse/CourseLanding";
import CourseSettings from "./components/courses/addNewCourse/CourseSettings";
import InstructorContext from "@/context/instructorContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createCourseService } from "@/service";
import {
  courseCuriculumInitialFormData,
  courseLandingInitialFormData,
} from "@/config";
import AuthContext from "@/context/auth-context";
export default function AddNewCoursePage() {
  const { userDetails } = useContext(AuthContext);
  const {
    courseLandingFormData,
    setCourseLandingFormData,
    courseCurriculumFormData,
    setCourseCurriculumFormData,
  } = useContext(InstructorContext);

  console.log("user details from addnew course: ", userDetails);
  console.log("courseCuriculum = ", courseCurriculumFormData);
  const navigate = useNavigate();
  function isEmpty(value) {
    if (Array.isArray(value)) return value.length === 0;
    return value === "" || value === null || value === undefined;
  }

  function validateFormData() {
    for (const key in courseLandingFormData) {
      if (isEmpty(courseLandingFormData[key])) {
        console.log("error from course landing form data");
        return false;
      }
    }

    let hasFreePreview = false;
    for (const item of courseCurriculumFormData) {
      if (
        isEmpty(item.title) ||
        isEmpty(item.public_id) ||
        isEmpty(item.videoUrl)
      ) {
        console.log("error from course curriculum form data");
        return false;
      }
      if (item?.freePreview) {
        hasFreePreview = item?.freePreview;
      }
    }
    console.log("hasfree preview = ", hasFreePreview);
    return hasFreePreview;
  }

  async function handleFormSubmit() {
    const formData = {
      instructor: {
        instructorId: userDetails?.id,
        instructorName: userDetails?.username,
        instructorEmail: userDetails?.email,
      },
      ...courseLandingFormData,
      pricing: Number(courseLandingFormData.pricing),
      students: [],
      curriculum: courseCurriculumFormData,
      isPublished: true,
    };
    console.log(JSON.stringify(formData, null, 2));

    const result = await createCourseService(formData);
    if (result.success) {
      toast.success(result.message);
      setCourseCurriculumFormData(courseCuriculumInitialFormData);
      setCourseLandingFormData(courseLandingInitialFormData);
      navigate(-1);
    } else {
      toast.error(result.message);
    }
  }

  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader className="flex justify-between rounded-2xl items-center mb-5">
          <CardTitle className="text-3xl font-extrabold mb-5">
            Create a New Course
          </CardTitle>
          <Button
            disabled={!validateFormData()}
            onClick={handleFormSubmit}
            className="text-sm tracking-wider font-bold px-8"
          >
            Submit
          </Button>
        </CardHeader>
        <CardContent>
          <div className="container mx-auto p-4">
            <Tabs defaultValue="Curriculum" className="space-y-4">
              <TabsList>
                <TabsTrigger value="curriculum">
                  <LucideBookText />
                  Curriculum
                </TabsTrigger>
                <TabsTrigger value="course-landing-page">
                  <AppWindowIcon />
                  Course Landing
                </TabsTrigger>
                <TabsTrigger value="settings">
                  <Settings />
                  Settings
                </TabsTrigger>
              </TabsList>
              <TabsContent value="curriculum">
                <CourseCurriculum />
              </TabsContent>

              <TabsContent value="course-landing-page">
                <CourseLanding />
              </TabsContent>

              <TabsContent value="settings">
                <CourseSettings />
              </TabsContent>
            </Tabs>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
