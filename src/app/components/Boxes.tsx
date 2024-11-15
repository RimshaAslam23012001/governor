import Image from "next/image";

function Boxes(){
    return(
        
            <div className="flex gap-5 m-10">
                <Image src={"/box1.jpg"} alt="Box 1" width={400} height={300} className="rounded-xl object-cover shadow-gray-700 shadow-2xl"/>
                <Image src={"/box2.jpg"} alt="Box 2" width={400} height={300} className="rounded-xl object-cover shadow-gray-700 shadow-2xl"/>
                <Image src={"/box3.jpg"} alt="Box 3" width={400} height={300} className="rounded-xl object-cover shadow-gray-700 shadow-2xl"/>
            </div>
       
    )
}
export default Boxes;

