
import React, { useEffect, useState } from 'react';
import { 
  ChevronRight, 
  MapPin, 
  CheckCircle, 
  MessageCircle, 
  Trophy, 
  Target, 
  Users, 
  Zap,
  Star,
  Play
} from 'lucide-react';

// --- Types & Constants ---
const WHATSAPP_URL = "https://api.whatsapp.com/send?phone=5531992894777&text=Ol%C3%A1%2C%20venho%20do%20Instagram%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es!";

const ASSETS = {
  heroVideo: "https://i.imgur.com/S2mH78y.mp4",
  secondaryVideo: "https://i.imgur.com/Md6EoZd.mp4",
  gallery: [
    "https://i.imgur.com/Av4ezNx.jpeg",
    "https://i.imgur.com/6cNBbEk.jpeg",
    "https://i.imgur.com/JvF7WeU.jpeg",
    "https://i.imgur.com/fIMPWGt.jpeg",
    "https://i.imgur.com/EcAGRMv.jpeg",
    "https://i.imgur.com/5BxhaRI.jpeg",
    "https://i.imgur.com/R4AjkwQ.jpeg",
    "https://i.imgur.com/NghviV7.jpeg",
  ],
  logos: [
    "https://upload.wikimedia.org/wikipedia/pt/d/de/Clube_Atl%C3%A9tico_Mineiro_logo.png",
    "https://upload.wikimedia.org/wikipedia/commons/b/bc/Cruzeiro_Esporte_Clube_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/a/af/C_Am%C3%A9rica_MG.svg",
    "https://upload.wikimedia.org/wikipedia/pt/b/b8/CR_Flamengo_2018.svg",
    "https://upload.wikimedia.org/wikipedia/commons/e/e1/S.E._Palmeiras_logo.svg"
  ]
};

// --- Sub-components ---

const SectionTitle: React.FC<{ title: string; subtitle?: string; light?: boolean }> = ({ title, subtitle, light }) => (
  <div className="mb-12">
    {subtitle && <p className="text-gold font-impact uppercase tracking-widest mb-2 text-sm md:text-base">{subtitle}</p>}
    <h2 className={`text-4xl md:text-6xl font-title uppercase leading-tight italic ${light ? 'text-pureWhite' : 'text-pureWhite'}`}>
      {title}
    </h2>
  </div>
);

const Navbar: React.FC = () => (
  <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center bg-obsidian/80 backdrop-blur-md border-b border-white/10">
    <div className="flex items-center gap-2">
      <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center font-title text-obsidian italic text-xl">S</div>
      <span className="font-title italic tracking-tighter text-xl hidden sm:block">SANTÊ</span>
    </div>
    <a 
      href={WHATSAPP_URL} 
      className="bg-white text-obsidian font-bold py-2 px-6 rounded-full text-sm uppercase tracking-tight hover:bg-gold transition-colors duration-300"
    >
      Agendar Agora
    </a>
  </nav>
);

const Hero: React.FC = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <video 
      autoPlay 
      loop 
      muted 
      playsInline
      className="absolute top-0 left-0 w-full h-full object-cover z-0"
    >
      <source src={ASSETS.heroVideo} type="video/mp4" />
    </video>
    <div className="absolute top-0 left-0 w-full h-full gradient-overlay z-10" />
    
    <div className="relative z-20 container mx-auto px-6 pt-20 pb-12 flex flex-col items-center text-center">
      <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/40 px-4 py-1 rounded-full mb-8 animate-float">
        <Star size={16} className="text-gold fill-gold" />
        <span className="text-gold text-xs font-bold uppercase tracking-widest">Metodologia de Elite</span>
      </div>
      
      <h1 className="text-5xl md:text-8xl font-title text-white uppercase italic leading-[0.9] mb-8 max-w-5xl tracking-tighter">
        Nós não apenas treinamos jogadores, <span className="text-gold">nós forjamos a elite</span> do futebol brasileiro.
      </h1>
      
      <p className="text-lg md:text-2xl text-white/80 max-w-2xl font-light mb-12 leading-relaxed">
        Treinamento de nível profissional acessível para jovens que buscam o próximo nível, sem promessas vazias, apenas metodologia de campo.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
        <a 
          href={WHATSAPP_URL}
          className="group relative bg-gold text-obsidian font-title text-lg px-10 py-5 uppercase italic rounded-sm overflow-hidden transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-3"
        >
          Agendar Avaliação Técnica Gratuita
          <ChevronRight className="group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>

    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 animate-bounce opacity-50">
      <div className="w-[1px] h-12 bg-white/50" />
    </div>
  </section>
);

