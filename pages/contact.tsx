import { Navbar } from '../components/Navbar/navbar';
import { TitleCard } from '../components/FeatureTitle/TitleCard';
import { Group, Stack, Container, Text, Title, Button } from '@mantine/core';
import { TitleGrid } from '../components/TitleGrid/TitleGrid';
import { Steps } from '../components/Steps/Steps';
import { Footer } from '../components/Footer/Footer';

export default function Contact() {
  return (
    <>
      <Navbar></Navbar>
      <Container maw={1000}>
        <Stack>
            <Group justify='center'>
                <Title mt={48}>
                Contact Us
                </Title>
            </Group>
        </Stack>
        <Stack pt={48}>
            <Group justify='center'>
                <Text fz="xl">
                  Phone: +65 1323 1231
                </Text>
            </Group>
            <Group justify='center'>
                <Text fz="xl">
                  Email: citruscents@gmail.com
                </Text>
            </Group>
        </Stack>
        
      </Container>

      <Footer></Footer>
    </>
  );
}
