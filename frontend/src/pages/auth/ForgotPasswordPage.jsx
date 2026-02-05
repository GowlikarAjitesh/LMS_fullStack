// src/pages/auth/ForgotPasswordPage.jsx
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Link } from "react-router-dom"

export default function ForgotPasswordPage() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-linear-to-br from-gray-900 via-gray-800 to-black">
      <Card className="w-100 shadow-xl border border-gray-700 bg-gray-900 text-white">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Reset Password</CardTitle>
          <CardDescription className="text-center text-gray-400">
            Enter your email to receive reset instructions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-500"
              />
            </div>
            <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700">
              Send Reset Link
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2 text-sm text-gray-400">
          <p className="text-center">
            Remembered your password?{" "}
            <Link to="/auth/login" className="text-indigo-400 hover:underline">
              Login
            </Link>
          </p>
          <p className="text-center">
            Don’t have an account?{" "}
            <Link to="/auth/register" className="text-indigo-400 hover:underline">
              Register
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}