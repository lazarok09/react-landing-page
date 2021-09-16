import { useEffect, useState } from 'react';
import { Base } from '../Base';
import mockBase from '../Base/mock';
import { mapData } from './../../api/map-data';
import { PageNotFounded } from './../../components/PageNotFounded/index';

function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const load = async (url) => {
      try {
        const data = await fetch(url);
        const response = await data.json();
        const pageData = mapData(response);
        setData(pageData[0]);
      } catch (e) {
        setData(undefined);
      }
    };
    load('http://localhst:1337/pages/?slug=landing-page');
  }, []);

  if (data === undefined) {
    return <PageNotFounded />;
  }
  if (data && !data.slug) {
    return <h1>Carregando</h1>;
  }
  return <Base {...mockBase} />;
}

export default Home;
