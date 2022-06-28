import "./Header.css";

const Header = () => {
  return (
    <section>
      <div className="header">
        <img src="assets/Logo-vmeet.png" className="logo" alt="/" />
        <div>
          <a
            className="header-btn"
            href="https://github.com/VinuBalagopalAP/VMeet/releases/download/v1.0/VMeet.rar"
            
          >
            Download
          </a>
        </div>
      </div>
    </section>
  );
};

export default Header;
