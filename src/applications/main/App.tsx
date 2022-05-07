import React, { ReactElement } from 'react';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import { configuration } from '../../configuration/configuration';
import HomePage from '../../pages/main/home/home';
import './App.scss';

export default function App(): ReactElement {
  return (
    <HashRouter>
      <main className="app">
        <h1 className="app-title">ChromeExtension App</h1>

        <Routes>
          <Route path={configuration.routes.pages.home} element={<HomePage />} />
        </Routes>
      </main>
    </HashRouter>
  );
}
