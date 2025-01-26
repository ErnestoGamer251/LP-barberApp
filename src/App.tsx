import React, { useState } from 'react';
import { 
  Calendar, 
  MessageSquare, 
  Scissors, 
  Star, 
  Users,
  Download,
  ChevronRight,
  Facebook,
  Twitter,
  Instagram,
  Send
} from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

function App() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    try {
      // Temporarily just show success message
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      toast.success('¡Te has registrado exitosamente en la lista de espera!');
      setEmail('');
    } catch (error) {
      toast.error('Hubo un error al registrarte. Por favor, intenta de nuevo.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Toaster position="top-center" />
      
      {/* Navigation */}
      <nav className="bg-black text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Scissors className="h-8 w-8" />
            <span className="text-2xl font-bold">BarberApp</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#features" className="hover:text-gold-400">Características</a>
            <a href="#how-it-works" className="hover:text-gold-400">Cómo Funciona</a>
            <a href="#pricing" className="hover:text-gold-400">Precios</a>
          </div>
          <button className="bg-[#D4AF37] text-black px-6 py-2 rounded-full font-semibold hover:bg-[#C4A137] transition">
            Descargar
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80"
            alt="Barber Shop"
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Mejora tu negocio</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Ten una mejor organización en tu negocio y haz crecer tu barbería con nuestra plataforma integral
          </p>
          <button className="bg-[#D4AF37] text-black px-8 py-3 rounded-full font-bold text-lg hover:bg-[#C4A137] transition flex items-center space-x-2">
            <span>Descargar Ahora</span>
            <Download className="h-5 w-5" />
          </button>
        </div>
      </section>

      {/* App Screenshots */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Conoce Nuestra App</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1611323593247-4a91000c13ff?auto=format&fit=crop&q=80" 
                alt="App Screenshot - Calendario"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-white">
                <h3 className="font-bold text-lg mb-2">Gestión de Calendario</h3>
                <p className="text-gray-600">Organiza tus citas de manera eficiente</p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80" 
                alt="App Screenshot - Chat"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-white">
                <h3 className="font-bold text-lg mb-2">Chat con Clientes</h3>
                <p className="text-gray-600">Comunicación directa y efectiva</p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80" 
                alt="App Screenshot - Perfil"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-white">
                <h3 className="font-bold text-lg mb-2">Perfil Profesional</h3>
                <p className="text-gray-600">Muestra tu mejor trabajo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Características Principales</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Calendar />}
              title="Gestión de Citas"
              description="Sistema intuitivo para programar y administrar citas con tus clientes"
            />
            <FeatureCard 
              icon={<MessageSquare />}
              title="Chat Integrado"
              description="Comunícate directamente con tus clientes a través de la aplicación"
            />
            <FeatureCard 
              icon={<Users />}
              title="Gestión de Clientes"
              description="Mantén un registro detallado de tus clientes y sus preferencias"
            />
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Únete a la Lista de Espera</h2>
            <p className="text-xl text-gray-600 mb-8">
              Sé de los primeros en probar BarberApp y recibe acceso anticipado
            </p>
            <form onSubmit={handleWaitlistSubmit} className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Tu correo electrónico"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                required
              />
              <button
                type="submit"
                disabled={isLoading}
                className="bg-[#D4AF37] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#C4A137] transition flex items-center gap-2 disabled:opacity-50"
              >
                {isLoading ? 'Enviando...' : (
                  <>
                    <span>Unirme</span>
                    <Send className="h-5 w-5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Cómo Funciona</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <StepCard 
              number="1"
              title="Regístrate"
              description="Crea tu perfil de barbería"
            />
            <StepCard 
              number="2"
              title="Configura"
              description="Personaliza tus servicios y horarios"
            />
            <StepCard 
              number="3"
              title="Gestiona"
              description="Administra tus citas y clientes"
            />
            <StepCard 
              number="4"
              title="Crece"
              description="Expande tu negocio"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Lo Que Dicen Nuestros Usuarios</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard 
              name="Carlos Rodríguez"
              role="Propietario de Barbería"
              text="BarberApp ha revolucionado la forma en que manejo mi negocio. Las citas son más fáciles de gestionar y mis clientes están más satisfechos."
            />
            <TestimonialCard 
              name="Miguel Ángel"
              role="Barbero Profesional"
              text="La aplicación es intuitiva y me ayuda a mantener un mejor control de mis clientes. El sistema de chat es especialmente útil."
            />
            <TestimonialCard 
              name="David Torres"
              role="Dueño de Salón"
              text="Desde que empecé a usar BarberApp, mi negocio ha crecido significativamente. La organización es mucho mejor."
            />
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Planes y Precios</h2>
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="px-6 py-8">
              <h3 className="text-2xl font-bold text-center mb-4">Plan Profesional</h3>
              <div className="text-center mb-6">
                <span className="text-4xl font-bold">$29.99</span>
                <span className="text-gray-600">/mes</span>
              </div>
              <ul className="space-y-4 mb-8">
                <PricingFeature text="Gestión ilimitada de citas" />
                <PricingFeature text="Chat con clientes" />
                <PricingFeature text="Historial de clientes" />
                <PricingFeature text="Estadísticas detalladas" />
                <PricingFeature text="Soporte prioritario" />
              </ul>
              <button className="w-full bg-[#D4AF37] text-black py-3 rounded-full font-bold hover:bg-[#C4A137] transition">
                Comenzar Ahora
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Scissors className="h-6 w-6" />
                <span className="text-xl font-bold">BarberApp</span>
              </div>
              <p className="text-gray-400">
                Administra el cabello de tus clientes de manera profesional
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Enlaces</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#features" className="hover:text-white">Características</a></li>
                <li><a href="#how-it-works" className="hover:text-white">Cómo Funciona</a></li>
                <li><a href="#pricing" className="hover:text-white">Precios</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Privacidad</a></li>
                <li><a href="#" className="hover:text-white">Términos</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Síguenos</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 BarberApp. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
      <div className="inline-block p-3 bg-[#D4AF37] rounded-full mb-4">
        {React.cloneElement(icon, { className: "h-6 w-6 text-black" })}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function StepCard({ number, title, description }) {
  return (
    <div className="text-center">
      <div className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center text-black font-bold text-xl mx-auto mb-4">
        {number}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function TestimonialCard({ name, role, text }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex items-center mb-4">
        <Star className="h-5 w-5 text-[#D4AF37]" />
        <Star className="h-5 w-5 text-[#D4AF37]" />
        <Star className="h-5 w-5 text-[#D4AF37]" />
        <Star className="h-5 w-5 text-[#D4AF37]" />
        <Star className="h-5 w-5 text-[#D4AF37]" />
      </div>
      <p className="text-gray-600 mb-4">{text}</p>
      <div>
        <p className="font-bold">{name}</p>
        <p className="text-gray-500 text-sm">{role}</p>
      </div>
    </div>
  );
}

function PricingFeature({ text }) {
  return (
    <li className="flex items-center space-x-2">
      <ChevronRight className="h-5 w-5 text-[#D4AF37]" />
      <span>{text}</span>
    </li>
  );
}

export default App;