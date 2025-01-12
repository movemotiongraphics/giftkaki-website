import { Navbar } from '../components/Navbar/navbar';
import { TitleCard } from '../components/FeatureTitle/TitleCard';
import { Group, Stack, Container, Button, Text, Title } from '@mantine/core';
import { TitleGrid } from '../components/TitleGrid/TitleGrid';
import { Steps } from '../components/Steps/Steps';
import { Footer } from '../components/Footer/Footer';
import Image from "next/image";


import vendorImage1 from "../public/Vendor1.png"
import vendorImage2 from "../public/Vendor2.png"

export default function About() {
  return (
    <>
      <Navbar></Navbar>
      <Container maw={1000} content="center">
        <Stack content="center" align="Center">
        <Stack maw={800} justify="center">
            <Group justify='center'>
                <Title mt={48} c="pink">
                Sell your product in GiftKakis!
                </Title>
            </Group>

            <Group align="center" justify='center' content="center">
                <Text fz="xl" ta="center">
                  As a vendor in GiftKakis, you'll be able to provide gift offerings to our users. This means that you'll receive a payout everytime someone buys your product on our platform.
                </Text>
            </Group>

            <Stack justify='center'>
                <Title mb={24} ta='center' order={3} mt={48} c="pink">
                Why become a vendor?
                </Title>
                <Group mb={24} content="center" justify='center'>
                  <Image
                  src={vendorImage1}
                  height={300}
                  quality={80}
                  alt="vendorimage1"
                  style={{ borderRadius: "20px", width: "45%", height: "auto" }}
                  />
                  <Image
                  src={vendorImage2}
                  height={300}
                  quality={80}
                  alt="vendorimage2"
                  style={{ borderRadius: "20px", width: "45%", height: "auto" }}
                  />
                </Group>
                <Text fz="xl" c="gray" ta="center">
                  Sell anything, from flowers to cards.
                </Text>
                <Text fz="xl" c="gray" ta="center">
                  Bring additional customers to your shop.
                </Text>
                <Text fz="xl" c="gray" ta="center">
                  No additional charges on your side.
                </Text>
                <Text fz="xl" c="gray" ta="center">
                  Free delivery islandwide, provided by us.
                </Text>
            </Stack>
            
            <Stack justify="center" align="center" mt={48}>
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
