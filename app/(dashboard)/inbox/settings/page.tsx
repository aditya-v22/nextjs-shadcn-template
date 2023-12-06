import { Metadata } from 'next';
import WorkInProgress from '../../_components/WorkInProgress';

export const metadata: Metadata = {
  title: 'Settings',
  description: 'Update your account settings',
};

export default function SettingsPage() {
  return (
    <div className='mx-10 mt-10 w-1/4'>
      <WorkInProgress featureLabel='Settings' featureName='settings' />
    </div>
  );
}
