import { Navbar } from '../components/Navbar/navbar';
import { TitleCard } from '../components/FeatureTitle/TitleCard';
import { Group, Stack, Container, Text, Title, Button } from '@mantine/core';
import { TitleGrid } from '../components/TitleGrid/TitleGrid';
import { Steps } from '../components/Steps/Steps';
import { Footer } from '../components/Footer/Footer';

export default function HomePage() {
  return (
    <>
      <Navbar></Navbar>
      <Container maw={"100%"}>
        <TitleCard></TitleCard>
        
        <Stack py={50} align="center">
          <Title order={3} c="pink">Send your gifts in 3 steps</Title>
          <Steps></Steps>
        </Stack>

        <Stack py={50} align="center">
          <Title py={64} >Other features</Title>
          <TitleGrid></TitleGrid>
        </Stack>

        <Group justify='center'>
          <a href="https://gift-kakis.web.app/">
          <Button variant="black" size="lg">
            Start Gifting
          </Button>
          </a>
        </Group>
      </Container>

      <Footer></Footer>
    </>
  );
}
