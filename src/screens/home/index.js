import React, { Component } from 'react';
import {  FlatList } from 'react-native';
import { commonAction } from "../../Action/action"
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import FeedDetails from "@component/feedDetails";
import NavigationService from '../../navigation/navigationServices';
import Story from "@component/story"
class Feed extends Component {
    render() {
        return (
            <FlatList
                style={{flex:1}}
                ListHeaderComponent={() => {
                    return <Story />
                }}
                data={[0, 1, 2, 3, 4]}
                renderItem={(d, i) => {
                    return <FeedDetails key={i} />
                }}
            />
        );
    }
}
function mapDispatchToProps(dispatch) {
    return Object.assign(
        { dispatch: dispatch },
        bindActionCreators({
            commonAction
        }, dispatch)
    );
}

const mapStateToProps = state => {
    return {
        data: state.commonReducer.data,
        //   connection : state.userReducer.connection
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Feed);

