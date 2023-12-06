export default function DataFetchingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2>Data Fetching Example</h2>
      <div className='mt-4 grid gap-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3'>
        {children}
      </div>
    </div>
  );
}
