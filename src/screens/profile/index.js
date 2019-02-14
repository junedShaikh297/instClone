import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, Image, View, FlatList } from 'react-native';
import CustomIcon from '@component/svgicon';
import FeedDetails from '@component/feedDetails';

export default class Profile extends Component {
    constructor() {
        super()
        this.state = {
            isList: false
        }
    }
    onTabPress = (e) => {
        if (e === "Feed") {
            this.setState({
                isList: true
            })
        } else {
            this.setState({
                isList: false
            })
        }
    }
    render() {
        let { isList } = this.state;
        return (
            <View style={styles.container}>
                <FlatList
                    numColumns={3}
                    data={[0, 1, 2, 3, 4, 5, 6, 7, 8]}
                    ListHeaderComponent={() => {
                        return <View><View style={{ flexDirection: "row", height: 130, justifyContent: "center", alignItems: "center" }}>
                            <View style={{ flex: 0.37, alignItems: "center" }}>
                                <View
                                    style={{ height: 85, width: 85, marginTop: 7, overflow: "hidden", borderRadius: 85 / 2, alignItems: "center", justifyContent: "center" }}>
                                    <Image
                                        style={{ height: 85, width: 85 }}
                                        resizeMode="contain"
                                        source={require("../../assets/pic.png")} />
                                </View>
                                <TouchableOpacity style={{ position: "absolute", bottom: -3, right: 20, height: 20, width: 20, padding: 5, alignItems: "center", justifyContent: "center", borderRadius: 20 / 2, borderWidth: 3, borderColor: "#fff" }}>
                                    <CustomIcon name="plus_round" height={18} width={18} />
                                </TouchableOpacity>
                            </View>
                            <View style={{ flex: 0.63, paddingRight: 10 }}>
                                <View style={{ flexDirection: "row", alignItems: "center" }}>
                                    <View style={{ paddingHorizontal: 22 }}>
                                        <Text style={{ fontSize: 18, fontWeight: "500", color: "#000" }}>
                                            125
                                    </Text>
                                        <Text style={{ color: "#000" }}>
                                            posts
                                    </Text>
                                    </View>
                                    <View style={{ paddingHorizontal: 0 }}>
                                        <Text style={{ fontSize: 18, textAlign: "center", fontWeight: "500", color: "#000" }}>
                                            373
                                    </Text>
                                        <Text style={{ color: "#000" }}>
                                            Followers
                                    </Text>
                                    </View>
                                    <View style={{ paddingHorizontal: 10 }}>
                                        <Text style={{ fontSize: 18, color: "#000", textAlign: "center", fontWeight: "500" }}>
                                            420
                                    </Text>
                                        <Text style={{ color: "#000" }}>
                                            Following
                                    </Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: "row", alignItems: "center" }}>
                                    <TouchableOpacity style={{ borderWidth: 1, borderRadius: 3, borderColor: "#000", padding: 2, alignItems: "center", marginTop: 10, width: "100%" }}>
                                        <Text style={{ fontWeight: "600", color: "#000" }}>Edit Profile</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                            <View style={{ height: 148, borderWidth: 1, borderColor: "red" }} />
                            <View style={{ height: 48, borderWidth: 1, borderColor: "blue", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                <TouchableOpacity onPress={() => { this.onTabPress("MyPost") }} style={{ flex: 1 / 3 }}><Text style={{ textAlign: "center" }}>A</Text></TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.onTabPress("Feed") }} style={{ flex: 1 / 3 }}><Text style={{ textAlign: "center" }}>A</Text></TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.onTabPress("TagPost") }} style={{ flex: 1 / 3 }}><Text style={{ textAlign: "center" }}>A</Text></TouchableOpacity>
                            </View>
                        </View>
                    }}
                    renderItem={(d) => {
                        return !isList ? <View style={{ height: 120, width: 120, borderWidth: 1 }} />:<FeedDetails/>
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
