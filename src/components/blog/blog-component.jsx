import React from 'react';
import { Link } from 'react-router-dom';
import { Truncate } from '@re-dev/react-truncate';

const BlogComponent = props => {
  const {
    books_id,
    books_name,
    books_author,
    books_category,
    books_position,
    books_review,
    books_image,
    books_date,
    books_status
  } = props.blogComponent;

  return (
    <div>
        <Link to={`/b/${books_id}`}>
            <h1>{books_name}</h1>
        </Link>
        <div className='subtitle'>{books_author}</div>
        <div className='subtitle'>{books_date}</div>
        <div>
          <Truncate lines={3} ellipsis={
            <span>
              ...<Link to={`/b/${books_id}`}>Read more</Link>
            </span>
          }>{books_review}</Truncate>         
        </div>
    </div>
  );
};

export default BlogComponent;