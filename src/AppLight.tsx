import React, { useState, useEffect } from "react";
import {
  Code2,
  Layout,
  Figma,
  Brain,
  Crown,
  ChevronRight,
  Check,
  Timer,
  Clock,
  BookOpen,
  Users,
  GraduationCap,
  CreditCard,
} from "lucide-react";
import dp1 from "./assets/dp1.jpeg";
import dp2 from "./assets/dp2.jpeg";
import dp3 from "./assets/dp3.jpeg";
import dp4 from "./assets/dp4.jpeg";
import { Link } from "react-router-dom";

function AppLight() {
  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const testimonials = [
    { image: dp1 },
    { image: dp2 },
    { image: dp3 },
    { image: dp4 },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-blue-600">
                <Timer className="w-6 h-6 animate-pulse" />
                <div className="text-2xl font-bold">
                  {String(minutes).padStart(2, "0")}:
                  {String(seconds).padStart(2, "0")}
                </div>
              </div>
              <p className="text-blue-600 font-semibold hidden md:block uppercase">
                Se você fechar essa página nunca mais você vai ver essa oferta
              </p>
            </div>
            <div className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-[0_0_20px_rgba(37,99,235,0.5)]">
              <span className="font-bold">50% OFF</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content with padding for fixed header */}
      <div className="pt-16">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
            {/* Main Content */}
            <div className="w-full text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-900">
                Parabéns!
              </h1>
              <p className="text-2xl text-blue-800 mb-4">
                Você comprou os templates do Rei dos Sites
              </p>
              <p className="text-xl text-gray-600 mb-8">
                Aproveite agora seu desconto exclusivo no curso Rei do Código{" "}
                <br />
                Caso você saia desta página você vai perder esta oportunidade
              </p>
              <div
                onClick={() =>
                  (window.location.href = "https://pay.kiwify.com.br/AFpxU0L")
                }
                className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-xl hover:bg-blue-700 transition cursor-pointer inline-flex items-center gap-2 shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)]"
              >
                Quero Aproveitar o Desconto
                <ChevronRight className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Technologies Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-blue-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition">
              <Code2 className="w-12 h-12 mb-4 text-blue-600" />
              <h3 className="text-xl font-bold mb-2 text-blue-900">
                HTML, CSS e JavaScript
              </h3>
              <p className="text-gray-700">
                Domine as tecnologias fundamentais para criar sites incríveis e
                interativos.
              </p>
            </div>
            <div className="bg-blue-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition">
              <Figma className="w-12 h-12 mb-4 text-blue-600" />
              <h3 className="text-xl font-bold mb-2 text-blue-900">Figma</h3>
              <p className="text-gray-700">
                Aprenda a criar designs profissionais e transformá-los em
                código.
              </p>
            </div>
            <div className="bg-blue-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition">
              <Layout className="w-12 h-12 mb-4 text-blue-600" />
              <h3 className="text-xl font-bold mb-2 text-blue-900">
                Python, Java e React
              </h3>
              <p className="text-gray-700">
                Expanda seus horizontes com as linguagens mais populares do
                mercado.
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-blue-900">
              O que você vai aprender
            </h2>
            <div className="space-y-4">
              {[
                "Desenvolvimento completo de sites do zero",
                "Criação de designs profissionais no Figma",
                "Programação em Python e Java",
                "Inteligência Artificial e suas aplicações",
                "Projetos práticos do mundo real",
                "Mentoria personalizada",
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-blue-50 p-4 rounded-lg shadow-sm hover:shadow-md transition"
                >
                  <Check className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials Section */}
          <div className="mb-16 overflow-hidden">
            <h2 className="text-3xl font-bold mb-8 text-center text-blue-900">
              O que nossos alunos dizem
            </h2>
            <div className="relative">
              <div
                className="flex animate-slide"
                style={{
                  width: `${
                    (testimonials.length * 2 * 100) /
                    (window.innerWidth < 768 ? 1 : 3)
                  }%`,
                }}
              >
                {[...testimonials, ...testimonials].map(
                  (testimonial, index) => (
                    <div
                      key={index}
                      className="w-full md:w-1/3 flex-shrink-0 px-4"
                      style={{
                        width: `${100 / (testimonials.length * 2)}%`,
                      }}
                    >
                      <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                        <img
                          src={testimonial.image}
                          alt="Depoimento de aluno"
                          className="w-full h-[600px] md:h-[700px] object-cover object-center hover:scale-105 transition-transform"
                        />
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-blue-50 p-12 rounded-2xl shadow-lg">
            <Brain className="w-16 h-16 mx-auto mb-6 text-blue-600" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-900">
              Transforme-se em um Desenvolvedor Completo
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              De templates prontos à criação completa: evolua sua carreira com o
              curso mais completo de programação.
            </p>
            <div
              onClick={() =>
                (window.location.href = "https://pay.kiwify.com.br/AFpxU0L")
              }
              className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-xl hover:bg-blue-700 transition cursor-pointer inline-flex items-center gap-2 shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)]"
            >
              Começar Agora
              <ChevronRight className="w-5 h-5" />
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-16 max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-blue-900">
              Perguntas Frequentes
            </h2>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition">
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      Quanto tempo tenho acesso ao curso?
                    </h3>
                    <p className="text-gray-600">
                      Você terá acesso vitalício ao curso, incluindo todas as
                      atualizações futuras.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition">
                <div className="flex items-start gap-4">
                  <BookOpen className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      Preciso ter conhecimento prévio?
                    </h3>
                    <p className="text-gray-600">
                      Não! O curso foi desenvolvido para iniciantes e avança
                      gradualmente até níveis mais avançados.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition">
                <div className="flex items-start gap-4">
                  <Users className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      Como funciona a mentoria?
                    </h3>
                    <p className="text-gray-600">
                      Você terá acesso a uma call com o Rei dos Sites onde
                      poderá tirar suas dúvidas e receber orientação
                      personalizada.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition">
                <div className="flex items-start gap-4">
                  <GraduationCap className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Tem certificado?</h3>
                    <p className="text-gray-600">
                      Sim! Ao concluir o curso você receberá um certificado
                      digital de conclusão reconhecido pelo mercado.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition">
                <div className="flex items-start gap-4">
                  <CreditCard className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      Posso pagar parcelado?
                    </h3>
                    <p className="text-gray-600">
                      Sim! Oferecemos parcelamento em até 12x nos cartões de
                      crédito.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-100 mt-16 bg-blue-50">
        <div className="container mx-auto px-4 py-8 text-center text-gray-600">
          © 2024 Rei dos Sites - Todos os direitos reservados
        </div>
      </footer>

      <Link
        to="/"
        className="fixed bottom-4 right-4 bg-gray-900 text-white px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition"
      >
        Versão Escura
      </Link>
    </div>
  );
}

export default AppLight;
