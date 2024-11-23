import './globals.css'; 
import { FaFacebook } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6"; 

export default function Home() {
  return (
    <section className="home">
      <div className="home-content">
        <h1>Hi, I am Azka Khizer</h1>
        <h2>Frontend Developer</h2>
        <p>I am Azka Khizer, a Frontend Developer focused on building responsive and user-friendly websites. I am always learning and improving my skills to create seamless, high-quality web experiences.</p>
        <div className="btn-box">
          <a href="/Contact">Hire me</a>
          <a href="/Contact">Let Us Talk</a>
        </div>
      </div>
      <div className="icons">
        <a href="https://www.facebook.com/azka.khizer" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
        <a href="#" target="_blank" rel="noopener noreferrer"><FaTwitterSquare /></a>
        <a href="https://www.instagram.com/marketminds123/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
      </div>
      <span className="home-imghover"></span>
    </section>
  );
}

