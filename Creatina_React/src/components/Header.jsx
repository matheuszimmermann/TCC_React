import React from 'react'

const Header = () => {
    return (
        <div>
            <header className="header_section">
                <div className="container-fluid">
                    <nav className="navbar navbar-expand-lg custom_nav-container ">
                        <a className="navbar-brand">
                            <img src="src/assets/img/ImageLogo2.png" alt=""></img>
                            <span>
                                CREATINA <h6>em seu corpo</h6>
                            </span>
                        </a>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <div className="d-flex mx-auto flex-column flex-lg-row align-items-center">
                                <ul className="navbar-nav">
                                    <li className="nav-item active">
                                        <a className="nav-link" href="index.html">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="ConhecaOSuplemento.html">Conheça o suplemento</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="TreinosDeForca.html">Uso em treinos de força</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="BeneficiosEMaleficios.html"> benefícios e Maleficios</a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="dropdown-a">Mais</a>
                                        <div className="dropdown-menu" aria-labelledby="dropdown-a">
                                            <a className="nav-link" href="QuemPodeUtilizar.html">Quem pode utilizar?</a>
                                            <a className="nav-link" href="NoNossoOrganismo.html">No nosso organismo</a>
                                            <a className="nav-link" href="MitosEverdades.html">Mitos e Verdades</a>
                                        </div>

                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="SobreNos.html">Sobre Nós</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        </div >
    );
}

export default Header;