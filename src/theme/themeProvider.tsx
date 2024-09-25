import {ThemeContext} from "./themeContext";
import React, {FC, useMemo, useState} from 'react';
import {Theme} from "./themeContext";

const defaultTheme = localStorage.getItem("theme") as Theme || Theme.LIGHT;

const ThemeProvider: FC = ({children}) => {

    const [theme, setTheme] = useState<Theme>(defaultTheme);

    const defaultValue = useMemo(() => ({
        theme: theme,
        setTheme: setTheme,
    }), [theme])

    return (
        <ThemeContext.Provider value={defaultValue}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
