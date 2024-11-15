import React from 'react';
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <main className=" bg-blue-950 flex sticky top-0  justify-between items-center m-auto w-full h-full px-4  md:h-20 lg:w-90 xl:w-1300px ">
        <div className=" m-10 h-10 w-50%  items-center justify-between  ">
            {/*Logo*/}
            <Link href={"/"}>
           <Image
           src={"/logo.g.png"}
           alt='Logo'
           width={90}
           height={113}
           className='mt-09 w-70px '
           />
            </Link>
        </div>
          {/* Heading*/}
          <div className="justify-evenly items-end py-6 px-3 ">
                 <h3 className="text-blue-200 font-serif font-bold text-2xl ">
                     Tuition Free Education Program
                  </h3>
                </div>
                {/* Nav */}
                <nav>
                  <ul className="flex justify-center text-white text-right items-center ">
                    <li className="px-4">
                        <a href="#">Home</a>
                    </li>
                    <li className="px-4">
                        <a href="#">Apply</a>
                    </li>
                    <li className="px-4">
                        <a href="#">Job</a>
                    </li>
                    <li className="px-4">
                        <a href="#">Result</a>
                    </li>
                    <li className="px-4">
                        <a href="#">Courses</a>
                    </li>
                  </ul>

                </nav>
    </main>
  )
}

export default Navbar;
