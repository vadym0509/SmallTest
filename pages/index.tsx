import React, { useState } from 'react'
import { Header } from '../components/Header/Header'
import { Hero } from '../components/Hero/Hero'

import {
  Container,
  ButtonContainer
} from './index.styles'
import { COMMING_DATE } from '../constants'

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const handleModal = () => {
      setShowModal(!showModal);
  }
  return (
    <Container>
      <Header />
      <Hero />
    </Container>
  )
}

export default Home;
