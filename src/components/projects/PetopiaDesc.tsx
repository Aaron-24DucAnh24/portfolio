import Link from 'next/link';

export const PetopiaDesc = () => {
  return (
    <div className="h-fit px-4 pb-4 sm:py-4 sm:px-8 text-justify">
      <p className='text-third text-sm'>
        Includes a website for normal users and one for admins. Allows users to create and manage their pet profiles, adoption request, posts and blogs as well as providing dashboard for admins.
      </p>
      <p className='font-medium mt-4 mb-2'>
        POSITION: <i className='font-light'>FULL STACK DEVELOPER</i>
      </p>
      <ul className='text-sm text-third space-y-1'>
        <li className='dotted-li'>Designed the UI using Figma, and design the database.</li>
        <li className='dotted-li'>Developed the web application (using NextJS) in parallel with the API application (using .NET core)  and database (using EF core and MSSQL).</li>
        <li className='dotted-li'>Applied background job handling using Hangfire, and data caching using Redis.</li>
        <li className='dotted-li'>Implemented pet breed recognition AI service using ML.NET.</li>
        <li className='dotted-li'>Applied automation test: API testing with Postman, and E2E testing with Cypress.</li>
      </ul>
      <p className='font-medium mt-4 mb-2'>SOURCE:</p>
      <ul className='text-sm text-third space-y-1'>
        <li className='dotted-li italic hover:underline hover:text-primary hover:font-medium'>
          <Link href="https://github.com/Aaron-24DucAnh24/Petopia-Backoffice">
            https://github.com/Aaron-24DucAnh24/Petopia-Backoffice
          </Link>
        </li>
        <li className='dotted-li italic hover:underline hover:text-primary hover:font-medium'>
          <Link href="https://github.com/Aaron-24DucAnh24/Petopia-Frontend">
            https://github.com/Aaron-24DucAnh24/Petopia-Frontend
          </Link>
        </li>
        <li className='dotted-li italic hover:underline hover:text-primary hover:font-medium'>
          <Link href="https://github.com/Aaron-24DucAnh24/Petopia-Backend">
            https://github.com/Aaron-24DucAnh24/Petopia-Backend
          </Link>
        </li>
      </ul>
    </div>
  );
};