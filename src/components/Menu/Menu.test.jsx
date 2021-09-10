import { screen, fireEvent } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Menu } from '.';
import linksMock from '../NavLinks/mock';
import theme from '../../styles/theme';
const logoData = {
  text: 'Logo',
  link: '#target',
};
describe('<Menu />', () => {
  it('should render Logo and Main Menu Nav', () => {
    const { container } = renderTheme(
      <Menu links={linksMock} logoData={logoData}>
        Children
      </Menu>,
    );
    expect(screen.getByRole('heading', { name: 'Logo' })).toBeInTheDocument();
    expect(
      screen.getByRole('navigation', { name: 'Main menu' }),
    ).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
  it('should render menu mobile and button for open and close the menu', () => {
    const { container } = renderTheme(
      <Menu links={linksMock} logoData={logoData}>
        Children
      </Menu>,
    );
    const button = screen.getByLabelText('Open/Close menu');
    // capture the next element, brother of button
    const menuContainer = button.nextSibling;

    expect(button).toHaveStyleRule('display', 'none');
    // check the media querie rule
    expect(button).toHaveStyleRule('display', 'flex', {
      media: theme.media.lteMedium,
    });

    expect(menuContainer).toHaveStyleRule('opacity', '0', {
      media: theme.media.lteMedium,
    });
    // if the menu is on the screen, the close menu have to be showed
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument();

    // testing if changes the style rule when button get click
    fireEvent.click(button);
    expect(menuContainer).toHaveStyleRule('opacity', '1', {
      media: theme.media.lteMedium,
    });
    expect(screen.getByLabelText('Close menu')).toBeInTheDocument();
    // testing if changes the style rule when menu get click by second time
    fireEvent.click(menuContainer);
    expect(menuContainer).toHaveStyleRule('opacity', '0', {
      media: theme.media.lteMedium,
    });
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument();
  });

  it('should not render links', () => {
    const { container } = renderTheme(<Menu logoData={logoData} />);
    expect(
      screen.getByRole('navigation', { name: 'Main menu' }).firstChild,
    ).not.toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});
