import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AboutMe from '../../../src/components/about/AboutMe';

function renderAboutMe() {
  return render(
    <MemoryRouter>
      <AboutMe />
    </MemoryRouter>,
  );
}

describe('AboutMe', () => {
  describe('rendering', () => {
    it('renders the "Hi, I\'m Geoff" heading', () => {
      renderAboutMe();
      expect(screen.getByText("Hi, I'm Geoff")).toBeInTheDocument();
    });

    it('renders the "A Software Developer" subheading', () => {
      renderAboutMe();
      expect(screen.getByText('A Software Developer')).toBeInTheDocument();
    });

    it('renders the biography paragraph mentioning full-stack developer', () => {
      renderAboutMe();
      expect(screen.getByText(/full-stack developer/i)).toBeInTheDocument();
    });

    it('renders the second biography paragraph mentioning the coding meetup', () => {
      renderAboutMe();
      expect(screen.getByText(/Cracking the Coding/i)).toBeInTheDocument();
    });

    it('renders the CES photo with the correct alt text', () => {
      renderAboutMe();
      expect(screen.getByAltText('Geoff at CES')).toBeInTheDocument();
    });
  });
});
