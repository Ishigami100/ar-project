import 'aframe';

const Cursor = () => (
    <a-entity cursor="rayOrigin: mouse" id="cursor" fuse="true" fuse-timeout="1000" design="ring"></a-entity>
  );
  
  export default Cursor;
  