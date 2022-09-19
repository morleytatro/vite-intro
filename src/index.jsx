import React from 'react';
import { createRoot } from 'react-dom/client';

import './style.css';

const root = createRoot(document.querySelector('#app'));

root.render(
  <React.StrictMode>
    <div className="bg-blue-500 text-white p-4">
      Hello reloaded!
    </div>
  </React.StrictMode>
);