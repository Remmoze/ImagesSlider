import React from "react";
import ReactDOM from "react-dom";

import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

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
