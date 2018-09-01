import React from 'react';
import {
  AppRegistry,
  asset,
  View,
  Sphere,
  Cylinder,
  AmbientLight, 
  DirectionalLight,
Model  
} from 'react-vr';

const Tree = props=>{
  return (
    <View style={props.style}>
     <Sphere
     lit
     style={{color:'green',transform:[{translateY:0.8}]}}
     />  
     <Cylinder
     lit
     style={{color:'brown'}}
     radiusBottom={0.05}
     radiusTop={0.05}
     />
    </View>
  )
}

export default class app extends React.Component {
  render() {
    return (
      <View>
        <Tree style={{transform:[{translateZ:-3}]}}/>
        <Tree style={{transform:[{translateZ:-3},{translateX:1.1}]}}/>
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
