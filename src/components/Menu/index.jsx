import P from 'prop-types';
import * as Styled from './styles';
import { SectionContainer } from './../SectionContainer/index';
import { LogoLink } from './../LogoLink/index';
import { NavLinks } from './../NavLinks/index';

export const Menu = ({ links = [], logoData }) => {
  return (
    <Styled.Container>
      <SectionContainer>
        <Styled.MenuContainer>
          <LogoLink {...logoData} />
          <NavLinks links={links} />
        </Styled.MenuContainer>
      </SectionContainer>
    </Styled.Container>
  );
};

Menu.propTypes = {
  ...NavLinks.propTypes,
  logoData: P.shape(LogoLink.propTypes).isRequired,
};
