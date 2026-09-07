import type { Proposal } from './proposals';
import { proposals } from './proposals';

export type Parish = {
  id: string;
  slug: string;
  name: string;
  summary: string;
  areas: string[];
  priorities: { number: string; title: string; text: string }[];
  proposalIds: string[];
  demo?: boolean;
};

export const parishes: Parish[] = [
  {
    id: 'escairon', slug: 'escairon', name: 'Escairón', demo: true,
    summary: 'Unha folla de ruta clara para mellorar servizos, espazos públicos e calidade de vida.',
    areas: ['Estradas e accesos', 'Limpeza e mantemento', 'Espazos públicos', 'Servizos para a veciñanza'],
    priorities: [
      { number: '01', title: 'Mellora de camiños e accesos', text: 'Actuar nas vías e accesos da parroquia para unha mobilidade máis segura e cómoda.' },
      { number: '02', title: 'Coidado dos espazos públicos', text: 'Manter e mellorar prazas, contornos e zonas de uso común.' },
      { number: '03', title: 'Máis servizos e atención á veciñanza', text: 'Impulsar servizos útiles e unha atención máis próxima ás necesidades da xente.' },
    ],
    proposalIds: ['servizos-01', 'autonomos-01', 'vivenda-01'],
  },
  {
    id: 'currelos', slug: 'currelos', name: 'Currelos', demo: true,
    summary: 'Unha parroquia con identidade, actividade e futuro compartido.',
    areas: ['Rural e produción', 'Servizos', 'Espazos públicos'],
    priorities: [
      { number: '01', title: 'Apoiar a actividade rural', text: 'Dar visibilidade e acompañar as iniciativas do territorio.' },
      { number: '02', title: 'Mellorar a conexión', text: 'Facilitar os desprazamentos e o acceso á información.' },
      { number: '03', title: 'Coidar os espazos comúns', text: 'Manter lugares de encontro para a veciñanza.' },
    ], proposalIds: ['rural-vivo', 'vivenda-xove', 'servizos-publicos-proximos'],
  },
  {
    id: 'diomondi', slug: 'diomondi', name: 'Diomondi', demo: true,
    summary: 'Un lugar para vivir, participar e conservar o que nos fai únicos.',
    areas: ['Patrimonio e cultura', 'Rural e produción', 'Servizos'],
    priorities: [
      { number: '01', title: 'Poñer en valor o patrimonio', text: 'Coidar e compartir os espazos que forman parte da nosa identidade.' },
      { number: '02', title: 'Apoiar o rural', text: 'Facilitar novas oportunidades para as persoas produtoras.' },
      { number: '03', title: 'Máis participación', text: 'Abrir canles sinxelas para decidir sobre o común.' },
    ], proposalIds: ['rural-vivo', 'autonomos-01', 'servizos-publicos-proximos'],
  },
];

export const getParish = (slug: string) => parishes.find((parish) => parish.slug === slug);
export const getParishProposals = (parish: Parish): Proposal[] => parish.proposalIds.map((id) => proposals.find((proposal) => proposal.id === id || proposal.slug === id)).filter(Boolean) as Proposal[];
