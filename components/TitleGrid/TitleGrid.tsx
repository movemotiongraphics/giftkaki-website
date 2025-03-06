import { Container, Grid, Group, Stack, Box, Text } from '@mantine/core';
import Image from "next/image";
import classes from './TitleGrid.module.css';

import VerticalImage from '../../public/FeatureVertical.png';
import HorizontalImage1 from '../../public/Feature1.png';
import HorizontalImage2 from '../../public/Feature2.png';
import HorizontalImage3 from '../../public/Feature3.png';

const PRIMARY_COL_HEIGHT = '800px';

export function TitleGrid() {
  const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - var(--mantine-spacing-md) / 2)`;

  return (
    <>
    <Container my="md" w={"100%"} px="32" className={classes.hideInMobile}>
      <Group gap="md" mih={PRIMARY_COL_HEIGHT} justify='center'>
          <Image
            src={VerticalImage}
            alt="VerticalImage"
            style={{ borderRadius: "30px", width: "auto", height: 800 }}
            quality={80}
            />
        <Stack w={500} justify='center' align="center">
          <Box>
          <Image
            src={HorizontalImage1}
            alt="HorizontalImage1"
            style={{ borderRadius: "30px", width: "100%", height: "430px", objectFit: "cover" }}
          />
          </Box>
          <Group w={500} h={"100%"} justify='space-between'>
            <Image
              src={HorizontalImage2}
              alt="HorizontalImage2"
              style={{ borderRadius: "30px", objectFit: "cover" }}
              height={350}
              width={230}
              quality={80}
              />
            <Image
              src={HorizontalImage3}
              alt="HorizontalImage3"
              style={{ borderRadius: "30px", objectFit: "cover" }}
              height={350}
              width={230}
              quality={80}
              />
          </Group>
        </Stack>
      </Group>
    </Container>

    <Container my="md" w={"100%"} px="32" className={classes.showInMobile}>
      <Text size="xl" fw="500" className={classes.description}>
            24/7 Support via Whatsapp
      </Text>

      <Text size="xl" fw="500" className={classes.description}>
            Doorstep Islandwide Delivery in Singapore
      </Text>

      <Text size="xl" fw="500" className={classes.description}>
            PayNow/PayLah or Card Payments
      </Text>

      <Text size="xl" fw="500" className={classes.description}>
            Notifications in every step.
      </Text>
    </Container>
  </>
  );
}