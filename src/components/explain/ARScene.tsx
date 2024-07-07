// ARScene.tsx
import 'aframe';
import 'mind-ar/dist/mindar-image.prod';
import 'mind-ar/dist/mindar-image-aframe.prod';
import 'aframe-vrm/lib/aframe-vrm';

import '../../index.css'

const ARScene: React.FC = () => (
  <div className="container">
    <a-scene mindar-image="imageTargetSrc: ./assets/explain/targets.mind;" color-space="sRGB" renderer="colorManagement: true, physicallyCorrectLights" vr-mode-ui="enabled: false" device-orientation-permission-ui="enabled: false">
      <a-assets>
        <a-asset-item id="vrm-model" src="assets/xrmodel/Zundamon_human_vrm.vrm"></a-asset-item>
      </a-assets>
        <a-camera position="0 0 0" look-controls="enabled: false" cursor="fuse: false; rayOrigin: mouse;" raycaster="far: 10000; objects: .clickable"></a-camera>
          <a-entity mindar-image-target="targetIndex: 0">
            <a-entity vrm="#vrm-model" vrm-anim="" rotation="0 180 0"></a-entity>
            <a-plane id="Button1" class="clickable" color="white" opaciy="0.5" position="0.4 1.0 0" height="0.2" width="0.5" rotation="0 0 0"></a-plane>
            <a-text id="word" value="workshop" position="0.15 1.0 0" height="0.8" width="2.0" rotation="0 0 0" color="#000000"></a-text>
            <a-plane id="Button2" class="clickable" color="white" opaciy="0.5" position="0.4 0.5 0" height="0.2" width="0.5" rotation="0 0 0"></a-plane>
            <a-text id="word" value="RD" position="0.15 0.5 0" height="0.8" width="2.0" rotation="0 0 0" color="#000000"></a-text>
            <a-plane id="Button3" class="clickable" color="white" opaciy="0.5" position="0.4 0.0 0" height="0.2" width="0.5" rotation="0 0 0"></a-plane>
            <a-text id="word" value="Kambe-Lab" position="0.15 0.0 0" height="0.8" width="2.0" rotation="0 0 0" color="#000000"></a-text>
          </a-entity>

          <a-entity cursor="rayOrigin: mouse" id="cursor" fuse="true" fuse-timeout="1000" design="ring"   > </a-entity>
      </a-scene>
      <video></video>
    </div>
);

export default ARScene