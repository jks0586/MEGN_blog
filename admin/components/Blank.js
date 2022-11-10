import React,{useState,useEffect} from 'react'
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import ThemeProvider from 'react-bootstrap/ThemeProvider';

const Blank = (props) => {
const size = useWindowSize();
  return (
    <>
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
      bg="white"
    >
    <Container className="p-0" fluid className="bg-dark bg-gradient" style={{width:size.innerWidth+'px',height:size.innerHeight+'px'}}>
        {props.children}
    </Container>
    </ThemeProvider>
    </>
  )
}

export default Blank

function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
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
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
  }
