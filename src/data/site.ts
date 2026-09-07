const base = import.meta.env.BASE_URL.replace(/\/$/, '');
export const route = (path: string) => `${base}${path === '/' ? '/' : path}`;

export const site = {
  name: 'PSOE O Saviñao',
  description: 'Propostas concretas para mellorar a vida da veciñanza, das parroquias e do noso rural.',
  navigation: [
    { label: 'Propostas', href: route('/propostas') },
    { label: 'Parroquias', href: route('/parroquias') },
    { label: 'Equipo', href: route('/equipo') },
    { label: 'Actualidade', href: route('/actualidade') },
    { label: 'Contacto', href: route('/contacto') },
  ],
};
