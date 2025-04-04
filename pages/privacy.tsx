import { Navbar } from '../components/Navbar/navbar';
import { Container, Stack, Group, Title, Paper, Accordion, Text, Box, List } from '@mantine/core';
import { Footer } from '../components/Footer/Footer';

export default function Privacy() {
  return (
    <>
      <Navbar></Navbar>
      <Container maw={1000}>
        <Stack mb={24}>
            <Group justify='center'>
                <Title mt={48} c="pink">
                  Privacy Policy
                </Title>
            </Group>
        </Stack>

        <Stack>
        <Group justify='center'>

        <Paper shadow="xs" p="lg" radius="xl">
        <Stack gap="lg" w={600}>          
          <Accordion>
            <Accordion.Item value="introduction">
              <Accordion.Control>
                <Text fw={700}>1. Introduction</Text>
              </Accordion.Control>
              <Accordion.Panel>
                <Text>
                  At GiftKakis ("we," "us," or "our"), we value your privacy and are committed to protecting your personal data. 
                  This Privacy Policy explains how we collect, use, and safeguard your information when you use our services. 
                  By using our website and services, you consent to the practices described in this policy.
                </Text>
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="collection">
              <Accordion.Control>
                <Text fw={700}>2. Information We Collect</Text>
              </Accordion.Control>
              <Accordion.Panel>
                <Stack gap="md">
                  <Box>
                    <Text fw={600}>2.1 Personal Information</Text>
                    <List spacing="xs" mt="xs">
                      <List.Item>Contact information (name, email address, phone number, postal address)</List.Item>
                      <List.Item>Account credentials (username, password)</List.Item>
                      <List.Item>Payment information (credit card details, billing address)</List.Item>
                      <List.Item>Calendar data (events, contacts, important dates)</List.Item>
                      <List.Item>Gift preferences and purchase history</List.Item>
                    </List>
                  </Box>
                  
                  <Box>
                    <Text fw={600}>2.2 Automatically Collected Information</Text>
                    <List spacing="xs" mt="xs">
                      <List.Item>Device information (IP address, browser type, operating system)</List.Item>
                      <List.Item>Usage data (pages visited, time spent on site, actions taken)</List.Item>
                      <List.Item>Cookies and similar tracking technologies</List.Item>
                    </List>
                  </Box>
                </Stack>
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="usage">
              <Accordion.Control>
                <Text fw={700}>3. How We Use Your Information</Text>
              </Accordion.Control>
              <Accordion.Panel>
                <List spacing="xs">
                  <List.Item>To provide and maintain our services</List.Item>
                  <List.Item>To process and fulfill gift orders</List.Item>
                  <List.Item>To send order confirmations and updates</List.Item>
                  <List.Item>To notify you about upcoming events from your calendar</List.Item>
                  <List.Item>To suggest gift recommendations based on your preferences</List.Item>
                  <List.Item>To improve our website and services</List.Item>
                  <List.Item>To process payments and prevent fraud</List.Item>
                  <List.Item>To comply with legal obligations</List.Item>
                </List>
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="sharing">
              <Accordion.Control>
                <Text fw={700}>4. Information Sharing</Text>
              </Accordion.Control>
              <Accordion.Panel>
                <Text>
                  We may share your information with:
                </Text>
                <List spacing="xs" mt="xs">
                  <List.Item>Service providers (payment processors, delivery services, IT support)</List.Item>
                  <List.Item>Business partners involved in fulfilling your gift orders</List.Item>
                  <List.Item>Legal authorities when required by law</List.Item>
                </List>
                <Text mt="xs">
                  We do not sell, rent, or trade your personal information to third parties for marketing purposes.
                </Text>
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="security">
              <Accordion.Control>
                <Text fw={700}>5. Data Security</Text>
              </Accordion.Control>
              <Accordion.Panel>
                <Text>
                  We implement appropriate security measures to protect your personal information from unauthorized access, 
                  alteration, disclosure, or destruction. These measures include encryption, secure socket layer technology (SSL), 
                  access controls, and regular security assessments.
                </Text>
                <Text mt="xs">
                  While we strive to protect your personal data, no method of transmission over the internet or electronic storage is 
                  completely secure. We cannot guarantee absolute security of your information.
                </Text>
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="retention">
              <Accordion.Control>
                <Text fw={700}>6. Data Retention</Text>
              </Accordion.Control>
              <Accordion.Panel>
                <Text>
                  We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, 
                  unless a longer retention period is required or permitted by law. When determining retention periods, we consider:
                </Text>
                <List spacing="xs" mt="xs">
                  <List.Item>The amount, nature, and sensitivity of the personal data</List.Item>
                  <List.Item>The potential risk of harm from unauthorized use or disclosure</List.Item>
                  <List.Item>The purposes for which we process the data</List.Item>
                  <List.Item>Legal, accounting, or reporting requirements</List.Item>
                </List>
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="choices">
              <Accordion.Control>
                <Text fw={700}>7. Your Rights and Choices</Text>
              </Accordion.Control>
              <Accordion.Panel>
                <Text>
                  Depending on your location, you may have certain rights regarding your personal information:
                </Text>
                <List spacing="xs" mt="xs">
                  <List.Item>Access and view your personal information</List.Item>
                  <List.Item>Correct inaccurate or incomplete information</List.Item>
                  <List.Item>Delete your personal information</List.Item>
                  <List.Item>Restrict or object to processing of your data</List.Item>
                  <List.Item>Request transfer of your data to another service provider</List.Item>
                  <List.Item>Withdraw consent where processing is based on consent</List.Item>
                </List>
                <Text mt="xs">
                  To exercise these rights, please contact us using the information provided in the Contact Us section.
                </Text>
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="cookies">
              <Accordion.Control>
                <Text fw={700}>8. Cookies and Tracking Technologies</Text>
              </Accordion.Control>
              <Accordion.Panel>
                <Text>
                  We use cookies and similar tracking technologies to enhance your experience on our website, analyze site usage, 
                  and assist in our marketing efforts. You can control cookie settings through your browser preferences, though 
                  disabling certain cookies may affect the functionality of our website.
                </Text>
                <Text mt="xs">
                  Types of cookies we use:
                </Text>
                <List spacing="xs" mt="xs">
                  <List.Item>Essential cookies: Required for basic site functionality</List.Item>
                  <List.Item>Preference cookies: Remember your settings and preferences</List.Item>
                  <List.Item>Analytics cookies: Help us improve our website by collecting usage information</List.Item>
                  <List.Item>Marketing cookies: Track your activity across websites to deliver relevant advertisements</List.Item>
                </List>
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="children">
              <Accordion.Control>
                <Text fw={700}>9. Children's Privacy</Text>
              </Accordion.Control>
              <Accordion.Panel>
                <Text>
                  Our services are not intended for children under 18 years of age. We do not knowingly collect personal information 
                  from children. If you are a parent or guardian and believe your child has provided us with personal information, 
                  please contact us, and we will take steps to delete such information.
                </Text>
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="changes">
              <Accordion.Control>
                <Text fw={700}>10. Changes to This Privacy Policy</Text>
              </Accordion.Control>
              <Accordion.Panel>
                <Text>
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy 
                  on this page and updating the "Last Updated" date. We recommend reviewing this Privacy Policy periodically for any changes.
                </Text>
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="contact">
              <Accordion.Control>
                <Text fw={700}>11. Contact Us</Text>
              </Accordion.Control>
              <Accordion.Panel>
                <Text>
                  If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:
                </Text>
                <Text mt="xs" fw={500}>
                  Email: admin@giftkakis.com
                </Text>
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
          <Text size="md">Last Updated: Apr 4, 2025</Text>
          <Text size="sm" c="dimmed">
            By registering as a user or vendor on our Platform, you acknowledge that you have read, 
            understood, and agree to be bound by this Privacy Policy.
          </Text>
        </Stack>
        </Paper>

        </Group>
        </Stack>
      </Container>
      <Footer></Footer>
    </>
  );
} 