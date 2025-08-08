import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, Phone, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function InteractiveResume() {
  // Sections that can be repliées
  const sectionsList = [
    "experiences",
    "formation",
    "certifications",
    "competences",
    "interets",
  ];

  // state d'ouverture/fermeture
  const [openSections, setOpenSections] = useState(
    sectionsList.reduce((acc, id) => ({ ...acc, [id]: true }), {})
  );

  const toggleSection = (id) =>
    setOpenSections((prev) => ({ ...prev, [id]: !prev[id] }));

  const openAll = () =>
    setOpenSections(
      sectionsList.reduce((acc, id) => ({ ...acc, [id]: true }), {})
    );

  const closeAll = () =>
    setOpenSections(
      sectionsList.reduce((acc, id) => ({ ...acc, [id]: false }), {})
    );

  // Sous‑composant section repliable
  const Section = ({ id, title, children }) => (
    <Card className="mb-8 shadow-md rounded-2xl border border-gray-200 overflow-hidden">
      <button
        onClick={() => toggleSection(id)}
        className="w-full flex justify-between items-center px-6 py-4 bg-gradient-to-r from-gray-50 via-white to-gray-50 hover:bg-gray-100"
      >
        <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
        {openSections[id] ? <ChevronUp /> : <ChevronDown />}
      </button>
      <AnimatePresence initial={false}>
        {openSections[id] && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <CardContent className="p-6 prose prose-slate max-w-none">
              {children}
            </CardContent>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  );

  return (
    <div className="p-6 sm:p-10 max-w-4xl mx-auto font-sans">
      {/* Header */}
      <header className="flex flex-col sm:flex-row sm:items-center mb-6">
        <div className="flex-1">
          <h1 className="text-5xl font-extrabold tracking-tight mb-3">
            Rémi GUERIN
          </h1>
        </div>
        <address className="not-italic flex-shrink-0 mt-4 sm:mt-0 grid gap-2 text-base">
          <a
            href="mailto:pro.rguerin@gmail.com"
            className="inline-flex items-center text-blue-600 hover:underline"
          >
            <Mail className="mr-2 h-4 w-4" /> pro.rguerin@gmail.com
          </a>
          <a
            href="tel:+33631335270"
            className="inline-flex items-center text-blue-600 hover:underline"
          >
            <Phone className="mr-2 h-4 w-4" /> +33&nbsp;6&nbsp;31&nbsp;33&nbsp;52&nbsp;70
          </a>
          <a
            href="https://www.linkedin.com/in/rémi-guerin/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 hover:underline"
          >
            <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
          </a>
        </address>
      </header>

      {/* Contrôles global */}
      <div className="flex justify-end mb-6 space-x-4 text-gray-600">
        <button
          onClick={openAll}
          className="inline-flex items-center gap-1 text-sm hover:text-gray-900"
        >
          <ChevronDown className="h-4 w-4" /> Tout ouvrir
        </button>
        <button
          onClick={closeAll}
          className="inline-flex items-center gap-1 text-sm hover:text-gray-900"
        >
          <ChevronUp className="h-4 w-4" /> Tout fermer
        </button>
      </div>

      {/* À propos (toujours visible, sans encadré) */}
      <section className="mb-10 prose prose-slate text-lg max-w-none leading-relaxed">
        <p>
          Ingénieur spécialisé en déploiement de solutions techniques, support
          client et gestion de projet IT. Fort d’une double compétence en
          relation client et administration de solutions logicielles, je veille
          à garantir l’efficacité et la satisfaction des utilisateurs.
        </p>
      </section>

      {/* Sections repliables */}
      <Section id="experiences" title="Expériences Professionnelles">
        <div className="space-y-8">
          <article>
            <h3 className="font-semibold text-xl">Chef de projet technique – Alumnforce / Mevia</h3>
            <p className="text-sm text-gray-500">07/2023 – 06/2025 · Paris, France</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Déploiement et intégration technique de solutions SaaS pour nouveaux clients.</li>
              <li>Pilotage complet de projets (kick‑off, planification, tests, formation).</li>
              <li>Garant de la conformité et du respect des standards techniques.</li>
              <li>Formation et accompagnement client (sessions, guides).</li>
              <li>Suivi des évolutions API et incidents techniques.</li>
              <li>Référent chef de projet pour l’application mobile.</li>
            </ul>
          </article>

          <article>
            <h3 className="font-semibold text-xl">IT Support & Maintenance – Dentsply Sirona</h3>
            <p className="text-sm text-gray-500">06/2022 – 07/2023 · Barcelone / Tours</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Installation et maintenance systèmes Windows via SCCM.</li>
              <li>Support niveau 1 & 2 (français, espagnol, anglais).</li>
              <li>Déploiement équipements IT pour nouveaux utilisateurs.</li>
            </ul>
          </article>

          <article>
            <h3 className="font-semibold text-xl">Réalisateur & Coordinateur Live – YouTube (Muriel Hermine)</h3>
            <p className="text-sm text-gray-500">09/2021 – 06/2022 · Remote</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Planification et gestion de directs YouTube hebdomadaires.</li>
              <li>Coordination technique des intervenants.</li>
            </ul>
          </article>
        </div>
      </Section>

      <Section id="formation" title="Formation">
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>ESAIP – Diplôme d’ingénieur informatique et réseaux</strong> (09/2019 – 09/2024) – Angers, France</li>
          <li><strong>Universidad de Castilla‑La Mancha – Programme d’échange</strong> (01/2023 – 06/2023) – Albacete, Espagne</li>
          <li><strong>Budapest University of Technology and Economics – Programme d’échange</strong> (01/2022 – 06/2022) – Budapest, Hongrie</li>
        </ul>
      </Section>

      <Section id="certifications" title="Certifications">
        <ul className="list-disc pl-5 space-y-2">
          <li>TOEIC – 970 points</li>
          <li>Azure AI Fundamentals (Microsoft)</li>
          <li>Product Owner Professional Certification (IMTF)</li>
          <li>Les fondements de la gestion de projet (LinkedIn & Microsoft)</li>
        </ul>
      </Section>

      <Section id="competences" title="Compétences">
        <h4 className="font-medium mb-3">Techniques</h4>
        <p className="mb-4">SaaS, Windows & Linux, API REST, SQL, SCCM, Jira, Trello, Agile (Scrum, Kanban)</p>
        <h4 className="font-medium mb-3">Interpersonnelles</h4>
        <p>Relation client, gestion de produit, organisation & coordination, communication technique, autonomie, esprit analytique</p>
      </Section>

      <Section id="interets" title="Centres d’intérêt & Engagement">
        <p className="mb-2">Entreprenariat, IA, transformation digitale, sports (Basket, Running, Vélo, Tennis de Table), voyages, culture cinématographique.</p>
        <p>Engagement associatif : Responsable développement du BDE (organisation d’évènements pour 150 élèves).</p>
      </Section>
    </div>
  );
}
