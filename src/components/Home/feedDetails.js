import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, Image, View } from 'react-native';
import styled from "styled-components/native";
import CustomIcon from "../icon/svgicon";

const FeedView = styled.View`
  width:100%;
  margin-bottom:10px;
`;
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
const FeedImage = styled.Image`
    height:350px;
    width:100%;
    resize-mode:contain;
`;
const FeedBottom = styled.View`
    padding-left:12px;
    padding-right:12px;
`;
const FeedLike = styled.View`
    flex-direction:row;
    justify-content:flex-start;
    align-items:center;
    margin-bottom:5px;
`
const FeedComment = styled.View`
    padding:5px;
    background-color:#fff;
`;
const FeedTime = styled.Text`
    font-Size:14px;
    color:#c9c9c9;
`;
const FeedLikeText = styled.Text`
    font-Size:14px;
    font-weight:bold;
    color:#000;
`;
const UserNameText = styled.Text`
    font-Size:15px;
    font-weight:bold;
    color:#000;
    margin-top:3px;
`;
const PhotoCaptionText = styled.Text`
    font-Size:14px;
    color:#000;
    margin-top:3px;
`;

const PhotoCommentText = styled.Text`
    font-Size:14px;
    color:#484848;
    margin-top:3px;
`;
const UploadTimeText = styled.Text`
    font-Size:10px;
    color:#484848;
    margin-top:3px;
`;
const SponsoredText = styled.Text`
    font-Size:12px;
    color:red;
    margin-bottom:2px;
`;
const PhotoCommentSection = styled.View`
    flex-direction:row;
    justify-content:center;
    align-items:center;
`;
const UserProfile = styled.View`
    flex:0.1;
    align-items:flex-start;
    justify-content:flex-start;
`;
const CommentsBox = styled.View`
    flex:0.9;
`;
const CommentTextInput = styled.TextInput`
    height:40px;
`;

export default class FeedDetails extends Component {
    constructor() {
        super();
        this.state = {
            isLike: false
        }
    }
    componentDidMount() {
        console.log("Details", this.props);

    }
    render() {
        return (
            <FeedView>
                <FeedHeader>
                    <View style={{ flex: 0.15, justifyContent: "center" }}>
                        <TouchableOpacity
                            style={{ height: 38, width: 38, overflow: "hidden", borderWidth: 2, borderRadius: 38 / 2, borderColor: "blue", alignItems: "center", justifyContent: "center" }}>
                            <Image
                                style={{ height: 38, width: 38, }}
                                resizeMode="contain"
                                source={require("../../assets/target.jpg")} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 0.8, justifyContent: "center" }}>
                        <UserNameText style={{ margin: 0 }}>User Name</UserNameText>
                        <SponsoredText>Sponsored</SponsoredText>
                    </View>
                    <View style={{ flex: 0.1, alignItems: "flex-end", justifyContent: "center", alignItems: "center" }}>
                        <TouchableOpacity
                            onLongPress={() => { }}
                            style={{ alignItems: "flex-end", justifyContent: "center", height: "100%" }}>
                            <Image
                                style={{ padding: 5, height: 15, width: 15, }}
                                resizeMode="contain"
                                source={require("../../assets/menu.png")} />
                        </TouchableOpacity>
                    </View>
                </FeedHeader>
                <FeedImage
                    source={require("../../assets/target.jpg")}
                />
                <FeedBottom>
                    <FeedLike>
                        <View style={{ flex: 0.5, flexDirection: "row", alignItems: "center" }}>
                            <TouchableOpacity onPress={() => { this.setState({ isLike: !this.state.isLike }) }} >
                                {this.state.isLike ?
                                    <CustomIcon viewBox="0 0 500 500" name={"heart"} />
                                    : <CustomIcon name={"like"} />}

                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={1} style={{ paddingLeft: 15 }}>
                                <CustomIcon name={"comment"} />
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={1} style={{ paddingLeft: 15 }}>
                                <CustomIcon name={"message"} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 0.5, justifyContent: "flex-end", alignItems: "flex-end" }}>
                            <TouchableOpacity>
                                <CustomIcon name={"bookmark"} />
                            </TouchableOpacity>
                        </View>
                    </FeedLike>
                    <FeedComment>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <View style={{ overflow: "hidden", zIndex: 999, alignItems: "center", justifyContent: "center", height: 22, width: 22, borderWidth: 2, borderRadius: 22 / 2, borderColor: "#fff" }}>
                                <Image
                                    style={{ height: 22, width: 22 }}
                                    resizeMode="contain"
                                    source={require("../../assets/target.jpg")}
                                />
                            </View>
                            <View style={{ position: "absolute", overflow: "hidden", left: 12, alignItems: "center", justifyContent: "center", height: 22, width: 22, borderRadius: 22 / 2, }}>
                                <Image
                                    style={{ height: 22, width: 22 }}
                                    resizeMode="contain"
                                    source={require("../../assets/user.png")}
                                />
                            </View>
                            <FeedLikeText style={{ marginLeft: 20 }}>Liked by addy052 and 287,0002 others</FeedLikeText>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <UserNameText>aliabhatt </UserNameText>
                            <PhotoCaptionText>Watchyu lookin at ?</PhotoCaptionText>
                        </View>
                        <PhotoCommentText>View All 1000 Comments</PhotoCommentText>
                        <PhotoCommentSection>
                            <UserProfile>
                                <View style={{ overflow: "hidden", zIndex: 999, alignItems: "center", justifyContent: "center", height: 35, width: 35, borderRadius: 35 / 2 }}>
                                    <Image
                                        style={{ height: 35, width: 35 }}
                                        resizeMode="contain"
                                        source={require("../../assets/target.jpg")}
                                    />
                                </View>
                            </UserProfile>
                            <CommentsBox>
                                <CommentTextInput
                                    placeholder="Add a comment..."
                                />
                            </CommentsBox>
                        </PhotoCommentSection>
                        <UploadTimeText>24 MINUTES AGO</UploadTimeText>
                    </FeedComment>
                </FeedBottom>
            </FeedView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        justifyContent: "flex-start",
        alignItems: "flex-start"
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
