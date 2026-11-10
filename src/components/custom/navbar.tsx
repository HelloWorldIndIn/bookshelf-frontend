import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { GitBranch, LibraryBig, LogIn, LogInIcon, UserPlus } from "lucide-react";
import { Suspense } from "react";

export default function Navbar() {
  return (
    <header className="min-w-screen px-4 py-2 flex justify-between items-center fixed top-0">
      <div className="flex gap-2">
        <LibraryBig />
        <h1 className="font-bold">BookShelf</h1>
      </div>

      <div className="flex gap-2">
        <Suspense>
          <Show when="signed-out">
            <SignInButton mode="modal">
              <Button variant="outline">
                <LogInIcon data-icon="inline-start" /> 
                Sign In
              </Button>
            </SignInButton>

            <SignUpButton mode="modal">
              <Button variant="outline">
                <UserPlus data-icon="inline-start" />
                Sign Up
              </Button>
            </SignUpButton>
          </Show>

          <Show when="signed-in">
            <UserButton />
          </Show>
        </Suspense>
      </div>

    </header>
  );
}

import { Button } from "@/components/ui/button"

export function ButtonWithIcon() {
  return (
    <div className="flex gap-2">
      <Button variant="outline">
        <LogInIcon data-icon="inline-start" /> New Branch
      </Button>
      <Button variant="outline">
        Fork
        <GitBranch data-icon="inline-end" />
      </Button>
    </div>
  )
}
