import Herosection from "./components/Herosection";
import Navbar from "./components/Navbar";

const App: React.FC = () => {
  return(
   <div className="  flex justify-center  items-center  px-4 sm:px-6 lg:px-8 pt-8 md:pt-12 lg:pt-16 mb-20">
        <div className="bg-[#FFFFFF] w-full max-w-7xl rounded-2xl">
      <Navbar/>
      <Herosection/>
          </div>
          </div>
  )
}

export default App;