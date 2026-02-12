import { Button } from '@/components/ui/button'
import { Card, CardHeader,CardTitle, CardContent, CardAction } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { courseCuriculumInitialFormData } from '@/config'
import InstructorContext from '@/context/instructorContext'
import { FileInputIcon, Plus } from 'lucide-react'
import React, { useContext } from 'react'
import { file } from 'zod'

export default function CourseCurriculum() {
  const {courseCurriculumFormData, setCourseCurriculumFormData} = useContext(InstructorContext);

  function handleAddNewLecture(){
    setCourseCurriculumFormData([...courseCurriculumFormData, {...courseCuriculumInitialFormData,}]);
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle>Create Course Curriculum</CardTitle>
      </CardHeader>

      <CardContent>
        <Button onClick={handleAddNewLecture}> <Plus/> Add Lecture</Button>

        <div className='mt-4 space-y-4'>
          {
            courseCurriculumFormData.map((courseCuriculum, index) => (
              <div className='border p-5 rounded-md' key={index+1}>
                <div className='flex gap-5 items-center'>
                  <h3 className='font-semibold'>Lecture {index+1}</h3>
                  <Input name={`title ${index+1}`} placeholder="Enter Lecture title" className="max-w-96"/>
                  <div className='flex items-center space-x-2'>
                    <Switch checked={false} id={`freePreview ${index+1}`}/>
                      <Label htmlFor={`freePreview ${index+1}`}>Free Preview</Label>
                    {/* </Switch> */}
                  </div>
                </div>
                <div className="mt-6">
                  <Input type="file" accept="video/*"/>
                </div>
              </div>
            ))
          }
        </div>
      </CardContent>
    </Card>
  )
}
