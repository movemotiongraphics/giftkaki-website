import { IconBrandInstagram, IconBrandTwitter, IconBrandYoutube } from '@tabler/icons-react';
import { ActionIcon, Container, Group, Stack, Text } from '@mantine/core';
import KakiLogo from '../../public/KakiLogo.svg';
import classes from './Footer.module.css';
import Image from 'next/image'
import Link from 'next/link';

const occasionData = {
  'birthday': {
    title: "Birthday Gift Delivery",
  },
  'valentines-day': {
    title: "Valentine's Day Gift Delivery",
  },
  'anniversary': {
    title: "Anniversary Gift Delivery",
  },
  'graduation': {
    title: "Graduation Gift Delivery",
  },
  'housewarming': {
    title: "Housewarming Gift Delivery",
  },
  'thank-you': {
    title: "Thank You Gift Delivery",
  },
  'mothers-day': {
    title: "Mother's Day Gift Delivery",
  },
  'souvenir': {
    title: "Singapore Souvenir Gift Delivery",
  }
};

const categoryData = {
  'flowers': {
    title: "Top Home-based Flowers",
  },
  'get-well-soon': {
    title: "Get Well Soon Hampers",
  },
  'graduation': {
    title: "Graduation Bouquets & Gifts",
  },
  'mens-gifts': {
    title: "Gifts for Men",
  },
  'housewarming': {
    title: "Housewarming Gifts",
  },
  'matcha': {
    title: "Matcha Gifts",
  },
  'tea': {
    title: "Tea Gifts",
  },
  'cafe': {
    title: "Home-based Cafes",
  },
  'coffee': {
    title: "Coffee Gifts",
  },
  'cakes': {
    title: "Home-baked Cakes",
  },
  'food': {
    title: "Food",
  },
  'crafts': {
    title: "Handcrafted Gifts",
  }
};

export function Footer() {
  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Stack gap="md">
          <Group className={classes.footerGroup}>
            <a href="/">
              <Image
                src={KakiLogo}
                height={20}
                alt="logo"
              />
            </a>

            <a href="https://www.instagram.com/giftkakis/">
              <ActionIcon size="lg" color="gray" variant="subtle">
                <IconBrandInstagram size={18} stroke={1.5} />
              </ActionIcon>
            </a>
            <a href="/terms" className={classes.link}>
              Terms and Conditions
            </a>
            <a href="/privacy" className={classes.link}>
              Privacy Policy
            </a>
            <a href="/account" className={classes.link}>
              Account Management
            </a>
          </Group>

          <Group m={0} p={0}>
            {Object.entries(occasionData).map(([key, value]) => (
              <Link key={key} href={`/gifts-for/${key}`} className={classes.link}>
                {value.title}
              </Link>
            ))}
          </Group>

          <Group m={0} p={0}>
            {Object.entries(categoryData).map(([key, value]) => (
              <Link key={key} href={`/home-based/${key}`} className={classes.link}>
                {value.title}
              </Link>
            ))}
          </Group>
        </Stack>
      </Container>
    </div>
  );
}