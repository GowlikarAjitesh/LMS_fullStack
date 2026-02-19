import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export default function CourseCard({ title, instructor, price, image }) {
  return (
    <Card className="hover:shadow-xl transition duration-300 cursor-pointer bg-card text-card-foreground">
      
      <img
        src={image}
        alt={title}
        className="rounded-t-lg h-40 w-full object-cover"
      />

      <CardContent className="p-4">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-sm">{instructor}</p>

        <div className="flex items-center gap-1 mt-2 text-yellow-500">
          <Star size={16} fill="currentColor" />
          <span className="text-sm">4.5</span>
        </div>

        <p className="mt-3 font-bold">{price}</p>
      </CardContent>
    </Card>
  );
}
