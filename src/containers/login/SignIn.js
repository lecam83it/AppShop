//import liraries
import React, { Component } from 'react';
import { 
    View, 
    Text, 
    StyleSheet 
} from 'react-native';
import UserInput from '../../components/login/UserInput';
import {SIGN_IN} from '../../Constant';
// create a component
class SignIn extends Component {
    static navigationOptions ={
        title : SIGN_IN,
    }
    constructor(props){
        super(props);
    }
    render() {
        return (
            <View>
                <UserInput/>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
});

//make this component available to the app
export default SignIn;
