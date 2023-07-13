import * as React from 'react';
import {StatusBar, SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import MyTabs from '../Tab/MyTabs';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <SafeAreaView style={style.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#fff"
        translucent={false}
      />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Tab"
            component={MyTabs}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
