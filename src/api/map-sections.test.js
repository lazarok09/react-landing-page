import { mapSections, mapSectionTwoColumns } from './map-sections';
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
});
