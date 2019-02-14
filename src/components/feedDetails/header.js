import React, { Component } from 'react';
import { TouchableOpacity, Image, View } from 'react-native';
import styled from "styled-components/native";

const IMAGE_HEIGHT = 38;
const IMAGE_WIDTH = 38;

const FeedHeader = styled.View`
    flex-direction:row;
    height:45px;
    align-items:center;
    background-color:#fff;
    elevation:1px;
    padding-left:8px;
    padding-right:8px;
    width:100%;
`;
const UserNameText = styled.Text`
    font-Size:15px;
    font-weight:bold;
    color:#000;
    margin-top:3px;
`;
const SponsoredText = styled.Text`
    font-Size:12px;
    color:red;
    margin-bottom:2px;
`;
const ImageContainer = styled.TouchableOpacity`
    height: 38px; 
    width: 38px;
    overflow: hidden; 
    border: 2px; 
    border-radius: ${IMAGE_HEIGHT / 2}px 
    border-color: blue;
    align-items: center; 
    justify-content: center;
`
const shadow = {
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.00,
}

const imageStyle = {
    height: IMAGE_HEIGHT, width: IMAGE_WIDTH 
}

class FeedDetailHeader extends Component {
    render() {
        return (
            <FeedHeader style={shadow}>

                <View style={{ flex: 0.15, justifyContent: "center" }}>
                    <ImageContainer>
                        <Image
                            style={imageStyle}
                            resizeMode="contain"
                            source={require("../../assets/target.jpg")} 
                        />
                    </ImageContainer>
                </View> 

                <View style={{ flex: 0.8, justifyContent: "center" }}>
                    <UserNameText style={{ margin: 0 }}>User Name</UserNameText>
                    <SponsoredText>Sponsored</SponsoredText>
                </View>

                <View style={{ flex: 0.1, justifyContent: "center", alignItems: "center" }}>
                    <TouchableOpacity
                        onLongPress={() => { }}
                        style={{ alignItems: "flex-end", justifyContent: "center", height: "100%" }}>
                        <Image
                            style={{ padding: 5, height: 15, width: 15, }}
                            resizeMode="contain"
                            source={require("../../assets/menu.png")} 
                        />
                    </TouchableOpacity>
                </View>

            </FeedHeader>
        );
    }
}

export default FeedDetailHeader;