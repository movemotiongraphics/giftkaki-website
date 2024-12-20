import { Container, Group, Stack, Skeleton } from '@mantine/core';


export function Steps() {

  return (
    <Container my="md" w={"100%"}>
        <Group justify='center' gap={124} pt={64}>
            <Skeleton maw={800} height={300} radius="md" animate={false} />
            <Skeleton maw={800} height={300} radius="md" animate={false} />
            <Skeleton maw={800} height={300} radius="md" animate={false} />
        </Group>
    </Container>
  );
}