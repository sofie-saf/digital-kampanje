import elonFake from '../assets/videos/elonfake.mp4';
import elonReal from '../assets/videos/elonreal.mp4';
import billfake from '../assets/videos/billfake.mp4';
import billreal from '../assets/videos/billreal.mp4';
import manfake from '../assets/videos/manfake.mp4';
import manreal from '../assets/videos/manreal.mp4';
import markfake from '../assets/videos/markfake.mp4';
import markreal from '../assets/videos/markreal.mp4';
import janfake from '../assets/videos/janfake.mp4';
import janreal from '../assets/videos/janreal.mp4';
import kimfake from '../assets/videos/kimfake.mp4';
import kimreal from '../assets/videos/kimreal.mp4';



import realFace from '../assets/images/realtom.png';
import fakeFace  from '../assets/images/faketom.png';
import realman from '../assets/images/realman.png';
import fakeman  from '../assets/images/fakeman.png';
import realgirl from '../assets/images/realgirl.png';
import fakegirl  from '../assets/images/fakegirl.png';
import realboy from '../assets/images/realboy.png';
import fakeboy  from '../assets/images/fakeboy.png';


const quizData = [
  {
    id: 1,
    question: "Hvilken av disse to videoene er ekte?",
    mediaType: "video",
    options: [
      {
        url: elonFake,
        label: "Video A",
        isCorrect: false,
      },
      {
        url: elonReal,
        label: "Video B",
        isCorrect: true,
      }
    ],
    explanation: "Video B er ekte fordi Deepfakes har ofte problemer med naturlig blunking. I denne videoen blunker personen enten for sjelden eller for ofte – på en unaturlig måte som mennesker sjelden gjør."
  },
  {
    id: 2,
    question: "Hvilket bilde er ekte?",
    mediaType: "image",
    options: [
      {
        url: fakeFace,
        label: "Bilde A",
        isCorrect: false,
      },
      {
        url: realFace,
        label: "Bilde B",
        isCorrect: true,
      }
    ],
    explanation: "Bilde B er ekte – sjekk detaljene i øynene og bakgrunnen, som ofte avslører deepfakes."
  },
  {
    id: 3,
    question: "Kan du se forskjellen?",
    mediaType: "video",
    options: [
      {
        url: billreal,
        label: "Video A",
        isCorrect: true,
      },
      {
        url: billfake,
        label: "Video B",
        isCorrect: false,
      }
    ],
    explanation: "Video A er ekte - Legg merke til hvordan lyset faller på ansiktet. I den falske videoen stemmer ikke skyggene med lysretningen i rommet, noe som avslører manipuleringen."
  },
  {
    id: 4,
    question: "Hvilket bilde er ekte?",
    mediaType: "image",
    options: [
      {
        url: realman,
        label: "Bilde A",
        isCorrect: true,
      },
      {
        url: fakeman,
        label: "Bilde B",
        isCorrect: false,
      }
    ],
    explanation: "Bilde A er ekte – Refleksjoner i øynene bør være konsistente med lyskilden – hvis ikke, er det et klart hint om at bildet er generert."
  },
  {
    id: 5,
    question: "Hvilket bilde er ikke en deepfake?",
    mediaType: "image",
    options: [
      {
        url: fakegirl,
        label: "Bilde A",
        isCorrect: false,
      },
      {
        url: realgirl,
        label: "Bilde B",
        isCorrect: true,
      }
    ],
    explanation: "Bilde B er ekte - Huden kan se for glatt og plastikkaktig ut, uten porer eller tekstur. Det gir et urealistisk, airbrushet preg."
  },
  {
    id: 6,
    question: "Hvilken av disse to videoene er ekte?",
    mediaType: "video",
    options: [
      {
        url: manreal,
        label: "video A",
        isCorrect: true,
      },
      {
        url: manfake,
        label: "video B",
        isCorrect: false,
      }
    ],
    explanation: "Video A er ekte - Legg merke til hvordan lyset faller på ansiktet. I den falske videoen stemmer ikke skyggene med lysretningen i rommet, noe som avslører manipuleringen."
  },
  {
    id: 7,
    question: "Hvilken bilde er ekte?",
    mediaType: "image",
    options: [
      {
        url: realboy,
        label: "Bilde A",
        isCorrect: true,
      },
      {
        url: fakeboy,
        label: "Bilde B",
        isCorrect: false,
      }
    ],
    explanation: "Bilde A er ekte - Øynene ser ofte for like ut, stirrer i samme retning, eller har en unaturlig glans. Mange AI-genererte bilder klarer ikke å gjenskape naturlige øyebevegelser og asymmetri."
  },
  {
    id: 8,
    question: "Hvilken av disse to videoene er ekte?",
    mediaType: "video",
    options: [
      {
        url: markfake,
        label: "video A",
        isCorrect: false,
      },
      {
        url: markreal,
        label: "video B",
        isCorrect: true,
      }
    ],
    explanation: "Video B er ekte - Hodet beveger seg unaturlig eller passer ikke med bevegelsen i skuldrene og nakken. Deepfakes kan ha problemer med kroppens naturlige bevegelser."
  },
  {
    id: 9,
    question: "Hvilken video er ekte?",
    mediaType: "video",
    options: [
      {
        url: janfake,
        label: "Video A",
        isCorrect: false,
      },
      {
        url: janreal,
        label: "Video B",
        isCorrect: true,
      }
    ],
    explanation: "Video A er ekte – se etter naturlige bevegelser og ingen AI-artefakter."
  },
  {
    id: 10,
    question: "Hvilken av disse to videoene er ekte?",
    mediaType: "video",
    options: [
      {
        url: kimreal,
        label: "video A",
        isCorrect: true,
      },
      {
        url: kimfake,
        label: "video B",
        isCorrect: false,
      }
    ],
    explanation: "Video A er ekte - Mennesker ser naturlig rundt seg, men i denne videoen er blikket for fast, eller øynene beveger seg unaturlig. Det kan avsløre en deepfake."
  }
];

export default quizData;
