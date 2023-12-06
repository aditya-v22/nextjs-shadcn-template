'use client';

import { redirect, useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function LearnPage() {
  const router = useRouter();

  useEffect(() => {
    // mounted twice in ReactStrictMode during development. SO Answer - https://stackoverflow.com/a/65167384
    console.log('mounted');
    const timeout = setTimeout(() => {
      console.log('timeout executed');
      router.push('/learn/page-1'); // works

      redirect('/learn/page-1'); // doesn't work because we're in client
    }, 5000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div>
      <h2>Page 3</h2>
    </div>
  );
}
