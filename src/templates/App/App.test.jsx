import { screen } from '@testing-library/react';
import App from './App';
import { renderTheme } from '../../styles/render-theme';
import theme from '../../styles/theme';

describe('<Home />', () => {
  it('should render the App with theme provider', () => {
    renderTheme(<App />);
  });
});
