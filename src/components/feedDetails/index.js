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
                <FeedBottom style={{ marginTop: 5 }}>
                    <FeedLike>
                        <FeedLikeContainer>
                            <FeedButton normal onPress={() => { this.setState({ isLike: !this.state.isLike }) }} >
                                {this.state.isLike ?
                                    <CustomIcon viewBox="0 0 500 500" name={"heart"} />
                                    : <CustomIcon name={"like"} />}

                            </FeedButton>
                            <FeedButton>
                                <CustomIcon name={"comment"} />
                            </FeedButton>
                            <FeedButton>
                                <CustomIcon name={"message"} />
                            </FeedButton>
                        </FeedLikeContainer>
                        <FeedBoomarkcontainer>
                            <FeedButton normal>
                                <CustomIcon name={"bookmark"} />
                            </FeedButton>
                        </FeedBoomarkcontainer>
                    </FeedLike>
                    <FeedCommentContainer>
                        <FeedCommentSubContainer>
                            <FeedCommentSubContainer>
                                <View style={{ overflow: "hidden", zIndex: 999, alignItems: "center", justifyContent: "center", height: 22, width: 22, borderWidth: 2, borderRadius: 22 / 2, borderColor: "#fff" }}>
                                    <UserCommentImage
                                        source={require("../../assets/target.jpg")}
                                    />
                                </View>
                                <View style={{ overflow: "hidden",zIndex:99, left: -10, alignItems: "center", justifyContent: "center", height: 22, width: 22, borderRadius: 22 / 2,borderWidth:2,borderColor:"#fff" }}>
                                    <UserCommentImage
                                        source={require("../../assets/user.png")}
                                    />
                                </View>
                                <View style={{ overflow: "hidden", left: -20, alignItems: "center", justifyContent: "center", height: 22, width: 22, borderRadius: 22 / 2, }}>
                                    <UserCommentImage
                                        source={require("../../assets/user.png")}
                                    />
                                </View>
                            </FeedCommentSubContainer>
                            <FeedLikeText>Liked by addy052 and 287,0002 others</FeedLikeText>
                        </FeedCommentSubContainer>
                        <FeedCommentSubContainer>
                            <UserNameText>aliabhatt </UserNameText>
                            <PhotoCaptionText>Watchyu lookin at ?</PhotoCaptionText>
                        </FeedCommentSubContainer>
                        <PhotoCommentText>View All 1000 Comments</PhotoCommentText>
                        <PhotoCommentSection>
                            <UserProfile>
                                <CommentImageContainer>
                                    <UserCommentImage
                                        textComment
                                        source={require("../../assets/target.jpg")}
                                    />
                                </CommentImageContainer>
                            </UserProfile>
                            <CommentsBox>
                                <CommentTextInput
                                    placeholder="Add a comment..."
                                />
                            </CommentsBox>
                        </PhotoCommentSection>
                        <UploadTimeText>24 MINUTES AGO</UploadTimeText>
                    </FeedCommentContainer>
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
const FeedCommentContainer = styled.View`
    padding:5px;
    background-color:#fff;
`;

const FeedCommentSubContainer = styled.View`
    flex-direction:row;
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
const FeedButton = styled.TouchableOpacity`
   padding-left:${props => props.normal ? '0px' : '15px'};
`;
const UserCommentImage = styled.Image`
    resize-mode:contain;
    height:${props => props.textComment ? '35px' : '22px'};
    width:${props => props.textComment ? '35px' : '22px'};
`;
const CommentImageContainer = styled.View`
    overflow:hidden;
    z-index:999;
    align-items:center;
    justify-content:center;
    height:35px;
    width:35px;
    border-radius:17.5px;
`;
const FeedLikeContainer = styled.View`
    flex:0.5;
    flex-direction:row;
    align-items:center;
`;

const FeedBoomarkcontainer = styled.View`
    flex:0.5;
    justify-content:flex-end;
    align-items:flex-end;
`;