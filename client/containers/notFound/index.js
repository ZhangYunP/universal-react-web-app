import React from 'react';
import Status from './status';

const errorStatus = 404;

const NotFound = () => {
  return (
    <Status status={errorStatus}>
      <div>
        <h1>Not Found</h1>
      </div>
    </Status>
  );
};

export default NotFound;
