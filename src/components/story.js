import React, { Component } from 'react';
import { ScrollView, StyleSheet, Image, TouchableOpacity, View } from 'react-native';

export default class Story extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView
                    contentContainerStyle={{ height: 70, borderWidth: 1, elevation: 5, backgroundColor: "#fff", justifyContent: "center", alignItems: "center" }}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    {
                        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((d, i) => {
                            return <TouchableOpacity key={i}
                                style={{ height: 42, width: 42, margin: 5,overflow:"hidden", borderWidth: 2, borderRadius: 30, borderColor: "blue", alignItems: "center", justifyContent: "center" }}>
                                <Image
                                    style={{padding:5, height: 40, width: 40, }}
                                    resizeMode="contain"
                                    source={require("../assets/target.jpg")} />
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
});
