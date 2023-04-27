import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../Pages/Login';
import Flatlists from '../Pages/Flatlists';
import DragDrop from '../Pages/DragDrop/index';
const Stack = createNativeStackNavigator();

function PublicNavigator(): JSX.Element {
  return (
    <Stack.Navigator initialRouteName="DragDrop">
      <Stack.Screen name="DragDrop" component={DragDrop} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Flatlists" component={Flatlists} />
    </Stack.Navigator>
  );
}

export default PublicNavigator;
