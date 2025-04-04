import { Navbar } from '../components/Navbar/navbar';
import { TitleCard } from '../components/FeatureTitle/TitleCard';
import { Group, Stack, Container, Button, Text, Title, SimpleGrid, Paper, ThemeIcon, Divider } from '@mantine/core';
import { TitleGrid } from '../components/TitleGrid/TitleGrid';
import { Steps } from '../components/Steps/Steps';
import { Footer } from '../components/Footer/Footer';
import Image from "next/image";
import { IconTag, IconUsers, IconTruck, IconDeviceMobile, IconChartBar, IconCreditCard, IconReplace, IconX, IconCoin, IconBellRinging, IconAd, IconShoppingCart, IconClipboardList } from '@tabler/icons-react';

import VendorImage1 from "../public/Vendor1.png"
import VendorImage2 from "../public/Vendor2.png"
import VendorImage3 from "../public/Vendor3.png"
import VendorImage4 from "../public/Vendor4.png"
import Link from 'next/link';

export default function About() {
  return (
    <>
      <Navbar></Navbar>
      <Container maw={1000} content="center">
        <Stack content="center" align="Center">
        <Stack maw={800} justify="center">
            <Group justify='center'>
                <Title mt={48} c="pink">
                Sell your product in GiftKakis
                </Title>
            </Group>

            <Group align="center" justify='center' content="center">
                <Text fz="xl" ta="center">
                  As a vendor in GiftKakis, you'll be able to provide gift offerings to our users. This means that you'll receive a payout everytime someone buys your product on our platform.
                </Text>
            </Group>

            <Stack justify='center' mt={48}>                
                <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
                  <Paper p="md" radius="lg" withBorder>
                    <Stack>
                      <div style={{ height: '200px', position: 'relative', overflow: 'hidden', borderRadius: '8px' }}>
                        <Image
                          src={VendorImage3}
                          alt="Vendor delivery services"
                          fill
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                      <Group>
                        <Text fz="lg" fw={500}>We'll do the delivery</Text>
                      </Group>
                      <Text mt="sm" c="dimmed">
                        Sell anything, from flowers to cards, and we'll do the delivery when the customer orders.
                      </Text>
                    </Stack>
                  </Paper>
                  
                  <Paper p="md" radius="lg" withBorder>
                    <Stack>
                      <div style={{ height: '200px', position: 'relative', overflow: 'hidden', borderRadius: '8px' }}>
                        <Image
                          src={VendorImage2}
                          alt="Customer acquisition"
                          fill
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                      <Group>
                        <Text fz="lg" fw={500}>Acquire More Customers</Text>
                      </Group>
                      <Text mt="sm" c="dimmed">
                        We'll help bring additional customers to your shop, by cross promoting your products on our platform.
                      </Text>
                    </Stack>
                  </Paper>
                  
                  <Paper p="md" radius="lg" withBorder>
                    <Stack>
                      <div style={{ height: '200px', position: 'relative', overflow: 'hidden', borderRadius: '8px' }}>
                        <Image
                          src={VendorImage1}
                          alt="Order form"
                          fill
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                      <Group>
                        <Text fz="lg" fw={500}>Your Shop's Homepage</Text>
                      </Group>
                      <Text mt="sm" c="dimmed">
                        Get your own shop's homepages for your customers to directly purchase your products. Look at one of our vendor's {" "}
                         <a href="https://gift-kakis.web.app/soopsoopcoffee.sg/order" style={{ textDecoration: 'none', color: '#e64980' }}>example here!</a>
                      </Text>
                    </Stack>
                  </Paper>
            
                  
                  <Paper p="md" radius="lg" withBorder>
                    <Stack>
                      <div style={{ height: '200px', position: 'relative', overflow: 'hidden', borderRadius: '8px' }}>
                        <Image
                          src={VendorImage4}
                          alt="Calendar planning"
                          fill
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                      <Group>
                        <Text fz="lg" fw={500}>Plan For Orders Ahead</Text>
                      </Group>
                      <Text mt="sm" c="dimmed">
                        Customers who use the calendar can plan orders far ahead, so you'll be able to plan your production ahead of time.
                      </Text>
                    </Stack>
                  </Paper>
                </SimpleGrid>
            </Stack>
            
            <Stack justify="center" align="center" mt={48} mb={48}>
              <Title c="pink" order={2} fw={700}>All in One Solution</Title>
              <Text fz="xl" ta="center" maw={700} mt="sm">
                No more using multiple services. GiftKakis brings everything together in one platform.
              </Text>
              
              <Paper p="xl" radius="md" withBorder mt={32} maw={800} w="100%">
                <Stack gap="md">
                  
                  <Group justify="space-between" align="center">
                    <Group>
                      <ThemeIcon size={48} radius="md" color="pink">
                        <IconShoppingCart size={24} />
                      </ThemeIcon>
                      <div>
                        <Text fz="lg" fw={600}>Shop Homepage & Order Forms</Text>
                        <Text fz="sm" c="dimmed">Replaces Stripe, Cococart, Take.app</Text>
                      </div>
                    </Group>
                    <Text fz="xl" fw={700}>$10</Text>
                  </Group>
                  
                  <Group justify="space-between" align="center">
                    <Group>
                      <ThemeIcon size={48} radius="md" color="pink">
                        <IconClipboardList size={24} />
                      </ThemeIcon>
                      <div>
                        <Text fz="lg" fw={600}>Order Management System</Text>
                        <Text fz="sm" c="dimmed">Replaces Notion, Google Sheets</Text>
                      </div>
                    </Group>
                    <Text fz="xl" fw={700}>$15</Text>
                  </Group>

                  <Group justify="space-between" align="center">
                    <Group>
                      <ThemeIcon size={48} radius="md" color="pink">
                        <IconTruck size={24} />
                      </ThemeIcon>
                      <div>
                        <Text fz="lg" fw={600}>Islandwide Gift Delivery</Text>
                        <Text fz="sm" c="dimmed">Replaces Lalamove, Grab</Text>
                      </div>
                    </Group>
                    <Text fz="xl" fw={700}>$20</Text>
                  </Group>

                  <Group justify="space-between" align="center">
                    <Group>
                      <ThemeIcon size={48} radius="md" color="pink">
                        <IconAd size={24} />
                      </ThemeIcon>
                      <div>
                        <Text fz="lg" fw={600}>Platform Advertising</Text>
                        <Text fz="sm" c="dimmed">Replaces Google Ads, Google Sheets</Text>
                      </div>
                    </Group>
                    <Text fz="xl" fw={700}>$15</Text>
                  </Group>

                  <Group justify="space-between" align="center">
                    <Group>
                      <ThemeIcon size={48} radius="md" color="pink">
                        <IconBellRinging size={24} />
                      </ThemeIcon>
                      <div>
                        <Text fz="lg" fw={600}>Order & Customer Notifications</Text>
                        <Text fz="sm" c="dimmed">Replaces Whatsapp Business, Telegram Premium</Text>
                      </div>
                    </Group>
                    <Text fz="xl" fw={700}>$5</Text>
                  </Group>

                  <Group justify="space-between" align="center">
                    <Group>
                      <ThemeIcon size={48} radius="md" color="pink">
                        <IconCreditCard size={24} />
                      </ThemeIcon>
                      <div>
                        <Text fz="lg" fw={600}>Payment Collection</Text>
                        <Text fz="sm" c="dimmed">Replaces Shopify, Stripe & Lemonsqueezy</Text>
                      </div>
                    </Group>
                    <Text fz="xl" fw={700}>$5</Text>
                  </Group>
                  
                  <Divider my="xs" />
                  
                  <Group justify="space-between" align="center">
                    <Group>
                      <div>
                        <Text fz="lg" fw={600} c="dimmed" td="line-through">What You'd Spend Otherwise</Text>
                      </div>
                    </Group>
                    <Text fz="lg" fw={700} c="pink" td="line-through">$70/mo</Text>
                  </Group>
                  
                  <Group justify="space-between" align="start">
                    <Group>
                      <div>
                        <Text fz="lg" fw={600}>Join GiftKakis as Vendor ✨</Text>
                      </div>
                    </Group>
                    <Stack justify="end" gap="0" align="end">
                      <Text fz="xl" fw={700}>$0/mo</Text>
                      <Text fz="xs" fw={400}>We only earn when you do!</Text>
                    </Stack>
  
                  </Group>
                </Stack>
              </Paper>
            </Stack>
            
            <Stack justify="center" align="center">
            <a href="https://gift-kakis.web.app/vendor/register">
            <Button radius="xl" size="lg">
              Sign Up as Vendor
            </Button>
            </a>
            <Text fz="xs" ta="center" c="gray">
                  When you sign up, you agree to the vendor <a href="/terms">terms and conditions</a>.
                </Text>
            </Stack>
        </Stack>

        </Stack>
      </Container>

      <Footer></Footer>
    </>
  );
}
