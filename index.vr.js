import React from 'react';
import {
  AppRegistry,
  asset,
  View,
  AmbientLight, 
  DirectionalLight,
Model  
} from 'react-vr';

export default class app extends React.Component {
  render() {
    return (
      <View>
        <Model
        source={{obj:asset('astronaut.obj')
        }}
        style={{
          color:'orange',
          transform:[{translate:[0,-1,-2]}]
        }}
        lit
        texture={asset('chess-world.jpg')}
        />

        
        <DirectionalLight
                style={{
          transform:[{translateX:-1000}]
        }}
        distance={2}
        decay={2}
        />
        <AmbientLight intensity={0.4}/>
        
        
        

      </View>
    );
  }
};

AppRegistry.registerComponent('app', () => app);
