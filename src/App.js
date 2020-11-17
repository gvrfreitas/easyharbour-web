import { React } from 'react';
import GlobalStyle from './style/global';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <>
    <GlobalStyle/>
    <Dashboard/>
    </>
  );
}

export default App;
