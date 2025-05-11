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
    Stack,
    Badge,
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
      <Box>
        <header className={classes.header}>
          <Group justify="space-between" h="100%">

            <Group h="100%" gap={0} visibleFrom="sm">
            <Group mr={24}>
              <a href="/">
              <Image
                src={KakiLogo}
                height={20}
                alt="logo"
                />
              </a>
            </Group>
            
              <a href="/about" className={classes.link}>
                <Text size='md' fw={500}>About Us</Text>
              </a>
              <a href="/contact" className={classes.link}>
                <Text size='md' fw={500}>Contact</Text>
              </a>
              <a href="/vendor" className={classes.link}>
                <Text size='md' mr={8} fw={500}>Vendors</Text>
              </a>
              <a href="/gift-assistant" className={classes.link}>
                <Text size='md' mr={8} fw={500}>Gift Assistant</Text>
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
          title=''
          hiddenFrom="sm"
          zIndex={1000000}
        >
          <ScrollArea h="calc(100vh - 80px" mx="-md">
            <a className={classes.mobileLogo} href="/">
              <Image
                src={KakiLogo}
                height={36}
                alt="logo"
                />
            </a>
            
            <Stack mt="xl">
              <a href="/about" className={classes.link}>
                <Text size='xl' fw={500}>About</Text>
              </a>
              <a href="/contact" className={classes.link}>
                <Text size='xl' fw={500}>Contact</Text>
              </a>
              <a href="/vendor" className={classes.link}>
                <Text size='xl' mr={8} fw={500}>Vendors</Text>
              </a>
            </Stack>
  
  
            <Group justify="center" mt="xl" pb="xl" px="md">
              <a href="https://gift-kakis.web.app"><Button disabled={true} size="lg" radius="xl" variant="default">Get the app</Button></a>
              <a href="https://gift-kakis.web.app"><Button size="lg" radius="xl" >Start Gifting</Button></a>
            </Group>
          </ScrollArea>
        </Drawer>
      </Box>
    );
  }