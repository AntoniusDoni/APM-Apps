import React, { useState, useMemo, useContext } from "react"

const AppContext = React.createContext()

function AppProvider(props){
    const [user, setUser] = useState(null)
    const [bucket, setBucket] = useState(null)
    
    const value = useMemo(
        () => ({
            user,
            setUser,
            bucket,
            setBucket,
        }),
        [bucket, setBucket, user, setUser]
    )
    
    return (
        <div creator={'Antonius Doni (donio)'}>
            <AppContext.Provider value={value} {...props} />
        </div>
    )
}
function useBucket() {
    const appContext = useContext(AppContext)
    if (!appContext) {
        throw Error('useBucket must be used within AppProvider')
    }
    const {
        bucket,
        setBucket,
        user, 
        setUser
    } = appContext
    const changeBucket = (value = {}) => {
        setBucket({
            ...bucket,
            ...value
        })
    }
    const logout = () => {
        setUser(null)
    }
    const exit = () => {
        localStorage.removeItem("settingname");
        
    }

    return {
        bucket,
        user,
        setUser,
        logout,
        exit,
        changeBucket
    }
}
export { AppProvider, useBucket}