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
      springValue:new Animated.Value(-1),
    }
  }
  componentDidMount(){
    Animated.timing(
      this.state.fadeIn,
      {toValue:1,duration:3000,easing:(x)=>x}
    ).start();
  }
  
  render() {
    return (
      <View>
        <Animated.Image
      style={{
        opacity:this.state.fadeIn,
        layoutOrigin:[0.5,0.5],
        transform:[{translate:[0,0,-1]}],
        height:0.5,
        width:0.5
      }}
      source={asset('mountain.jpg')}
      />
  <DirectionalLight
  style={{
    transform:[{translate:[-200,700,0]}]
  }}
  />

      </View>
    );
  }
};

AppRegistry.registerComponent('app', () => app);
