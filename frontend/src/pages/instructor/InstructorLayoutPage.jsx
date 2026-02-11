import { BarChart, Book, LogOut } from "lucide-react";
import React, { useState } from "react";
import InstructorDashboard from "@/pages/instructor/components/InstructorDashboard";
import InstructorCourses from "@/pages/instructor/components/InstructorCourses";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent } from "@/components/ui/tabs";

export default function InstructorLayoutPage() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const menuItems = [
    {
      icon: BarChart,
      label: "Dashboard",
      value: "dashboard",
      element: <InstructorDashboard></InstructorDashboard>,
    },
    {
      icon: Book,
      label: "Courses",
      value: "courses",
      element: <InstructorCourses></InstructorCourses>,
    },
  ];
  return (
    <div className="flex flex-col min-h-screen">
      <aside className="w-64 shadow-md hidden md:block">
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-4">Instructor View</h2>
          <nav>
            {menuItems.map((item) => (
              <Button
                className="w-full justify-start mb-2"
                onClick={() => setActiveTab(item.value)}
              >
                <item.icon className="mr-2 h-4 w-4"></item.icon>
                {item.label}
              </Button>
            ))}
          </nav>
        </div>
      </aside>

      <main className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl">Dashboard</h1>
          <Tabs value={activeTab} onValueChanage={setActiveTab}>
            {
              menuItems.map(item => <TabsContent>
                {
                  item.component !== null ? item.component : null
                }
              </TabsContent>)
            }
          </Tabs>
        </div>
      </main>
    </div>
  );
}
