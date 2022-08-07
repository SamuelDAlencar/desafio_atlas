import PropTypes from 'prop-types';
import React from 'react';

export default function Repository({ repository }) {
  console.log(repository);

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
      <section className='user_repTopics_section'>
        {repository.topics && (
          repository.topics.map((topic, i) => {
            return <p key={i} className='user_repTopic_p'>{topic}</p>;
          })
        )}
      </section>
      <p className='user_repLanguage_p'>{repository.language}</p>
    </section>
  );
}
Repository.propTypes = {
  repository: PropTypes.object
};
