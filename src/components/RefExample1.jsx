import { useRef } from "react"


const RefExample1 = () => {

const buttonRef = useRef(null)    
console.log(buttonRef);

  return (
    <div>
        <button ref={buttonRef}>click to do</button>
        <input type="text" placeholder='enter smth' />
    </div>
  )
}

export default RefExample1