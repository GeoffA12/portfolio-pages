import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Landing from '../../../src/components/landing/Landing';

function renderLanding() {
  return render(
    <MemoryRouter>
      <Landing />
    </MemoryRouter>,
  );
}

// Helper: find an anchor by its exact href among all rendered links.
function getLinkByHref(href: string): HTMLElement {
  return screen
    .getAllByRole('link')
    .find((el) => el.getAttribute('href') === href) as HTMLElement;
}

describe('Landing', () => {
  describe('rendering', () => {
    it('renders the profile image with the correct alt text', () => {
      renderLanding();
      expect(screen.getByAltText('Geoff Arroyo Profile')).toBeInTheDocument();
    });

    it('renders the name and location overlay', () => {
      renderLanding();
      expect(screen.getByText('Geoff Arroyo')).toBeInTheDocument();
      expect(screen.getByText('Austin, TX')).toBeInTheDocument();
    });

    it('renders the Education section with university text', () => {
      renderLanding();
      expect(screen.getByText('Education:')).toBeInTheDocument();
      expect(
        screen.getByText("St. Edward's University Computer Science"),
      ).toBeInTheDocument();
    });

    it('renders the Experience section with both internship entries', () => {
      renderLanding();
      expect(screen.getByText('Experience:')).toBeInTheDocument();
      expect(screen.getByText('Amazon SDE Internship')).toBeInTheDocument();
      expect(
        screen.getByText('ESiMi UI/UX Design Internship'),
      ).toBeInTheDocument();
    });
  });

  describe('social links', () => {
    // The <a> elements contain only SVG icons (no text), so they have no
    // accessible name. We locate them by href instead of by role+name.

    it('renders the GitHub link with the correct href and security attributes', () => {
      renderLanding();
      const githubLink = getLinkByHref('https://github.com/GeoffA12');
      expect(githubLink).toBeInTheDocument();
      expect(githubLink).toHaveAttribute('target', '_blank');
      expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer');
    });

    it('renders the LinkedIn link with the correct href', () => {
      renderLanding();
      const linkedinLink = getLinkByHref(
        'https://www.linkedin.com/in/geoff-arroyo-4159ab1b1/',
      );
      expect(linkedinLink).toBeInTheDocument();
      expect(linkedinLink).toHaveAttribute('target', '_blank');
    });

    it('renders the Facebook link with the correct href', () => {
      renderLanding();
      const facebookLink = getLinkByHref(
        'https://www.facebook.com/geoff.arroyo',
      );
      expect(facebookLink).toBeInTheDocument();
      expect(facebookLink).toHaveAttribute('target', '_blank');
    });
  });
});
