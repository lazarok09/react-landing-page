import { useEffect, useState } from 'react';
import { Base } from '../Base';
import mockBase from '../Base/mock';
import { mapData } from './../../api/map-data';

function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const load = async (url) => {
      const data = await fetch(url);
      const response = await data.json();
      const pageData = mapData(response);
      setData(pageData[0]);
    };
    load('http://localhost:1337/pages/?slug=landing-page');
  }, []);

  if (data === undefined) {
    return <h1>Página não encontrada</h1>;
  }
  if (data && !data.slug) {
    return <h1>Carregando</h1>;
  }
  return <Base {...mockBase} />;
}

export default Home;
