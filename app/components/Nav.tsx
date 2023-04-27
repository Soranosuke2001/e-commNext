"use client";

import { Session } from "next-auth";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

export default function Nav({ user }: Session) {
  return (
    <nav className="flex justify-between items-center py-4">
      <h1>Styled</h1>
      <ul>

        {/* If the user does not exist, then render the sign in button */}
        {!user && (
          <li>
            <button onClick={() => signIn()}>Sign In</button>
          </li>
        )}

        {/* If the user does exist, then render the profile picture */}
        {user && (
          <li>
            <Image
              className="rounded-full"
              src={user.image as string}
              alt={`${user?.name as string}s profile picture`}
              width={48}
              height={48}
            />
          </li>
        )}
      </ul>
    </nav>
  );
}
