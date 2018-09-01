import React from 'react';
import {
  AppRegistry,
  asset,
  View,
  Pano,
  Sphere,
  Cylinder,
  AmbientLight, 
  DirectionalLight,
Model  
} from 'react-vr';

export default class app extends React.Component {
  render() {
    return (
      <View>
      <Pano source={asset('chess-world.jpg')} />
      <View
        style={{
          width: 2,
          height: 2,
          backgroundColor: '#FFF',
          layoutOrigin: [0.5, 0.5],
          transform: [{ translate: [0, 0, -3] }]
          
        }}
        onInput={(event)=>{console.log('type',event.nativeEvent.inputEvent.type);
      console.log('eventType',event.nativeEvent.inputEvent.eventType);
      }}      
        
        /> 
        
        

      </View>
    );
  }
};

AppRegistry.registerComponent('app', () => app);
