import React from "react";
import { Link } from "react-router-dom";
import { BookOpen } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card text-foreground py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link
              to="/"
              className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2"
            >
              <div className="bg-primary p-1.5 rounded-lg">
                <BookOpen className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold bg-linear-to-r from-foreground to-muted-foreground bg-clip-text text-transparent hidden sm:inline-block">
                LMS Portal
              </span>
            </Link>
            <p className="text-muted-foreground mt-4">
              Empowering learners worldwide with accessible, high-quality online
              education and expert mentorship.
            </p>
          </div>

          <div>
            <h3 className="text-foreground font-semibold mb-4">Platform</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/courses" className="hover:text-primary transition">
                  Browse Courses
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-primary transition">
                  Learning Paths
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-primary transition">
                  Certification
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-primary transition">
                  Pricing Plans
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-foreground font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-primary transition">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-primary transition">
                  Student Stories
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-primary transition">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-primary transition">
                  Community
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-foreground font-semibold mb-4">Newsletter</h3>
            <p className="text-muted-foreground mb-4 text-sm">
              Get the latest course updates and educational tips.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-input border-border text-foreground px-4 py-2 rounded-l-lg focus:ring-2 focus:ring-ring w-full"
              />
              <button
                type="submit"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-r-lg transition"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} EduStream LMS. All rights
            reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/" className="hover:text-foreground">
              Privacy Policy
            </Link>
            <Link to="/" className="hover:text-foreground">
              Terms of Service
            </Link>
            <Link to="/" className="hover:text-foreground">
              Cookie Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
