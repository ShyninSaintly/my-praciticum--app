import MyInput from '../Componets/UI/input/MyInput.jsx';
import MyButton from '../Componets/UI/button/MyButton.jsx';
import { useContext } from 'react';
import { AuthContext } from '../context/index.jsx';

const Login = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext);
    const login = (event) => {
        event.preventDefault();
        setIsAuth(true);
    };
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={login}>
                <MyInput type="text" placeholder="Login" />
                <MyInput type="password" placeholder="Password" />
                <MyButton>Enter</MyButton>
            </form>
        </div>
    );
};

export default Login;
