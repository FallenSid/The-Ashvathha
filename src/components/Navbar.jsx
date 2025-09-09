import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/Volume"}>Volume</Link></li>
            <li><Link to={"/Character"}>Characters</Link></li>
            <li><Link to={"/Feedback"}>FeedBack</Link></li>
            <li><Link to={"/About"}>About Writter</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
