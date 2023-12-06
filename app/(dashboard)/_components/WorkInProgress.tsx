import UnavailableFeature from '@/components/primitives/UnavailableFeature';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Pickaxe } from 'lucide-react';
import { features } from 'process';

interface WorkInProgressProps {
  featureName: string;
  featureLabel: string;
}

export default function WorkInProgress(props: WorkInProgressProps) {
  return (
    <Alert className='flex p-4'>
      <div className='mx-0 mr-6'>
        <Pickaxe className='h-10 w-10' />
      </div>
      <div>
        <AlertTitle className='mt-1 text-xl'>Work in progress!</AlertTitle>
        <AlertDescription className='mt-4 text-lg'>
          This is a work in progress feature and will be available soon.
        </AlertDescription>
        <UnavailableFeature
          featureName={props.featureName}
          featureLabel={props.featureLabel}
        >
          <Button className='my-4' size='sm' variant='default'>
            Upvote
          </Button>
        </UnavailableFeature>
      </div>
    </Alert>
  );
}
