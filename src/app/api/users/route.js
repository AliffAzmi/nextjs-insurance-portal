import { NextResponse } from 'next/server'
export async function GET (req) {
  const { searchParams } = new URL(req.url)
  const page = searchParams.get('page') || 1

  try {
    const response = await fetch(`https://reqres.in/api/users?page=${page}`)
    const result = await response.json()
    const responseData = {
      page: result.page,
      per_page: result.per_page,
      total: result.total,
      total_pages: result.total_pages,
      data: result?.data || []
    }
    return NextResponse.json(responseData)
  } catch (error) {
    return NextResponse.status(500).json({ message: 'Something went wrong' })
  }
}
