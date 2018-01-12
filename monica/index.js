// Import a library to help create a component
// These libraries will help us make components. 
// Components are intelligent objects that a lot of inner workings associated with them

// **** SO WE DON'T WANT TO HAVE TO IMPLEMENT THESE LIBRARIES EVERY TIME WE MAKE A COMPONENT ****
// **** SO we use a few functions provided by react native to 
// make the process of generating a new component much easier

// The act of just creating a component doesn't actually do anything
// We have to specifically tell React-Native to take the component
// we just created and place it onto the screen
// We'll have to build several different components along the way, 
// AND we always to be very specific in telling our device exactly 
// when to display each of these different compoenents to our users

import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

// Create a component, *REMEMBER component is simply a *thing* 
// that produces some content that's going to appear on the mobile device

// defining a component we write out js function, 
// this function must return some object that describes what it should look like on our device
const App = () => (
        <Header /> // when we have no intention of putting text between two tags,
    );            //   we do this! And by doing this we're not using Text anymore

    // This method is called component nesting!
    // It's out cheif tool for making really complex applications 
    // full of a lot of different components

// We are going to use a method called import destructuring, 
// because right now we have errors from the JSX.
// As of now we have the library like this: 
// " import ReactNative from 'react-native'; " it's going to be replaced with:
// import { Text } from 'react-native'; 
// This just means we want the Text property from the react-native library


// This bit of text tells react native that we want to render some text to the screen of our device.
// The weird part is that this snippet of code 
// looks like HTML that is being written inside of our JS
// What we see there is a DIALECT of javascript called JSX, 
// it's an extension to the JS language. we use it to write components
// In practice JSX follows the same semantics of HTML
// We have opening and closing tags.

// JSX is our ONE AND ONLY WAY to communicate with react native to of about 
// what we want our app to look like on the screen of our mobile device
// JSX exists only to make our lives easier as a developers.

// Render it to the device
// *In any react native app that we create we have to 
// at least register one component to the applicaton*
// Which is what we did, the first argument is a string that must match with our project name
// The second argument we passed a function that returns the 
//first component to render for our application
AppRegistry.registerComponent('monica', () => App);


/*
import { AppRegistry } from 'react-native';
import App from './App';

AppRegistry.registerComponent('monica', () => App);
*/
