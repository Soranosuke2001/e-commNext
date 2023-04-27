"use client";

import { FC } from 'react'

import { Session } from 'next-auth'
import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image';

// The type is overwriting the Session type from next-auth since the prop was complaining about the expires property
type NavProps = Omit<
    Session,
    "expires"
> & {
    expires: string | undefined | null
}

const Nav: FC<NavProps> = ({ user }) => {
    return (
      <nav>
          <h1>NavBar Component</h1>
          <ul>
            <li>Products</li>

            {/* If the user is not signed in, then render a Sign In button */}
            {!user && (
                <li>
                    <button onClick={() => signIn()}>Sign In</button>
                </li>
            )}

            {/* If the user exits, render the user image from google */}
            {user && (
                <li>
                    <Image src={user?.image as string} alt={`${user?.name as string}s profile picture`} width={48} height={48} />
                </li>
            )}
          </ul>
      </nav>
    )
}

export default Nav