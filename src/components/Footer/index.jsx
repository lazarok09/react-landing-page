import P from 'prop-types';
import * as Styled from './styles';
import { TextComponent } from './../TextComponent/index';
import { SectionContainer } from './../SectionContainer/index';

export const Footer = ({ footerHtml }) => {
  return (
    <Styled.Container>
      <SectionContainer>
        <TextComponent>{footerHtml}</TextComponent>
      </SectionContainer>
    </Styled.Container>
  );
};

Footer.propTypes = {
  footerHtml: P.string.isRequired,
};
