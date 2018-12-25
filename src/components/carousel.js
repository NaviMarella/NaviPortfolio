import React from 'react'
import NukaCarousel from 'nuka-carousel'

class Carousel extends React.Component {
  render() {
    const images = this.props.images.map(function(image){
      return <img alt="" key={image} src={image}/>;
    })
    return (
      <NukaCarousel wrapAround={true} dragging={true} autoplay={true}>
        {images}
      </NukaCarousel>
    );
  }
}

export default Carousel