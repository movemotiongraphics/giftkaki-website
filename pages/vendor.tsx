import { Navbar } from '../components/Navbar/navbar';
import { TitleCard } from '../components/FeatureTitle/TitleCard';
import { Group, Stack, Container, Button, Text, Title } from '@mantine/core';
import { TitleGrid } from '../components/TitleGrid/TitleGrid';
import { Steps } from '../components/Steps/Steps';
import { Footer } from '../components/Footer/Footer';
import Image from "next/image";

export default function About() {
  return (
    <>
      <Navbar></Navbar>
      <Container maw={1000} content="center">
        <Stack content="center" align="Center">
        <Stack maw={800} justify="center">
            <Group justify='center'>
                <Title mt={48} c="pink">
                Offer your product as a gift
                </Title>
            </Group>

            <Group align="center" justify='center' content="center">
                <Text fz="xl" ta="center">
                  As a vendor in GiftKakis, you'll be able to provide gift offerings to our users. GiftKakis curate every vendor in our platform so that each gift is of good quality. If you are a boutique selling flowers, toys to custom cards, we would love to work with you.
                </Text>
            </Group>

            <Stack justify='center'>
                <Title ta='center' order={3} mt={48} c="pink">
                Kakis and Vendors
                </Title>
                <Text fz="xl" ta="center">
                  1. Bring additional customers to your shop.
                </Text>
                <Text fz="xl" ta="center">
                  2. No additional charges on your side.
                </Text>
                <Text fz="xl" ta="center">
                  1. Free delivery islandwide, provided by us.
                </Text>
            </Stack>
            
            <Stack justify="center" align="center" mt={48}>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdnEpE6emsFz75RAgz--jCwVRB4Wkz76YAyWfkKwun-O6DkGQ/viewform?usp=dialog">
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
