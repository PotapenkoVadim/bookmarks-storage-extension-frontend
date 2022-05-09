import React, { ReactElement } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { configuration } from '../../configuration/configuration';
import AboutPage from '../../pages/main/about/about';
import FAQPage from '../../pages/main/faq/faq';
import HomePage from '../../pages/main/home/home';
import './App.scss';

export default function App(): ReactElement {
  return (
    <HashRouter>
      <main className="app">
        <Routes>
          <Route path={configuration.routes.pages.home} element={<HomePage />} />
          <Route path={configuration.routes.pages.about} element={<AboutPage />} />
          <Route path={configuration.routes.pages.faq} element={<FAQPage />} />
        </Routes>
      </main>
    </HashRouter>
  );
}
