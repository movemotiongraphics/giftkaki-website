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
               Mother's Day Gift with GiftKakis
            </Title>

            <Text fz="lg" ta="center" maw={800}>
                Finding the perfect gift for Mother's Day? Celebrate mom with thoughtful gifts from Singapore's best home-based vendors. From handcrafted flowers to artisanal cakes, each gift tells a story of local craftsmanship and love.

                Choose from flowers, cakes, and brownies - all delivered across Singapore by GiftKakis.
            </Text>
           
                       {/* Campaign Cards */}
                       <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="xl" w="100%" mt="xl">
              <Paper p="md" radius="lg" withBorder>
                <Stack gap="xs">
                  <Title order={4} c="pink">Like & Tag to Win</Title>
                  <Text fz="md">
                    Want to WIN a gift for you and your mom this Mother's Day? 💐
                  </Text>
                  <Text fw={500}>How to participate:</Text>
                  <ul>
                    <li>Like our post</li>
                    <li>Follow @giftkakis</li>
                    <li>Tag 3 friends</li>
                    <li>(Bonus) Share on IG Stories & tag @giftkakis</li>
                  </ul>
                  <Text fw={500}>🎁 Winner receive a gift of their choice from our platform.</Text>
                  <Text></Text>
                </Stack>
              </Paper>

              <Paper p="md" radius="lg" withBorder>
                <Stack gap="xs">
                  <Title order={4} c="pink">Buy a gift, Mom gets one too</Title>
                  <Text fz="md">
                    Buy a gift for anyone — and your mom might get one too!
                    3 lucky winners will receive a surprise gift for their mum from GiftKakis 💌
                  </Text>
                  <Text mb={0} fw={500}>How to participate:</Text>
                  <ul>
                    <li>Head to GiftKakis.com</li>
                    <li>Buy any gift from our vendors</li>
                    <li>Purchase between April 16 to May 6</li>
                    <li>Each gift = 1 entry (multiple purchases allowed)</li>
                  </ul>
                  <Text fw={500}>🎁 3 winners receive a gift of their choice from our platform.</Text>
                  <Text></Text>
                </Stack>
              </Paper>
            </SimpleGrid>


            </Stack>
            <Button mb={48} component={Link} href="https://gift-kakis.web.app" size="md" radius="xl">
                Start Gifting
            </Button>
        </Stack>



        {/* Featured Gifts Section */}
        <Stack mb={64} justify="center" align="center">
        
        <Stack justify="center" align="center" mb={48}>
            <Title order={3} ta="center" mb="xl">Go Local with GiftKakis this Mother's Day</Title>
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
          Start Gifting
          </Button>

          <Text fz="xs" mt="xl" ta="center" c="gray.6" maw={600}>
            *Terms and Conditions: 
            
            Like & Tag to Win Giveaway:
            - This giveaway is open to Singapore residents only
            - Participants must complete all required actions (like post, follow @giftkakis, tag 3 friends) to be eligible
            - The winner will be randomly selected from all eligible participants
            - The winner will receive a gift of their choice from our platform
            - The giveaway ends on May 6, 2025 at 23:59 SGT
            - The winner will be announced on May 7, 2025 via Instagram Stories
            - GiftKakis reserves the right to modify or terminate this giveaway at any time without prior notice
            - Maximum gift value is $90.

            Buy a Gift, Mom Gets One Too Giveaway:
            - This giveaway is open to Singapore residents only
            - Participants must make a purchase on GiftKakis.com between April 16, 2025 and May 6, 2025
            - Each gift purchase equals one entry (multiple purchases allowed)
            - Three winners will be randomly selected from all eligible participants
            - Winners will receive a gift of their choice from our platform
            - The winners will be announced on May 7, 2025 via email
            - GiftKakis reserves the right to modify or terminate this giveaway at any time without prior notice
            - Maximum gift value is $90.

            General Terms:
            - No cash alternatives will be offered
            - Winners must claim their prizes within 7 days of announcement
            - GiftKakis's decision is final and no correspondence will be entered into
            - By participating, you agree to be bound by these terms and conditions
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