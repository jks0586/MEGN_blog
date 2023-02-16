import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useEffect,useState } from 'react'
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import Admin from '../components/Admin';
export default function Home() {

const [windowSize, setWindowSize] = useState({
  innerWidth: undefined,
  innerHeight: undefined,
  outerWidth:undefined,
  outerHeight:undefined,
});

useEffect(() => {
  // only execute all the code below in client side
  // Handler to call on window resize
  function handleResize() {
    // Set window width/height to state
    setWindowSize({
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight,
      outerWidth: window.outerWidth,
      outerHeight: window.outerHeight,
    });
  }
  
  // Add event listener
  window.addEventListener("resize", handleResize);
   
  // Call handler right away so state gets updated with initial window size
  handleResize();
  
// Remove event listener on cleanup
return () => window.removeEventListener("resize", handleResize);
}, []); 
// const window = useInitialiseWindow();
  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
      bg="white"
    >
   <Admin>
   </Admin>
   </ThemeProvider>
  )
}

