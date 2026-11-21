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

    it('renders professional SDE framing with Ito and Amazon', () => {
      renderAboutMe();
      expect(screen.getByText(/Ito\.ai/i)).toBeInTheDocument();
      expect(screen.getByText(/Amazon/i)).toBeInTheDocument();
      expect(
        screen.getByText(/Software Development Engineer/i),
      ).toBeInTheDocument();
    });

    it('renders soft career interests without an explicit seeking statement', () => {
      renderAboutMe();
      expect(screen.getByText(/distributed systems/i)).toBeInTheDocument();
      expect(
        screen.getByText(/AI.?driven automation|AI automation/i),
      ).toBeInTheDocument();
      expect(screen.queryByText(/seeking/i)).not.toBeInTheDocument();
    });

    it('renders education credentials for Class of 2021', () => {
      renderAboutMe();
      expect(screen.getByText(/St\. Edward/i)).toBeInTheDocument();
      expect(screen.getByText(/Class of 2021/i)).toBeInTheDocument();
      expect(screen.getByText(/4\.0/)).toBeInTheDocument();
      expect(screen.getByText(/Co-Valedictorian/i)).toBeInTheDocument();
      expect(
        screen.getByText(/Outstanding Computer Science Graduate/i),
      ).toBeInTheDocument();
    });

    it('renders personal interests without the coding meetup', () => {
      renderAboutMe();
      expect(screen.getByText(/gaming/i)).toBeInTheDocument();
      expect(screen.getByText(/music/i)).toBeInTheDocument();
      expect(screen.getByText(/friends and family/i)).toBeInTheDocument();
      expect(screen.getByText(/sports/i)).toBeInTheDocument();
      expect(
        screen.queryByText(/Cracking the Coding/i),
      ).not.toBeInTheDocument();
      expect(screen.queryByText(/rising senior/i)).not.toBeInTheDocument();
    });

    it('renders the CES photo with the correct alt text', () => {
      renderAboutMe();
      expect(screen.getByAltText('Geoff at CES')).toBeInTheDocument();
    });
  });
});
