import Header from "../components/Headers/Header";
import Footer from '../components/Footers/Footer'
import '../pages/PageStyle.css'
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="main-layout">
        <Header/>
        <div className="page-container">
          <div className='content'>
            <h1 className="title1">Contact Us</h1>
            <p className="p">We'd love to hear from you! Whether you have questions about admissions, programs, or campus life, our team is here to help.</p>
            <h2 className="title2"> General Enquiries</h2>
            <p className="p">
                <strong>Vivekanand College Main Campus</strong>
                <br />
                [Your College Full Address Here, e.g., Mahatma Gandhi Road, Chembur, Mumbai, Maharashtra 400071]
                <br />
                India
            </p>
            
            <p className="p">
              Phone: **+91 12345 67890**
              <br />
              Email: **info@vivekanandcollege.edu**
              <br />
              Office Hours: Monday - Friday, 9:00 AM - 5:00 PM IST
            </p>

            <h2 className="title2">Admission Office</h2>
            <p className="p">
              For all admission-related queries regarding undergraduate or postgraduate programs:
              <br />
              Phone: +91 98765 43210
              <br />
              Email: admissions@vivekanandcollege.edu    
            </p>

            <h2 className="title2">Student Support Services</h2>
            <p className="p">
              For current student support, academic advising, or general assistance:
              <br />
              Phone: +91 98765 43210
              <br />
              Email: admissions@vivekanandcollege.edu    
            </p>

            <h2 className="title2">Find Us on the Map</h2>
            <p className="p">
              [You can embed a Google Map here later using an iframe or a React map library.]
              <br />
              <a href="https://maps.app.goo.gl/5grEkGhDrAEThYKLA?g_st=aw" target="_blank" rel="noopener noreferrer">
                View on Google Maps
              </a>
            </p>

            <h2 className="title2">Send Us a Message</h2>
            <p className="p">
              [A contact form with fields for Name, Email, Subject, Message can be added here.]
            </p>
          </div>
        </div>  
        <Footer/> 
    </div>
  )
}

export default Contact;