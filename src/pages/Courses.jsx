import Header from "../components/Headers/Header"
import Footer from '../components/Footers/Footer'
import '../pages/PageStyle.css'
import { Link } from "react-router-dom"

const Courses = () => {
  return (
    <div className='main-layout'>
        <Header/>
        <div className='page-container'>
            <div className='content'>
            <h1 className="title1">Our Academic Prograns</h1>
            <p className="p">Vivekanand College offers a comprehensive range of undergraduate and postgraduate programs designed to equip students with the knowledge and skills demanded by today's dynamic global landscape. Our curriculum is regularly updated to reflect industry trends and academic advancements.</p>

            <h2 className="title2">Discover Campus Life</h2>
            <div className="video-container">
             <video src="/Videos/college.mp4" controls autoPlay loop width={1000} height={400} ></video>  
            </div>

            <h2 className="title2">
                Undergraduate Programs(UG)
            </h2>
            <ul>
                <li>Bachelor of Science(B.Sc)
                <ul>
                    <li>Computer Science (3 years)</li>
                    <li>Information Technology (3 years)</li>
                    <li>Biotechnology (3 years)</li>
                </ul>
                </li>
                <li>Bachelor of Commerse(B.Com)
                <ul>
                    <li>Accounting & Finance (3 years)</li>
                    <li>Banking & Insurance (3 years)</li>
                </ul>
                </li>
                <li>Bachelor of Arts(B.A)
                <ul>
                    <li>English Literature (3 years)</li>
                    <li>Psychology (3 years)</li>
                </ul>
                </li>
            </ul>
            <h2 className="title2">
                Postgraduate Program(PG)
            </h2>
            <ul>
                <li>Master of Science (M.Sc.)
                <ul>
                    <li>omputer Science (2 years)</li>
                    <li>Information Technology (2 years)</li>
                </ul></li>
                <li>Master of Commerce (M.Com) (2 years)</li>
                <li>Master of Arts (M.A.) (2 years)</li>   
            </ul>

            <h2 className="title2">Program Detailes & Fee Structure (Annual)</h2>
            <table className="addmission-table">
                <thead>
                    <th>Program Type</th>
                    <th>Course Name</th>
                    <th>Duration</th>
                    <th>Annual Fee (INR)</th>
                    <th>Eligibility</th>
                </thead>
                <tbody>
                    <tr>
                        <td>UG</td>
                        <td>B.Sc. Computer Science</td>
                        <td>3 Years</td>
                        <td>₹ 85,000</td>
                        <td>10+2 with PCM (50%)</td>
                    </tr>
                    <tr>
                        <td>UG</td>
                        <td>B.Com. Accounting & Finance</td>
                        <td>3 Years</td>
                        <td>₹ 70,000</td>
                        <td>10+2 Commerce (45%)</td>
                    </tr>
                    <tr>
                        <td>PG</td>
                        <td>M.Sc. Information Technology</td>
                        <td>2 Years</td>
                        <td>₹ 95,000</td>
                        <td>B.Sc. IT/CS (50%)</td>
                    </tr>
                </tbody>
            </table>

            <h2 className="title2">Specialized & Vacational Courses</h2>
            <p className="p">In addition to traditional degree programs, we offer various certificate and diploma courses in areas like Digital Marketing, Web Development, Data Analytics, and Soft Skills Development, providing specialized training for career enhancement.</p>

            <div className='error'>
                    <p className='p'>Have questions about a specific course?</p>
                    <a href="/contact" class='btn'>Inquire About Cources</a>
                </div>

            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Courses;