export const NPFullstackDesc = () => {
  return (
    <ul className="leading-6 space-y-2 text-third text-sm">
      <li className="dotted-li">
        <p>{'Worked on the '}
          <i className="cursor-pointer text-black underline" onClick={() => window.open('https://institute.debeers.com/en-gb/education')}><b>
            {'DeBeers Education'}
          </b></i>
          , an educational website system for the fashion company DeBeers, using .NET Core 3.1, NextJS, and MSSQL.
        </p>
      </li>
      <li className="dotted-li">Developed user management and authentication features integrating OKTA.</li>
      <li className="dotted-li">Enhanced course creation and course payment features, and developed functionality for sending payment receipts to buyers and course creators.</li>
      <li className="dotted-li">Improved course search features: categorized users that can access the courses.</li>
      <li className="dotted-li">Communicated with customers to complete and modify different features.</li>
    </ul>
  );
};