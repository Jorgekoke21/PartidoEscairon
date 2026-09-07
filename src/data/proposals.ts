import type { CategorySlug } from './categories';

export type Proposal = {
  id: string;
  slug: string;
  title: string;
  category: CategorySlug;
  summary: string;
  problem: string;
  proposal: string;
  implementation: string;
  impact: string;
  keywords: string[];
  parishes: string[];
  featured?: boolean;
  order: number;
};

export const proposals: Proposal[] = [
  {
    id: 'maiores-01', slug: 'acompanamento-maiores', title: 'Acompañamento e atención ás persoas maiores', category: 'maiores',
    summary: 'Unha atención próxima para que ninguén quede atrás.', problem: 'Moitas persoas maiores viven soas ou afastadas dos principais servizos.',
    proposal: 'Reforzar a atención domiciliaria e crear espazos de encontro.', implementation: 'Coordinando recursos municipais e tecido asociativo.',
    impact: 'Máis autonomía, compañía e benestar na vida diaria.', keywords: ['maiores', 'coidados', 'veciñanza'], parishes: ['escairon'], featured: true, order: 1,
  },
  {
    id: 'maiores-02', slug: 'envellecemento-activo', title: 'Actividades para un envellecemento activo', category: 'maiores',
    summary: 'Propostas de lecer e participación adaptadas ás persoas maiores.', problem: 'Faltan actividades continuadas e accesibles para manterse activo.',
    proposal: 'Programar actividades de saúde, cultura e encontro.', implementation: 'A través dunha programación aberta e coordinada.', impact: 'Máis participación e redes de apoio.', keywords: ['maiores', 'cultura', 'saúde'], parishes: ['escairon'], order: 2,
  },
  {
    id: 'autonomos-01', slug: 'comercio-local', title: 'Apoio ao comercio local', category: 'autonomos',
    summary: 'Un concello que facilita emprender, traballar e mercar aquí.', problem: 'Os pequenos negocios precisan acompañamento e visibilidade.',
    proposal: 'Facilitar información, promoción e colaboración entre negocios.', implementation: 'Creando canles de comunicación e campañas locais.', impact: 'Máis actividade e vida nos núcleos.', keywords: ['comercio', 'autónomos', 'negocio'], parishes: ['escairon', 'diomondi'], featured: true, order: 3,
  },
  {
    id: 'vivenda-01', slug: 'vivenda-xove', title: 'Máis vivenda para a mocidade', category: 'vivenda',
    summary: 'Impulsar o acceso á vivenda protexida e ao alugueiro.', problem: 'A mocidade atopa dificultades para quedar e facer proxecto de vida.',
    proposal: 'Mapear vivenda dispoñible e activar solucións de alugueiro.', implementation: 'Con información clara e colaboración coas persoas propietarias.', impact: 'Máis oportunidades para vivir no concello.', keywords: ['vivenda', 'mocidade', 'alugueiro'], parishes: ['escairon', 'currelos'], featured: true, order: 4,
  },
  {
    id: 'mocidade-01', slug: 'espazos-mocidade', title: 'Espazos e oportunidades para a mocidade', category: 'mocidade',
    summary: 'A mocidade tamén decide o futuro de O Saviñao.', problem: 'Faltan lugares e canles estables de participación xuvenil.',
    proposal: 'Crear unha programación e un espazo de encontro para a mocidade.', implementation: 'Escoitando as súas prioridades e colaborando cos centros.', impact: 'Máis participación, creatividade e arraigo.', keywords: ['mocidade', 'participación', 'espazos'], parishes: ['escairon'], order: 5,
  },
  {
    id: 'ganderia-01', slug: 'rural-vivo', title: 'Un rural vivo e con futuro', category: 'ganderia',
    summary: 'Coidar o territorio é coidar o noso modo de vida.', problem: 'O sector primario precisa apoio e relevo xeracional.',
    proposal: 'Acompañar proxectos e facilitar o acceso á información.', implementation: 'Poñendo en rede recursos, formación e persoas produtoras.', impact: 'Máis actividade e coidado do territorio.', keywords: ['rural', 'gandería', 'sector primario'], parishes: ['currelos', 'diomondi'], featured: true, order: 6,
  },
  {
    id: 'familias-01', slug: 'conciliacion', title: 'Máis apoio para conciliar', category: 'familias',
    summary: 'Servizos próximos para facer compatible a vida persoal e laboral.', problem: 'As familias precisan máis axuda para organizar o día a día.',
    proposal: 'Mellorar a información e coordinación dos servizos de apoio.', implementation: 'Reunindo recursos nunha guía útil e actualizada.', impact: 'Máis tempo e tranquilidade para as familias.', keywords: ['familias', 'conciliación', 'coidados'], parishes: ['escairon'], order: 7,
  },
  {
    id: 'servizos-01', slug: 'servizos-publicos-proximos', title: 'Servizos públicos máis próximos', category: 'servizos',
    summary: 'Información fácil e atención próxima para toda a veciñanza.', problem: 'Ás veces é difícil saber onde e como facer cada xestión.',
    proposal: 'Mellorar a atención, os horarios e a información municipal.', implementation: 'Con canles claras e comunicación accesible.', impact: 'Máis transparencia e menos barreiras.', keywords: ['servizos', 'atención', 'transparencia'], parishes: ['escairon', 'currelos', 'diomondi'], order: 8,
  },
];

export const getProposalsByCategory = (category: CategorySlug) => proposals.filter((item) => item.category === category);
export const getProposalCount = (category: CategorySlug) => getProposalsByCategory(category).length;
