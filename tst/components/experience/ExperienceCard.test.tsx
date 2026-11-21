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

    it('renders one image per item in a three-item array', () => {
      render(<ExperienceCard imageArray={mockImageArray} />);
      const images = screen.getAllByRole('img');
      expect(images).toHaveLength(3);
    });

    it('renders no images for an empty array', () => {
      const { container } = render(<ExperienceCard imageArray={[]} />);
      expect(container.querySelectorAll('img')).toHaveLength(0);
    });

    it('renders a single image for a one-item array', () => {
      render(
        <ExperienceCard
          imageArray={[
            { imgSrc: 'https://example.com/git.png', imgAlt: 'Git logo' },
          ]}
        />,
      );
      expect(screen.getAllByRole('img')).toHaveLength(1);
      expect(screen.getByAltText('Git logo')).toBeInTheDocument();
    });

    it('renders all images for a two-item array without throwing', () => {
      render(
        <ExperienceCard
          imageArray={[
            { imgSrc: 'https://example.com/git.png', imgAlt: 'Git logo' },
            { imgSrc: 'https://example.com/aws.png', imgAlt: 'AWS logo' },
          ]}
        />,
      );
      expect(screen.getAllByRole('img')).toHaveLength(2);
      expect(screen.getByAltText('Git logo')).toBeInTheDocument();
      expect(screen.getByAltText('AWS logo')).toBeInTheDocument();
    });

    it('renders every image when the array has more than three items', () => {
      const fourImages: TechImage[] = [
        ...mockImageArray,
        { imgSrc: 'https://example.com/react.png', imgAlt: 'React logo' },
      ];
      render(<ExperienceCard imageArray={fourImages} />);
      expect(screen.getAllByRole('img')).toHaveLength(4);
      expect(screen.getByAltText('React logo')).toBeInTheDocument();
    });
  });
});
