import { useState } from "react"

function App() {
  const [color, setColor] = useState("black")

  return (
    <>
      <h1 className="w-full h-screen duration-200"
      style={{background: color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-lg text-lg">
            <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-1 rounded-full text-red shadow-lg" 
            style={{background: "red"}}>Red</button>

<button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded-full text-red shadow-lg" 
            style={{background: "green"}}>Green</button>

<button
            onClick={() => setColor("blue")}
            className="outline-none px-4 py-1 rounded-full text-red shadow-lg" 
            style={{background: "blue"}}>Blue</button>

<button
            onClick={() => setColor("purple")}
            className="outline-none px-4 py-1 rounded-full text-red shadow-lg" 
            style={{background: "purple"}}>Purple</button>

<button
            onClick={() => setColor("yellow")}
            className="outline-none px-4 py-1 rounded-full text-red shadow-lg" 
            style={{background: "yellow"}}>Yellow</button>

<button
            onClick={() => setColor("orange")}
            className="outline-none px-4 py-1 rounded-full text-red shadow-lg" 
            style={{background: "orange"}}>orange</button>

<button
            onClick={() => setColor("magenta")}
            className="outline-none px-4 py-1 rounded-full text-red shadow-lg" 
            style={{background: "magenta"}}>magenta</button>
          </div>
        </div>
      </h1>
    </>
  )
}

export default App
