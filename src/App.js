import './App.css';
// import Screen1 from './component/Screen1/Screen1';
// import Screen2 from './component/Screen2/Screen2';
// import Screen3 from './component/Screen3/Screen3';
// import { useState, useEffect} from 'react';
import Setup from './component/Setup/Setup'

function App() {

  // const [screen2, setScreen2] = useState(false);
  // const [screen3, setScreen3] = useState(false);
  // const [shownScreens, setShownScreens] = useState([]);

  // const handleBackToScreen1 = () => {
  //   setScreen3(false);
  //   setScreen2(false);
  //   setShownScreens([]);
  // }

  // useEffect(() => {
  //   if (!shownScreens.includes(2)) {
  //     // Show Screen 2 after 3 seconds
  //     const screen2Timeout = setTimeout(() => {
  //       setScreen2(true);
  //       setShownScreens([...shownScreens, 2]);
  //     }, 4000);

  //     // Clean up timeouts
  //     return () => {
  //       clearTimeout(screen2Timeout);
  //     };
  //   }
  // }, [shownScreens]);

  // useEffect(() => {
  //   if (!shownScreens.includes(3)) {
  //     // Show Screen 3 after 20 seconds
  //     const screen3Timeout = setTimeout(() => {
  //       setScreen3(true);
  //       setShownScreens([...shownScreens, 3]);
  //     }, 8000);

  //     // Clean up timeouts
  //     return () => {
  //       clearTimeout(screen3Timeout);
  //     };
  //   }
  // }, [shownScreens]);

  return (
    <>
    {/* <Screen1/> */}
    {/* <Screen2/> */}
    <Setup/>
    {/* <Screen3/> */}
    </>
    // <div className="App">
    //   {screen3 ? (
    //     <Screen3 handleBackToScreen1={handleBackToScreen1} />
    //   ) : screen2 ? (
    //     <Screen2 />
    //   ) : (
    //     <Screen1 />
    //   )}
    // </div>
  );

}

export default App;
