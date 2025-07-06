import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { Home } from "lucide-react";
function NotFound() {
  return (
    <main className="grid min-h-[100vh] place-items-center px-8">
      <div className="text-center">
        <p className="text-9xl font-semibold text-primary">404</p>
        <h1 className="mt-4 text-2xl font-bold tracking-tight sm:text-5xl">
          page not found
        </h1>
        <p className="mt-6 text-lg leading-7">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
          <Button asChild size="lg">
            <Link to="/">
              <Home className="h-5 w-5" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}

export default NotFound;
