import 'aframe';

const Camera = () => (
    <a-camera
  position="0 1.6 0"
  look-controls="enabled: false"
  cursor="fuse: false; rayOrigin: mouse;"
  raycaster="far: 10000; objects: .clickable"
  width="1"
  height="1"
></a-camera>
  );
  
  export default Camera;