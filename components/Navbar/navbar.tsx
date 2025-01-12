import {
    IconBook,
    IconChartPie3,
    IconChevronDown,
    IconCode,
    IconCoin,
    IconFingerprint,
    IconNotification,
  } from '@tabler/icons-react';
  import {
    Anchor,
    Box,
    Burger,
    Button,
    Center,
    Collapse,
    Divider,
    Drawer,
    Group,
    HoverCard,
    ScrollArea,
    SimpleGrid,
    Text,
    ThemeIcon,
    UnstyledButton,
    useMantineTheme,
  } from '@mantine/core';
  import { useDisclosure } from '@mantine/hooks';
  import KakiLogo from '../../public/KakiLogo.svg';
  import classes from './navbar.module.css';
  import Image from 'next/image'

  
  export function Navbar() {
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
    const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
    const theme = useMantineTheme();
  
    return (
      <Box pb={120}>
        <header className={classes.header}>
          <Group justify="space-between" h="100%">
          <a href="/">
          <Image
            src={KakiLogo}
            height={20}
            alt="logo"
            />
          </a>
  
            <Group h="100%" gap={0} visibleFrom="sm">
              <a href="/about" className={classes.link}>
                About
              </a>
              <a href="/contact" className={classes.link}>
                Contact
              </a>
            </Group>
  
            <Group visibleFrom="sm">
            <a href="https://gift-kakis.web.app"><Button radius="xl" variant="subtle">Log in</Button></a>
              <a href="https://gift-kakis.web.app"><Button radius="xl">Start Gifting</Button></a>
            </Group>
  
            <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
          </Group>
        </header>
  
        <Drawer
          opened={drawerOpened}
          onClose={closeDrawer}
          size="100%"
          padding="md"
          title="GiftKaki"
          hiddenFrom="sm"
          zIndex={1000000}
        >
          <ScrollArea h="calc(100vh - 80px" mx="-md">
            <Divider my="sm" />
  
            <a href="#" className={classes.link}>
              Home
            </a>
            <a href="/contact" className={classes.link}>
              Contact
            </a>
            <a href="/terms" className={classes.link}>
              Terms and Conditions
            </a>
  
            <Divider my="sm" />
  
            <Group justify="center" grow pb="xl" px="md">
              <a href="https://gift-kakis.web.app"><Button variant="default">Get the app</Button></a>
              <a href="https://gift-kakis.web.app"><Button>Start Gifting</Button></a>
            </Group>
          </ScrollArea>
        </Drawer>
      </Box>
    );
  }