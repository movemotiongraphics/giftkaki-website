import { Navbar } from '../components/Navbar/navbar';
import { TitleCard } from '../components/FeatureTitle/TitleCard';
import { Group, Stack, Container, Text, Title, Button } from '@mantine/core';
import { TitleGrid } from '../components/TitleGrid/TitleGrid';
import { Steps } from '../components/Steps/Steps';
import { Footer } from '../components/Footer/Footer';

export default function Terms() {
  return (
    <>
      <Navbar></Navbar>
      <Container maw={1000}>
        <Stack>
            <Group justify='center'>
                <Title mt={48}>
                Terms and Conditions
                </Title>
            </Group>
        </Stack>
        <Stack>
            <Group justify='center'>
                <Title mt={48} order={4}>
                Last Updated: December 24, 2024
                </Title>

                <Text>
## 1. Acceptance of Terms

By accessing and using the services provided by [Company Name] ("we," "us," or "our"), you agree to be bound by these Terms and Conditions ("Terms"). If you do not agree to these Terms, please do not use our services.

## 2. Service Description

We provide a calendar-based gift recommendation and delivery service ("Service") that helps users send gifts to their contacts based on calendar events and special occasions.

## 3. User Accounts

### 3.1 Registration
- You must provide accurate, current, and complete information during registration
- You are responsible for maintaining the confidentiality of your account credentials
- You must be at least 18 years old to use our Service

### 3.2 Calendar Integration
- You grant us permission to access and sync with your designated calendar(s)
- We will only access calendar data necessary for providing our Service
- You are responsible for maintaining accurate calendar information

## 4. Gift Orders and Delivery

### 4.1 Order Processing
- All gift orders are subject to availability
- Prices are subject to change without notice
- We reserve the right to refuse any order at our discretion

### 4.2 Delivery
- Delivery times are estimates and not guaranteed
- You are responsible for providing accurate delivery information
- We are not responsible for gifts that cannot be delivered due to incorrect information
- Additional charges may apply for expedited shipping or special handling

## 5. Payment Terms

### 5.1 Pricing
- All prices are in [Currency] and include applicable taxes
- Shipping costs are calculated at checkout
- Subscription fees, if any, will be billed according to the plan selected

### 5.2 Payment Processing
- We use secure third-party payment processors
- You agree to pay all charges at the prices then in effect
- You authorize us to charge your chosen payment method

## 6. Cancellation and Refunds

### 6.1 Order Cancellation
- Orders can be cancelled up to 24 hours before scheduled delivery
- Custom or personalized items may not be eligible for cancellation
- Cancellation fees may apply

### 6.2 Refunds
- Refund eligibility is determined on a case-by-case basis
- Processing times for refunds may vary
- Shipping costs are generally non-refundable

## 7. Privacy and Data Protection

### 7.1 Data Collection
- We collect and process personal data as described in our Privacy Policy
- Calendar data is processed according to our data protection guidelines
- You retain ownership of your personal data

### 7.2 Data Security
- We implement reasonable security measures to protect your information
- We do not sell your personal data to third parties
- We may share necessary data with delivery partners to fulfill orders

## 8. Intellectual Property

- All content and materials on our platform are protected by intellectual property rights
- You may not use our trademarks or branding without written permission
- User-generated content remains the property of the user

## 9. Limitation of Liability

- We are not liable for any indirect, incidental, or consequential damages
- Our total liability shall not exceed the amount paid for the specific gift order in question
- We are not responsible for delays or failures beyond our reasonable control

## 10. Changes to Terms

We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to our website. Your continued use of our Service constitutes acceptance of any modifications.

## 11. Termination

We may terminate or suspend your account and access to our Service at any time, without prior notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties, or for any other reason.

## 12. Governing Law

These Terms shall be governed by and construed in accordance with the laws of [Jurisdiction], without regard to its conflict of law provisions.

## 13. Contact Information

For questions about these Terms, please contact us at:
[Company Name]
[Address]
[Email]
[Phone]

## 14. Severability

If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary so that these Terms shall otherwise remain in full force and effect and enforceable.

By using our Service, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
                </Text>
            </Group>
        </Stack>
        
      </Container>

      <Footer></Footer>
    </>
  );
}
