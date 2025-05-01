import { Navbar } from '../../components/Navbar/navbar';
import { Group, Stack, Container, Text, Title, Button, SimpleGrid, Paper, Badge } from '@mantine/core';
import { Footer } from '../../components/Footer/Footer';
import Link from 'next/link';
import Head from 'next/head';
import { getMothersDayGifts, Gift } from '../../lib/gifts';
import Image from 'next/image';
import { useState } from 'react';
import { IconCheck } from '@tabler/icons-react';

interface NearMePageProps {
  category: string;
  gifts: Gift[];
}

const nearMeData = {
  'gifts': {
    title: "Find Gifts Near Me",
    description: "Discover unique gifts crafted by passionate home-based vendors in Singapore. From beautiful flowers to delicious food and cakes, each gift is carefully made with love and attention to detail. Support local artisans while finding thoughtful presents for your loved ones.",
    categories: ['Flowers', 'Food', 'Cakes'],
    metaDescription: "Find local gift shops near you in Singapore. Browse flowers, food, and cakes from nearby vendors. Support local businesses with GiftKakis.",
    keywords: "gifts near me, local gifts singapore, gift shops near me, flowers near me, food near me"
  },
  'gift-shop': {
    title: "Find Gift Shops Near Me",
    description: "Explore unique gift shops run by passionate home-based vendors in your neighborhood. From charming flower boutiques to specialty cake shops and toy stores, each item is crafted with care and dedication. Support local artisans and find one-of-a-kind presents that tell a story.",
    categories: ['Flowers', 'Cakes', 'Toys'],
    metaDescription: "Discover local gift shops in Singapore. Find flowers, cakes, and toys from nearby vendors. Support local businesses with GiftKakis.",
    keywords: "gift shops near me, local gift shops singapore, flowers near me, cakes near me, toys near me"
  },
  'food': {
    title: "Home-Based Cafe Food Near Me",
    description: "Satisfy your cravings with delicious food crafted by passionate home-based vendors in Singapore. From artisanal cakes to specialty teas and gourmet food items, each creation is made with care and attention to detail. Support local artisans while enjoying quality treats that tell a story.",
    categories: ['Cakes', 'Food', 'Beverages'],
    metaDescription: "Find local food vendors in Singapore. Browse cakes, food, and tea from nearby shops. Support local businesses with GiftKakis.",
    keywords: "food near me, local food singapore, cakes near me, tea near me, gourmet food near me"
  },
  'corporate': {
    title: "Meaningful Corporate Gifts Near Me",
    description: "Discover premium corporate gifts crafted by passionate home-based vendors in Singapore. From elegant gift hampers to custom-branded items, each creation is made with care and attention to detail. Support local artisans while strengthening your business relationships with meaningful gifts that tell a story.",
    categories: ['Cakes', 'Tea', 'Food'],
    metaDescription: "Find local corporate gift vendors in Singapore. Browse premium gift hampers and custom-branded items from nearby shops. Support local businesses with GiftKakis.",
    keywords: "corporate gifts near me, business gifts singapore, corporate hampers near me, local corporate gifts"
  }
};

