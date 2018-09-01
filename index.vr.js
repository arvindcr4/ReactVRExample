import React from 'react';
import {
  AppRegistry,
  asset,
  View,
  Sphere,
  AmbientLight, 
  DirectionalLight,
Model  
} from 'react-vr';

const Tree = props=>{
  return (
    <View>
     <Sphere
     lit
     style={{color:'green',transform:[{translateZ:-2}]}}
     />  
    </View>
  )
}

export default class app extends React.Component {
  render() {
    return (
      <View>
        <Tree/>
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
