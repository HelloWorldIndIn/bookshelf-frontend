import { LogInIcon } from "lucide-react";
import { Button } from "../ui/button";
import { SignInButton } from "@clerk/nextjs";

export default function UserSignInButton() {
  return (
    <SignInButton mode="modal">
      <Button variant="outline">
        <LogInIcon data-icon="inline-start" /> 
        Sign In
      </Button>
    </SignInButton>
  );
}
