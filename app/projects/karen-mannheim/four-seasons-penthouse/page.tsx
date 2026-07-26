import type { Metadata } from 'next';
import KarenFourSeasonsProject from './ProjectContent';

export const metadata: Metadata = {
  title: 'Four Seasons Penthouse — TRAZZO Lighting',
  description: 'Four Seasons Residences Miami, floor 66. High-end architectural lighting for Miami\'s most exclusive residential project.',
  openGraph: {
    title: 'Four Seasons Penthouse — TRAZZO Lighting — CRUDA',
    description: 'Four Seasons Residences Miami, floor 66.',
    url: 'https://www.thecruda.com/projects/karen-mannheim/four-seasons-penthouse',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Four Seasons Penthouse — TRAZZO Lighting — CRUDA',
    description: 'Four Seasons Residences Miami, floor 66.',
  },
  alternates: {
    canonical: 'https://www.thecruda.com/projects/karen-mannheim/four-seasons-penthouse',
  },
};

export default function FourSeasonsPenthousePage() {
  return <KarenFourSeasonsProject />;
}
