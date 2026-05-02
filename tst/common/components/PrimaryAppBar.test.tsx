import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import PrimaryAppBar from '../../../src/common/components/PrimaryAppBar';

function renderAppBar() {
  return render(
    <MemoryRouter>
      <PrimaryAppBar />
    </MemoryRouter>,
  );
}

describe('PrimaryAppBar', () => {
  describe('rendering', () => {
    it('renders the home icon button', () => {
      renderAppBar();
      // The HomeIcon renders inside an IconButton; look for the link wrapping it
      const homeLink = screen.getByRole('link');
      expect(homeLink).toHaveAttribute('href', '/');
    });

    it('renders the email address', () => {
      renderAppBar();
      expect(screen.getByText('Geoffarroyo@gmail.com')).toBeInTheDocument();
    });

    it('renders the menu icon button', () => {
      renderAppBar();
      expect(screen.getByRole('button', { name: /menu/i })).toBeInTheDocument();
    });
  });
});
