import { Navbar } from '../components/Navbar/navbar';
import { Group, Stack, Container, Text, Title, Button, SimpleGrid, Paper, Badge, List, Slider, Box } from '@mantine/core';
import { Footer } from '../components/Footer/Footer';
import Link from 'next/link';
import Head from 'next/head';
import { IconCheck, IconGift, IconCalendar, IconUserCheck, IconBrandX, IconBuilding, IconUsers, IconTrophy } from '@tabler/icons-react';
import PenguinLogo from '../public/PenguinOnly.svg'
import DeliveryPenguin from '../public/deliveryPenguin-2.png'
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { getVendors, Vendor } from '../lib/vendors';

export default function CorporateGifting() {
  const [vendors, setVendors] = useState<Vendor[]>([]);

  useEffect(() => {
    const fetchVendors = async () => {
      const vendorsData = await getVendors();
      setVendors(vendorsData);
    };
    fetchVendors();
  }, []);

  return (
    <>
      <Head>
        <title>Corporate Gifting Solutions | GiftKakis</title>
        <meta name="description" content="Elevate your corporate relationships with premium gifting solutions. From client appreciation to employee recognition, we deliver meaningful corporate gifts that strengthen business bonds." />
        <meta name="keywords" content="corporate gifts, business gifts, client gifts, employee gifts, corporate hampers, business hampers, corporate gifting solutions" />
        <meta property="og:title" content="Corporate Gifting Solutions | GiftKakis" />
        <meta property="og:description" content="Professional corporate gifting for businesses. Perfect for client appreciation, employee recognition, and building stronger business relationships." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://giftkakis.com/corporate-gifting" />
      </Head>
      <Navbar></Navbar>

      <Container maw={1000}>
        <Stack justify="center" my={48} align="center">
          {/* Hero Section */}
          <Stack gap={0}>
          <Title fz={48} mt="md" order={1} c="black" ta="center" fw={500}>
            Elevate the quality of your corporate gifts with GiftKakis.
          </Title>

          <Container fluid mt={24}>
                {/* Left: Vendor Images */}
                <Box style={{ flex: 1, justifyItems: 'center' }} my={48}>
                  <SimpleGrid cols={3} w={450} spacing="sm">
                    {vendors.slice(0, 9).map((vendor, index) => (
                      <Paper key={vendor.id} p="xs" radius="md" ta="center" bg="gray.0">
                        <div style={{ width: '120px', height: '120px', position: 'relative', margin: '0 auto' }}>
                          {vendor.imageUrl ? (
                            <Image
                              src={vendor.imageUrl}
                              alt={vendor.name}
                              fill
                              style={{ objectFit: 'cover', borderRadius: '8px' }}
                            />
                          ) : (
                            <div style={{ 
                              width: '100%', 
                              height: '100%', 
                              backgroundColor: '#e9ecef', 
                              borderRadius: '8px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center'
                            }}>
                              <Text size="xs" c="dimmed">{vendor.name.charAt(0)}</Text>
                            </div>
                          )}
                        </div>
                        <Text size="xs" mt="xs" lineClamp={1}>{vendor.name}</Text>
                      </Paper>
                    ))}
                  </SimpleGrid>
                  {vendors.length > 9 && (
                    <Text size="sm" c="dimmed" ta="center" mt="sm">
                      More than 60+ Gifts Around Singapore
                    </Text>
                  )}
                </Box>
            <Text fz="xl" ta="center" maw={800} fw="500">
              Let GiftKakis help your increase employee retention and client relationships, with <span style={{ color: '#E64980' }}>dedicated account managers</span>  and a wide range of gifts. From selection to delivery, we handle it all.
              
            </Text>
          </Container>
        </Stack>

        <Button mb="xl" mt={48} component={Link} href="/about" size="md" radius="xl">
            Get Corporate Quote
        </Button>

          <Title order={3} ta="center" mt="xl">How our corporate gifting works</Title>

          <Stack mt={64}>
          <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="xl">
            <Paper p={0} radius="lg" withBorder style={{ overflow: 'hidden' }}>
              <Stack align="center" ta="center">
                <div style={{ width: '100%', height: '200px', position: 'relative' }}>
                  <Image
                    src="/Order-Schedule.png"
                    alt="Corporate Consultation"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <Stack p="md" align="center" ta="center">
                  <Text fz="lg" fw={500}>Consultation & Planning</Text>
                  <Text c="dimmed">We understand your business goals and design a gifting strategy that aligns with your brand and budget.</Text>
                </Stack>
              </Stack>
            </Paper>
            <Paper p={0} radius="lg" withBorder style={{ overflow: 'hidden' }}>
              <Stack align="center" ta="center">
                <div style={{ width: '100%', height: '200px', position: 'relative' }}>
                  <Image
                    src="/Order-Gifts.png"
                    alt="Premium Gift Curation"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <Stack p="md" align="center" ta="center">
                  <Text fz="lg" fw={500}>Premium Gift Curation</Text>
                  <Text c="dimmed">Our experts curate premium gifts with custom branding and deliver them to your recipients nationwide.</Text>
                </Stack>
              </Stack>
            </Paper>
            <Paper p={0} radius="lg" withBorder style={{ overflow: 'hidden' }}>
              <Stack align="center" ta="center">
                <div style={{ width: '100%', height: '200px', position: 'relative' }}>
                  <Image
                    src="/Order-Report.png"
                    alt="Relationship Growth"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <Stack p="md" align="center" ta="center">
                  <Text fz="lg" fw={500}>Measure & Grow</Text>
                  <Text c="dimmed">Track the impact of your gifting program with detailed reports and insights to optimize your strategy.</Text>
                </Stack>
              </Stack>
            </Paper>
          </SimpleGrid>
        </Stack>

        {/* Corporate Benefits Section */}
        <Paper withBorder mt={64} p="xl" radius="lg" maw={800}>
          <Title order={3} ta="center" mb="xl">Why choose GiftKakis for corporate gifting?</Title>
          <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
            <Stack gap="md">
              <Group>
                <IconCheck size={20} color="#E64980" />
                <Text fw={500}>Custom Branding</Text>
              </Group>
              <Text size="sm" c="dimmed">Personalize gifts with your company logo and branding for maximum impact.</Text>
            </Stack>
            <Stack gap="md">
              <Group>
                <IconCheck size={20} color="#E64980" />
                <Text fw={500}>Bulk Discounts</Text>
              </Group>
              <Text size="sm" c="dimmed">Special pricing for corporate orders and ongoing gifting programs.</Text>
            </Stack>
            <Stack gap="md">
              <Group>
                <IconCheck size={20} color="#E64980" />
                <Text fw={500}>Nationwide Delivery</Text>
              </Group>
              <Text size="sm" c="dimmed">Reliable delivery to any location across the country with tracking.</Text>
            </Stack>
            <Stack gap="md">
              <Group>
                <IconCheck size={20} color="#E64980" />
                <Text fw={500}>Dedicated Account Manager</Text>
              </Group>
              <Text size="sm" c="dimmed">Personal support for all your corporate gifting needs and coordination.</Text>
            </Stack>
          </SimpleGrid>
        </Paper>

        </Stack>
      </Container>
      <Footer></Footer>
    </>
  );
} 