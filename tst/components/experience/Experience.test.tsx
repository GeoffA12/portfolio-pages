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

    it('does not render a Personal Projects section on this page', () => {
      renderExperience();
      expect(screen.queryByText('Personal Projects')).not.toBeInTheDocument();
    });

    it('renders the technical skills section heading', () => {
      renderExperience();
      expect(screen.getByText('Technical Skills')).toBeInTheDocument();
    });
  });

  describe('work experience roles', () => {
    it('renders the three current roles in order', () => {
      renderExperience();
      const ito = screen.getByText(/Ito\.ai \| Remote Software Engineer/i);
      const sde2 = screen.getByText(
        /Amazon \| Software Development Engineer II/i,
      );
      const sde = screen.getByText(
        /Amazon \| Software Development Engineer(?! II)/i,
      );
      expect(
        ito.compareDocumentPosition(sde2) & Node.DOCUMENT_POSITION_FOLLOWING,
      ).toBeTruthy();
      expect(
        sde2.compareDocumentPosition(sde) & Node.DOCUMENT_POSITION_FOLLOWING,
      ).toBeTruthy();
    });

    it('renders role date ranges without location text', () => {
      renderExperience();
      expect(screen.getByText(/May 2026 – Present/)).toBeInTheDocument();
      expect(screen.getByText(/July 2022 – May 2026/)).toBeInTheDocument();
      expect(screen.getByText(/June 2021 – July 2022/)).toBeInTheDocument();
      expect(screen.queryByText(/Austin, Texas/i)).not.toBeInTheDocument();
      expect(screen.queryByText(/Austin, TX/i)).not.toBeInTheDocument();
    });

    it('renders Ito hybrid content with intro and highlight bullets', () => {
      renderExperience();
      expect(screen.getByText(/AI QA agent/i)).toBeInTheDocument();
      expect(
        screen.getByText(/37% customer bug-resolution/i),
      ).toBeInTheDocument();
      expect(screen.getByText(/TypeScript\/Fastify/i)).toBeInTheDocument();
      expect(
        screen.getByText(/Langfuse evaluation platform/i),
      ).toBeInTheDocument();
      expect(screen.getByText(/151 PRs/i)).toBeInTheDocument();
    });

    it('renders Amazon SDE II highlight bullets', () => {
      renderExperience();
      expect(screen.getByText(/100\+PB\/day/i)).toBeInTheDocument();
      expect(screen.getByText(/\$7\.12M/i)).toBeInTheDocument();
      expect(screen.getByText(/AWS Bedrock/i)).toBeInTheDocument();
    });

    it('renders Amazon SDE highlight bullets', () => {
      renderExperience();
      expect(
        screen.getByText(/4,000\+ fulfillment center/i),
      ).toBeInTheDocument();
      expect(screen.getByText(/6B\+ monthly requests/i)).toBeInTheDocument();
      expect(screen.getByText(/canary infrastructure/i)).toBeInTheDocument();
    });

    it('does not render dropped intern or ESiMi roles', () => {
      renderExperience();
      expect(
        screen.queryByText(/Software Development Engineer Intern/i),
      ).not.toBeInTheDocument();
      expect(screen.queryByText(/ESiMi/i)).not.toBeInTheDocument();
      expect(
        screen.queryByText(
          /accommodations tool for Amazon fulfillment center/i,
        ),
      ).not.toBeInTheDocument();
    });

    it('does not render old personal project cards', () => {
      renderExperience();
      expect(
        screen.queryByText('Product Landing Page'),
      ).not.toBeInTheDocument();
      expect(
        screen.queryByText('Technical Documentation Page'),
      ).not.toBeInTheDocument();
      expect(screen.queryByText('Research Article')).not.toBeInTheDocument();
    });
  });

  describe('technical skills', () => {
    it('renders categorized skill labels', () => {
      renderExperience();
      expect(screen.getByText(/Languages:/i)).toBeInTheDocument();
      expect(screen.getByText(/AWS:/i)).toBeInTheDocument();
      expect(screen.getByText(/Data & infra:/i)).toBeInTheDocument();
      expect(screen.getByText(/Frontend:/i)).toBeInTheDocument();
    });

    it('renders resume-aligned skill items', () => {
      renderExperience();
      const skillLine = (label: RegExp) =>
        screen.getByText(label).closest('p')?.textContent ?? '';
      expect(skillLine(/Languages:/i)).toMatch(/Scala.*TypeScript/);
      expect(skillLine(/AWS:/i)).toMatch(/Bedrock/);
      expect(skillLine(/Data & infra:/i)).toMatch(/FS2/);
      expect(skillLine(/Frontend:/i)).toMatch(/React/);
    });

    it('does not render the old tech logo grid', () => {
      renderExperience();
      expect(screen.queryByAltText('Git logo')).not.toBeInTheDocument();
      expect(screen.queryByAltText('AWS logo')).not.toBeInTheDocument();
      expect(screen.queryByAltText('Docker logo')).not.toBeInTheDocument();
    });
  });
});
