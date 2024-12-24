import { Container, Group, Stack, Box, Text, Title } from '@mantine/core';
import Image from 'next/image';
import Step1 from '../../public/Recipients.png';
import Step2 from '../../public/Calendar.png';
import Step3 from '../../public/Options.png';



export function Steps() {

  return (
    <Container my="md" w={"100%"}>
        <Stack justify='center' align="center" gap={124} pt={64}>
            <Stack w={"100%"} align="center" gap={24}>
                <Text size="xl" fw="500" >First, add who you want to send the gifts to.</Text>
                <Image
                src={Step1}
                height={500}
                alt="step1"
                style={{ borderRadius: "30px", width: "100%", height: "auto" }}
                />
            </Stack>

            <Stack w={"100%"} align="center" gap={24}>
            <Text size="xl" fw="500">Secondly, drag those friends onto a calendar.</Text>
                <Image
                src={Step2}
                height={500}
                alt="step1"
                style={{ borderRadius: "30px", width: "100%", height: "auto" }}
                />
            </Stack>

            <Stack w={"100%"} align="center" gap={24}>
            <Text size="xl" fw="500">Lastly, select your gifts and we'll deliver them to the friend on that day itself.</Text>
                <Image
                src={Step3}
                height={500}
                alt="step1"
                style={{ borderRadius: "30px", width: "100%", height: "auto" }}
                />
            </Stack>
        </Stack>
    </Container>
  );
}