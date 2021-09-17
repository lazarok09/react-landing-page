import { PageNotFounded } from './index';
import { screen } from '@testing-library/react';
import { renderTheme } from './../../styles/render-theme';
describe('<PageNotFounded />', () => {
  it('should render PageNotFounded correctly', () => {
    const { container } = renderTheme(<PageNotFounded />);
    const heading = screen.getByRole('heading', { name: /error 404/i });
    const link = screen.getByRole('link', { name: /clique para voltar/i });
    expect(heading).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/');
    expect(container).toMatchSnapshot();
  });
});
