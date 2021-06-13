import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-elements';
import { AuthContext } from '../Providers/AuthProvider';
// import { AuthContext } from './src/Providers/AuthProvider';


const HomeScreen = () => {
    return (
        <AuthContext.Consumer>
            {(auth) => (
                <View>
                    <Text style={styles.textStyle}>Welcome {auth.CurrentUser.name}</Text>
                    <Button
                        type="outline"
                        title="Log Out"
                        onPress={function () {
                            auth.setIsLoggedIn(false);
                            auth.setCurrentUser({})
                        }}
                    />
                </View>
            )}
        </AuthContext.Consumer>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
        color: 'blue'
    }
})
