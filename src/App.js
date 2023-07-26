import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import PageContent from "./Components/PageContent";
import SideMenu from "./Components/SideMenu";


function App() {
 
  return (
    <div className="flex flex-col w-full h-full">
      {/* <MyContext.Provider value={{data1,setData1}}> */}
   
        <Header />
        <div className="grid grid-cols-7 gap-2">
          <div className="col-start-1 col-end-2">
            <SideMenu />
          </div>
          <div className="col-start-2 col-end-8 h-full z-0">
            <PageContent />
          </div>
        </div>

        <Footer />
    
    </div>
  );
}

export default App;
