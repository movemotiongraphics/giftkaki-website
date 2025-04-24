import { Navbar } from '../components/Navbar/navbar';
import { TitleCard } from '../components/FeatureTitle/TitleCard';
import { Group, Stack, Container, Text, Title, Button } from '@mantine/core';
import { TitleGrid } from '../components/TitleGrid/TitleGrid';
import { Steps } from '../components/Steps/Steps';
import { Footer } from '../components/Footer/Footer';
import Head from 'next/head';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>GiftKakis - Schedule Your Gifts Ahead</title>
        <meta name="description" content="Schedule your gifts ahead with GiftKakis. Plan and organize your gift-giving with our easy-to-use platform." />
        <link rel="canonical" href="https://giftkakis.com/" />
      </Head>
      <Navbar></Navbar>
      <Container maw={"100%"} my={48}>
        <TitleCard></TitleCard>
        
        <Stack align="center">
          <Title order={3} ta="center" c="pink">Schedule your gifts ahead in 4 steps...</Title>
          <Steps></Steps>
        </Stack>

        <Stack py={50} align="center">
          <Title order={3} py={64} ta="center" c="pink" >Each gift prepared thoroughly, from vendors who care</Title>
          <TitleGrid></TitleGrid>
        </Stack>

        <Group justify='center'>
          <a href="https://gift-kakis.web.app/">
          <Button radius="xl" variant="black" size="lg">
            Start Gifting
          </Button>
          </a>
        </Group>
      </Container>

      <Footer></Footer>
    </>
  );
}
