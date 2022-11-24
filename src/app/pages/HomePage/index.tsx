import React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components/macro';
import first from '../../assets/1.mp3';
import second from '../../assets/2.mp3';
import third from '../../assets/3.mp3';
import fourth from '../../assets/4.mp3';
import fifth from '../../assets/5.mp3';
import sixth from '../../assets/6.mp3';
import seventh from '../../assets/7.mp3';
import eighth from '../../assets/8.mp3';
import ninth from '../../assets/9.mp3';

const q = new Audio(first);
const w = new Audio(second);
const ee = new Audio(third);
const a = new Audio(fourth);
const s = new Audio(fifth);
const d = new Audio(sixth);
const z = new Audio(seventh);
const x = new Audio(eighth);
const c = new Audio(ninth);

export function HomePage() {
  const buttons = [
    ['Q', 'W', 'E'],
    ['A', 'S', 'D'],
    ['Z', 'X', 'C'],
  ];

  onkeydown = event => {
    let isChecked = document.getElementById('switch-input') as HTMLInputElement;
    if (!isChecked.checked) return;
    switch (event.key.toUpperCase()) {
      case 'Q':
        q.play();
        break;
      case 'W':
        w.play();
        break;
      case 'E':
        ee.play();
        break;
      case 'A':
        a.play();
        break;
      case 'S':
        s.play();
        break;
      case 'D':
        d.play();
        break;
      case 'Z':
        z.play();
        break;
      case 'X':
        x.play();
        break;
      case 'C':
        c.play();
        break;
      default:
        break;
    }
  };

  const handleClick = e => {
    let isChecked = document.getElementById('switch-input') as HTMLInputElement;
    if (!isChecked.checked) return;
    switch (e.target.textContent) {
      case 'Q':
        q.play();
        break;
      case 'W':
        w.play();
        break;
      case 'E':
        ee.play();
        break;
      case 'A':
        a.play();
        break;
      case 'S':
        s.play();
        break;
      case 'D':
        d.play();
        break;
      case 'Z':
        z.play();
        break;
      case 'X':
        x.play();
        break;
      case 'C':
        c.play();
        break;
    }
  };

  const handleVolumeChange = e => {
    q.volume = e.target.value / 10;
    w.volume = e.target.value / 10;
    ee.volume = e.target.value / 10;
    a.volume = e.target.value / 10;
    s.volume = e.target.value / 10;
    d.volume = e.target.value / 10;
    z.volume = e.target.value / 10;
    x.volume = e.target.value / 10;
    c.volume = e.target.value / 10;
  };
  return (
    <>
      <Helmet>
        <title>Drum Machine</title>
      </Helmet>
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'gray',
        }}
      >
        <Wrapper>
          <div
            style={{
              display: 'flex',
              justifyContent: 'end',
              width: '70vh',
              paddingRight: '20px',
              fontWeight: '800',
            }}
          >
            <p>Drum Machine</p>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '70vh',
            }}
          >
            <Col>
              {buttons.map((row, rowIdx) => (
                <Row key={rowIdx}>
                  {row.map((col, colIdx) => (
                    <DrumPad key={colIdx} onClick={handleClick}>
                      {col}
                    </DrumPad>
                  ))}
                </Row>
              ))}
            </Col>
            <div
              style={{
                width: '30vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  fontWeight: 800,
                }}
              >
                <p>Power</p>
                <label className="switch">
                  <input type="checkbox" id="switch-input" defaultChecked />
                  <span className="slider"></span>
                </label>
                <input
                  type="range"
                  defaultValue={10}
                  max={10}
                  min={0}
                  onChange={handleVolumeChange}
                  style={{ marginTop: '50px', width: '20vh' }}
                />
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  height: 30vh;
  width: 70vh;
  align-items: start;
  flex-direction: column;
  border: 5px solid orange;
  background-color: lightgray;
`;

const DrumPad = styled.button`
  height: 50px;
  width: 50px;
  margin-bottom: 10px;
  background-color: darkgray;
  :hover {
    background-color: gray;
    cursor: pointer;
  }
`;

const Row = styled.div`
  padding-left: 50px;
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const Col = styled.div`
  width: 30vh;
`;
