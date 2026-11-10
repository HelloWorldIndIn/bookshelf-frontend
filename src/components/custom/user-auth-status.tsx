import { Show } from "@clerk/nextjs";
import { Suspense } from "react";
import UserSignInButton from "./user-sign-in-button";
import UserSignUpButton from "./user-sign-up-button";
import UserAvatarButton from "./user-avatar-button";

export default function UserAuthStatus() {
  return (
    <div className="flex gap-2">
      <Suspense>
        <Show when="signed-out">
          <UserSignInButton />
          <UserSignUpButton />
        </Show>

        <Show when="signed-in">
          <UserAvatarButton />
        </Show>
      </Suspense>
    </div>
  );
}
