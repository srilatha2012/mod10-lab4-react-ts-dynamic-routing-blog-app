import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function LoginPage() {
    const {login} = useAuth()
    const navigate = useNavigate();

function handleLogin() {
    login();
    navigate("/blog")

}

    return(
        <div style={{ padding: "20px", textAlign: "center" }}>
            <h2>Login Page</h2>
            <button onClick={handleLogin} style={{ padding: "10px 20px", cursor: "pointer" }}>
              Log In
            </button>
        </div>
    )
}