import React from "react";
import ReactDOM from "react-dom";

import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

import MainContainer from "./components/MainContainer";

import { RecoilRoot } from "recoil";

const theme = createTheme({
    palette: {
        mode: "dark",
    },
    spacing: 8,
});

const App = () => {
    return (
        <React.StrictMode>
            <RecoilRoot>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <MainContainer />
                </ThemeProvider>
            </RecoilRoot>
        </React.StrictMode>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
