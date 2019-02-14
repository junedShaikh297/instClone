import { createStackNavigator, createBottomTabNavigator, createSwitchNavigator, createAppContainer, createDrawerNavigator } from "react-navigation";
import HomeScreen from "../components/Home"
import LoginScreen from "../components/Login"
import DashBoard from "../components/Home/DashBoard"
import DrawerScreen from "../components/Drawer"
import Feed from "../components/Home/Feed"
import Profile from "../components/Home/profile"
import Setting from "../components/Home/setting"
import DetailScreen from "../components/Home/details"
import React, { Component } from 'react';
import CustomeIcon from "../components/icon/svgicon"
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const FeedStack = createStackNavigator({
    Feed: {
        screen: Feed,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: "Feed",
                headerLeft: (
                    <TouchableOpacity onPress={() => { navigation.openDrawer() }}><Text style={{ paddingLeft: 20, fontSize: 30 }}>=</Text></TouchableOpacity>
                )
            }
        }
    },
    DetailFeed: {
        screen: DetailScreen
    }
})

const ProfileStack = createStackNavigator({
    Profile: {
        screen: Profile,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: "Profile",
                headerLeft: (
                    <TouchableOpacity onPress={() => { navigation.openDrawer() }}><Text style={{ paddingLeft: 20, fontSize: 30 }}>=</Text></TouchableOpacity>
                )
            }
        }
    }
})

const profileDrawer = createDrawerNavigator(
    {
        ProfileStack
    }, {
        contentComponent: DrawerScreen,
        drawerPosition:"right",
        drawerWidth:200,
        drawerType:"slide",
        // style:{},
        contentOptions:{
            activeBackgroundColor:"transparent",
            inactiveBackgroundColor:"transparent"
        }
    })

const SettingStack = createStackNavigator({
    Setting: {
        screen: Setting,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: "Setting",
                headerLeft: (
                    <TouchableOpacity onPress={() => { navigation.openDrawer() }}><Text style={{ paddingLeft: 20, fontSize: 30 }}>=</Text></TouchableOpacity>
                )
            }
        }
    }
})

const DashBoardTabNavigator = createBottomTabNavigator(
    {
        FeedStack,
        profileDrawer,
        SettingStack
    },
    {
        navigationOptions: ({ navigation }) => {
            const { routeName } = navigation.state.routes
            [navigation.state.index];
            return {
                header: null,
                headerTitle: routeName,
            }
        },
        tabBarComponent: props => {
            console.log("components", props);

            return <View {...props} style={{ flexDirection: "row",height:40, padding: 12, backgroundColor: "#fff", alignItems: "center", justifyContent: "space-between" }}>
                <TouchableOpacity onPress={() => {
                    props.navigation.navigate("FeedStack")
                }}>
                    <CustomeIcon name={"trophy"} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    props.navigation.navigate("ProfileStack")
                }}>
                    <CustomeIcon name={"camera"} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    props.navigation.navigate("SettingStack")
                }}>
                    <CustomeIcon name={"location"} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <CustomeIcon name={"trophy"} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <CustomeIcon name={"trophy"} />
                </TouchableOpacity>
            </View>
        },
        tabBarOptions: {
            activeTintColor: "red",
            inactiveTintColor: "black",
            showLabel: true,
            showIcon: false,
            style: { height: 40 }
        }
    })
const AppStackNavigator = createStackNavigator(
    {
        DashBoardTabNavigator: DashBoardTabNavigator
    }, {
        defaultNavigationOptions: ({ navigation }) => {
            return {
                headerLeft: (
                    <TouchableOpacity onPress={() => { navigation.openDrawer() }}><Text style={{ paddingLeft: 20, fontSize: 30 }}>=</Text></TouchableOpacity>
                )
            }
        }
    }
)

const appDrawer = createDrawerNavigator(
    {
        AppStackNavigator
    }, {
        contentComponent: DrawerScreen
    })
const Mainstack = createSwitchNavigator(
    {
        //   Home:HomeScreen,
        Login: {
            screen: LoginScreen
        },
        DashBoard: {
            screen: appDrawer
        }
    }
);
export default createAppContainer(Mainstack);