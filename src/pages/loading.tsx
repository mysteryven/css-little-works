import type { FC } from 'react'
import React from 'react'
// @ts-ignore
import loadingSrc from '../images/loading.png'
import Container from '../components/container'
import '../css/loading.scss'

const LoadingIcon: FC = () => {
  return (
    <div className="card-loading">
      <Container>
        <img className='rotate-loop' src={loadingSrc} width={36} />
      </Container>
    </div>
  )
}

export default LoadingIcon