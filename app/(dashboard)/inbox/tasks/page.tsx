import { Metadata } from 'next';
import WorkInProgress from '../../_components/WorkInProgress';

export const metadata: Metadata = {
  title: 'Tasks',
  description: 'Review your tasks and keep track of todos',
};

export default function TasksPage() {
  return (
    <div className='mx-10 mt-10 w-1/4'>
      <WorkInProgress featureLabel='Tasks' featureName='tasks' />
    </div>
  );
}
