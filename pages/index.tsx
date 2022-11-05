'use client';
import { Button, Flex, Heading, Input } from '@chakra-ui/react';
import DefaultLayout from '../components/layout';

export default function Home() {
  return (
    <Flex h='100%' alignItems='center' justifyContent='center' direction='column'>
      <Heading mb={6}>Coming Soon...</Heading>
      <Flex direction='column'>
        <Input placeholder='me@email.com' variant='filled' mb={3} type='email' />
        <Button colorScheme='teal' type='submit'>
          Notify Me
        </Button>
      </Flex>
    </Flex>
  );
}
