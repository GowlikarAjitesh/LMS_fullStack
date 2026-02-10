// src/components/Header.jsx
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "@/context/auth-context";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BookOpen, LogOut, User, LayoutDashboard, Search, Bell } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function Header() {
  const { isAuth, userDetails, setIsAuth, setUserDetails } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    setIsAuth(false);
    setUserDetails(null);
    navigate("/auth/login");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-gray-950/95 backdrop-blur supports-backdrop-filter:bg-gray-950/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        
        {/* Left Side: Logo */}
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-indigo-600 p-1.5 rounded-lg">
              <BookOpen className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-linear-to-r from-white to-gray-400 bg-clip-text text-transparent hidden sm:inline-block">
              LMS Portal
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-400">
            <Link to="/" className="hover:text-white transition-colors">Explore</Link>
            {isAuth && (
              <Link to="/my-courses" className="hover:text-white transition-colors">My Learning</Link>
            )}
          </nav>
        </div>

        {/* Middle: Search Bar (Hidden on mobile) */}
        <div className="hidden lg:flex flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              type="search"
              placeholder="Search for courses..."
              className="w-full bg-gray-900 border-gray-700 pl-9 text-white focus-visible:ring-indigo-600"
            />
          </div>
        </div>

        {/* Right Side: Auth Logic */}
        <div className="flex items-center gap-4">
          {isAuth ? (
            <>
              {/* Instructor Switcher */}
              {userDetails?.role === "instructor" ? (
                <Button variant="ghost" asChild className="hidden sm:flex text-gray-300 hover:text-white">
                  <Link to="/instructor">Instructor Dashboard</Link>
                </Button>
              ) : (
                <Button variant="ghost" className="hidden sm:flex text-gray-300 hover:text-white hover:bg-indigo-600 hover:cursor-pointer border-2">
                  Teach on LMS
                </Button>
              )}

              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white cursor-pointer hover:bg-transparent">
                <Bell className="h-5 w-5" />
              </Button>

              {/* User Dropdown */}
              <DropdownMenu >
                <DropdownMenuTrigger asChild className="cursor-pointer">
                  <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                    <Avatar className="h-10 w-10 border border-gray-700">
                      <AvatarImage src={userDetails?.avatar} alt={userDetails?.username} />
                      <AvatarFallback className="bg-indigo-600 text-white">
                        {userDetails?.username?.charAt(0).toUpperCase() || "U"}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 bg-gray-900 border-gray-700 text-gray-300">
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none text-white">{userDetails?.username}</p>
                      <p className="text-xs leading-none text-gray-500">{userDetails?.email}</p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator className="bg-gray-700" />
                  <DropdownMenuItem asChild className="cursor-pointer focus:bg-gray-800 focus:text-white">
                    <Link to="/profile"><User className="mr-2 h-4 w-4" /> Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="cursor-pointer focus:bg-gray-800 focus:text-white">
                    <Link to="/dashboard"><LayoutDashboard className="mr-2 h-4 w-4" /> Dashboard</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="bg-gray-700" />
                  <DropdownMenuItem 
                    onClick={handleLogout}
                    className="cursor-pointer text-red-400 focus:bg-red-900/20 focus:text-red-400"
                  >
                    <LogOut className="mr-2 h-4 w-4" /> Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <div className="flex items-center gap-2">
              <Button variant="ghost" asChild className="text-gray-300 hover:text-white">
                <Link to="/auth/login">Login</Link>
              </Button>
              <Button asChild className="bg-indigo-600 hover:bg-indigo-700 text-white">
                <Link to="/auth/register">Sign Up</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}