const SocialProof: React.FC = () => (
  <section className="bg-obsidian py-10 border-y border-white/5">
    <div className="container mx-auto px-6">
      <p className="text-center text-white/40 font-impact uppercase text-xs tracking-[0.3em] mb-8">Nossos atletas em destaque em</p>
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
        {ASSETS.logos.map((logo, idx) => (
          <img key={idx} src={logo} alt="Club Logo" className="h-10 md:h-14 w-auto object-contain" />
        ))}
      </div>
    </div>
  </section>
);

const Storytelling: React.FC = () => (
  <section className="py-24 bg-obsidian relative overflow-hidden">
    <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
      <div>
        <SectionTitle subtitle="A Escola de Talentos" title="O DNA da Performance" />
        <div className="space-y-6 text-white/70 text-lg leading-relaxed font-light">
          <p>
            A <span className="text-white font-semibold italic">Santê</span> nasceu da necessidade de preencher o abismo entre o futebol amador e as exigências das categorias de base dos grandes clubes.
          </p>
          <p>
            Nosso foco não é o entretenimento, mas sim o <span className="text-gold font-bold">desenvolvimento técnico rigoroso</span>. Aqui, o talento é apenas a matéria-prima; a disciplina e a mentalidade tática são as ferramentas que moldam o futuro profissional.
          </p>
          <ul className="space-y-4 pt-4">
            {[
              "Disciplina Militar no Campo",
              "Entendimento Tático Europeu",
              "Mentalidade Vencedora e Resiliência",
              "Suporte ao Desenvolvimento do Atleta"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-white">
                <CheckCircle className="text-gold" size={20} />
                <span className="font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="relative group rounded-2xl overflow-hidden shadow-2xl shadow-gold/5">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full aspect-video object-cover"
        >
          <source src={ASSETS.secondaryVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gold/10 mix-blend-overlay group-hover:bg-transparent transition-all duration-500" />
      </div>
    </div>
  </section>
);

const Vitrine: React.FC = () => (
  <section className="py-24 bg-white text-obsidian">
    <div className="container mx-auto px-6">
      <div className="mb-16">
        <p className="text-gold font-impact uppercase tracking-widest mb-2 text-sm">A Vitrine de Resultados</p>
        <h2 className="text-5xl md:text-7xl font-title uppercase leading-[0.85] italic tracking-tighter">
          Excelência em <span className="text-deepGreen">cada detalhe.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: "Técnica Individual", desc: "Refino de passe, drible e finalização.", img: ASSETS.gallery[0] },
          { title: "Preparo Físico", desc: "Potência, velocidade e agilidade.", img: ASSETS.gallery[1] },
          { title: "Tática de Jogo", desc: "Leitura de campo e posicionamento.", img: ASSETS.gallery[2] },
          { title: "Disciplina", desc: "Comportamento de atleta dentro e fora.", img: ASSETS.gallery[3] },
        ].map((item, idx) => (
          <div key={idx} className="group relative overflow-hidden rounded-xl aspect-[3/4] bg-obsidian">
            <img 
              src={item.img} 
              alt={item.title} 
              className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-6 flex flex-col justify-end">
              <h3 className="text-gold font-title italic text-2xl uppercase mb-1">{item.title}</h3>
              <p className="text-white/80 text-sm font-light leading-snug">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Pillars: React.FC = () => (
  <section className="py-24 bg-obsidian text-white relative overflow-hidden">
    {/* Decorative background element */}
    <div className="absolute -top-24 -right-24 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
    
    <div className="container mx-auto px-6 relative z-10">
      <SectionTitle subtitle="Os 4 Pilares" title="Nosso Método de Sucesso" />
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { icon: <Target className="text-gold" size={40} />, title: "Scouting Individualizado", desc: "Análise técnica profunda para identificar pontos fortes e gaps de cada atleta." },
          { icon: <Zap className="text-gold" size={40} />, title: "Tática Europeia", desc: "Metodologia inspirada nos maiores centros de formação de elite mundiais." },
          { icon: <Trophy className="text-gold" size={40} />, title: "Mindset de Campeão", desc: "Treinamento psicológico focado em resiliência e foco competitivo." },
          { icon: <Users className="text-gold" size={40} />, title: "Ambiente de Elite", desc: "Infraestrutura de ponta e convivência com os melhores talentos da região." },
        ].map((pillar, i) => (
          <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 group">
            <div className="mb-6 group-hover:scale-110 transition-transform duration-300">{pillar.icon}</div>
            <h3 className="text-2xl font-title uppercase italic mb-4">{pillar.title}</h3>
            <p className="text-white/60 font-light leading-relaxed">{pillar.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const CTASection: React.FC = () => (
  <section className="py-24 bg-deepGreen text-white relative">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-4xl md:text-7xl font-title uppercase italic mb-12">
        A elite não espera. <br className="hidden md:block" /> <span className="text-gold">Dê o primeiro passo.</span>
      </h2>
      
      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16 relative">
        <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-white/20 -translate-y-1/2 z-0" />
        
        {[
          { step: "01", text: "Clique no botão de agendamento" },
          { step: "02", text: "Fale com nosso coordenador técnico" },
          { step: "03", text: "Seu filho entra em campo para o teste" },
        ].map((item, idx) => (
          <div key={idx} className="relative z-10 bg-deepGreen px-4">
            <div className="w-12 h-12 bg-gold text-obsidian rounded-full flex items-center justify-center font-title italic text-xl mx-auto mb-4 border-4 border-deepGreen">
              {item.step}
            </div>
            <p className="font-semibold uppercase text-sm tracking-widest">{item.text}</p>
          </div>
        ))}
      </div>

      <a 
        href={WHATSAPP_URL}
        className="inline-block bg-pureWhite text-obsidian font-title text-xl px-12 py-6 uppercase italic rounded-full hover:bg-gold transition-all hover:scale-105 active:scale-95"
      >
        Agendar Aula Experimental
      </a>
    </div>
  </section>
);

const Footer: React.FC = () => (
  <footer className="bg-obsidian pt-24 pb-32 border-t border-white/5 text-white/50">
    <div className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
      <div>
        <div className="flex items-center gap-2 mb-6">
          <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center font-title text-obsidian italic text-lg">S</div>
          <span className="font-title italic tracking-tighter text-xl text-white">SANTÊ</span>
        </div>
        <p className="text-sm font-light leading-relaxed">
          Formando atletas de alto rendimento com metodologia profissional e foco em resultados reais.
        </p>
      </div>
      
      <div>
        <h4 className="text-white font-title italic uppercase mb-6">Localização</h4>
        <div className="flex gap-3 text-sm">
          <MapPin size={20} className="text-gold shrink-0" />
          <p>Rua Do Contorno 100 Maria Virgínia, Belo Horizonte - MG</p>
        </div>
      </div>
      
      <div>
        <h4 className="text-white font-title italic uppercase mb-6">Contatos</h4>
        <ul className="space-y-4 text-sm">
          <li>Instagram: @sante.atletas</li>
          <li>WhatsApp: (31) 99289-4777</li>
          <li>Email: contato@sante.com.br</li>
        </ul>
      </div>

      <div>
        <h4 className="text-white font-title italic uppercase mb-6">Horários</h4>
        <ul className="space-y-4 text-sm">
          <li>Segunda - Sexta: 08h às 18h</li>
          <li>Sábados: 08h às 12h</li>
        </ul>
      </div>
    </div>
    
    <div className="container mx-auto px-6 text-center text-xs border-t border-white/5 pt-8">
      <p>&copy; 2024 SANTÊ Escola de Formação de Atletas. Todos os direitos reservados.</p>
    </div>
  </footer>
);

const FloatingWhatsApp: React.FC = () => (
  <a 
    href={WHATSAPP_URL}
    className="fixed bottom-24 right-6 md:bottom-10 md:right-10 z-[60] bg-[#25D366] text-white p-4 rounded-full shadow-2xl animate-bounce hover:scale-110 transition-transform"
    aria-label="Fale conosco no WhatsApp"
  >
    <MessageCircle size={32} />
    <span className="absolute -top-1 -right-1 flex h-4 w-4">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
      <span className="relative inline-flex rounded-full h-4 w-4 bg-white/50"></span>
    </span>
  </a>
);

const StickyMobileCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed bottom-0 left-0 w-full z-50 p-4 bg-obsidian/90 backdrop-blur-lg border-t border-white/10 md:hidden transition-transform duration-500 ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}>
      <a 
        href={WHATSAPP_URL}
        className="flex items-center justify-center gap-2 bg-gold text-obsidian font-title italic uppercase py-4 rounded-lg w-full text-center"
      >
        Agendar Teste Agora
        <ChevronRight size={20} />
      </a>
    </div>
  );
};

// --- Main App ---

const App: React.FC = () => {
  return (
    <div className="font-body selection:bg-gold selection:text-obsidian">
      <Navbar />
      <Hero />
      <SocialProof />
      <Storytelling />
      <Vitrine />
      <Pillars />
      <CTASection />
      
      {/* Visual Break with Gallery */}
      <section className="bg-obsidian py-2">
        <div className="flex overflow-x-auto hide-scrollbar gap-2 px-2">
          {ASSETS.gallery.map((img, i) => (
            <div key={i} className="min-w-[250px] md:min-w-[400px] aspect-video rounded-lg overflow-hidden bg-white/5">
              <img src={img} alt={`Treino ${i}`} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
            </div>
          ))}
        </div>
      </section>

      <Footer />
      
      {/* UI Elements */}
      <FloatingWhatsApp />
      <StickyMobileCTA />
    </div>
  );
};

export default App;
