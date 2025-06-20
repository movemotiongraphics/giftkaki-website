import { Navbar } from '../components/Navbar/navbar';
import { TitleCard } from '../components/FeatureTitle/TitleCard';
import { Group, Stack, Container, Text, Avatar, Title, Button } from '@mantine/core';
import { TitleGrid } from '../components/TitleGrid/TitleGrid';
import { Steps } from '../components/Steps/Steps';
import { Footer } from '../components/Footer/Footer';
import Image from "next/image";

export default function About() {
  return (
    <>
      <Navbar></Navbar>
      <Container maw={1000} my={48} content="center">
        <Stack content="center" align="Center">
        <Stack maw={800} justify="center">
            <Group justify='center'>
                <Title mt={48} c="pink">
                Remember and plan gifts ahead
                </Title>
            </Group>

            <Group>
                <Text fz="xl" ta="center">
                  GiftKakis was started when a group of friends thought it was hard to remember all of our gifting schedule. We decided that it would be easier to aggregate all of our gift schedules together into one calendar, and it seems like it works! Now we're bringing the practice to everyone.
                </Text>
            </Group>
        </Stack>
        </Stack>

        <Stack content="center" my={48} align="Center">
        <Stack>
            <Group justify='center'>
                <Title mt={48} c="pink">
                The Kakis
                </Title>
            </Group>
        </Stack>
        <Stack maw={600}>
            <Group>
                <Text fz="xl" ta="center">
                  GiftKakis is run by a small team based out of Singapore. Reach out to us, we reply fast!
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
                      Product and Growth. Hardworking guy who designed the penguin. 
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
                  src="/junPic.jpg"
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
                      Ops and Vendor Success. Casually an engineer.
                    </Text>

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
