import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../src/App';

function renderAt(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>,
  );
}

describe('App routing', () => {
  it('renders the Landing page at "/"', () => {
    renderAt('/');
    expect(screen.getByAltText('Geoff Arroyo Profile')).toBeInTheDocument();
  });

  it('renders the AboutMe page at "/aboutMe"', () => {
    renderAt('/aboutMe');
    expect(screen.getByText("Hi, I'm Geoff")).toBeInTheDocument();
  });

  it('renders the Experience page at "/experience"', () => {
    renderAt('/experience');
    expect(screen.getByText('Experience')).toBeInTheDocument();
  });

  it('always renders the PrimaryAppBar on every route', () => {
    renderAt('/');
    expect(screen.getByText('Geoffarroyo@gmail.com')).toBeInTheDocument();
  });
});
