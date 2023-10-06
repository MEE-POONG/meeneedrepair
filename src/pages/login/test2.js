import { useSession, signIn, signOut } from 'next-auth/react'

function Home() {
  const { data: session } = useSession()

  return (
    <div className=' text-white'>
      {!session ? (
        <button onClick={() => signIn('credentials')}>Sign In</button>
      ) : (
        <>
          <p>Welcome, {session.user.username}!</p>
          <button onClick={() => signOut()}>Sign Out</button>
        </>
      )}
    </div>
  )
}

export default Home
