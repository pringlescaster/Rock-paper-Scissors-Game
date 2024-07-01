import { useState } from "react"
import Main from "./Component/Main"
import Openmodal from "./Component/Openmodal"

function App() {
  const [showMain, setshowMain] = useState(false)

  const onFightClick =()=> {
    setshowMain(true)
  }

  return (
    <div className="bg-[#080708]">
      
      {showMain ? (
        <Main /> // Render Main component if showMain is true
      ) : (
        <Openmodal onFightClick={onFightClick} /> // Render Openmodal component and pass onFightClick as a prop
      )}
    </div>
  )
}

export default App
