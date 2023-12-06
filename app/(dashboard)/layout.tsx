import { Metadata } from 'next';
import { LightSwitch } from '@/components/primitives/light-switch';
import AccountSwitcher from './_components/AccountSwitcher';
import { MainNavLinks } from './_components/MainNavLinks';
import { Search } from './_components/Search';
import { UserMenu } from './_components/UserMenu';
import { MenuSquare } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Example dashboard app built using the components.',
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className='flex h-16 items-center border-b px-4'>
        <div className='md:hidden'>
          <MenuSquare />
        </div>
        <div className='hidden w-full items-center md:flex'>
          <AccountSwitcher />
          <MainNavLinks className='mx-6' />
          <div className='ml-auto flex items-center space-x-4'>
            <Search />
            <LightSwitch />
            <UserMenu />
          </div>
        </div>
      </div>
      <section id='dashboard-content'>{children}</section>
    </>
  );
}
