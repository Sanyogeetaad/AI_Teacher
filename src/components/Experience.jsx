"use client";
import {Canvas} from '@react-three/fiber';
import {OrbitControls,Gltf,Environment} from "@react-three/drei";
import { Teacher } from './Teacher';
import { degToRad } from 'three/src/math/MathUtils';
export const Experience=()=>{
return(
    <>
    <Canvas camera={{
        position:[0,0,0.001],

    }}>
        <OrbitControls/>
        <Environment preset="sunset"/>
        <ambientLight intensity={0.8} color="pink"/>
        <Teacher teacher={"Nanami"} position={[-1,-1.7,-2]} scale={1.5} rotation-y={degToRad(20)}/>
        <Gltf src="/models/classroom_default.glb" position={[0.2,-1.7,-2]}/>

    </Canvas>

    </>
)
};

const CameraManager=()=>{
    return <CameraControl
    minZoom={1}
    maxZoom={3}
    polarRotateSpeed={-.3}
    azimuthRotateSpeed={-.3}
    mouseButtons={{
        left:1,
        wheel:16,
    }}
    touches={{
        one:32,
        two:512,
    }}/>
}
export default Experience;