import HeroSection from "@/pages/student/components/HeroSection";
import FeaturedCourses from "@/pages/student/components/FeaturedCourse";
import InstructorSection from "@/pages/student/components/InstructorSection";
import CTASection from "@/pages/student/components/CTASection";
import CourseCategory from "./components/CourseCategory";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CourseCategory/>
      <FeaturedCourses />

      <InstructorSection />
      <CTASection />
    </>
  );
}
