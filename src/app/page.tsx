"use client";

import { useState } from "react";
import { Home, Search, Camera, Heart, User, TrendingUp, Users, Sparkles, Plus, MessageCircle, Share2, Bookmark, ShoppingBag, Star, Award, Zap, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import OutfitLogo from "@/components/custom/OutfitLogo";

type TabType = "home" | "explore" | "camera" | "favorites" | "profile";

export default function OutfitApp() {
  const [activeTab, setActiveTab] = useState<TabType>("home");

  // Mock data - Looks do feed
  const looks = [
    {
      id: 1,
      user: { name: "Ana Silva", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop", verified: true },
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=600&fit=crop",
      likes: 2340,
      comments: 145,
      shares: 89,
      description: "Look perfeito para o verão! ☀️ Encontrei essas peças incríveis na Zara",
      tags: ["Verão 2024", "Casual Chic", "Praia"],
      store: "Zara",
      price: "R$ 189,90",
      challenge: "Desafio Verão 2024"
    },
    {
      id: 2,
      user: { name: "Carla Mendes", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop", verified: true },
      image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=400&h=600&fit=crop",
      likes: 1890,
      comments: 98,
      shares: 56,
      description: "Elegância para o trabalho ✨ Look completo disponível na C&A",
      tags: ["Formal", "Trabalho", "Elegante"],
      store: "C&A",
      price: "R$ 249,90"
    },
    {
      id: 3,
      user: { name: "Julia Costa", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop", verified: false },
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&h=600&fit=crop",
      likes: 4560,
      comments: 278,
      shares: 134,
      description: "Estilo urbano moderno 🏙️ Participando do desafio Street Style!",
      tags: ["Urbano", "Moderno", "Street"],
      store: "Renner",
      price: "R$ 159,90",
      challenge: "Desafio Street Style"
    }
  ];

  // Categorias em alta
  const trendingCategories = [
    { name: "Verão 2024", icon: "☀️", count: "2.3k looks", color: "from-amber-400 to-orange-500" },
    { name: "Casual Chic", icon: "👗", count: "1.8k looks", color: "from-pink-400 to-rose-500" },
    { name: "Festa", icon: "🎉", count: "1.2k looks", color: "from-purple-400 to-indigo-500" },
    { name: "Trabalho", icon: "💼", count: "980 looks", color: "from-blue-400 to-cyan-500" },
    { name: "Street Style", icon: "🛹", count: "1.5k looks", color: "from-gray-700 to-gray-900" },
    { name: "Boho", icon: "🌸", count: "890 looks", color: "from-green-400 to-emerald-500" }
  ];

  // Lojas parceiras
  const partnerStores = [
    { name: "Zara", logo: "🏪", products: 234 },
    { name: "C&A", logo: "👔", products: 189 },
    { name: "Renner", logo: "🛍️", products: 312 },
    { name: "Riachuelo", logo: "👗", products: 267 }
  ];

  // Desafios ativos
  const activeChallenges = [
    { name: "Verão 2024", participants: 1234, prize: "Vale-compras R$ 500", deadline: "3 dias" },
    { name: "Street Style", participants: 890, prize: "Consultoria de estilo", deadline: "5 dias" },
    { name: "Festa Glam", participants: 567, prize: "Kit de produtos", deadline: "7 dias" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pb-20">
      {/* Header fixo com gradiente */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            <OutfitLogo className="h-8" />
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-gray-100 relative">
                <MessageCircle className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-gray-100">
                <Plus className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Conteúdo principal */}
      <main className="pt-16 px-4">
        {/* TAB: HOME - Feed Social */}
        {activeTab === "home" && (
          <div className="space-y-6 pb-6">
            {/* Stories/Categorias horizontais */}
            <div className="flex gap-4 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
              <div className="flex flex-col items-center gap-2 min-w-[70px]">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center text-white border-4 border-gray-200 shadow-lg">
                  <Plus className="w-6 h-6" />
                </div>
                <span className="text-xs font-medium text-gray-700">Seu Look</span>
              </div>
              {trendingCategories.map((cat, idx) => (
                <div key={idx} className="flex flex-col items-center gap-2 min-w-[70px]">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${cat.color} flex items-center justify-center text-2xl border-4 border-white shadow-lg`}>
                    {cat.icon}
                  </div>
                  <span className="text-xs font-medium text-gray-700 text-center leading-tight">{cat.name}</span>
                </div>
              ))}
            </div>

            {/* Desafios ativos */}
            <Card className="overflow-hidden border-0 shadow-lg bg-gradient-to-br from-purple-500 to-pink-500">
              <CardContent className="p-4 text-white">
                <div className="flex items-center gap-2 mb-3">
                  <Award className="w-5 h-5" />
                  <h3 className="font-bold text-lg">Desafios da Semana</h3>
                </div>
                <div className="space-y-2">
                  {activeChallenges.slice(0, 1).map((challenge, idx) => (
                    <div key={idx} className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold">{challenge.name}</span>
                        <Badge className="bg-white/30 text-white border-0">
                          {challenge.deadline}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {challenge.participants} participantes
                        </span>
                        <span className="flex items-center gap-1">
                          <Crown className="w-4 h-4" />
                          {challenge.prize}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-3 bg-white text-purple-600 hover:bg-gray-100 font-semibold">
                  Ver Todos os Desafios
                </Button>
              </CardContent>
            </Card>

            {/* Feed de Looks */}
            <div className="space-y-6">
              {looks.map((look) => (
                <Card key={look.id} className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-shadow">
                  {/* Header do post */}
                  <div className="flex items-center justify-between p-4 bg-white">
                    <div className="flex items-center gap-3">
                      <Avatar className="w-11 h-11 ring-2 ring-gray-200">
                        <AvatarImage src={look.user.avatar} />
                        <AvatarFallback>{look.user.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center gap-1">
                          <p className="font-bold text-sm">{look.user.name}</p>
                          {look.user.verified && (
                            <Badge className="bg-blue-500 text-white px-1 py-0 h-4 text-[10px]">
                              ✓
                            </Badge>
                          )}
                        </div>
                        <p className="text-xs text-gray-500">2 horas atrás</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="text-gray-800 font-bold hover:bg-gray-100">
                      Seguir
                    </Button>
                  </div>

                  {/* Imagem do look */}
                  <div className="relative aspect-[3/4] bg-gradient-to-br from-gray-100 to-gray-200">
                    <img 
                      src={look.image} 
                      alt={look.description}
                      className="w-full h-full object-cover"
                    />
                    {look.challenge && (
                      <div className="absolute top-3 left-3">
                        <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 shadow-lg">
                          <Zap className="w-3 h-3 mr-1" />
                          {look.challenge}
                        </Badge>
                      </div>
                    )}
                    <div className="absolute bottom-3 right-3">
                      <Button size="sm" className="bg-white/90 backdrop-blur-sm text-gray-900 hover:bg-white shadow-lg">
                        <ShoppingBag className="w-4 h-4 mr-1" />
                        {look.price}
                      </Button>
                    </div>
                  </div>

                  {/* Ações e informações */}
                  <CardContent className="p-4 space-y-3 bg-white">
                    {/* Botões de ação */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <Button variant="ghost" size="icon" className="text-red-500 hover:text-red-600 hover:bg-red-50">
                          <Heart className="w-6 h-6" fill="currentColor" />
                        </Button>
                        <Button variant="ghost" size="icon" className="hover:bg-gray-100">
                          <MessageCircle className="w-6 h-6" />
                        </Button>
                        <Button variant="ghost" size="icon" className="hover:bg-gray-100">
                          <Share2 className="w-6 h-6" />
                        </Button>
                      </div>
                      <Button variant="ghost" size="icon" className="hover:bg-gray-100">
                        <Bookmark className="w-6 h-6" />
                      </Button>
                    </div>

                    {/* Estatísticas */}
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span className="font-semibold text-gray-900">{look.likes.toLocaleString()} curtidas</span>
                      <span>{look.comments} comentários</span>
                      <span>{look.shares} compartilhamentos</span>
                    </div>

                    {/* Descrição */}
                    <div>
                      <p className="text-sm">
                        <span className="font-bold">{look.user.name}</span>{" "}
                        {look.description}
                      </p>
                    </div>

                    {/* Tags e loja */}
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <div className="flex gap-2 flex-wrap">
                        {look.tags.map((tag, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs bg-gray-100 hover:bg-gray-200 cursor-pointer">
                            #{tag}
                          </Badge>
                        ))}
                      </div>
                      <Badge className="bg-gradient-to-r from-gray-800 to-gray-900 text-white">
                        <ShoppingBag className="w-3 h-3 mr-1" />
                        {look.store}
                      </Badge>
                    </div>

                    {/* Botão de compra */}
                    <Button className="w-full bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white font-semibold shadow-lg">
                      Comprar Este Look
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* TAB: EXPLORAR */}
        {activeTab === "explore" && (
          <div className="space-y-6 pb-6">
            {/* Barra de busca */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar looks, estilos, lojas..."
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white border-2 border-gray-200 focus:border-gray-800 focus:ring-0 shadow-sm"
              />
            </div>

            {/* Lojas Parceiras */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">Lojas Parceiras</h2>
                <Badge className="bg-gradient-to-r from-amber-400 to-orange-500 text-white border-0">
                  R$ 29,90/mês
                </Badge>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {partnerStores.map((store, idx) => (
                  <Card key={idx} className="overflow-hidden cursor-pointer hover:shadow-xl transition-all hover:scale-105 border-0 shadow-lg">
                    <CardContent className="p-5 text-center bg-gradient-to-br from-white to-gray-50">
                      <div className="text-4xl mb-3">{store.logo}</div>
                      <h3 className="font-bold text-lg mb-1">{store.name}</h3>
                      <p className="text-sm text-gray-600">{store.products} produtos</p>
                      <Button size="sm" className="mt-3 w-full bg-gray-800 hover:bg-gray-900">
                        Ver Catálogo
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Categorias em Alta */}
            <div>
              <h2 className="text-xl font-bold mb-4">Categorias em Alta</h2>
              <div className="grid grid-cols-2 gap-3">
                {trendingCategories.map((cat, idx) => (
                  <Card key={idx} className="overflow-hidden cursor-pointer hover:shadow-xl transition-all hover:scale-105 border-0 shadow-lg">
                    <CardContent className={`p-6 text-center bg-gradient-to-br ${cat.color} text-white`}>
                      <div className="text-4xl mb-2">{cat.icon}</div>
                      <h3 className="font-bold mb-1">{cat.name}</h3>
                      <p className="text-sm opacity-90">{cat.count}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Looks Populares */}
            <div>
              <h2 className="text-xl font-bold mb-4">Looks Populares Hoje</h2>
              <div className="grid grid-cols-3 gap-2">
                {[...looks, ...looks].map((look, idx) => (
                  <div key={idx} className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer">
                    <img 
                      src={look.image} 
                      alt={look.description}
                      className="w-full h-full object-cover hover:scale-110 transition-transform"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB: CÂMERA - Prova Virtual */}
        {activeTab === "camera" && (
          <div className="space-y-6 pb-6">
            <div className="text-center py-8">
              <div className="w-28 h-28 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-2xl">
                <Camera className="w-14 h-14 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-3 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Prova Virtual
              </h2>
              <p className="text-gray-600 mb-8 max-w-sm mx-auto leading-relaxed">
                Experimente roupas virtualmente usando IA! Tire uma foto ou escolha da galeria
              </p>
              
              <div className="space-y-3">
                <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 h-14 text-lg font-semibold shadow-lg">
                  <Camera className="w-5 h-5 mr-2" />
                  Tirar Foto Agora
                </Button>
                <Button variant="outline" className="w-full h-14 text-lg border-2 border-gray-800 font-semibold hover:bg-gray-50">
                  Escolher da Galeria
                </Button>
              </div>
            </div>

            {/* Análise de Estilo com IA */}
            <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-blue-500 to-cyan-500">
              <CardContent className="p-5 text-white">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="w-6 h-6" />
                  <h3 className="font-bold text-lg">Análise de Estilo com IA</h3>
                </div>
                <p className="text-sm mb-4 opacity-90">
                  Nossa IA analisa seu estilo pessoal e sugere peças perfeitas para você!
                </p>
                <Button className="w-full bg-white text-blue-600 hover:bg-gray-100 font-semibold">
                  Descobrir Meu Estilo
                </Button>
              </CardContent>
            </Card>

            {/* Histórico de Looks */}
            <div>
              <h3 className="text-lg font-bold mb-4">Histórico de Provas</h3>
              <div className="grid grid-cols-3 gap-2">
                {looks.slice(0, 9).map((look, idx) => (
                  <div key={idx} className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden relative shadow-md">
                    <img 
                      src={look.image} 
                      alt="Prova virtual"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end justify-center pb-2">
                      <Sparkles className="w-5 h-5 text-white" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB: FAVORITOS */}
        {activeTab === "favorites" && (
          <div className="space-y-6 pb-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Meus Favoritos</h2>
              <Badge className="bg-gradient-to-r from-red-500 to-pink-500 text-white border-0 shadow-lg">
                <Heart className="w-3 h-3 mr-1" fill="currentColor" />
                {looks.length} looks
              </Badge>
            </div>

            {/* Coleções */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Minhas Coleções</h3>
              <div className="grid grid-cols-2 gap-3">
                <Card className="overflow-hidden cursor-pointer hover:shadow-xl transition-all border-0 shadow-lg">
                  <CardContent className="p-4 bg-gradient-to-br from-amber-400 to-orange-500 text-white">
                    <div className="text-3xl mb-2">☀️</div>
                    <h4 className="font-bold mb-1">Verão</h4>
                    <p className="text-sm opacity-90">12 looks</p>
                  </CardContent>
                </Card>
                <Card className="overflow-hidden cursor-pointer hover:shadow-xl transition-all border-0 shadow-lg">
                  <CardContent className="p-4 bg-gradient-to-br from-purple-500 to-indigo-500 text-white">
                    <div className="text-3xl mb-2">🎉</div>
                    <h4 className="font-bold mb-1">Festa</h4>
                    <p className="text-sm opacity-90">8 looks</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Looks salvos */}
            <div className="space-y-4">
              {looks.map((look) => (
                <Card key={look.id} className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-shadow">
                  <div className="flex items-center justify-between p-4 bg-white">
                    <div className="flex items-center gap-3">
                      <Avatar className="w-10 h-10 ring-2 ring-gray-200">
                        <AvatarImage src={look.user.avatar} />
                        <AvatarFallback>{look.user.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-bold text-sm">{look.user.name}</p>
                        <p className="text-xs text-gray-500">Salvo há 2 dias</p>
                      </div>
                    </div>
                    <Heart className="w-6 h-6 text-red-500" fill="currentColor" />
                  </div>

                  <div className="relative aspect-[3/4] bg-gradient-to-br from-gray-100 to-gray-200">
                    <img 
                      src={look.image} 
                      alt={look.description}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <CardContent className="p-4 bg-white">
                    <p className="text-sm mb-3">
                      <span className="font-bold">{look.user.name}</span>{" "}
                      {look.description}
                    </p>
                    <Button className="w-full bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black font-semibold">
                      Comprar - {look.price}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* TAB: PERFIL */}
        {activeTab === "profile" && (
          <div className="space-y-6 pb-6">
            {/* Header do perfil */}
            <Card className="overflow-hidden border-0 shadow-xl">
              <div className="h-24 bg-gradient-to-r from-purple-500 to-pink-500"></div>
              <CardContent className="p-6 -mt-12">
                <Avatar className="w-24 h-24 mx-auto mb-4 ring-4 ring-white shadow-xl">
                  <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop" />
                  <AvatarFallback>VC</AvatarFallback>
                </Avatar>
                <div className="text-center">
                  <h2 className="text-2xl font-bold mb-1">Você</h2>
                  <p className="text-gray-600 mb-4">@seuperfil</p>
                  
                  <div className="flex justify-center gap-8 mb-6">
                    <div className="text-center">
                      <p className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">42</p>
                      <p className="text-sm text-gray-600">Looks</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">1.2k</p>
                      <p className="text-sm text-gray-600">Seguidores</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">856</p>
                      <p className="text-sm text-gray-600">Seguindo</p>
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black font-semibold shadow-lg mb-3">
                    Editar Perfil
                  </Button>
                  <Button variant="outline" className="w-full border-2 border-gray-800 font-semibold hover:bg-gray-50">
                    Compartilhar Perfil
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Conquistas e Badges */}
            <Card className="overflow-hidden border-0 shadow-xl">
              <CardContent className="p-5">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-amber-500" />
                  Conquistas
                </h3>
                <div className="grid grid-cols-4 gap-3">
                  <div className="text-center">
                    <div className="w-14 h-14 mx-auto mb-2 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg">
                      <Crown className="w-7 h-7 text-white" />
                    </div>
                    <p className="text-xs font-medium">Top 10</p>
                  </div>
                  <div className="text-center">
                    <div className="w-14 h-14 mx-auto mb-2 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center shadow-lg">
                      <Star className="w-7 h-7 text-white" />
                    </div>
                    <p className="text-xs font-medium">Influencer</p>
                  </div>
                  <div className="text-center">
                    <div className="w-14 h-14 mx-auto mb-2 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center shadow-lg">
                      <Zap className="w-7 h-7 text-white" />
                    </div>
                    <p className="text-xs font-medium">Desafio</p>
                  </div>
                  <div className="text-center">
                    <div className="w-14 h-14 mx-auto mb-2 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center shadow-lg">
                      <Heart className="w-7 h-7 text-white" />
                    </div>
                    <p className="text-xs font-medium">1k Likes</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Estatísticas */}
            <Card className="overflow-hidden border-0 shadow-xl">
              <CardContent className="p-5 space-y-4">
                <h3 className="font-bold text-lg mb-4">Estatísticas</h3>
                
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center shadow-lg">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold">Engajamento</p>
                      <p className="text-sm text-gray-600">Crescimento mensal</p>
                    </div>
                  </div>
                  <Badge className="bg-green-500 text-white shadow-lg">+24%</Badge>
                </div>

                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center shadow-lg">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold">Novos Seguidores</p>
                      <p className="text-sm text-gray-600">Esta semana</p>
                    </div>
                  </div>
                  <Badge className="bg-blue-500 text-white shadow-lg">+89</Badge>
                </div>

                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-red-50 to-pink-50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-400 to-pink-500 flex items-center justify-center shadow-lg">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold">Total de Curtidas</p>
                      <p className="text-sm text-gray-600">Todos os looks</p>
                    </div>
                  </div>
                  <Badge className="bg-red-500 text-white shadow-lg">3.2k</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Grid de looks do usuário */}
            <div>
              <h3 className="text-lg font-bold mb-4">Meus Looks</h3>
              <div className="grid grid-cols-3 gap-2">
                {looks.map((look, idx) => (
                  <div key={idx} className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer">
                    <img 
                      src={look.image} 
                      alt={look.description}
                      className="w-full h-full object-cover hover:scale-110 transition-transform"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-gray-200 px-4 py-3 z-50 shadow-2xl">
        <div className="flex items-center justify-around">
          <button
            onClick={() => setActiveTab("home")}
            className={`flex flex-col items-center gap-1 transition-all ${
              activeTab === "home" ? "text-gray-900 scale-110" : "text-gray-400"
            }`}
          >
            <Home className={`w-6 h-6 ${activeTab === "home" ? "fill-current" : ""}`} />
            <span className="text-xs font-semibold">Início</span>
          </button>

          <button
            onClick={() => setActiveTab("explore")}
            className={`flex flex-col items-center gap-1 transition-all ${
              activeTab === "explore" ? "text-gray-900 scale-110" : "text-gray-400"
            }`}
          >
            <Search className="w-6 h-6" />
            <span className="text-xs font-semibold">Explorar</span>
          </button>

          <button
            onClick={() => setActiveTab("camera")}
            className="flex flex-col items-center gap-1 -mt-8"
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
              <Camera className="w-8 h-8 text-white" />
            </div>
          </button>

          <button
            onClick={() => setActiveTab("favorites")}
            className={`flex flex-col items-center gap-1 transition-all ${
              activeTab === "favorites" ? "text-gray-900 scale-110" : "text-gray-400"
            }`}
          >
            <Heart className={`w-6 h-6 ${activeTab === "favorites" ? "fill-current" : ""}`} />
            <span className="text-xs font-semibold">Favoritos</span>
          </button>

          <button
            onClick={() => setActiveTab("profile")}
            className={`flex flex-col items-center gap-1 transition-all ${
              activeTab === "profile" ? "text-gray-900 scale-110" : "text-gray-400"
            }`}
          >
            <User className="w-6 h-6" />
            <span className="text-xs font-semibold">Perfil</span>
          </button>
        </div>
      </nav>
    </div>
  );
}
