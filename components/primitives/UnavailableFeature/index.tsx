'use client';

import * as React from 'react';
import { ArrowUp } from 'lucide-react';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { cn } from '@/lib/utils';

interface UnavailableFeatureProps extends React.HTMLAttributes<HTMLDivElement> {
  featureName: string;
  featureLabel: string;
}

const useVotedFeature = (featureName: string) => {
  const [voted, setVoted] = React.useState(false);

  const markAsVoted = () => {
    localStorage.setItem(featureName, 'true');
    setVoted(true);
  };

  React.useEffect(() => {
    const featureVoted = localStorage.getItem(featureName);
    setVoted(featureVoted === 'true');
  }, []);

  return {
    voted,
    markAsVoted,
  };
};

export default function UnavailableFeature({
  featureName,
  featureLabel,
  children,
}: UnavailableFeatureProps) {
  const [open, onOpenChange] = React.useState(false);
  const [alertOpen, setAlertOpen] = React.useState(false);
  const { voted, markAsVoted } = useVotedFeature(featureName);

  const title = React.useMemo(() => {
    if (alertOpen) {
      return 'Thank you for your vote!';
    }
    return `${featureLabel} is unavailable`;
  }, [voted]);

  const description = React.useMemo(() => {
    if (voted) {
      return 'We have recorded your vote for this feature. Thanks for taking the time to vote!';
    }

    return `This is a WIP project for demonstration purposes and "${featureName}" is not available yet.`;
  }, [voted]);

  const handleVote = () => {
    markAsVoted();
    setAlertOpen(true);
    setTimeout(() => {
      setAlertOpen(false);
      onOpenChange(false);
    }, 3000);
  };

  return (
    <AlertDialog open={open || alertOpen} onOpenChange={onOpenChange}>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Got It</AlertDialogCancel>
          <AlertDialogAction
            disabled={voted}
            onClick={handleVote}
            className={cn({
              'cursor-not-allowed': voted,
            })}
          >
            <ArrowUp className='ml-auto mr-1 h-4 w-4 shrink-0 opacity-50' />
            Upvote
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
