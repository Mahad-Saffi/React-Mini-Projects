import { useState } from "react"

function App() {
  const [color, setColor] = useState("black")

  return (
    <>
      <h1 className="w-full h-screen duration-200"
      style={{background: color}}>
        <div className="fixed flex flex-wrap justify-center"></div>
      </h1>
    </>
  )
}

export default App
