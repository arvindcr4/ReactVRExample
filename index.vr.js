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
VrButton
} from 'react-vr';

export default class app extends React.Component {
  render() {
    return (
      <View>
      <Pano source={asset('chess-world.jpg')} />
      <VrButton
      onClick={()=>{console.log('clicked')}}
      onLongClick={()=>console.log('clicked long')}
      onButtonPress={()=>{console.log('Pressed')}}
      onButtonRelease={()=>{console.log('released')}}
      style={{
        layoutOrigin:[0.5,0.5],
        transform:[{translate:[0,0,-1]}]
      }}
      >
      <Text>Update</Text>

      </VrButton>
        
         
        
        

      </View>
    );
  }
};

AppRegistry.registerComponent('app', () => app);
