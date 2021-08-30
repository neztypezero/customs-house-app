import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('renders Enter Customs House main link', () => {
  const { container } = render(<App />);

  expect(container.querySelector('#main')).toBeInTheDocument();

  const linkElement = screen.getByText(/Enter Customs House/i);
  expect(linkElement).toBeInTheDocument();
});

test('after Enter Customs House main link is clicked screen changes to MainScreen', async () => {
  const { container } = render(<App />);
  const linkElement = screen.getByText(/Enter Customs House/i);
  userEvent.click(linkElement);

  const mainScreenContainer = await container.querySelector('#main-screen-container');
  expect(mainScreenContainer).toBeInTheDocument();

  expect(mainScreenContainer.querySelector('a[href="/gallery/"')).toBeInTheDocument();
  expect(mainScreenContainer.querySelector('a[href="/floorplans/"')).toBeInTheDocument();
  expect(mainScreenContainer.querySelector('a[href="/view/"')).toBeInTheDocument();
  expect(mainScreenContainer.querySelector('a[href="/location/"')).toBeInTheDocument();
});

test('after Gallery link is clicked screen changes to GalleryMainScreen', async () => {
  const { container } = render(<App />);
  const linkElement = screen.getByText(/Enter Customs House/i);
  userEvent.click(linkElement);

  const mainScreenContainer = await container.querySelector('#main-screen-container');

  const galleryLink = mainScreenContainer.querySelector('a[href="/gallery/"');
  userEvent.click(galleryLink);

  const galleryScreenContainer = await container.querySelector('#gallery-screen-container');
  expect(galleryScreenContainer).toBeInTheDocument();

  expect(galleryScreenContainer.querySelector('a[href="/gallery/building/"')).toBeInTheDocument();
  expect(galleryScreenContainer.querySelector('a[href="/gallery/suite/"')).toBeInTheDocument();
  expect(galleryScreenContainer.querySelector('a[href="/gallery/history/"')).toBeInTheDocument();
  expect(galleryScreenContainer.querySelector('a[href="/gallery/movie/"')).toBeInTheDocument();
});