import './App.css';
import "./assets/font/stylesheet.css";
import Clouds from './assets/clouds.png';
import Home from './components/Home';
import { motion } from "framer-motion";
import TwinklingStars from './components/TwinklingStars';

function App() {

  return (
    <>
      <div className='bg-black bg-bg-img h-full w-full object-cover object-center z-[-1000] inset-0 absolute overflow-hidden'>
        <motion.div className=' z-[-10] absolute top-[20%] left-[10%]'
          animate={{ x: ["0%", "100%"] }}
          transition={{
            duration: 200, 
            ease: "linear", 
            repeat: Infinity, 
            repeatType: "loop", 
          }}
        >
          <img src={Clouds} alt="clouds"  />
        </motion.div>
        
        <TwinklingStars />
        <Home />
      </div>
    </>
  )
}

export default App
