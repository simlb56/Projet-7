import React from "react";
import Navbar from "../layout/Navbar";
import Main from "../layout/Main";
import Footer from "../layout/Footer";
import { Link } from "react-router-dom";
import "../Pages/ErrorPageNotFound.scss";

export function ErrorPageNotFound() {
    return(
    <>
    <Navbar />
    <Main>
      <div className="error_page">
    <h1>404</h1>
    <h2>Oups! La page que vous demandez n'existe pas</h2>
      <Link to="/accueil" className="return-link">Retourner sur la page d'accueil</Link>
      </div>
    </Main>
    <Footer />
    </>);
  }
