import React from 'react';
import AppRouter from 'src/Navigation/AppRouter';
import {ThemeProvider} from 'react-native-paper';
import {LightTheme} from 'src/Constants/AppTheme';

function App() {
  return (
    <ThemeProvider theme={LightTheme}>
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
