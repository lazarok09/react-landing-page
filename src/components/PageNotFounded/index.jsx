import { GridContent } from './../GridContent/index';

export const PageNotFounded = () => {
  return (
    <GridContent
      title="Error 404"
      html={`<p>A página que você busca não foi encontrada, <a href="/">clique para voltar</a></p>`}
    />
  );
};
