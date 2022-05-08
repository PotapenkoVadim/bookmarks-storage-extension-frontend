import React, { ReactElement } from 'react';
import { configuration } from '../../configuration/configuration';
import PopupNavigationPage from '../../pages/popup/popup-navigation/popup-navigation';
import './App.scss';

export default function App(): ReactElement {
  return (
    <main className="app">
      <h1 className="app-title">
        {configuration.appName}
      </h1>

      <PopupNavigationPage />

      <span className="app-version">
        v{configuration.version}
      </span>

      <span className="app-tape" />
    </main>
  );
}
