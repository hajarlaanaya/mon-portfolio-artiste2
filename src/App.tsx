/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Instagram } from 'lucide-react';

const artworks = [
  {
    id: 1,
    title: "Nature Morte aux Raisins",
    medium: "Acrylique Monochromatique",
    description: "Une exploration des textures et de la lumière à travers un sujet classique.",
    image: "/images/Nature Morte aux Raisins.jpeg",
    colSpan: "col-span-12 md:col-span-7",
    aspect: "aspect-[4/3]",
    index: "01 / 10"
  },
  {
    id: 2,
    title: "L'Icône Pop",
    medium: "Encre & Pochoir",
    description: "Travail sur le contraste pur et l'impact visuel du bleu électrique.",
    image: "/images/Icône Pop.jpeg",
    colSpan: "col-span-12 md:col-span-5",
    aspect: "aspect-[3/4]",
    index: "02 / 10",
    offset: "md:pt-24"
  },
  {
    id: 3,
    title: "Vent de Plaine",
    medium: "Encre sur Papier",
    description: "Capture du mouvement et de l'éphémère à travers des traits rapides.",
    image: "/images/Vent de Plaine.jpeg",
    colSpan: "col-span-12 md:col-span-6",
    aspect: "aspect-square",
    index: "03 / 10"
  },
  {
    id: 4,
    title: "Pâturages d'Altitude",
    medium: "Acrylique sur Toile",
    description: "Sérénité d'un paysage pastoral entre ciel et terre.",
    image: "/images/Pâturages d'Altitude.jpeg",
    colSpan: "col-span-12 md:col-span-6",
    aspect: "aspect-[4/5]",
    index: "04 / 10",
    offset: "md:-mt-20 text-right"
  },
  {
    id: 5,
    title: "Symphonie Visuelle",
    medium: "Collage Multimédia",
    description: "Une fusion de textures et de rythmes musicaux.",
    image: "/images/Symphonie Visuelle.jpeg",
    colSpan: "col-span-12 md:col-span-8",
    aspect: "aspect-[16/9]",
    index: "05 / 10"
  },
  {
    id: 6,
    title: "Le Regard de l'Âme",
    medium: "Acrylique",
    description: "Force et profondeur d'un portrait masculin.",
    image: "/images/Le Regard de l'Âme.jpeg",
    colSpan: "col-span-12 md:col-span-4",
    aspect: "aspect-[3/4]",
    index: "06 / 10",
    offset: "md:pt-12"
  },
  {
    id: 7,
    title: "L'Élégante au Chapeau Rouge",
    medium: "Technique Mixte",
    description: "Style graphique et lettrages urbains.",
    image: "/images/L'Élégante au Chapeau Rouge.jpeg",
    colSpan: "col-span-12 md:col-span-5",
    aspect: "aspect-[3/4]",
    index: "07 / 10"
  },
  {
    id: 8,
    title: "Introspection",
    medium: "Acrylique",
    description: "Jeu d'ombres et de lumières sur le visage.",
    image: "/images/Introspection.jpeg",
    colSpan: "col-span-12 md:col-span-7",
    aspect: "aspect-[3/4]",
    index: "08 / 10",
    offset: "md:pt-32"
  },
  {
    id: 9,
    title: "Prisme de Couleurs",
    medium: "Crayons & Technique Mixte",
    description: "Décomposition spectrale d'un visage contemporain.",
    image: "/images/Prisme de Couleurs.jpeg",
    colSpan: "col-span-12 md:col-span-6",
    aspect: "aspect-[3/4]",
    index: "09 / 10"
  },
  {
    id: 10,
    title: "Abstrakt Typo",
    medium: "Mixed Media Collage",
    description: "Exploration de la forme et du signe.",
    image: "/images/Abstrakt Typo.jpeg",
    colSpan: "col-span-12 md:col-span-6",
    aspect: "aspect-[4/5]",
    index: "10 / 10",
    offset: "md:-mt-16"
  },
];

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative min-h-screen textured p-6 md:p-12 overflow-x-hidden selection:bg-royal/10">
      {/* Loading Overlay */}
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-paper"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="text-royal font-serif text-4xl italic"
            >
              L'Artiste
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <header className="flex flex-col md:flex-row justify-between items-start mb-16 md:mb-24 max-w-7xl mx-auto gap-8 md:gap-4">
        <div className="w-full md:w-1/3">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-serif text-4xl md:text-6xl leading-none uppercase tracking-tighter mb-4"
          >
            Hajar LAANAYA
          </motion.h1>
          <div className="flex items-center gap-4 flex-wrap">
            <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-semibold opacity-60">Portfolio Vol. I</span>
            <div className="h-px w-8 md:w-12 bg-coal opacity-20 hidden md:block"></div>
            <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-semibold royal-accent">2024 Collection</span>
          </div>
        </div>

        <div className="w-full md:w-1/3 text-[12px] md:text-[13px] leading-relaxed opacity-80 pt-0 md:pt-2">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-4"
          >
            Étudiante en <span className="font-semibold text-coal">Informatique Décisionnelle en Santé Digitale</span>[cite: 43]. Mon âme est celle d'un artiste multidisciplinaire. Je fais le pont entre la précision des données et la liberté de la toile.
          </motion.p>
          <p className="font-hand text-xl md:text-2xl opacity-100 text-royal">"Le code est une structure, l'encre est une émotion."</p>
        </div>

        <div className="w-full md:w-1/4 flex flex-col items-start md:items-end gap-6">
          <span className="md:vertical-text text-[8px] md:text-[9px] uppercase tracking-widest font-bold opacity-30 md:h-32">ARTISTE MULTIDISCIPLINAIRE</span>
          
          {/* BOUTON CV EN HAUT */}
          <a 
            href="/IT Manager CV Resume (2).pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-2 border border-royal text-royal text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-royal hover:text-white transition-all duration-300 rounded-sm"
          >
            Consulter CV
          </a>
        </div>
      </header>

      <main className="max-w-7xl mx-auto grid grid-cols-12 gap-y-12 md:gap-x-12 md:gap-y-32 items-start mb-32">
        {artworks.map((art) => (
          <div key={art.id} className={`${art.colSpan} ${art.offset || ''} transition-all duration-500`}>
            <ArtworkCard artwork={art} />
          </div>
        ))}
        
        <div className="col-span-12 mt-12 bg-royal/5 p-6 md:p-10 rounded-sm border border-royal/10">
          <p className="text-[10px] md:text-[11px] uppercase tracking-widest font-semibold text-royal mb-4">Recherche & Médiums</p>
          <div className="flex flex-wrap gap-x-6 gap-y-3 md:gap-x-10 md:gap-y-5">
            {['SKETCH', 'ACRYLIQUE', 'COLLAGE', 'ENCRE', 'TECHNIQUE MIXTE', 'DATA VISUALIZATION'].map(m => (
              <span key={m} className="text-[10px] md:text-xs opacity-60 hover:opacity-100 transition-opacity cursor-default font-medium">{m}</span>
            ))}
          </div>
        </div>
      </main>

      {/* BOUTON CV EN BAS */}
      <div className="max-w-7xl mx-auto mt-24 mb-12 flex justify-center">
        <a 
          href="/IT Manager CV Resume (2).pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group flex items-center gap-4 px-12 py-4 bg-black text-white text-xs uppercase tracking-[0.3em] hover:bg-royal transition-all duration-500 rounded-sm shadow-xl"
        >
          Voir mon parcours complet
          <span className="group-hover:translate-x-2 transition-transform">→</span>
        </a>
      </div>
      
      <footer className="max-w-7xl mx-auto border-t border-black/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 w-full md:w-auto">
          <div className="flex flex-col">
            <span className="text-[9px] uppercase tracking-widest opacity-40 mb-2">Contact</span>
            <a 
              href="mailto:laanayahajar7@gmail.com" 
              className="text-xs font-semibold hover:text-royal transition-colors"
            >
              laanayahajar7@gmail.com [cite: 50]
            </a>
          </div>

          <div className="flex flex-col">
            <span className="text-[9px] uppercase tracking-widest opacity-40 mb-2">Réseaux</span>
            <a 
              href="https://www.instagram.com/hajar_laa1" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex gap-4 items-center group"
            >
              <Instagram 
                size={16} 
                className="opacity-60 group-hover:opacity-100 group-hover:text-royal transition-all" 
              />
              <span className="text-xs font-semibold group-hover:text-royal transition-colors">
                @hajar_laa1
              </span>
            </a>
          </div>
        </div>

        <div className="text-center md:text-right w-full md:w-auto mt-4 md:mt-0">
          <p className="font-serif text-xl md:text-2xl tracking-tight leading-none mb-1">Invitation au Vernissage Privé</p>
          <p className="text-[9px] md:text-[10px] opacity-50 uppercase tracking-[0.2em]">Galerie Contemporaine — Paris / 2024</p>
        </div>
      </footer>
    </div>
  );
}

function ArtworkCard({ artwork, extraClass = "" }: { artwork: any, extraClass?: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`art-card ${extraClass}`}
    >
      <div className={`relative ${artwork.aspect} overflow-hidden group mb-3`}>
       <img 
       src={artwork.image} 
       alt={artwork.title}
       className="w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-105 md:filter md:grayscale md:group-hover:grayscale-0"
       referrerPolicy="no-referrer"
       />
        <div className="absolute bottom-2 left-2 font-hand text-white text-xl opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-md z-10">
          {artwork.medium}
        </div>
      </div>
      <div className="flex justify-between items-baseline">
        <span className="font-serif italic text-sm">{artwork.title}</span>
        <span className="text-[10px] opacity-40">{artwork.index}</span>
      </div>
    </motion.div>
  );
}