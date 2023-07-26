import './Resume.css'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useRef } from 'react';

function Resume(props){
    const pdfRef = useRef();
    
    const downloadPDF = () =>{
        const input = pdfRef.current;
        html2canvas(input).then((canvas)=>{
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4', true);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();
            const imgWidth = canvas.width;
            const imgHeight = canvas.height;
            const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
            const imgX = (pdfWidth - imgWidth * ratio) / 2;
            const imgY = 30;
            pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
            pdf.save('Resume.pdf')
        
        });
    };
    return (
        <>
        <div className="Resume" ref={pdfRef}>
       <div className="general-info">
       <div className="head">
        <div className="name">{props.data.name}</div>
        <div className="title">{props.data.title}</div>
        </div>
        <div className="info">
            <div className="address">{props.data.address && <FaMapMarkerAlt />} {props.data.address}</div>
            <div className="phone">{props.data.phone && <FaPhoneAlt />} {props.data.phone}</div>
            <div className="mail">{props.data.mail && <FaEnvelope />} {props.data.mail}</div>
        </div>
       </div>
       {props.data.institute && <hr />}
       <div className="education">
        { props.data.studyTitle && <h2>Education</h2>}
        <div className="college">
            <div className='bold'>{props.data.studyTitle}</div>
            <div><span className="bold">{props.data.institute}</span> {props.data.startDateStudy && "|"} {props.data.startDateStudy} {props.data.endDateStudy && "-"} {props.data.endDateStudy}</div>
        </div>
       </div>
       <div className="experience">
        { props.data.company && <h2>Experience</h2>}
        <div className="job">
            <div className="jobtitle bold">
                {props.data.job}
            </div>
            <div className="company">
              <span className="bold">{props.data.company}</span>   {props.data.startDateJob && "|"} {props.data.startDateJob} {props.data.endDateJob && "-"} {props.data.endDateJob}
            </div>
        </div>
        <div className="description">
            {props.data.jobDescription}
        </div>
       </div>
       </div>
       <div className="btndiv">
       <button className='download' onClick={downloadPDF}>Download PDF</button>
       </div>
        </>
    )
}

export default Resume