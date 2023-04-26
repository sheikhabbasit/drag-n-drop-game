import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import PublicNavigator from './Source/Navigators/PublicNavigator';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <PublicNavigator />
    </NavigationContainer>
  );
}

export default App;
