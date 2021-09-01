import { screen } from '@testing-library/react';
import App from './App';
import { renderTheme } from '../../styles/render-theme';
import theme from '../../styles/theme';

it('should render the App with theme provider', () => {
  const { debug } = renderTheme(<App />);
  const headingContainer = screen.getByRole('heading', {
    name: 'Hello World',
  }).parentElement;
  expect(headingContainer).toHaveStyle(`
  background: ${theme.colors.darkBg}
  `);
  expect(headingContainer).toHaveStyleRule('background', '#0A1128');
  expect(headingContainer).toMatchSnapshot();
});
