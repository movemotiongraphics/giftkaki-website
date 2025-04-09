import { Navbar } from '../../components/Navbar/navbar';
import { Group, Stack, Container, Text, Title, Button, SimpleGrid, Paper, Badge } from '@mantine/core';
import { Footer } from '../../components/Footer/Footer';
import Link from 'next/link';
import Head from 'next/head';
import { getMothersDayGifts, Gift } from '../../lib/gifts';
import Image from 'next/image';
import { useState } from 'react';
import { IconCheck } from '@tabler/icons-react';

interface CategoryPageProps {
  category: string;
  gifts: Gift[];
}

const categoryData = {
  'flowers': {
    title: "Flowers",
    description: "Brighten someone's day with carefully crafted floral arrangements from Singapore's home-based florists. From elegant roses to exotic orchids, each bouquet is thoughtfully designed by local artisans who pour their passion into every creation. We've carefully curated a selection of the finest home-based florists who understand the art of floral design. Support these talented local artisans and make their day special with our reliable delivery service across Singapore.",
    metaDescription: "Order fresh flowers online in Singapore from carefully curated home-based florists. Choose from roses, orchids, and more. Brighten their day with flowers from local gift shops.",
    keywords: "flowers delivery singapore, flower delivery, florist singapore, home based florist, fresh flowers singapore"
  },
  'cakes': {
    title: "Home-baked Cakes",
    description: "Celebrate with carefully crafted cakes from Singapore's home-based bakeries and pastry shops. From classic chocolate cakes to unique Asian-inspired flavors, each creation is lovingly baked by local artisans who pour their heart into every detail. We've carefully curated a selection of the finest home-based bakers who understand the art of pastry making. Support these talented local artisans and make your celebration special with our reliable delivery service across Singapore.",
    metaDescription: "Order fresh cakes online in Singapore from carefully curated home-based bakeries and pastry shops. Choose from chocolate, fruit, and custom cakes. Celebrate with cakes from local bakeries.",
    keywords: "cakes delivery singapore, cake delivery, bakery singapore, home based bakery, pastry shop singapore"
  },
  'tea': {
    title: "Tea",
    description: "Experience carefully crafted teas from Singapore's home-based tea artisans. From traditional Chinese teas to unique Singaporean blends, each selection is thoughtfully curated by local experts who understand the art of tea making. We've carefully selected the finest home-based tea vendors who pour their passion into every blend. Support these talented local artisans and make your tea time special with our reliable delivery service across Singapore.",
    metaDescription: "Order premium teas online in Singapore from carefully curated home-based tea shops. Choose from Chinese, Singaporean, and international tea blends. Enjoy quality teas from local vendors.",
    keywords: "tea delivery singapore, tea shop singapore, premium tea, home based tea shop, local tea singapore"
  },
  'food': {
    title: "Food",
    description: "Delight with carefully crafted bites from Singapore's home-based cafes and bakeries. From artisanal snacks to premium ingredients, each selection is thoughtfully curated by local artisans who pour their passion into every creation. We've carefully selected the finest home-based food vendors who understand the art of home baking. Support these talented local artisans and make their day special with our reliable delivery service across Singapore.",
    metaDescription: "Order gourmet food hampers online in Singapore from carefully curated home-based cafes and bakeries. Choose from snacks, ingredients, and more. Delight with food from local vendors.",
    keywords: "food hampers singapore, gourmet food delivery, food gift baskets, home based cafe, local food singapore"
  },
  'beverages': {
    title: "Beverages",
    description: "Enjoy carefully crafted beverages from Singapore's home-based artisans. Each selection is thoughtfully curated by local experts who pour their passion into every creation. We've carefully selected the finest home-based beverage vendors who understand the art of drink making. Support these talented local artisans and make your gathering special with our reliable delivery service across Singapore.",
    metaDescription: "Order premium beverages online in Singapore from carefully curated home-based vendors. Choose from craft beers, specialty coffees, and more. Enjoy quality drinks from local gift shops.",
    keywords: "beverages delivery singapore, craft beer singapore, specialty coffee, home based cafe, local drinks singapore"
  },
  'crafts': {
    title: "Handcrafted Gifts",
    description: "Discover carefully crafted gifts from Singapore's home-based artisans. Each piece is lovingly created by local artisans who pour their heart into every detail. We've carefully curated a selection of the finest home-based crafters who understand the art of handmade excellence. Support these talented local artisans and make their day special with our reliable delivery service across Singapore.",
    metaDescription: "Order handcrafted gifts online in Singapore from carefully curated home-based artisans. Choose from pottery, textiles, and more. Discover unique gifts from local gift shops.",
    keywords: "handcrafted gifts singapore, local crafts, handmade items, home based gift shop, artisanal gifts singapore"
  }
};

export default function CategoryPage({ category, gifts }: CategoryPageProps) {
  const categoryInfo = categoryData[category as keyof typeof categoryData];
  const canonicalUrl = `https://giftkakis.com/gifts/home-based-${category}`;

  const filteredGifts = gifts.filter(gift => 
    gift.category.toLowerCase() === category.toLowerCase()
  ).slice(0, 6);

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
            "priceCurrency": "SGD"
          }
        }
      }))
    }
  };

  return (
    <>
      <Head>
        <title>Home Based {categoryInfo.title} | GiftKakis Delivery Singapore</title>
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
              {categoryInfo.title} from Home-based Local Singapore Shops.
            </Title>
            <Text fz="lg" ta="center" maw={800}>
              {categoryInfo.description}
            </Text>
            <Text fz="md" ta="center" c="gray.6" maw={600}>
              by GiftKakis, updated on {new Date().toLocaleDateString('en-SG', { day: 'numeric', month: 'short', year: 'numeric' })}.
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
          <Title order={3} ta="center">Find the best {categoryInfo.title} Delivery in Singapore</Title>
          <Text fz="lg" ta="center" maw={800}>
            Browse our selection of {category} and find the perfect gift for your loved ones.
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
  const paths = Object.keys(categoryData).map((category) => ({
    params: { category },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { category: string } }) {
  const gifts = await getMothersDayGifts();
  const categoryInfo = categoryData[params.category as keyof typeof categoryData];
  
  const filteredGifts = gifts.filter((gift: Gift) => 
    gift.category.toLowerCase() === params.category.toLowerCase()
  );

  return {
    props: {
      category: params.category,
      gifts: filteredGifts,
    },
    revalidate: 3600,
  };
} 