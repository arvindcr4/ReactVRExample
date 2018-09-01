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
        <Box
        wireframe
        dimWidth={0.5}
        dimHeight={0.5}
        dimDepth={0.5}
        style={{
          color:'lightblue',
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
