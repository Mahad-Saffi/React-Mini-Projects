import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(10)
  const [isNumberAllowed, setIsNumberAllowed] = useState(true)
  const [isCharAllowed, setIsCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)

  const copyPassToClipboard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password]) 

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (isNumberAllowed) str += "0123456789"
    if (isCharAllowed) str += "~`!@#$%&_-"

    for (let i = 0; i < length; i++) {
      let char = Math.random() * str.length + 1
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, isNumberAllowed, isCharAllowed, setPassword])

  useEffect(() => {
    passwordGenerator()
  }, [length, isNumberAllowed, isCharAllowed, passwordGenerator])

  return (
    <div className='bg-black h-screen w-screen'>
      <h1 className='text-white text-4xl text-center py-10'>Password Generator</h1>

      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-8 py-6 my-8 text-orange-400 bg-gray-700 text-center'>
        <div className='flex shadow rounded-lg overflow-hidden mb-4 gap-y-0'>
          <input 
          type="text"
          value={password}
          className='outline-none w-full py-2 px-3 rounded-lg my-1'
          placeholder='password'
          readOnly
          ref={passwordRef}
            />
            <button 
            className='outline-none bg-blue-500 text-white px-3 py-0.5 shrink-0 rounded-xl mx-2 hover:bg-blue-600 hover:text-white'
            onClick={copyPassToClipboard}>Copy</button>
         </div>
         <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range"
            min={6}
            max={50}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}
             />
             <label >Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked={isNumberAllowed}
            id='numberInput'
            onChange={() => {
              setIsNumberAllowed((prev) => !prev)
            }}
             />
             <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
          <input 
            type="checkbox"
            defaultChecked={isCharAllowed}
            id='characterInput'
            onChange={() => {
              setIsCharAllowed((prev) => !prev)
            }}
             />
             <label htmlFor="characterInput">Characters</label>
          </div>
         </div>
      </div>
    </div>
  )
}

export default App
