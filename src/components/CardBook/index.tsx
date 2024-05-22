"use client";
import embedImage from "@/helper/embedImage";
import { bookTypes } from "@/types/books";
import { Group, Stack, Text, UnstyledButton } from "@mantine/core";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const CardBook = ({ item }: { item: bookTypes }) => {
  const router = useRouter();

  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        transition: {
          duration: 0.5,
        },
      }}
    >
      <UnstyledButton onClick={() => router.push(`/books/${item.book_id}`)}>
        <Stack gap={3} align="center" justify="center">
          <Image
            src={embedImage(item.thumbnail)}
            width={180}
            height={269}
            alt="book"
            style={{
              borderRadius: 10,
            }}
          />
          <Text ta={"center"} fw={600} lineClamp={1} px={16}>
            {item.title}
          </Text>
          <Group justify="center" align="center" gap={3}>
            <Image src={"/star.svg"} width={24} height={24} alt="star" />
            <Text>{item.rating}/5</Text>
          </Group>
        </Stack>
      </UnstyledButton>
    </motion.div>
  );
};

export default CardBook;
