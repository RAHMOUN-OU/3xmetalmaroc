import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, ArrowDown, MessageCircle, Wrench, Building2, Settings, Hammer, Layers, Shield, Users } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { motion } from 'motion/react';
import { Plans3DSection } from '@/app/components/Plans3DSection';
// Placeholders for images to be provided by user
const logoImg = "/3xmetallogo-removebg-preview.png";
const holmarcomLogo = "/holmarcomlogo.png";
const lmbaLogo = "/lmbalogo.png";
const nectarLogo = "/nectarlogo.png";
const steelLogo = "/steel logo.jpeg";
// Note: using encoded space for safety if needed, but often modern bundlers handle it. 
// If it fails, we might need to rename files or use %20. 
// React usually handles src strings with spaces fine in development.
const ciaLogo = "/cia logo.jpeg";
const project1 = "/nosrealisation1.jpeg";
const project2 = "/nosrealisation2.jpeg";
const project3 = "/nosrealisation3.jpeg";
const project4 = "/nosrealisation4.jpeg";
const plan3D = "/nosrealisation5.jpeg";
const plan3D1 = "/3D1.jpeg";
const plan3D2 = "/3D2.jpeg";
const plan3D3 = "/3D3.jpeg";
const plan3D4 = "/3D4.jpeg";
const plan3D5 = "/3D5.jpeg";
const plan3D6 = "/3D6.jpeg";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/212681056307?text=Bonjour%203X%20Métal%20Maroc,%20je%20souhaite%20obtenir%20plus%20d\'informations', '_blank');
  };

  const services = [
    {
      number: '01',
      icon: <Building2 className="w-8 h-8" />,
      title: 'Études techniques et réalisation de plans',
      description: 'Conception et réalisation de plans techniques détaillés pour vos projets de construction métallique'
    },
    {
      number: '02',
      icon: <Settings className="w-8 h-8" />,
      title: 'Tuyauterie industrielle',
      description: 'Préfabrication et montage de tuyauterie industrielle adaptés à vos besoins spécifiques'
    },
    {
      number: '03',
      icon: <Wrench className="w-8 h-8" />,
      title: 'Fabrication d\'ouvrages métalliques',
      description: 'Fabrication sur mesure d\'ouvrages en acier et inox de haute qualité'
    },
    {
      number: '04',
      icon: <Layers className="w-8 h-8" />,
      title: 'Montage de structures métalliques',
      description: 'Installation et montage professionnel de structures métalliques sur site'
    },
    {
      number: '05',
      icon: <Hammer className="w-8 h-8" />,
      title: 'Travaux de génie civil',
      description: 'Réalisation de fondations métalliques et travaux de génie civil spécialisés'
    },
    {
      number: '06',
      icon: <Shield className="w-8 h-8" />,
      title: 'Maintenance industrielle',
      description: 'Services de maintenance préventive et corrective pour vos installations industrielles'
    }
  ];

  const team = [
    {
      name: 'Omar TAJER',
      role: 'Gérant technique',
      specialty: 'Dessinateur industriel et suivi de chantier'
    },
    {
      name: 'Azeddine AIT BELLA',
      role: 'Gérant administratif',
      specialty: 'Gestion documentaire & suivi administratif'
    },
    {
      name: '+15 Collaborateurs',
      role: 'Staff & Ingénieurs',
      specialty: 'Une équipe pluridisciplinaire d\'ingénieurs et techniciens qualifiés',
      isGroup: true
    }
  ];

  const projects = [
    { image: project1, title: 'Structure Métallique', category: 'Construction' },
    { image: project2, title: 'Charpente Industrielle', category: 'Montage' },
    { image: project3, title: 'Infrastructure Métallique', category: 'Fabrication' },
    { image: project4, title: 'Équipement Industriel', category: 'Tuyauterie' },
    { image: plan3D, title: 'Plan 3D Technique', category: 'Études' }
  ];

  const plans3D = [
    {
      image: plan3D1,
      title: 'Système de Stockage Industriel avec Cuves',
      description: 'Conception 3D détaillée d\'un système de stockage industriel comprenant 6 cuves cylindriques verticales de différentes capacités, avec plateformes d\'accès, escaliers métalliques, garde-corps de sécurité et réseau de tuyauterie intégré. Structure avec fondation en béton armé dimensionnée selon les charges.'
    },
    {
      image: plan3D2,
      title: 'Structure Industrielle Multi-Niveaux',
      description: 'Conception 3D avancée d\'une structure métallique complexe. Cette modélisation met en évidence l\'optimisation de l\'espace et la robustesse de la charpente, adaptées aux exigences industrielles spécifiques.'
    },
    {
      image: plan3D3,
      title: 'Bâtiment Industriel - Structure Métallique',
      description: 'Modélisation 3D complète d\'un bâtiment industriel avec charpente métallique, poteaux en profilés HEA/HEB, traverses, pannes de toiture, contreventements et système de fixations. Structure calculée selon les normes européennes et marocaines avec plans de détails d\'assemblage.'
    },
    {
      image: plan3D4,
      title: 'Hangar Industriel à Portique',
      description: 'Conception 3D d\'un hangar industriel avec structure à portique en acier, fermes triangulées, poteaux espacés régulièrement, système de contreventement en croix de Saint-André. Modèle incluant fondations, ancrages et détails de boulonnerie pour assemblage sur site.'
    },
    {
      image: plan3D5,
      title: 'Structure de Production Multi-Travées',
      description: 'Plan 3D d\'une structure de production industrielle composée de plusieurs travées avec charpente métallique en profilés laminés, poutres principales et secondaires, système de stabilité longitudinal et transversal. Calculs de charges permanentes et d\'exploitation inclus.'
    },
    {
      image: plan3D6,
      title: 'Escalier Industriel Métallique en Double Volée',
      description: 'Modélisation 3D détaillée d\'un escalier industriel en acier avec double volée, palier intermédiaire, structure porteuse en poutrelles, marches caillebotis anti-dérapant, garde-corps normalisés et poteaux de support. Tous les éléments sont dimensionnés selon les normes de sécurité.'
    }
  ];

  const partners = [
    { logo: holmarcomLogo, name: 'Holmarcom Group' },
    { logo: lmbaLogo, name: 'LMBA' },
    { logo: nectarLogo, name: 'Nectar' },
    { logo: steelLogo, name: 'Steel Africa' },
    { logo: ciaLogo, name: 'CIA' }
  ];

  const testimonials = [
    {
      quote: 'Les plans 3D réalisés par 3X Métal Maroc sont d\'une précision remarquable. Chaque détail technique est clairement défini, ce qui a grandement facilité l\'exécution de notre projet industriel. Un travail d\'ingénierie exceptionnel !',
      author: 'Mohamed Dahiri',
      company: 'Chef de projet, Société de Construction Industriel',
      rating: 5,
      type: '3d'
    },
    {
      quote: 'La réalisation de notre structure métallique a été parfaitement exécutée. De la conception à l\'installation finale, l\'équipe a démontré un professionnalisme et une maîtrise technique impressionnants. Délais respectés et qualité au rendez-vous.',
      author: 'Mustapha Chahyd',
      company: 'Responsable Technique',
      rating: 5,
      type: 'realisation'
    },
    {
      quote: 'Nous avons fait appel à 3X Métal Maroc pour la modélisation 3D de notre usine. Le niveau de détail et la conformité aux normes marocaines et internationales nous ont pleinement satisfaits. Je recommande vivement leurs services d\'études techniques.',
      author: 'Amine Assellaou',
      company: 'Directeur Production, Société Industrielle Juice & Nectar',
      rating: 5,
      type: '3d'
    },
    {
      quote: 'Projet de charpente métallique mené de main de maître. L\'équipe de 3X Métal Maroc a su répondre à toutes nos exigences techniques avec une grande réactivité. La coordination entre l\'atelier et le chantier était impeccable.',
      author: 'Darif Mohamed',
      company: 'Ingénieur Projet, Société Steel CIA',
      rating: 5,
      type: 'realisation'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
        }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <img src={logoImg} alt="3X Métal Maroc" className="h-14" />

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <button onClick={() => scrollToSection('about')} className={`transition-colors ${isScrolled ? 'text-gray-700 hover:text-[#E02B20]' : 'text-white hover:text-[#E02B20]'}`}>
                À Propos
              </button>
              <button onClick={() => scrollToSection('services')} className={`transition-colors ${isScrolled ? 'text-gray-700 hover:text-[#E02B20]' : 'text-white hover:text-[#E02B20]'}`}>
                Services
              </button>
              <button onClick={() => scrollToSection('projects')} className={`transition-colors ${isScrolled ? 'text-gray-700 hover:text-[#E02B20]' : 'text-white hover:text-[#E02B20]'}`}>
                Réalisations
              </button>
              <button onClick={() => scrollToSection('partners')} className={`transition-colors ${isScrolled ? 'text-gray-700 hover:text-[#E02B20]' : 'text-white hover:text-[#E02B20]'}`}>
                Partenaires
              </button>
              <button onClick={() => scrollToSection('contact')} className={`transition-colors ${isScrolled ? 'text-gray-700 hover:text-[#E02B20]' : 'text-white hover:text-[#E02B20]'}`}>
                Contact
              </button>
              <Button onClick={openWhatsApp} className="bg-[#E02B20] hover:bg-[#c02318]">
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden"
            >
              {isMenuOpen ? (
                <X className={`w-6 h-6 ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
              ) : (
                <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden bg-white border-t py-4">
              <div className="flex flex-col gap-4">
                <button onClick={() => scrollToSection('about')} className="text-left text-gray-700 hover:text-[#E02B20]">
                  À Propos
                </button>
                <button onClick={() => scrollToSection('services')} className="text-left text-gray-700 hover:text-[#E02B20]">
                  Services
                </button>
                <button onClick={() => scrollToSection('projects')} className="text-left text-gray-700 hover:text-[#E02B20]">
                  Réalisations
                </button>
                <button onClick={() => scrollToSection('partners')} className="text-left text-gray-700 hover:text-[#E02B20]">
                  Partenaires
                </button>
                <button onClick={() => scrollToSection('contact')} className="text-left text-gray-700 hover:text-[#E02B20]">
                  Contact
                </button>
                <Button onClick={openWhatsApp} className="bg-[#E02B20] hover:bg-[#c02318] w-full">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/La_construction_metallique__un_choix_durable_et_economique_pour_vos_projets.png')`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a3a52]/95 to-[#1a3a52]/70"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl mb-6 max-w-4xl mx-auto">
              Votre Partenaire en Construction Métallique & Tuyauterie Industrielle
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-200">
              Excellence, fiabilité et innovation au service de vos projets industriels
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => scrollToSection('services')}
                className="bg-[#E02B20] hover:bg-[#c02318] text-lg px-8 py-6"
              >
                Découvrir Nos Services
              </Button>
              <Button
                size="lg"
                onClick={openWhatsApp}
                variant="outline"
                className="bg-white/10 border-white text-white hover:bg-white hover:text-[#1a3a52] text-lg px-8 py-6"
              >
                Demander un Devis
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown className="w-8 h-8 text-white" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl text-[#1a3a52] mb-6">À Propos de 3X Métal Maroc</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Fondée par trois partenaires expérimentés, 3X Métal Maroc est votre partenaire de confiance pour tous vos besoins en construction métallique et tuyauterie industrielle. Notre expertise combinée et notre engagement envers l'excellence nous permettent de livrer des solutions sur mesure, fiables et durables.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              { title: 'Qualité garantie', desc: 'Fabrication de haute qualité respectant les normes les plus strictes' },
              { title: 'Respect des délais', desc: 'Livraison ponctuelle sur tous nos projets' },
              { title: 'Suivi personnalisé', desc: 'Accompagnement dédié à chaque étape de votre projet' },
              { title: 'Réactivité totale', desc: 'Équipe disponible et réactive à vos besoins' }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-[#5B9BD5] rounded-full flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl mb-2 text-[#1a3a52]">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="bg-[#1a3a52] text-white p-8 rounded-lg text-center">
            <h3 className="text-2xl md:text-3xl mb-4">Notre Vision</h3>
            <p className="text-lg max-w-3xl mx-auto">
              Offrir des solutions sur mesure, fiables et durables, tout en assurant la satisfaction totale de nos clients à travers l'innovation et l'excellence opérationnelle.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl text-[#1a3a52] mb-4">Notre Équipe de Gérance</h2>
            <p className="text-lg text-gray-700">Trois experts au service de vos projets</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-xl transition-shadow"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-[#5B9BD5] to-[#E02B20] rounded-full mx-auto mb-6 flex items-center justify-center text-white text-3xl">
                  {member.isGroup ? <Users className="w-10 h-10" /> : member.name.charAt(0)}
                </div>
                <h3 className="text-2xl text-[#1a3a52] mb-2">{member.name}</h3>
                <p className="text-[#E02B20] mb-3">{member.role}</p>
                <p className="text-gray-600">{member.specialty}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl text-[#1a3a52] mb-4">Nos Services</h2>
            <p className="text-lg text-gray-700">Des solutions complètes pour tous vos besoins industriels</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-5xl text-[#E02B20]/20 group-hover:text-[#E02B20]/40 transition-colors">
                    {service.number}
                  </span>
                  <div className="text-[#5B9BD5] group-hover:text-[#E02B20] transition-colors">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl text-[#1a3a52] mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Capabilities */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl text-[#1a3a52] mb-4">Capacités Techniques</h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#1a3a52] to-[#2a4a62] text-white p-8 rounded-lg"
            >
              <h3 className="text-2xl md:text-3xl mb-6">Capacités Métalliques</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-[#5B9BD5] flex-shrink-0 mt-1" />
                  <span>Découpe, perçage et meulage de profilés</span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-[#5B9BD5] flex-shrink-0 mt-1" />
                  <span>Soudure acier & inox de haute précision</span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-[#5B9BD5] flex-shrink-0 mt-1" />
                  <span>Assemblage en atelier avec essais avant expédition</span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-[#5B9BD5] flex-shrink-0 mt-1" />
                  <span>Préparation logistique pour transport et montage</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#5B9BD5] to-[#7BADD9] text-white p-8 rounded-lg"
            >
              <h3 className="text-2xl md:text-3xl mb-6">Génie Civil</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Hammer className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                  <span>Réalisation de plots, longrines et radiers en béton armé</span>
                </li>
                <li className="flex items-start gap-3">
                  <Hammer className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                  <span>Coffrage et ferraillage adaptés aux structures métalliques</span>
                </li>
                <li className="flex items-start gap-3">
                  <Hammer className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                  <span>Travaux de bétonnage conformes aux normes marocaines</span>
                </li>
                <li className="flex items-start gap-3">
                  <Hammer className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                  <span>Coordination parfaite avec l'équipe de montage</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl text-[#1a3a52] mb-4">Nos Réalisations</h2>
            <p className="text-lg text-gray-700">Des projets d'envergure réalisés avec excellence</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a3a52] via-[#1a3a52]/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <span className="inline-block bg-[#E02B20] px-3 py-1 rounded text-sm mb-2">
                      {project.category}
                    </span>
                    <h3 className="text-xl">{project.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3D Plans Section */}
      <Plans3DSection plans3D={plans3D} />

      {/* Partners Section */}
      <section id="partners" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl text-[#1a3a52] mb-4">Nos Partenaires</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-24 w-auto object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl text-[#1a3a52] mb-4">Témoignages</h2>
            <p className="text-lg text-gray-700">Ce que nos clients disent de nous</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-[#E02B20] text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="text-[#1a3a52]">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-[#1a3a52] text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4">Pourquoi Nous Choisir ?</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'Expérience et implication directe des fondateurs',
              'Grande flexibilité sur les chantiers',
              'Tarification claire et transparente',
              'Relations de confiance avec nos partenaires',
              'Gestion complète de A à Z',
              'Respect des normes marocaines et internationales'
            ].map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                <div className="w-8 h-8 bg-[#E02B20] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white">✓</span>
                </div>
                <p className="text-lg">{reason}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl text-[#1a3a52] mb-4">Contactez-Nous</h2>
            <p className="text-lg text-gray-700">Parlons de votre projet</p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-lg shadow-lg"
            >
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-[#E02B20] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl text-[#1a3a52] mb-2">Adresse</h3>
                    <p className="text-gray-700">5, Rue de Dixmude, 1er Étage, Appt N°2<br />Benjdia, Casablanca, Maroc<br />Mediouna</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-[#E02B20] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl text-[#1a3a52] mb-2">Téléphone</h3>
                    <p className="text-gray-700">+212 681-056307</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-[#E02B20] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl text-[#1a3a52] mb-2">Email</h3>
                    <p className="text-gray-700">contact@3xmetalmaroc.com</p>
                    <p className="text-gray-700">contact.3xmetalmaroc@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Building2 className="w-6 h-6 text-[#E02B20] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl text-[#1a3a52] mb-2">Linkedin</h3>
                    <a href="https://www.linkedin.com/company/3x-m%C3%A9tal-maroc/">3xMetalMaroc</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Building2 className="w-6 h-6 text-[#E02B20] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl text-[#1a3a52] mb-2">ICE</h3>
                    <p className="text-gray-700">003704039000081</p>
                  </div>
                </div>
              </div>

              <Button
                onClick={openWhatsApp}
                className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-lg py-6"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Contactez-nous sur WhatsApp
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <iframe
              src="https://maps.google.com/maps?q=33.438962,-7.520062&hl=fr&z=14&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="rounded-lg shadow-lg"
            ></iframe>
          </motion.div>
        </div >
      </section >

      {/* Footer */}
      < footer className="bg-[#1a3a52] text-white py-12" >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <img src={logoImg} alt="3X Métal Maroc" className="h-14 mb-4 brightness-0 invert" />
              <p className="text-gray-300">
                Votre partenaire de confiance pour la construction métallique et la tuyauterie industrielle au Maroc.
              </p>
            </div>
            <div>
              <h3 className="text-xl mb-4">Liens Rapides</h3>
              <div className="space-y-2">
                <button onClick={() => scrollToSection('about')} className="block text-gray-300 hover:text-white transition-colors">
                  À Propos
                </button>
                <button onClick={() => scrollToSection('services')} className="block text-gray-300 hover:text-white transition-colors">
                  Services
                </button>
                <button onClick={() => scrollToSection('projects')} className="block text-gray-300 hover:text-white transition-colors">
                  Réalisations
                </button>
                <button onClick={() => scrollToSection('contact')} className="block text-gray-300 hover:text-white transition-colors">
                  Contact
                </button>
              </div>
            </div>
            <div>
              <h3 className="text-xl mb-4">Contact</h3>
              <div className="space-y-2 text-gray-300">
                <p>+212 681-056307</p>
                <p>contact@3xmetalmaroc.com</p>
                <p>contact.3xmetalmaroc@gmail.com</p>
                <p>Benjdia, Casablanca</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-300">
            <p>© 2025 3X Métal Maroc. Tous droits réservés.</p>
          </div>
        </div>
      </footer >

      {/* Floating WhatsApp Button */}
      < motion.button
        onClick={openWhatsApp}
        className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#20BD5A] transition-colors z-50"
        whileHover={{ scale: 1.1 }
        }
        whileTap={{ scale: 0.9 }}
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button >
    </div >
  );
}