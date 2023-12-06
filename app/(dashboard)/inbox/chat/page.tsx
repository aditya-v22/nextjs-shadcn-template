import { Metadata } from 'next';
import WorkInProgress from '../../_components/WorkInProgress';

export const metadata: Metadata = {
  title: 'Chat',
  description: 'Collaborate with your team in real-time',
};

export default function ChatPage() {
  return (
    <div className='mx-10 mt-10 w-1/4'>
      <WorkInProgress featureLabel='Chat' featureName='chat' />
    </div>
  );
}
