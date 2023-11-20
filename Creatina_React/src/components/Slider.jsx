import React from 'react'

const Slider = () => {
    return (
        <div>
            <section className=" slider_section position-relative">
            <div className="slider_bg-container"></div>
            <div className="slider-container">
                <div className="detail-box">
                    <h1>
                        DESCUBRA <br />
                        o <br /> uso <br />
                        DA <br />
                        CREATINA
                    </h1>
                    <p>
                        Neste artigo, vamos explorar o conceito da creatina, como ela funciona, seus benefícios e malefícios,
                        possíveis efeitos colaterais,
                        e como utilizá-la corretamente. Saiba tudo sobre este suplemento e quando é importante a suplementação.
                        Clique abaixo para calcular a dosagem correta para você.
                    </p>
                    <div>
                        <a href="Calculadora.html" className="slider-link">
                            CALCULAR A SUA DOSAGEM AQUI
                        </a>
                    </div>
                </div>
                <div className="img-box">
                    <div id="carouselExampleControls" classNameName="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="src/assets/img/CreatinaComeco1.webp" alt="" />
                            </div>
                            <div className="carousel-item">
                                <img src="src/assets/img/CreatinaComeco2.webp" alt="" />
                            </div>
                            <div className="carousel-item">
                                <img src="src/assets/img/CreatinaComeco3.PNG" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    );
}

export default Slider;