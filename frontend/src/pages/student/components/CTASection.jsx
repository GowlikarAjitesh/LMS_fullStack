import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="py-20 bg-indigo-600 text-white text-center mb-20 mt-20">
      
      <h2 className="text-4xl font-bold">
        Start Learning Today
      </h2>

      <p className="mt-4 text-gray-200">
        Join thousands of learners from around the world.
      </p>

      <Button className="mt-6 bg-white text-black hover:bg-gray-200">
        Get Started
      </Button>
    </section>
  );
}
