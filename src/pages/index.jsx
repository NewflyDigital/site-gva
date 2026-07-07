import Menu from "../components/menu";
import Rodape from "../components/rodape";
import Whats from "../components/whats";
import styles from "../styles/Index.module.css";
import React, { useState } from "react";
import Link from "next/link";
import { useEffect, useRef } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGaugeHigh,
  faClock,
  faGlobe,
  faRocket,
  faShieldHalved,
  faMountain,
  faArrowsLeftRight,
  faClockRotateLeft,
  faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const solutions = [
    {
      icon: "/static/images/frota.png",
      title: "Starlink Frota",
      subtitle:
        "Caminhões, ônibus, máquinas agrícolas, veículos de mineração e operações móveis.",
      benefits: [
        "Internet em movimento",
        "Cobertura ampla",
        "Comunicação em tempo real",
        "Telemetria",
        "Rastreamento",
      ],
    },
    {
      icon: "/static/images/helicoptero.png",
      title: "Starlink Helicóptero",
      subtitle:
        "Operações críticas de resgate, segurança e transporte executivo.",
      benefits: [
        "Operações policiais",
        "Resgate",
        "Transporte executivo",
        "Operações críticas",
      ],
    },
    {
      icon: "/static/images/ip.png",
      title: "Starlink Fixa com IP Público",
      subtitle:
        "Solução completa para matrizes, filiais e servidores corporativos.",
      benefits: [
        "Empresas",
        "Filiais",
        "VPN",
        "Servidores",
        "Monitoramento",
        "IP Público",
      ],
    },
    {
      icon: "/static/images/nat.png",
      title: "Starlink Fixa com IP NAT",
      subtitle:
        "Excelente custo-benefício para locais remotos e projetos temporários.",
      benefits: [
        "Escritórios",
        "Fazendas",
        "Obras",
        "Áreas remotas",
        "Excelente custo-benefício",
      ],
    },
  ];

  const stats = [
    {
      icon: "/static/images/empresas.png",
      number: "500+",
      label: "Empresas Atendidas",
    },
    {
      icon: "/static/images/projetos.png",
      number: "1200+",
      label: "Projetos Entregues",
    },
    {
      icon: "/static/images/estados.png",
      number: "22",
      label: "Estados Atendidos",
    },
    {
      icon: "/static/images/raio.png",
      number: "24h",
      label: "Atendimento",
    },
  ];

  const infrastructure = [
    {
      icon: "/static/images/noc.png",
      title: "NOC Próprio",
      desc: "Monitoramento 24 horas por dia da sua infraestrutura.",
    },
    {
      icon: "/static/images/atendimento.png",
      title: "Suporte Técnico Especializado",
      desc: "Equipe técnica própria pronta para atender.",
    },
    {
      icon: "/static/images/wan.png",
      title: "SD-WAN Fortinet",
      desc: "Integração completa entre matriz e filiais.",
    },
    {
      icon: "/static/images/estados.png",
      title: "Segurança Corporativa",
      desc: "Infraestrutura preparada para ambientes críticos.",
    },
    {
      icon: "/static/images/projetos2.png",
      title: "Projetos Personalizados",
      desc: "Dimensionamento sob medida para cada empresa.",
    },
    {
      icon: "/static/images/implantacao.png",
      title: "Implantação Nacional",
      desc: "Atendimento em todo o território brasileiro.",
    },
  ];

  const fortinetPerks = [
    {
      icon: "/static/images/estados.png",
      label: "Mais segurança",
    },
    {
      icon: "/static/images/raio.png",
      label: "Mais estabilidade",
    },
    {
      icon: "/static/images/projetos2.png",
      label: "Mais gerenciamento",
    },
    {
      icon: "/static/images/desempenho.png",
      label: "Mais desempenho",
    },
  ];

  const fortinetPerks2 = [
    { icon: "🛡️", label: "Mais segurança" },
    { icon: "⚡", label: "Mais estabilidade" },
    { icon: "⚙️", label: "Mais gerenciamento" },
    { icon: "🚀", label: "Mais desempenho" },
  ];

  const WHATSAPP = "https://wa.me/5554984130000";

  const perks = [
    {
      icon: "bi-shield-check",
      label: "Mais segurança",
    },
    {
      icon: "bi-speedometer2",
      label: "Mais estabilidade",
    },
    {
      icon: "bi-sliders",
      label: "Mais gerenciamento",
    },
    {
      icon: "bi-rocket-takeoff",
      label: "Mais desempenho",
    },
  ];

  const benefits = [
    {
      icon: <FontAwesomeIcon icon={faGaugeHigh} />,
      title: "Alta velocidade",
    },
    {
      icon: <FontAwesomeIcon icon={faClock} />,
      title: "Baixa latência",
    },
    {
      icon: <FontAwesomeIcon icon={faGlobe} />,
      title: "Cobertura nacional",
    },
    {
      icon: <FontAwesomeIcon icon={faRocket} />,
      title: "Implantação rápida",
    },
    {
      icon: <FontAwesomeIcon icon={faShieldHalved} />,
      title: "Alta disponibilidade",
    },
    {
      icon: <FontAwesomeIcon icon={faMountain} />,
      title: "Ideal para áreas remotas",
    },
    {
      icon: <FontAwesomeIcon icon={faArrowsLeftRight} />,
      title: "Mobilidade",
    },
    {
      icon: <FontAwesomeIcon icon={faClockRotateLeft} />,
      title: "Operação 24x7",
    },
    {
      icon: <FontAwesomeIcon icon={faLayerGroup} />,
      title: "Escalabilidade",
    },
  ];

  return (
    <>
      <Menu />
      <section id="inicio" className={styles.hero}>
        <img
          src="/static/images/hero-starlink.jpg"
          alt="Starlink Corporativa"
          className={styles.heroBg}
        />

        <div className={styles.heroOverlay}></div>
        <div className={styles.heroGrid}></div>

        <div className={styles.glow1}></div>
        <div className={styles.glow2}></div>

        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            <span className={styles.badgeDot}></span>
            Provedor Starlink
          </div>

          <h1>
            Starlink Corporativa
            <br />
            <span>para Empresas</span>
          </h1>

          <p>
            Conectividade via satélite de alta performance para operações
            críticas, frotas, embarcações, aeronaves, unidades remotas e
            empresas que não podem parar.
          </p>

          <div className={styles.heroButtons}>
            <a
              href="https://wa.me/5554984130000"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnPrimary}
            >
              <img src="/static/images/whatsapp-icon.png" alt="WhatsApp" />{" "}
              Solicitar Consultoria
              <img src="/static/images/flecha.png" alt="Flecha" />{" "}
            </a>

            <a href="#solucoes" className={styles.btnSecondary}>
              <img src="/static/images/raio.png" alt="raio" /> Consultar Planos
            </a>
          </div>

          <div className={styles.heroStats}>
            <div>
              <h3>99.9%</h3>
              <span>Disponibilidade</span>
            </div>

            <div>
              <h3>&lt;40ms</h3>
              <span>Latência</span>
            </div>

            <div>
              <h3>220Mbps</h3>
              <span>Velocidade</span>
            </div>

            <div>
              <h3>24/7</h3>
              <span>Suporte NOC</span>
            </div>
          </div>
        </div>

        <div className={styles.heroFade}></div>
      </section>

      <section id="solucoes" className={styles.solutions}>
        <div className={styles.interno}>
          <div className={styles.sectionTitle}>
            <span>NOSSOS PRODUTOS</span>

            <h2>
              Soluções para sua <strong>Empresa</strong>
            </h2>

            <p>
              Conheça as soluções corporativas da GVATEC para conectividade,
              gerenciamento e alta disponibilidade.
            </p>
          </div>

          <div className={styles.productsGrid}>
            {/* STARLINK */}
            <article className={styles.productCard}>
              <div className={styles.productImage}>
                <img
                  src="/static/images/hero-starlink.jpg"
                  alt="Starlink Corporativa"
                />
              </div>

              <div className={styles.productContent}>
                <h3>Starlink Corporativa para Empresas</h3>

                <p>
                  Internet via satélite de alta performance para empresas, áreas
                  remotas, filiais e operações críticas.
                </p>

                <ul>
                  <li>Starlink Frota</li>
                  <li>Starlink Helicóptero</li>
                  <li>Starlink Fixa com IP Público</li>
                  <li>Starlink Fixa com IP NAT</li>
                </ul>

                <a
                  href="https://wa.me/5554984130000"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Consultar solução →
                </a>
              </div>
            </article>

            {/* SD-WAN */}
            <article className={styles.productCard}>
              <div className={styles.productImage}>
                <img
                  src="/static/images/hero-starlink.jpg"
                  alt="Sistema SD-One Fortinet"
                />
              </div>

              <div className={styles.productContent}>
                <h3>Sistema SD-One Fortinet para sua Empresa</h3>

                <p>
                  Gerenciamento inteligente da sua rede corporativa com
                  segurança, estabilidade e controle centralizado.
                </p>

                <ul>
                  <li>SD-WAN Fortinet</li>
                  <li>Balanceamento de Links</li>
                  <li>VPN Corporativa</li>
                  <li>Firewall Integrado</li>
                </ul>

                <a
                  href="https://wa.me/5554984130000"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Consultar solução →
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Antiga SOluções
<section id="solucoes" className={styles.solutions}>
        <div className={styles.interno}>
          <div className={styles.sectionTitle}>
            <span>NOSSAS SOLUÇÕES</span>

            <h2>
              Soluções <strong>Starlink Corporativa</strong>
            </h2>

            <p>
              Planos e configurações desenhados para cada tipo de operação
              empresarial, com IP público, gerenciamento e suporte
              especializado.
            </p>
          </div>

          <div className={styles.solutionsGrid}>
            {solutions.map((item) => {
              const Icon = item.icon;

              return (
                <article className={styles.solutionCard} key={item.title}>
                  <div className={styles.solutionIcon}>
                    <img
                      src={item.icon}
                      alt={item.title}
                      className={styles.solutionIconImage}
                    />
                  </div>
                  <h3>{item.title}</h3>

                  <p>{item.subtitle}</p>

                  <ul>
                    {item.benefits.map((benefit) => (
                      <li key={benefit}>{benefit}</li>
                    ))}
                  </ul>

                  <a
                    href="https://wa.me/5554984130000"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Consultar valores →
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>
*/}
      <section id="gvatec" className={styles.about}>
        <div className={styles.interno}>
          <div className={styles.aboutImage}>
            <img src="/static/images/about-noc.jpg" alt="Centro de operações" />

            <div className={styles.aboutBadge}>
              <span className={styles.greenDot}></span>
              NOC ativo agora
            </div>
          </div>

          <div className={styles.aboutContent}>
            <span className={styles.aboutMini}>SOBRE A GVATEC</span>

            <h2>
              Por que escolher a <strong>GVATEC</strong>?
            </h2>

            <p>
              A GVATEC é especializada em soluções corporativas de tecnologia,
              atuando com conectividade, infraestrutura de redes e suporte
              especializado para empresas de todos os portes.
            </p>

            <p>
              Nossa missão é entregar soluções confiáveis, escaláveis e de alta
              disponibilidade para ambientes corporativos.
            </p>

            <p>
              Oferecemos muito mais do que conectividade. Entregamos
              inteligência em redes, segurança e suporte especializado.
            </p>

            <div className={styles.statsGrid}>
              {stats.map((item) => (
                <div className={styles.statCard} key={item.label}>
                  <div className={styles.statIcon}>
                    <img
                      src={item.icon}
                      alt={item.label}
                      className={styles.statIconImage}
                    />
                  </div>
                  <h3>{item.number}</h3>

                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.infrastructure}>
        <div className={styles.interno}>
          <div className={styles.sectionTitle}>
            <span>INFRAESTRUTURA</span>

            <h2>
              Infraestrutura <strong>Completa</strong>
            </h2>

            <p>
              Uma operação de ponta a ponta para manter sua empresa sempre
              conectada.
            </p>
          </div>

          <div className={styles.infrastructureGrid}>
            {infrastructure.map((item) => (
              <div className={styles.infrastructureCard} key={item.title}>
                <div className={styles.infrastructureIcon}>
                  <img
                    src={item.icon}
                    alt={item.title}
                    className={styles.infrastructureIconImage}
                  />
                </div>
                <h3>{item.title}</h3>

                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.fortinet}>
        <div className={styles.fortinetGlow}></div>

        <div className={styles.interno}>
          <div className={styles.fortinetContent}>
            <span className={styles.fortinetMini}>INTEGRAÇÃO FORTINET</span>

            <h2>
              Potencialize sua conectividade Starlink com
              <strong> SD-WAN Fortinet</strong>
            </h2>

            <p>
              Integração completa para ambientes multi-site com segurança de
              nível corporativo, alta disponibilidade e gestão centralizada.
            </p>

            <div className={styles.fortinetGrid}>
              {fortinetPerks.map((item) => (
                <div className={styles.fortinetItem} key={item.label}>
                  <div className={styles.fortinetIcon}>
                    <img
                      src={item.icon}
                      alt={item.label}
                      className={styles.fortinetIconImage}
                    />
                  </div>
                  {item.label}
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/5554984130000"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnPrimary}
            >
              <img src="/static/images/whatsapp-icon.png" alt="WhatsApp" />{" "}
              Falar com Especialista
            </a>
          </div>

          <div className={styles.fortinetImage}>
            <img src="/static/images/fortinet-integration.jpg" alt="Fortinet" />
          </div>
        </div>
      </section>

      <section className={styles.fortinet2}>
        <div className={styles.fortinetGlow2}></div>

        <div className={styles.interno}>
          <div className={styles.fortinetContent2}>
            <span className={styles.fortinetMini2}>INTEGRAÇÃO FORTINET</span>

            <h2>
              Potencialize sua conectividade Starlink com
              <strong> SD-WAN Fortinet</strong>
            </h2>

            <p>
              Integração completa para ambientes multi-site com segurança de
              nível corporativo, alta disponibilidade e gestão centralizada.
            </p>

            <div className={styles.fortinetGrid2}>
              {fortinetPerks2.map((item) => (
                <div className={styles.fortinetItem2} key={item.label}>
                  <span className={styles.fortinetIcon2}>{item.icon}</span>

                  {item.label}
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/5554984130000"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnPrimary2}
            >
              💬 Falar com Especialista
            </a>
          </div>

          <div className={styles.fortinetImage2}>
            <img src="/static/images/fortinet-integration.jpg" alt="Fortinet" />
          </div>
        </div>
      </section>

      <section id="beneficios" className={styles.benefits}>
        <div className={styles.interno}>
          <div className={styles.sectionTitle}>
            <span>Benefícios</span>

            <h2>
              Benefícios da <strong>Starlink Corporativa</strong>
            </h2>

            <p>
              Uma plataforma pronta para sustentar suas operações mais
              exigentes.
            </p>
          </div>

          <div className={styles.benefitsGrid}>
            {benefits.map((item) => (
              <div className={styles.benefitCard} key={item.title}>
                <div className={styles.benefitIcon}>{item.icon}</div>

                <h3>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className={styles.cta}>
        <div className={styles.ctaGrid}></div>

        <div className={styles.ctaGlowLeft}></div>

        <div className={styles.ctaGlowRight}></div>

        <div className={styles.interno}>
          <div className={styles.ctaContent}>
            <h2>
              Sua empresa merece uma conexão
              <br />
              preparada para qualquer desafio.
            </h2>

            <p>
              Fale agora com um especialista GVATEC e receba uma proposta
              personalizada para sua operação.
            </p>

            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnCta}
            >
              <img
                src="/static/images/whatsapp-icon.png"
                alt="WhatsApp"
                className={styles.whatsappIcon}
              />

              <span>Solicitar Consultoria Especializada</span>

              <img
                src="/static/images/flecha.png"
                alt="Seta para a direita"
                className={styles.arrowRightIcon}
              />
            </a>
          </div>
        </div>
      </section>

      <Rodape />
      <Whats />
    </>
  );
}
