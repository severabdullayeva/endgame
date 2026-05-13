import mCarlsen from '../../assets/grandmaster/magnus-carlsen.png'
import hNakamura from '../../assets/grandmaster/hikaru-nakamura.png'
import fCaruana from '../../assets/grandmaster/fabiano-caruana.png'
import iNepomniachtchi from '../../assets/grandmaster/ian-nepomniachtchi.png'
import aFirouzja from '../../assets/grandmaster/alireza-firouzja.png'
import dLiren from '../../assets/grandmaster/ding-liren.png'
import aGiri from '../../assets/grandmaster/anish-giri.png'
import vKramnik from '../../assets/grandmaster/vladimir-kramnik.png'
import wSo from '../../assets/grandmaster/wesley-so.png'
import tRadjabov from '../../assets/grandmaster/teimour-radjabov.png'
import sMamedyarov from '../../assets/grandmaster/shakhriyar-mamedyarov.png'
import rMammadov from '../../assets/grandmaster/rauf-Mammadov.png'
import vGashimov from '../../assets/grandmaster/vugar-gashimov.png'



const grandmasters = [
  {
    id: 1,
    name: "Vugar Gashimov",
    country: "Azerbaijan",
    rating: 2760,
    image: vGashimov,
    shortBio: "Creative attacking grandmaster and Azerbaijani chess legend.",

    fullBio:
      "Vugar Gashimov was an Azerbaijani chess grandmaster known for his extremely creative and aggressive style. He was one of the most talented players of his generation and made a huge impact on modern attacking chess before his early passing.",

    style: "Aggressive / Tactical / Creative",

    achievements: [
      "3-time Azerbaijan Chess Champion",
      "European Team Championship Gold Medal",
      "Reached Top 10 world ranking"
    ]
  },

  {
    id: 2,
    name: "Hikaru Nakamura",
    country: "USA",
    rating: 2780,
    image: hNakamura,
    shortBio: "Blitz specialist and top chess streamer worldwide.",

    fullBio:
      "Hikaru Nakamura is an American chess grandmaster, renowned for his exceptional blitz and bullet skills. He is one of the strongest online chess players and a major content creator in the chess community.",

    style: "Aggressive / Speed Chess Specialist",

    achievements: [
      "5-time US Chess Champion",
      "World Rapid & Blitz medalist",
      "Top Chess streamer on Twitch"
    ]
  },

  {
    id: 3,
    name: "Fabiano Caruana",
    country: "USA",
    rating: 2790,
    image: fCaruana,
    shortBio: "Highly accurate positional and classical player.",

    fullBio:
      "Fabiano Caruana is an American-Italian chess grandmaster and one of the most precise classical players in the world. He challenged for the World Championship in 2018.",

    style: "Positional / Classical / Highly Accurate",

    achievements: [
      "World Championship Challenger (2018)",
      "Multiple US Champion",
      "Sinquefield Cup Winner"
    ]
  },

  {
    id: 4,
    name: "Shakhriyar Mamedyarov",
    country: "Azerbaijan",
    rating: 2750,
    image: sMamedyarov,
    shortBio: "Aggressive attacking player with tactical vision.",

    fullBio:
      "Shakhriyar Mamedyarov is an Azerbaijani grandmaster known for his dynamic and unpredictable attacking style. He has been one of the top-ranked players in the world for many years.",

    style: "Aggressive / Tactical",

    achievements: [
      "World Junior Champion (2003)",
      "Multiple Olympiad team medals",
      "Top 10 world ranking peak"
    ]
  },

  {
    id: 5,
    name: "Alireza Firouzja",
    country: "France",
    rating: 2785,
    image: aFirouzja,
    shortBio: "Young prodigy known for aggressive attacking style.",

    fullBio:
      "Alireza Firouzja is a French-Iranian chess grandmaster and one of the youngest elite players in chess history. Known for his fearless attacking style.",

    style: "Aggressive / Dynamic / Modern",

    achievements: [
      "World Rapid Chess Champion",
      "Youngest 2800+ rated player",
      "Grand Swiss Winner"
    ]
  },

  {
    id: 6,
    name: "Ding Liren",
    country: "China",
    rating: 2780,
    image: dLiren,
    shortBio: "Solid and calm world-class defensive player.",

    fullBio:
      "Ding Liren is a Chinese chess grandmaster and former World Chess Champion. He is known for his extremely solid defensive technique and calm playing style.",

    style: "Defensive / Positional / Solid",

    achievements: [
      "World Chess Champion (2023)",
      "Candidates Tournament Winner",
      "Olympiad Gold Medalist"
    ]
  },

  {
    id: 7,
    name: "Anish Giri",
    country: "Netherlands",
    rating: 2760,
    image: aGiri,
    shortBio: "Very precise and hard-to-beat positional player.",

    fullBio:
      "Anish Giri is a Dutch grandmaster known for his extremely solid and accurate play. He is one of the hardest players to defeat in classical chess.",

    style: "Positional / Solid / Defensive",

    achievements: [
      "Multiple Dutch Champion",
      "World Cup Semifinalist",
      "Top 10 world ranking peak"
    ]
  },

  {
    id: 8,
    name: "Vladimir Kramnik",
    country: "Russia",
    rating: 2810,
    image: vKramnik,
    shortBio: "Former world champion and classical chess legend.",

    fullBio:
      "Vladimir Kramnik is a former World Chess Champion who defeated Garry Kasparov in 2000. He is known for deep strategic understanding.",

    style: "Classical / Strategic / Positional",

    achievements: [
      "World Chess Champion (2000–2007)",
      "Defeated Kasparov",
      "Multiple Olympiad gold medals"
    ]
  },

  {
    id: 9,
    name: "Wesley So",
    country: "USA",
    rating: 2765,
    image: wSo,
    shortBio: "Very stable and strategic universal player.",

    fullBio:
      "Wesley So is a Filipino-American grandmaster known for his calm, universal playing style and consistency at elite level.",

    style: "Universal / Stable",

    achievements: [
      "US Chess Champion",
      "World Fischer Random Champion",
      "Grand Chess Tour Winner"
    ]
  },

  {
    id: 10,
    name: "Teimour Radjabov",
    country: "Azerbaijan",
    rating: 2740,
    image: tRadjabov,
    shortBio: "Strong defensive expert and strategic thinker.",

    fullBio:
      "Teimour Radjabov is an Azerbaijani grandmaster known for his strong defensive preparation and deep strategic ideas.",

    style: "Defensive / Strategic",

    achievements: [
      "World Cup Winner (2019)",
      "Olympiad Gold Medalist",
      "Top 10 world ranking peak"
    ]
  },

  {
    id: 11,
    name: "Ian Nepomniachtchi",
    country: "Russia",
    rating: 2775,
    image: iNepomniachtchi,
    shortBio: "Fast-paced player with strong opening preparation.",

    fullBio:
      "Ian Nepomniachtchi is a Russian grandmaster known for his fast calculation and strong preparation in opening theory.",

    style: "Fast / Tactical",

    achievements: [
      "World Championship Challenger (2021, 2023)",
      "Candidates Winner (2020, 2022)",
      "World Blitz Champion"
    ]
  },

  {
    id: 12,
    name: "Rauf Mammadov",
    country: "Azerbaijan",
    rating: 2690,
    image: rMammadov,
    shortBio: "Fast and sharp tactical Azerbaijani grandmaster.",

    fullBio:
      "Rauf Mammadov is an Azerbaijani grandmaster known for his sharp tactical play and fast calculation ability.",

    style: "Tactical / Fast",

    achievements: [
      "Azerbaijan National Champion",
      "Olympiad Team Player",
      "International tournament winner"
    ]
  },

  {
    id: 13,
    name: "Magnus Carlsen",
    country: "Norway",
    rating: 2830,
    image: mCarlsen,
    shortBio: "Former world champion known for exceptional endgame skills.",

    fullBio:
      "Magnus Carlsen is a Norwegian chess grandmaster and former World Chess Champion. He is widely considered one of the greatest chess players of all time.",

    style: "Universal / Endgame Master",

    achievements: [
      "World Chess Champion (2013–2023)",
      "Highest rated player in history",
      "Multiple World Rapid & Blitz titles"
    ]
  }
];

export default grandmasters;