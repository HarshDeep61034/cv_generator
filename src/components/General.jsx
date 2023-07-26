import { useState } from "react"
import "./General.css"
function General(props){
    const [step, setStep] = useState(false);
   function handleClick(){
       setStep(!step)
    }

    return (
        <>
        <div className="step">General Info <button className="btn" onClick={handleClick}>{step === false ? 'Show' : 'Hide'}</button></div> 
        <div className="general">
            {step && <form>
            <input type="text" name="name" onChange={props.handleData} id="name" placeholder="Harsh Deep"/>
            <br />
            <input type="text" name="title" onChange={props.handleData} id="title" placeholder="Frontend Devloper"/>
            <br />
            <input type="text" name="address" onChange={props.handleData} id="address" placeholder="Muzaffarnagar"/>
            <br />
            <input type="email" name="mail" onChange={props.handleData} id="mail" placeholder="hdeep61034@gmail.com"/>
            <br />
            <input type="number" name="phone" onChange={props.handleData} id="phone" placeholder="7017446342"/>
            <br />
        </form> }
        </div>
        </>
    )
}

export default General