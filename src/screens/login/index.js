import React, { Component } from 'react';
import { Platform, StyleSheet, TextInput, Text, TouchableOpacity, KeyboardAvoidingView, View, Animated } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput)

const createAnimationStyle = (animation) => {
    const translateY = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [-5, 1]
    })
    return {
        opacity: animation,
        transform: [{
            translateY
        }]
    }
}
export default class Login extends Component {
    state = {
        email: new Animated.Value(0),
        password: new Animated.Value(0),
        button: new Animated.Value(0),
        animation: new Animated.Value(0),
        opacity: new Animated.Value(1)
    }
    _onPress = () => {
        this.state.animation.setValue(0);
        this.state.opacity.setValue(1);
        Animated.timing(this.state.animation, {
            toValue: 1,
            duration: 1500
        }).start(({ finished }) => {
            if (finished) {
                // Animated.timing(this.state.opacity,{
                //     toValue:0,
                //     duration:200
                // }).start();
                const resetAction = StackActions.reset({
                    index: 0,
                    actions: [NavigationActions.navigate({ routeName: 'DashBoard' })],
                });
                this.props.navigation.dispatch(resetAction);
            }
        });
    }
    componentDidMount() {
        Animated.stagger(500, [
            Animated.timing(this.state.email, {
                toValue: 1,
                duration: 200,
            }),
            Animated.timing(this.state.password, {
                toValue: 1,
                duration: 200,
            }),
            Animated.timing(this.state.button, {
                toValue: 1,
                duration: 200,
            })
        ]).start(() => {
            this.email.getNode().focus();
        })
    }
    render() {
        const emailStyle = createAnimationStyle(this.state.email);
        const passwordStyle = createAnimationStyle(this.state.password);
        const buttonStyle = createAnimationStyle(this.state.button);
        const progressInterpolate = this.state.animation.interpolate({
            inputRange: [0, 1],
            outputRange: ["0%", "100%"],
            extrapolate: "clamp"
        })
        const colorInterpolate = this.state.animation.interpolate({
            inputRange: [0, 1],
            outputRange: ["red", "green"]
        })
        const progressStyle = {
            width: progressInterpolate,
            bottom: 0,
            opacity: this.state.opacity,
            backgroundColor: colorInterpolate
        }
        return (
            <View style={styles.container}>
                <View style={{ flex: 1 / 3 }} />
                <View behavior="position" style={{ flex: 1 / 3, justifyContent: "center", alignItems: "center", paddingVertical: 10 }}>
                    <Text style={{ fontSize: 24, color: "#fff", fontWeight: "700" }}>
                        Login
                    </Text>
                    <AnimatedTextInput
                        ref={ref => this.email = ref}
                        placeholder="Email"
                        placeholderTextColor="#fff"
                        style={[styles.input, emailStyle]}
                        keyboardType="email-address"
                    />
                    <AnimatedTextInput
                        placeholder="Password"
                        placeholderTextColor="#fff"
                        style={[styles.input, passwordStyle]}
                        secureTextEntry
                    />
                    <TouchableOpacity onPress={() => { this._onPress() }}>
                        <Animated.View style={[styles.button, buttonStyle]}>
                            <View style={StyleSheet.absoluteFill}>
                                <Animated.View style={[styles.progress, progressStyle]} />
                            </View>
                            <Text style={{ color: "#fff" }}>Login</Text>
                        </Animated.View>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1 / 3 }} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ccc"
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
    input: {
        width: 250,
        height: 35,
        paddingHorizontal: 10,
        marginVertical: 5,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#fff",
        color: "#fff",
        backgroundColor: "transparent"
    },
    button: {
        width: 250,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "red",
        borderRadius: 5,
        marginTop: 5
    },
    progress: {
        position: "absolute",
        top: 0,
        left: 0,
        borderRadius: 5
    }
});
