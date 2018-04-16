import React, { Component } from "react";
import {Text, View,} from "react-native";
import { StackNavigator, TabNavigator, DrawerNavigator } from "react-navigation";
import SignIn from '../login/SignIn';
import SignUp from '../login/SignUp';
export default LoginStack = StackNavigator({
    SignInScreen: {
        screen: SignIn,
    },
    SignUpScreen : {
        screen: SignUp,
    }
},
{
    initialRouteName: "SignInScreen",
});