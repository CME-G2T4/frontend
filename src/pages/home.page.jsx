import React from 'react';
import TypeAnimation from 'react-type-animation';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import './home.styles.scss';

function Home() {

  return (
    <div className='background'>
      <Container maxWidth="sm" className='background'>
        <Box style={{ display:'flex', justifyContent: 'center', marginTop: '50%' }}>
          <TypeAnimation
            cursor={false}
            sequence={['ShinobiLorry, We Deliver Anytime, Anywhere.', 5000, '']}
            wrapper="h2"
            repeat={Infinity}
          />
        </Box>
        <div class="wrap">
            <img class="image truck-img" src="https://learndesigntutorial.com/wp-content/uploads/2021/03/truck.png" alt="" />
            <img class="image box-img" src="https://learndesigntutorial.com/wp-content/uploads/2021/03/box.png" alt="" />
            <img class="image box-img box-img2" src="https://learndesigntutorial.com/wp-content/uploads/2021/03/box.png" alt="" />
          </div>
      </Container>
    </div>
    
  )
}

export default Home;