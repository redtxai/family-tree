import React from 'react';

import './App.scss';
import { MemberProvider } from './context-api/MemberProvider';
import MainPage from './pages/MainPage/MainPage';

function App() {
  return <MemberProvider>
    <MainPage></MainPage>
  </MemberProvider>
}

export default App;
