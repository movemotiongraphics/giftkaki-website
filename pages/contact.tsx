import { Navbar } from '../components/Navbar/navbar';
import { TitleCard } from '../components/FeatureTitle/TitleCard';
import { Stack, Container, Title, Button, Avatar, Group, Text  } from '@mantine/core';
import { TitleGrid } from '../components/TitleGrid/TitleGrid';
import { Steps } from '../components/Steps/Steps';
import { Footer } from '../components/Footer/Footer';
import { IconAt, IconPhoneCall } from '@tabler/icons-react';

import ProfPic from '../../public/KakiProfpic.png';

export default function Contact() {
  return (
    <>
      <Navbar></Navbar>
      <Container maw={1000} align="center">
        <Stack>
            <Group justify='center'>
                <Title mt={48} c="pink">
                Contact Us
                </Title>
            </Group>
        </Stack>
        <Stack maw={600}>
            <Group justify='center'>
                <Text fz="xl">
                  GiftKakis is run by a small team based out of Singapore.
                </Text>
            </Group>
        </Stack>

        <Group justify='center' mt={24}>
              <div>
                <Group wrap="nowrap" maw={400}>
                <Avatar
                  src="/KakiProfpic.png"
                  size={128}
                  radius="md"
                />
                  <Stack gap={0} align="flex-start" content="left">
                    <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
                    Resident Kaki
                    </Text>

                    <Text content="left" fz="lg" fw={500}>
                      Daniel
                    </Text>

                    <Text content="left" align="left" fz="md" c="gray" fw={500}>
                      The general question guy who also made the whole app.
                    </Text>

                    <Group wrap="nowrap" gap={4} mt={3}>
                      <Text fz="xs" c="dimmed">
                        daniel@giftkakis.com
                      </Text>
                    </Group>
                  </Stack>
                </Group>
              </div>

              <div>
                <Group wrap="nowrap" maw={400}>
                <Avatar
                  src="/KakiProfpic.png"
                  size={128}
                  radius="md"
                />
                  <Stack gap={0} align="flex-start" content="left">
                    <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
                      Resident Kaki
                    </Text>

                    <Text content="left" fz="lg" fw={500}>
                      YJ
                    </Text>

                    <Text content="left" align="left" fz="md" c="gray" fw={500}>
                      The designer and hardworking guy who also helps deliver your gifts.
                    </Text>

                    <Group wrap="nowrap" gap={4} mt={3}>
                      <Text fz="xs" c="dimmed">
                        yj@giftkakis.com
                      </Text>
                    </Group>
                  </Stack>
                </Group>
              </div>
            </Group>
        
      </Container>

      <Footer></Footer>
    </>
  );
}
