// Import libraries for making a component
import React from 'react';
import { Text } from 'react-native';

// Make a component *as a rule of thumb 
// we will always name it a function that is the same as the file that it's placed in

const Header = () => {
    return <Text> Albums! </Text>;
};

// Make the component available to other parts of the app
// So before we started, remember we want to make components reusable, 
// so we make a TEMPLATE of them, in this case we'll call it ROOT
// Only the 'root' component uses 'AppRegistry', any component created 
// from the root will be referred to as "child"

// For every child component we create our application instead of 
// registering it with that APPREGISTRY, we export it using ES6 syntax
// So we do that by using export statements, which go on the bottom
// Bottom export statements you can think of as meaning 
// "hey i want to make this component, header component, 
// usable to other areas of our application as well"


export default Header; // so this means I want other files 
                       // within our project to be able to make use of it
