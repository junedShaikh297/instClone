import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, Image, TouchableOpacity, View } from 'react-native';
import CustomIcon from "./svgicon"
export default class Story extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView
                    nestedScrollEnabled={true}
                    contentContainerStyle={{ height: 70, backgroundColor: "#fff", justifyContent: "center", alignItems: "center" }}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    <TouchableOpacity
                        style={[styles.touchStyle]}>
                        <CustomIcon name="plus" fill={"#000"} height={18} width={18} />
                    </TouchableOpacity>
                    {
                        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((d, i) => {
                            return <TouchableOpacity key={i}
                                style={styles.touchStyle}>
                                <Image
                                    style={{ height: 50, width: 50, }}
                                    resizeMode="contain"
                                    source={require("../assets/user.png")} />
                            </TouchableOpacity>

                        })
                    }
                </ScrollView>
            </View>
        );
    }
}

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
    touchStyle: {
        height: 50,
        width: 50,
        margin: 5,
        overflow: "hidden",
        borderWidth: 2,
        borderRadius: 25,
        borderColor: "blue",
        alignItems: "center",
        justifyContent: "center"
    }
});
