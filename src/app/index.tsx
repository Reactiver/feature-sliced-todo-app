import { Routing } from 'pages';
import React from 'react';
import { withProviders } from './providers';

const App = () => {
  return <Routing></Routing>;
};

export default withProviders(App);
