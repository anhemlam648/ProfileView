import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const ThemContext = createContext(null);

const ThemContextProvider = (props) => {
    const [theme, setTheme] = useState(() => {
        const savedTheme = window.localStorage.getItem('profile-theme');
        return savedTheme === 'dark' ? 'dark' : 'light';
    });

    useEffect(() => {
        window.localStorage.setItem('profile-theme', theme);
        document.documentElement.dataset.theme = theme;
    }, [theme]);

    const contextValue = {
        theme,
        setTheme,
    };

    return (
        <ThemContext.Provider value={contextValue}>
            {props.children}
        </ThemContext.Provider>
    );
};

// Add PropTypes validation
ThemContextProvider.propTypes = {
    children: PropTypes.node.isRequired, 
};

export default ThemContextProvider;
