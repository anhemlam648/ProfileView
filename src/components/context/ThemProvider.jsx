import { createContext, useState } from "react";
import PropTypes from "prop-types"; 

export const ThemContext = createContext(null);

const ThemContextProvider = (props) => {
    const [theme, setTheme] = useState("light"); 

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
