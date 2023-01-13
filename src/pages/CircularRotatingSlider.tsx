import type { FC } from 'react'
import React from 'react'
// @ts-ignore
import loadingSrc from '../images/loading.png'
import Container from '../components/container'
import '../css/slider.scss'

const Slider: FC = () => {
  return (
    <Container>
      <div className="gallery">
        <img src="https://picsum.photos/id/104/400/400" alt="a dream catcher" />
        <img src="https://picsum.photos/id/1082/400/400" alt="a piano" />
        <img src="https://picsum.photos/id/158/400/400" alt="a live concert" />
        <img src="https://picsum.photos/id/234/400/400" alt="Paris" />
      </div>
    </Container>
  )
}

export default Slider
