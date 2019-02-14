import React, { Component, PropTypes } from "react";

import Svg, {
  Circle,
  Ellipse,
  G,
  LinearGradient,
  RadialGradient,
  Line,
  Path,
  Polygon,
  Polyline,
  Rect,
  Symbol,
  Text,
  Use,
  Defs,
  Stop,
  Style,
  Image
} from "react-native-svg";

export default class CustomIcon extends Component {
  render() {
    if (this.props.name === "menu") {
      return (
        <Svg
          height={this.props.height ? this.props.height : "30"}
          width={this.props.width ? this.props.width : "30"}
          viewBox="0 0 500 500"
        >
          <G>
            <Path
              fill="#6ea9e0"
              d="M252.8,73.1c67,0,134-0.1,201,0c28,0,44,12.7,44.3,34.8c0.3,22.4-15.7,35.9-43.4,35.9
          c-136.2,0.1-272.5,0.1-408.7,0c-27.7,0-43.6-13.5-43.2-36c0.4-22.1,16.3-34.7,44.4-34.7C115.8,73,184.3,73.1,252.8,73.1z"
            />
            <Path
              fill="#6ea9e0"
              d="M250.1,285.4c-67.7,0-135.5,0.1-203.2,0c-27.9,0-43.8-13-43.9-35.3c-0.1-22.3,15.9-35.4,43.7-35.4
          c136.2-0.1,272.5-0.1,408.7,0c27.2,0,43.5,14.1,42.8,36.3c-0.6,21.4-16.4,34.3-42.7,34.4C387,285.5,318.6,285.4,250.1,285.4z"
            />
            <Path
              fill="#6ea9e0"
              d="M248.9,426.9c-67.7,0-135.5,0.1-203.2,0c-27.9,0-43.8-13-43.9-35.3c-0.1-22.3,15.9-35.4,43.7-35.4
          c136.2-0.1,272.5-0.1,408.7,0c27.2,0,43.5,14.1,42.8,36.3c-0.6,21.4-16.4,34.3-42.7,34.4C385.9,427,317.4,426.9,248.9,426.9z"
            />
          </G>
        </Svg>
      );
    } else if (this.props.name === "add") {
      return (
        <Svg
          height={this.props.height ? this.props.height : "20"}
          width={this.props.width ? this.props.width : "20"}
          viewBox="0 0 42 42"
        >
          <Path
            fill="#ffffff"
            d="M37.059,16H26V4.941C26,2.224,23.718,0,21,0s-5,2.224-5,4.941V16H4.941C2.224,16,0,18.282,0,21
          	s2.224,5,4.941,5H16v11.059C16,39.776,18.282,42,21,42s5-2.224,5-4.941V26h11.059C39.776,26,42,23.718,42,21S39.776,16,37.059,16z"
          />
        </Svg>
      );
    } else if (this.props.name === "delete") {
      return (
        <Svg
          height={this.props.height ? this.props.height : "40"}
          width={this.props.width ? this.props.width : "25"}
          viewBox="0 0 900.5 900.5"
        >
          <G>
            <Path
              fill="#6ea9e0"
              d="M176.415,880.5c0,11.046,8.954,20,20,20h507.67c11.046,0,20-8.954,20-20V232.487h-547.67V880.5L176.415,880.5z
          		 M562.75,342.766h75v436.029h-75V342.766z M412.75,342.766h75v436.029h-75V342.766z M262.75,342.766h75v436.029h-75V342.766z"
            />
            <Path
              fill="#6ea9e0"
              d="M618.825,91.911V20c0-11.046-8.954-20-20-20h-297.15c-11.046,0-20,8.954-20,20v71.911v12.5v12.5H141.874
          		c-11.046,0-20,8.954-20,20v50.576c0,11.045,8.954,20,20,20h34.541h547.67h34.541c11.046,0,20-8.955,20-20v-50.576
          		c0-11.046-8.954-20-20-20H618.825v-12.5V91.911z M543.825,112.799h-187.15v-8.389v-12.5V75h187.15v16.911v12.5V112.799z"
            />
          </G>
        </Svg>
      );
    } else if (this.props.name === "camera") {
      return (
        <Svg
          height={this.props.height ? this.props.height : "30"}
          width={this.props.width ? this.props.width : "30"}
          viewBox="0 0 548.165 548.165"
        >
          <G>
            <G>
              <Path
                d="M526.76,131.045c-14.277-14.274-31.498-21.413-51.675-21.413h-63.953l-14.558-38.826    c-3.618-9.325-10.229-17.368-19.846-24.128c-9.613-6.757-19.462-10.138-29.551-10.138H200.996    c-10.088,0-19.939,3.381-29.552,10.138c-9.613,6.76-16.225,14.803-19.842,24.128l-14.56,38.826H73.089    c-20.179,0-37.401,7.139-51.678,21.413C7.137,145.32,0,162.544,0,182.721v255.813c0,20.178,7.137,37.404,21.411,51.675    c14.277,14.277,31.5,21.416,51.678,21.416h401.989c20.177,0,37.397-7.139,51.675-21.416    c14.273-14.271,21.412-31.497,21.412-51.675V182.721C548.169,162.544,541.03,145.32,526.76,131.045z M364.446,400.993    c-25.029,25.03-55.147,37.548-90.362,37.548s-65.331-12.518-90.362-37.548c-25.031-25.026-37.544-55.151-37.544-90.358    c0-35.218,12.517-65.333,37.544-90.364c25.028-25.031,55.148-37.544,90.362-37.544s65.333,12.516,90.362,37.544    c25.03,25.028,37.545,55.146,37.545,90.364C401.991,345.842,389.477,375.964,364.446,400.993z"
                fill="#6ea9e0"
              />
              <Path
                d="M274.084,228.403c-22.651,0-42.018,8.042-58.102,24.128c-16.084,16.084-24.126,35.448-24.126,58.104    c0,22.647,8.042,42.014,24.126,58.098c16.084,16.081,35.45,24.123,58.102,24.123c22.648,0,42.017-8.042,58.101-24.123    c16.084-16.084,24.127-35.45,24.127-58.098c0-22.655-8.043-42.019-24.127-58.104C316.102,236.446,296.732,228.403,274.084,228.403    z"
                fill="#6ea9e0"
              />
            </G>
          </G>
        </Svg>
      );
    } else if (this.props.name === "right-arrow") {
      return (
        <Svg
          height={this.props.height ? this.props.height : "30"}
          width={this.props.width ? this.props.width : "30"}
          viewBox="0 0 306 306"
        >
          <G>
            <G id="chevron-right">
              <Polygon
                points="94.35,0 58.65,35.7 175.95,153 58.65,270.3 94.35,306 247.35,153   "
                fill="#6ea9e0"
              />
            </G>
          </G>
        </Svg>
      );
    } else if (this.props.name === "sync") {
      return (
        <Svg
          height={this.props.height ? this.props.height : "40"}
          width={this.props.width ? this.props.width : "40"}
          viewBox="0 0 561 561"
        >
          <G>
            <G id="sync">
              <Path
                d="M280.5,76.5V0l-102,102l102,102v-76.5c84.15,0,153,68.85,153,153c0,25.5-7.65,51-17.85,71.4l38.25,38.25    C471.75,357,484.5,321.3,484.5,280.5C484.5,168.3,392.7,76.5,280.5,76.5z M280.5,433.5c-84.15,0-153-68.85-153-153    c0-25.5,7.65-51,17.85-71.4l-38.25-38.25C89.25,204,76.5,239.7,76.5,280.5c0,112.2,91.8,204,204,204V561l102-102l-102-102V433.5z"
                fill="#6ea9e0"
              />
            </G>
          </G>
        </Svg>
      );
    } else if (this.props.name === "cancel") {
      return (
        <Svg
          height={this.props.height ? this.props.height : "12"}
          width={this.props.width ? this.props.width : "12"}
          viewBox="0 0 212.982 212.982"
        >
          <G id="Close">
            <Path
              fill={this.props.color ? this.props.color : "#c9c9c9"}
              d="M131.804,106.491l75.936-75.936c6.99-6.99,6.99-18.323,0-25.312
          		c-6.99-6.99-18.322-6.99-25.312,0l-75.937,75.937L30.554,5.242c-6.99-6.99-18.322-6.99-25.312,0c-6.989,6.99-6.989,18.323,0,25.312
          		l75.937,75.936L5.242,182.427c-6.989,6.99-6.989,18.323,0,25.312c6.99,6.99,18.322,6.99,25.312,0l75.937-75.937l75.937,75.937
          		c6.989,6.99,18.322,6.99,25.312,0c6.99-6.99,6.99-18.322,0-25.312L131.804,106.491z"
            />
          </G>
        </Svg>
      );
    } else if (this.props.name === "picture") {
      return (
        <Svg
          height={this.props.height ? this.props.height : "80"}
          width={this.props.width ? this.props.width : "80"}
          viewBox="0 0 16 16"
        >
          <G id="Close">
            <Path
              d="M0,2v12h16V2H0z M15,13H1V3h14V13z"
              data-original="#030104"
              class="active-path"
              data-old_color="#6ea9e0"
              fill="#6ea9e0"
            />
            <Circle
              cx="12.5"
              cy="5.5"
              r="1.5"
              data-original="#030104"
              class="active-path"
              data-old_color="#6ea9e0"
              fill="#6ea9e0"
            />
            <Path
              d="M10.111,8.021c-0.909,0-0.815,1.936-2.06,1.936c-1.242,0-1.918-4.953-3.463-4.953    c-1.544,0-2.584,7.021-2.584,7.021H14.15C14.15,12.025,11.021,8.021,10.111,8.021z"
              data-original="#030104"
              class="active-path"
              data-old_color="#6ea9e0"
              fill="#6ea9e0"
            />
          </G>
        </Svg>
      );
    } else if (this.props.name === "back-arrow") {
      return (
        <Svg
          height={this.props.height ? this.props.height : "30"}
          width={this.props.width ? this.props.width : "25"}
          viewBox="0 0 492 492"
        >
          <G>
            <G>
              <Path
                d="M464.344,207.418l0.768,0.168H135.888l103.496-103.724c5.068-5.064,7.848-11.924,7.848-19.124    c0-7.2-2.78-14.012-7.848-19.088L223.28,49.538c-5.064-5.064-11.812-7.864-19.008-7.864c-7.2,0-13.952,2.78-19.016,7.844    L7.844,226.914C2.76,231.998-0.02,238.77,0,245.974c-0.02,7.244,2.76,14.02,7.844,19.096l177.412,177.412    c5.064,5.06,11.812,7.844,19.016,7.844c7.196,0,13.944-2.788,19.008-7.844l16.104-16.112c5.068-5.056,7.848-11.808,7.848-19.008    c0-7.196-2.78-13.592-7.848-18.652L134.72,284.406h329.992c14.828,0,27.288-12.78,27.288-27.6v-22.788    C492,219.198,479.172,207.418,464.344,207.418z"
                fill="#6ea9e0"
              />
            </G>
          </G>
        </Svg>
      );
    } else if (this.props.name === "like") {
      return (
        <Svg
          height={this.props.height ? this.props.height : "25"}
          width={this.props.width ? this.props.width : "25"}
          viewBox="0 0 471.701 471.701"
        >
          <G>
            <Path d="M433.601,67.001c-24.7-24.7-57.4-38.2-92.3-38.2s-67.7,13.6-92.4,38.3l-12.9,12.9l-13.1-13.1
              c-24.7-24.7-57.6-38.4-92.5-38.4c-34.8,0-67.6,13.6-92.2,38.2c-24.7,24.7-38.3,57.5-38.2,92.4c0,34.9,13.7,67.6,38.4,92.3
              l187.8,187.8c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-3.9l188.2-187.5c24.7-24.7,38.3-57.5,38.3-92.4
              C471.801,124.501,458.301,91.701,433.601,67.001z M414.401,232.701l-178.7,178l-178.3-178.3c-19.6-19.6-30.4-45.6-30.4-73.3
              s10.7-53.7,30.3-73.2c19.5-19.5,45.5-30.3,73.1-30.3c27.7,0,53.8,10.8,73.4,30.4l22.6,22.6c5.3,5.3,13.8,5.3,19.1,0l22.4-22.4
              c19.6-19.6,45.7-30.4,73.3-30.4c27.6,0,53.6,10.8,73.2,30.3c19.6,19.6,30.3,45.6,30.3,73.3
              C444.801,187.101,434.001,213.101,414.401,232.701z"
              />
          </G>
        </Svg>
      );
    }else if (this.props.name==='heart') {
      return(
        <Svg
        height={this.props.height?this.props.height:'25'}
        width={this.props.width?this.props.width:'25'}

        viewBox={this.props.viewBox?this.props.viewBox:'-5 0 500 450'}>
        <Path fill={this.props.fill?this.props.fill:"#FE0707"} d="M250.1,100.4c20.2-31.6,46-54.5,81.3-65c53.9-16,109.6,7.2,141.4,58.2c28.8,46.4,23.5,93.7,2.6,140.7
        c-16.6,37.1-44.2,66.3-72.5,94.7c-47.9,48.2-98.8,93.2-148.1,140.1c-3.4,3.2-5.2,4.4-9.3,0.5C189.8,416,131,365.5,77.9,309.1
        c-21.2-22.6-40.9-46.5-53.6-75C6.7,194.2-1.2,152.8,18,111.5c21.6-46.7,56.9-77.6,110.4-80.6c45.7-2.6,81.3,18.2,109.6,52.9
        C242.1,88.7,245.6,94.1,250.1,100.4z"/>
        </Svg>
      )
    }else if (this.props.name==='comment') {
      return(
        <Svg
        height={this.props.height?this.props.height:'25'}
        width={this.props.width?this.props.width:'25'}
        viewBox="0 -25 511.99911 511">
          <Path d="m504.292969 415.507812c-.496094-.28125-46.433594-26.347656-79.050781-62.386718 23.070312-36.648438 35.210937-78.714844 35.210937-122.394532 0-61.496093-23.949219-119.3125-67.433594-162.796874-43.484375-43.480469-101.300781-67.429688-162.792969-67.429688-61.496093 0-119.3125 23.949219-162.792968 67.429688-43.484375 43.484374-67.433594 101.300781-67.433594 162.796874 0 61.492188 23.949219 119.308594 67.433594 162.792969 43.480468 43.484375 101.296875 67.429688 162.792968 67.429688 39.25 0 77.6875-9.96875 111.75-28.902344 67.128907 37.320313 155.273438 12.277344 159.140626 11.148437 5.839843-1.707031 10.089843-6.746093 10.78125-12.789062.695312-6.046875-2.300782-11.914062-7.605469-14.898438zm-153.925781-13.6875c-4.878907-3.1875-11.160157-3.28125-16.136719-.246093-31.242188 19.0625-67.207031 29.140625-104.003907 29.140625-110.273437 0-199.992187-89.714844-199.992187-199.988282 0-110.277343 89.71875-199.992187 199.992187-199.992187 110.273438 0 199.988282 89.714844 199.988282 199.992187 0 41.382813-12.535156 81.097657-36.257813 114.847657-3.878906 5.519531-3.632812 12.945312.609375 18.191406 18.769532 23.238281 42.988282 43.035156 62.273438 56.886719-30.085938 3.28125-73.347656 2.789062-106.472656-18.832032zm0 0"/>
          <Path d="m332.714844 282.808594h-204.976563c-8.351562 0-15.117187 6.769531-15.117187 15.117187 0 8.347657 6.765625 15.117188 15.117187 15.117188h204.976563c8.347656 0 15.117187-6.769531 15.117187-15.117188 0-8.347656-6.769531-15.117187-15.117187-15.117187zm0 0"/>
          <Path d="m332.714844 215.609375h-204.976563c-8.351562 0-15.117187 6.769531-15.117187 15.121094 0 8.347656 6.765625 15.117187 15.117187 15.117187h204.976563c8.347656 0 15.117187-6.769531 15.117187-15.117187 0-8.351563-6.769531-15.121094-15.117187-15.121094zm0 0"/>
          <Path d="m332.714844 148.414062h-204.976563c-8.351562 0-15.117187 6.769532-15.117187 15.117188 0 8.351562 6.765625 15.117188 15.117187 15.117188h204.976563c8.347656 0 15.117187-6.765626 15.117187-15.117188 0-8.347656-6.769531-15.117188-15.117187-15.117188zm0 0"/>
        </Svg>
      )
    }else if (this.props.name==='message') {
      return(
        <Svg
        height={this.props.height?this.props.height:'25'}
        width={this.props.width?this.props.width:'25'}
        viewBox="0 0 469.038 469.038">
          <G>
            <Path d="M465.023,4.079c-3.9-3.9-9.9-5-14.9-2.8l-442,193.7c-4.7,2.1-7.8,6.6-8.1,11.7s2.4,9.9,6.8,12.4l154.1,87.4l91.5,155.7
              c2.4,4.1,6.9,6.7,11.6,6.7c0.3,0,0.5,0,0.8,0c5.1-0.3,9.5-3.4,11.6-8.1l191.5-441.8C470.123,13.879,469.023,7.979,465.023,4.079z
              M394.723,54.979l-226.2,224.7l-124.9-70.8L394.723,54.979z M262.223,425.579l-74.5-126.9l227.5-226L262.223,425.579z"/>
          </G>
        </Svg>
      )
    }else if (this.props.name==='bookmark') {
      return(
        <Svg
        height={this.props.height?this.props.height:'25'}
        width={this.props.width?this.props.width:'25'}
        viewBox="0 0 24 24">
          <Path style="line-height:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;block-progression:tb;isolation:auto;mix-blend-mode:normal" d="M 6.0097656 2 C 4.9143111 2 4.0097656 2.9025988 4.0097656 3.9980469 L 4 22 L 12 19 L 20 22 L 20 20.556641 L 20 4 C 20 2.9069372 19.093063 2 18 2 L 6.0097656 2 z M 6.0097656 4 L 18 4 L 18 19.113281 L 12 16.863281 L 6.0019531 19.113281 L 6.0097656 4 z" font-weight="400" font-family="sans-serif" white-space="normal" overflow="visible"/>
        </Svg>
      )
    }else if (this.props.name==='trophy') {
      return(
        <Svg
        height={this.props.height?this.props.height:'30'}
        width={this.props.width?this.props.width:'30'}
        viewBox="0 0 500 500"         >
        <G>
        <Path fill={this.props.fill} d="M251.5,48.8c39.1,0,78.1,0.1,117.2-0.1c3.6,0,4.7,0.8,4.5,4.5c-0.3,6.3,0.1,12.7-0.2,19c-0.1,3.2,0.8,4,4,4
        c25.5-0.1,51.1,0,76.6-0.2c3.8,0,4.8,1,4.7,4.8c0,21.8,0.1,43.6-5.2,65c-7,28.2-21.8,50.1-48.9,62.5c-2.7,1.2-5.1,2.8-7.8,4.1
        c-13.4,6.2-19.8,17.1-21.5,31.4c-1.8,15-13.4,22.9-27.8,18.6c-3.6-1.1-3.4,1.2-4.1,2.9c-7.4,19.7-16.2,38.6-27.7,56.2
        c-6.6,10.1-14.1,19.5-23.1,27.7c-28.2,25.5-58.9,24.9-86.2-1.6c-18.4-17.9-30.6-39.8-41-62.9c-3-6.6-5.6-13.5-8.2-20.3
        c-0.9-2.3-1.6-2.7-4.1-1.9c-13.9,4.3-26.1-3.6-27.8-18.2c-1.7-14.9-8.5-26-22.4-32.3c-2.2-1-4.3-2.4-6.5-3.4
        c-28.9-13.2-43.8-36.8-50.3-67c-4.5-20.7-4.1-41.7-4.2-62.7c0-3.8,2.4-2.7,4.2-2.7c25.9,0,51.7-0.2,77.6,0.1c4.4,0,5.8-1.1,5.5-5.5
        c-0.4-5.8,0.2-11.7-0.2-17.6c-0.2-3.7,0.9-4.5,4.5-4.5C172.7,48.9,212.1,48.8,251.5,48.8z M168.9,149.5c0.8,2.2,2.3,2.9,3.5,3.9
        c12.5,10.9,25,21.9,37.6,32.6c2.7,2.3,3.4,4.3,2.5,7.9c-4.3,17.6-8.3,35.4-12.4,53.2c2.1,0,3.3-1.3,4.6-2.1
        c14.5-8.7,29-17.4,43.4-26.3c2.6-1.6,4.4-1.5,6.9,0.1c14.5,9,29.2,17.7,43.8,26.5c1.1,0.7,2.1,2,4,1.6
        c-4.1-17.8-8.1-35.5-12.4-53.2c-0.9-3.5-0.1-5.5,2.6-7.8c12.5-10.6,24.9-21.5,37.3-32.2c1.3-1.1,2.5-2.3,4.4-4.1
        c-19-1.7-37.1-3.3-55.2-4.7c-3.6-0.3-5.4-1.5-6.6-4.9c-2.2-6.1-4.9-12-7.5-18c-4.6-10.7-9.1-21.4-13.9-32.7c-1,2.1-1.7,3.5-2.3,5
        c-6.6,15.6-13.2,31.1-19.7,46.7c-1.1,2.6-2.4,3.6-5.3,3.9C205.9,146.2,187.6,147.8,168.9,149.5z M133.7,180.9
        c0.2-0.7,0.4-0.8,0.3-1c-3-19.7-6.1-39.5-7.2-59.4c-0.2-2.7-1.8-2.6-3.7-2.6c-9.4,0-18.9,0-28.3,0c-11,0-11.1,0-9.9,11
        c1.8,16.5,7.1,31,23.4,38.9C116.8,172,125.4,175.6,133.7,180.9z M366,181c8.8-5.5,18-9.1,26.7-13.7c10.6-5.6,17.1-14.2,20-25.7
        c1.7-6.6,2.4-13.4,3.3-20.2c0.4-2.8-0.6-3.5-3.3-3.5c-11.7,0.1-23.4,0.2-35.1,0c-3.6-0.1-4.2,1.4-4.4,4.5
        c-0.7,9.1-1.6,18.1-2.7,27.2C369.1,159.8,367.5,170,366,181z"/>
        <Path fill={this.props.fill} d="M208.4,374c28,19.2,55.2,19.3,83.1,0c-2.6,17.2,7.6,25.3,19.6,32.3c8.8,5.1,18.2,9.3,26.5,15.3
        c8.9,6.5,15.2,14.5,16.4,25.9c0.4,3.2-0.5,3.8-3.5,3.8c-67-0.1-134-0.1-201.1,0c-3,0-3.9-0.6-3.5-3.8c1.1-8.6,4.9-15.7,11.2-21.6
        c5.6-5.2,12.3-9,19-12.7c6.3-3.4,12.7-6.6,18.6-10.6C204.4,396.2,210.7,387.9,208.4,374z"/>
        </G>
        </Svg>
      )
    }else if (this.props.name==='notification') {
      return(
        <Svg
        height={this.props.height?this.props.height:'30'}
        width={this.props.width?this.props.width:'30'}
        viewBox="0 0 500 500"         >
        <G>
        <Path fill={this.props.fill} d="M160.6,23.5c8.1,7.5,9.2,8.3,20.1,8.2c5.8,0,11.5,0.1,17.3,0.3c31.5,1.1,60.7,9.1,85.2,29.9c21.9,18.6,37.2,42.3,51.3,66.9
        c14.8,26,27.5,53.1,40.1,80.1c8.9,19.1,22.2,33,42.5,39.8c5.2,1.7,10.2,4,15.2,6.3c27.1,12.4,39.5,42.3,28.8,69.9
        c-10.6,27.1-29.6,48-51.3,66.4c-70.8,60.1-153.2,91.6-245.8,95.9c-30.3,1.4-60.3-1.5-88.7-13.7c-32.3-13.9-44.1-46.8-28.1-78.3
        c2.8-5.6,5.8-11.2,8.8-16.8c7.5-14.1,10.1-28.9,6.7-44.6c-2.3-10.7-4.9-21.4-7.5-32c-9.3-38.1-18.7-76.2-19.8-115.6
        c-0.8-26.8,4.1-52.4,18.2-75.7c10.8-17.8,25.2-32.4,41.1-45.6c6.8-5.7,14.2-11.7,15.4-20.7c2-15.1,7.3-27.8,23.4-31.6
        C146.1,11.5,160.6,23.5,160.6,23.5z M168.7,448.7c70.3-2.1,141.2-27.2,203.6-75.7c20-15.5,38.3-32.9,51.2-55.1
        c6.6-11.3,4.8-17-6.8-23.2c-2.6-1.4-5.4-2.6-8.3-3.6c-12.6-4.2-25.7-5.5-38.9-5.6c-46.8-0.2-91.2,11.9-134.6,27.8
        c-40.1,14.7-78.4,33-112.1,59.6c-15.3,12.1-29.7,25.4-38.6,43.2c-7,14-4.8,19.1,9.8,23.9C115.5,447.3,137.6,448.6,168.7,448.7z"/>
        <G>
        <Path fill={this.props.fill} d="M168.7,412c-13.1-0.2-25.5-2.6-37-9.3c-5.5-3.2-7-5.5-0.8-10.3c34.7-26.6,73.7-45,114.5-60c1.8-0.7,3.6-1.3,5.4-1.9
        c12.9-4.5,14.7-3.2,14.1,10.9c-0.6,14.7-7.6,26.7-17.4,37.1C228.3,399,196.8,412.3,168.7,412z"/>
        </G>
        </G>
        </Svg>
      )
    }else if (this.props.name==='location') {
      return(
        <Svg
          height={this.props.height?this.props.height:'30'}
          width={this.props.width?this.props.width:'30'}
          viewBox="0 0 450 450"         >
          <Path fill={this.props.fill? this.props.fill : "#010101"} d="M287.3,9.3c73.4,14.2,132.7,74.3,145.4,148.2c9.2,53.5-3.5,101.7-35.6,145.5c-24.1,32.9-46.8,66.7-70.1,100.2
          c-18.7,26.8-37.3,53.6-56,80.3c-11.4,16.4-29,16.4-40.3,0.2c-40.4-58-80.5-116.2-121.3-174c-11.4-16.2-22.9-32.1-30.4-50.6
          C36.5,154.3,98.9,35.2,209.5,10.4c7.2-1.6,14.3-3.1,21.6-3.7C240,6,243,6,257,6C270,6,287.3,9.3,287.3,9.3z M247.8,273.2
          c46.1-0.1,83.3-37.3,83.3-83.2c0-45.9-37.3-83-83.4-83c-46.3,0-83.8,37.3-83.6,83.3C164.4,236.2,201.8,273.3,247.8,273.2z"/>
          <Path fill="#FDFDFD" d="M247.8,273.2c-46,0.1-83.4-36.9-83.7-82.9c-0.2-46,37.3-83.4,83.6-83.3c46.1,0,83.4,37.1,83.4,83
          C331.2,235.9,293.9,273.1,247.8,273.2z"/>
          </Svg>
        )
      }else if (this.props.name==='camera') {
        return(
          <Svg
          height={this.props.height?this.props.height:'30'}
          width={this.props.width?this.props.width:'30'}
          viewBox="0 0 500 500"         >
          <Path fill={this.props.fillwhitecolor?this.props.fillwhitecolor:"#3E61E5"} d="M248.9,436.3c-55.8,0-111.6,0-167.4,0c-36.9,0-64.4-27-64.5-63.8c-0.2-65.2-0.2-130.5,0-195.7
          c0.1-36.5,27.7-63.6,64.2-63.7c6,0,12-0.1,18.1,0c2.1,0,3-0.5,3.4-2.9c6.4-33.9,30.5-53.8,65.1-53.8c54.5,0,109,0.4,163.5-0.1
          c36.1-0.3,61.5,25.3,65,54c0.4,3,1.9,2.7,3.9,2.8c8.8,0.1,17.6-0.7,26.3,0.5c32.7,4.5,55.3,30.2,55.4,63.3
          c0.2,65.2,0.2,130.5,0,195.7c-0.1,36.8-27.7,63.8-64.6,63.8C361.1,436.3,305,436.3,248.9,436.3z M249.3,424.6
          c55.8,0,111.6,0,167.4,0c31.1,0,53.2-21.9,53.2-53.1c0.1-64.6,0.1-129.2,0-193.8c0-30.8-22.2-52.8-53-52.9
          c-9.4,0-18.9-0.1-28.3,0.1c-2.7,0-3.7-0.7-3.7-3.5c0.1-3.7-0.1-7.5-0.8-11.2c-5-25.6-25.3-41.9-52.3-42c-55-0.1-110,0-165,0
          c-6,0-12,0.7-17.8,2.5c-21.4,6.7-35.2,25.7-35.2,49.1c0,4-1,5.3-5.1,5.1c-8.9-0.3-17.9-0.1-26.8-0.1c-30.8,0.1-53.1,22-53.1,52.8
          c-0.1,64.8-0.1,129.5,0,194.3c0,30.8,22.2,52.7,53.1,52.7C137.7,424.6,193.5,424.6,249.3,424.6z"/>
          <Path fill={this.props.fillprimarycolor?this.props.fillprimarycolor:"#FEFEFE"} d="M249.3,424.6c-55.8,0-111.6,0-167.4,0c-30.9,0-53-21.9-53.1-52.7c-0.1-64.8-0.1-129.5,0-194.3
          c0-30.7,22.3-52.7,53.1-52.8c8.9,0,17.9-0.2,26.8,0.1c4.1,0.1,5.1-1.1,5.1-5.1c0.1-23.3,13.9-42.3,35.2-49.1
          c5.8-1.8,11.8-2.5,17.8-2.5c55,0,110-0.1,165,0c27,0,47.3,16.4,52.3,42c0.7,3.6,0.8,7.4,0.8,11.2c0,2.9,1,3.6,3.7,3.5
          c9.4-0.1,18.9-0.1,28.3-0.1c30.8,0.1,53,22.1,53,52.9c0.1,64.6,0.1,129.2,0,193.8c0,31.2-22.1,53.1-53.2,53.1
          C360.9,424.6,305.1,424.6,249.3,424.6z M370.1,262.2c0-65.6-53.2-119.2-117.5-120.1c-64.8-1-122.2,50.2-122.5,120.1
          c-0.3,65.7,53.6,120,118.6,120C316.7,382.2,370.1,329.4,370.1,262.2z"/>
          <Path fill={this.props.fillwhitecolor?this.props.fillwhitecolor:"#3E61E5"} d="M370.1,262.2c0,67.2-53.4,120-121.4,120c-65,0-118.8-54.3-118.6-120c0.3-69.9,57.6-121,122.5-120.1
          C316.9,143.1,370.1,196.7,370.1,262.2z M250.3,370.3c59.8,0,108-48,108.1-107.7c0.2-59.3-48.1-108.4-106.5-108.4
          c-61.4,0-109.7,47.6-109.8,108.1C142,322.1,190.2,370.3,250.3,370.3z"/>
          <Path fill={this.props.fillprimarycolor?this.props.fillprimarycolor:"#FDFDFE"} d="M250.3,370.3c-60.1,0-108.3-48.1-108.2-108.1c0.1-60.5,48.4-108.1,109.8-108.1c58.4,0,106.7,49.2,106.5,108.4
          C358.2,322.3,310.1,370.3,250.3,370.3z M250.4,199.8c-34.2-0.1-61.9,27.5-61.9,61.6c0,33.7,27.5,61.5,60.9,61.6
          c34.7,0.1,62.3-26.9,62.6-61.4C312.3,227.8,284.5,199.9,250.4,199.8z"/>
          <Path fill={this.props.fillwhitecolor?this.props.fillwhitecolor:"#3E61E5"} d="M250.4,199.8c34.1,0.1,61.9,28,61.6,61.9c-0.3,34.4-27.9,61.5-62.6,61.4c-33.4-0.1-60.9-28-60.9-61.6
          C188.5,227.3,216.2,199.7,250.4,199.8z M300,261.9c0.3-27.6-21.8-50.1-49.4-50.4c-27.4-0.3-50.1,22-50.4,49.6
          c-0.3,26.8,22.1,49.8,48.9,50.1C277.1,311.6,299.7,289.8,300,261.9z"/>
          <Path fill={this.props.fillprimarycolor?this.props.fillprimarycolor:"#FDFDFE"} d="M300,261.9c-0.3,27.9-22.9,49.7-50.9,49.4c-26.7-0.3-49.2-23.3-48.9-50.1c0.3-27.6,23-49.9,50.4-49.6
          C278.3,211.8,300.4,234.3,300,261.9z"/>
          </Svg>
        )
      }else if (this.props.name==='plus') {
        return(
          <Svg
            height={this.props.height?this.props.height:'30'}
            width={this.props.width?this.props.width:'30'}
            viewBox="0 0 31.444 31.444">
            <G>
              <Path d="M1.119,16.841c-0.619,0-1.111-0.508-1.111-1.127c0-0.619,0.492-1.111,1.111-1.111h13.475V1.127  C14.595,0.508,15.103,0,15.722,0c0.619,0,1.111,0.508,1.111,1.127v13.476h13.475c0.619,0,1.127,0.492,1.127,1.111  c0,0.619-0.508,1.127-1.127,1.127H16.833v13.476c0,0.619-0.492,1.127-1.111,1.127c-0.619,0-1.127-0.508-1.127-1.127V16.841H1.119z" data-original="#1E201D" class="active-path" data-old_color="#1E201D" fill="#FFFFFF"/>
            </G> 
            </Svg>
          )
        }else if (this.props.name==='plus_round') {
          return(
            <Svg
              height={this.props.height?this.props.height:'30'}
              width={this.props.width?this.props.width:'30'}
              viewBox="0 0 52 52">
              <G>
                <Path d="M26,0C11.664,0,0,11.663,0,26s11.664,26,26,26s26-11.663,26-26S40.336,0,26,0z M38.5,28H28v11c0,1.104-0.896,2-2,2  s-2-0.896-2-2V28H13.5c-1.104,0-2-0.896-2-2s0.896-2,2-2H24V14c0-1.104,0.896-2,2-2s2,0.896,2,2v10h10.5c1.104,0,2,0.896,2,2  S39.604,28,38.5,28z" data-original="#000000" class="active-path" data-old_color="#0035FF" fill="#0099FF"/>
              </G> 
              </Svg>
            )
          }
  }
}