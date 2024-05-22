"use client";
import CardBook from "@/components/CardBook";
import RenderBooks from "@/components/Rendering/RenderBooks";
import EmptyState from "@/components/EmptyState";
import { Sidebar } from "@/components/Sidebar";
import { activeSidebar } from "@/store/GlobalState";
import { useGetBooksQuery } from "@/redux/slice/books.api";
import {
  Box,
  Container,
  Grid,
  Group,
  ScrollArea,
  Text,
  TextInput,
} from "@mantine/core";
import { useAtomValue } from "jotai";
import { LuSearch } from "react-icons/lu";
import { useDebouncedState } from "@mantine/hooks";
import colors from "@/config/colors";

export default function Categories() {
  const category = useAtomValue(activeSidebar);
  const [search, setSearch] = useDebouncedState("", 500);
  const {
    data: books,
    isSuccess,
    isFetching,
  } = useGetBooksQuery({ category, search });

  return (
    <Box h={{ base: "90vh", md: "80vh" }} mt={100}>
      <Container size={"lg"}>
        <Group justify="space-between" align="center" mb={16}>
          <Text fz={32} fw={600} c={colors.neutral[0]}>
            Books
          </Text>
          <TextInput
            placeholder="Search..."
            radius={"md"}
            leftSection={<LuSearch />}
            onChange={(e: any) => setSearch(e.target.value)}
          />
        </Group>
        <Grid>
          <Grid.Col span={{ base: 12, lg: 2 }}>
            <Sidebar />
          </Grid.Col>
          <Grid.Col span={{ base: 12, lg: 10 }}>
            <RenderBooks isFetching={isFetching}>
              {isSuccess && books!.length > 0 ? (
                <ScrollArea h={"72vh"} scrollbars="y" scrollbarSize={6}>
                  <Grid
                    gutter={"xl"}
                    styles={{
                      inner: {
                        padding: 10,
                      },
                    }}
                  >
                    {books?.map((it, index) => (
                      <Grid.Col key={index} span={{ base: 6, md: 4, lg: 3 }}>
                        <CardBook item={it} />
                      </Grid.Col>
                    ))}
                  </Grid>
                </ScrollArea>
              ) : (
                <EmptyState />
              )}
            </RenderBooks>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
}
