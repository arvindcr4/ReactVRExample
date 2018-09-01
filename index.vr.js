import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  PointLight, 
  SpotLight, 
  AmbientLight, 
  DirectionalLight,
  Sphere, 
  Box, 
  Cylinder,
  Plane
} from 'react-vr';

export default class app extends React.Component {
  render() {
    return (
      <View>
        <PointLight
                style={{
          transform:[{translateZ:-5}]
        }}
        distance={2}
        decay={2}
        />
        <Sphere
          lit
          style={{
            color: 'yellow',
            transform: [{ translate: [-1.5, 0, -4] }]
          }}
          widthSegments={20}
          heightSegments={20}
        />
        <Box
          lit
          style={{
            color: 'blue',
            transform: [{ translate: [0, 0, -6] }]
          }}
        />
        <Cylinder
          lit
          radiusTop={0}
          segments={20}
          style={{
            color: 'red',
            transform: [{ translate: [1.5, 0, -4] }]
          }}
        />
        

      </View>
    );
  }
};

AppRegistry.registerComponent('app', () => app);
