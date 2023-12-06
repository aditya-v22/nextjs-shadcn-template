import Link from 'next/link';

import { cn } from '@/lib/utils';

export function MainNavLinks({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn('flex items-center space-x-4 lg:space-x-8', className)}
      {...props}
    >
      <Link
        href='/inbox'
        className='text-sm font-medium transition-colors hover:text-primary'
      >
        Mail
      </Link>
      <Link
        href='/inbox/chat'
        className='text-sm font-medium text-muted-foreground transition-colors hover:text-primary'
      >
        Chat
      </Link>
      <Link
        href='/inbox/tasks'
        className='text-sm font-medium text-muted-foreground transition-colors hover:text-primary'
      >
        Tasks
      </Link>
      <Link
        href='/inbox/settings'
        className='text-sm font-medium text-muted-foreground transition-colors hover:text-primary'
      >
        Settings
      </Link>
    </nav>
  );
}
