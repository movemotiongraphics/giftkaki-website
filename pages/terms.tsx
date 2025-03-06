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
                  By registering as a vendor on Gift Kakis ("Platform"), you agree to be bound by these 
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
                      <List.Item>Be a legally registered business entity or individual seller (including home-based businesses)</List.Item>
                      <List.Item>Provide accurate and complete business information</List.Item>
                      <List.Item>Maintain updated contact and payment information</List.Item>
                      <List.Item>Be authorized to sell the products you list</List.Item>
                      <List.Item>Submit relevant documents based on category (ACRA Registration, Food Hygiene Certification, NRIC Verification)</List.Item>
                    </List>
                  </Box>
                  
                  <Box>
                    <Text fw={600}>2.2 Home-Based Businesses</Text>
                    <Text>Home-based vendors will be clearly tagged as "Home-Based" on their product listings for transparency.</Text>
                  </Box>
                  
                  <Box>
                    <Text fw={600}>2.3 Account Security</Text>
                    <Text>You are responsible for providing accurate information and maintaining the confidentiality of your account credentials.</Text>
                  </Box>
                  
                  <Box>
                    <Text fw={600}>2.4 Account Usage</Text>
                    <List spacing="xs" mt="xs">
                      <List.Item>Vendors may not share their account with others or use another user's account without permission</List.Item>
                      <List.Item>Vendors are solely responsible for all activities that occur under their account</List.Item>
                    </List>
                  </Box>
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
                      <List.Item>Illegal or counterfeit goods</List.Item>
                      <List.Item>Weapons, explosives, and hazardous materials</List.Item>
                      <List.Item>Tobacco products, controlled drugs, and alcohol</List.Item>
                      <List.Item>Adult content and explicit materials</List.Item>
                      <List.Item>Products that violate intellectual property rights</List.Item>
                    </List>
                    <Text mt="xs">Gift Kakis reserves the right to remove listings that violate platform policies.</Text>
                  </Box>
                </Stack>
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="fulfillment">
              <Accordion.Control>
                <Text fw={700}>4. Order Fulfillment</Text>
              </Accordion.Control>
              <Accordion.Panel>
                <Stack gap="md">
                  <Box>
                    <Text fw={600}>4.1 Vendor Commitments</Text>
                    <List spacing="xs" mt="xs">
                      <List.Item>Honor all confirmed orders and ensure timely fulfillment</List.Item>
                      <List.Item>Maintain sufficient inventory for listed products</List.Item>
                      <List.Item>Meet scheduled delivery timelines</List.Item>
                      <List.Item>Provide tracking information when applicable</List.Item>
                      <List.Item>Respond to orders as soon as possible, within 24 hours</List.Item>
                    </List>
                    <Text mt="xs">Vendors who fail to respond to orders in time will receive a warning from Gift Kakis.</Text>
                  </Box>
                  
                  <Box>
                    <Text fw={600}>4.2 Order Notification Process</Text>
                    <List spacing="xs" mt="xs">
                      <List.Item>When an order is placed, vendors will receive order details via WhatsApp, including an accept/reject button</List.Item>
                      <List.Item>Vendors must confirm or reject the order within the required response time</List.Item>
                    </List>
                  </Box>
                  
                  <Box>
                    <Text fw={600}>4.3 Delivery Policy</Text>
                    <List spacing="xs" mt="xs">
                      <List.Item>Gift Kakis handles and bears the cost of delivery</List.Item>
                      <List.Item>Vendors are not responsible for delivery logistics</List.Item>
                      <List.Item>If Gift Kakis expects late delivery due to unforeseen circumstances, both the vendor and customer will be updated</List.Item>
                    </List>
                  </Box>
                  
                  <Box>
                    <Text fw={600}>4.4 Delivery Issues</Text>
                    <List spacing="xs" mt="xs">
                      <List.Item>In the event of delivery delays or damages caused by our delivery service, Gift Kakis will take full responsibility</List.Item>
                      <List.Item>If vendors fail to fulfill an order that is not the fault of Gift Kakis, we will claim the money back from the vendor after issuing a refund to the customer</List.Item>
                    </List>
                  </Box>
                </Stack>
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
                      <List.Item>Commission per successful transaction: 10%</List.Item>
                      <List.Item>Payment processing fees: 2% (depending on payment method)</List.Item>
                      <List.Item>Vendors retain 88% of the sale price</List.Item>
                    </List>
                  </Box>
                  
                  <Box>
                    <Text fw={600}>5.2 Payment Terms</Text>
                    <List spacing="xs" mt="xs">
                      <List.Item>No minimum payout threshold</List.Item>
                      <List.Item>Payouts are processed almost immediately after deducting commission and transaction fees</List.Item>
                      <List.Item>Vendors are responsible for providing accurate payment information</List.Item>
                      <List.Item>All applicable taxes and compliance costs are the vendor's responsibility</List.Item>
                    </List>
                  </Box>
                </Stack>
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="compliance">
              <Accordion.Control>
                <Text fw={700}>6. Compliance with Regulations</Text>
              </Accordion.Control>
              <Accordion.Panel>
                <Text>Vendors must comply with all applicable Singapore laws, including but not limited to:</Text>
                <List spacing="xs" mt="xs">
                  <List.Item>Sale of Goods Act – Vendors must ensure that products sold are of satisfactory quality, fit for purpose, and match their description</List.Item>
                  <List.Item>Lemon Law – Vendors must be aware of their obligations to provide remedies if products sold are defective</List.Item>
                  <List.Item>Tax Obligations – Vendors are solely responsible for declaring and paying any applicable taxes on their sales</List.Item>
                </List>
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="cancellation">
              <Accordion.Control>
                <Text fw={700}>7. Cancellation, Termination and Refunds</Text>
              </Accordion.Control>
              <Accordion.Panel>
                <Stack gap="md">
                  <Box>
                    <Text fw={600}>7.1 Vendor Responsibilities for Order Cancellations</Text>
                    <List spacing="xs" mt="xs">
                      <List.Item>Refunds are only available during the processing stage of an order (before vendors confirm)</List.Item>
                      <List.Item>Once all vendors confirm an order, users cannot request a refund</List.Item>
                    </List>
                  </Box>
                  
                  <Box>
                    <Text fw={600}>7.2 Order Rejection</Text>
                    <Text>Gift Kakis reserves the right to reject orders if users enter invalid details, such as incorrect addresses or phone numbers.</Text>
                  </Box>
                  
                  <Box>
                    <Text fw={600}>7.3 Platform Rights</Text>
                    <Text>Gift Kakis may:</Text>
                    <List spacing="xs" mt="xs">
                      <List.Item>Suspend or terminate accounts violating these terms</List.Item>
                      <List.Item>Remove listings that fail to meet platform requirements</List.Item>
                      <List.Item>Hold payments pending investigations of policy violations</List.Item>
                    </List>
                    <Text mt="xs">Vendors may terminate their account with 15 days written notice, subject to completing all pending orders.</Text>
                  </Box>
                </Stack>
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="liability">
              <Accordion.Control>
                <Text fw={700}>8. Liability and Insurance</Text>
              </Accordion.Control>
              <Accordion.Panel>
                <Text fw={600}>8.1 Vendor Responsibilities</Text>
                <List spacing="xs" mt="xs">
                  <List.Item>Vendors must maintain appropriate business insurance where applicable</List.Item>
                  <List.Item>Vendors must indemnify Gift Kakis against claims related to their products and services</List.Item>
                  <List.Item>Vendors accept full responsibility for product quality and safety</List.Item>
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
                  <List.Item>Vendors must handle customer data in compliance with Singapore privacy laws</List.Item>
                  <List.Item>Vendors may only use customer data for order fulfillment purposes</List.Item>
                  <List.Item>Vendors must maintain the confidentiality of platform data and are prohibited from sharing customer information with third parties</List.Item>
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
                  <List.Item>15 days notice will be provided for minor changes</List.Item>
                  <List.Item>15 days notice will be provided for material changes</List.Item>
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
