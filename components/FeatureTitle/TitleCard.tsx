import cx from 'clsx';
import { Button, Stack, Container, Group, Overlay, Text, Title, Badge, SimpleGrid, Paper } from '@mantine/core';
import classes from './TitleCard.module.css';
import Image from 'next/image';
import PenguinLogo from '../../public/PenguinOnly.svg'
import HeaderImage from '../../public/Header.png'
import { FaApple, FaGooglePlay } from "react-icons/fa";

export function TitleCard() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.inner}>
        <Stack gap={0}>
          <Group w={"100%"} align="center" justify='center'>
              <Image
              src={PenguinLogo}
              height={50}
              alt="logo"
              />
          </Group>
          <Title className={classes.title} mt={24}>
            Discover local gifts, schedule gifts ahead for your friends.
          </Title>

          <Container fluid mt={24}>
            <Text size="xl" fw="500" className={classes.description}>
              GiftKakis is an all-in-one gifting service, that helps you plan and deliver gifts throughout the year. Now everyone gets to send gifts on time.
            </Text>
          </Container>
        </Stack>

        <Group className={classes.controls}>
          <a href="https://gift-kakis.web.app">
          <Button variant="black" size="lg" radius="xl">
            Start Gifting on Web
          </Button>
          </a>
          <a href="https://gift-kakis.web.app">
          <Button disabled={true} variant="outline" size="lg" radius="xl">
            Download our App <Badge ml="sm" variant="light" color="pink">Soon!</Badge>
          </Button>
          </a>
        </Group>

        <Stack mt={64}>
          <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="xl">
            <Paper p={0} radius="lg" withBorder style={{ overflow: 'hidden' }}>
              <Stack align="center" ta="center">
                <div style={{ width: '100%', height: '200px', position: 'relative' }}>
                  <Image
                    src="/Order-Gifts.png"
                    alt="Build your own Hamper"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <Stack p="md" align="center" ta="center">
                  <Text fz="lg" fw={500}>Build your own Gift</Text>
                  <Text c="dimmed">Build your own gift package from more than 40 gifts from curated local shops.</Text>
                </Stack>
              </Stack>
            </Paper>
            <Paper p={0} radius="lg" withBorder style={{ overflow: 'hidden' }}>
              <Stack align="center" ta="center">
                <div style={{ width: '100%', height: '200px', position: 'relative' }}>
                  <Image
                    src="/Order-Delivery.png"
                    alt="Islandwide Delivery"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <Stack p="md" align="center" ta="center">
                  <Text fz="lg" fw={500}>Islandwide Delivery</Text>
                  <Text c="dimmed">$8 Flat-fee delivery for all orders, no matter the distance</Text>
                </Stack>
              </Stack>
            </Paper>
            <Paper p={0} radius="lg" withBorder style={{ overflow: 'hidden' }}>
              <Stack align="center" ta="center">
                <div style={{ width: '100%', height: '200px', position: 'relative' }}>
                  <Image
                    src="/Order-Schedule.png"
                    alt="Schedule Ahead"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <Stack p="md" align="center" ta="center">
                  <Text fz="lg" fw={500}>Schedule Ahead</Text>
                  <Text c="dimmed">Plan and schedule deliveries in advance, no need to worry about last-minute delivery</Text>
                </Stack>
              </Stack>
            </Paper>
          </SimpleGrid>
        </Stack>
      </div>
    </div>
  );
}