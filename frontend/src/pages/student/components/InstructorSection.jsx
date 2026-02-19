export default function InstructorSection() {
  const instructors = ["Alex", "Sophia", "Michael"];

  return (
    <section className="py-16 border-indigo-500">
      <div className="container mx-auto px-6 text-center">
        
        <h2 className="text-3xl font-bold mb-8">Top Instructors</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {instructors.map((name, i) => (
            <div key={i} className="bg-muted p-6 rounded-xl shadow-md">
              
              <img
                src={`https://i.pravatar.cc/150?img=${i + 10}`}
                alt={name}
                className="w-24 h-24 rounded-full mx-auto"
              />

              <h3 className="mt-4 font-semibold">{name}</h3>
              <p className="text-sm text-muted-foreground">
                10+ years experience
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
