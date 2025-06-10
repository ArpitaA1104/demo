import {Link} from 'react-router-dom'
import Home from '../../pages/Home'
import '../Headers/Header.css'

const Header = () => {
  return (
    <header>
      
        <nav className='navbar'>
            <Link to='/home' className='header-vck'>Vivekanand College</Link>       
            <Link to='/home' >Home</Link>
            <Link to='/about'>About</Link>
            <Link to= '/courses'>Courses</Link>
            <Link to='/contact' >Contact</Link>
            <Link to='/addmission' className='btn'>Apply Now</Link>
        </nav>
        
       

        
    </header>
  )
}

export default Header;