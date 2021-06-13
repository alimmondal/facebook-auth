import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native';
import { Card, Button, Text, Avatar, Input, Header } from 'react-native-elements';


import { AntDesign, Entypo } from '@expo/vector-icons';
import { AuthContext } from '../providers/AuthProvider';



const HomeScreen = (props) => {

    const post = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse congue lorem sit amet rhoncus vulputate. Mauris eleifend ac libero id molestie. Nam ut augue at dolor convallis vestibulum. Sed at hendrerit nisl, ac hendrerit diam. Mauris vestibulum vehicula vehicula. Aenean pellentesque sem ut ligula convallis tempus"

    return (
        <AuthContext.Consumer>
            {(auth) => (<ScrollView>
            <View style={styles.viewStyle}>
                <Header
                    leftComponent={{
                        icon: "menu",
                        color: "#fff",
                        onPress: function () {
                            props.navigation.toggleDrawer();
                        }
                    }}
                    centerComponent={{ text: "The Office", style: { color: "#fff" } }}
                    rightComponent={{
                        icon: "lock-outline",
                        color: "#fff",
                        onPress: function () {
                            Auth.setIsLoggedIn(false);
                            Auth.setCurrentUser({});
                        }
                    }}
                />
                <Card>
                    <Input
                        placeholder="What's on Your mind?"
                        leftIcon={<Entypo name="pencil" size={24} color="black" />}
                    />
                    <Button
                        title="Post"
                        type="outline"
                        onPress={function () {
                            props.navigation.toggleDrawer();
                        }}
                    />
                </Card>
                <Card>
                    <View style={{ flexDirection: "row", alignItems: 'center' }}>
                        <Avatar
                            containerStyle={{ backgroundColor: "#ffab91" }}
                            rounded
                            icon={<AntDesign name="user" size={24} color="white" />}
                            activeOpacity={1}
                        />
                        <Text h4Style={{ padding: 10 }} h4>Jim Halpert</Text>
                    </View>
                    <text style={{ fontStyle: "italic" }}>Posted on 10 August, 2020</text>
                    <Text style={{ paddingVertical: 10, }}>{post}</Text>
                    <Card.Divider />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                        <Button
                            type="outline"
                            title="Like(21)"
                            icon={<AntDesign name="like2" size={24} color="black" />}
                        />
                        <Button type="solid" title="Comment(7)" />
                    </View>
                </Card>
                <Card>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Avatar
                            containerStyle={{ backgroundColor: "#ffab91" }}
                            rounded
                            icon={<AntDesign name="user" size={24} color="black" />}
                            activeOpacity={1}
                        />
                        <Text h4Style={{ padding: 10 }} h4>Dwight Schrute</Text>
                    </View>
                    <text style={{ fontStyle: "italic" }}>Posted on 22 August, 2020</text>
                    <Text style={{ paddingVertical: 10, }}>{post}</Text>
                    <Card.Divider />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                        <Button
                            type="outline"
                            title="Like(17)"
                            icon={<AntDesign name="like2" size={24} color="black" />}
                        />
                        <Button type="solid" title="Comment(20)" />
                    </View>
                </Card>
            </View>
            </ScrollView>
            )}
        </AuthContext.Consumer>
    )
};

export default HomeScreen

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
        color: 'blue'
    },
    viewStyle: {
        flex: 1,
    }
})





// import React from 'react'
// import { StyleSheet, Text, View } from 'react-native'
// import { Button } from 'react-native-elements';
// import { AuthContext } from '../Providers/AuthProvider';


// const HomeScreen = () => {
//     return (
//         <AuthContext.Consumer>
//             {(auth) => (
//                 <View>
//                     <Text style={styles.textStyle}>Welcome {auth.CurrentUser.name}</Text>
//                     <Button
//                         type="outline"
//                         title="Log Out"
//                         onPress={function () {
//                             auth.setIsLoggedIn(false);
//                             auth.setCurrentUser({})
//                         }}
//                     />
//                 </View>
//             )}
//         </AuthContext.Consumer>
//     )
// }

// export default HomeScreen;

// const styles = StyleSheet.create({
//     textStyle: {
//         fontSize: 30,
//         color: 'blue'
//     }
// })
