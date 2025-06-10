import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Headers/Header'
import Footer from '../components/Footers/Footer'
import '../pages/PageStyle.css'


const Home = () => {
    return (

    <div className='main-layout'>

        <Header/>

        <div className='page-container'>
            
            <div className='content'>
                <div className='headimage'>
                
                <div className='headcontent'>
                    <h1 className='white'>Welcome to Vivekanand College</h1>
                    <p className='white'>Your journey to exllence starts here</p>
                    <a className='btn' href='/addmission' >Apply Now!</a>

                </div>
            </div>

        
                <p className='p'><b>Vivekanand College</b> is a premier educational institution dedicated to fostering academic excellence, innovation, and holistic development. Established in [Year of Establishment, e.g., 1980], we have proudly served generations of students, empowering them to achieve their full potential.</p>
                <p className='p'>At Vivekanand College, we believe in a vibrant learning environment that extends beyond textbooks. Our state-of-the-art facilities, experienced faculty, and diverse student community create a unique ecosystem where curiosity thrives and future leaders are shaped. </p>
        
                <h2 className='title2'>Why Choose Vivekanand College?</h2>
             
                <ul className='ul'>
                    <li><b>Legacy of Excellence:</b> Decades of commitment to quality education.</li>
                    <li><b>Experienced Faculty:</b> Learn from renowned experts and passionate educators.</li>
                    <li><b>Modern Facilities:</b> Well-equipped labs, expansive library, and comfortable campus.</li>
                    <li><b>Holistic Development:</b> Focus on co-curricular activities, sports, and community service.</li>
                    <li><b>Strong Placements:</b> Excellent career opportunities with leading companies.</li>
                </ul>

                <h2>Campus Life & Facilities</h2>
                <div className='image-gallery'>
                    <img src='./Images/vck-info.jpeg' alt='VCK Information' className='img'/>
                    
                </div>

                <p className='p'>Explore our vibrant campus and state-of-the-art facilities designed to enhance your learning experience and personal growth.</p>

                <div className='error'>
                    <p className='p'>Ready to explore our courses?</p>
                    <a href="/about" class='btn'>Explore Courses</a>
                </div>

            </div>
        </div>
        <Footer/>
    </div>
    
)
}

export default Home;