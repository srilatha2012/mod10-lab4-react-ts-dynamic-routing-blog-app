import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {

    const { isAuthenticated, logout } = useAuth();

    return (
        <nav style={{ display: "flex", gap: "20px", padding: "15px", borderBottom: "1px solid #ccc" }}>
            <Link to="/blog">Home/Blogs</Link>

            {isAuthenticated ? (
                <>
                    <Link to="/admin" style={{ color: "green", fontWeight: "bold" }}>Admin</Link>
                    <button onClick={logout} style={{ cursor: "pointer" }}>Log Out</button>
                </>
            ) : (
                <Link to="/login">Log In</Link>
            )}
        </nav>
    );
}