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
  
  const mockdata = [
    {
      icon: IconCode,
      title: 'Open source',
      description: 'This Pokémon’s cry is very loud and distracting',
    },
    {
      icon: IconCoin,
      title: 'Free for everyone',
      description: 'The fluid of Smeargle’s tail secretions changes',
    },
    {
      icon: IconBook,
      title: 'Documentation',
      description: 'Yanma is capable of seeing 360 degrees without',
    },
    {
      icon: IconFingerprint,
      title: 'Security',
      description: 'The shell’s rounded shape and the grooves on its.',
    },
    {
      icon: IconChartPie3,
      title: 'Analytics',
      description: 'This Pokémon uses its flying ability to quickly chase',
    },
    {
      icon: IconNotification,
      title: 'Notifications',
      description: 'Combusken battles with the intensely hot flames it spews',
    },
  ];
  
  export function Navbar() {
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
    const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
    const theme = useMantineTheme();
  
    const links = mockdata.map((item) => (
      <UnstyledButton className={classes.subLink} key={item.title}>
        <Group wrap="nowrap" align="flex-start">
          <ThemeIcon size={34} variant="default" radius="md">
            <item.icon size={22} color={theme.colors.blue[6]} />
          </ThemeIcon>
          <div>
            <Text size="sm" fw={500}>
              {item.title}
            </Text>
            <Text size="xs" c="dimmed">
              {item.description}
            </Text>
          </div>
        </Group>
      </UnstyledButton>
    ));
  
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
              <a href="/" className={classes.link}>
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
              <Button variant="default">Log in</Button>
              <a href="https://gift-kakis.web.app"><Button>Start Gifting</Button></a>
            </Group>
          </ScrollArea>
        </Drawer>
      </Box>
    );
  }