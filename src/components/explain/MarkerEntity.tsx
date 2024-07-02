import React from 'react';
import AudioButton from './AudioButton';

const MarkerEntity: React.FC = () => (
  <a-entity mindar-image-target="targetIndex: 0">
    <a-entity vrm="./assets/xrmodel/ずんだもんVRM.vrm" vrm-anim="" rotation="0 180 0"></a-entity>
    <AudioButton id="Button1" position="0.4 1.0 0" text="workshop" audioSrc="./assets/explain/audio/workshop.wav" />
    <AudioButton id="Button2" position="0.4 0.5 0" text="RD" audioSrc="./assets/explain/audio/rd.wav" />
    <AudioButton id="Button3" position="0.4 0.0 0" text="Kambe-Lab" audioSrc="./assets/explain/audio/kambe-lab.wav" />
  </a-entity>
);

export default MarkerEntity;