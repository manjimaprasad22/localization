import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import { Provider } from "react-redux";
import { store, persistor } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'flag-icon-css/css/flag-icons.min.css'

import App from './App';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs:['en','fr','ar'],
    fallbackLng: "en",
    detection:{order: ['path','cookie','htmlTag', 'localStorage', 'subdomain'],
    caches:['cookie'],
  },
  backend:{
    loadPath: '/assests/locales/{{lng}}/translation.json',
  },
  });

const loadingMarkup =(
  <div className='py-4 text-center'>
    <h2>Loading..</h2>
  </div>

)


ReactDOM.render(
  <Suspense fallback={loadingMarkup}>
      <React.StrictMode>
      <Provider store={store}>
      <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
    <App />
    </PersistGate>
    </Provider>
  </React.StrictMode>
  </Suspense>,

  document.getElementById('root')
);
