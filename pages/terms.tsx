import { Navbar } from '../components/Navbar/navbar';
import { TitleCard } from '../components/FeatureTitle/TitleCard';
import { Group, Stack, Container, Text, Title, Button, Accordion, Paper, Box, List, Divider } from '@mantine/core';
import { TitleGrid } from '../components/TitleGrid/TitleGrid';
import { Steps } from '../components/Steps/Steps';
import { Footer } from '../components/Footer/Footer';

export default function Terms() {
  return (
    <>
      <Navbar></Navbar>
      <Container maw={1000}>
        <Stack mb={24}>
            <Group justify='center'>
                <Title mt={48} c="pink">
                Terms and Conditions
                </Title>
            </Group>
        </Stack>

        <Stack>
        <Group justify='center'>

        <Paper shadow="xs" p="lg" radius="xl">
        <Stack gap="lg" maw={600}>          
          <Accordion>
            <Accordion.Item value="acceptance">
              <Accordion.Control>
                <Text fw={700}>1. Acceptance of Terms</Text>
              </Accordion.Control>
              <Accordion.Panel>
                <Text>
                  By accessing and using the services provided by GiftKakis ("we," "us," or "our"), 
                  you agree to be bound by these Terms and Conditions ("Terms"). If you do not agree to 
                  these Terms, please do not use our services.
                </Text>
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="service">
              <Accordion.Control>
                <Text fw={700}>2. Service Description</Text>
              </Accordion.Control>
              <Accordion.Panel>
                <Text>
                  We provide a calendar-based gift recommendation and delivery service ("Service") that 
                  helps users send gifts to their contacts based on calendar events and special occasions.
                </Text>
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="accounts">
              <Accordion.Control>
                <Text fw={700}>3. User Accounts</Text>
              </Accordion.Control>
              <Accordion.Panel>
                <Stack gap="md">
                  <Box>
                    <Text fw={600}>3.1 Registration</Text>
                    <List spacing="xs" mt="xs">
                      <List.Item>You must provide accurate, current, and complete information during registration</List.Item>
                      <List.Item>You are responsible for maintaining the confidentiality of your account credentials</List.Item>
                      <List.Item>You must be at least 18 years old to use our Service</List.Item>
                    </List>
                  </Box>
                  
                  <Box>
                    <Text fw={600}>3.2 Calendar Integration</Text>
                    <List spacing="xs" mt="xs">
                      <List.Item>You grant us permission to access and sync with your designated calendar(s)</List.Item>
                      <List.Item>We will only access calendar data necessary for providing our Service</List.Item>
                      <List.Item>You are responsible for maintaining accurate calendar information</List.Item>
                    </List>
                  </Box>
                </Stack>
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="orders">
              <Accordion.Control>
                <Text fw={700}>4. Gift Orders and Delivery</Text>
              </Accordion.Control>
              <Accordion.Panel>
                <Stack gap="md">
                  <Box>
                    <Text fw={600}>4.1 Order Processing</Text>
                    <List spacing="xs" mt="xs">
                      <List.Item>All gift orders are subject to availability</List.Item>
                      <List.Item>Prices are subject to change without notice</List.Item>
                      <List.Item>We reserve the right to refuse any order at our discretion</List.Item>
                    </List>
                  </Box>
                  
                  <Box>
                    <Text fw={600}>4.2 Delivery</Text>
                    <List spacing="xs" mt="xs">
                      <List.Item>Delivery times are estimates and not guaranteed</List.Item>
                      <List.Item>You are responsible for providing accurate delivery information</List.Item>
                      <List.Item>We are not responsible for gifts that cannot be delivered due to incorrect information</List.Item>
                      <List.Item>Additional charges may apply for expedited shipping or special handling</List.Item>
                    </List>
                  </Box>
                </Stack>
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="payment">
              <Accordion.Control>
                <Text fw={700}>5. Payment Terms</Text>
              </Accordion.Control>
              <Accordion.Panel>
                <Stack gap="md">
                  <Box>
                    <Text fw={600}>5.1 Pricing</Text>
                    <List spacing="xs" mt="xs">
                      <List.Item>All prices are in SGD and include applicable taxes</List.Item>
                      <List.Item>Shipping costs are calculated at checkout</List.Item>
                      <List.Item>Subscription fees, if any, will be billed according to the plan selected</List.Item>
                    </List>
                  </Box>
                  
                  <Box>
                    <Text fw={600}>5.2 Payment Processing</Text>
                    <List spacing="xs" mt="xs">
                      <List.Item>We use secure third-party payment processors</List.Item>
                      <List.Item>You agree to pay all charges at the prices then in effect</List.Item>
                      <List.Item>You authorize us to charge your chosen payment method</List.Item>
                    </List>
                  </Box>
                </Stack>
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="cancellation">
              <Accordion.Control>
                <Text fw={700}>6. Cancellation and Refunds</Text>
              </Accordion.Control>
              <Accordion.Panel>
                <Stack gap="md">
                  <Box>
                    <Text fw={600}>6.1 Order Cancellation</Text>
                    <List spacing="xs" mt="xs">
                      <List.Item>Orders can be cancelled up to 24 hours before scheduled delivery</List.Item>
                      <List.Item>Custom or personalized items may not be eligible for cancellation</List.Item>
                      <List.Item>Cancellation fees may apply</List.Item>
                    </List>
                  </Box>
                  
                  <Box>
                    <Text fw={600}>6.2 Refunds</Text>
                    <List spacing="xs" mt="xs">
                      <List.Item>Refund eligibility is determined on a case-by-case basis</List.Item>
                      <List.Item>Processing times for refunds may vary</List.Item>
                      <List.Item>Shipping costs are generally non-refundable</List.Item>
                    </List>
                  </Box>
                </Stack>
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="privacy">
              <Accordion.Control>
                <Text fw={700}>7. Privacy and Data Protection</Text>
              </Accordion.Control>
              <Accordion.Panel>
                <Stack gap="md">
                  <Box>
                    <Text fw={600}>7.1 Data Collection</Text>
                    <List spacing="xs" mt="xs">
                      <List.Item>We collect and process personal data as described in our Privacy Policy</List.Item>
                      <List.Item>Calendar data is processed according to our data protection guidelines</List.Item>
                      <List.Item>You retain ownership of your personal data</List.Item>
                    </List>
                  </Box>
                  
                  <Box>
                    <Text fw={600}>7.2 Data Security</Text>
                    <List spacing="xs" mt="xs">
                      <List.Item>We implement reasonable security measures to protect your information</List.Item>
                      <List.Item>We do not sell your personal data to third parties</List.Item>
                      <List.Item>We may share necessary data with delivery partners to fulfill orders</List.Item>
                    </List>
                  </Box>
                </Stack>
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="intellectual">
              <Accordion.Control>
                <Text fw={700}>8. Intellectual Property</Text>
              </Accordion.Control>
              <Accordion.Panel>
                <List spacing="xs">
                  <List.Item>All content and materials on our platform are protected by intellectual property rights</List.Item>
                  <List.Item>You may not use our trademarks or branding without written permission</List.Item>
                  <List.Item>User-generated content remains the property of the user</List.Item>
                </List>
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="liability">
              <Accordion.Control>
                <Text fw={700}>9. Limitation of Liability</Text>
              </Accordion.Control>
              <Accordion.Panel>
                <List spacing="xs">
                  <List.Item>We are not liable for any indirect, incidental, or consequential damages</List.Item>
                  <List.Item>Our total liability shall not exceed the amount paid for the specific gift order in question</List.Item>
                  <List.Item>We are not responsible for delays or failures beyond our reasonable control</List.Item>
                </List>
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="changes">
              <Accordion.Control>
                <Text fw={700}>10. Changes to Terms</Text>
              </Accordion.Control>
              <Accordion.Panel>
                <Text>
                  We reserve the right to modify these Terms at any time. Changes will be effective immediately 
                  upon posting to our website. Your continued use of our Service constitutes acceptance of 
                  any modifications.
                </Text>
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="termination">
              <Accordion.Control>
                <Text fw={700}>11. Termination</Text>
              </Accordion.Control>
              <Accordion.Panel>
                <Text>
                  We may terminate or suspend your account and access to our Service at any time, without 
                  prior notice, for conduct that we believe violates these Terms or is harmful to other 
                  users, us, or third parties, or for any other reason.
                </Text>
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="governing">
              <Accordion.Control>
                <Text fw={700}>12. Governing Law</Text>
              </Accordion.Control>
              <Accordion.Panel>
                <Text>
                  These Terms shall be governed by and construed in accordance with the laws of Singapore, 
                  without regard to its conflict of law provisions.
                </Text>
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="contact">
              <Accordion.Control>
                <Text fw={700}>13. Contact Information</Text>
              </Accordion.Control>
              <Accordion.Panel>
                <Text>
                  For questions about these Terms, please contact us at: admin@giftkakis.com
                </Text>
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="severability">
              <Accordion.Control>
                <Text fw={700}>14. Severability</Text>
              </Accordion.Control>
              <Accordion.Panel>
                <Text>
                  If any provision of these Terms is found to be unenforceable or invalid, that provision 
                  shall be limited or eliminated to the minimum extent necessary so that these Terms shall 
                  otherwise remain in full force and effect and enforceable.
                </Text>
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>

          <Divider />
          <Text size="md">
          Last Updated: December 24, 2024
          </Text>
          
          <Text size="sm" c="dimmed">
            By signing up and using our Service, you acknowledge that you have read, understood, and agree to be bound 
            by these Terms and Conditions.
          </Text>
        </Stack>
      </Paper>
            </Group>
        </Stack>

        <Stack mb={24}>
            <Group justify='center'>
                <Title mt={48} c="pink">
                Vendor Terms and Conditions
                </Title>
            </Group>
        </Stack>

        <Stack>
        <Group justify='center'>
        <Stack>
        
        <Paper shadow="xs" maw={600} p="lg" radius="xl">
        <Stack gap="lg">
          
          <Accordion>
            <Accordion.Item value="acceptance">
              <Accordion.Control>
                <Text fw={700}>1. Acceptance of Terms</Text>
              </Accordion.Control>
              <Accordion.Panel>
                <Text>
                  By registering as a vendor on GiftKakis ("Platform"), you agree to be bound by these 
                  Terms and Conditions ("Terms"). Please read them carefully before proceeding with registration.
                </Text>
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="registration">
              <Accordion.Control>
                <Text fw={700}>2. Vendor Registration</Text>
              </Accordion.Control>
              <Accordion.Panel>
                <Stack gap="md">
                  <Box>
                    <Text fw={600}>2.1 Requirements</Text>
                    <List spacing="xs" mt="xs">
                      <List.Item>Be a legally registered business entity</List.Item>
                      <List.Item>Provide accurate and complete business information</List.Item>
                      <List.Item>Maintain updated contact and payment information</List.Item>
                      <List.Item>Be authorized to sell the products you list</List.Item>
                    </List>
                  </Box>
                  <Text>2.2 You are responsible for maintaining the confidentiality of your account credentials.</Text>
                </Stack>
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="listings">
              <Accordion.Control>
                <Text fw={700}>3. Product Listings</Text>
              </Accordion.Control>
              <Accordion.Panel>
                <Stack gap="md">
                  <Box>
                    <Text fw={600}>3.1 Listing Requirements</Text>
                    <List spacing="xs" mt="xs">
                      <List.Item>Provide accurate descriptions of all products</List.Item>
                      <List.Item>Update product availability in real-time</List.Item>
                      <List.Item>Set fair and transparent pricing</List.Item>
                      <List.Item>Include clear images of products</List.Item>
                      <List.Item>Specify all relevant gift details and restrictions</List.Item>
                    </List>
                  </Box>
                  
                  <Box>
                    <Text fw={600}>3.2 Prohibited Items</Text>
                    <List spacing="xs" mt="xs">
                      <List.Item>Counterfeit goods</List.Item>
                      <List.Item>Illegal items</List.Item>
                      <List.Item>Expired or damaged products</List.Item>
                      <List.Item>Items violating third-party intellectual property rights</List.Item>
                    </List>
                  </Box>
                </Stack>
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="fulfillment">
              <Accordion.Control>
                <Text fw={700}>4. Order Fulfillment</Text>
              </Accordion.Control>
              <Accordion.Panel>
                <Text fw={600}>4.1 Vendor Commitments</Text>
                <List spacing="xs" mt="xs">
                  <List.Item>Honor all confirmed orders</List.Item>
                  <List.Item>Meet scheduled delivery dates</List.Item>
                  <List.Item>Maintain sufficient inventory</List.Item>
                  <List.Item>Provide tracking information when applicable</List.Item>
                  <List.Item>Handle returns and refunds according to platform policy</List.Item>
                </List>
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="fees">
              <Accordion.Control>
                <Text fw={700}>5. Fees and Payments</Text>
              </Accordion.Control>
              <Accordion.Panel>
                <Stack gap="md">
                  <Box>
                    <Text fw={600}>5.1 Platform Fees</Text>
                    <List spacing="xs" mt="xs">
                      <List.Item>Commission per successful transaction: 15%</List.Item>
                      <List.Item>Payment processing fees: 1 - 2%</List.Item>
                      <List.Item>Additional service fees as applicable</List.Item>
                    </List>
                  </Box>
                  
                  <Box>
                    <Text fw={600}>5.2 Payment Terms</Text>
                    <List spacing="xs" mt="xs">
                      <List.Item>Payments processed within 15 business days</List.Item>
                      <List.Item>Minimum payout threshold: $100</List.Item>
                      <List.Item>All applicable taxes are your responsibility</List.Item>
                    </List>
                  </Box>
                </Stack>
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="rules">
              <Accordion.Control>
                <Text fw={700}>6. Platform Rules</Text>
              </Accordion.Control>
              <Accordion.Panel>
                <Text fw={600}>6.1 Vendor Obligations</Text>
                <List spacing="xs" mt="xs">
                  <List.Item>Respond to customer inquiries within 72 hours</List.Item>
                  <List.Item>Maintain a satisfaction rating of at least 80%</List.Item>
                  <List.Item>Comply with all applicable laws and regulations</List.Item>
                  <List.Item>Follow platform guidelines for content and communication</List.Item>
                </List>
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="cancellation">
              <Accordion.Control>
                <Text fw={700}>7. Cancellation and Termination</Text>
              </Accordion.Control>
              <Accordion.Panel>
                <Stack gap="md">
                  <Box>
                    <Text fw={600}>7.1 Platform Rights</Text>
                    <List spacing="xs" mt="xs">
                      <List.Item>Suspend or terminate accounts violating these terms</List.Item>
                      <List.Item>Remove listings that don't meet standards</List.Item>
                      <List.Item>Hold payments pending investigation of violations</List.Item>
                    </List>
                  </Box>
                  
                  <Text>
                    7.2 Vendors may terminate their account with 15 days written notice, subject to 
                    completing all pending orders.
                  </Text>
                </Stack>
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="liability">
              <Accordion.Control>
                <Text fw={700}>8. Liability and Insurance</Text>
              </Accordion.Control>
              <Accordion.Panel>
                <Text fw={600}>8.1 Vendor Requirements</Text>
                <List spacing="xs" mt="xs">
                  <List.Item>Maintain appropriate business insurance</List.Item>
                  <List.Item>Indemnify the platform against claims arising from their products or services</List.Item>
                  <List.Item>Accept responsibility for product quality and safety</List.Item>
                </List>
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="privacy">
              <Accordion.Control>
                <Text fw={700}>9. Privacy and Data Protection</Text>
              </Accordion.Control>
              <Accordion.Panel>
                <Text fw={600}>9.1 Vendor Obligations</Text>
                <List spacing="xs" mt="xs">
                  <List.Item>Handle customer data in compliance with privacy laws</List.Item>
                  <List.Item>Use customer information only for order fulfillment</List.Item>
                  <List.Item>Maintain confidentiality of platform data</List.Item>
                </List>
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="modifications">
              <Accordion.Control>
                <Text fw={700}>10. Modifications</Text>
              </Accordion.Control>
              <Accordion.Panel>
                <Text fw={600}>10.1 Terms Modifications</Text>
                <List spacing="xs" mt="xs">
                  <List.Item>15 days notice for minor changes</List.Item>
                  <List.Item>15 days notice for material changes</List.Item>
                  <List.Item>Continued use constitutes acceptance of modified terms</List.Item>
                </List>
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="governing">
              <Accordion.Control>
                <Text fw={700}>11. Governing Law</Text>
              </Accordion.Control>
              <Accordion.Panel>
                <Text>
                  These terms are governed by the laws of Singapore, without regard to 
                  conflicts of law principles.
                </Text>
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="contact">
              <Accordion.Control>
                <Text fw={700}>12. Contact Information</Text>
              </Accordion.Control>
              <Accordion.Panel>
                <Text>
                  For questions regarding these terms, contact:
                  admin@giftkakis.com
                </Text>
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>

          <Divider />
          <Text size="md">Last Updated: January 12, 2025</Text>
          <Text size="sm" c="dimmed">
            By registering as a vendor on our Platform, you acknowledge that you have read, 
            understood, and agree to be bound by these Terms and Conditions.
          </Text>
        </Stack>
      </Paper>

            </Stack>
            </Group>
        </Stack>
        
      </Container>

      <Footer></Footer>
    </>
  );
}
