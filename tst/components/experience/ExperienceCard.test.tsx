import React from 'react';
import { render, screen } from '@testing-library/react';
import ExperienceCard from '../../../src/components/experience/ExperienceCard';
import type { TechImage } from '../../../src/components/experience/ExperienceCard';

const mockImageArray: TechImage[] = [
  { imgSrc: 'https://example.com/git.png', imgAlt: 'Git logo' },
  { imgSrc: 'https://example.com/aws.png', imgAlt: 'AWS logo' },
  { imgSrc: 'https://example.com/java.png', imgAlt: 'Java logo' },
];

describe('ExperienceCard', () => {
  describe('rendering', () => {
    it('renders the first tech image with correct alt text', () => {
      render(<ExperienceCard imageArray={mockImageArray} />);
      expect(screen.getByAltText('Git logo')).toBeInTheDocument();
    });

    it('renders the second tech image with correct alt text', () => {
      render(<ExperienceCard imageArray={mockImageArray} />);
      expect(screen.getByAltText('AWS logo')).toBeInTheDocument();
    });

    it('renders the third tech image with correct alt text', () => {
      render(<ExperienceCard imageArray={mockImageArray} />);
      expect(screen.getByAltText('Java logo')).toBeInTheDocument();
    });

    it('renders exactly three images', () => {
      render(<ExperienceCard imageArray={mockImageArray} />);
      const images = screen.getAllByRole('img');
      expect(images).toHaveLength(3);
    });
  });
});
