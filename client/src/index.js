import { MantineProvider } from "@mantine/core";
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.scss";
import { store } from "./redux/store";
import reportWebVitals from "./reportWebVitals";
render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <MantineProvider
          defaultProps={{
            Container: {
              sizes: {
                xs: 0,
                sm: 600,
                md: 900,
                lg: 1200,
                xl: 1536,
              },
            },
          }}>
          <App />
        </MantineProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
