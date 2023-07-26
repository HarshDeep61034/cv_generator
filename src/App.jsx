import General from './components/General'
import Navbar from './components/Navbar'
import Education from './components/Education'
import Experience from './components/Experience'
import Resume from './components/Resume'
import Footer from './components/Footer'
import { useState } from 'react'
import './App.css'

function App() {

  const [data, setData] = useState({})
  function handleData(e){
    const {name, value} = e.target
    setData((prevData)=>({
        ...prevData,
        [name]: [value]
    }))
    console.log(data);
}
  return (
    <>
    <Navbar />
    <General handleData={handleData} />
    <Education handleData={handleData} />
    <Experience handleData={handleData} />
    <Resume data={data} />
    <Footer />
        </>
  )
}

export default App
