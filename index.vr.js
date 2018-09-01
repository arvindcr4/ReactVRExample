import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  PointLight, 
  Sphere, 
  Box, 
  Cylinder,
  Plane
} from 'react-vr';

export default class app extends React.Component {
  render() {
    return (
      <View>
        <Plane
        dimWidth={0.5}
        dimHeight={0.5}
        wireframe
        style={{
          transform:[{translateZ:-2}]}}
          
        />
        <PointLight
        intensity={1}
        style={{
          transform:[{translate:[0,700,700]}]
        }}
        />
      </View>
    );
  }
};

AppRegistry.registerComponent('app', () => app);
