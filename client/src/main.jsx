import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Auth0Provider } from '@auth0/auth0-react';

import { ToastContainer } from "react-toastify";

import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalStyles from './styles/global';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ToastContainer position="bottom-right" theme="light" pauseOnHover closeOnClick/>
      <Auth0Provider
        domain={import.meta.env.VITE_AUTH0_DOMAIN}
        clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
        authorizationParams={{
          redirect_uri: import.meta.env.VITE_AUTH0_CALLBACK_URL,
          audience: `https://${import.meta.env.VITE_AUTH0_DOMAIN}/api/v2/`,
          scope: 'openid profile email',
        }}
        onRedirectCallback={(appState) => {
          const returnTo = appState?.returnTo || "/";
          window.history.replaceState({}, document.title, returnTo);
        }}
      >
        <App />
        <ToastContainer />
      </Auth0Provider>
    </ThemeProvider>
  </StrictMode>,
)
