import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import PersonalProjects from '../../../src/components/projects/PersonalProjects';

function renderPersonalProjects() {
  return render(
    <MemoryRouter>
      <PersonalProjects />
    </MemoryRouter>,
  );
}

describe('PersonalProjects', () => {
  it('renders the Personal Projects title', () => {
    renderPersonalProjects();
    expect(screen.getByText('Personal Projects')).toBeInTheDocument();
  });

  it('renders the Coming soon placeholder body', () => {
    renderPersonalProjects();
    expect(screen.getByText('Coming soon.')).toBeInTheDocument();
  });
});
