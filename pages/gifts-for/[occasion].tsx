import { Navbar } from '../../components/Navbar/navbar';
import { Group, Stack, Container, Text, Title, Button, SimpleGrid, Paper, Badge } from '@mantine/core';
import { Footer } from '../../components/Footer/Footer';
import Link from 'next/link';
import Head from 'next/head';
import { getMothersDayGifts, Gift } from '../../lib/gifts';
import Image from 'next/image';
import { useState } from 'react';
import { IconCheck } from '@tabler/icons-react';

interface OccasionPageProps {
  occasion: string;
  gifts: Gift[];
}

const occasionData = {
  'birthday': {
    title: "Birthday Gift Delivery",
    description: "Make their birthday special with unique gifts from Singapore's local vendors. From artisanal cakes to handcrafted items, find the perfect birthday gift that reflects Singapore's vibrant culture. Whether it's a surprise delivery to their home or office, our same-day delivery service ensures your gift arrives right on time. Browse our curated selection of Singapore's best birthday gifts now!",
    categories: ['Food', 'Cakes', 'Tea'],
    metaDescription: "Order birthday gifts online in Singapore. Choose from flowers, cakes, and more. Make their day special with gifts from local vendors.",
    keywords: "birthday gifts, birthday delivery singapore, flowers delivery singapore, gift delivery singapore"
  },
  'valentines-day': {
    title: "Valentine's Day Gift Delivery",
    description: "Express your love with thoughtful gifts from Singapore's local vendors. Discover unique Valentine's Day gifts that capture the essence of Singapore's romantic spirit. From handcrafted flowers to artisanal chocolates, each gift tells a story of local craftsmanship and love. Make this Valentine's Day unforgettable with our same-day delivery service across Singapore. Find the perfect romantic gift today!",
    categories: ['Flowers', 'Tea'],
    metaDescription: "Order Valentine's Day gifts online in Singapore. Choose from flowers, cakes, and more. Express your love with gifts from local vendors.",
    keywords: "valentine's day gifts, valentine's day delivery singapore, flowers delivery singapore, gift delivery singapore, romantic gifts singapore"
  },
  'anniversary': {
    title: "Anniversary Gift Delivery",
    description: "Celebrate your special day with meaningful gifts from Singapore's local artisans. Whether it's your first anniversary or your golden one, find unique gifts that reflect your journey together. From handcrafted keepsakes to gourmet hampers, each gift is carefully selected from Singapore's best local vendors. Make your anniversary memorable with our reliable same-day delivery service. Start browsing anniversary gifts now!",
    categories: ['Flowers', 'Cakes', 'Crafts'],
    metaDescription: "Order anniversary gifts online in Singapore. Choose from flowers, cakes, and handcrafted items. Celebrate your love with unique gifts from local vendors.",
    keywords: "anniversary gifts, anniversary delivery singapore, flowers delivery singapore, gift delivery singapore"
  },
  'graduation': {
    title: "Graduation Gift Delivery",
    description: "Congratulate the graduate with thoughtful gifts from Singapore's local vendors. Celebrate their academic achievement with unique gifts that reflect Singapore's educational excellence. From personalized keepsakes to celebratory hampers, each gift is carefully selected from local artisans. Our same-day delivery service ensures your gift arrives right on time for their special day. Browse graduation gifts now!",
    categories: ['Flowers', 'Cakes', 'Crafts'],
    metaDescription: "Order graduation gifts online in Singapore. Choose from cakes, food, and handcrafted items. Celebrate their achievement with gifts from local vendors.",
    keywords: "graduation gifts, graduation delivery singapore, gift delivery singapore, graduation celebration gifts"
  },
  'housewarming': {
    title: "Housewarming Gift Delivery",
    description: "Welcome them to their new home with thoughtful gifts from Singapore's local artisans. From practical home essentials to decorative pieces, find the perfect housewarming gift that reflects Singapore's unique home culture. Each gift is carefully selected from local vendors who understand the Singaporean home. Make their housewarming special with our reliable same-day delivery service. Start browsing housewarming gifts now!",
    categories: ['Food', 'Tea', 'Beverages', 'Flowers'],
    metaDescription: "Order housewarming gifts online in Singapore. Choose from food, tea, and handcrafted items. Help them celebrate their new home with gifts from local vendors.",
    keywords: "housewarming gifts, housewarming delivery singapore, gift delivery singapore"
  },
  'thank-you': {
    title: "Thank You Gift Delivery",
    description: "Show your appreciation with thoughtful gifts from Singapore's local vendors. From artisanal hampers to handcrafted items, find the perfect thank you gift that reflects Singapore's culture of gratitude. Each gift is carefully selected from local artisans who put their heart into every creation. Express your gratitude with our reliable same-day delivery service across Singapore. Browse thank you gifts now!",
    categories: ['Flowers', 'Food', 'Tea', 'Crafts'],
    metaDescription: "Order thank you gifts online in Singapore. Choose from flowers, food, and handcrafted items. Express your gratitude with gifts from local vendors.",
    keywords: "thank you gifts, thank you delivery singapore, gift delivery singapore, appreciation gifts singapore"
  },
  'new-baby': {
    title: "New Baby Gift Delivery",
    description: "Welcome the new arrival with thoughtful gifts from Singapore's local vendors. From handcrafted baby items to celebratory hampers, find the perfect gift that reflects Singapore's warm welcome for new families. Each gift is carefully selected from local artisans who understand the needs of new parents. Make their special moment even more memorable with our reliable same-day delivery service. Browse new baby gifts now!",
    categories: ['Crafts', 'Food', 'Cakes'],
    metaDescription: "Order new baby gifts online in Singapore. Choose from handmade items, cakes, and food hampers. Celebrate the new addition to the family with gifts from local vendors.",
    keywords: "new baby gifts, baby shower gifts, baby gift delivery singapore"
  },
  'get-well': {
    title: "Get Well Soon Gift Delivery",
    description: "Send healing wishes with thoughtful gifts from Singapore's local vendors. From comforting hampers to uplifting flowers, find the perfect get well soon gift that reflects Singapore's caring community spirit. Each gift is carefully selected from local artisans who understand the healing power of thoughtful gestures. Brighten their day with our reliable same-day delivery service across Singapore. Browse get well soon gifts now!",
    categories: ['Flowers', 'Food', 'Tea'],
    metaDescription: "Order get well soon gifts online in Singapore. Choose from flowers, food hampers, and tea. Brighten their day with gifts from local vendors.",
    keywords: "get well soon gifts, recovery gifts, hospital gift delivery singapore, healing gifts singapore"
  },
  'retirement': {
    title: "Retirement Gift Delivery",
    description: "Celebrate their next chapter with meaningful gifts from Singapore's local artisans. From handcrafted keepsakes to gourmet hampers, find the perfect retirement gift that reflects Singapore's appreciation for lifelong achievements. Each gift is carefully selected from local vendors who understand the significance of this milestone. Make their retirement celebration special with our reliable same-day delivery service. Browse retirement gifts now!",
    categories: ['Crafts', 'Tea', 'Food'],
    metaDescription: "Order retirement gifts online in Singapore. Choose from handcrafted items, tea sets, and food hampers. Celebrate their achievements with gifts from local vendors.",
    keywords: "retirement gifts, retirement celebration gifts, gift delivery singapore"
  },
  'promotion': {
    title: "Promotion Gift Delivery",
    description: "Celebrate their career milestone with thoughtful gifts from Singapore's local vendors. From celebratory hampers to handcrafted items, find the perfect promotion gift that reflects Singapore's professional excellence. Each gift is carefully selected from local artisans who understand the significance of career achievements. Make their promotion celebration special with our reliable same-day delivery service. Browse promotion gifts now!",
    categories: ['Cakes', 'Food', 'Tea'],
    metaDescription: "Order promotion celebration gifts online in Singapore. Choose from cakes, food hampers, and tea sets. Congratulate them with gifts from local vendors.",
    keywords: "promotion gifts, career celebration gifts, gift delivery singapore, corporate gifts singapore"
  },
  'souvenir': {
    title: "Singapore Souvenir Gift Delivery",
    description: "Share the essence of Singapore with unique souvenirs from local artisans. From handcrafted Peranakan tiles to Singapore-inspired tea blends, find the perfect souvenir that captures Singapore's rich cultural heritage. Each gift is carefully selected from local vendors who put their heart into creating authentic Singapore mementos. Make your souvenir shopping special with our reliable same-day delivery service across Singapore. Browse Singapore souvenirs now!",
    categories: ['Beverages', 'Tea', 'Food'],
    metaDescription: "Order authentic Singapore souvenirs online. Choose from handcrafted items, local tea blends, and traditional snacks. Share Singapore's culture with gifts from local vendors.",
    keywords: "singapore souvenirs, singapore gifts, local souvenirs singapore, singapore craft gifts, singapore tea gifts"
  }
};

