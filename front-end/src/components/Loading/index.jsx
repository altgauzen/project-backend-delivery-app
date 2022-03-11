/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import losango from '../../../public/img/loading.png';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(157, 157, 157, 0);
  position: fixed;
`;

const width = 50;
const height = 50;

const displacement = 20;

const translateTime = 2;
const rotateTime = 2;

const Losangos = styled.div`
  position: relative;

  @keyframes translateLosango1 {
    0% {
      top: ${`${-height}px`};
      left: ${`${-width / 2}px`};
    }
    50% {
      top: ${`${-height - displacement}px`};
      left: ${`${-width / 2}px`};
    }
    100% {
      top: ${`${-height}px`};
      left: ${`${-width / 2}px`};
    }
  }

  @keyframes translateLosango2 {
    0% {
      top: ${`${-height / 2}px`};
      left: 0;
    }
    50% {
      top: ${`${-height / 2}px`};
      left: ${`${displacement}px`};
    }
    100% {
      top: ${`${-height / 2}px`};
      left: 0;
    }
  }

  @keyframes translateLosango3 {
    0% {
      top: 0;
      left: ${`${-width / 2}px`};
    }
    50% {
      top: ${`${displacement}px`};
      left: ${`${-width / 2}px`};
    }
    100% {
      top: 0;
      left: ${`${-width / 2}px`};
    }
  }

  @keyframes translateLosango4 {
    0% {
      top: ${`${-height / 2}px`};
      left: ${`${-width}px`};
    }
    50% {
      top: ${`${-height / 2}px`};
      left: ${`${-width - displacement}px`};
    }
    100% {
      top: ${`${-height / 2}px`};
      left: ${`${-width}px`};
    }
  }

  @keyframes rotationA {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(180deg);
    }
  }

  @keyframes rotationB {
    0% {
      transform: rotate(90deg);
    }
    100% {
      transform: rotate(270deg);
    }
  }

  img {
    position: absolute;
    width: ${`${width}px`};
    height: ${`${height}px`};
  }
  img.losango1 {
    animation: rotationA ${`${rotateTime}s`} infinite,
      translateLosango1 ${`${translateTime}s`} ease-in-out infinite;
  }
  img.losango2 {
    animation: rotationB ${`${rotateTime}s`} infinite,
      translateLosango2 ${`${translateTime}s`} ease-in-out infinite;
  }
  img.losango3 {
    animation: rotationA ${`${rotateTime}s`} infinite,
      translateLosango3 ${`${translateTime}s`} ease-in-out infinite;
  }
  img.losango4 {
    animation: rotationB ${`${rotateTime}s`} infinite,
      translateLosango4 ${`${translateTime}s`} ease-in-out infinite;
  }
`;

export default function Loading() {
  return (
    <Container>
      <Losangos>
        <img src={ losango } alt="losango1" className="losango1" />
        <img src={ losango } alt="losango2" className="losango2" />
        <img src={ losango } alt="losango3" className="losango3" />
        <img src={ losango } alt="losango4" className="losango4" />
      </Losangos>
    </Container>
  );
}
