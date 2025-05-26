import React, { useEffect } from 'react';

import Footer from '../components/Footer';
import './Infopage.css';

function InfoPage() {
  // Scroll fade-in effect
  useEffect(() => {
    const elements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <main className="info-page" role="main" aria-label="Informasjon om deepfakes og AI">
        <h1>Deepfakes: Forstå Teknologien, Faren og Hvordan Beskytte Seg</h1>

        <section className="fade-in">
          <h2>Hva er Deepfakes?</h2>
          <p>
            Deepfakes er medieinnhold – som videoer eller bilder – som er kunstig laget eller manipulert ved hjelp av avansert kunstig intelligens (AI).
            Ved å bruke nevrale nettverk og maskinlæring kan man lage svært realistiske falske videoer hvor personer ser ut til å gjøre eller si noe de aldri har gjort.
          </p>
          <p>
            Teknologien brukes i alt fra underholdning til mer problematiske formål som desinformasjon og svindel.
          </p>
        </section>

        <section className="fade-in video-section">
          <h3>Eksempel på Deepfake-video</h3>
          <iframe
  width="90%"
  height="480"
  src="https://www.youtube.com/embed/yVEhrIMc-ps"
  title="Eksempel på deepfake teknologi"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>
        </section>

        <section className="fade-in">
          <h2>Hvorfor er Deepfakes farlige?</h2>
          <p>
            Fordi de kan overbevise oss om falsk informasjon, har deepfakes mange potensielle farer:
          </p>
          <ul>
            <li><strong>Manipulasjon:</strong> Skape falske nyheter eller politisk propaganda.</li>
            <li><strong>Personlig skade:</strong> Lage falske videoer som kan skade noens omdømme.</li>
            <li><strong>Svindel og utpressing:</strong> Bruke deepfakes til økonomisk vinning eller trusler.</li>
            <li><strong>Demokratisk destabilisering:</strong> Undergrave tillit til medier og informasjon.</li>
          </ul>
          <p>
            Det gjør det avgjørende for oss å kunne identifisere og forstå denne teknologien.
          </p>
        </section>

        <section className="fade-in video-section">
          <h3>Video: Farlig bruk av deepfakes</h3>
          <iframe
  width="90%"
  height="480"
  src="https://www.youtube.com/embed/XuKUkyPegBE"
  title="Eksempel på deepfake teknologi"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>
        </section>

        <section className="fade-in">
          <h2>Hvordan kan du oppdage deepfakes?</h2>
          <p>
            Det finnes flere metoder for å oppdage deepfakes:
          </p>
          <ul>
            <li>Se etter unaturlige ansiktsbevegelser, som blinking eller ansiktsuttrykk.</li>
            <li>Vær skeptisk til videoer uten klar kilde eller som sprer seg raskt.</li>
            <li>Bruk faktasjekkingstjenester og pålitelige nyhetskilder.</li>
            <li>Vær oppmerksom på uvanlige lydeffekter eller stemmer som ikke virker autentiske.</li>
          </ul>
          <p>
            Teknologi for å avsløre deepfakes utvikler seg også raskt, men det er viktig at vi selv forblir kritiske.
          </p>
        </section>

        <section className="fade-in tips-section">
          <h2>Praktiske tips for sikker bruk av digitale medier</h2>
          <ul>
            <li><strong>Dobbeltsjekk alltid kilden</strong> før du stoler på en video eller et bilde.</li>
            <li><strong>Ikke del videoer</strong> som du ikke er sikker på er ekte.</li>
            <li><strong>Hold deg oppdatert</strong> om teknologi og nye trender innen AI.</li>
            <li><strong>Bruk pålitelige verktøy</strong> for faktasjekking og videoanalyse.</li>
            <li><strong>Snakk med andre</strong> om hva du har lært for å øke bevisstheten.</li>
          </ul>
        </section>

        <section className="fade-in video-section">
          <h3>AI og fremtiden: Hva kan vi forvente?</h3>
          <iframe
  width="90%"
  height="480"
  src="https://www.youtube.com/embed/g0IsE1Sle3Q"
  title="Eksempel på deepfake teknologi"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>
        </section>

        <section className="fade-in">
          <h2>Avslutning</h2>
          <p>
            Deepfakes representerer en stor teknologisk utvikling med både positive og negative sider.
            Ved å forstå teknologien og være kritiske til det vi ser og hører, kan vi beskytte oss mot misbruk.
            Denne siden har gitt deg kunnskap til å navigere bedre i en verden hvor AI spiller en stadig større rolle.
          </p>
          <p>
            Husk: Teknologi er verktøy – det er opp til oss hvordan vi bruker den.
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default InfoPage;
