import React from "react";
import ReactDOM from "react-dom";

import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

import "./index.css";
import reportWebVitals from "./reportWebVitals";

import { Provider } from "react-redux";
import storage from "./redux/store";

import MainContainer from "./components/MainContainer";

const theme = createTheme({
    palette: {
        mode: "dark",
    },
    spacing: 8,
});

const App = () => {
    return (
        <Provider store={storage}>
            <React.StrictMode>
                <ThemeProvider theme={theme}>
                    <CssBaseline />

                    <MainContainer />
                </ThemeProvider>
            </React.StrictMode>
        </Provider>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
