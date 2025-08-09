import { createContext, useContext, useState, type FC, type ReactNode } from "react";

type ThemeContextValues = {
    theme: 'light' | 'dark'
    toggleTheme: () => void
}


export const ThemeContextProvider = createContext<ThemeContextValues>({theme: 'light', toggleTheme: () => {}})

export const useThemeContextProvider = (): ThemeContextValues => {
    return useContext<ThemeContextValues>(ThemeContextProvider)
}

export const ThemeProvider: FC<{children: ReactNode}> = ({children}) => {

    const [themeState, setTheme] = useState<{theme: ThemeContextValues['theme']}>({theme: 'light'})

    const toggleTheme = () => {
        setTheme({theme: themeState.theme === 'light' ? 'dark' : 'light'})
    }

    return (
        <ThemeContextProvider value={{ theme : themeState.theme, toggleTheme }}>
            {children}
        </ThemeContextProvider>
    )
}