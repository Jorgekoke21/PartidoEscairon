export const categories = [
  { slug: 'maiores', name: 'Maiores e pensionistas', chip: 'Maiores' },
  { slug: 'autonomos', name: 'Autónomos e comercio', chip: 'Autónomos' },
  { slug: 'vivenda', name: 'Vivenda', chip: 'Vivenda' },
  { slug: 'mocidade', name: 'Mocidade', chip: 'Mocidade' },
  { slug: 'ganderia', name: 'Gandería e sector primario', chip: 'Gandería' },
  { slug: 'familias', name: 'Familias', chip: 'Familias' },
  { slug: 'parroquias', name: 'Parroquias', chip: 'Parroquias' },
  { slug: 'servizos', name: 'Servizos públicos', chip: 'Servizos públicos' },
  { slug: 'emprego', name: 'Emprego', chip: 'Emprego' },
  { slug: 'cultura', name: 'Cultura e deporte', chip: 'Cultura e deporte' },
] as const;

export type CategorySlug = (typeof categories)[number]['slug'];
