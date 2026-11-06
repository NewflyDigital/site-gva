import * as React from "react";
import Box from "@mui/material/Box";
import styles from "../styles/Rodape.module.css";
import PhoneIcon from "@mui/icons-material/Phone";
import RoomIcon from "@mui/icons-material/Room";
import EmailIcon from "@mui/icons-material/Email";
import TextField from "@mui/material/TextField";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Link from "next/link";
import Button from "@mui/material/Button";

export default function Footer() {
  const WHATSAPP = "https://wa.me/5554984130000";

  return (
    <footer className={styles.footer}>
      <div className={styles.footerOverlay}></div>

      <div className={styles.interno}>
        <div className={styles.footerGrid}>
          <div>
            <img
              src="/static/images/gva-logo.png"
              alt="GVATECH"
              className={styles.footerLogo}
            />

            <p className={styles.footerText}>
              Especialistas em soluções corporativas de tecnologia,
              conectividade e infraestrutura de redes.
            </p>
          </div>

          <div>
            <h4 className={styles.footerTitle}>Navegação</h4>

            <ul className={styles.footerMenu}>
              <li>
                <a href="#inicio">Início</a>
              </li>
              <li>
                <a href="#solucoes">Soluções</a>
              </li>
              <li>
                <a href="#beneficios">Benefícios</a>
              </li>
              <li>
                <a href="#GVATECH">GVATECH</a>
              </li>
              <li>
                <a href="#contato">Contato</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className={styles.footerTitle}>Contato</h4>

            <ul className={styles.footerContact}>
              <li>
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                  <img
                    src="/static/images/whatsapp-icon.png"
                    alt=""
                    className={styles.footerIcon}
                  />
                  WhatsApp
                </a>
              </li>

              <li>
                <img
                  src="/static/images/phone-icon.png"
                  alt=""
                  className={styles.footerIcon}
                />
                +55 54 98413-0000
              </li>
            </ul>

            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footerButton}
            >
              <img
                src="/static/images/whatsapp-icon.png"
                alt=""
                className={styles.footerIcon}
              />
              Fale conosco
            </a>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>
          © {new Date().getFullYear()} GVATECH. Todos os direitos reservados.
        </p>

        <a
          href="https://newflydigital.com.br"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.newfly}
        >
          <span>Desenvolvido por</span>

          <img src="/static/images/newfly-logo.png" alt="NewFly" />
        </a>
      </div>
    </footer>
  );
}
