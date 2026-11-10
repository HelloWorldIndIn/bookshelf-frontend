import { UserPlus } from "lucide-react";
import { Button } from "../ui/button";
import { SignUpButton } from "@clerk/nextjs";

export default function UserSignUpButton() {
  return (
    <SignUpButton mode="modal">
      <Button variant="outline">
        <UserPlus data-icon="inline-start" />
        Sign Up
      </Button>
    </SignUpButton>
  );
}
