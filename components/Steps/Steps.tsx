import { Container, Group, Stack, Box, Text, Title } from '@mantine/core';
import Image from 'next/image';
import Step1 from '../../public/Step1.png';
import Step2 from '../../public/Step2.png';
import Step3 from '../../public/Step3.png';
import Step4 from '../../public/Step4.png';



export function Steps() {

  return (
    <Container my="md" w={"100%"}>
        <Stack justify='center' align="center" gap={64}>
            <Stack px={32} align="center" gap={24}>
                <Image
                src={Step1}
                height={800}
                alt="step1"
                quality={100}
                style={{ borderRadius: "30px", width: "100%", height: "auto" }}
                />
                <Text c="gray" size="xl" fw="500" >First, add who you want to send the gifts to.</Text>
            </Stack>

            <Stack px={32} align="center" gap={24}>
                <Image
                src={Step2}
                height={800}
                alt="step1"
                quality={80}
                style={{ borderRadius: "30px", width: "100%", height: "auto" }}
                />
            <Text c="gray" size="xl" fw="500">Secondly, plan ahead on the calendar.</Text>
            </Stack>

            <Stack px={32} align="center" gap={24}>
                <Image
                src={Step3}
                height={800}
                quality={80}
                alt="step1"
                style={{ borderRadius: "30px", width: "100%", height: "auto" }}
                />
                <Text c="gray" size="xl" fw="500">Plan your gift selection ahead from more than 10 local vendors.</Text>
            </Stack>

            <Stack px={32} align="center" gap={24}>
                <Image
                src={Step4}
                height={800}
                quality={80}
                alt="step1"
                style={{ borderRadius: "30px", width: "100%", height: "auto" }}
                />
                <Text c="gray" size="xl" ta="center" fw="500">We'll deliver them to the friend on that day itself. You'll be notified in every step!</Text>
            </Stack>
        </Stack>
    </Container>
  );
}