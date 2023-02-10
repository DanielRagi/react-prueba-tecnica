import React from 'react';
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';
import AppLayout from '../pages/AppLayout';


function App() {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <AppLayout />
    </AppContext.Provider>
  );
}

export default App;