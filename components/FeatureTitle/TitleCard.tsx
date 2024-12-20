import cx from 'clsx';
import { Button, Container, Group, Overlay, Text, Title } from '@mantine/core';
import classes from './TitleCard.module.css';

export function TitleCard() {
  return (
    <div className={classes.wrapper}>

      <div className={classes.inner}>
        <Title className={classes.title}>
          We help you send gifts throughout the year, based to your calendar.
        </Title>

        <Container size={640}>
          <Text size="lg" className={classes.description}>
            Build more reliable software with AI companion. AI is also trained to detect lazy
            developers who do nothing and just complain on Twitter.
          </Text>
        </Container>

        <Group className={classes.controls}>
          <Button variant="black" size="lg">
            Sign Up
          </Button>
          <Button variant="subtle" size="lg">
            Contact Us
          </Button>
        </Group>
      </div>
    </div>
  );
}