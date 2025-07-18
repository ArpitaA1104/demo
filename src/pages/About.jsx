import Header from "../components/Headers/Header"
import Footer from '../components/Footers/Footer'
import '../pages/PageStyle.css'
import { Link } from "react-router-dom"

const About = () => {
  return (
    <div className='main-layout'>
        <Header/>
        <div className='page-container'>
            <div className='content'>
            <h1 className='title1'>About Vivekanand College</h1>
            <p className="p">Vivekanand College stands as a beacon of knowledge and integrity, committed to delivering transformative education since its inception in [Year of Establishment, e.g., 1980]. Located in the bustling heart of [City/Area, e.g., Chembur, Mumbai], our college has consistently strived to uphold the highest standards of academic rigor and ethical values.</p>
            <p className="p">Our vision is to empower students with critical thinking skills, a global perspective, and a strong sense of social responsibility. We aim to nurture individuals who are not only successful in their careers but also contributing members of society.</p>
        
            <h2 className="title2">Our Missions</h2>
            <ul>
                <li>To provide high-quality, accessible education across various disciplines.</li>
                <li>To foster research, innovation, and creativity among students and faculty.</li>
                <li>To cultivate a diverse and inclusive learning environment.</li>
                <li>To instill strong ethical values and leadership qualities.</li>
            </ul>
        
        
            <h2 className="title2">Our Values</h2>
            <p className="p">Integrity, Excellence, Innovation, Community, and Respect are the pillars upon which Vivekanand College is built. We encourage open dialogue, intellectual curiosity, and a relentless pursuit of knowledge.</p>
        
        
            <h2 className="title2">Our History</h2>
            <p className="p">[Briefly describe the college's history - e.g., how it started, key milestones, growth over the years, famous alumni if any]. Our journey began with a vision to make quality education available to all, and we continue that legacy today.</p>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default About;