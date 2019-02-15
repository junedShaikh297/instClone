import React, { PureComponent } from 'react';
import { TouchableOpacity, Image, View } from 'react-native';
import PropTypes from 'prop-types'
import styled from "styled-components/native";
import CustomIcon from "../svgicon";
import ImageContainer from './imageContainer';
import Header from './header';

class FeedDetails extends PureComponent {
    constructor() {
        super();
        this.state = {
            isLike: false
        }
    }
    render() {
        console.log('image screen rendered')
        const { data } = this.props;
        return (
            <FeedView>
                <Header />
                <ImageContainer
                    data={data}
                    _allowScale={this.props.allowScale} 
                    _scaleValue={this.props.scaleValue} 
                    _imageCenter={this.props.imageCenter} 
                />
                <FeedBottom style={{marginTop: 5}}>
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

FeedDetails.propTypes = {
    imageCenter: PropTypes.func,
    allowScale: PropTypes.func,
    scaleValue: PropTypes.func,
    data: PropTypes.string
}

export default FeedDetails;


const FeedView = styled.View`
  width:100%;
  margin-bottom:10px;
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
