import "./General.css"
import { useState } from "react";

function Experience(props) {
    const [step, setStep] = useState(false);
    function handleClick() {
        setStep(!step)
    }
    return (
        <>
            <div className="step">Work Experience <button className="btn" onClick={handleClick}>{step === false ? 'Show' : 'Hide'}</button></div>
            <div className="general">
                {step && <form>
                    <input type="text" name="company" onChange={props.handleData} id="Company" placeholder="Company Name" />
                    <br />
                    <input type="text" name="job" onChange={props.handleData} id="job" placeholder="Title of Job" />
                    <br />
                    <label htmlFor="description">Main Responsibilities of your Jobs:</label>
                    <br />
                    <textarea id="para" name="jobDescription" onChange={props.handleData} rows="4" cols="50">
                    </textarea>
                    <br />
                    <label htmlFor="startDateJob">Start of Job: </label>
                    <input type="text" name="startDateJob" onChange={props.handleData} id="start-date" placeholder="Jan 2023"/>
                    <br />
                    <label htmlFor="endDateJob">End of Job: </label>
                    <input type="text" name="endDateJob" onChange={props.handleData} id="end-date" placeholder="Aug 2024" />
                    <br />
                </form>}
            </div> 
        </>
    )
}

export default Experience