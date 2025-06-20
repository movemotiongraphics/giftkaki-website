import { Navbar } from '../components/Navbar/navbar';
import { Group, Stack, Container, Text, Title, Button, SimpleGrid, Paper, Badge, List, Slider, Box } from '@mantine/core';
import { Footer } from '../components/Footer/Footer';
import Link from 'next/link';
import Head from 'next/head';
import { IconCheck, IconGift, IconCalendar, IconUserCheck, IconBrandX } from '@tabler/icons-react';
import PenguinLogo from '../public/PenguinOnly.svg'
import DeliveryPenguin from '../public/deliveryPenguin-2.png'
import Image from 'next/image';

export default function GiftAssistant() {
  return (
    <>
      <Head>
        <title>Professional Gift Assistant Service | GiftKakis</title>
        <meta name="description" content="Outsource your corporate gifting to GiftKakis. We handle everything from scheduling to delivery, helping busy professionals maintain meaningful client relationships." />
        <meta name="keywords" content="corporate gifting, client gifts, business gifts, automated gifting, gift assistant, client relationship management" />
        <meta property="og:title" content="Professional Gift Assistant Service | GiftKakis" />
        <meta property="og:description" content="Let us handle your corporate gifting needs. Perfect for financial advisors, real estate agents, and sales professionals." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://giftkakis.com/gift-assistant" />
      </Head>
      <Navbar></Navbar>

      <Container maw={1200}>
        <Stack justify="center" my={48} align="center">
          {/* Hero Section */}
          <Stack gap={0}>
          <Title fz={48} mt="md" order={1} c="black" ta="center" fw={500}>
            Automate client relationships with thoughtful, timely gifts.
          </Title>

          <Container fluid mt={48}>
            <Text fz="xl" ta="center" maw={800} fw="500">
              Get a <span style={{ color: '#E64980' }}>Personal Gift Assistant</span> from GiftKakis. Define your allocated budget, and we handle everything from scheduling to delivery, to help you maintain meaningful client retention and relationships.
            </Text>
          </Container>
        </Stack>

        <Button mb="xl" mt={48} component={Link} href="https://forms.gle/TexUyaXiLDVyafkK9" size="md" radius="xl">
            Contact Us
        </Button>

          {/* Budget Slider Section */}
          <Paper
            withBorder
            mt={48}
            p="xl" 
            radius="lg" 
            maw="800"
            mb="xl">
            <Stack gap={24} w="100%" maw={800}>
              <Group w={"100%"} align="center" justify='center'>
                <Image
                src={DeliveryPenguin}
                height={80}
                alt="logo"
                />
              </Group>
              <Title order={3} ta="center" c="pink">Choose your gift budget</Title>
              <Text fz="sm" ta="center" c="dimmed" maw={800} fw="500">
                This includes the cost of the gifts, and the cost of the delivery.
              </Text>
              
              <Box px="xl">
                <Slider
                  defaultValue={50}
                  min={50}
                  max={500}
                  step={50}
                  marks={[
                    { value: 50, label: '$50/mth' },
                    { value: 200, label: '$200/mth' },
                    { value: 350, label: '$350/mth' },
                    { value: 500, label: 'Custom' },
                  ]}
                  styles={{
                    markLabel: {
                      fontSize: '14px',
                      fontWeight: 700,
                    },
                  }}
                />
              </Box>

              <Paper p="xl" radius="lg" bg="gray.0" mt="xl">
                <Stack>
                  <Title order={4}>What you get:</Title>
                  <List
                    spacing="sm"
                    size="sm"
                    icon={<IconCheck size={16} color="#E64980" />}
                  >
                    <List.Item>Dedicated gift assistant</List.Item>
                    <List.Item>Select from more than 60 curated gifts</List.Item>
                    <List.Item>Personalized selections</List.Item>
                    <List.Item>Delivery tracking</List.Item>
                    <List.Item>Monthly satisfaction report</List.Item>
                  </List>
                </Stack>
              </Paper>
            </Stack>
          </Paper>

          <Title order={3} ta="center" mt="xl">How it works?</Title>

          <Stack mt={64}>
          <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="xl">
            <Paper p={0} radius="lg" withBorder style={{ overflow: 'hidden' }}>
              <Stack align="center" ta="center">
                <div style={{ width: '100%', height: '200px', position: 'relative' }}>
                  <Image
                    src="/Order-Schedule.png"
                    alt="Build your own Hamper"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <Stack p="md" align="center" ta="center">
                  <Text fz="lg" fw={500}>Send us your customer's preferences</Text>
                  <Text c="dimmed">Send us your customer list, and we'll build the gifts based on your customer's preferences.</Text>
                </Stack>
              </Stack>
            </Paper>
            <Paper p={0} radius="lg" withBorder style={{ overflow: 'hidden' }}>
              <Stack align="center" ta="center">
                <div style={{ width: '100%', height: '200px', position: 'relative' }}>
                  <Image
                    src="/Order-Gifts.png"
                    alt="Islandwide Delivery"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <Stack p="md" align="center" ta="center">
                  <Text fz="lg" fw={500}>We'll build and deliver the gifts</Text>
                  <Text c="dimmed">We'll purchase the gifts, and deliver them to your customers on important dates.</Text>
                </Stack>
              </Stack>
            </Paper>
            <Paper p={0} radius="lg" withBorder style={{ overflow: 'hidden' }}>
              <Stack align="center" ta="center">
                <div style={{ width: '100%', height: '200px', position: 'relative' }}>
                  <Image
                    src="/Order-Report.png"
                    alt="Schedule Ahead"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <Stack p="md" align="center" ta="center">
                  <Text fz="lg" fw={500}>You receive updates.</Text>
                  <Text c="dimmed">After the delivery, you'll receive a satisfaction report and we'll adjust the gifts if needed to suit your business goals.</Text>
                </Stack>
              </Stack>
            </Paper>
          </SimpleGrid>
        </Stack>

        </Stack>
      </Container>
      <Footer></Footer>
    </>
  );
} 