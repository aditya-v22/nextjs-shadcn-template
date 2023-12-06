export default function FolderNamingPattern() {
  return (
    <section>
      <h2>Folder Naming Pattern</h2>

      <table className='table-auto sm:w-full md:w-1/2'>
        <thead>
          <tr>
            <th className='px-4 py-2'>Folder</th>
            <th className='px-4 py-2'>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr className='bg-gray-100 dark:bg-gray-800'>
            <td className='border px-4 py-2'>page.tsx</td>
            <td className='border px-4 py-2'>
              Routable page with client and server components
            </td>
          </tr>
          <tr className='bg-white dark:bg-gray-700'>
            <td className='border px-4 py-2'>(routeGroups)</td>
            <td className='border px-4 py-2'>
              Group routes and files while omitting the file name
            </td>
          </tr>
          <tr className='bg-gray-100 dark:bg-gray-800'>
            <td className='border px-4 py-2'>_privatePath</td>
            <td className='border px-4 py-2'>Non routable group of pages</td>
          </tr>
          <tr className='bg-white dark:bg-gray-700'>
            <td className='border px-4 py-2'>[id]</td>
            <td className='border px-4 py-2'>
              Path with dynamic route parameter
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
