import React, { useState } from "react";
import { Field } from "formik";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";

export default function PasswordInput({
  id,
  name,
  label,
  placeholder = "••••••••",
  required = true,
}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="space-y-2 relative">
      {label && <Label htmlFor={id}>{label}</Label>}
      <Field
        as={Input}
        id={id}
        name={name}
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        // required={required}
        className="bg-gray-800 border-gray-700 text-white placeholder-gray-500 pr-10"
      />
      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="absolute right-2 top-8 text-gray-400 hover:text-white"
      >
        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
      </button>
    </div>
  );
}