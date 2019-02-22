import React, { Component } from "react"
import { View, Text, Image, TouchableOpacity, Animated, ImageBackground } from "react-native"
export default class SearchTab extends Component {
    state = {
        width: new Animated.Value(0),
        preIndex: null
    }
    onPress = () => {
        const { index, activeIndex } = this.props;
        const { preIndex } = this.state;
        this.props.onPress(index);
        this.setState({
            preIndex: activeIndex
        })
        Animated.timing(this.state.width, {
            toValue: 50,
            duration: 500
        }).start();
        // this.state.width.setValue(0)
    }
    render() {
        const animatedWidthBorder = {
            width: this.state.width
        }
        if(this.props.index != this.props.activeIndex && this.state.width._value != 0){
            this.state.width.setValue(0)
        }
        return (
            <TouchableOpacity activeOpacity={1} onPress={this.onPress}>
                <ImageBackground source={{uri:this.props.data.imageUri}} blurRadius={1} style={{ height: 75, width: 75, borderRadius: 8, overflow: "hidden", marginHorizontal: 5, overlayColor: "red", backgroundColor: "#ccc", alignItems: "center", justifyContent: "center" }}>
                    <View style={{ height: 32, width: 32, overflow: "hidden", borderRadius: 32 / 2, borderWidth: 2, borderColor: "#fff", justifyContent: "center" }}>
                        <Image
                            resizeMode="contain"
                            style={{ height: 30, width: 30 }}
                            source={{uri:this.props.data.imageUri}}
                        />
                    </View>
                    <Text style={{ fontWeight: "600", color: "#fff" }}>{this.props.data.title}</Text>
                    {
                        this.props.index === this.props.activeIndex ?
                            <Animated.View style={[{ width: 50, borderWidth: 1, borderRadius: 0.5, borderColor: "#fff" }, animatedWidthBorder]} /> : <View style={{ height: 2 }} />

                    }
                </ImageBackground>
            </TouchableOpacity>
        );
    }
}