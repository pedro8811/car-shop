import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro'

import CarLogoImg from '../../../assets/images/car-logo.png'

const LogoContainer = styled.div`
  ${tw`
    flex
    items-center
  `}
`

const LogoText = styled.div`
  ${tw`
    text-xl
    md:text-2xl
    font-bold
    text-black
    m-1
  `}
`

const Image = styled.div`
  width: auto;
  padding-left: 12px;
  ${tw`h-5 md:h-9`}

  img{
    width: 40px;
    height: 40px;
  }
`

export function Logo(){
  return <LogoContainer>
    <Image>
      <img src={CarLogoImg}/>
    </Image>
    <LogoText>Auto Eco</LogoText>
  </LogoContainer>
}