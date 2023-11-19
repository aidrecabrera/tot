import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Methods() {
  const victimMethods = [
    {
      method: "Beatings",
      victims: [
        "Roland Simbulan",
        "Julius Giron",
        "Macario Tiu",
        "Eugenio Magpantay",
        "Joseph Gatus",
        "Rev. Cesar Taguba",
        "Reynaldo Guillermo",
        "Alejandro Arellano",
        "Charley Palma",
        "Victor Quinto",
        "Pedro de Guzman Jr.",
        "Reynaldo Rodriguez",
        "Ma. Cristina Verzola",
        "Armando Teng",
        "Romeo Bayle",
        "Agaton Topacio",
        "Reynaldo Ilao",
        "Erlinda Taruc-Co",
        "Ramon Casiple",
        "Winfiredo Hilao",
        "Bernabe Buscayno",
        "Jose Maria Sison",
      ],
    },
    {
      method: "Electric Shock",
      victims: [
        "Etta Rosales",
        "Charlie Revilla Palma",
        "Wilfredo Hilao",
        "Romeo Tolio",
        "Reynaldo Guillermo",
        "Alejandro Arellano",
        "Victor Quinto",
        "Pedro de Guzman Jr.",
        "Reynaldo Rodriguez",
        "Julius Giron",
        "Armando Teng",
        "Santiago Alonzo",
        "Romeo Bayle",
        "Agaton Topacio",
        "Neri Colmenares",
        "Trinidad Herrera",
        "Marco Palo",
      ],
    },
    {
      method: "San Juanico Bridge Air Treatment",
      victims: ["Jose 'Pete' Lacaba", "Bonifacio Ilagan"],
    },
    {
      method: "Truth Serum",
      victims: [
        "Pete Lacaba",
        "Danilo Vizmanos",
        "Fernando Tayag",
        "Bernardo Escarcha",
        "Julius Giron",
        "Victor Quinto",
      ],
    },
    {
      method: "Russian Roulette",
      victims: [
        "Etta Rosales",
        "Cesar Taguba",
        "Carlos Centenera",
        "Winifredo Hilao",
        "Danilo Vizmanos",
      ],
    },
    {
      method: "Pistol Whipping",
      victims: [
        "Reynaldo Guillermo",
        "Robert Sunga",
        "Joseph Gatus",
        "Maria Elena-Ang",
        "Nathan Quimpo",
      ],
    },
    {
      method: "Water Cure",
      victims: [
        "Judy Taguiwalo",
        "Guillermo Ponce de Leon",
        "Alfonso Abzagado",
        "Andrew Ocampo",
        "Jose Maria Sison",
      ],
    },
    {
      method: "Wet Submarine",
      victims: ["Charlie Palma", "Wenifredo Villareal"],
    },
    { method: "Dry Submarine", victims: ["Rolieto Trinidad"] },
    {
      method: "Strangulation",
      victims: [
        "Etta Rosales",
        "Carlos Centenera",
        "Willie Tatanis",
        "Juan Villegas",
        "Reynaldo Rodriguez",
      ],
    },
    {
      method: "Ashtray",
      victims: [
        "Marcelino Tolam Jr.",
        "Philip Limjoco",
        "Charley Palma",
        "Ma. Cristina Verzola",
        "Reynaldo Rodriguez",
        "Neri Colmenares",
        "Ernesto Luneta",
        "Peter Villaseñor",
      ],
    },
    {
      method: "Flat Iron Burns",
      victims: ["Cenon Sembrano", "Bonifacio Ilagan"],
    },
    { method: "Candle Burns", victims: ["Etta Rosales"] },
    {
      method: "Sinusunog Na Rekado",
      victims: ["Rolieto Trinidad", "Meynardo Espeleta", "Carlos Yari"],
    },
    {
      method: "Animal Treatment",
      victims: [
        "Leandro Manalo",
        "Alexander Arevalo",
        "Manuel Daez",
        "Marcelo Gallarin",
        "Romualdo Inductivo",
        "Faustino Samonte",
        "Rodolfo Macasalabang",
      ],
    },
    {
      method: "Cold Torture",
      victims: [
        "Rolieto Trinidad",
        "Nestor Bugayong",
        "Winifredo Hilao",
        "Pete Villaseñor",
        "Judy Taguiwalo",
      ],
    },
    {
      method: "Food Deprivation",
      victims: ["Jose Maria Sison", "Rev. Cesar Taguba"],
    },
    {
      method: "Pompyang Telephone Ear Clapping",
      victims: ["Charlie Revilla", "Julius Giron"],
    },
    {
      method: "Bullets Between Fingers Squeezing Hands",
      victims: ["Erlene Dangoy"],
    },
    {
      method: "Rape",
      victims: [
        "Maria Cristina Pargas-Bawagan",
        "Etta Rosales",
        "Erlene Dangoy",
      ],
    },
    { method: "Gang Rape", victims: ["Hilda Narciso"] },
    {
      method: "Molestation",
      victims: ["Judy Taguiwalo", "Erlinda Taruc-Co", "Cristina Pargas"],
    },
    { method: "Sticks Inserted Into Penises", victims: ["Bonifacio Ilagan"] },
    {
      method: "Solitary Confinement",
      victims: [
        "Ninoy Aquino",
        "Danilo Vizmanos",
        "Victor Corpus",
        "Bernabe Buscayno",
        "Jose Maria Sison",
        "Terry Adevoso",
      ],
    },
    {
      method: "Sleep Deprivation",
      victims: ["Ninoy Aquino", "Maria Elena-Ang"],
    },
    { method: "Loud Repetitive Music", victims: ["Ninoy Aquino"] },
    {
      method: "Forced Nudity",
      victims: [
        "Virgillo Villegas",
        "Maria Elena-Ang",
        "Erlene Dangoy",
        "Monica Atienza",
      ],
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-26">
        {victimMethods.map(({ method, victims }, index) => (
          <div className="flex flex-row gap-x-20 py-16" key={index}>
            <div className="w-1/2 text-9xl">{method}</div>
            <div className="w-1/2 text-5xl">
              <ul>
                {Array.isArray(victims) &&
                  victims.map((victim, i) => (
                    <li className="" key={i}>
                      <RevealLine />
                      {victim}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function RevealLine() {
  const animate = {
    initial: {
      width: "0%",
      transition: { duration: 1, ease: [0.33, 1, 0.68, 1] },
    },
    open: {
      width: "100%",
      transition: { duration: 1.1, ease: [0.33, 1, 0.68, 1] },
    },
  };
  const body = useRef(null);
  const isInView = useInView(body, { once: true, margin: "-10%" });

  useEffect(() => {
    console.log(isInView + "!!!!!!!!!!!!!");
  }, [isInView]);

  return (
    <>
      <div ref={body}>
        <motion.hr
          className="border border-white my-3"
          variants={animate}
          initial="initial"
          animate={isInView ? "open" : "initial"}
        />
      </div>
    </>
  );
}
