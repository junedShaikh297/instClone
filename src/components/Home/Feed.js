import React, { Component } from 'react';
import { PermissionsAndroid, StyleSheet, Text, TouchableOpacity, View, ScrollView, Image } from 'react-native';
import { commonAction } from "../../Action/action"
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import FeedDetails from "./feedDetails"
import NavigationService from '../../navigation/navigationServices';
import { FlatList } from 'react-native-gesture-handler';
import Story from "./story"
class Feed extends Component {
    render() {
        return (
            <ScrollView contentContainerStyle={styles.container}>
                {/* <ScrollView
                    contentContainerStyle={{ height: 70, borderWidth: 1, elevation: 5, backgroundColor: "#fff", justifyContent: "center", alignItems: "center" }}
                    horizontal={true}
                >
                    {
                        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((d, i) => {
                            return <TouchableOpacity key={i}
                                style={{ height: 42, width: 42, margin: 5,overflow:"hidden", borderWidth: 2, borderRadius: 30, borderColor: "blue", alignItems: "center", justifyContent: "center" }}>
                                <Image
                                    style={{padding:5, height: 40, width: 40, }}
                                    resizeMode="contain"
                                    source={require("../../assets/target.jpg")} />
                            </TouchableOpacity>

                        })
                    }
                </ScrollView> */}
                <FlatList
                    ListHeaderComponent={() => {
                        return <Story />
                    }}
                    data={[0, 1, 2, 3, 4]}
                    renderItem={(d, i) => {
                        return <FeedDetails key={i} />
                    }}
                />

            </ScrollView>
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

const styles = StyleSheet.create({
    container: {
        flex: 1
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
