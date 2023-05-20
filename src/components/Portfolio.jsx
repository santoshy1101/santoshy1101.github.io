import React from 'react'
import { portfolio_data } from '../all data/portfolio_data'
import { FaGithub } from 'react-icons/fa'
import { FiExternalLink } from 'react-icons/fi'

const Portfolio = () => {
  const portfolio = portfolio_data

  const handleDemo = (demo) => {
    window.open(demo)
  }

  const handleCode = (code) => {
    window.open(code)
  }
  return (
    <div
      name="projects"
      className="w-full h-full text-white "
    >
      <div className="flex flex-col justify-center  p-4 mx-auto xl:w-[80%] lg:w-[95%] ">
        <div className="pb-8">
          <p className="inline text-4xl font-bold border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="flex flex-col justify-center items-center gap-y-20 px-12   lg:w-[100%] md:w-[80%] xl:w-[100%] sm:w-[85%] w-[100%] m-auto">
          {portfolio.map(({ id, src, demo, code, tech_stacks,desc ,title},ind) => (
            <div
              key={ind}
              className="py-8    rounded-bl-[180px] rounded-tr-[190px] duration-1000  group cursor-pointer"
            >
            <p className='px-5 text-base font-semibold lg:text-3xl md:text-xl sm:text-lg '>{title}</p>
              <div className="flex flex-col items-center justify-between gap-4 px-16 py-8 text-center lg:flex-row sm:flex-col sm:gap-y-8 border-dotted border-2 border-sky-500 rounded-3xl">
              
                {/*   <div key={id} className="rounded-lg shadow-md shadow-gray-600">
              <img
              onClick={()=>window.open(demo)}
                src={src}
                alt="1"
                className="duration-200 rounded-md cursor-pointer "
              />

              <div className="flex items-center justify-center">
                <button onClick={()=>handleDemo(demo)}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button
                 onClick={()=>handleCode(code)} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button> 
              </div>
            </div>*/}
              
                <div
                  onClick={() => handleDemo(demo)}
                  className="cursor-pointer  lg:w-[40%] md:w-[80%] sm:w-[95%]   rounded-tr-[190px] flex justify-center items-center p-4   border-dashed  border-cyan-400 rounded-bl-[120px] "
                >
                  <img
                    src={src}
                    alt="1"
                    loading='lazy'
                    className="
                    group-hover:-scale-150
                    max-[500px]:group-hover:-scale-[2] lg:group-hover:-scale-150 group-hover:rotate-180 duration-1000  rounded-bl-[90px] group-hover:rounded-[5px]   "
                  />
                </div>
                <div className="  sm:w-[75%] lg:w-[25%]   px-6 py-4 rounded-[30px] text-center  border-double border-2 border-sky-500 shadow-cyan-500">
                  <p className="underline underline-offset-[6px]  font-bold decoration-2 text-xl mb-2">
                    {' '}
                    Summary
                  </p>
                  <p className=" text-[9.1px]   xl:text-[14.5px]  lg:text-[12px] tracking-wide text-left">
                    {desc}
                  </p>
                </div>
                <div className="sm:w-[75%] lg:w-[25%] flex flex-col sm:gap-8 ">
                  <p className="lg:text-lg text-[11px] font-bold sm:text-[12px]">Tech Stack Used :</p>
                  <div className="grid justify-center w-full grid-cols-4 gap-4 px-1 py-2 ">
                    {tech_stacks.map(({ id, src, title, style },ind) => {
                      return (
                        <div
                          key={ind}
                          title={title}
                          className={`    w-8 py-4 group-hover:-scale-125  cursor-pointer  ${style} rounded-tr-[90px] rounded-bl-[190px] group-hover:rotate-[900deg] duration-700`}
                        >
                          <div
                            className={`  hover:scale-105 duration-500 py-4 cursor-pointer   ${style} rounded-tr-[190px] rounded-bl-[90px]`}
                          >
                            <img
                              src={src}
                              alt={src}
                              className={`w-full cursor-pointer  `}
                            />
                          </div>
                        </div>
                      )
                    })}
                  </div>
                  <div className="grid grid-cols-2 gap-3 px-2 my-5 gap-x-2 ">
                    <div
                      className="flex justify-center px-4 py-1 text-2xl font-bold rounded-md cursor-pointer  border-dashed border-2 border-sky-500 text-slate-100 shadow-sky-500 hover:shadow-slate-700 "
                      title="Website"
                      onClick={()=>handleDemo(demo)}
                    >
                      <FiExternalLink />
                    </div>
                    <div
                      className="flex justify-center py-1 text-2xl font-bold rounded-md cursor-pointer hover:shadow-slate-700 x-4 text-slate-100 border-dashed border-2 border-sky-500 shadow-sky-500"
                      title="Github"
                      onClick={()=>handleCode(code)}
                    >
                      <FaGithub size={30} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio
