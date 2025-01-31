import MyInput from '../Componets/UI/input/MyInput.jsx';
import MyButton from '../Componets/UI/button/MyButton.jsx';

const Login = () => {
    return (
        <div>
            <h1>Login</h1>
            <form>
                <MyInput type="text" placeholder="Login" />
                <MyInput type="password" placeholder="Password" />
                <MyButton>Enter</MyButton>
            </form>
        </div>
    );
};

export default Login;
