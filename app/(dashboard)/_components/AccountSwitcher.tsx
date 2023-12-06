'use client';

import * as React from 'react';
import { ArrowDownUp } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import UnavailableFeature from '@/components/primitives/UnavailableFeature';

const accounts = [
  {
    label: 'Aditya vaishnav',
    value: 'personal',
  },
];

type Account = (typeof accounts)[number];

interface AccountSwitcherProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function AccountSwitcher({ className }: AccountSwitcherProps) {
  const [selectedAccount, setSelectedAccount] = React.useState<Account>(
    accounts[0]
  );

  return (
    <UnavailableFeature
      featureLabel='Account Switching'
      featureName='account-switcher'
    >
      <Button
        variant='outline'
        role='combobox'
        aria-label='Select a team'
        className={cn('w-[200px] justify-between', className)}
      >
        <Avatar className='mr-2 h-5 w-5'>
          <AvatarImage
            src={`https://avatar.vercel.sh/${selectedAccount.value}.png`}
            alt={selectedAccount.label}
            className='grayscale'
          />
          <AvatarFallback>Ady</AvatarFallback>
        </Avatar>
        {selectedAccount.label}
        <ArrowDownUp className='ml-auto h-4 w-4 shrink-0 opacity-50' />
      </Button>
    </UnavailableFeature>
  );
}
