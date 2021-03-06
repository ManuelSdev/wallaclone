import React from 'react';

const AuthContext = React.createContext();
/**
 * A)
 * export const AuthContextProvider = AuthContext.Provider;
 * B)
 * export const AuthContextConsumer = AuthContext.Consumer;
 */

/**
 * A mejorado
 * En lugar guardarlo en una const para usarlo directamente, envuelvo
 *  AuthContext.Provider en el componente AuthProvider. Ahora, el value
 * recibe automaticamente todas las props que le paso a AuthProvider.
 * Antes, tenía que destructurar cada prop en distintos objetos de esta forma
 * value={{...prop1} {...prop2}}
 */
export const AuthProvider = ({ children, ...props }) => (
    <AuthContext.Provider value={props}>{children}</AuthContext.Provider>
);

//El B lo paso igual con un nombre más elegante
export const AuthConsumer = AuthContext.Consumer;
/**
 * C uso un custom hook que contiene el hook useContext
 * useContext recibe el objeto de contexto que retorna React.createContext()
 * el value del provider determina el valor actual del contexto
 * Ahora puedo acceder al contexto usando el custom hooks y tomando las props
 * que me interesen así:  const { handleLogin } = useAuthContext();
 *  ....en lugar de tener que envolver componentes con el antiguo AuthContextConsumer
 * en el componente Connected...
 * y hacer que el componente envuelto reciba las props como parametros de entrada
 */
export const useAuthContext = () => {
    const authValue = React.useContext(AuthContext);

    return authValue;
};

export default AuthContext;
