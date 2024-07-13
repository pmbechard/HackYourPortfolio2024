import React from 'react';
import ReactDOM from 'react-dom/client';
import { Canvas } from '@react-three/fiber';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Canvas>
    <App />
  </Canvas>
);
