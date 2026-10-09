import React, { useState, useEffect } from 'react';
import { 
  Scale, 
  Coins, 
  Check, 
  AlertTriangle, 
  FileCheck, 
  Clock, 
  ShieldCheck, 
  HelpCircle, 
  ArrowRight, 
  MessageCircle, 
  Phone, 
  MapPin, 
  Calendar, 
  Sparkles,
  DollarSign,
  AlertCircle,
  FileText,
  BadgeCheck
} from 'lucide-react';
import { getWhatsAppUrl, WHATSAPP_PHONE_DISPLAY, OFFICE_ADDRESS } from '../utils/whatsapp';
import { trackAdConversion } from '../utils/analytics';
import pensaoHeroImg from '../assets/images/pensao_alimenticia_apoio_1791579205311.jpg';

interface PensaoAlimenticiaPageProps {
  onNavigate: (path: string) => void;
}

export const PensaoAlimenticiaPage: React.FC<PensaoAlimenticiaPageProps> = ({ onNavigate }) => {
  // Simulator state
  const [goal, setGoal] = useState<'fixar' | 'cobrar' | 'revisar' | 'exonerar'>('fixar');
  const [workStatus, setWorkStatus] = useState<'clt' | 'autonomo' | 'desempregado'>('clt');
  const [numChildren, setNumChildren] = useState<number>(1);
  const [estimatedExpenses, setEstimatedExpenses] = useState<string>('2000');

  // Local SEO Meta tags & JSON-LD schema
  useEffect(() => {
    document.title = 'Pensão Alimentícia em Caxias do Sul | Dra. Letícia Possenti Advogada';
    
    const metaDesc = document.querySelector('meta[name="description"]');
    const originalDesc = metaDesc?.getAttribute('content') || '';
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Advocacia especializada em Pensão Alimentícia em Caxias do Sul e Serra Gaúcha. Fixação de alimentos provisórios, cobrança sob rito de prisão (art. 528 CPC), ação revisional e exoneração. Atendimento humanizado e estratégico.'
      );
    }

    // Canonical link update
    let canonical = document.querySelector('link[rel="canonical"]');
    const originalCanonical = canonical?.getAttribute('href') || 'https://leticiapossenti.com.br';
    if (canonical) {
      canonical.setAttribute('href', 'https://leticiapossenti.com.br/pensao-alimenticia');
    }

    // Inject JSON-LD Schema
    const scriptId = 'pensao-schema-jsonld';
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      script.text = JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'LegalService',
            '@id': 'https://leticiapossenti.com.br/#legalservice',
            'name': 'Advogada Letícia Possenti - Pensão Alimentícia em Caxias do Sul',
            'image': 'https://leticiapossenti.com.br/images/pensao_alimenticia_apoio_1791579205311.jpg',
            'url': 'https://leticiapossenti.com.br/pensao-alimenticia',
            'telephone': '+5554996534554',
            'priceRange': '$$',
            'address': {
              '@type': 'PostalAddress',
              'streetAddress': 'Rua Os Dezoito do Forte',
              'addressLocality': 'Caxias do Sul',
              'addressRegion': 'RS',
              'postalCode': '95000-000',
              'addressCountry': 'BR'
            },
            'geo': {
              '@type': 'GeoCoordinates',
              'latitude': -29.1678,
              'longitude': -51.1794
            },
            'areaServed': [
              'Caxias do Sul',
              'Farroupilha',
              'Bento Gonçalves',
              'Flores da Cunha',
              'Carlos Barbosa',
              'Garibaldi',
              'Serra Gaúcha'
            ],
            'description': 'Especialista em Direito de Família e Pensão Alimentícia em Caxias do Sul. Ações de fixação de alimentos, execução pelo rito de prisão civil, revisão e exoneração.'
          },
          {
            '@type': 'BreadcrumbList',
            'itemListElement': [
              {
                '@type': 'ListItem',
                'position': 1,
                'name': 'Início',
                'item': 'https://leticiapossenti.com.br/'
              },
              {
                '@type': 'ListItem',
                'position': 2,
                'name': 'Áreas de Atuação',
                'item': 'https://leticiapossenti.com.br/servicos'
              },
              {
                '@type': 'ListItem',
                'position': 3,
                'name': 'Pensão Alimentícia em Caxias do Sul',
                'item': 'https://leticiapossenti.com.br/pensao-alimenticia'
              }
            ]
          },
          {
            '@type': 'FAQPage',
            'mainEntity': [
              {
                '@type': 'Question',
                'name': 'A pensão alimentícia é sempre fixada em 30% do salário em Caxias do Sul?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'Não. O Código Civil brasileiro não estipula qualquer percentual fixo. O juiz arbitra o montante baseado no trinômio: necessidade do filho, possibilidade financeira de quem paga e proporcionalidade entre ambos os genitores.'
                }
              },
              {
                '@type': 'Question',
                'name': 'Com quantos meses de atraso posso pedir a prisão do devedor de pensão?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'A partir de apenas 1 parcela em atraso já é cabível o pedido de execução sob rito de prisão civil (artigo 528 do CPC). A lei permite cobrar as 3 últimas parcelas vencidas antes da ação mais todas que vencerem durante o processo.'
                }
              },
              {
                '@type': 'Question',
                'name': 'E se o pai ou mãe não tiver carteira assinada ou trabalhar informalmente?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'O dever alimentar permanece integral. O valor pode ser fixado com base no salário mínimo ou através da Teoria da Aparência, apurando sinais exteriores de riqueza como veículos, viagens e padrão de vida demonstrado nas redes sociais.'
                }
              },
              {
                '@type': 'Question',
                'name': 'A pensão alimentícia é cancelada automaticamente aos 18 anos?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'Não. Segundo a Súmula 358 do Superior Tribunal de Justiça (STJ), a exoneração de pensão exige ação judicial específica para permitir que o filho comprove se ainda necessita dos alimentos (por exemplo, cursando ensino superior ou técnico).'
                }
              }
            ]
          }
        ]
      });
      document.head.appendChild(script);
    }

    return () => {
      document.title = 'Advogada Letícia Possenti | Direito de Família e Sucessões em Caxias do Sul';
      if (metaDesc && originalDesc) metaDesc.setAttribute('content', originalDesc);
      if (canonical && originalCanonical) canonical.setAttribute('href', originalCanonical);
      const injectedScript = document.getElementById(scriptId);
      if (injectedScript) injectedScript.remove();
    };
  }, []);

  const getSimulatorResult = () => {
    switch (goal) {
      case 'fixar':
        return {
          title: 'Ação de Alimentos com Pedido de Liminar Provisória',
          subtitle: 'Urgência na garantia do sustento antes mesmo da primeira audiência.',
          description:
            workStatus === 'clt'
              ? 'Para alimentante com vínculo formal (CLT ou servidor público), a petição inicial solicita desconto direto em folha de pagamento sobre rendimentos líquidos, 13º e férias, trazendo pontualidade absoluta sem risco de inadimplência.'
              : workStatus === 'autonomo'
              ? 'Para alimentante autônomo, empresário ou profissional liberal, solicitamos fixação em percentual do salário mínimo ou investigação de faturamento bancário e sinais exteriores de riqueza (redes sociais, padrão de vida).'
              : 'Mesmo para o genitor desempregado, a lei exige a contribuição mínima fixada sobre percentual do salário mínimo nacional, já que a necessidade básica do filho não cessa.',
          urgency: 'Alta Prioridade',
          cpcRef: 'Artigo 4º da Lei 5.478/1968 (Alimentos Provisórios)',
          recommendedAction: 'Reunir certidão de nascimento e planilha de custos da criança para ingresso imediato com pedido liminar na Vara de Família de Caxias do Sul.'
        };
      case 'cobrar':
        return {
          title: 'Execução de Alimentos (Rito de Prisão ou Penhora)',
          subtitle: 'Cobrança coercitiva imediata das parcelas atrasadas com suporte legal rigoroso.',
          description:
            'A lei processual civil (art. 528 CPC) prevê que as 3 últimas parcelas não pagas (mais as que vencerem no processo) autorizam a decretação de Prisão Civil em regime fechado (de 1 a 3 meses) se o devedor não pagar em 3 dias. Para débitos anteriores, executamos sob o rito de penhora de contas (SISBAJUD), veículos (RENAJUD), retenção de FGTS e até suspensão de CNH e passaporte.',
          urgency: 'Urgência Extrema',
          cpcRef: 'Artigos 528 e 530 do Código de Processo Civil',
          recommendedAction: 'Apresentar a decisão/acordo anterior que fixou a pensão e os comprovantes dos meses não pagos para protocolar a execução imediata.'
        };
      case 'revisar':
        return {
          title: 'Ação Revisional de Alimentos',
          subtitle: 'Readequação dos valores quando houver alteração comprovada no binômio necessidade x possibilidade.',
          description:
            'Cabível tanto para quem recebe (quando o filho passa a ter novas despesas com saúde, colégio ou terapias e o alimentante teve aumento salarial) quanto para quem paga (quando ocorreu redução involuntária de renda, desemprego ou nascimento de novos dependentes comprovados documentalmente).',
          urgency: 'Regular / Estratégica',
          cpcRef: 'Artigo 1.699 do Código Civil',
          recommendedAction: 'Comprovar de forma contundente a mudança na situação econômico-financeira através de demonstrativos de renda e evolução das despesas.'
        };
      case 'exonerar':
        return {
          title: 'Ação de Exoneração de Alimentos',
          subtitle: 'Cessação formal da obrigação alimentar pela via judicial adequada.',
          description:
            'A maioridade civil (18 anos) NÃO extingue automaticamente a obrigação alimentar. De acordo com a Súmula 358 do STJ, parar de pagar por conta própria gera execução e risco de prisão. É indispensável ajuizar Ação de Exoneração demonstrando que o filho possui capacidade própria de sustento ou não está matriculado em instituição de ensino regular.',
          urgency: 'Preventiva / Decisória',
          cpcRef: 'Súmula 358 do STJ e Artigo 1.635 do Código Civil',
          recommendedAction: 'Ingressar com a ação antes de suspender os depósitos para garantir segurança jurídica e evitar execuções surpresa.'
        };
    }
  };

  const simResult = getSimulatorResult();

  const handleSimWhatsApp = () => {
    trackAdConversion('Contact', { type: 'pensao_simulator_whatsapp' });
    const goalText = 
      goal === 'fixar' ? 'Fixação de pensão alimentícia' :
      goal === 'cobrar' ? 'Cobrança de pensão em atraso (execução)' :
      goal === 'revisar' ? 'Revisão do valor da pensão' : 'Exoneração de pensão alimentícia';

    const text = `Olá, Dra. Letícia Possenti! Fiz a simulação no seu site sobre Pensão Alimentícia em Caxias do Sul.\n\nObjetivo: ${goalText}\nPerfil do pagador: ${workStatus.toUpperCase()}\nNúmero de dependentes: ${numChildren}\n\nGostaria de orientações jurídicas sobre como conduzir meu caso no Fórum de Caxias do Sul.`;
    window.open(getWhatsAppUrl(text), '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-[#F9FAFB] text-[#374151]">
      
      {/* Top Breadcrumb Navigation */}
      <div className="bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
          <div className="flex items-center gap-2 text-xs uppercase font-medium text-neutral-500">
            <button onClick={() => onNavigate('/')} className="hover:text-[#C5A059] transition-colors">
              Início
            </button>
            <span>/</span>
            <button onClick={() => onNavigate('/servicos')} className="hover:text-[#C5A059] transition-colors">
              Áreas de Atuação
            </button>
            <span>/</span>
            <span className="text-[#C5A059] font-semibold">Pensão Alimentícia em Caxias do Sul</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-[#111827] text-white py-16 sm:py-24 overflow-hidden border-b border-neutral-800">
        {/* Subtle Background Image with Gradient Mask */}
        <div className="absolute inset-0 opacity-25 pointer-events-none">
          <img
            src={pensaoHeroImg}
            alt="Pensão Alimentícia em Caxias do Sul - Dra. Letícia Possenti"
            className="w-full h-full object-cover filter brightness-75 contrast-125"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#111827] via-[#111827]/90 to-[#111827]/70" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-8 space-y-6">
              {/* Local SEO Pill / Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C5A059]/15 border border-[#C5A059]/30 text-[#F4EDE0] text-xs font-medium tracking-wide">
                <span className="w-2 h-2 rounded-full bg-[#C5A059] animate-pulse" />
                <span>Direito de Família Especializado · Caxias do Sul & Serra Gaúcha</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white leading-tight">
                Pensão Alimentícia Estratégica em Caxias do Sul: Proteja o Sustento e a Dignidade de Quem Você Ama
              </h1>

              <p className="text-base sm:text-lg text-neutral-300 font-light leading-relaxed max-w-2xl">
                Atuação ágil e incisiva na fixação de alimentos provisórios em 48-72h, cobrança rigorosa de atrasados sob rito de prisão civil (art. 528 CPC) e revisão de valores defasados perante as Varas de Família do Fórum de Caxias do Sul.
              </p>

              {/* Conversion Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href={getWhatsAppUrl('Olá, Dra. Letícia Possenti! Gostaria de agendar uma consulta sobre Pensão Alimentícia em Caxias do Sul.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-4 bg-[#C5A059] hover:bg-[#d4af37] text-[#111827] font-semibold text-xs uppercase tracking-wider rounded transition-all shadow-xl hover:shadow-2xl hover:scale-[1.01]"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Falar com a Dra. Letícia pelo WhatsApp</span>
                </a>

                <button
                  onClick={() => {
                    document.getElementById('simulador-pensao')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-white/10 hover:bg-white/20 text-white font-medium text-xs uppercase tracking-wider rounded border border-white/20 transition-all backdrop-blur-sm"
                >
                  <Coins className="w-4 h-4 text-[#C5A059]" />
                  <span>Simular Situação do Meu Caso</span>
                </button>
              </div>

              {/* Micro Trust Proofs */}
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-neutral-300 border-t border-neutral-800">
                <div className="flex items-center gap-2">
                  <BadgeCheck className="w-4 h-4 text-[#C5A059] shrink-0" />
                  <span>Alimentos Provisórios Imediatos</span>
                </div>
                <div className="flex items-center gap-2">
                  <BadgeCheck className="w-4 h-4 text-[#C5A059] shrink-0" />
                  <span>Cobrança Sob Rito de Prisão</span>
                </div>
                <div className="flex items-center gap-2">
                  <BadgeCheck className="w-4 h-4 text-[#C5A059] shrink-0" />
                  <span>Investigação de Renda Oculta</span>
                </div>
                <div className="flex items-center gap-2">
                  <BadgeCheck className="w-4 h-4 text-[#C5A059] shrink-0" />
                  <span>Atendimento Presencial em Caxias</span>
                </div>
              </div>
            </div>

            {/* Quick Card Right Side */}
            <div className="lg:col-span-4 bg-neutral-900/90 border border-neutral-700/80 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-2xl space-y-5">
              <div className="border-b border-neutral-800 pb-4">
                <span className="text-[11px] uppercase tracking-wider text-[#C5A059] font-mono font-bold block mb-1">
                  PLANTÃO JURÍDICO FAMILIAR
                </span>
                <h3 className="font-serif text-xl font-semibold text-white">
                  Seu Filho Não Pode Esperar
                </h3>
              </div>

              <p className="text-xs text-neutral-300 font-light leading-relaxed">
                A inadimplência de pensão ou a ausência de fixação formal gera insegurança alimentar e sobrecarga emocional. Atuamos com pedidos de tutela de urgência para que os depósitos comecem de pronto.
              </p>

              <div className="space-y-3 pt-2 text-xs text-neutral-300">
                <div className="p-3 rounded-lg bg-neutral-800/80 border border-neutral-700 flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Está com parcelas em atraso?</span>
                    <span>A partir de 1 mês de inadimplência já é possível cobrar sob pena de prisão civil do alimentante.</span>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-neutral-800/80 border border-neutral-700 flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Nunca foi à Justiça?</span>
                    <span>Acordo de boca não tem validade de execução. Formalize para proteger o futuro da criança.</span>
                  </div>
                </div>
              </div>

              <a
                href={getWhatsAppUrl('Olá, Dra. Letícia! Preciso de orientação urgente para fixar ou cobrar pensão alimentícia em Caxias do Sul.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 bg-[#C5A059] hover:bg-[#d4af37] text-[#111827] font-semibold text-xs uppercase tracking-wider rounded transition-colors text-center"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Consulta Reservada com a Advogada</span>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* 4 Specialized Fronts in Pensão */}
      <section className="py-20 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-16">
            <span className="text-xs uppercase tracking-wider text-[#C5A059] font-semibold block mb-2">
              Áreas de Atuação em Alimentos
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#111827] font-medium tracking-tight">
              As 4 Frentes Jurídicas para Solução Definitiva da Pensão
            </h2>
            <p className="mt-3 text-neutral-600 font-light text-base">
              Seja para iniciar a cobrança, recuperar meses em atraso ou ajustar o valor à realidade financeira, temos a estratégia processual exata para cada situação.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Front 1: Fixação */}
            <div className="p-8 rounded-2xl bg-[#F9FAFB] border border-neutral-200 hover:border-[#C5A059]/60 transition-all group flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-white border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059] shadow-sm">
                  <Coins className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-bold text-[#C5A059] uppercase tracking-wider">
                  01 · Início & Proteção Imediata
                </span>
                <h3 className="font-serif text-2xl font-semibold text-[#111827]">
                  Ação de Fixação de Alimentos (com Alimentos Provisórios)
                </h3>
                <p className="text-sm text-neutral-600 font-light leading-relaxed">
                  Destinada a quem nunca teve a pensão formalizada por sentença judicial ou cartório. Protocolamos a petição na Vara de Família de Caxias do Sul com pedido de <strong>Alimentos Provisórios</strong> — decisão do juiz logo no início do processo que fixa o pagamento mensal antes mesmo da primeira audiência, para que o menor não fique desamparado.
                </p>
                <ul className="space-y-2 pt-2 text-xs text-neutral-700">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#C5A059] shrink-0" />
                    <span>Desconto direto em folha de pagamento (CLT / Servidores)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#C5A059] shrink-0" />
                    <span>Inclusão de percentual sobre 13º salário e terço de férias</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#C5A059] shrink-0" />
                    <span>Pensão gravídica para custear exames e pré-natal na gestação</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Front 2: Execução */}
            <div className="p-8 rounded-2xl bg-[#F9FAFB] border border-neutral-200 hover:border-[#C5A059]/60 transition-all group flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-white border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059] shadow-sm">
                  <AlertTriangle className="w-6 h-6 text-amber-600" />
                </div>
                <span className="text-xs font-mono font-bold text-[#C5A059] uppercase tracking-wider">
                  02 · Cobrança Coercitiva de Atrasados
                </span>
                <h3 className="font-serif text-2xl font-semibold text-[#111827]">
                  Execução de Pensão em Atraso (Rito de Prisão & Penhora)
                </h3>
                <p className="text-sm text-neutral-600 font-light leading-relaxed">
                  Quando o devedor não cumpre a obrigação já fixada pelo juiz. O Código de Processo Civil (art. 528) prevê medidas contundentes. Cobramos os valores atrasados exigindo que o devedor pague em até 3 dias sob pena de <strong>Prisão Civil em regime fechado</strong>, penhora de contas bancárias (SISBAJUD), veículos (RENAJUD) e retenção de restituição de IRPF e FGTS.
                </p>
                <ul className="space-y-2 pt-2 text-xs text-neutral-700">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#C5A059] shrink-0" />
                    <span>Prisão civil de 1 a 3 meses para os últimos 3 meses não pagos</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#C5A059] shrink-0" />
                    <span>Penhora de contas, carros, imóveis e saldo de FGTS</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#C5A059] shrink-0" />
                    <span>Possibilidade de bloqueio de CNH e retenção de passaporte</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Front 3: Revisional */}
            <div className="p-8 rounded-2xl bg-[#F9FAFB] border border-neutral-200 hover:border-[#C5A059]/60 transition-all group flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-white border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059] shadow-sm">
                  <Scale className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-bold text-[#C5A059] uppercase tracking-wider">
                  03 · Readequação Financeira Justa
                </span>
                <h3 className="font-serif text-2xl font-semibold text-[#111827]">
                  Ação Revisional de Alimentos (Aumento ou Redução)
                </h3>
                <p className="text-sm text-neutral-600 font-light leading-relaxed">
                  A pensão alimentícia nunca faz coisa julgada definitiva; ela varia com o tempo. Se o filho cresceu e tem gastos maiores (escola particular, aparelho ortodôntico, terapias) ou se o alimentante foi promovido, cabe <strong>Ação de Majoração</strong>. Se o alimentante teve queda drástica na renda ou novos dependentes, cabe <strong>Ação de Redução</strong> proporcional.
                </p>
                <ul className="space-y-2 pt-2 text-xs text-neutral-700">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#C5A059] shrink-0" />
                    <span>Aumento do valor por elevação das despesas escolares ou de saúde</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#C5A059] shrink-0" />
                    <span>Readequação por desemprego involuntário ou nascimento de novos filhos</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#C5A059] shrink-0" />
                    <span>Cálculo detalhado com base na capacidade de ambos os pais</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Front 4: Exoneração */}
            <div className="p-8 rounded-2xl bg-[#F9FAFB] border border-neutral-200 hover:border-[#C5A059]/60 transition-all group flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-white border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059] shadow-sm">
                  <FileCheck className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-bold text-[#C5A059] uppercase tracking-wider">
                  04 · Encerramento Seguro da Obrigação
                </span>
                <h3 className="font-serif text-2xl font-semibold text-[#111827]">
                  Ação de Exoneração de Alimentos (Maioridade)
                </h3>
                <p className="text-sm text-neutral-600 font-light leading-relaxed">
                  Atingir 18 anos NÃO cancela o desconto da pensão por conta própria (Súmula 358 do STJ). Quem simplesmente deixa de pagar comete crime de desobediência e pode ser preso por execução de alimentos! Ingressamos com a <strong>Ação de Exoneração</strong> para obter ordem judicial de cancelamento definitivo do desconto quando o filho já possui emprego ou não estuda.
                </p>
                <ul className="space-y-2 pt-2 text-xs text-neutral-700">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#C5A059] shrink-0" />
                    <span>Cancelamento formal de desconto em folha via ofício judicial</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#C5A059] shrink-0" />
                    <span>Blindagem contra cobranças retroativas e execuções indevidas</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#C5A059] shrink-0" />
                    <span>Análise de casos de faculdade até 24 anos e autonomia financeira</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Interactive Pensão Simulator */}
      <section id="simulador-pensao" className="py-20 bg-[#F9FAFB] border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs uppercase tracking-wider text-[#C5A059] font-semibold block mb-2">
              Ferramenta Interativa de Orientação
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#111827] font-medium tracking-tight">
              Simulador Jurídico de Pensão Alimentícia
            </h2>
            <p className="mt-3 text-sm text-neutral-600 font-light">
              Identifique em instantes qual é a medida legal aplicável para a sua situação de acordo com o Código de Processo Civil e a jurisprudência das Varas de Família de Caxias do Sul.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-neutral-200/90 shadow-xl overflow-hidden">
            
            <div className="p-6 sm:p-10 border-b border-neutral-100 space-y-8">
              
              {/* Question 1 */}
              <div>
                <label className="text-xs font-semibold text-neutral-900 uppercase tracking-wider block mb-3">
                  1. Qual é o seu objetivo principal hoje?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { key: 'fixar', label: 'Fixar pensão pela 1ª vez', desc: 'Filho sem pensão formalizada na justiça' },
                    { key: 'cobrar', label: 'Cobrar pensão em atraso', desc: 'Devedor não está pagando o valor fixado' },
                    { key: 'revisar', label: 'Revisar valor da pensão', desc: 'Aumentar ou diminuir por mudança financeira' },
                    { key: 'exonerar', label: 'Encerrar pensão (Exoneração)', desc: 'Filho completou 18+ anos com autonomia' }
                  ].map((item) => (
                    <button
                      key={item.key}
                      type="button"
                      onClick={() => setGoal(item.key as any)}
                      className={`p-4 rounded-xl text-left border transition-all ${
                        goal === item.key
                          ? 'border-[#C5A059] bg-[#F4EDE0]/40 text-[#111827] ring-1 ring-[#C5A059]'
                          : 'border-neutral-200 hover:border-neutral-300 bg-white text-neutral-700'
                      }`}
                    >
                      <div className="font-semibold text-sm">{item.label}</div>
                      <div className="text-xs text-neutral-500 mt-0.5">{item.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Question 2 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs font-semibold text-neutral-900 uppercase tracking-wider block mb-3">
                    2. Situação profissional do pagador
                  </label>
                  <select
                    value={workStatus}
                    onChange={(e) => setWorkStatus(e.target.value as any)}
                    className="w-full p-3.5 rounded-xl border border-neutral-200 bg-white text-sm text-neutral-800 focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
                  >
                    <option value="clt">Empregado formal CLT ou Servidor Público</option>
                    <option value="autonomo">Autônomo / Empresário / Renda Informal</option>
                    <option value="desempregado">Desempregado no momento</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-neutral-900 uppercase tracking-wider block mb-3">
                    3. Quantidade de filhos dependentes
                  </label>
                  <select
                    value={numChildren}
                    onChange={(e) => setNumChildren(Number(e.target.value))}
                    className="w-full p-3.5 rounded-xl border border-neutral-200 bg-white text-sm text-neutral-800 focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
                  >
                    <option value={1}>1 filho dependente</option>
                    <option value={2}>2 filhos dependentes</option>
                    <option value={3}>3 ou mais filhos dependentes</option>
                  </select>
                </div>
              </div>

            </div>

            {/* Diagnostic Outcome Box */}
            <div className="p-6 sm:p-10 bg-[#111827] text-white space-y-6">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-neutral-800 pb-4">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#C5A059] block">
                    DIAGNÓSTICO JURÍDICO ESTIMADO
                  </span>
                  <h3 className="font-serif text-2xl font-semibold text-white mt-1">
                    {simResult.title}
                  </h3>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C5A059]/20 border border-[#C5A059]/40 text-[#C5A059] text-xs font-semibold w-fit">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{simResult.urgency}</span>
                </div>
              </div>

              <p className="text-sm text-neutral-300 font-light leading-relaxed">
                {simResult.description}
              </p>

              <div className="p-4 rounded-xl bg-neutral-900/90 border border-neutral-800 space-y-2 text-xs">
                <div className="flex items-center gap-2 text-[#C5A059] font-mono">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Base Legal: {simResult.cpcRef}</span>
                </div>
                <p className="text-neutral-300">
                  <strong className="text-white">Próximo Passo Estratégico:</strong> {simResult.recommendedAction}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <button
                  onClick={handleSimWhatsApp}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#C5A059] hover:bg-[#d4af37] text-[#111827] font-semibold text-xs uppercase tracking-wider rounded transition-all shadow-lg text-center"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Enviar Diagnóstico para Análise da Dra. Letícia</span>
                </button>

                <button
                  onClick={() => onNavigate('/contato')}
                  className="px-6 py-4 bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-semibold uppercase tracking-wider rounded border border-neutral-700 transition-colors text-center"
                >
                  <span>Formulário de Atendimento</span>
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* The 30% Myth & Local SEO Reality Section */}
      <section className="py-20 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-wider text-[#C5A059] font-semibold block">
                Direito sem Mitos · Fórum de Caxias do Sul
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#111827] font-medium tracking-tight">
                "A pensão alimentícia é sempre 30% do salário?" Entenda como a Justiça realmente decide
              </h2>
              <p className="text-neutral-700 font-light leading-relaxed text-sm sm:text-base">
                Esse é um dos mitos mais difundidos no Direito de Família. <strong>A legislação brasileira não estipula qualquer percentual tabelado de 30%.</strong> Nas Varas de Família de Caxias do Sul e em toda a jurisprudência do Tribunal de Justiça do Rio Grande do Sul (TJ-RS), a pensão é dosada através do <strong>Trinômio Fundamental</strong>:
              </p>

              <div className="space-y-4 pt-2">
                <div className="p-4 rounded-xl bg-[#F9FAFB] border border-neutral-200 flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#C5A059]/10 text-[#C5A059] flex items-center justify-center font-bold text-sm shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-[#111827]">Necessidade Real do Alimentado</h4>
                    <p className="text-xs text-neutral-600 mt-0.5">
                      Soma dos custos reais da criança com habitação, alimentação, escola, materiais, vestuário, plano de saúde, lazer e medicamentos.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#F9FAFB] border border-neutral-200 flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#C5A059]/10 text-[#C5A059] flex items-center justify-center font-bold text-sm shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-[#111827]">Possibilidade Financeira do Pagador</h4>
                    <p className="text-xs text-neutral-600 mt-0.5">
                      Apuração de rendimentos líquidos, faturamento empresarial, bens e padrão de vida real, resguardando o mínimo existencial do pagador.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#F9FAFB] border border-neutral-200 flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#C5A059]/10 text-[#C5A059] flex items-center justify-center font-bold text-sm shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-[#111827]">Proporcionalidade entre Pai e Mãe</h4>
                    <p className="text-xs text-neutral-600 mt-0.5">
                      Ambos os genitores possuem dever de sustento. Quem ganha mais deve contribuir em proporção maior para equilibrar os encargos.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            <div className="lg:col-span-6 bg-[#111827] text-white p-8 sm:p-10 rounded-2xl border border-neutral-800 shadow-xl space-y-6">
              
              <div className="border-b border-neutral-800 pb-4">
                <span className="text-xs font-mono text-[#C5A059] uppercase block mb-1">
                  INVESTIGAÇÃO PATRIMONIAL EM CAXIAS DO SUL
                </span>
                <h3 className="font-serif text-2xl font-semibold text-white">
                  O devedor alega que não tem dinheiro, mas ostenta nas redes sociais?
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                Muitos genitores autônomos ou empresários tentam camuflar renda declarando ganhos mínimos ou transferindo bens para terceiros. O Poder Judiciário aplica a <strong>Teoria da Aparência</strong>:
              </p>

              <div className="space-y-3 text-xs text-neutral-300">
                <div className="p-3 rounded-lg bg-neutral-900 border border-neutral-800 flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                  <span><strong>Provas de Padrão de Vida:</strong> Fotografias de viagens, veículos utilizados, moradia e festas nas redes sociais têm força probatória admitida pelo TJ-RS.</span>
                </div>
                <div className="p-3 rounded-lg bg-neutral-900 border border-neutral-800 flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                  <span><strong>Quebra de Sigilo Bancário & Fiscal:</strong> Requerimento judicial de extratos bancários, cartões de crédito e faturamento de empresas (SISBAJUD e CCS).</span>
                </div>
                <div className="p-3 rounded-lg bg-neutral-900 border border-neutral-800 flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                  <span><strong>Desconsideração da Personalidade Jurídica:</strong> Em caso de blindagem patrimonial através de empresas, alcançamos os bens da pessoa física.</span>
                </div>
              </div>

              <a
                href={getWhatsAppUrl('Olá, Dra. Letícia! Suspeito de ocultação de renda pelo devedor de pensão e gostaria de orientações sobre investigação patrimonial.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 bg-[#C5A059] hover:bg-[#d4af37] text-[#111827] font-semibold text-xs uppercase tracking-wider rounded transition-colors text-center"
              >
                <span>Analisar Meu Caso Sigilosamente</span>
                <ArrowRight className="w-4 h-4" />
              </a>

            </div>

          </div>

        </div>
      </section>

      {/* Step-by-Step Methodology */}
      <section className="py-20 bg-[#F9FAFB] border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-16">
            <span className="text-xs uppercase tracking-wider text-[#C5A059] font-semibold block mb-2">
              Condução Jurídica Estratégica
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#111827] font-medium tracking-tight">
              Como Conduzimos o seu Processo de Pensão
            </h2>
            <p className="mt-3 text-neutral-600 font-light text-base">
              Rigor técnico aliado à agilidade processual para que você tenha tranquilidade desde a primeira consulta até o cumprimento definitivo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="p-8 rounded-2xl bg-white border border-neutral-200 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#111827] text-[#C5A059] flex items-center justify-center font-mono font-bold text-lg">
                01
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#111827]">
                Diagnóstico & Levantamento de Provas
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
                Elaboramos a planilha detalhada de custos do filho (escola, saúde, moradia, alimentação) e apuramos evidências sobre a capacidade financeira do alimentante (holerites, empresas, bens ou padrão de vida).
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-neutral-200 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#111827] text-[#C5A059] flex items-center justify-center font-mono font-bold text-lg">
                02
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#111827]">
                Pedido Liminar de Urgência em Caxias
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
                Protocolamos a ação solicitando fixação imediata de alimentos provisórios em 48 a 72 horas. Havendo interesse das partes, intermediamos acordo equilibrado para homologação rápida pelo juiz.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-neutral-200 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#111827] text-[#C5A059] flex items-center justify-center font-mono font-bold text-lg">
                03
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#111827]">
                Cumprimento e Execução sem Trégua
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
                Expedimos ofício para desconto em folha ou abertura de conta judicial. Em caso de qualquer atraso futuro, deflagramos a execução sob rito de prisão imediatamente, sem deixar a dívida prescrever.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Required Documents Checklist */}
      <section className="py-20 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <span className="text-xs uppercase tracking-wider text-[#C5A059] font-semibold block mb-2">
              Praticidade & Organização
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#111827] font-medium tracking-tight">
              Documentos Recomendados para Iniciar a Ação
            </h2>
            <p className="mt-3 text-neutral-600 font-light text-base">
              Você não precisa ter todos os papéis em mãos no primeiro contato. Auxiliaremos a solicitar as certidões faltantes durante a consulta inicial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="p-6 sm:p-8 rounded-2xl bg-[#F9FAFB] border border-neutral-200 space-y-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-[#111827]">
                <FileText className="w-5 h-5 text-[#C5A059]" />
                <span>Para quem precisa Fixar ou Pedir Pensão:</span>
              </div>
              <ul className="space-y-2.5 text-xs text-neutral-700">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] mt-1.5 shrink-0" />
                  <span>Certidão de nascimento do filho menor (ou certidão de casamento/união estável)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] mt-1.5 shrink-0" />
                  <span>Documento de identificação (RG ou CNH) e CPF do genitor responsável</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] mt-1.5 shrink-0" />
                  <span>Comprovante de residência atualizado em Caxias do Sul ou região</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] mt-1.5 shrink-0" />
                  <span>Comprovantes de despesas regulares (mensalidade escolar, plano de saúde, recibos de farmácia, alimentação, aluguel)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] mt-1.5 shrink-0" />
                  <span>Dados bancários do titular para crédito dos depósitos mensais</span>
                </li>
              </ul>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-[#F9FAFB] border border-neutral-200 space-y-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-[#111827]">
                <FileText className="w-5 h-5 text-[#C5A059]" />
                <span>Para quem precisa Cobrar Atrasados ou Revisar:</span>
              </div>
              <ul className="space-y-2.5 text-xs text-neutral-700">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] mt-1.5 shrink-0" />
                  <span>Cópia da sentença ou acordo judicial anterior que fixou a pensão alimentícia</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] mt-1.5 shrink-0" />
                  <span>Extratos da conta bancária demonstrando a ausência de depósitos (para execução)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] mt-1.5 shrink-0" />
                  <span>Comprovantes de alteração financeira (demissão, redução de holerite ou aumento de custos médicos)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] mt-1.5 shrink-0" />
                  <span>Indícios de padrão de vida ou atividade profissional do devedor (se autônomo)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] mt-1.5 shrink-0" />
                  <span>Para exoneração: comprovante de conclusão de estudos ou certidão de maioridade e casamento do filho</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* Local FAQ Section */}
      <section className="py-20 bg-[#F9FAFB] border-b border-neutral-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-wider text-[#C5A059] font-semibold block mb-2">
              Tire Suas Dúvidas
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#111827] font-medium tracking-tight">
              Perguntas Frequentes sobre Pensão Alimentícia em Caxias do Sul
            </h2>
            <p className="mt-3 text-neutral-600 font-light text-sm sm:text-base">
              Respostas diretas e esclarecedoras para as dúvidas mais comuns dos nossos clientes.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'Quanto tempo demora para a pensão começar a ser paga após ingressar com a ação?',
                a: 'Ao ingressar com a Ação de Alimentos na Vara de Família de Caxias do Sul, solicitamos Alimentos Provisórios em caráter de urgência. O juiz costuma analisar e arbitrar esse valor liminar nos primeiros dias (geralmente entre 48 a 72 horas), expedindo ofício imediato para a empresa empregadora realizar o desconto em folha ou intimando o pagador.'
              },
              {
                q: 'A pensão incide sobre 13º salário, férias e participação nos lucros (PLR)?',
                a: 'Sim! De acordo com a jurisprudência dominante do Superior Tribunal de Justiça (STJ), quando a pensão é fixada em percentual sobre os rendimentos líquidos do alimentante, ela incide automaticamente sobre o 13º salário e o terço constitucional de férias, por terem caráter salarial. A PLR também pode ser incluída conforme a redação do acordo ou sentença.'
              },
              {
                q: 'E se o devedor morar em outra cidade ou estado, é possível cobrar?',
                a: 'Sim. A regra do Código de Processo Civil estabelece o foro de domicílio do alimentado (da criança) como competente. Portanto, se você e seu filho residem em Caxias do Sul, a ação tramitará no Fórum de Caxias do Sul, e o devedor será intimado onde quer que resida (mesmo em outro estado) através de carta precatória ou intimação eletrônica autorizada pelo CNJ.'
              },
              {
                q: 'O que acontece se o devedor de pensão for preso civilmente?',
                a: 'A prisão civil dura de 1 a 3 meses em regime fechado, separado dos presos comuns. É importante esclarecer: cumprir a prisão NÃO perdoa a dívida! O débito continua existindo integralmente, acrescido de juros e correção monetária, e o devedor continuará sujeito à penhora de todos os seus bens até que pague o valor total.'
              },
              {
                q: 'Se os pais tiverem guarda compartilhada, ainda existe dever de pagar pensão?',
                a: 'Sim! Guarda compartilhada significa divisão conjunta das decisões da vida da criança (educação, saúde, religião), mas NÃO extingue o dever de pagar pensão. Se houver desnível econômico entre o pai e a mãe, aquele com maior renda continuará pagando alimentos para equilibrar a manutenção do filho.'
              },
              {
                q: 'Se o pai ou mãe não puder pagar nada, os avós podem ser acionados?',
                a: 'Sim. Trata-se da obrigação alimentar avoenga (art. 1.698 do Código Civil). Tem natureza subsidiária e complementar: se ficar comprovado que os genitores não possuem absolutamente nenhuma capacidade financeira de arcar com o básico, os avós paternos e maternos podem ser chamados a complementar o sustento do neto.'
              }
            ].map((faq, fIdx) => (
              <div key={fIdx} className="p-6 rounded-xl bg-white border border-neutral-200 shadow-sm">
                <h3 className="font-serif text-lg font-semibold text-[#111827] mb-2 flex items-start gap-2">
                  <span className="text-[#C5A059] font-mono text-sm mt-0.5">Q.</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-light pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Local Office & Direct Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-[#111827] text-white rounded-3xl p-8 sm:p-14 border border-neutral-800 shadow-2xl relative overflow-hidden">
            <div className="max-w-3xl space-y-6 relative z-10">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C5A059]/20 text-[#C5A059] text-xs font-mono font-semibold">
                <MapPin className="w-3.5 h-3.5" />
                <span>SEDE EM CAXIAS DO SUL · ATENDIMENTO COM HORA MARCADA</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white leading-tight">
                Garanta o Sustento Digno e a Paz Familiar que Você Merece
              </h2>

              <p className="text-base text-neutral-300 font-light leading-relaxed">
                Cada semana sem formalização ou cobrança é um prejuízo que recai sobre quem menos tem culpa: seus filhos. Agende um diagnóstico reservado com a Dra. Letícia Possenti na Rua Os Dezoito do Forte ou através de videoconferência segura para todo o Brasil.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href={getWhatsAppUrl('Olá, Dra. Letícia Possenti! Gostaria de agendar uma consulta sobre Pensão Alimentícia em Caxias do Sul.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#C5A059] hover:bg-[#d4af37] text-[#111827] font-semibold text-xs uppercase tracking-wider rounded transition-all shadow-xl text-center"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Agendar Consulta com Dra. Letícia</span>
                </a>

                <a
                  href={`tel:+5554996534554`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold uppercase tracking-wider rounded border border-white/20 transition-colors text-center"
                >
                  <Phone className="w-4 h-4 text-[#C5A059]" />
                  <span>Ligar: {WHATSAPP_PHONE_DISPLAY}</span>
                </a>
              </div>

              <div className="pt-6 border-t border-neutral-800 flex flex-wrap items-center gap-6 text-xs text-neutral-400">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
                  <span>Sigilo Absoluto Garantido pelo Estatuto da OAB</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#C5A059]" />
                  <span>{OFFICE_ADDRESS}</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
