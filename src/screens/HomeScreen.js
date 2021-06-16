import React, { useState, useEffect } from 'react'
import { ScrollView, StyleSheet, View, FlatList, ActivityIndicator } from 'react-native';
import { Card, Button,Input } from 'react-native-elements';
// import { useNetInfo } from '@react-native-community/netinfo';

import { Entypo } from '@expo/vector-icons';
import { AuthContext } from '../providers/AuthProvider';
import HeaderHome from '../components/HeaderHome';
import PostCard from './../components/PostCard';
import { getPosts } from './../requests/Posts';
import { getUsers } from '../requests/Users';


const HomeScreen = (props) => {

    // const netinfo =useNetInfo();
    // if(netinfo.type != "other" && !netinfo.isInternetReachable){
    //     alert('You have lost internet connection')
    // }
    // console.log(netinfo);
    const [posts, setPosts] = useState([]);
    const [users, setUsers] = useState([]);
    // const [loading, setLoading] = useState(false);

    const loadPosts = async () => {
        // setLoading(true);
        const response = await getPosts();
    if(response.ok){
        setPosts(response.data);
    }else{
        alert(response.problem);
    }
    };
    const loadUsers = async () => {
        const response = await getUsers();
    if(response.ok){
        setUsers(response.data);
    }else{
        alert(response.problem);
    }
    // setLoading(false);
    };

    const getName =(id)=>{
        let name = '';
        users.forEach((element)=>{
            if(element.id==id){
                name=element.name;
            }
        })
        return name;
    }

    useEffect(()=>{
        loadPosts();
        loadUsers();
    })

    return (
        <AuthContext.Consumer>
            {(auth) => (<ScrollView>
                <View style={styles.viewStyle}>
                    <HeaderHome
                        DrawerFunction={() => {
                            props.navigation.toggleDrawer();
                        }}
                    />
                    <Card>
                        <Input
                            placeholder="What's on Your mind?"
                            leftIcon={<Entypo name="pencil" size={24} color="black" />}
                        />
                        <Button title="Post" type="outline" onPress={function (){}}/>
                    </Card>
                    {/* <ActivityIndicator
                     size="large" 
                     color="#00ff00"
                     animating={loading} 
                    /> */}
                    <FlatList
                        data={posts}
                        renderItem={({item}) =>{
                            return (
                                <PostCard
                                    author={getName(item.userId)}
                                    title={item.title}
                                    body={item.body}
                                    />
                            );
                        }}
                    />
                </View>
            </ScrollView>
            )}
        </AuthContext.Consumer>
    )
};


const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
        color: 'blue'
    },
    viewStyle: {
        flex: 1,
    }
})

export default HomeScreen;




