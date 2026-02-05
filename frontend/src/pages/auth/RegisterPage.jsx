import React, { useActionState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Link, useFormAction } from "react-router-dom"
import { registerFormActions } from './auth-actions'

export default function RegisterPage() {
    const[state, formAction, isPending] = useActionState(registerFormActions, {});
    console.log(JSON.stringify(state));
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-linear-to-br from-gray-900 via-gray-800 to-black">
      <Card className="w-100 shadow-xl border border-gray-700 bg-gray-900 text-white">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Create A New Account</CardTitle>
          <CardDescription className="text-center text-gray-400">
            Register to continue
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" action={formAction}>
            <div className="space-y-2">
              <Label htmlFor="username">username</Label>
              <Input
                id="username"
                type="text"
                name="username"
                placeholder="Enter a Unique username"
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-500"
              />
            </div>
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
            <div className="space-y-2">
              <Label htmlFor="password">Confirm Password</Label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="••••••••"
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-500"
              />
            </div>
            <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700">
              {isPending? "Registering...": "Register"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2 text-sm text-gray-400">
          <p className="text-center">
            Already have an account?{" "}
            <Link to="/auth/login" className="text-indigo-400 hover:underline">
              Login
            </Link>
          </p>
          {/* <p className="text-center">
            <Link to="/auth/forgot-password" className="hover:underline">
              Forgot password?
            </Link>
          </p> */}
        </CardFooter>
      </Card>
    </div>
  )
}
