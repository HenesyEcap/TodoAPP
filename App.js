import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '/components/HomeScreen';
import AddEditTodoScreen from '/components/AddEditTodoScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'ToDoApp' }} />
        <Stack.Screen
          name="AddEditTodo"
          component={AddEditTodoScreen}
          options={{ title: 'Add/Edit Todo' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
