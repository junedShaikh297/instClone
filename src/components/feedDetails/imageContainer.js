import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, PanResponder } from 'react-native';
import styled from "styled-components/native";

function calcDistance(x1, y1, x2, y2) {
    let dx = Math.abs(x1 - x2)
    let dy = Math.abs(y1 - y2)
    return Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
}

function calcCenter(x1, y1, x2, y2) {
    function middle(p1, p2) {
        return p1 > p2 ? p1 - (p1 - p2) / 2 : p2 - (p2 - p1) / 2;
    }
    return {
        x: middle(x1, x2),
        y: middle(y1, y2),
    };
}

class ImageContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: true
        }
        this.imageRef = null
        this._distance = null;
        this._panResponder = PanResponder.create({
            onMoveShouldSetResponderCapture: () => true,
            onMoveShouldSetPanResponderCapture: (e) => {
                if (!props._imageCenter && !props._allowScale) return false

                let touches = e.nativeEvent.touches;
                if (touches.length == 2 && this.imageRef) {
                    this.imageRef.measure((x, y, width, height, pageX, pageY)=>{
                        this.setState({isVisible: false})
                        props._imageCenter(width, height, pageY + (height / 2), this.props.data)
                        props._allowScale(true)
                    })
                    return true
                } else {
                    return false
                }
            },
            onPanResponderGrant: () => {},
            onPanResponderMove: (evt) => {
                let touches = evt.nativeEvent.touches;
                if (touches.length == 2) {
                    let touch1 = touches[0];
                    let touch2 = touches[1];
                    let distance = calcDistance(touch1.pageX, touch1.pageY, touch2.pageX, touch2.pageY)
                    // let center = calcCenter(touch1.pageX, touch1.pageY, touch2.pageX, touch2.pageY);
                    if (!this._distance) {
                        this._distance = distance
                    } else {
                        if (props._scaleValue)
                            props._scaleValue(distance - this._distance)
                    }
                }   
            },
            onPanResponderRelease: () => {
                if (!props._allowScale)
                    props._allowScale(false)
                setTimeout(()=>{
                    this.setState({isVisible: true})
                }, 200)
                this._distance = null
            }
        })
    }

    render() {
        return (
            <View 
                ref={(ref)=> this.imageRef = ref} 
                {...this._panResponder.panHandlers} 
                style={{height: 350, width: '100%'}}
            >
                { this.state.isVisible ? <FeedImage source={{uri: this.props.data}} resizeMode="cover" /> : null }
            </View>
        );
    }
}

ImageContainer.propTypes = {
    _imageCenter: PropTypes.func,
    _allowScale: PropTypes.func,
    _scaleValue: PropTypes.func,
    data: PropTypes.string
}

export default ImageContainer;

const FeedImage = styled.Image`
    height:100%;
    width:100%;
`;