import Link from 'next/link';

export default function LearnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className='m-2 border p-4'>
      <h1>Learn layout</h1>
      <section
        id='navigation-items'
        className=' flex w-2/3 justify-between py-2'
      >
        <Link href='/learn/page-1'>{`Page 1 <Link />`} with prefetching</Link>
        <Link href='/learn/page-2'>{`Page 2 <Link />`} with prefetching</Link>
        <Link href='/learn/page-3'>
          Page 3 auto redirection to page 1 in 5 seconds
        </Link>
      </section>
      <section
        id='navigation-items'
        className='mt-4 flex w-2/3 justify-between py-2'
      >
        <Link href='/learn/data-fetching'>Data Fetching Logic</Link>
        <Link href='/learn/page-2'>{`Page 2 <Link />`} with prefetching</Link>
        <Link href='/learn/page-3'>
          Page 3 auto redirection to page 1 in 5 seconds
        </Link>
      </section>
      <section
        id='content'
        className='mt-4 min-h-full rounded bg-slate-700 px-4 py-2'
      >
        {children}
      </section>
    </section>
  );
}
