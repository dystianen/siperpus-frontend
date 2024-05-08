"use client";
import { embedImage } from "@/helper/embedImage";
import { bookTypes } from "@/types/books";
import { Group, Stack, Text, UnstyledButton } from "@mantine/core";
import Image from "next/image";
import { useRouter } from "next/navigation";

const CardBook = ({ item }: { item: bookTypes }) => {
  const router = useRouter();

  return (
    <UnstyledButton onClick={() => router.push(`/books/${item.book_id}`)}>
      <Stack gap={3} align="center">
        <Image
          src={embedImage(item.thumbnail)}
          width={180}
          height={269}
          alt="book"
        />
        <Text ta={"center"} fw={600}>
          {item.title}
        </Text>
        <Group justify="center" align="center" gap={3}>
          <Image src={"/star.svg"} width={24} height={24} alt="star" />
          <Text>{item.rating}/5</Text>
        </Group>
      </Stack>
    </UnstyledButton>
  );
};

export default CardBook;
