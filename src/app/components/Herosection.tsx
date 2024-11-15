import React from 'react'
import Image from "next/image";

const Herosection = () => {
  return (
          <div className='flex bg-black justify-center p-5 gap-120'>
          
               {/* Text Section */}
              <div className=' h-fit w-fit  w-600 items-center justify-evenly px-10 mt-20 md:w-1/2 md:py-10'>
                 <h1 className=" whitespace-nowrap font-bold ml-5 text-white text-6xl md:text-5xl">Governor Sindh</h1>
                 <h2 className=" whitespace-nowrap text-5xl md:text-3xl text-white font-bold ml-5">Kamran Khan Tessori</h2>
                 <p className=" whitespace-nowrap text-4xl text-blue-300 p-4 font-extrabold md:text-5xl">Certified Cloud
                  <br/> Applied Generative AI
                  <br/> Engineer (GenEng)</p>
                 <p className="text-3xl text-white p-2 m-2 font-semibold">Earn up to $5,000 / month</p>
                 <p className="pt-4 text-3xl p-2 m-2 text-white font-semibold">Now admissions are open in Hyderabad</p>
                 <button className="bg-[#39507c] text-white w-50px h-70px text-xl mt-09 cursor-pointer">Apply Now</button>
              </div>
          
             {/* image*/}
             <div className='w-600 h-600 pl-180 ml-100 '>
                <Image
                  src={"/kamran.png"}
                  alt="Governor Sindh"
                  width={1600}
                  height={1212}
                  objectFit='cover'
                  quality={100}
                />
            </div>
       </div>
    
  );
}

export default Herosection;
