import { Metadata } from 'next';
import DeckContent from './DeckContent';

export const metadata: Metadata = {
  title: 'Pitch Deck — CRUDA',
  description: 'A conversation about narrative, founder-led companies, and writing it on purpose.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function DeckPage() {
  return <DeckContent />;
}
