import { Children, createContext, useContext, useState } from "react";


const BulbContext=createContext();
const BulbProvider=({children,num})=>{
  const [bulbOn, setBulbOn] = useState(true);
  console.log(num);

  return (
  <BulbContext.Provider value={{bulbOn,setBulbOn}}>
    {children}
    {num}
  </BulbContext.Provider>
  );
}

const BulbState = () => {
  const {bulbOn}=useContext(BulbContext);
  return (
    <div>{`Bulb is ${bulbOn ? "On" : "Off"}`}</div>
  );
};

const ToggleBulbState = () => {
  const {setBulbOn}=useContext(BulbContext);
  function toggleBulb() {
    setBulbOn(prevState => !prevState);
  }
  
  return (
    <div>
      <button onClick={toggleBulb}>Toggle Bulb</button>
    </div>
  );
};

const LightBulb = () => {

  return (
    <>
      <BulbState/>
      <br/>
      <ToggleBulbState/>
    </>
  );
};

function App() {
  // const [bulbOn,setBulbOn]=useState(true);
  let num=4064;

  return (
    <>
    {/* <BulbContext.Provider value={{bulbOn,setBulbOn}}>
      <LightBulb />
    </BulbContext.Provider> */}

    <BulbProvider num={num} >
      <h2>hello world</h2>
      <LightBulb/>
      <h2>hi there</h2>
    </BulbProvider>
    </>
  );
}

export default App;
