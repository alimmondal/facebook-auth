import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native';
import { Input, Button, Card } from 'react-native-elements';
import { FontAwesome, Feather, AntDesign } from '@expo/vector-icons';
import { AuthContext } from '../Providers/AuthProvider';
import { getDataJSON } from '../functions/AsyncStorage';

const SignInScreen = (props) => {

    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

    return (
        <AuthContext.Consumer>
            {(auth) => (
                <View style={styles.viewStyle}>
                    <Card>
                        <Card.Title>Welcome to Facebook app</Card.Title>
                        <Card.Divider />
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
                            icon={<AntDesign name="login" size={24} color="white" />}
                            title='Sign In'
                            type='solid'
                            onPress={async function () {
                                let userData = await getDataJSON(Email);
                                if(userData.password == Password){
                                    auth.setIsLoggedIn(true);
                                    auth.setCurrentUser(userData);
                                }
                                else{
                                    alert('Login Failed');
                                    console.log(userData);
                                }
                            }}
                        />
                        <Button
                            icon={<AntDesign name="user" size={24} color="blue" />}
                            title="Don't have an account?"
                            type='clear'
                            onPress={function () {
                                props.navigation.navigate('SignUp')
                            }}
                        />
                    </Card>
                </View>
            )}
        </AuthContext.Consumer>
    )
}

export default SignInScreen;

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#4bacb8',
    }
})
