// import { signIn, useSession } from "next-auth/react";
// import { useRouter } from "next/router";
// import { useEffect } from "react";

// export default function LoginPage() {
//     const { data: session } = useSession()
//     const router = useRouter()
//     useEffect(() => {
//         if (session) router.push("/login/test1");
//     })

//     return <>
//         <button className=" text-white" onClick={() => signIn('credentials', {
//             username: 'jsmith@example.com',
//             password: ''
//         })}>LOGIN</button>
//     </>
// }


// pages/auth/signin.js

import { useForm } from 'react-hook-form'
import { signIn } from 'next-auth/react'

export default function SignIn() {
  const { register, handleSubmit } = useForm()

  const onSignIn = async (data) => {
    await signIn('credentials', {
      username: data.username,
      password: data.password,
      redirect: false,
    })
  }

  return (
    <form onSubmit={handleSubmit(onSignIn)}>
      <label>
        Username
        <input type="text" {...register('username')} />
      </label>
      <label>
        Password
        <input type="password" {...register('password')} />
      </label>
      <button type="submit">Sign In</button>
    </form>
  )
}
