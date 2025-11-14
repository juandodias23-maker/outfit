"use client";

import { useState } from "react";
import { Sparkles, Users, Store, Heart, TrendingUp, Shield, Check, ArrowRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import OutfitLogo from "@/components/custom/OutfitLogo";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [storeEmail, setStoreEmail] = useState("");

  const handleUserSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Obrigado pelo interesse! Entraremos em contato em ${userEmail}`);
    setUserEmail("");
  };

  const handleStoreSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Cadastro de loja recebido! Entraremos em contato em ${storeEmail}`);
    setStoreEmail("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-stone-50">
      {/* Header/Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <OutfitLogo className="h-10" />

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#funcionalidades" className="text-gray-700 hover:text-gray-900 transition-colors">
                Funcionalidades
              </a>
              <a href="#para-lojas" className="text-gray-700 hover:text-gray-900 transition-colors">
                Para Lojas
              </a>
              <a href="#precos" className="text-gray-700 hover:text-gray-900 transition-colors">
                Preços
              </a>
              <Button className="bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white shadow-lg">
                Começar Agora
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-4 border-t border-gray-200">
              <a href="#funcionalidades" className="block text-gray-700 hover:text-gray-900">
                Funcionalidades
              </a>
              <a href="#para-lojas" className="block text-gray-700 hover:text-gray-900">
                Para Lojas
              </a>
              <a href="#precos" className="block text-gray-700 hover:text-gray-900">
                Preços
              </a>
              <Button className="w-full bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black">
                Começar Agora
              </Button>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-100 to-orange-100 text-gray-900 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Experimente roupas virtualmente antes de comprar
          </div>
          
          {/* Logo grande no hero */}
          <div className="flex justify-center mb-8">
            <OutfitLogo className="h-20" />
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Vista-se com{" "}
            <span className="bg-gradient-to-r from-gray-700 via-amber-600 to-orange-600 bg-clip-text text-transparent">
              Confiança
            </span>
            <br />
            Antes de Comprar
          </h1>
          
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            Experimente roupas virtualmente, compartilhe looks com amigos e receba sugestões personalizadas.
            A revolução da moda está aqui! 👗✨
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-lg px-8 py-6 shadow-2xl hover:shadow-gray-900/50 transition-all duration-300 hover:scale-105"
            >
              Baixar Aplicativo
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 border-2 border-gray-800 hover:bg-gray-100 text-gray-900"
            >
              Ver Demonstração
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto">
            {[
              { number: "50K+", label: "Usuários Ativos" },
              { number: "200+", label: "Lojas Parceiras" },
              { number: "1M+", label: "Looks Criados" },
              { number: "4.9★", label: "Avaliação" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-gray-800 to-amber-600 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="funcionalidades" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-4">
              Funcionalidades Incríveis
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tudo que você precisa para encontrar o look perfeito
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Sparkles className="w-8 h-8" />,
                title: "Prova Virtual",
                description: "Tire uma foto e experimente milhares de roupas virtualmente em tempo real",
                gradient: "from-gray-700 to-gray-900",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Compartilhe Looks",
                description: "Mostre seus looks para amigos e receba feedback antes de comprar",
                gradient: "from-amber-500 to-orange-600",
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Análise de Estilo",
                description: "IA sugere peças baseadas no seu estilo pessoal e preferências",
                gradient: "from-gray-600 to-gray-800",
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Histórico de Looks",
                description: "Salve seus looks favoritos e crie combinações incríveis",
                gradient: "from-orange-500 to-amber-600",
              },
              {
                icon: <Store className="w-8 h-8" />,
                title: "Compra Direta",
                description: "Compre diretamente das lojas parceiras com um clique",
                gradient: "from-gray-700 to-gray-900",
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Desafios Semanais",
                description: "Participe de desafios de estilo e ganhe prêmios exclusivos",
                gradient: "from-amber-600 to-orange-600",
              },
            ].map((feature, index) => (
              <Card 
                key={index} 
                className="border-2 border-gray-100 hover:border-gray-300 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              >
                <CardContent className="p-8">
                  <div 
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white mb-6 shadow-lg`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* For Stores Section */}
      <section id="para-lojas" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-5xl font-bold mb-6">
                Para Lojas Parceiras
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Alcance milhares de clientes e aumente suas vendas com nossa plataforma inovadora
              </p>

              <div className="space-y-6">
                {[
                  "Cadastre seu catálogo completo de produtos",
                  "Receba pedidos diretamente pelo aplicativo",
                  "Analytics detalhado de performance",
                  "Suporte dedicado para sua loja",
                  "Campanhas promocionais exclusivas",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-lg">{benefit}</span>
                  </div>
                ))}
              </div>

              <Button 
                size="lg" 
                className="mt-10 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white text-lg px-8 py-6 shadow-2xl"
              >
                Cadastrar Minha Loja
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6">Cadastro de Loja</h3>
              <form onSubmit={handleStoreSubmit} className="space-y-4">
                <Input
                  type="text"
                  placeholder="Nome da Loja"
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/60 h-12"
                  required
                />
                <Input
                  type="email"
                  placeholder="Email da Loja"
                  value={storeEmail}
                  onChange={(e) => setStoreEmail(e.target.value)}
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/60 h-12"
                  required
                />
                <Input
                  type="tel"
                  placeholder="Telefone"
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/60 h-12"
                  required
                />
                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white h-12 text-lg font-semibold"
                >
                  Solicitar Cadastro
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="precos" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-4">
              Planos Simples e Transparentes
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Escolha o plano ideal para você ou sua loja
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* User Plan */}
            <Card className="border-2 border-gray-200 hover:border-gray-400 transition-all duration-300 hover:shadow-2xl">
              <CardContent className="p-10">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-white mx-auto mb-4">
                    <Users className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">Usuário</h3>
                  <div className="text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-transparent mb-2">
                    Grátis
                  </div>
                  <p className="text-gray-600">Para sempre</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {[
                    "Prova virtual ilimitada",
                    "Compartilhamento de looks",
                    "Histórico de favoritos",
                    "Sugestões personalizadas",
                    "Acesso a todas as lojas",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-gray-800 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button className="w-full bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black h-12 text-lg">
                  Começar Grátis
                </Button>
              </CardContent>
            </Card>

            {/* Store Plan */}
            <Card className="border-2 border-amber-500 hover:border-orange-600 transition-all duration-300 hover:shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-gradient-to-r from-amber-500 to-orange-600 text-white px-4 py-1 text-sm font-semibold rounded-bl-lg">
                Recomendado
              </div>
              <CardContent className="p-10">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white mx-auto mb-4">
                    <Store className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">Loja Parceira</h3>
                  <div className="text-5xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-2">
                    R$ 29,90
                  </div>
                  <p className="text-gray-600">Por mês</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {[
                    "Cadastro ilimitado de produtos",
                    "Dashboard de vendas completo",
                    "Analytics e relatórios",
                    "Suporte prioritário",
                    "Campanhas promocionais",
                    "Destaque no aplicativo",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-amber-600 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 h-12 text-lg">
                  Começar Agora
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-stone-50">
        <div className="container mx-auto text-center">
          {/* Logo no CTA */}
          <div className="flex justify-center mb-6">
            <OutfitLogo className="h-16" />
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-6">
            Pronto para Revolucionar seu Guarda-Roupa?
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Junte-se a milhares de usuários que já estão experimentando o futuro da moda
          </p>

          <form onSubmit={handleUserSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Seu melhor email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                className="h-14 text-lg"
                required
              />
              <Button 
                type="submit"
                size="lg" 
                className="bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black h-14 px-8 text-lg whitespace-nowrap"
              >
                Quero Testar
              </Button>
            </div>
          </form>

          <p className="text-sm text-gray-500 mt-4">
            Sem compromisso. Cancele quando quiser.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="mb-4">
                <OutfitLogo className="h-10 brightness-0 invert" />
              </div>
              <p className="text-gray-400">
                A revolução da moda virtual está aqui.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Produto</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Funcionalidades</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Preços</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Sobre Nós</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Carreiras</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Privacidade</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Termos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Outfit. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
