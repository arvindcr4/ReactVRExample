import React from 'react';
import {
  AppRegistry,
  asset,
  View,
  Pano,
  Text,
  Sphere,
  Cylinder,
  AmbientLight, 
  DirectionalLight,
Animated,
AnimatedBox
} from 'react-vr';

export default class app extends React.Component {
  constructor(props){
    super(props);
    this.state={
      fadeIn:new Animated.Value(0),
      spring:new Animated.Value(-1)
    }
  }
  componentDidMount(){
    Animated.parallel([
      Animated.timing(this.state.fadeIn,{toValue:1,duration:3000}),
      Animated.spring(this.state.spring, 
      {toValue:0,tension:1,friction:2}),
      {velocity:0.01,deceleration:0.9985}
    ]).start();
  }
  
  render() {
    return (
      <View>
        {/* <Animated.View
          style={{
            layoutOrigin: [0.5, 0.5],
            transform: [
              { translate: [0, 0, -1] }
              // { scale: this.state.springValue }
            ],
            height: 0.25,
            width: 0.25,
            backgroundColor: '#335',
            opacity: this.state.fadeIn
          }}
        >
          <Text>hello</Text>
        </Animated.View> */}

        {/* <Animated.Text
          style={{
            layoutOrigin: [0.5, 0.5],
            transform: [
              { translate: [0, 0, -1] },
              { scale: this.state.springValue }
              // { rotateZ: this.state.springValue }
            ]
          }}
        >
          hello
        </Animated.Text> */}

        {/* parallel/sequence example */}
        <Animated.Image
          style={{
            layoutOrigin: [0.5, 0.5],
            transform: [
              { translateZ: -1 },
              { translateY: this.state.springValue }
              // { translateY: this.state.decayValue }
            ],
            height: 0.5,
            width: 0.5,
            opacity: this.state.fadeIn
          }}
          source={asset('mountain.jpg')}
        />
        <DirectionalLight
          style={{
            transform: [{ translate: [-200, 700, 0] }]
          }}
        />
        <AnimatedBox
          lit
          dimWidth={2}
          dimDepth={2}
          dimHeight={1}
          style={{
            transform: [
              { translate: [0, 0, -10] },
              { rotateY: this.state.boxRotation },
              { rotateX: -40 }
            ]
          }}
        />
      </View>
    );
  }
}

AppRegistry.registerComponent('app', () => app);
