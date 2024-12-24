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
        </Group>

        <Group gap={0} className={classes.links} justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandTwitter size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandYoutube size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandInstagram size={18} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
}