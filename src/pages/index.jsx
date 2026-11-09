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

  const parceiros = [
    "Avivar",
    "banrisul",
    "Carbonifera",
    "ccgl",
    "Conlog",
    "cooxupe",
    "equatorial",
    "ExpressoEmbaixador",
    "flamboia",
    "Guapi-Papeis",
    "laponia",
    "lebes",
    "NeoRodas",
    "pesacat",
    "saojoao",
    "sicredi",
    "stokcenter",
    "Termasa",
    "zaffari",
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

  const partnersRef = useRef(null);

  const moverParceiros = (direcao) => {
    const container = partnersRef.current;
    if (!container) return;

    const primeiroCard = container.querySelector(`.${styles.partnerCard}`);

    if (!primeiroCard) return;

    const distancia = primeiroCard.offsetWidth + 24;

    const proximaPosicao = container.scrollLeft + distancia * direcao;

    if (
      direcao > 0 &&
      proximaPosicao >= container.scrollWidth - container.clientWidth - 10
    ) {
      container.scrollTo({ left: 0, behavior: "smooth" });
      return;
    }

    if (direcao < 0 && container.scrollLeft <= 10) {
      container.scrollTo({
        left: container.scrollWidth,
        behavior: "smooth",
      });
      return;
    }

    container.scrollBy({
      left: distancia * direcao,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const container = partnersRef.current;
    if (!container) return;

    const intervalo = setInterval(() => {
      const card = container.querySelector(`.${styles.partnerCard}`);

      if (!card) return;

      const distancia = card.offsetWidth + 24;

      const chegouAoFinal =
        container.scrollLeft + container.clientWidth >=
        container.scrollWidth - 10;

      if (chegouAoFinal) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({
          left: distancia,
          behavior: "smooth",
        });
      }
    }, 3500);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <>
      <Menu />
      <section id="inicio" className={styles.hero}>
        <video
          src="/static/videos/banner.mp4"
          className={styles.heroBg}
          autoPlay
          muted
          loop
          playsInline
        />

        {/*
        <div className={styles.heroOverlay}></div>        
        <div className={styles.heroGrid}></div>
        */}

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
              Conheça as soluções corporativas da GVATECH para conectividade,
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
                  src="/static/images/hero-fortinet.jpg"
                  alt="Sistema SD-WAN Fortinet"
                />
              </div>

              <div className={styles.productContent}>
                <h3>Sistema SD-WAN Fortinet para sua Empresa</h3>

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
      <section id="GVATECH" className={styles.about}>
        <div className={styles.interno}>
          <div className={styles.aboutImage}>
            <img
              src="/static/images/about-noc1.jpg"
              alt="Centro de operações"
            />

            <div className={styles.aboutBadge}>
              <span className={styles.greenDot}></span>
              NOC ativo agora
            </div>
          </div>

          <div className={styles.aboutContent}>
            <span className={styles.aboutMini}>SOBRE A GVATECH</span>

            <h2>
              Por que escolher a <strong>GVATECH</strong>?
            </h2>

            <p>
              A GVATECH é especializada em soluções corporativas de tecnologia,
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

      <section className={styles.partners}>
        <div className={styles.interno}>
          <div className={styles.partnersHeader}>
            <div className={styles.partnersTitle}>
              <span>NOSSOS PARCEIROS</span>

              <h2>
                Grandes conexões começam com
                <strong> confiança.</strong>
              </h2>

              <p>
                Empresas que confiam na GVATECH e caminham conosco construindo
                conexões, tecnologia e resultados.
              </p>
            </div>

            <div className={styles.partnersControls}>
              <button
                type="button"
                onClick={() => moverParceiros(-1)}
                aria-label="Parceiros anteriores"
              >
                <span>←</span>
              </button>

              <button
                type="button"
                onClick={() => moverParceiros(1)}
                aria-label="Próximos parceiros"
              >
                <span>→</span>
              </button>
            </div>
          </div>

          <div className={styles.partnersCarousel}>
            <div className={styles.partnersTrack} ref={partnersRef}>
              {parceiros.map((nome) => (
                <div className={styles.partnerCard} key={nome}>
                  <img
                    src={`/static/images/parceiros/logo-${nome}.jpg`}
                    alt={`Parceiro ${nome}`}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className={styles.partnersBottom}>
            <div className={styles.partnersBottomLine}></div>

            <span>
              <span className={styles.partnersDot}></span>
              Parcerias que fortalecem conexões
            </span>

            <div className={styles.partnersBottomLine}></div>
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
          {/* ESTRUTURA */}
          <div className={styles.infrastructureExtra}>
            {/*
          PRESENÇA NACIONAL
            <div className={styles.infrastructureExtraCard}>
              <div className={styles.infrastructureExtraImage}>
                <img
                  src="/static/images/mapa-brasil.jpg"
                  alt="Mapa de abrangência nacional da GVATECH"
                />
              </div>

              <div className={styles.infrastructureExtraContent}>
                <span>ABRANGÊNCIA NACIONAL</span>
                <h3>Clientes em todo o Brasil</h3>
                <p>
                  Possuímos clientes em todos os estados brasileiros, levando
                  soluções de conectividade e tecnologia para empresas em
                  diferentes regiões do país.
                </p>
              </div>
            </div>
          */}

            <div className={styles.infrastructureExtraCard}>
              <div className={styles.infrastructureExtraImage}>
                <img
                  src="/static/images/sede-passofundo.jpg"
                  alt="Sede administrativa da GVATECH"
                />
              </div>

              <div className={styles.infrastructureExtraContent}>
                <span>NOSSA SEDE</span>
                <h3>Sede administrativa</h3>
                <p>
                  Nossa sede administrativa está localizada em Passo Fundo, no
                  Rio Grande do Sul, de onde coordenamos nossas operações e
                  atividades.
                </p>
              </div>
            </div>

            <div className={styles.infrastructureExtraCard}>
              <div className={styles.infrastructureExtraImage}>
                <img
                  src="/static/images/noc.jpg"
                  alt="Centro de operações NOC da GVATECH"
                />
              </div>

              <div className={styles.infrastructureExtraContent}>
                <span>MONITORAMENTO E OPERAÇÃO</span>
                <h3>Centro de Operações (NOC)</h3>
                <p>
                  Nosso NOC também está localizado em Passo Fundo/RS,
                  concentrando nossa estrutura de monitoramento e acompanhamento
                  das operações.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===========================
    ABRANGÊNCIA NACIONAL
=========================== */}
      <section className={styles.nationalReach}>
        <div className={styles.nationalGrid}></div>
        <div className={styles.nationalGlow}></div>
        <div className={styles.nationalGlowSecondary}></div>

        <div className={styles.nationalContainer}>
          <div className={styles.nationalHeader}>
            <span className={styles.nationalEyebrow}>
              <i></i> GVATECH • CONECTIVIDADE NACIONAL
            </span>

            <h2>
              Onde sua empresa precisa,
              <strong> nós estamos.</strong>
            </h2>

            <p>
              Tecnologia e conectividade que ultrapassam fronteiras. Uma
              estrutura preparada para atender empresas em qualquer região do
              Brasil.
            </p>
          </div>

          <div className={styles.nationalVisual}>
            <div className={styles.nationalMapAura}></div>

            <div className={styles.nationalMap}>
              <div className={styles.nationalScan}></div>

              <img
                src="/static/images/Mapa-brasil.png"
                alt="Mapa do Brasil representando a abrangência nacional da GVATECH"
              />
            </div>

            {/* PONTOS DE DESTAQUE */}
            <div className={styles.nationalTag + " " + styles.tagNorth}>
              <span className={styles.nationalTagDot}></span>
              NORTE
            </div>

            <div className={styles.nationalTag + " " + styles.tagNortheast}>
              <span className={styles.nationalTagDot}></span>
              NORDESTE
            </div>

            <div className={styles.nationalTag + " " + styles.tagCenter}>
              <span className={styles.nationalTagDot}></span>
              CENTRO-OESTE
            </div>

            <div className={styles.nationalTag + " " + styles.tagSoutheast}>
              <span className={styles.nationalTagDot}></span>
              SUDESTE
            </div>

            <div className={styles.nationalTag + " " + styles.tagSouth}>
              <span className={styles.nationalTagDot}></span>
              SUL
            </div>

            {/* INFORMAÇÃO FLUTUANTE */}
            <div className={styles.nationalFloating}>
              <span className={styles.nationalFloatingIcon}>✦</span>
              <div>
                <strong>Presença nacional</strong>
                <small>Conectando empresas em todo o Brasil</small>
              </div>
            </div>
          </div>

          <div className={styles.nationalFooter}>
            <div className={styles.nationalFooterText}>
              <span>ALCANCE QUE CONECTA</span>
              <h3>Um Brasil inteiro ao seu alcance.</h3>
            </div>

            <div className={styles.nationalFooterInfo}>
              <span className={styles.nationalFooterLine}></span>
              <p>
                Do planejamento à operação, levamos soluções de conectividade e
                tecnologia para diferentes regiões do país.
              </p>
            </div>
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
              Fale agora com um especialista GVATECH e receba uma proposta
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
