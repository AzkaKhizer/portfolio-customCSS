import './globals.css'; 
import { FaFacebook } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6"; 

export default function Home() {
  return (
    <section className='home'>
    <div className='home-content'>
      <h1>Hi, I am Azka Khizer</h1>
      <h2>Frontend Developer</h2>
      <p>Crafting responsive and visually engaging websites with a focus on user experience and modern web technologies.</p>
      <div className="btn-box">
        <a href='/Contact'>Hire me</a>
        <a href="/Contact">Let us Talk</a>
      </div>
    </div>
    <div className='icons'>
    <a href="https://www.facebook.com/azka.khizer"><FaFacebook /></a>
    <a href="#"><FaTwitterSquare /></a>
    <a href="https://www.instagram.com/marketminds123/"><FaInstagram /></a>
    
    </div>
    <span className='home-imghover'></span>
    </section>



  );
}
