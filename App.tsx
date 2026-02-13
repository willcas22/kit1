
import React, { useEffect, useState } from 'react';
import { 
  Heart, 
  Moon, 
  Wind, 
  ShieldCheck, 
  Sparkles, 
  Brain, 
  Users, 
  Clock,
  ArrowRight,
  HandHelping
} from 'lucide-react';
import { Button, Section, Accordion, ArcangelCard, CheckItem } from './components/UI';
import { generateSpiritualImage } from './services/geminiService';

const App: React.FC = () => {
  const [heroImage, setHeroImage] = useState<string | null>(null);
  const [mockupImage, setMockupImage] = useState<string | null>(null);
  const [isStickyVisible, setIsStickyVisible] = useState(false);

  useEffect(() => {
    const fetchImages = async () => {
      const hImg = await generateSpiritualImage("Woman breathing peacefully, soft sunlight, ethereal background, spiritual vibes, blurred");
      const mImg = await generateSpiritualImage("Modern tablet and smartphone mockup on a wooden table with crystals and a lavender candle, serene spiritual content on screens");
      setHeroImage(hImg);
      setMockupImage(mImg);
    };
    fetchImages();

    const handleScroll = () => {
      setIsStickyVisible(window.scrollY > 800);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToCTA = () => {
    document.getElementById('final-cta')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* BLOQUE 1 – HERO */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        {heroImage && (
          <div className="absolute inset-0 z-0">
            <img 
              src={heroImage} 
              alt="Celestial background" 
              className="w-full h-full object-cover brightness-75 transition-opacity duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/20 to-white"></div>
          </div>
        )}
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-4xl md:text-6xl text-white font-bold leading-tight mb-6 drop-shadow-md">
            Si tú te caes... todo se cae. <br/>
            <span className="italic font-normal">¿Quién te sostiene cuando ya no puedes más?</span>
          </h1>
          <p className="text-lg md:text-xl text-indigo-50 mb-10 max-w-2xl mx-auto">
            Un sistema espiritual práctico para activar calma real en minutos cuando la ansiedad pesa demasiado y necesitas sentirte protegida.
          </p>
          <Button onClick={scrollToCTA} variant="secondary" className="mx-auto">
            👉 Quiero activar mi calma ahora
          </Button>
        </div>
      </section>

      {/* BLOQUE 2 – IDENTIFICACIÓN EMOCIONAL */}
      <Section className="text-center">
        <div className="space-y-6 md:space-y-8 animate-fade-in">
          <p className="text-xl md:text-2xl font-light text-slate-500 italic">Eres la que sostiene.</p>
          <p className="text-2xl md:text-3xl font-serif text-slate-800">La que resuelve.</p>
          <p className="text-2xl md:text-3xl font-serif text-slate-800">La que organiza.</p>
          <p className="text-2xl md:text-3xl font-serif text-slate-800">La que no se puede permitir quebrarse.</p>
          <div className="h-px w-24 bg-indigo-100 mx-auto my-12"></div>
          <p className="text-xl text-slate-600 max-w-xl mx-auto">
            Pero nadie ve lo que pasa por tu mente cuando todos se duermen. <br/>
            Nadie siente el peso que cargas en silencio. <br/>
            <span className="font-semibold text-indigo-600 italic">Y aun así… sigues.</span>
          </p>
        </div>
      </Section>

      {/* BLOQUE 3 – PROBLEMA / DOLOR */}
      <Section bg="bg-slate-50">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl mb-8">Tal vez te ha pasado...</h2>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="p-2 bg-indigo-100 rounded-lg text-indigo-600"><Moon className="w-6 h-6" /></div>
                <p className="text-slate-700">Tu mente no se apaga en la noche.</p>
              </li>
              <li className="flex gap-4">
                <div className="p-2 bg-indigo-100 rounded-lg text-indigo-600"><Brain className="w-6 h-6" /></div>
                <p className="text-slate-700">Sientes ansiedad, pero no puedes mostrar debilidad.</p>
              </li>
              <li className="flex gap-4">
                <div className="p-2 bg-indigo-100 rounded-lg text-indigo-600"><Wind className="w-6 h-6" /></div>
                <p className="text-slate-700">Estás agotada, pero tienes que seguir funcionando.</p>
              </li>
              <li className="flex gap-4">
                <div className="p-2 bg-indigo-100 rounded-lg text-indigo-600"><Users className="w-6 h-6" /></div>
                <p className="text-slate-700">Te sientes sola incluso estando acompañada.</p>
              </li>
              <li className="flex gap-4">
                <div className="p-2 bg-indigo-100 rounded-lg text-indigo-600"><Clock className="w-6 h-6" /></div>
                <p className="text-slate-700">Tienes miedo de que si tú te caes, todo se derrumbe.</p>
              </li>
            </ul>
          </div>
          <div className="bg-indigo-900 rounded-[3rem] p-10 text-white relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 opacity-10">
              <Heart className="w-64 h-64" />
            </div>
            <p className="text-2xl font-serif italic mb-4">Y lo más difícil...</p>
            <p className="text-xl font-light">
              Es que no tienes un espacio donde tú puedas soltar.
            </p>
          </div>
        </div>
      </Section>

      {/* BLOQUE 4 – QUIEBRE DE CREENCIA */}
      <section className="py-32 bg-indigo-600 text-white relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-serif italic leading-tight mb-8">
            "No naciste para cargar todo sola."
          </h2>
          <div className="space-y-4 text-xl md:text-2xl font-light text-indigo-100">
            <p>La mujer fuerte también necesita protección.</p>
            <p>También necesita contención.</p>
            <p>También necesita sentirse sostenida.</p>
          </div>
          <p className="mt-12 text-3xl font-serif">
            Y eso no te hace débil. <br/>
            <span className="text-amber-300">Te hace humana.</span>
          </p>
        </div>
      </section>

      {/* BLOQUE 5 – PRESENTACIÓN DEL PRODUCTO */}
      <Section id="product">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-bold uppercase tracking-widest mb-4">
            ✨ Presentamos:
          </span>
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Kit Espiritual de Calma Inmediata</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Un sistema práctico de regulación emocional guiado por los 7 Arcángeles para ayudarte a:
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 space-y-8">
            <div className="grid grid-cols-1 gap-4">
              <CheckItem>Bajar el ruido mental</CheckItem>
              <CheckItem>Relajar el cuerpo</CheckItem>
              <CheckItem>Recuperar sensación de protección</CheckItem>
              <CheckItem>Soltar el peso emocional</CheckItem>
              <CheckItem>Volver a sentir control interior</CheckItem>
            </div>
            <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
              <p className="text-slate-700 italic">"No es teoría. No es un curso largo. Es algo que puedes usar cuando lo necesites."</p>
            </div>
          </div>
          <div className="order-1 md:order-2">
            {mockupImage && (
              <div className="relative group">
                <div className="absolute inset-0 bg-indigo-400 blur-3xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <img 
                  src={mockupImage} 
                  alt="Product Mockup" 
                  className="rounded-3xl shadow-2xl relative z-10 transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>
            )}
          </div>
        </div>
      </Section>

      {/* BLOQUE 6 – CÓMO FUNCIONA (7 Arcángeles) */}
      <Section bg="bg-indigo-50/50">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">¿Cómo funciona?</h2>
          <p className="text-lg text-slate-600">Cada arcángel responde a un estado emocional específico. <br/> Si sientes:</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <ArcangelCard name="Miguel" problem="Miedo o vulnerabilidad" color="bg-blue-100 text-blue-600" icon="⚔️" />
          <ArcangelCard name="Rafael" problem="Tensión o agotamiento" color="bg-green-100 text-green-600" icon="🌿" />
          <ArcangelCard name="Gabriel" problem="Mente acelerada" color="bg-white text-slate-600 border border-slate-200" icon="🎺" />
          <ArcangelCard name="Uriel" problem="Inseguridad material" color="bg-amber-100 text-amber-600" icon="🔥" />
          <ArcangelCard name="Jofiel" problem="Caos mental" color="bg-yellow-100 text-yellow-600" icon="💡" />
          <ArcangelCard name="Chamuel" problem="Soledad emocional" color="bg-rose-100 text-rose-600" icon="💗" />
          <ArcangelCard name="Zadquiel" problem="Culpa o peso acumulado" color="bg-purple-100 text-purple-600" icon="💜" />
          <div className="flex items-center justify-center p-6 text-indigo-600 italic text-center">
            "En minutos activas el ritual adecuado."
          </div>
        </div>
      </Section>

      {/* BLOQUE 7 – QUÉ INCLUYE */}
      <Section>
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-16">¿Qué incluye el Kit?</h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="flex gap-6">
            <div className="w-12 h-12 bg-indigo-100 rounded-2xl flex items-center justify-center shrink-0">
              <ShieldCheck className="text-indigo-600" />
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">Ritual escrito con los 7 Arcángeles (PDF)</h4>
              <p className="text-slate-600">Guía paso a paso, clara y práctica para tu día a día.</p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="w-12 h-12 bg-indigo-100 rounded-2xl flex items-center justify-center shrink-0">
              <Wind className="text-indigo-600" />
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">Rituales guiados en audio</h4>
              <p className="text-slate-600">Uno para cada día de la semana y meditaciones para antes de dormir.</p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="w-12 h-12 bg-indigo-100 rounded-2xl flex items-center justify-center shrink-0">
              <Sparkles className="text-indigo-600" />
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">Tarjetas de afirmación</h4>
              <p className="text-slate-600">Anclajes poderosos para sostener tu calma en cualquier lugar.</p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="w-12 h-12 bg-indigo-100 rounded-2xl flex items-center justify-center shrink-0">
              <Clock className="text-indigo-600" />
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">Guía rápida de emergencia</h4>
              <p className="text-slate-600">Qué hacer cuando la ansiedad aparece de golpe (máx. 10 minutos).</p>
            </div>
          </div>
        </div>
        <div className="mt-12 p-8 bg-amber-50 rounded-3xl border border-amber-100 flex items-center gap-6">
          <div className="text-3xl">🎁</div>
          <div>
            <h4 className="font-bold text-amber-900 uppercase tracking-wide text-sm">BONUS EXCLUSIVO:</h4>
            <p className="text-amber-800">Novenas, cantos de sanación e invocaciones guiadas incluidas hoy.</p>
          </div>
        </div>
      </Section>

      {/* BLOQUE 8 – RESULTADOS */}
      <Section bg="bg-slate-900" className="text-white">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">Qué cambia cuando lo usas</h2>
        <div className="max-w-2xl mx-auto space-y-8">
          <p className="text-indigo-300 font-semibold tracking-widest text-sm uppercase text-center">Después de usar el Kit:</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-3 items-center">
              <div className="text-green-400">✔</div>
              <p>Tu cuerpo entra en reposo más rápido.</p>
            </div>
            <div className="flex gap-3 items-center">
              <div className="text-green-400">✔</div>
              <p>La ansiedad pierde intensidad.</p>
            </div>
            <div className="flex gap-3 items-center">
              <div className="text-green-400">✔</div>
              <p>El descanso se vuelve más accesible.</p>
            </div>
            <div className="flex gap-3 items-center">
              <div className="text-green-400">✔</div>
              <p>Aparece sensación real de protección.</p>
            </div>
            <div className="flex gap-3 items-center">
              <div className="text-green-400">✔</div>
              <p>Disminuye la lucha interna.</p>
            </div>
            <div className="flex gap-3 items-center">
              <div className="text-green-400">✔</div>
              <p>Recuperas fuerza para el día siguiente.</p>
            </div>
          </div>
          <div className="mt-12 text-center text-slate-400 italic">
            "No elimina tus responsabilidades. Te ayuda a atravesarlas con calma."
          </div>
        </div>
      </Section>

      {/* BLOQUE 9 – OBJECIONES */}
      <Section>
        <h2 className="text-3xl font-serif text-center mb-12">Preguntas frecuentes</h2>
        <div className="max-w-2xl mx-auto space-y-4">
          <Accordion 
            question="¿Necesito experiencia espiritual?" 
            answer="Absolutamente no. El kit está diseñado para ser usado por cualquier mujer, sin importar su nivel de conocimiento o práctica previa." 
          />
          <Accordion 
            question="¿Es un curso largo?" 
            answer="No, es un kit de herramientas prácticas. Puedes usar cada ritual o audio de forma independiente según lo que sientas en el momento." 
          />
          <Accordion 
            question="¿Necesito tener 'fe perfecta'?" 
            answer="Solo necesitas estar dispuesta a dejarte sostener. La herramienta funciona por su propia estructura energética y vibracional." 
          />
          <Accordion 
            question="¿Cuánto tiempo toma usarlo?" 
            answer="Desde 3 hasta 15 minutos. Está diseñado para mujeres con agendas apretadas que necesitan soluciones reales." 
          />
        </div>
      </Section>

      {/* BLOQUE 10 – CTA FINAL */}
      <section id="final-cta" className="relative py-24 bg-indigo-950 text-white text-center overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-[100px]"></div>
        </div>
        <div className="relative z-10 px-6 max-w-2xl mx-auto">
          <p className="text-indigo-300 italic mb-6">Si tú te caes... todo se cae. Pero no tienes que seguir cargando sola.</p>
          <h2 className="text-4xl md:text-6xl font-serif italic mb-10 leading-tight">Es momento de sostenerte a ti.</h2>
          <Button onClick={() => alert("¡Pronto disponible! Redirigiendo a pasarela de pago...")} variant="secondary" className="mx-auto text-xl py-6 px-12 group">
            Activar mi Kit de Calma Inmediata
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </Button>
          <p className="mt-8 text-indigo-400 text-sm flex items-center justify-center gap-2">
            <HandHelping className="w-4 h-4" />
            Acceso inmediato tras tu compra • Pago 100% seguro
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-6 border-t border-slate-100 text-center text-slate-400 text-sm">
        <p>© {new Date().getFullYear()} Kit Espiritual de Calma Inmediata. Todos los derechos reservados.</p>
      </footer>

      {/* STICKY CTA */}
      <div className={`fixed bottom-0 left-0 right-0 p-4 z-50 transition-all duration-500 transform ${isStickyVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
        <div className="max-w-4xl mx-auto">
          <Button onClick={scrollToCTA} variant="sticky" className="bg-indigo-600 hover:bg-indigo-700 shadow-2xl">
            Quiero mi Kit de Calma Inmediata 👉
          </Button>
        </div>
      </div>
    </div>
  );
};

export default App;
