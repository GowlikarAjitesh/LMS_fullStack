// src/pages/Login.jsx
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Link, useNavigate } from "react-router-dom"
import PasswordInput from "@/components/PasswordInput"
import { loginFormActions } from "./auth-actions"
import { Formik, Form, Field, ErrorMessage } from "formik"
import { LoginSchema } from "@/common/yupSchema"
import { toast } from "react-toastify";
export default function LoginPage() {
  const navigate = useNavigate();
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-linear-to-br from-gray-900 via-gray-800 to-black">
      <Card className="w-100 shadow-xl border border-gray-700 bg-gray-900 text-white">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Welcome Back</CardTitle>
          <CardDescription className="text-center text-gray-400">
            Login in to continue
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Formik
            initialValues={{ credential: "", password: "" }}
            validationSchema={LoginSchema}
            onSubmit={async (values, { setSubmitting }) => {
              console.log("Form submitted:", values);
              setSubmitting(true);
              const response = await loginFormActions(values);
              if(response.success){
                toast.success(response.message || "Login successful!");
                cookieStore.set("token", response.token, { path: "/" }); // Store token in cookie
                navigate('/'); // Redirect to home page after successful login
              } else {
                toast.error(response.message || "Login failed. Please check your credentials and try again.");
              }
              setSubmitting(false);
            }}
          >
           {({ isSubmitting }) => (
                        <Form className="space-y-4">
                          {/* Username */}
                          <div className="space-y-2">
                            <Label htmlFor="usernameOrEmail">Username or Email</Label>
                            <Field
                              as={Input}
                              id="credential"
                              name="credential"
                              placeholder="Enter username or Email"
                              className="bg-gray-800 border-gray-700 text-white placeholder-gray-500"
                            />
                            <ErrorMessage name="credential" component="p" className="text-red-400 text-sm" />
                          </div>
                          {/* Password */}
                          <PasswordInput id="password" name="password" label="Password" />
                          <ErrorMessage name="password" component="p" className="text-red-400 text-sm" />
          
                          <Button type="submit" disabled={isSubmitting} className="w-full bg-indigo-600 hover:bg-indigo-700">
                            {isSubmitting ? "Logging In..." : "Login"}
                          </Button>
                        </Form>
                      )}
          </Formik>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2 text-sm text-gray-400">
          <p className="text-center">
            Don’t have an account?{" "}
            <Link to="/auth/register" className="text-indigo-400 hover:underline">
              Register
            </Link>
          </p>
          <p className="text-center">
            <Link to="/auth/forgot-password" className="hover:underline">
              Forgot password?
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}