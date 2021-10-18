/* This example requires Tailwind CSS v2.0+ */
import React from 'react'
export const Content = ({children }) => {
  return (
    <main className="flex-1 relative overflow-y-auto focus:outline-none">
      <div className="">
        <div className="mx-auto">
          <div className="">
            <div className="mb-8 p-2 w-full flex flex-wrap">
              <div className="w-full md:w-full py-8 px-4 sm:px-10">                
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
