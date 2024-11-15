import Image from "next/image";


function Piaic(){
    return(
        <div className="w-full flex flex-col justify-center items-center border-b-4 border-double border-gray-500">
            <div className="w-80% flex p-10 justify-center items-center gap-3 ">
                <div className="bg-slate-900 rounded-lg overflow-hidden">
                    <Image src={"/governorsindh.jpg"}  width={900} height={900} alt="Governor Sindh" className="rounded-lg object-cover"/>
                </div>
                <div className="bg-slate-900 rounded-lg overflow-hidden">
                    <Image src={"/piaic.jpg"} width={900} height={900} alt="piaic" className="rounded-lg h-100% w-100% object-cover"/>
                </div>

            </div>
            <hr />
        </div>
    );
}
export default Piaic;   
