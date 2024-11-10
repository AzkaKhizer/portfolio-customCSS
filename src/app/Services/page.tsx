
import { FaFacebook } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function About() {
    return (
<section className='services'>
  <h2 className='services-title'>My Services</h2>
  <div className='service-cards'>
    <div className='service-card'>
      <FaFacebook className="service-icon" />
      <h3>Web Design</h3>
      <p>Creating visually appealing and user-friendly websites tailored to your needs.</p>
    </div>
    <div className='service-card'>
      <FaTwitterSquare className="service-icon" />
      <h3>Responsive Development</h3>
      <p>Ensuring your website looks great on any device, from desktops to mobile.</p>
    </div>
    <div className='service-card'>
      <FaInstagram className="service-icon" />
      <h3>SEO Optimization</h3>
      <p>`Improving your site's visibility on search engines with tailored SEO strategies.`</p>
    </div>
  </div>
</section>
    )
}
