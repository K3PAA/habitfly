import { withAuth } from '@kinde-oss/kinde-auth-nextjs/middleware'
import { NextRequest } from 'next/server'

export default withAuth(
  async function middleware(request: NextRequest) {
    console.log(request)
  },
  {
    // If not logged ( authenticated ), and won't to go to the page, then after log in then redirect on that page that we tried to go
    isReturnToCurrentPage: true,
  },
)

export const config = {
  matcher: [
    // Protect these specific routes instead of excluding everything
    '/habits/:path*',
    // Add other protected routes as needed
  ],
}
