import {createContext, useReducer} from 'react'

// export for consuming context
export const LoginContext = createContext(null)  
export const LoginDispatchContext = createContext(null)

const initialState = {
    username: '',
    isAuth: false,
    message: "Please Login!"
}
// export for providing context (reducer - state and dispatch)
export const LoginProvider = ({children}) => {
    const [login, dispatch] = useReducer(loginReducer, initialState)

    return (
        <LoginContext.Provider value={login}>
            <LoginDispatchContext.Provider value={dispatch}>
                {children}
            </LoginDispatchContext.Provider>
        </LoginContext.Provider>
    )
}

// reducer used in same file, no export
const loginReducer = (login, action) => {
    switch (action.type) {
        case 'LOGIN':
            // console.log(action.data)
            //    if (action.data.password === 'abc'){
            //     return {
            //         username: action.data.username,
            //         isAuth: true,
            //         message: `Welcome ${action.data.username}`
            //     }
            //    }
            return {
                ...action.data,
                isAuth: true
            }

        // logout case
        // should clear, empty string, username and password
        // set isAuth to false
        // and deliver a log out message = "Logged out!"
        case 'LOGOUT':
            return {
                username: '',
                password: '',
                isAuth: false,
                message: 'Logged Out!'
            }
        default:
            return login
    }
}