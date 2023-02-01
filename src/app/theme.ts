import React, { createContext, useContext } from "react";

const theme = {
    colors: {
        primary: '#FF7800',
        secondary: '#F5F6F9',
        dark: '#111729',
        yellow: '#FFE300',
        red: '#D6141C',
        white: '#FFF',
        grey: '#808080',
        lightGrey: '#CCC',
        lightRed: 'rgba(255,0,0,0.1)',
        transparentGrey: 'rgba(0,0,0,0.2)',
        transparent: 'rgba(0,0,0,0.0)'
    },
    paddings: {
        xs: 4,
        s: 8,
        m: 12,
        l: 16,
        xl: 20
    },
    margins: {
        xs: 4,
        s: 8,
        m: 12,
        l: 16,
        xl: 20
    },
    letterSpacing: {
        s: 0.3,
        m: 0.6,
        l: 1
    },
    fontSize: {
        s: 12,
        m: 16,
        l: 20
    },
    debug: {
        borderWidth: 1,
        borderColor: 'black'
    }
}

export type Theme = typeof theme;
export const ThemeContext = React.createContext<Theme>(theme);  



export default theme;