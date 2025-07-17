import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EmailCapture from "./EmailCapture";
import { faArrowRight} from "@fortawesome/free-solid-svg-icons";

const Herosection: React.FC =() => {
    return(
        
        <div className=" p-6 sm:p-10 ">
            <h1 className="text-xl sm:text-3xl lg:text-6xl text-center font-bold  mt-5">Life Planning, Making <br/> Easy to Turn Dreams a Reality. </h1>
        <p className="text-gray-900 font-medium text-sm sm:text-2xl text-center mt-3">Get Exclusive offers on purchase of any plans</p>
        <div className="mt-5">
            <EmailCapture/>
        </div>
        <div className="flex justify-between px-2 sm:px-16 mt-5">
<h1 className="text-xl sm:text-2xl font-bold">Featured Plans</h1>
<h1 className="text-xl font-medium ">Explore all</h1>
        </div>
        
        <div className="mt-5 overflow-x-auto scroll-smooth hide-scrollbar ">
        <div className="flex justify-center space-x-4 w-max lg:w-auto">
            <div className="bg-[#5fcca0] w-[16rem] h-[16rem] rounded-2xl p-6">
                <p className="text-[#47a880] text-sm">STRATEGY</p>
                <h1 className="mt-2 font-semibold text-xl">Money Momentum</h1>
                <p className="mt-3 text-[#124126] font-semibold text-xs">Tract Premium helps you start saver investments insight covering.  </p>
                <div className="mt-5 pt-4 border-t border-t-[#4fa583]">
                    <p className="text-[#47a880] font-semibold ">3 yrs CAGR</p>
                </div>

                <div className=" flex text-center items-center justify-between mt-3">
                    <p className="text-2xl font-black">7.20%</p>
                    <FontAwesomeIcon icon={faArrowRight} className="bg-black text-white p-2 rounded-lg"/>
                </div>
                
            </div>
            
             <div className="bg-[#000000] w-[16rem] h-[16rem] rounded-2xl p-6">
                <p className="text-[#757575] text-sm">PLANS</p>
                <h1 className="mt-2 font-semibold text-xl text-[#fcfcfc]">Long-Term</h1>
                <p className="mt-3 text-[#7c7c7c] font-semibold text-xs">
                    Create a vision. To get started, imagine your dream life.
                </p>
                <div className="mt-5 pt-4 border-t border-t-[#101010]">
                    <p className="text-[#757575] font-semibold ">25 yrs CAGR</p>
                </div>

                <div className=" flex text-center items-center justify-between mt-3">
                    <p className="text-2xl font-black text-[#fefefe] ">14.20%</p>
                    <FontAwesomeIcon icon={faArrowRight} className="bg-white text-black p-2 rounded-lg"/>
                </div>  
            </div>

             <div className="bg-[#cb9bfb] w-[16rem] h-[16rem] rounded-2xl p-6">
                <p className="text-[#a077be] text-sm">STRATEGY</p>
                <h1 className="mt-2 font-semibold text-xl text-[#08000b]">Focussed</h1>
                <p className="mt-3 text-[#280841] font-semibold text-xs">
                    Be focused Life planning, however, can serve as a road map or guide
                </p>
                <div className="mt-5 pt-4 border-t border-t-[#c899f8]">
                    <p className="text-[#a570da] font-semibold ">1 yr returns </p>
                </div>

                <div className=" flex text-center items-center justify-between mt-3">
                    <p className="text-2xl font-black text-[#332b34] ">11.20%</p>
                    <FontAwesomeIcon icon={faArrowRight} className="bg-[#1c1e15] text-white p-2 rounded-lg"/>
                </div>
            </div>

               <div className="bg-[#f8fe8f] w-[16rem] h-[16rem] rounded-2xl p-6">
                <p className="text-[#bfc370] text-sm">PLANS</p>
                <h1 className="mt-2 font-semibold text-xl text-[#080400] ">Fixed Income</h1>
                <p className="mt-3 text-[#828250] font-semibold text-xs">
                    Get multiple benefits,and lumpsum option & guaranteed Returns
                </p>
                <div className="mt-5 pt-4 border-t border-t-[#d5da45]">
                    <p className="text-[#bfc370] font-semibold ">5 yrs CAGR</p>
                </div>

                <div className=" flex text-center items-center justify-between mt-3">
                    <p className="text-2xl font-black text-[#2b2a06] ">8.20%</p>
                    <FontAwesomeIcon icon={faArrowRight} className="bg-[#1d1d1d] text-white p-2 rounded-lg"/>
                </div>
                </div>
             </div>

                <img src="images/image1.png" alt="visual" className="mx-auto mt-5" />

        </div>
        </div>
        
       
    )
}

export default Herosection;