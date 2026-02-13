import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import InstructorContext from "@/context/instructorContext";
import { mediaUploadService } from "@/service";
import React, { useContext } from "react";
import MediaProgressBar from "@/components/mediaProgressLoader/MediaProgressBar";

export default function CourseSettings() {
  const {
    courseLandingFormData,
    setCourseLandingFormData,
    courseMediaProgress,
    courseMediaProgressPercentage,
    setCourseMediaProgress,
    setCourseMediaProgressPercentage,
  } = useContext(InstructorContext);
  async function handleImageChange(event) {
    const selectedImage = event.target.files[0];

    if (!selectedImage) return;

    const imageFormData = new FormData();
    imageFormData.append("file", selectedImage);

    try {
      setCourseMediaProgress(true);
      const result = await mediaUploadService(
        imageFormData,
        setCourseMediaProgressPercentage,
      );

      if (result.success) {
        setCourseLandingFormData((prev) => ({
          ...prev,
          image: result.data.url,
        }));
      }
    } catch (error) {
      console.log("Error:", error);
    } finally {
      setCourseMediaProgress(false);
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Course Settings</CardTitle>
      </CardHeader>

      {courseMediaProgress ? (
        <div className="p-4">
          <MediaProgressBar
            isMediaUploading={courseMediaProgress}
            progress={courseMediaProgressPercentage}
          />
        </div>
      ) : null}

      <CardContent>
        {courseLandingFormData.image ? (
          <div className="relative w-full max-w-md">
            <img
              src={courseLandingFormData.image}
              alt="Course"
              className="w-full h-56 object-cover rounded-lg shadow-md border"
            />
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            <Label>Upload Course Image</Label>
            <Input
              type="file"
              accept="image/*"
              className="mb-4"
              onChange={(event) => handleImageChange(event)}
            />
          </div>
        )}
      </CardContent>
    </Card>
  );
}
