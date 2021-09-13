import P from 'prop-types';
import * as Styled from './styles';
import { Menu } from './../../components/Menu';
import { Footer } from './../../components/Footer';
import { GoToTop } from './../../components/GoToTop/index';

export const Base = ({ links, logoData, footerHTML, children }) => {
  return (
    <>
      <Menu links={links} logoData={logoData} />
      <Styled.Container>
        {children}
        <Footer footerHtml={footerHTML} />
      </Styled.Container>
      <GoToTop />
    </>
  );
};

Base.propTypes = {
  children: P.node.isRequired,
  ...Menu.propTypes,
  footerHTML: P.string.isRequired,
};
