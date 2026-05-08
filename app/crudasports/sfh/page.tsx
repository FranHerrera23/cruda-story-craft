import { Metadata } from 'next';
import ProposalContent from './ProposalContent';

export const metadata: Metadata = {
  title: 'CRUDA × Samurai Fight House — Strategic Proposal',
  description: 'Building SFH\'s commercial infrastructure.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function SFHProposalPage() {
  return <ProposalContent />;
}