export default function NearMePage({ category, gifts }: NearMePageProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const categoryInfo = nearMeData[category as keyof typeof nearMeData];
  const canonicalUrl = `https://giftkakis.com/near-me/${category}`;

  const filteredGifts = selectedCategory
    ? gifts.filter(gift => gift.category.toLowerCase() === selectedCategory.toLowerCase()).slice(0, 6)
    : gifts.slice(0, 6);

  // Generate structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": categoryInfo.title,
    "description": categoryInfo.metaDescription,
    "url": canonicalUrl,
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": filteredGifts.map((gift, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Product",
          "name": gift.name,
          "description": gift.description,
          "offers": {
            "@type": "Offer",
            "price": gift.price,
            "priceCurrency": "SGD",
            "priceValidUntil": new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
            "availability": "https://schema.org/InStock"
          },
        }
      }))
    }
  };

  return (
    <>
      <Head>
        <title>{categoryInfo.title} - Gift Delivery in Singapore | GiftKakis</title>
        <meta name="description" content={categoryInfo.metaDescription} />
        <meta name="keywords" content={categoryInfo.keywords} />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content={`${categoryInfo.title} | GiftKakis`} />
        <meta property="og:description" content={categoryInfo.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="GiftKakis" />
        <meta property="og:locale" content="en_SG" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${categoryInfo.title} | GiftKakis`} />
        <meta name="twitter:description" content={categoryInfo.metaDescription} />
        <meta name="twitter:site" content="@giftkakis" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <Navbar />
      <Container maw={1200}>
        <Stack justify="center" my={48} align="center">
          <Stack justify="center" align="center" mt={48} mb={64} maw={800}>
            <Title order={1} c="pink" ta="center" fw={700}>
              {categoryInfo.title} in Singapore
            </Title>
            <Text fz="lg" ta="center" maw={800}>
              {categoryInfo.description}
            </Text>
            <Text fz="md" ta="center" c="gray.6" maw={600}>
              Curated by GiftKakis, on {new Date().toLocaleDateString('en-SG', { day: 'numeric', month: 'short', year: 'numeric' })}.
            </Text>
          </Stack>

          <Button mb={48} component={Link} href="https://gift-kakis.web.app" size="md" radius="xl">
            See More Gifts
          </Button>

          {filteredGifts.length > 0 ? (
            <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="xl">
              {filteredGifts.map((gift) => (
                <Paper h={500} key={gift.id} p="md" radius="lg" withBorder>
                  <Stack h="100%" justify="space-between" gap={0}>
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
                      <Group gap={4}>
                        <Text fz="md" c="pink">by {gift.vendor}</Text>
                        <IconCheck size={16} color="pink" />
                      </Group>
                      {gift.leadTime && (
                        <Badge color="pink" variant="light">
                          {gift.leadTime === 1 ? "Available next day" : 
                           gift.leadTime === 2 ? "Available the day after" : 
                           `Available in ${gift.leadTime} days`}
                        </Badge>
                      )}

                      {gift.leadTime && (
                        <Text fz="xs" c="gray.6">Order by {new Date().toLocaleDateString('en-SG', { day: 'numeric', month: 'short', year: 'numeric' })}, for {new Date(Date.now() + gift.leadTime * 24 * 60 * 60 * 1000).toLocaleDateString('en-SG', { day: 'numeric', month: 'short', year: 'numeric' })}</Text>
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
          <Title order={3} ta="center" mb="xl">Build your own hamper, we'll deliver it</Title>
          <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="xl">
            <Paper p={0} radius="lg" withBorder style={{ overflow: 'hidden' }}>
              <Stack align="center" ta="center">
                <div style={{ width: '100%', height: '200px', position: 'relative' }}>
                  <Image
                    src="/Order-Gifts.png"
                    alt="GiftKakis Logo"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <Stack p="md" align="center" ta="center">
                  <Text fz="lg" fw={500}>Build your own Hamper</Text>
                  <Text c="dimmed">Only the best gifts from curated local vendors, build your own hamper and we'll deliver it.</Text>
                </Stack>
              </Stack>
            </Paper>
            <Paper p={0} radius="lg" withBorder style={{ overflow: 'hidden' }}>
              <Stack align="center" ta="center">
                <div style={{ width: '100%', height: '200px', position: 'relative' }}>
                  <Image
                    src="/Order-Delivery.png"
                    alt="GiftKakis Logo"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <Stack p="md" align="center" ta="center">
                  <Text fz="lg" fw={500}>Islandwide Delivery</Text>
                  <Text c="dimmed">$8 Flat-fee delivery for all orders, no matter the distance</Text>
                </Stack>
              </Stack>
            </Paper>
            <Paper p={0} radius="lg" withBorder style={{ overflow: 'hidden' }}>
              <Stack align="center" ta="center">
                <div style={{ width: '100%', height: '200px', position: 'relative' }}>
                  <Image
                    src="/Order-Schedule.png"
                    alt="GiftKakis Logo"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <Stack p="md" align="center" ta="center">
                  <Text fz="lg" fw={500}>Schedule Ahead</Text>
                  <Text c="dimmed">Plan and schedule deliveries in advance, no need to worry about last-minute delivery</Text>
                </Stack>
              </Stack>
            </Paper>
          </SimpleGrid>
        </Stack>

        {/* CTA Section */}
        <Stack align="center" mb={64}>
          <Title order={3} ta="center">Find Local Gifts Near You</Title>
          <Text fz="lg" ta="center" maw={800}>
            Browse our selection of local vendors and find the perfect gift in your neighborhood.
          </Text>
          <Button mt={48} component={Link} href="https://gift-kakis.web.app" size="md" radius="xl">
            See More Gifts
          </Button>
        </Stack>
      </Container>
      <Footer />
    </>
  );
}

export async function getStaticPaths() {
  const paths = Object.keys(nearMeData).map((category) => ({
    params: { category },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { category: string } }) {
  const gifts = await getMothersDayGifts();
  const categoryInfo = nearMeData[params.category as keyof typeof nearMeData];
  
  const filteredGifts = gifts.filter(gift => 
    categoryInfo.categories.map(c => c.toLowerCase()).includes(gift.category.toLowerCase())
  );

  return {
    props: {
      category: params.category,
      gifts: filteredGifts,
    },
    revalidate: 3600,
  };
} 