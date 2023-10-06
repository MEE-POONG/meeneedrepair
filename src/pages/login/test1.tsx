import Image from 'next/image'
import { Inter } from 'next/font/google'
import { signOut, useSession } from 'next-auth/react';

import { useEffect } from "react";
import Router from 'next/router';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { status, data } = useSession();
  console.log(status, data
  );

  useEffect(() => {
    if (status === "unauthenticated") Router.replace('/auth/signin')
  }, [status])


  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>



      <div
        className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left text-slate-50">

        <a
          type='button'
          onClick={() => signOut({ redirect: true, callbackUrl: '/auth/signin' })}

        >
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            LOGOUT
          </p>
        </a>




      </div>
    </main>
  )
}
