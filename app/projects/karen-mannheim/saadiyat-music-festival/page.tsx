import type { Metadata } from 'next';
import KarenSaadiyatProject from './ProjectContent';

export const metadata: Metadata = {
  title: 'Saadiyat Music Festival — TRAZZO Lighting',
  description: 'Jennifer Lopez, Christina Aguilera. The festival that proved TRAZZO\'s international reach in Abu Dhabi, UAE.',
  openGraph: {
    title: 'Saadiyat Music Festival — TRAZZO Lighting — CRUDA',
    description: 'The festival that proved TRAZZO\'s international reach in Abu Dhabi.',
    url: 'https://cruda.co/projects/karen-mannheim/saadiyat-music-festival',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Saadiyat Music Festival — TRAZZO Lighting — CRUDA',
    description: 'The festival that proved TRAZZO\'s international reach in Abu Dhabi.',
  },
  alternates: {
    canonical: 'https://cruda.co/projects/karen-mannheim/saadiyat-music-festival',
  },
};

export default function SaadiyatMusicFestivalPage() {
  return <KarenSaadiyatProject />;
}
