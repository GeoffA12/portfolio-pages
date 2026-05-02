import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Experience from '../../../src/components/experience/Experience';

function renderExperience() {
  return render(
    <MemoryRouter>
      <Experience />
    </MemoryRouter>,
  );
}

describe('Experience', () => {
  describe('section headings', () => {
    it('renders the "Experience" section heading', () => {
      renderExperience();
      expect(screen.getByText('Experience')).toBeInTheDocument();
    });

    it('renders the "Personal Projects" section heading', () => {
      renderExperience();
      expect(screen.getByText('Personal Projects')).toBeInTheDocument();
    });

    it('renders the technologies section heading', () => {
      renderExperience();
      expect(
        screen.getByText(
          'Most familiar programming languages and technologies',
        ),
      ).toBeInTheDocument();
    });
  });

  describe('work experience content', () => {
    it('renders the Amazon internship title', () => {
      renderExperience();
      expect(
        screen.getByText(/Amazon.com - Software Development Engineer Intern/i),
      ).toBeInTheDocument();
    });

    it('renders the Amazon internship description', () => {
      renderExperience();
      expect(
        screen.getByText(/accommodations tool for Amazon fulfillment center/i),
      ).toBeInTheDocument();
    });

    it('renders the ESiMi internship title', () => {
      renderExperience();
      expect(
        screen.getByText(/ESiMi - UI\/UX Design Intern/i),
      ).toBeInTheDocument();
    });

    it('renders the ESiMi internship description', () => {
      renderExperience();
      expect(
        screen.getByText(/ambient-energy devices like bike lights/i),
      ).toBeInTheDocument();
    });
  });

  describe('project cards', () => {
    it('renders the Product Landing Page project card', () => {
      renderExperience();
      expect(screen.getByText('Product Landing Page')).toBeInTheDocument();
    });

    it('renders the Technical Documentation Page project card', () => {
      renderExperience();
      expect(
        screen.getByText('Technical Documentation Page'),
      ).toBeInTheDocument();
    });

    it('renders the Research Article project card', () => {
      renderExperience();
      expect(screen.getByText('Research Article')).toBeInTheDocument();
    });
  });

  describe('tech logo images', () => {
    it('renders the Git logo', () => {
      renderExperience();
      expect(screen.getByAltText('Git logo')).toBeInTheDocument();
    });

    it('renders the AWS logo', () => {
      renderExperience();
      expect(screen.getByAltText('AWS logo')).toBeInTheDocument();
    });

    it('renders the Docker logo', () => {
      renderExperience();
      expect(screen.getByAltText('Docker logo')).toBeInTheDocument();
    });
  });
});
