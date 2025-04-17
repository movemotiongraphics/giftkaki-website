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
    description: "Brighten someone's day with beautiful flowers from Singapore's home-based florists. From elegant roses to exotic orchids, each bouquet is thoughtfully arranged by passionate local artisans with reliable delivery across Singapore.",
    metaDescription: "Order fresh flowers online in Singapore from carefully curated home-based florists. Choose from roses, orchids, and more. Brighten their day with flowers from local gift shops.",
    keywords: "flowers delivery singapore, flower delivery, florist singapore, home based florist, fresh flowers singapore",
    categories: ['Flowers']
  },
  'get-well-soon': {
    title: "Get Well Soon Hampers",
    description: "Send thoughtful get well soon hampers from Singapore's home-based artisans. Our curated selection includes nourishing treats and wellness essentials, all carefully chosen to bring comfort and cheer with reliable delivery across Singapore.",
    metaDescription: "Order get well soon hampers in Singapore from home-based vendors. Choose from nourishing treats, teas, and wellness essentials. Send thoughtful recovery gifts with same-day delivery.",
    keywords: "get well soon hamper, recovery gifts singapore, wellness hampers, home based gift shop, get well soon gifts",
    categories: ['Hampers', 'Food', 'Tea']
  },
  'mens-gifts': {
    title: "Gifts for Men",
    description: "Discover thoughtful gifts for men from Singapore's home-based artisans. Our curated selection includes premium grooming sets, artisanal beverages, and stylish accessories, all carefully chosen to appeal to different tastes with reliable delivery across Singapore.",
    metaDescription: "Order unique gifts for men in Singapore from home-based vendors. Choose from grooming sets, beverages, accessories, and more. Find the perfect men's gift with same-day delivery.",
    keywords: "gifts for men, mens gifts singapore, unique gifts for him, home based gift shop, luxury gifts for men",
    categories: ['Apparel', 'Beverages', 'Crafts']
  },
  'matcha': {
    title: "Matcha Gifts",
    description: "Experience the finest matcha gifts from Singapore's home-based tea artisans. Our curated selection includes premium matcha powder and ceremonial grade tea sets, all carefully sourced from trusted vendors with reliable delivery across Singapore.",
    metaDescription: "Order premium matcha gifts in Singapore from home-based vendors. Choose from matcha powder, tea sets, and matcha treats. Experience authentic Japanese matcha.",
    keywords: "matcha gifts singapore, matcha powder, ceremonial matcha, home based tea shop, matcha tea sets",
    categories: ['Tea', 'Food']
  },
  'tea': {
    title: "Tea Gifts",
    description: "Experience the soothing charm of teas from Singapore's home-based tea artisans. Discover traditional Chinese teas and unique Singaporean blends, all crafted with care by passionate local experts with reliable delivery across Singapore.",
    metaDescription: "Order premium teas online in Singapore from carefully curated home-based tea shops. Choose from Chinese, Singaporean, and international tea blends. Enjoy quality teas from local vendors.",
    keywords: "tea gifts, tea delivery singapore, tea shop singapore, premium tea, home based tea shop",
    categories: ['Tea']
  },
  'cafe': {
    title: "Home-based Cafes",
    description: "Discover unique treats from Singapore's home-based cafes. From artisanal pastries to specialty coffee blends, each offering is crafted with passion by local food artisans with reliable delivery across Singapore.",
    metaDescription: "Order from home-based cafes in Singapore. Choose from artisanal pastries, specialty coffee, and unique treats. Support local home-based food vendors.",
    keywords: "home based cafe singapore, local cafe, artisanal pastries, home based bakery, specialty coffee",
    categories: ['Food', 'Beverages', 'Cakes']
  },
  'coffee': {
    title: "Coffee Gifts",
    description: "Enjoy premium coffee gifts from Singapore's home-based beverage artisans. From specialty coffee blends to unique local creations, each offering is thoughtfully made by passionate drink makers with reliable delivery across Singapore.",
    metaDescription: "Order premium coffee gifts in Singapore from home-based vendors. Choose from specialty coffee blends, coffee sets, and unique coffee creations.",
    keywords: "coffee gifts singapore, specialty coffee, home based cafe, local coffee, coffee delivery",
    categories: ['Beverages', 'Food']
  },
  'cakes': {
    title: "Home-baked Cakes",
    description: "Celebrate with delightful cakes from Singapore's home-based bakeries and pastry shops. Choose from classic chocolate cakes to Asian-inspired flavors, all lovingly baked by talented local artisans with reliable delivery across Singapore.",
    metaDescription: "Order fresh cakes online in Singapore from carefully curated home-based bakeries and pastry shops. Choose from chocolate, fruit, and custom cakes. Celebrate with cakes from local bakeries.",
    keywords: "cakes delivery singapore, cake delivery, bakery singapore, home based bakery, pastry shop singapore",
    categories: ['Cakes', 'Food']
  },
  'food': {
    title: "Food",
    description: "Delight in gourmet bites from Singapore's home-based cafes and bakeries. From artisanal snacks to carefully sourced ingredients, each offering is crafted with passion by local food artisans with reliable delivery across Singapore.",
    metaDescription: "Order gourmet food hampers online in Singapore from carefully curated home-based cafes and bakeries. Choose from snacks, ingredients, and more. Delight with food from local vendors.",
    keywords: "food hampers singapore, gourmet food delivery, food gift baskets, home based cafe, local food singapore",
    categories: ['Food', 'Hampers']
  },
  'crafts': {
    title: "Handcrafted Gifts",
    description: "Discover unique handcrafted gifts from Singapore's home-based artisans. Each item—be it pottery, textiles, or handmade décor—is created with care and creativity by local crafters with reliable delivery across Singapore.",
    metaDescription: "Order handcrafted gifts online in Singapore from carefully curated home-based artisans. Choose from pottery, textiles, and more. Discover unique gifts from local gift shops.",
    keywords: "handcrafted gifts singapore, local crafts, handmade items, home based gift shop, artisanal gifts singapore",
    categories: ['Crafts']
  }
};

export default function CategoryPage({ category, gifts }: CategoryPageProps) {
  const categoryInfo = categoryData[category as keyof typeof categoryData];
  const canonicalUrl = `https://giftkakis.com/home-based/${category}`;

  const filteredGifts = gifts.filter(gift => 
    categoryInfo.categories.some(cat => 
      gift.category.toLowerCase() === cat.toLowerCase()
    )
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
        <title>{`${categoryInfo.title} Delivery Singapore | GiftKakis `}</title>
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
              Top Home-based Local {categoryInfo.title} shops in Singapore.
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
          <Title order={3} ta="center" mb="xl">Build your own hamper, we'll deliver it</Title>
          <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="xl">
            <Paper p="md" radius="lg" withBorder>
              <Stack align="center" ta="center">
                <Text fz="xl" fw={700}>🎁</Text>
                <Text fz="lg" fw={500}>Build your own Hamper</Text>
                <Text c="dimmed">Only the best gifts from curated local vendors, build your own hamper and we'll deliver it.</Text>
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
          <Title order={3} ta="center">{categoryInfo.title} gift delivery in Singapore</Title>
          <Text fz="lg" ta="center" maw={800}>
            Build your own hamper and find the perfect {categoryInfo.title}  for your loved ones.
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
    categoryInfo.categories.some(cat => 
      gift.category.toLowerCase() === cat.toLowerCase()
    )
  );

  return {
    props: {
      category: params.category,
      gifts: filteredGifts,
    },
    revalidate: 3600,
  };
} 