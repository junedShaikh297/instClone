import { createStackNavigator, createBottomTabNavigator, createSwitchNavigator, createAppContainer, createDrawerNavigator } from "react-navigation";
import LoginScreen from "@screens/login";
import DrawerScreen from "@screens/drawer";
import SnapScreen from "@screens/snapStory";
import Feed from "@screens/home";
import Profile from "@screens/profile";
import Setting from "@screens/settings";
import React from 'react';
import CustomeIcon from "@component/svgicon"
import { Text, TouchableOpacity, View, Dimensions } from 'react-native';
const FeedStack = createStackNavigator({
    Feed: {
        screen: Feed,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: "Feed",
                headerLeft: (
                    <TouchableOpacity style={{ paddingLeft: 10 }} onPress={() => { navigation.openDrawer() }}><CustomeIcon height={25} width={25} name={"camera"} /></TouchableOpacity>
                )
            }
        }
    }
})

const ProfileStack = createStackNavigator({
    Profile: {
        screen: Profile,
    }
})

const profileDrawer = createDrawerNavigator(
    {
        ProfileStack
    }, {
        contentComponent: DrawerScreen,
        drawerPosition: "right",
        drawerWidth: 200,
        drawerType: "slide",
        contentOptions: {
            activeBackgroundColor: "transparent",
            inactiveBackgroundColor: "transparent"
        }
    })

const SettingStack = createStackNavigator({
    Setting: {
        screen: Setting,
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
            return <View {...props} style={{ flexDirection: "row", height: 40, padding: 12, backgroundColor: "#fff", alignItems: "center", justifyContent: "space-between" }}>
                <TouchableOpacity onPress={() => {
                    props.navigation.navigate("FeedStack")
                }}>
                    <CustomeIcon name={"home"} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <CustomeIcon name={"search"} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    props.navigation.navigate("SettingStack")
                }}>
                    <CustomeIcon name={"add_square"} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <CustomeIcon name={"like"} height={22} width={22} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    props.navigation.navigate("ProfileStack")
                }}>
                    <CustomeIcon name={"profile"} />
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
                    <TouchableOpacity onPress={() => { navigation.openDrawer() }}><CustomeIcon name={"menu"} /></TouchableOpacity>
                )
            }
        }
    }
)

const appDrawer = createDrawerNavigator(
    {
        AppStackNavigator
    },
    {
        contentComponent: SnapScreen,
        drawerPosition: "left",
        drawerWidth: Dimensions.get("window").width,
        drawerType: "slide",
        contentOptions: {
            activeBackgroundColor: "transparent",
            inactiveBackgroundColor: "transparent"
        }
    })

const Mainstack = createStackNavigator(
    {
        Login: {
            screen: LoginScreen,
            navigationOptions: () => ({
                header: null
            })
        },
        DashBoard: {
            screen: appDrawer,
            navigationOptions: () => ({
                header: null
            })
        },
        SnapStory: {
            screen: SnapScreen,
        }
    }
);
export default createAppContainer(Mainstack);