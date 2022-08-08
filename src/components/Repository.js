import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

export default function Repository({ repository }) {
  const [date, setDate] = useState(repository.updated_at.split('T')[0]);

  useEffect(() => {
    const [y, m, d] = date.split('-');
    const convertedDate = new Date(+y, m - 1, +d);
    const splitDate = convertedDate.toString().split(' ');

    setDate(`${splitDate[2]} ${splitDate[1]}`);
  }, []);

  return (
    <section className='user_rep_section'>
      <section className='user_repTitle_section'>
        <a
          href={repository.html_url}
          target='_blank'
          className='user_repTitle_a'
          rel="noreferrer"
        >
          {repository.name}
        </a>
        <span>Public</span>
      </section>
      <p className='user_repDescription_p'>{repository.description}</p>
      {repository.topics &&
        <section className='user_repTopics_section'>
          {repository.topics.map((topic, i) => {
            return <p key={i} className='user_repTopic_p'>{topic}</p>;
          })}
        </section>
      }
      <section className='user_repSubInfos_section'>
        <p className='user_RepSubInfo_p'>
          {repository.language}
        </p>
        {repository.forks > 0 && <p className='user_RepSubInfo_p'>
          <svg aria-label="fork" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="user_rep_svg">
            <path fillRule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>
          </svg>{repository.forks}</p>}
        {repository.license && <p
          className='user_RepSubInfo_p'>
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="user_rep_svg">
            <path fillRule="evenodd" d="M8.75.75a.75.75 0 00-1.5 0V2h-.984c-.305 0-.604.08-.869.23l-1.288.737A.25.25 0 013.984 3H1.75a.75.75 0 000 1.5h.428L.066 9.192a.75.75 0 00.154.838l.53-.53-.53.53v.001l.002.002.002.002.006.006.016.015.045.04a3.514 3.514 0 00.686.45A4.492 4.492 0 003 11c.88 0 1.556-.22 2.023-.454a3.515 3.515 0 00.686-.45l.045-.04.016-.015.006-.006.002-.002.001-.002L5.25 9.5l.53.53a.75.75 0 00.154-.838L3.822 4.5h.162c.305 0 .604-.08.869-.23l1.289-.737a.25.25 0 01.124-.033h.984V13h-2.5a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-2.5V3.5h.984a.25.25 0 01.124.033l1.29.736c.264.152.563.231.868.231h.162l-2.112 4.692a.75.75 0 00.154.838l.53-.53-.53.53v.001l.002.002.002.002.006.006.016.015.045.04a3.517 3.517 0 00.686.45A4.492 4.492 0 0013 11c.88 0 1.556-.22 2.023-.454a3.512 3.512 0 00.686-.45l.045-.04.01-.01.006-.005.006-.006.002-.002.001-.002-.529-.531.53.53a.75.75 0 00.154-.838L13.823 4.5h.427a.75.75 0 000-1.5h-2.234a.25.25 0 01-.124-.033l-1.29-.736A1.75 1.75 0 009.735 2H8.75V.75zM1.695 9.227c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L3 6.327l-1.305 2.9zm10 0c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L13 6.327l-1.305 2.9z"></path>
          </svg>
          {repository.license.name}
        </p>}
        <p className='user_RepSubInfo_p'>Updated on {date.toString()}</p>
      </section>
    </section>
  );
}
Repository.propTypes = {
  repository: PropTypes.object
};
