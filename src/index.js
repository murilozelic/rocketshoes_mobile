import React from 'react';
import { StatusBar } from 'react-native';
// import { Provider } from 'react-redux';

import './config/ReactotronConfig';
import Routes from './routes';
// import GlobalHeader from './components/GlobalHeader';
// import store from './store';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#141419" />
      <Routes />
    </>
  );
}
