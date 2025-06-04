import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">
        &copy; {new Date().getFullYear()} Weather to Wear
      </p>
    </footer>
  );
}

export default Footer;
