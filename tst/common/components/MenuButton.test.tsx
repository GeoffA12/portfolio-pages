import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import MenuButton from '../../../src/common/components/MenuButton';

function renderMenuButton() {
  const user = userEvent.setup();
  render(
    <MemoryRouter>
      <div>
        <MenuButton />
        {/* Provides an outside element to click away to */}
        <p>Outside area</p>
      </div>
    </MemoryRouter>,
  );
  return { user };
}

describe('MenuButton', () => {
  describe('rendering', () => {
    it('renders the menu icon button', () => {
      renderMenuButton();
      expect(screen.getByRole('button', { name: /menu/i })).toBeInTheDocument();
    });

    it('does not show the navigation menu by default', () => {
      renderMenuButton();
      expect(screen.queryByText('About Me')).not.toBeInTheDocument();
      expect(screen.queryByText('Experience')).not.toBeInTheDocument();
    });
  });

  describe('opening the menu', () => {
    it('shows "About Me" and "Experience" items after clicking the menu button', async () => {
      const { user } = renderMenuButton();
      await user.click(screen.getByRole('button', { name: /menu/i }));
      expect(screen.getByText('About Me')).toBeInTheDocument();
      expect(screen.getByText('Experience')).toBeInTheDocument();
    });

    it('closes the menu after clicking the menu button a second time', async () => {
      const { user } = renderMenuButton();
      const menuBtn = screen.getByRole('button', { name: /menu/i });
      await user.click(menuBtn);
      await user.click(menuBtn);
      expect(screen.queryByText('About Me')).not.toBeInTheDocument();
    });
  });

  describe('click-away behaviour', () => {
    it('closes the menu when clicking outside the menu button', async () => {
      const { user } = renderMenuButton();
      await user.click(screen.getByRole('button', { name: /menu/i }));
      expect(screen.getByText('About Me')).toBeInTheDocument();
      // Click an element that is not the anchor button to trigger ClickAwayListener
      await user.click(screen.getByText('Outside area'));
      await waitFor(() => {
        expect(screen.queryByText('About Me')).not.toBeInTheDocument();
      });
    });
  });

  describe('navigation', () => {
    it('closes the menu after clicking "About Me"', async () => {
      const { user } = renderMenuButton();
      await user.click(screen.getByRole('button', { name: /menu/i }));
      await user.click(screen.getByText('About Me'));
      await waitFor(() => {
        expect(screen.queryByText('About Me')).not.toBeInTheDocument();
      });
    });

    it('closes the menu after clicking "Experience"', async () => {
      const { user } = renderMenuButton();
      await user.click(screen.getByRole('button', { name: /menu/i }));
      await user.click(screen.getByText('Experience'));
      await waitFor(() => {
        expect(screen.queryByText('Experience')).not.toBeInTheDocument();
      });
    });
  });

  describe('keyboard interaction', () => {
    it('closes the menu when Tab is pressed while the menu is open', async () => {
      const { user } = renderMenuButton();
      await user.click(screen.getByRole('button', { name: /menu/i }));
      expect(screen.getByText('About Me')).toBeInTheDocument();
      await user.keyboard('{Tab}');
      await waitFor(() => {
        expect(screen.queryByText('About Me')).not.toBeInTheDocument();
      });
    });
  });
});
