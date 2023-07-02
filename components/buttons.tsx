'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';

export function SignInButton() {
  const { data: session, status } = useSession();
  console.log(session, status);

  if (status === 'loading') {
    return <>Loading...</>
  }

  if (status === 'authenticated') {
    return (
      <Link href="/dashboard">
          <Image src={session.user?.image ?? '/mememan.webp'} alt={session.user?.name ?? 'Your name'} width={32} height={32} />
      </Link>
    );
  }

  return (
    <button onClick={() => signIn()}>Sign In</button>
  );
}

export function SignOutButton() {
  return (
    <button onClick={() => signOut()}>Sign Out</button>
  );
}
