import { Login } from '@/components/Login'

export default function Home () {
  return (
    <main className='flex h-screen flex-col items-center justify-between p-1'>
      <div className='container mx-auto h-full flex justify-center items-center'>
        <Login />
      </div>
    </main>
  )
}
