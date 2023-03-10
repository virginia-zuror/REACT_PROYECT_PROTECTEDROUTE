import './Home.css';

import { Box, Grid, Heading, Image, Text } from '@chakra-ui/react';
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

import { userAuth } from '../Context/UserContext';

const Home = () => {
  const inputRef = useRef(null);
  const { login } = userAuth();

  return (
    <main>
      <Box
        width="100%"
        display="flex"
        flexWrap="wrap"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Text
          bgGradient="linear-gradient(90deg, #0700b8 0%, #00ff88 100%)"
          bgClip="text"
          fontSize="6xl"
          fontWeight="extrabold"
          textAlign="center"
        >
          Welcome to our Dojo!
        </Text>
        {!localStorage.getItem('user') && (
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            flexWrap="wrap"
          >
            <Text fontSize="xl" textAlign="center">
              Login to have complete access.
            </Text>
            <input type="text" ref={inputRef} placeholder="Enter a nickname" />
            <button
              onClick={() => {
                login(inputRef.current.value);
              }}
            >
              Login
            </button>
          </Box>
        )}
      </Box>

      <Box
        width="100%"
        display="flex"
        flexWrap="wrap"
        flexDirection="column"
        gap="2rem"
        alignItems="strecht"
        justifyContent="center"
      >
        <Heading fontSize="3xl" fontWeight={600} padding={30} textAlign="center">
          News
        </Heading>
        <Grid
          templateColumns="repeat(auto-fit, minmax(300px, 1fr))"
          gap={50}
          paddingBottom="20px"
          alignContent="center"
        >
          <Box
            width="100%"
            display="flex"
            flexDir="column"
            alignItems="center"
            justifyContent="center"
            gap={8}
            background="linear-gradient(90deg, #0700b8 0%, #00ff88 100%)"
            padding={5}
            borderRadius={10}
            flexWrap="wrap"
          >
            <Heading fontSize="2xl" color="#FAF9F8">
              <Link to={`/article1`}>We are open!</Link>
            </Heading>
            <Text noOfLines={3} color="#FAF9F8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dolor est,
              lacinia sit amet volutpat ac, laoreet eget nunc. Nulla egestas, dui quis
              tincidunt aliquam, elit velit maximus justo, in feugiat enim arcu sed
              mauris. Vivamus nec sem a mi imperdiet feugiat a quis tellus. Fusce non
              dignissim nulla, id rhoncus lectus. Aenean feugiat vitae augue in eleifend.
              Morbi id consectetur ligula. Etiam quis hendrerit nunc. Mauris non sagittis
              mi. Etiam id odio erat. Nunc at leo sit amet urna ultrices volutpat ac nec
              purus.
            </Text>
          </Box>
          <Box
            width="100%"
            display="flex"
            flexDir="column"
            alignItems="center"
            justifyContent="center"
            gap={8}
            background="linear-gradient(90deg, #0700b8 0%, #00ff88 100%)"
            padding={5}
            borderRadius={10}
            flexWrap="wrap"
          >
            <Heading fontSize="2xl" color="#FAF9F8">
              <Link to={`/article2`}>Shotokan Karate</Link>
            </Heading>
            <Text noOfLines={3} color="#FAF9F8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dolor est,
              lacinia sit amet volutpat ac, laoreet eget nunc. Nulla egestas, dui quis
              tincidunt aliquam, elit velit maximus justo, in feugiat enim arcu sed
              mauris. Vivamus nec sem a mi imperdiet feugiat a quis tellus. Fusce non
              dignissim nulla, id rhoncus lectus. Aenean feugiat vitae augue in eleifend.
              Morbi id consectetur ligula. Etiam quis hendrerit nunc. Mauris non sagittis
              mi. Etiam id odio erat. Nunc at leo sit amet urna ultrices volutpat ac nec
              purus.
            </Text>
          </Box>
        </Grid>
        <Image
          src="https://res.cloudinary.com/do7bnejaz/image/upload/v1676811403/CobraKai%20_Gym/s-2_kb9lp7.png"
          alt="sensei"
          objectFit="contain"
        />
        <Heading fontSize="xl" fontWeight="bold" textAlign="center">
          Sensei John Lawrence
        </Heading>
        <Box
          paddingBottom={100}
          display="flex"
          flexWrap="wrap"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
        >
          <Text>Contact us:</Text>
          <Text>(+34) 4-8-15-16-23-42</Text>
          <Text>Crossroad Shopping Center, Atlanta, Georgia, EEUU</Text>
        </Box>
      </Box>
    </main>
  );
};

export default Home;
