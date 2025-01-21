import { IconBrandInstagram, IconBrandTwitter, IconBrandYoutube } from '@tabler/icons-react';
import { ActionIcon, Container, Group } from '@mantine/core';
import KakiLogo from '../../public/KakiLogo.svg';
import classes from './Footer.module.css';
import Image from 'next/image'

export function Footer() {
  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Group>
        <a href="/">
          <Image
            src={KakiLogo}
            height={20}
            alt="logo"
            />
          </a>
        <a href="/terms" className={classes.link}>
          Terms and Conditions
        </a>
        <a href="/account" className={classes.link}>
          Account Management
        </a>
        </Group>

        <Group gap={0} className={classes.links} justify="flex-end" wrap="nowrap">
          <a href="https://www.instagram.com/giftkakis/">
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandInstagram size={18} stroke={1.5} />
          </ActionIcon>
          </a>
        </Group>
      </Container>
    </div>
  );
}