import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardAction,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { courseCuriculumInitialFormData } from "@/config";
import InstructorContext from "@/context/instructorContext";
import { FileInputIcon, Plus, Trash2 } from "lucide-react";
import React, { useContext, useState } from "react";
import { file } from "zod";
import { mediaUploadService } from "@/service/index";
import { div } from "framer-motion/client";
import MediaProgressBar from "@/components/mediaProgressLoader/MediaProgressBar";
import VideoPlayer from "@/components/videoPlayer/VideoPlayer";

export default function CourseCurriculum() {
  const {
    courseCurriculumFormData,
    setCourseCurriculumFormData,
    courseMediaProgress,
    setCourseMediaProgress,
    courseMediaProgressPercentage,
    setCourseMediaProgressPercentage,
  } = useContext(InstructorContext);

  function handleAddNewLecture() {
    setCourseCurriculumFormData([
      ...courseCurriculumFormData,
      { ...courseCuriculumInitialFormData },
    ]);
  }
  function handleInputChange(event, index) {
    let updateCurriculum = [...courseCurriculumFormData];
    updateCurriculum[index].title = event.target.value;
    setCourseCurriculumFormData(updateCurriculum);
    console.log(courseCurriculumFormData);
  }
  function handleToggleFreePreview(event, index) {
    console.log(event);
    let updateCurriculum = [...courseCurriculumFormData];
    updateCurriculum[index].freePreview = event;
    setCourseCurriculumFormData(updateCurriculum);
    console.log("Free preview = ", updateCurriculum[index].freePreview);
  }

  async function handleVideoUploadChange(event, index) {
    const selectedFile = event.target.files[0];
    console.log("This is selected video file = ", selectedFile);
    if (selectedFile) {
      const videoFormData = new FormData();
      videoFormData.append("file", selectedFile);
      try {
        setCourseMediaProgress(true);
        const result = await mediaUploadService(
          videoFormData,
          setCourseMediaProgressPercentage,
        );
        console.log(result.data);
        if (result.success) {
          console.log("Media uploaded successsfully...");
          let updateCurriculum = [...courseCurriculumFormData];
          updateCurriculum[index].public_id = result?.data?.public_id;
          updateCurriculum[index].videoUrl = result?.data?.playback_url;
          // updateCurriculum[index].videoUrl = result?.data?.url.replace('/upload/', '/upload/f_auto,q_auto/');
          setCourseCurriculumFormData(updateCurriculum);
        }
      } catch (error) {
      } finally {
        setCourseMediaProgress(false);
      }
    }
    console.log(courseCurriculumFormData);
    // console.log
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create Course Curriculum</CardTitle>
      </CardHeader>

      <CardContent>
        <Button onClick={handleAddNewLecture}>
          {" "}
          <Plus /> Add Lecture
        </Button>

        {courseMediaProgress ? (
          <div className="p-4">
            <MediaProgressBar
              isMediaUploading={courseMediaProgress}
              progress={courseMediaProgressPercentage}
            />
          </div>
        ) : null}
        <div className="mt-4 space-y-4">
          {courseCurriculumFormData.map((courseCuriculum, index) => (
            <div className="border p-5 rounded-md" key={index}>
              <div className="flex gap-5 items-center mb-4">
                <h3 className="font-semibold">Lecture {index + 1}</h3>

                <Input
                  placeholder="Enter Lecture title"
                  className="max-w-96"
                  value={courseCuriculum.title || ""}
                  onChange={(event) => handleInputChange(event, index)}
                />

                <div className="flex items-center space-x-2">
                  <Switch
                    checked={courseCuriculum.freePreview ?? false}
                    onCheckedChange={(value) =>
                      handleToggleFreePreview(value, index)
                    }
                  />
                  <Label>Free Preview</Label>
                </div>
              </div>

              {/* VIDEO SECTION */}
              <div className="mt-4">
                {courseCuriculum.videoUrl ? (
                  <div className="flex flex-col gap-3">
                    {/* <video
                      key={courseCuriculum.videoUrl}
                      width="450"
                      height="200"
                      controls
                      src={courseCuriculum.videoUrl}
                    /> */}
                    <VideoPlayer 
                    url={courseCuriculum.videoUrl} width="450px" height="200px"
                    />
                    <div className="flex gap-3">
                      <Button>Replace</Button>
                      <Button
                        className="bg-red-700"
                        onClick={() => {
                          let updated = [...courseCurriculumFormData];
                          updated[index].videoUrl = "";
                          updated[index].public_id = "";
                          setCourseCurriculumFormData(updated);
                        }}
                      >
                        <Trash2 /> Delete
                      </Button>
                    </div>
                  </div>
                ) : (
                  <Input
                    type="file"
                    accept="video/*"
                    onChange={(event) => handleVideoUploadChange(event, index)}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
