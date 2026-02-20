import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";

export default function MyCoursesPage() {
  const courses = [
    {
      id: 1,
      title: "Complete MERN Stack Bootcamp",
      instructor: "Ajitesh Gowlikar",
      progress: 65,
      image: "https://source.unsplash.com/600x400/?coding",
    },
    {
      id: 2,
      title: "Mastering React for Modern Apps",
      instructor: "John Doe",
      progress: 30,
      image: "https://source.unsplash.com/600x400/?reactjs",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      
      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold">My Courses</h1>
        <p className="text-muted-foreground mt-2">
          Continue learning and track your progress.
        </p>
      </div>

      {/* Courses */}
      <div className="max-w-6xl mx-auto px-6 pb-16">
        {courses.length === 0 ? (
          <div className="text-center py-20 border border-border rounded-2xl">
            <p className="text-muted-foreground">
              You haven't enrolled in any courses yet.
            </p>
            <Button className="mt-4">Explore Courses</Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {courses.map((course) => (
              <Card
                key={course.id}
                className="flex flex-col md:flex-row overflow-hidden bg-card border-border"
              >
                
                {/* Image */}
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full md:w-56 h-48 object-cover"
                />

                {/* Content */}
                <CardContent className="flex-1 p-6 space-y-4">
                  
                  <div>
                    <h3 className="text-lg font-semibold line-clamp-2">
                      {course.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      by {course.instructor}
                    </p>
                  </div>

                  {/* Progress */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">
                        Progress
                      </span>
                      <span className="font-medium">
                        {course.progress}%
                      </span>
                    </div>
                    <Progress value={course.progress} />
                  </div>

                  <Button className="w-fit">
                    Continue Learning
                  </Button>

                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}