import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "react-redux";
import { superUserAction, setAuthAction } from "../store/actions/auth";
const LoginForm = () => {
    const store = useStore()
    const navigate = useNavigate()
    const [loginData, setLoginData] = useState({
        username: '',
        password: '',
    });
    const [errorLoginData, setErrorLoginData] = useState(null);

    const loginHandler = () => {
        responseBody = loginUser(loginData)
        if (response.status === 400) {
            setErrorLoginData(response.message)
            return
        }
        response.role === 'manager' ? store.dispatch(superUserAction) : store.dispatch(setAuthAction)
        navigate('/')
    }
    return (
        <h1>Хуйня</h1>
    )
}

export default LoginForm;