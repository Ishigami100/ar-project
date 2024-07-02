// Loading.tsx
import React from 'react';

const Loading: React.FC = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#333'
    }}>
      読み込み中...
    </div>
  );
};

export default Loading;