export default function OccasionPage({ occasion, gifts }: OccasionPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const occasionInfo = occasionData[occasion as keyof typeof occasionData];
  const canonicalUrl = `https://giftkakis.com/gifts-for/${occasion}`;

  const filteredGifts = selectedCategory
    ? gifts.filter(gift => gift.category.toLowerCase() === selectedCategory.toLowerCase()).slice(0, 6)
    : gifts.slice(0, 6);

  // Generate structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": occasionInfo.title,
    "description": occasionInfo.metaDescription,
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
            "priceValidUntil": new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // Valid for 30 days
            "availability": "https://schema.org/InStock"
          },
        }
      }))
    }
  };

  return (
    <>
      <Head>
        <title>{occasionInfo.title} | GiftKakis Gift Delivery</title>
        <meta name="description" content={occasionInfo.metaDescription} />
        <meta name="keywords" content={occasionInfo.keywords} />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content={`${occasionInfo.title} | GiftKakis`} />
        <meta property="og:description" content={occasionInfo.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="GiftKakis" />
        <meta property="og:locale" content="en_SG" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${occasionInfo.title} | GiftKakis`} />
        <meta name="twitter:description" content={occasionInfo.metaDescription} />
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
              {occasionInfo.title} from Local Singapore Shops
            </Title>
            <Text fz="lg" ta="center" maw={800}>
              {occasionInfo.description}
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
          <Title order={3} ta="center">Make This {occasionInfo.title} Special</Title>
          <Text fz="lg" ta="center" maw={800}>
            Browse our selection of thoughtful gifts and make this {occasionInfo.title} one to remember.
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
  const paths = Object.keys(occasionData).map((occasion) => ({
    params: { occasion },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { occasion: string } }) {
  const gifts = await getMothersDayGifts();
  const occasionInfo = occasionData[params.occasion as keyof typeof occasionData];
  
  const filteredGifts = gifts.filter(gift => 
    occasionInfo.categories.map(c => c.toLowerCase()).includes(gift.category.toLowerCase())
  );

  return {
    props: {
      occasion: params.occasion,
      gifts: filteredGifts,
    },
    revalidate: 3600,
  };
} 