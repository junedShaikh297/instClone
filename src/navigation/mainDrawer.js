import React from "react";
import { createDrawerNavigator } from "react-navigation";
import DrawerScreen from "../components/Drawer";
import MainStack from "./mainStack";

const MainDrawer = createDrawerNavigator(
  {
    MainStack
  },
  {
    initialRouteName: "MainStack",
    contentComponent: props => <DrawerScreen {...props} />
  }
);
export default MainDrawer;
