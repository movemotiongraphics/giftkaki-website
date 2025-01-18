import cx from 'clsx';
import { Button, Container, Group, Overlay, Text, Title, Badge } from '@mantine/core';
import classes from './TitleCard.module.css';
import Image from 'next/image';
import PenguinLogo from '../../public/PenguinOnly.svg'
import { FaApple, FaGooglePlay } from "react-icons/fa";

export function TitleCard() {
  return (
    <div className={classes.wrapper}>

      <div className={classes.inner}>
        <Group w={"100%"} align="center" justify='center'>
            <Image
            src={PenguinLogo}
            height={50}
            alt="logo"
            />
        </Group>
        <Title className={classes.title} mt={48}>
          Send gifts to all your friends throughout the year, based on your calendar.
        </Title>

        <Container size={640} mt={48}>
          <Text size="xl" fw="500" className={classes.description}>
            GiftKakis is an all-in-one gifting service, that helps you plan and deliver gifts throughout the year. Now everyone gets to send gifts on time.
          </Text>
        </Container>

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
      </div>
    </div>
  );
}