import React, { createContext, useCallback, useState } from "react"
import { getInitialColorMode } from "../libs/utils"
import { ToastContainer } from "react-bootstrap"

export const ThemeContext = createContext({})

export const ThemeProvider = ({ children }) => {
  const [colorMode, rawSetColorMode] = useState(getInitialColorMode)
  const setColorMode = (value: string) => {
    rawSetColorMode(value)
    // Persist it on update
    window.localStorage.setItem("color-mode", value)
  }

  // const [theme, toggleTheme] = useDarkMode();
  // const themeMode = theme === 'light' ? lightTheme : darkTheme;

  // const Toggle = ({ toggleTheme }) => {

  //   return (
  //     <button onClick={toggleTheme} >
  //       Toggle theme
  //     </button>
  //   );
  // };

  return (
    <ThemeContext.Provider value={{ colorMode, setColorMode }}>
      {children}
    </ThemeContext.Provider>
  )
}


const ToastContext = React.createContext({});

// export function useToast() {
//   const toastHelpers = React.useContext(ToastContext);
//   return toastHelpers;
// }

// const toast = useToast();
// toast

// type ToastType = {
//   id: number
// }

// let id = 1;
export const ToastProvider = ({ children }) => {
//   const [toasts, setToasts] = useState<ToastType[]>([]);

//   const addToast = useCallback((content: any) => {
//     setToasts(toasts => [...toasts, { id: id++, content }]);
//   }, [setToasts]);

//   const removeToast = useCallback((id: number) => {
//     setToasts(toasts => toasts.filter(t => t.id !== id));
//   }, [setToasts]);

//   return (
//     <ToastContext.Provider value={{ addToast, removeToast }}>
//       {/* <ToastContainer toasts={toasts} /> */}
//       {children}
//     </ToastContext.Provider>
//   );
}
