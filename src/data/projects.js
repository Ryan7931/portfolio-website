import grand1 from "../assets/GrandCanyon.jpg";
import grand2 from "../assets/GrandCanyon2.JPG";
import profiel from "../assets/profiel.JPG";
import RocketBoost1 from "../assets/RocketBoost1.png";
import RocketBoost2 from "../assets/RocketBoost2.png";
import EscapeRoom from "../assets/EscapeRoom.png";
import MagnetMayhem from "../assets/MagnetMayhemIngame.png";
import MagnetMayhem2 from "../assets/MagnetMayhemThumbnail.png";

export const projects = [
  {
    id: "rocket-boost",
    title: "Rocket Boost",
    desc: "Een game waar je met een rocket door obstakels vliegt en probeert de finish te halen. Haal je de finish niet, dan moet je opnieuw beginnen, haal je het wel, dan ga je naar het volgende level!",
    year: "24-25",
    image: RocketBoost1,
    detailImage: RocketBoost2,
    repo: "https://github.com/TechniekCollegeRotterdam/k0788-jr24-25-Ryan7931",
  },
  {
    id: "portfolio",
    title: "Portfolio Website",
    desc: "Mijn persoonlijke portfolio met React en animaties. Hierin laat ik mijn projecten en vaardigheden zien als beginnend software developer.",
    year: "25-26",
    image: profiel,
    detailImage: grand1,
    repo: "https://github.com/Ryan7931/portfolio-website",
  },
  {
    id: "escape-room",
    title: "Escape Room Game",
    desc: "Een online escape room met puzzels en uitdagingen, waarin je uit meerdere kamers moet ontsnappen om het spel te halen. Je kan hints krijgen als je vastzit en je tijd wordt bijgehouden.",
    year: "24-25",
    image: EscapeRoom,
    detailImage: EscapeRoom,
    repo: "https://github.com/TechniekCollegeRotterdam/project-escape-room-project-escape-room-rj",
  },
  {
    id: "magnet-mayhem",
    title: "Magnet Mayhem",
    desc: "Een game waarin je metalen blokken moet ontwijken terwijl je een magnetisch veld om je heen hebt. Dit veld wisselt om de 10 seconden van plus-pool naar min-pool, waardoor je soms wordt aangetrokken en soms afgestoten. Het doel is om zo lang mogelijk te overleven en een hoge score te behalen.",
    year: "25-26",
    image: MagnetMayhem,
    detailImage: MagnetMayhem2,
    repo: "https://www.roblox.com/games/128202264312814/Magnet-Mayhem",
  },
  {
    id: "ritouch",
    title: "Ritouch",
    desc: "Een website speciaal ontwikkeld voor een bedrijf dat zich richt op ademwerk en ontspanning. De website biedt informatie over de diensten van het bedrijf, zoals ademhalingsoefeningen en vertelt over de voordelen van ademwerk. Daarnaast vertelt de website het verhaal van de oprichter en biedt het een contactformulier voor geïnteresseerden om in contact te komen met het bedrijf.",
    year: "25-26",
    image: ritouch,
    detailImage: ritouch2,
    repo: "https://www.ritouch.nl",
  },
  {
    id: "aerospot",
    title: "AeroSpot",
    desc: "Een webapplicatie die gebruikers vliegtuigen laat spotten en hierdoor punten te verdienen. Gebruikers kunnen ook strijden met anderen om wie de meeste punten / vliegtuigen gespot heeft. De app houd ook bij hoeveel vliegtuigen de gebruiker gespot heeft en hoe zeldzaam deze waren. Daarnaast werkt het ook door middel van accounts dus iedereen heeft eigen progressie.",
    year: "25-26",
    image: aerospot,
    detailImage: aerospot2,
    repo: null,
  },
];
