import LoginForm from "../components/LoginForm";

const Login = () => {
    return <div className="bg-[url(/login.webp)] h-[100vh] flex flex-col">
        <h1 className="text-white text-8xl text-center p-5 font-(family-name:--font-style-script)">The Tasteless Kitchen</h1>
        <div className="grow flex items-center justify-center mb-20">
            <LoginForm />
        </div>
    </div>
}

export default Login;