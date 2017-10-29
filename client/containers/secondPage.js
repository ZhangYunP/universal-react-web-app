import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const Second = () => {
  return (
    <Route render={({ staticContext }) => {
      if (staticContext) {
        staticContext.status = 302;
      }
      return <Redirect from='/two' to="/one" />;
    }}/>
  );
};

export default Second;
