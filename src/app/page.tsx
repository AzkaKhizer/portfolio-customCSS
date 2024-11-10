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
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ad accusamus unde earum quas expedita obcaecati non distinctio, deleniti aliquid maxime ipsum? Placeat optio libero ea fuga?</p>
      <div className="btn-box">
        <a href='/Contact'>Hire me</a>
        <a href="/Contact">Let's Talk</a>
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
