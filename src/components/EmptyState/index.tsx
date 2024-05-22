import { Stack, Text } from "@mantine/core";
import Image from "next/image";

const EmptyState = () => {
  return (
    <Stack align="center">
      <Image
        src={"/assets/imgs/ic-empty-state.svg"}
        width={200}
        height={200}
        alt="empty-state"
      />
      <Text fw={600} ta={"center"} fz={32}>
        Belum ada data buku
      </Text>
    </Stack>
  );
};

export default EmptyState;
