import type { Metadata } from 'next';
import KarenSaadiyatProject from './ProjectContent';

export const metadata: Metadata = {
  title: 'Saadiyat Music Festival — TRAZZO Lighting',
  description: 'Jennifer Lopez, Christina Aguilera. The festival that proved TRAZZO\'s international reach in Abu Dhabi, UAE.',
  openGraph: {
    title: 'Saadiyat Music Festival — TRAZZO Lighting — CRUDA',
    description: 'The festival that proved TRAZZO\'s international reach in Abu Dhabi.',
    url: 'https://www.thecruda.com/projects/karen-mannheim/saadiyat-music-festival',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Saadiyat Music Festival — TRAZZO Lighting — CRUDA',
    description: 'The festival that proved TRAZZO\'s international reach in Abu Dhabi.',
  },
  alternates: {
    canonical: 'https://www.thecruda.com/projects/karen-mannheim/saadiyat-music-festival',
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function SaadiyatMusicFestivalPage() {
  return <KarenSaadiyatProject />;
}
