import React from "react";
import logo from "../../imagens/logo.webp";
import "./Login.css";
import Header from "../../Componentes/Header/header";
import { LiaHeartSolid } from "react-icons/lia";

const Login = () => {
    return (
        <>
        <Header />
        <div className="login-container">
            <div className="login-box">
                <div className="heart-container">
                    <LiaHeartSolid className="heart-icon" size={64} color="#ff69b4" />
                </div>
                <h1 className="login">LOGIN!</h1>
                <form>
                    <div className="input-group">
                        <label htmlFor="email">E-mail:</label>
                        <input type="email" id="email" placeholder="Digite seu e-mail" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="senha">Senha:</label>
                        <input type="password" id="senha" placeholder="Digite sua senha" required />
                    </div>
                    <button type="submit">Acessar</button>
                </form>
                </div>
        </div>
        </>
    );
};

export default Login;