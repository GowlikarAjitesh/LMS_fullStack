import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Edit, Plus, Trash2 } from "lucide-react";
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Form, Link, useNavigate } from "react-router-dom";

export default function InstructorCourses() {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([
    { id: 1, title: "Java Programming", students: 10, revenue: 1000 },
    { id: 2, title: "React Mastery", students: 25, revenue: 3500 },
  ]);

  const [open, setOpen] = useState(false);
  const [editingCourse, setEditingCourse] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    students: "",
    revenue: "",
  });

  const handleOpenAdd = () => {
    setEditingCourse(null);
    setFormData({ title: "", students: "", revenue: "" });
    setOpen(true);
  };

  const handleEdit = (course) => {
    setEditingCourse(course);
    setFormData(course);
    setOpen(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this course?")) {
      setCourses(courses.filter((course) => course.id !== id));
    }
  };

  const handleSubmit = () => {
    if (!formData.title) return;

    if (editingCourse) {
      // Update
      setCourses(
        courses.map((course) =>
          course.id === editingCourse.id ? { ...formData } : course
        )
      );
    } else {
      // Add
      const newCourse = {
        ...formData,
        id: Date.now(),
      };
      setCourses([...courses, newCourse]);
    }

    setOpen(false);
  };

  function handleAddNewCourse(){
    navigate('/instructor/newCourse')
  }

  return (
    <div className="flex flex-col gap-2">
    <Card>
      <CardHeader className="flex justify-between flex-row items-center">
        <CardTitle className="text-3xl font-extrabold">
          All Courses
        </CardTitle>
        <Button onClick={handleAddNewCourse}>
          <Plus className="h-4 w-4" />
          Add New
          </Button>
      </CardHeader>
</Card>
<Card>
      <CardContent className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Course Name</TableHead>
              <TableHead>Students</TableHead>
              <TableHead>Revenue</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {courses.map((course) => (
              <TableRow key={course.id}>
                <TableCell className="font-medium">
                  {course.title}
                </TableCell>
                <TableCell>{course.students}</TableCell>
                <TableCell>${course.revenue}</TableCell>

                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleEdit(course)}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>

                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-red-500"
                      onClick={() => handleDelete(course.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>

      {/* Add / Edit Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {editingCourse ? "Edit Course" : "Add Course"}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-4 mt-4">
            <Input
              placeholder="Course Title"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
            />

            <Input
              type="number"
              placeholder="Students"
              value={formData.students}
              onChange={(e) =>
                setFormData({ ...formData, students: e.target.value })
              }
            />

            <Input
              type="number"
              placeholder="Revenue"
              value={formData.revenue}
              onChange={(e) =>
                setFormData({ ...formData, revenue: e.target.value })
              }
            />

            <Button className="w-full" onClick={handleSubmit}>
              {editingCourse ? "Update Course" : "Add Course"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </Card>
    </div>
  );
}
