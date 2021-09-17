import P from 'prop-types';
import * as Styled from './styles';
import { SectionBackground } from './../SectionBackground/index';
import { Heading } from './../Heading/index';
import { TextComponent } from './../TextComponent/index';

export const GridTwoColumns = ({
  title,
  text,
  srcImage,
  background = false,
  sectionId = '',
}) => {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Styled.Container>
        <Styled.TextContainer>
          <Heading colorDark={!background} uppercase as="h2">
            {title}
          </Heading>
          <TextComponent>{text}</TextComponent>
        </Styled.TextContainer>
        <Styled.ImageContainer>
          <Styled.Image src={srcImage} alt={title} />
        </Styled.ImageContainer>
      </Styled.Container>
    </SectionBackground>
  );
};

GridTwoColumns.propTypes = {
  title: P.string.isRequired,
  text: P.string.isRequired,
  srcImage: P.string.isRequired,
  background: P.bool,
  sectionId: P.string,
};
