import { Navbar } from '../components/Navbar/navbar';
import { TitleCard } from '../components/FeatureTitle/TitleCard';
import { Group, Stack, Container, Text, Title, Button } from '@mantine/core';
import { TitleGrid } from '../components/TitleGrid/TitleGrid';
import { Steps } from '../components/Steps/Steps';
import { Footer } from '../components/Footer/Footer';
import Image from "next/image";

export default function About() {
  return (
    <>
      <Navbar></Navbar>
      <Container maw={1000} content="center">
        <Stack content="center" align="Center">
        <Stack maw={800} justify="center">
            <Group justify='center'>
                <Title mt={48} c="pink">
                Remember and plan gifts ahead
                </Title>
            </Group>

            <Group>
                <Text fz="xl" ta="center">
                  GiftKakis was started when a group of friends thought it was hard to remember all of our gifting schedule. We decided that it would be easier to aggregate all of our gift schedules together into one calendar, and it seems like it works! Now we're bringing the practice to everyone.
                </Text>
            </Group>
        </Stack>

        <Stack pt={48} maw={800}>
          <Stack>
          <Group justify='center'>
              <Title mt={48} c="pink" ta="center">
              The Kakis
              </Title>
          </Group>
          </Stack>
          <Group justify='center'>
              <Text fz="xl" ta="center">
                The GiftKakis team is a <a href="/contact">small and agile team</a> based out of Singapore. So don't hesistate to reach out to us for any form of information, we reply fast!
              </Text>
          </Group>
        </Stack>
        </Stack>
      </Container>

      <Footer></Footer>
    </>
  );
}
