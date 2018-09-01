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
        <Cylinder
        wireframe
        segments={20}
        dimHeight={0.6}
        style={{
          transform:[{translateZ:-2}]}}
          radiusBottom={0.35}
          radiusTop={0}
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
