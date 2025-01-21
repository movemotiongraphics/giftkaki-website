import { Navbar } from '../components/Navbar/navbar';
import { Stack, Container, Title, Button, Group, Text, Anchor } from '@mantine/core';
import { Footer } from '../components/Footer/Footer';
import { IconAt } from '@tabler/icons-react';

export default function Account() {
  return (
    <>
      <Navbar></Navbar>
      <Container maw={1000}>
        <Stack content="center" align="Center">
          <Stack>
            <Group justify='center'>
              <Title mt={48} c="pink">
                Delete Account
              </Title>
            </Group>
          </Stack>

          <Stack maw={600} mb={48}>
            <Text fz="lg" ta="center">
              To request deletion of your account and associated data, please fill out our data deletion request form. We will process your request within 7 business days.
            </Text>
            <Group justify="center" mt="md">
              <Button 
                component="a"
                href="https://docs.google.com/forms/d/e/1FAIpQLSdnEpE6emsFz75RAgz--jCwVRB4Wkz76YAyWfkKwun-O6DkGQ/viewform?usp=dialog"
                target="_blank"
                size="lg"
                color="pink"
              >
                Request Data Deletion
              </Button>
            </Group>
            
            <Group justify="center" mt="xl">
              <Group gap={4}>
                <Text c="dimmed">
                  Need help? Contact us at{' '}
                  <Anchor href="mailto:admin@giftkakis.com" c="pink">
                    admin@giftkakis.com
                  </Anchor>
                </Text>
              </Group>
            </Group>
          </Stack>
        </Stack>
      </Container>
      <Footer></Footer>
    </>
  );
}