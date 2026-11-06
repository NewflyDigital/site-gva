import * as React from "react";
import styles from "../styles/Menu.module.css";

const WHATSAPP = "https://wa.me/5554984130000";

function Menu() {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobile, setMobile] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    onScroll();

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`${styles.header} ${scrolled ? styles.headerScrolled : ""}`}
    >
      <div className={styles.menuContainer}>
        <a href="#inicio">
          <img
            src="/static/images/gva-logo.png"
            alt="GVATECH"
            className={styles.logo}
          />
        </a>

        <nav className={`${styles.nav} ${mobile ? styles.navMobileOpen : ""}`}>
          <a href="#inicio" onClick={() => setMobile(false)}>
            Início
          </a>

          <a href="#solucoes" onClick={() => setMobile(false)}>
            Soluções
          </a>

          <a href="#beneficios" onClick={() => setMobile(false)}>
            Benefícios
          </a>

          <a href="#GVATECH" onClick={() => setMobile(false)}>
            GVATECH
          </a>

          <a href="#contato" onClick={() => setMobile(false)}>
            Contato
          </a>

          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mobileCTA}
          >
            Solicitar Consultoria
          </a>
        </nav>

        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.cta}
        >
          Solicitar Consultoria
        </a>

        <button
          className={styles.mobileButton}
          onClick={() => setMobile(!mobile)}
        >
          {mobile ? "✕" : "☰"}
        </button>
      </div>
    </header>
  );
}

export default Menu;
