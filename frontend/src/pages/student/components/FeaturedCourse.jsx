import CourseCard from "./CourseCard";

const courses = [
  {
    title: "Full Stack MERN Bootcamp",
    instructor: "John Doe",
    price: "₹499",
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159",
  },
  {
    title: "React Mastery",
    instructor: "Jane Smith",
    price: "₹399",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
  },
  {
    title: "Node.js Complete Guide",
    instructor: "David Lee",
    price: "₹599",
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd",
  },
  {
    title: "Data Structures & Algorithms",
    instructor: "Sarah Khan",
    price: "₹699",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
  },
];

export default function FeaturedCourses() {
  return (
    <section className="py-16 container mx-auto px-6">
      <h2 className="text-3xl font-bold mb-8">Featured Courses</h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        {courses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>
    </section>
  );
}
