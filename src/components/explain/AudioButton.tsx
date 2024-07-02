import React, { useRef, useEffect } from 'react';

interface AudioButtonProps {
  id: string;
  position: string;
  text: string;
  audioSrc: string;
}

const AudioButton: React.FC<AudioButtonProps> = ({ id, position, text, audioSrc }) => {
  const buttonRef = useRef<HTMLElement | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const button = buttonRef.current;
    const audio = audioRef.current;

    const handleButtonClick = () => {
      console.log(`${text} button click`);
      audio?.play().catch(error => console.error('Audio playback failed', error));
    };

    button?.addEventListener('click', handleButtonClick);

    return () => {
      button?.removeEventListener('click', handleButtonClick);
    };
  }, [text]);

  return (
    <>
      <a-plane ref={buttonRef} id={id} className="clickable" color="white" opacity="0.5" position={position} height="0.2" width="0.5" rotation="0 0 0"></a-plane>
      <a-text value={text} position={`0.15 ${position.split(' ')[1]} 0`} height="0.8" width="2.0" rotation="0 0 0" color="#000000"></a-text>
      <audio ref={audioRef} src={audioSrc}></audio>
    </>
  );
};

export default AudioButton;