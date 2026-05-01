import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ProjectCard from '../../../src/components/experience/ProjectCard';
import type { ProjectImage } from '../../../src/components/experience/ProjectCard';

const mockImage: ProjectImage = {
  imgSrc: 'https://example.com/project.jpg',
  imgAlt: 'Project preview',
  link: 'https://codepen.io/example',
  text: 'My Cool Project',
};

function renderProjectCard(image: ProjectImage = mockImage) {
  return render(
    <MemoryRouter>
      <ProjectCard image={image} />
    </MemoryRouter>,
  );
}

describe('ProjectCard', () => {
  describe('rendering', () => {
    it('renders the project image with the given alt text', () => {
      renderProjectCard();
      expect(screen.getByAltText('Project preview')).toBeInTheDocument();
    });

    it('renders the project label text', () => {
      renderProjectCard();
      expect(screen.getByText('My Cool Project')).toBeInTheDocument();
    });

    it('renders an anchor with the correct href and opens in a new tab', () => {
      renderProjectCard();
      const link = screen.getByRole('link');
      expect(link).toHaveAttribute('href', 'https://codepen.io/example');
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });

    it('the image is nested inside the anchor link', () => {
      renderProjectCard();
      const link = screen.getByRole('link');
      expect(link).toContainElement(screen.getByAltText('Project preview'));
    });
  });
});
