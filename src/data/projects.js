import grand1 from '../assets/GrandCanyon.jpg';
import grand2 from '../assets/GrandCanyon2.JPG';
import profiel from '../assets/profiel.JPG';
import RocketBoost1 from '../assets/RocketBoost1.png';
import RocketBoost2 from '../assets/RocketBoost2.png';
import EscapeRoom from '../assets/EscapeRoom.png';

export const projects = [
  {
    id: "rocket-boost",
    title: "Rocket Boost",
    desc: "Een game waar je met een rocket door obstakels vliegt en probeert de finish te halen. Haal je de finish niet, dan moet je opnieuw beginnen, haal je het wel, dan ga je naar het volgende level!",
    year: "24-25",
    image: RocketBoost1,
    detailImage: RocketBoost2,
  },
  {
    id: "portfolio",
    title: "Portfolio Website",
    desc: "Mijn persoonlijke portfolio met React en animaties. Hierin laat ik mijn projecten en vaardigheden zien als beginnend software developer.",
    year: "25-26",
    image: profiel,
    detailImage: grand1,
  },
  {
    id: "escape-room",
    title: "Escape Room Game",
    desc: "Een online escape room met puzzels en uitdagingen, waarin je uit meerdere kamers moet ontsnappen om het spel te halen. Je kan hints krijgen als je vastzit en je tijd wordt bijgehouden.",
    year: "24-25",
    image: EscapeRoom,
    detailImage: EscapeRoom,
  },
];
