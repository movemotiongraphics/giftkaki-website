import cx from 'clsx';
import { Button, Container, Group, Overlay, Text, Title, Badge } from '@mantine/core';
import classes from './TitleCard.module.css';
import Image from 'next/image';
import PenguinLogo from '../../public/PenguinOnly.svg'

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
          We send gifts to all your friends throughout the year, based to your calendar.
        </Title>

        <Container size={640} mt={48}>
          <Text size="xl" fw="500" className={classes.description}>
            GiftKakis is an all-in-one gifting service that helps you schedule and deliver gifts throughout the year.
          </Text>
        </Container>

        <Group className={classes.controls}>
          <Button variant="black" size="lg">
            Start Gifting
          </Button>
        </Group>
      </div>
    </div>
  );
}