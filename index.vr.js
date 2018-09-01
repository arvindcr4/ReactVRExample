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
        style={{transform:[{translateZ:-2}]}}

        />
        <PointLight
        intensity={1}
        style={{
          transform:[{translate}]
        }}
        />
      </View>
    );
  }
};

AppRegistry.registerComponent('app', () => app);
