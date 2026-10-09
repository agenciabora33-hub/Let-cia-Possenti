import React, { useState } from 'react';
import { faqData } from '../data/faqData';
import { ChevronDown, Search, MessageCircle, HelpCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/whatsapp';

export const FaqAccordion: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('todos');
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = faqData.filter((item) => {
    const matchesCategory =
      activeCategory === 'todos' || item.category === activeCategory;
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="duvidas" className="py-20 lg:py-28 bg-[#F9FAFB] border-b border-neutral-200/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#C5A059] font-semibold mb-2">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Respostas Claras & Otimizadas (AEO)</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#111827] font-medium tracking-tight text-balance">
            Perguntas Frequentes sobre Direito de Família e Sucessões
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-600 font-light max-w-2xl mx-auto">
            Tire suas principais dúvidas sobre divórcio, partilha de bens, inventário em cartório e garantia de terapias em Caxias do Sul.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="mb-8 space-y-4">
          {/* Search bar */}
          <div className="relative">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Pesquisar por tema (ex: inventário, pensão, liminar TEA, cartório)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white border border-neutral-200 rounded-lg text-xs sm:text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] shadow-sm"
            />
          </div>

          {/* Category Tabs (Interactive buttons) */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setActiveCategory('todos')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-md border transition-colors ${
                activeCategory === 'todos'
                  ? 'bg-[#111827] text-white border-[#111827]'
                  : 'bg-white text-neutral-600 border-neutral-200 hover:border-neutral-300'
              }`}
            >
              Todas as Dúvidas
            </button>
            <button
              onClick={() => setActiveCategory('familia')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-md border transition-colors ${
                activeCategory === 'familia'
                  ? 'bg-[#111827] text-white border-[#111827]'
                  : 'bg-white text-neutral-600 border-neutral-200 hover:border-neutral-300'
              }`}
            >
              Divórcio & Guarda
            </button>
            <button
              onClick={() => setActiveCategory('inventario')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-md border transition-colors ${
                activeCategory === 'inventario'
                  ? 'bg-[#111827] text-white border-[#111827]'
                  : 'bg-white text-neutral-600 border-neutral-200 hover:border-neutral-300'
              }`}
            >
              Inventário & Herança
            </button>
            <button
              onClick={() => setActiveCategory('tea')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-md border transition-colors ${
                activeCategory === 'tea'
                  ? 'bg-[#111827] text-white border-[#111827]'
                  : 'bg-white text-neutral-600 border-neutral-200 hover:border-neutral-300'
              }`}
            >
              Direitos TEA & Saúde
            </button>
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg border border-neutral-200/90 overflow-hidden shadow-sm transition-colors"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full text-left px-5 sm:px-6 py-4 flex items-center justify-between gap-4 focus:outline-none focus-visible:bg-neutral-50"
                  >
                    <span className="font-serif text-base sm:text-lg font-semibold text-[#111827]">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#C5A059] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-neutral-600 leading-relaxed border-t border-neutral-100 bg-[#FBFBFA]/50 animate-in fade-in duration-150">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-10 bg-white rounded-lg border border-dashed border-neutral-300">
              <p className="text-sm text-neutral-500">
                Nenhuma resposta encontrada para "{searchQuery}".
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('todos');
                }}
                className="mt-2 text-xs text-[#C5A059] font-semibold underline"
              >
                Limpar filtros de busca
              </button>
            </div>
          )}
        </div>

        {/* Help Callout */}
        <div className="mt-12 p-6 rounded-xl bg-white border border-[#C5A059]/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-serif text-lg font-semibold text-[#111827]">
              Sua dúvida não foi listada aqui?
            </h4>
            <p className="text-xs text-neutral-600 mt-0.5">
              Envie sua pergunta diretamente para a Dra. Letícia Possenti e receba orientação individualizada.
            </p>
          </div>
          <a
            href={getWhatsAppUrl('Olá, Dra. Letícia! Tenho uma dúvida jurídica que gostaria de esclarecer.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#111827] hover:bg-[#1f2937] text-white text-xs font-semibold uppercase tracking-wider rounded border border-[#C5A059] whitespace-nowrap"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Tirar Dúvida no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
