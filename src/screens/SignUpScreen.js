import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native';
import { Input, Button, Card } from 'react-native-elements';
import { FontAwesome, Feather, AntDesign, Ionicons } from '@expo/vector-icons';
import *as firebase from 'firebase';


const SignUpScreen = (props) => {

    const [Name, setName] = useState("");
    const [SID, setSID] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

    return (

        <View style={styles.viewStyle}>
            <Card>
                <Card.Title>Welcome to Facebook app</Card.Title>
                <Card.Divider />
                <Input
                    leftIcon={<Ionicons name="ios-person" size={24} color="black" />}
                    placeholder='Your Name'
                    onChangeText={function (currentInput) {
                        setName(currentInput);
                    }}
                />
                <Input
                    leftIcon={<Ionicons name="ios-school-outline" size={24} color="black" />}
                    placeholder='Your ID'
                    onChangeText={function (currentInput) {
                        setSID(currentInput);
                    }}
                />
                <Input
                    leftIcon={<FontAwesome name="envelope" size={24} color="black" />}
                    placeholder='E-mail Address'
                    onChangeText={function (currentInput) {
                        setEmail(currentInput);
                    }}
                />

                <Card.Divider />
                <Input
                    leftIcon={<Feather name="key" size={24} color="black" />}
                    placeholder='Password'
                    secureTextEntry={true}
                    onChangeText={function (currentInput) {
                        setPassword(currentInput);
                    }}
                />
                <Button
                    title='Sign Up'
                    icon={<AntDesign name="user" size={24} color="white" />}
                    type='solid'
                    onPress={() => {
                        if (Name && SID && Email && Password) {
                            firebase
                            .auth()
                            .createUserWithEmailAndPassword(Email, Password)
                                .then((userCredential) => {
                                    userCredential.user.updateProfile({displayName: Name});
                                    firebase
                                    .database()
                                    .ref()
                                    .child("users/")
                                    .child(userCredential.user.uid)
                                    .set({
                                        name: Name,
                                        sid: SID,
                                        email: Email,
                                    }).then(()=>{
                                        alert('account created successfully');
                                        console.log(userCredential.user);
                                        props.navigation.navigate("SignIn")
                                    }).catch((error)=>{
                                        alert(error)
                                    });
                                })
                                .catch((error) => {
                                    alert(error);
                                });
                        } else {
                            alert('Fields cannot be empty!');
                        }
                    }}
                />
                <Button
                    icon={<AntDesign name="login" size={24} color="dodgerblue" />}
                    title="Already have an account?"
                    type='clear'
                    onPress={function () {
                        props.navigation.navigate('SignIn')
                    }}
                />
            </Card>
        </View>
    )
}

export default SignUpScreen;

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#4bacb8',
    }
})
