import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CardRow from '../../../src/components/experience/CardRow';
import type { ProjectImage } from '../../../src/components/experience/ProjectCard';
import type { TechImage } from '../../../src/components/experience/ExperienceCard';

const projectRows: ProjectImage[][] = [
  [
    {
      imgSrc: 'https://example.com/p1.jpg',
      imgAlt: 'Project one preview',
      link: 'https://codepen.io/p1',
      text: 'Project One',
    },
    {
      imgSrc: 'https://example.com/p2.jpg',
      imgAlt: 'Project two preview',
      link: 'https://codepen.io/p2',
      text: 'Project Two',
    },
    {
      imgSrc: 'https://example.com/p3.jpg',
      imgAlt: 'Project three preview',
      link: 'https://codepen.io/p3',
      text: 'Project Three',
    },
  ],
];

const techRows: TechImage[][] = [
  [
    { imgSrc: 'https://example.com/git.png', imgAlt: 'Git logo' },
    { imgSrc: 'https://example.com/aws.png', imgAlt: 'AWS logo' },
    { imgSrc: 'https://example.com/java.png', imgAlt: 'Java logo' },
  ],
  [
    { imgSrc: 'https://example.com/react.png', imgAlt: 'React logo' },
    { imgSrc: 'https://example.com/kotlin.png', imgAlt: 'Kotlin logo' },
    { imgSrc: 'https://example.com/mongo.png', imgAlt: 'MongoDB logo' },
  ],
];

describe('CardRow', () => {
  describe('when cardType is "Project"', () => {
    it('renders a ProjectCard for each item in the row', () => {
      render(
        <MemoryRouter>
          <CardRow nestedImageArray={projectRows} cardType='Project' />
        </MemoryRouter>,
      );
      expect(screen.getByAltText('Project one preview')).toBeInTheDocument();
      expect(screen.getByAltText('Project two preview')).toBeInTheDocument();
      expect(screen.getByAltText('Project three preview')).toBeInTheDocument();
    });

    it('renders the project label text for each card', () => {
      render(
        <MemoryRouter>
          <CardRow nestedImageArray={projectRows} cardType='Project' />
        </MemoryRouter>,
      );
      expect(screen.getByText('Project One')).toBeInTheDocument();
      expect(screen.getByText('Project Two')).toBeInTheDocument();
      expect(screen.getByText('Project Three')).toBeInTheDocument();
    });

    it('renders anchor links pointing to the correct URLs', () => {
      render(
        <MemoryRouter>
          <CardRow nestedImageArray={projectRows} cardType='Project' />
        </MemoryRouter>,
      );
      const links = screen.getAllByRole('link');
      const hrefs = links.map((l) => l.getAttribute('href'));
      expect(hrefs).toContain('https://codepen.io/p1');
      expect(hrefs).toContain('https://codepen.io/p2');
      expect(hrefs).toContain('https://codepen.io/p3');
    });
  });

  describe('when cardType is "Experience"', () => {
    it('renders tech images for each row', () => {
      render(<CardRow nestedImageArray={techRows} cardType='Experience' />);
      expect(screen.getByAltText('Git logo')).toBeInTheDocument();
      expect(screen.getByAltText('React logo')).toBeInTheDocument();
    });

    it('renders all six tech images across two rows', () => {
      render(<CardRow nestedImageArray={techRows} cardType='Experience' />);
      const images = screen.getAllByRole('img');
      expect(images).toHaveLength(6);
    });
  });

  describe('row count', () => {
    it('renders the correct number of rows for a multi-row project array', () => {
      const twoProjectRows: ProjectImage[][] = [
        [
          {
            imgSrc: 'https://example.com/a.jpg',
            imgAlt: 'Project A',
            link: 'https://codepen.io/a',
            text: 'A',
          },
          {
            imgSrc: 'https://example.com/b.jpg',
            imgAlt: 'Project B',
            link: 'https://codepen.io/b',
            text: 'B',
          },
          {
            imgSrc: 'https://example.com/c.jpg',
            imgAlt: 'Project C',
            link: 'https://codepen.io/c',
            text: 'C',
          },
        ],
        [
          {
            imgSrc: 'https://example.com/d.jpg',
            imgAlt: 'Project D',
            link: 'https://codepen.io/d',
            text: 'D',
          },
        ],
      ];
      render(
        <MemoryRouter>
          <CardRow nestedImageArray={twoProjectRows} cardType='Project' />
        </MemoryRouter>,
      );
      expect(screen.getByAltText('Project A')).toBeInTheDocument();
      expect(screen.getByAltText('Project D')).toBeInTheDocument();
    });

    it('renders nothing when given an empty array', () => {
      const { container } = render(
        <MemoryRouter>
          <CardRow nestedImageArray={[]} cardType='Project' />
        </MemoryRouter>,
      );
      expect(container.querySelectorAll('img')).toHaveLength(0);
    });
  });
});
