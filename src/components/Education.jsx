import "./General.css"
import { useState } from "react";

function Education(props) {
    const [step, setStep] = useState(false);
   function handleClick(){
       setStep(!step)
    }
    return (<>
    <div className="step">Educational Exp <button className="btn" onClick={handleClick}>{step === false ? 'Show' : 'Hide'}</button></div> 
        <div className="general">
            {step && <form>
            <input type="text" name="institute" onChange={props.handleData} id="institue" placeholder="School/College Name"/>
            <br />
            <input type="text" name="studyTitle" onChange={props.handleData} id="title" placeholder="Title of Study"/>
            <br />
            <label htmlFor="start-date">Start of Study: </label>
            <input type="date" name="startDateStudy" onChange={props.handleData} id="start-date" placeholder="Date of Study"/>
            <br />
            <label htmlFor="end-date">End of Study: </label>
            <input type="date" name="endDateStudy" onChange={props.handleData} id="end-date" placeholder="Date of Study"/>
            <br />
        </form> }
        </div>
            </>)
}

export default Education