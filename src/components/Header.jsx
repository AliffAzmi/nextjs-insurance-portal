'use client'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'

export const Header = () => {
  const { data: session } = useSession()
  if (!session) return
  return (
    <div className='h-[142px]'>
      <header>
        <nav className='flex flex-wrap items-center justify-between mx-auto p-4'>
          <div>
            <Link href='/dashboard' className='text-4xl'>
              Dashboard
            </Link>
          </div>
          <ul className='flex items-center gap-4'>
            <li>
              {session?.user?.name}{' '}
              <button onClick={() => signOut({ callbackUrl: '/' })}>
                Sign Out
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}
