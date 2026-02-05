// src/pages/Login.jsx
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Link } from "react-router-dom"
import { useActionState } from "react"
import { loginFormActions } from "./auth-actions"

export default function LoginPage() {
  const [state, formAction, isPending] = useActionState(loginFormActions, {});
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
          <form className="space-y-4" action={formAction}>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="you@example.com"
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-500"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                name="password"
                placeholder="••••••••"
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-500"
              />
            </div>
            <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700">
              {isPending ? 'Logining in ...' : 'Login'}
            </Button>
          </form>
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