import Constants from "expo-constants";
import React, { Component } from "react";
import Directory from "./DirectoryComponent";
// import { CAMPSITES } from "../shared/campsites";
import CampsiteInfo from "./CampsiteInfoComponent";
import { View, Platform } from "react-native";
import {
  createStackNavigator,
  HeaderStyleInterpolator,
  HeaderTitle,
} from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";

const DirectoryNavigator = createStackNavigator(
  {
    Directory: { screen: Directory },
    CampsiteInfo: { screen: CampsiteInfo },
  },
  {
    initalRouteName: "Directory",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#5637dd",
      },
      headerTintColor: "#fff",
      HeaderTitleStyle: {
        color: "#fff",
      },
    },
  }
);

const AppNavigator = createAppContainer(DirectoryNavigator);

class Main extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     campsites: CAMPSITES,
  //     selectedCampsite: null,
  //   };
  // }

  // onCampsiteSelect(campsiteId) {
  //   this.setState({ selectedCampsite: campsiteId });
  // }

  //     render() {
  //         return <Directory campsites={this.state.campsites} />;
  //     }
  // }

  render() {
    return (
      <View
        style={{
          flex: 1,
          paddingTop: Platform.OS === "ios" ? 0 : Constants.StatusBarHeight,
        }}
      >
        <AppNavigator />
        {/* <Directory
          campsites={this.state.campsites}
          onPress={(campsiteId) => this.onCampsiteSelect(campsiteId)}
        />
        <CampsiteInfo
          campsite={
            this.state.campsites.filter(
              (campsite) => campsite.id === this.state.selectedCampsite
            )[0]
          }
        /> */}
      </View>
    );
  }
}

export default Main;
