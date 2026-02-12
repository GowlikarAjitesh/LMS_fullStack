import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { AppWindowIcon, LucideBookText, Settings } from 'lucide-react'
import CourseCurriculum from './components/courses/addNewCourse/CourseCurriculum'
import CourseLanding from './components/courses/addNewCourse/CourseLanding'
import CourseSettings from './components/courses/addNewCourse/CourseSettings'
export default function AddNewCoursePage() {
  return (
    <div className='container mx-auto p-4'>
      <div className='flex justify-between rounded-2xl items-center mb-5'>
        <h1 className='text-3xl font-extrabold mb-5'>Create a New Course</h1>
        <Button className="text-sm tracking-wider font-bold px-8">Submit</Button>
      </div>
      <Card>
        <CardContent>
          <div className='container mx-auto p-4'>
            <Tabs defaultValue="Curriculum" className='space-y-4'>
              <TabsList>
                <TabsTrigger value="curriculum"><LucideBookText/>curriculum</TabsTrigger>
                <TabsTrigger value="course-landing-page"><AppWindowIcon/>preview</TabsTrigger>
                <TabsTrigger value="settings"><Settings/>settings</TabsTrigger>
              </TabsList>
              <TabsContent value="curriculum">
                <CourseCurriculum/>
              </TabsContent>



              <TabsContent value="course-landing-page">
                <CourseLanding/>
              </TabsContent>


              <TabsContent value="settings">
                <CourseSettings/>
              </TabsContent>
            </Tabs>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
