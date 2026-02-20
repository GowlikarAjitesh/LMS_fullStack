import { Button } from '@/components/ui/button'
import { courseCategories } from '@/config'
import React from 'react'

export default function CourseCategory() {
  return (
    
    <section className="py-16 container mx-auto px-6">
        <h1 className="text-3xl font-bold mb-8">Course Categories</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
                  {
        courseCategories.map(categoryItem => 
            <Button className="justify-start text-xl font-semibold gap-2 m-2" variant='outline' key={categoryItem.id}>{categoryItem.label}</Button>
        )
      }
        </div>
    </section>
  )
}
