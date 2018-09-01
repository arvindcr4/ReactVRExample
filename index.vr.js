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
Animated
} from 'react-vr';

export default class app extends React.Component {
  constructor(props){
    super(props);
    this.state={
      decayValue:new Animated.Value(-3.5),
    }
  }
  componentDidMount(){
    Animated.decay(
      this.state.decayValue,
      {velocity:0.01,deceleration:0.9985}
    ).start();
  }
  
  render() {
    return (
      <View>
        <Animated.Image
      style={{
        opacity:this.state.fadeIn,
        layoutOrigin:[0.5,0.5],
        transform:[{translate:[0,this.state.decayValue,-1]}],
        height:0.5,
        width:0.5
      }}
      source={asset('mountain.jpg')}
      />
  <DirectionalLight
  style={{
    transform:[
      {translateZ:-1},
      {translateY:this.state.springValue}
    ],
    height:0.5,
  }}
  />

      </View>
    );
  }
};

AppRegistry.registerComponent('app', () => app);
