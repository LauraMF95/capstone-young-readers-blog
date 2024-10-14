import React from "react";
import Carousel from "react-bootstrap/Carousel"
import "bootstrap/dist/css/bootstrap.min.css"


import Imagen1 from "../../../static/assets/images/carousel/img1.jpg";
import Imagen2 from "../../../static/assets/images/carousel/img2.jpg";
import Imagen3 from "../../../static/assets/images/carousel/img3.jpg";
import Imagen4 from "../../../static/assets/images/carousel/img4.webp";
import Imagen5 from "../../../static/assets/images/carousel/img5.webp";

const Carrusel = () => {
    return (
        <Carousel className="carousel">
            <Carousel.Item>
                <img src={Imagen1} />
                <Carousel.Caption>
                    <h3>Historias de misterio</h3>
                    <p>Déjate arrastrar por el suspense</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={Imagen2}/>
                <Carousel.Caption>
                    <h3>Historias de aventura</h3>
                    <p>Disfruta de experiencias únicas desde el sofá de tu casa</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={Imagen3}/>
                <Carousel.Caption>
                    <h3>Historias de amor</h3>
                    <p>Conmovedoras historias con inolvidables protagonistas</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={Imagen4}/>
                <Carousel.Caption>
                    <h3>Historias fantásticas</h3>
                    <p>Deja volar tu imaginación al país de las hadas</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={Imagen5}/>
                <Carousel.Caption>
                    <h3>Libros juveniles</h3>
                    <p>Literatura de todo tipo para todas las ocasiones</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Carrusel