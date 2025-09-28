import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer mt-auto py-4 text-white">
      <div className="container text-center">
        {/* Social Icons */}
        <div className="mb-3">
          <a href="https://facebook.com" className="footer-icon mx-2">
            <FaFacebook />
          </a>
          <a href="https://instagram.com" className="footer-icon mx-2">
            <FaInstagram />
          </a>
          <a href="https://github.com" className="footer-icon mx-2">
            <FaGithub />
          </a>
          <a href="https://linkedin.com" className="footer-icon mx-2">
            <FaLinkedin />
          </a>
        </div>

        {/* Copyright */}
        <p className="m-0">
          &copy; {new Date().getFullYear()} MyWebsite | Built with ❤️ using React
        </p>
      </div>
    </footer>
  );
}
