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
          className='user_repTitle_a'
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
        <p className='user_RepSubInfo_p'>Updated on {date.toString()}</p>
      </section>
    </section>
  );
}
Repository.propTypes = {
  repository: PropTypes.object
};
