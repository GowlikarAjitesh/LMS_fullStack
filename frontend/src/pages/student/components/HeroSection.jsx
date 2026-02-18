import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="bg-linear-to-r from-indigo-600 to-purple-600 text-white py-20 h-full">
      <div className="container mx-auto px-6 grid md:grid-cols-2 items-center gap-10">
        
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Learn Without Limits
          </h1>

          <p className="mt-4 text-lg text-gray-200">
            Build skills with online courses from world-class instructors.
          </p>

          <Button className="mt-6 bg-white text-black hover:bg-gray-200">
            Explore Courses
          </Button>
        </div>

        <img
          src="https://images.unsplash.com/photo-1581092335397-9583eb92d232"
          alt="Learning"
          className="rounded-xl shadow-lg"
        />
      </div>
    </section>
  );
}
