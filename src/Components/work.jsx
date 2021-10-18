import React, {useState, useContext} from "react";
import SideHoverComponent from "./shared/sideHover";

//Context
import AppContext from "../context/context";
import Projects from "../config/data/project";

/* This example requires Tailwind CSS v2.0+ */
export default function WorkComponent () {

      const {
        isOpenClicked,
        appState:{isOpen}
    } = useContext( AppContext )  
  
  const [selectedProject, setSelectedProject] = useState({})
  const OpenSideHover = ( a ) => { 
    
    console.log( 'before:', isOpen )  
      setSelectedProject(a)    
      isOpenClicked( true )
    console.log('after:',isOpen)    
      
  }

  return (
    <div className="mt-12 sm:mt-1">
      
      <div className="tag top-tags ml-4 lg:mt-28 md:mt-4 sm:mt-4 text-gray-600 text-sm">&lt; h2 &gt;</div>
      <div className="ml-8 mt-4 lg:text-6xl md:text-4xl sm:text-4xl xs:text-2xl font-black ">
        <h1 className="text-green-500">My Portfolio</h1>
      </div>
        <div className="tag top-tags ml-4 mt-4 text-gray-600 text-sm">&lt; h2 /&gt;</div>  
      <div className="tag top-tags ml-4 mt-4 text-gray-600 text-sm">&lt; p &gt;</div>
          <p className="text-gray-300 px-10">
            A small gallery of recent projects chosen by me.
            I've done them all together with amazing people from companies around the globe. It's only a drop in the ocean compared to the entire list.
            <br></br>
            Interested to see some more?  Visit <a className="text-green-400" rel="work" href="/work/">my work</a> page.
            </p>  
      <div className="tag top-tags ml-4 text-gray-600 text-sm">&lt; p /&gt;</div>
      
    <div className="tag top-tags ml-4 md:mt-4 sm:mt-4 text-gray-600 text-sm">&lt; Studio &gt;</div>
      
      
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {Projects.map((project) => (
            <div key={project.id} className="group relative text-center" >
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                  src={project.imgLogo}
                  alt={project.imageAlt}
                  
                  className="w-full h-full object-center object-fill lg:w-full lg:h-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-lg text-gray-400">
                      <span onClick={()=>{OpenSideHover(project)}} aria-hidden="true" className="absolute inset-0" />
                      {project.name}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="tag top-tags ml-4 mt-4 text-gray-600 text-sm">&lt; Studio /&gt;</div> 
      {( isOpen ) && ( <SideHoverComponent selectedProject={selectedProject} /> )}
    </div>
  )
}

//export default WorkComponent