import { FaFacebook, FaTwitterSquare, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Azka Khizer. Frontend Developer</p>
        <div className="footer-social">
          <a href="#"><FaFacebook /></a>
          <a href="#"><FaTwitterSquare /></a>
          <a href="#"><FaInstagram /></a>
        </div>
      </div>
    </footer>
  );
}
