import Home from './Home';
import { renderTheme } from '../../styles/render-theme';
import * as Styled from './styles';
describe('<Home />', () => {
  it('should render Home', () => {
    const { container } = renderTheme(
      <Styled.Wrapper>
        <Home />
      </Styled.Wrapper>,
    );
    expect(container).toMatchSnapshot();
  });
});
