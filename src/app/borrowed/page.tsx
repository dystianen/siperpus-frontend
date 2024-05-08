"use client";
import { embedImage } from "@/helper/embedImage";
import { useGetBorrowedBooksQuery } from "@/redux/slice/books.api";
import {
  Button,
  Card,
  Container,
  Grid,
  Group,
  Stack,
  Text,
} from "@mantine/core";
import Image from "next/image";
import dayjs from "dayjs";

const Borrowed = () => {
  const { data: borrowed } = useGetBorrowedBooksQuery();
  console.log("🚀 ~ Borrowed ~ borrowed:", borrowed);
  return (
    <Container size={"lg"}>
      <Text fw={600} fz={40} mb={24} c={"primary.1"}>
        Borrowed Books
      </Text>

      <Grid>
        {borrowed?.map((it, index) => (
          <Grid.Col key={index} span={{ base: 12, md: 6, lg: 4 }}>
            <Card shadow="sm">
              <Group wrap="nowrap" align="start">
                <Image
                  src={embedImage(it.thumbnail)}
                  width={70}
                  height={100}
                  alt={it.title}
                />
                <Stack gap={0}>
                  <Text fw={600}>{it.title}</Text>
                  <Text>
                    Due date : {dayjs(it.due_date).format("dd, MMM YYYY")}
                  </Text>
                  <Text>status : {it.status}</Text>
                  <Button
                    color={"primary.0"}
                    size="xs"
                    w={"max-content"}
                    variant="outline"
                  >
                    Return
                  </Button>
                </Stack>
              </Group>
            </Card>
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
};

export default Borrowed;
