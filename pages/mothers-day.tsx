import { Navbar } from '../components/Navbar/navbar';
import { Group, Stack, Container, Text, Title, Button, SimpleGrid, Paper, Badge } from '@mantine/core';
import { Footer } from '../components/Footer/Footer';
import Link from 'next/link';
import Head from 'next/head';
import { getMothersDayGifts, Gift } from '../lib/gifts';
import Image from 'next/image';
import { useState } from 'react';

interface MothersDayProps {
  gifts: Gift[];
}

export default function MothersDay({ gifts }: MothersDayProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredGifts = selectedCategory
    ? gifts.filter(gift => gift.category.toLowerCase() === selectedCategory.toLowerCase()).slice(0, 6)
    : gifts.slice(0, 6);

  const categories = ['Flowers', 'Tea'];

  return (
    <>
      <Head>
        <title>Mother's Day Gift Delivery | GiftKakis Gift Delivery</title>
        <meta name="description" content="Order Mother's Day gifts online in Singapore with same-day delivery. Choose from flowers, spa packages, and gourmet hampers. Celebrate mom with thoughtful gifts from local vendors." />
        <meta name="keywords" content="mother's day gifts, mother's day delivery singapore, flowers delivery singapore, spa package singapore, gift hampers singapore, same day delivery" />
        <meta property="og:title" content="Mother's Day Gift Delivery Singapore | GiftKakis" />
        <meta property="og:description" content="Celebrate Mother's Day with thoughtful gifts delivered same-day across Singapore. Choose from flowers, spa packages, and gourmet hampers." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://giftkakis.com/mothers-day" />
      </Head>
      <Navbar></Navbar>
      <Paper p="xs" px="md" my="xs" bg="pink.0">
            <Text fz="md" fw={500} ta="center" c="pink.7">
            Special Offer: From 11 Apr to 11 May, purchase any gift and get another item for your mom for free!*
            </Text>
        </Paper>

      <Container maw={1200}>

        <Stack justify="center" my={48} align="center">
            {/* Hero Section */}
            <Stack justify="center" align="center" mt={48} mb={64} maw={800}>
            <Title order={1} c="pink" ta="center" fw={700}>
                6 Mother's Day Gift Ideas from Local Singapore Shops
            </Title>
            <Text fz="lg" ta="center" maw={800}>
                Finding the perfect gift for Mother's Day? Celebrate mom with thoughtful gifts from Singapore's best home-based vendors. From handcrafted flowers to artisanal cakes, each gift tells a story of local craftsmanship and love.

                Choose from flowers, cakes, and brownies - all delivered across Singapore by GiftKakis.
            </Text>
            <Text fz="md" ta="center" c="gray.6" maw={600}>
            by GiftKakis, updated on 9 Apr 2025.
            </Text>

            </Stack>
            <Button mb={48} component={Link} href="https://gift-kakis.web.app" size="md" radius="xl">
                Order Now
            </Button>
        </Stack>



        {/* Featured Gifts Section */}
        <Stack mb={64} justify="center" align="center">
        
        <Stack justify="center" align="center" mb={48}>
            <Title order={3} ta="center" mb="xl">Go Local this Mother's Day with GiftKakis</Title>
            <Text fz="lg" ta="center" maw={800}>
                Discover unique Singapore gift items from passionate home-based vendors. Each vendor brings their own special touch to their creations, making every gift a meaningful Singapore gift for Mother's Day.
            </Text>
        </Stack>

          {filteredGifts.length > 0 ? (
            <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="xl">
              {filteredGifts.map((gift) => (
                <Paper h={500} key={gift.id} p="md" radius="lg" withBorder>
                  <Stack h="100%" justify="space-between">
                    <div style={{ height: '200px', position: 'relative', overflow: 'hidden', borderRadius: '8px' }}>
                      {gift.imageUrl ? (
                        <Image
                          src={gift.imageUrl}
                          alt={gift.name}
                          fill
                          style={{ objectFit: 'cover' }}
                        />
                      ) : (
                        <div style={{ height: '100%', backgroundColor: '#e9ecef' }} />
                      )}
                    </div>
                    <Stack gap="xs" p={0}>
                      <Text fz="lg" fw={600}>{gift.name}</Text>
                      <Text fz="md" c="pink">by {gift.vendor}</Text>
                      {gift.leadTime && (
                      <Badge color="pink" variant="light">
                        {gift.leadTime === 1 ? "Available next day" : 
                         gift.leadTime === 2 ? "Available the day after" : 
                         `Available in ${gift.leadTime} days`}
                      </Badge>
                      )}

                      {gift.leadTime && (
                      <Text fz="xs" c="gray.6">If ordered on {new Date().toLocaleDateString('en-SG', { day: 'numeric', month: 'short', year: 'numeric' })}, expect gift by {new Date(Date.now() + gift.leadTime * 24 * 60 * 60 * 1000).toLocaleDateString('en-SG', { day: 'numeric', month: 'short', year: 'numeric' })}</Text>
                      )}
                    </Stack>
                    <Text c="dimmed" lineClamp={2}>{gift.description}</Text>
                    <Group justify="space-between">
                      <Text fw={700}>${gift.price.toFixed(2)}</Text>
                      <Button component={Link} href={`https://gift-kakis.web.app/`} variant="light" radius="md" color="pink">
                        Browse More
                      </Button>
                    </Group>
                  </Stack>
                </Paper>
              ))}
            </SimpleGrid>
          ) : (
            <Text ta="center" c="dimmed">No gifts available at the moment.</Text>
          )}
        </Stack>

        {/* Why Choose Us Section */}
        <Stack mb={64}>
          <Title order={3} ta="center" mb="xl">Cheaper Delivery with GiftKakis</Title>
          <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="xl">
            <Paper p="md" radius="lg" withBorder>
              <Stack align="center" ta="center">
                <Text fz="xl" fw={700}>🎁</Text>
                <Text fz="lg" fw={500}>Curated Selection</Text>
                <Text c="dimmed">Only the best gifts from trusted local vendors</Text>
              </Stack>
            </Paper>
            <Paper p="md" radius="lg" withBorder>
              <Stack align="center" ta="center">
                <Text fz="xl" fw={700}>🚚</Text>
                <Text fz="lg" fw={500}>Islandwide Delivery</Text>
                <Text c="dimmed">$8 Flat-fee delivery for all orders, no matter the distance</Text>
              </Stack>
            </Paper>
            <Paper p="md" radius="lg" withBorder>
              <Stack align="center" ta="center">
                <Text fz="xl" fw={700}>📅</Text>
                <Text fz="lg" fw={500}>Schedule Ahead</Text>
                <Text c="dimmed">Plan and schedule deliveries in advance, no need to worry about last-minute delivery</Text>
              </Stack>
            </Paper>
          </SimpleGrid>
        </Stack>

        {/* CTA Section */}
        <Stack align="center" mb={64}>
          <Title order={3} ta="center">Make This Mother's Day Special</Title>
          <Text fz="xl" ta="center" maw={800}>
            Don't wait until the last minute. Browse our selection of thoughtful gifts and make this Mother's Day one to remember.
          </Text>
          <Button component={Link} href="https://gift-kakis.web.app" size="lg" radius="xl" mt="xl">
            Start Shopping Now
          </Button>

          <Text fz="xs" mt="xl" ta="center" c="gray.6" maw={600}>
            *Terms and Conditions: This special offer is limited to a maximum of 3 users who make a purchase between 0000 on 11 Apr and 2359 on 11 May 2025. The free gift can be chosen by the user from our available selection. The free gift may be delivered separately from the original purchase. GiftKakis reserves the right to modify or terminate this offer at any time without prior notice.
          </Text>
        </Stack>
      </Container>
      <Footer></Footer>
    </>
  );
}

export async function getStaticProps() {
  const gifts = await getMothersDayGifts();
  const filteredGifts = gifts
    .filter(gift => ['flowers', 'cakes', 'tea'].includes(gift.category.toLowerCase()))
    .sort((a, b) => {
      const order: Record<string, number> = { 'flowers': 0, 'cakes': 1, 'tea': 2 };
      return (order[a.category.toLowerCase()] || 0) - (order[b.category.toLowerCase()] || 0);
    });
  
  return {
    props: {
      gifts: filteredGifts,
    },
    // Revalidate the page every hour to update the gift listings
    revalidate: 3600,
  };
} 