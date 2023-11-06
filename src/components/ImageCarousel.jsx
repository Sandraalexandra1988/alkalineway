import React from 'react'
import {Link} from 'react-router-dom'
import { Carousel, Image} from 'react-bootstrap'



const ImageCarousel = () => {
  return (
    <Carousel>
    <Carousel.Item>
     <Image
          className="d-block w-100"
          src="https://mdbootstrap.com/img/new/slides/041.jpg"
          alt="Second slide"
        />
      <Carousel.Caption className="carousel-caption-edit">
        <h3 class="text-light">First slide label</h3>
        
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <Image
          className="d-block w-100"
          src="https://mdbootstrap.com/img/new/slides/042.jpg"
          alt="Second slide"
        />
      <Carousel.Caption className="carousel-caption-edit">
        <h3 class="text-light">Second slide label</h3>
       
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <Image
          className="d-block w-100"
          src="https://mdbootstrap.com/img/new/slides/043.jpg"
          alt="Second slide"
        />
      <Carousel.Caption className="carousel-caption-edit">
        <h3 class="text-light" >Third slide label</h3>
       
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  )
}

export default ImageCarousel
