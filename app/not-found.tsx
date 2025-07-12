"use client"

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Shield } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <div className="text-center space-y-6">
        <div className="flex items-center justify-center mb-8">
          <Shield className='w-12 h-12 mr-3 text-blue-500' />
          <h1 className='text-3xl font-bold text-gray-900'>Expensio</h1>
        </div>
        
        <div className="space-y-4">
          <h2 className="text-6xl font-bold text-gray-300">404</h2>
          <h3 className="text-2xl font-semibold text-gray-900">Page Not Found</h3>
          <p className="text-gray-600 max-w-md mx-auto">
            Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or you entered the wrong URL.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button variant="default">
              Go Home
            </Button>
          </Link>
          <Button 
            variant="outline" 
            onClick={() => window.history.back()}
          >
            Go Back
          </Button>
        </div>
      </div>
    </div>
  )
} 