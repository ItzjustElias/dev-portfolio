import React, { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import Fade from 'react-reveal';
import endpoints from '../constants/endpoints';
import Social from './Social';
import FallbackSpinner from './FallbackSpinner';

const styles = {
  nameStyle: {
    fontSize: '5em',
  },
  inlineChild: {
    display: 'inline-block',
  },
  mainContainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  return (
    '#'
    + Array.from({ length: 6 }, () => letters[Math.floor(Math.random() * 16)])
      .join('')
  );
};

function Home() {
  const [data, setData] = useState(null);
  const [roleColor, setRoleColor] = useState(getRandomColor());

  useEffect(() => {
    fetch(endpoints.home, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);
  }, []);

  return data ? (
    <Fade>
      <div style={styles.mainContainer}>
        <h1 style={styles.nameStyle}>{data?.name}</h1>
        <div style={{ flexDirection: 'row' }}>
          <h2 style={styles.inlineChild}>I&apos;m&nbsp;</h2>
          <span style={{ color: roleColor }}>
            <Typewriter
              options={{
                loop: true,
                autoStart: true,
                strings: data?.roles,
                delay: 75,
                deleteSpeed: 30,
              }}
              onInit={(typewriter) => {
                typewriter.start();
              }}
              onLoopCompleted={() => {
                setRoleColor(getRandomColor());
              }}
            />
          </span>
        </div>
        <Social />
      </div>
    </Fade>
  ) : (
    <FallbackSpinner />
  );
}

export default Home;
