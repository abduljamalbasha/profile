import React from "react";

const ProfileComponent = () => {
  return (
    <div className="mt-12">
      {/* <div className="grid grid-cols-3 lg:grid-col-3 sm:grid-col-1 md:grid-col-3"> */}
        <div className="lg:col-span-2 md:col-span-2" >
          <div className="tag top-tags text-gray-600 text-sm">&lt; Html &gt;</div>
            <div className="tag top-tags ml-4 mt-4 text-gray-600 text-sm">&lt; Body &gt;</div>
            <div className="tag top-tags ml-4 lg:mt-28 md:mt-4 sm:mt-4 text-gray-600 text-sm">&lt; h1 &gt;</div>
            <div className="ml-8 mt-4 lg:text-8xl md:text-6xl sm:text-6xl xs:text-4xl font-black ">
              <h1 className="text-transparent bg-gradient-to-r bg-clip-text from-green-500 via-pink-500 to-pink-600">Hi,</h1>
              <h1 className="text-transparent bg-gradient-to-r bg-clip-text from-green-500 via-pink-500 to-pink-600">I'm, Jamal</h1>
              <h1 className="text-transparent bg-gradient-to-r bg-clip-text from-green-500 via-pink-500 to-pink-600">Web Developer</h1>

            </div>
            <div className="tag top-tags ml-4 mt-4 text-gray-600 text-sm">&lt; h1 /&gt;</div>
            <div className="tag top-tags ml-4 mt-4 text-gray-600 text-sm">&lt; p &gt;</div>
              <p className="text-gray-400 ml-8 text-3xl md:text-2xl sm:text-2xl ">Full Stack Developer</p>
            <div className="tag top-tags ml-4 text-gray-600 text-sm">&lt; p /&gt;</div>
            <button className="hover:text-black text-green-300 mt-3 px-10 py-2 md:px-10 md:py-2 sm:px-6 sm:py-1 border border-green-400 rounded hover:bg-green-300">Contact Me</button>

            <div className="text-gray-400 float-right mt-20 text-lg lg:block md:hidden sm:hidden">
              <svg className=" animate-bounce h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M16 17l-4 4m0 0l-4-4m4 4V3" />
              </svg>
            </div>
      </div>  
      
    </div>
  )
}

export default ProfileComponent