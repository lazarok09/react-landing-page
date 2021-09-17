import P from 'prop-types';
import * as Styled from './styles';
import { SectionBackground } from './../SectionBackground/index';
import { Heading } from './../Heading/index';
import { TextComponent } from './../TextComponent/index';

export const GridImage = ({
  title,
  description,
  grid,
  background = false,
  sectionId = '',
}) => {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Styled.Container>
        <Heading size="huge" uppercase colorDark={!background} as="h2">
          {title}
        </Heading>
        <TextComponent>{description}</TextComponent>
        <Styled.Grid>
          {grid.map((el) => (
            <Styled.GridElement key={`${el.altText}${el.srcImage}`}>
              <Styled.Image src={el.srcImage} alt={el.altText} />
            </Styled.GridElement>
          ))}
        </Styled.Grid>
      </Styled.Container>
    </SectionBackground>
  );
};

GridImage.propTypes = {
  background: P.bool,
  title: P.string.isRequired,
  description: P.string.isRequired,
  sectionId: P.string,
  grid: P.arrayOf(
    P.shape({
      altText: P.string.isRequired,
      srcImage: P.string.isRequired,
    }),
  ).isRequired,
};
