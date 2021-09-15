import {
  mapSectionContent,
  mapSections,
  mapSectionTwoColumns,
} from './map-sections';
describe('map sections', () => {
  it('should map predefined value if no data', () => {
    const data = mapSections();
    expect(data).toEqual([]);
  });

  it('should map section two columns', () => {
    const data = mapSectionTwoColumns();
    expect(data.component).toBe('');
    expect(data.title).toBe('');
    expect(data.text).toBe('');
    expect(data.srcImage).toBe('');
    expect(data.background).toBe(false);
    expect(data.sectionId).toBe('');
  });
  it('should map section two columns with data', () => {
    const data = mapSectionTwoColumns({
      __component: 'section.section-two-columns',
      description:
        'Na computação, o desenvolvimento de software é o ato de elaborar e  implementar um sistema computacional, isto é, transformar a            necessidade de um utilizador ou de um mercado em um produto de software[1]. Em outras palavras, é através da programação dar\nvida a uma ideia.',
      _id: '612e3aee172d35311c85277f',
      title: 'Desenvolver Software é a nova onda do imperador',
      metadata: {
        background: true,
        _id: '612e3aee172d35311c852785',
        section_id: 'home',
        name: 'Home',
        __v: 0,
        id: '612e3aee172d35311c852785',
      },
      __v: 1,
      image: {
        _id: '612e3510172d35311c852776',
        name: 'javascript.svg',
        alternativeText:
          'Desenho de pessoas segurando logo do CSS, JavaScript e HTML',
        caption: 'Desenho de pessoas segurando logo do CSS, JavaScript e HTML',
        hash: 'javascript_efaaf593b4',
        ext: '.svg',
        mime: 'image/svg+xml',
        size: 30.31,
        url: 'https://res.cloudinary.com/lazarok09/image/upload/v1630418192/javascript_efaaf593b4.svg',
        provider_metadata: {
          public_id: 'javascript_efaaf593b4',
          resource_type: 'image',
        },
        provider: 'cloudinary',
        width: 1030,
        height: 730,
        related: ['612e3aee172d35311c85277f'],
        createdAt: '2021-08-31T13:56:32.992Z',
        updatedAt: '2021-08-31T14:21:36.186Z',
        __v: 0,
        id: '612e3510172d35311c852776',
      },
    });
    expect(data.component).toBe('section.section-two-columns');
    expect(data.title).toBe('Desenvolver Software é a nova onda do imperador');
    expect(data.text).toBe(
      'Na computação, o desenvolvimento de software é o ato de elaborar e  implementar um sistema computacional, isto é, transformar a            necessidade de um utilizador ou de um mercado em um produto de software[1]. Em outras palavras, é através da programação dar\nvida a uma ideia.',
    );
    expect(data.srcImage).toBe(
      'https://res.cloudinary.com/lazarok09/image/upload/v1630418192/javascript_efaaf593b4.svg',
    );
    expect(data.background).toBe(true);
    expect(data.sectionId).toBe('home');
  });

  it('should map section content with data', () => {
    const section = mapSectionContent();
    expect(section.component).toBe('');
    expect(section.title).toBe('');
    expect(section.html).toBe('');
    expect(section.background).toBe(false);
    expect(section.sectionId).toBe('');
  });
  it('should map section content with no data', () => {
    const section = mapSectionContent({
      __component: 'section.section-content',
      _id: '612e3aee172d35311c852780',
      title: 'TOP 3 áreas',
      content:
        '<p>Front End é o desenvolvedor de interface, aquilo que o usuário final enxerga no dia a dia. Ele pode desenvolver interfaces para internet (web) ou para dispositivos móveis (mobile).</p><p>Back End, como o próprio nome sugere, vem da ideia do que tem por trás de uma aplicação.</p><p>Desenvolvedor Mobile é a pessoa com atividades ligadas a estruturação e criação de interfaces, aplicativos e dashboards para dispositivos móveis.</p>',
      metadata: {
        background: false,
        _id: '612e3aee172d35311c852786',
        name: 'Intro',
        section_id: 'intro',
        __v: 0,
        id: '612e3aee172d35311c852786',
      },
      __v: 1,
      id: '612e3aee172d35311c852780',
    });

    expect(section.component).toBe('section.section-content');
    expect(section.title).toBe('TOP 3 áreas');
    expect(section.html).toBe(
      '<p>Front End é o desenvolvedor de interface, aquilo que o usuário final enxerga no dia a dia. Ele pode desenvolver interfaces para internet (web) ou para dispositivos móveis (mobile).</p><p>Back End, como o próprio nome sugere, vem da ideia do que tem por trás de uma aplicação.</p><p>Desenvolvedor Mobile é a pessoa com atividades ligadas a estruturação e criação de interfaces, aplicativos e dashboards para dispositivos móveis.</p>',
    );
    expect(section.background).toBe(false);
    expect(section.sectionId).toBe('intro');
  });
});
