
import React, {useState} from 'react'
// import apiKey from "../config/emailkey";
import ModalComponent from './shared/modal';

export default function ContactUsComponent () {
  const [emailInfo, setEmailInfo] = useState( { name: "", email: "" , subject:"", phone:"", message:""} )
  const [mailSent, setMailSent] = useState(false)

const formSubmit = (e) => {
  e.preventDefault();
  setMailSent(true)
};

  return (
    <div className="min-h-screen">
      <main>
        {/* Contact Section */}
        <div className="relative">
          <div className="lg:absolute lg:inset-0">
            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
              <img
                className="h-56 w-full object-cover lg:absolute lg:h-full"
                src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
                alt=""
              />
            </div>
          </div>
          <div className="relative px-4 py-8 lg:grid lg:grid-cols-2">
            <div className="lg:pr-8">
              <div className="mx-auto lg:mx-0">
                 <div className="tag top-tags text-gray-600 text-sm">&lt; h2 &gt;</div>
                  <div className="lg:text-6xl md:text-4xl sm:text-4xl xs:text-2xl font-black ">
                    <h1 className="text-green-500">Contact Me</h1>
                  </div>
                <div className="tag top-tags mt-4 text-gray-600 text-sm">&lt; h2 /&gt;</div>  
                <div className="tag top-tags mt-4 text-gray-600 text-sm">&lt; Form &gt;</div>
                <form className="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8 text-white" method="post" onSubmit={formSubmit}>
                  <div>
                    <label htmlFor="Name" className="block text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="Name"
                        id="Name"
                        required
                        autoComplete="given-name"
                        onChange={e => setEmailInfo({ ...emailInfo, name: e.target.value}) }
                        className="block w-full p-3 bg-transparent border-b shadow-sm sm:text-sm focus:ring-grape-500 focus:border-grape-500 border-gray-300"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        onChange={e => setEmailInfo({ ...emailInfo, email: e.target.value}) }
                        className="block w-full p-3 bg-transparent shadow-sm border-b sm:text-sm focus:ring-grape-500 focus:border-grape-500 border-gray-300"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                      Subject
                    </label>
                    <div className="mt-1">
                      <input
                        id="subject"
                        name="subject"
                        type="subject"
                        required
                        autoComplete="subject"
                        onChange={e => setEmailInfo({ ...emailInfo, subject: e.target.value}) }
                        className="block w-full p-3  bg-transparent shadow-sm sm:text-sm focus:ring-grape-500 focus:border-grape-500 border-gray-300 border-b"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <div className="flex justify-between">
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                        Phone
                      </label>
                      <span id="phone-description" className="text-sm text-gray-500">
                        Optional
                      </span>
                    </div>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        required
                        autoComplete="tel"
                        aria-describedby="phone-description"
                        onChange={e => setEmailInfo({ ...emailInfo, phone: e.target.value}) }
                        className="block w-full p-3  bg-transparent shadow-sm sm:text-sm focus:ring-grape-500 focus:border-grape-500 border-gray-300 border-b"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <div className="flex justify-between">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                        Meessage
                      </label>
                      <span id="message-description" className="text-sm text-gray-500">
                        Max. 500 characters
                      </span>
                    </div>
                    <div className="mt-1">
                      <textarea
                        id="message"
                        name="message"
                        aria-describedby="message-description"
                        rows={4}
                        required
                        className="block w-full shadow-sm bg-transparent sm:text-sm focus:ring-green-500 focus:border-green-500 border-gray-300 border-b "
                        onChange={e => setEmailInfo({ ...emailInfo, message: e.target.value}) }
                        defaultValue={''}
                      />
                    </div>
                  </div>
                  <div className="text-right sm:col-span-2">
                    <button
                      type="submit"
                      className="hover:text-black text-green-300 mt-3 px-10 py-2 md:px-10 md:py-2 sm:px-6 sm:py-1 border border-green-400 rounded hover:bg-green-300"
                    >
                      Submit
                    </button>
                  </div>
                </form>
                <div className="tag top-tags mt-4 text-gray-600 text-sm">&lt; Form /&gt;</div>  
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="tag top-tags ml-4 mt-4 text-gray-600 text-sm">&lt; Body /&gt;</div>
      <div className="tag top-tags ml-4 mt-4 text-gray-600 text-sm">&lt; Html /&gt;</div>
      {(mailSent) && (<ModalComponent modalOpen={mailSent} emailInfo={emailInfo}></ModalComponent>)} 
    </div>
  )
}
