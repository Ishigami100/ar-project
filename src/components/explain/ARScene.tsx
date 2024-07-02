// ARScene.tsx
import React, { Suspense } from 'react';
import 'aframe';
import 'mind-ar/dist/mindar-image.prod';
import 'mind-ar/dist/mindar-image-aframe.prod';
import 'aframe-vrm/lib/aframe-vrm';
import Camera from './Camera';
import MarkerEntity from './MarkerEntity';
import Cursor from './Cursor';
import ErrorBoundary from './ErrorBoundary';
import Loading from './Loading';

const ARScene: React.FC = () => (
  <ErrorBoundary>
    <Suspense fallback={<Loading />}>
    <a-scene
      className="ar-scene"
      embedded
      mindar-image="imageTargetSrc: ./assets/explain/targets.mind;"
      color-space="sRGB"
      renderer="colorManagement: true, physicallyCorrectLights"
      vr-mode-ui="enabled: false"
      device-orientation-permission-ui="enabled: false"
    >
        <Camera />
        <MarkerEntity />
        <Cursor />
      </a-scene>
    </Suspense>
  </ErrorBoundary>
);

export default ARScene