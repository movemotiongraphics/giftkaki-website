import { Navbar } from '../components/Navbar/navbar';
import { TitleCard } from '../components/FeatureTitle/TitleCard';
import { Stack, Container, Title, Button, Avatar, Group, Text  } from '@mantine/core';
import { TitleGrid } from '../components/TitleGrid/TitleGrid';
import { Steps } from '../components/Steps/Steps';
import { Footer } from '../components/Footer/Footer';
import { IconAt, IconPhoneCall } from '@tabler/icons-react';

import ProfPic from '../../public/KakiProfpic.png';
import Dan from '../../public/Dan.jpg';
import YJ from '../../public/yj.jpg';

export default function Contact() {
  return (
    <>
      <Navbar></Navbar>
      <Container maw={1000}>
      <Stack content="center" align="Center">
        <Stack>
            <Group justify='center'>
                <Title mt={48} c="pink">
                Contact Us
                </Title>
            </Group>
        </Stack>
        <Stack maw={600}>
            <Group>
                <Text fz="xl" ta="center">
                  GiftKakis is run by a small team based out of Singapore, whom recently graduated from the National University of Singapore.
                </Text>
            </Group>
        </Stack>

        <Group justify='center' gap={48} mt={24}>
              <div>
                <Group wrap="nowrap" maw={400}>
                <Avatar
                  src='/dan.jpg'
                  size={128}
                  radius="md"
                />
                  <Stack gap={0} align="flex-start" content="left">
                    <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
                    Resident Kaki
                    </Text>

                    <Text ta="left" fz="lg" fw={500}>
                      Daniel
                    </Text>

                    <Text ta="left" fz="md" c="gray" fw={500}>
                      The general question guy who also made the whole app. Tries his best to remember gift dates.
                    </Text>

                    <Group wrap="nowrap" gap={4} mt={3}>
                      <Text fz="xs" c="dimmed">
                        admin@giftkakis.com
                      </Text>
                    </Group>
                  </Stack>
                </Group>
              </div>

              <div>
                <Group wrap="nowrap" maw={400}>
                <Avatar
                  src='/yj.jpg'
                  size={128}
                  radius="md"
                />
                  <Stack gap={0} align="flex-start" content="left">
                    <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
                      Resident Kaki
                    </Text>

                    <Text ta="left" fz="lg" fw={500}>
                      YJ
                    </Text>

                    <Text ta="left" fz="md" c="gray" fw={500}>
                      Hardworking guy who designed the penguin. Designed products for more than 400,000 users a month.
                    </Text>

                    <Group wrap="nowrap" gap={4} mt={3}>
                      <Text fz="xs" c="dimmed">
                        yj@giftkakis.com
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

                    <Text ta="left" fz="lg" fw={500}>
                      Jun
                    </Text>

                    <Text ta="left" fz="md" c="gray" fw={500}>
                      Ops. Casually an engineer and also the ops guy.
                    </Text>

                    <Group wrap="nowrap" gap={4} mt={3}>
                      <Text fz="xs" c="dimmed">
                        jun@giftkakis.com
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

                    <Text ta="left" fz="lg" fw={500}>
                      Maybe you?
                    </Text>

                    <Text ta="left" fz="md" c="gray" fw={500}>
                      Join our team in helping make gifting more efficient.
                    </Text>

                  </Stack>
                </Group>
              </div>

            </Group>
        </Stack>
      </Container>

      <Footer></Footer>
    </>
  );
}
