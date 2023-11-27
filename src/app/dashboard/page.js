'use client'

import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { setUsersStore, getUsersStore } from '../store/users'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export default function Dashboard () {
  const [users, setUsers] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [showEmail, setShowEmail] = useState(0)

  const dispatch = useDispatch()
  const userStore = useSelector(getUsersStore)

  const getUsers = async () => {
    const res = await fetch(`/api/users?page=${currentPage}`)
    const result = await res.json()

    result.data = result?.data?.filter(user => {
      return (
        user.first_name.toLowerCase().startsWith('g') ||
        user.last_name.toLowerCase().startsWith('w')
      )
    })

    dispatch(setUsersStore(result?.data))
    setUsers(result?.data)
    setTotalPages(result.total_pages)
  }

  useEffect(() => {
    getUsers()
  }, [currentPage])

  const handlePageChange = direction => {
    setCurrentPage(prevPage =>
      direction === 'next' ? prevPage + 1 : prevPage - 1
    )
  }

  // console.log(userStore)

  return (
    <div className=' flex flex-col h-screen'>
      <Header />
      <main className='mb-auto h-10 p-4'>
        <h3 className=' text-lg font-semibold'>Users</h3>
        {users.length ? (
          users.map(({ id, email, first_name, last_name }) => {
            return (
              <div key={id}>
                <p className='flex justify-between'>
                  <span>
                    {first_name} {last_name}
                  </span>
                  {showEmail && showEmail === id ? (
                    <span>{email}</span>
                  ) : (
                    <span
                      className='text-blue-500 cursor-pointer'
                      onClick={() => setShowEmail(id)}
                    >{`${email.slice(0, 4)}.com`}</span>
                  )}
                </p>
              </div>
            )
          })
        ) : (
          <div className=' text-center'>
            <span>Empty</span>
          </div>
        )}
        <div className='mt-4 text-center'>
          <button
            className=' text-blue-400 disabled:text-gray-500'
            onClick={() => handlePageChange('prev')}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span>
            {' '}
            Page {currentPage} of {totalPages}{' '}
          </span>
          <button
            className=' text-blue-400 disabled:text-gray-500'
            onClick={() => handlePageChange('next')}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </main>
      <Footer />
    </div>
  )
}
