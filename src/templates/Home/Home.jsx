import { useEffect, useState } from 'react';
import { Base } from '../Base';
import { mapData } from './../../api/map-data';
import { Loading } from './../Loading/index';
import { PageNotFounded } from './../../components/PageNotFounded/index';
import { GridTwoColumn } from './../../components/GridTwoColumn/index';
import { GridContent } from './../../components/GridContent/index';
import { GridText } from './../../components/GridText/index';
import { GridImage } from './../../components/GridImage/index';

function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const load = async (url) => {
      try {
        const data = await fetch(url);
        const response = await data.json();
        const pageData = mapData(response);

        await new Promise((resolve) => {
          setData(pageData[0]);
          resolve();
        });
      } catch (e) {
        setData(undefined);
      }
    };
    load('http://localhost:1337/pages/?slug=landing-page');
  }, []);

  if (data === undefined) {
    return <PageNotFounded />;
  }
  if (data && !data.slug) {
    return <Loading />;
  }
  const { footerHtml, menu, sections, slug } = data;
  const { link, links, srcImage, text } = menu;

  return (
    <Base
      links={links}
      footerHTML={footerHtml}
      logoData={{ text, link, srcImage }}
    >
      {sections.map((sections, index) => {
        const { component } = sections;
        // home e por ultimo o networking
        if (component === 'section.section-two-columns') {
          const key = `${slug}-${index}`;
          return <GridTwoColumn key={key} {...sections} />;
        }
        // top 3 areas e salário logo depois de as 3 vertentes
        if (component === 'section.section-content') {
          const key = `${slug}-${index}`;
          return <GridContent key={key} {...sections} />;
        }
        // galeria
        if (component === 'section.section-grid-image') {
          const key = `${slug}-${index}`;
          return <GridImage key={key} {...sections} />;
        }
        //as 3 vertentes
        if (component === 'section.section-grid-text') {
          const key = `${slug}-${index}`;
          return <GridText key={key} {...sections} />;
        }
      })}
    </Base>
  );
}

export default Home;
