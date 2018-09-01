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
        <Sphere
        style={{
          color:'lightblue',
          transform:[{translateZ:-2}]}}
        lit
        texture={asset('earth.jpg')}
        heightSegments={20}
        widthSegments={20}
        radius={0.2}
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
