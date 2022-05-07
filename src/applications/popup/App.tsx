import React, { ReactElement } from 'react';
import PopupNavigationPage from '../../pages/popup/popup-navigation/popup-navigation';
import './App.scss';

export default function App(): ReactElement {
  return (
    <main className="app">
      <h1 className="app-title">ChromeExtension App</h1>

      <PopupNavigationPage />
    </main>
  );
}
