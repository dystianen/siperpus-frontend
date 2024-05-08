"use client";
import CardBook from "@/components/CardBook";
import RenderBooks from "@/components/Rendering/RenderBooks";
import EmptyState from "@/components/EmptyState";
import { Sidebar } from "@/components/Sidebar";
import { activeSidebar } from "@/config/GlobalState";
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

export default function Categories() {
  const category = useAtomValue(activeSidebar);
  const [search, setSearch] = useDebouncedState("", 500);
  const {
    data: books,
    isSuccess,
    isFetching,
  } = useGetBooksQuery({ category, search });

  return (
    <Box h={"80vh"} mt={100}>
      <Container size={"lg"}>
        <Group justify="space-between">
          <Text fz={32} fw={600} mb={32}>
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
          <Grid.Col span={2}>
            <Sidebar />
          </Grid.Col>
          <Grid.Col span={10}>
            <RenderBooks isFetching={isFetching}>
              {isSuccess && books!.length > 0 ? (
                <ScrollArea h={"72vh"} scrollbars="y" scrollbarSize={6}>
                  <Grid>
                    {books?.map((it, index) => (
                      <Grid.Col key={index} span={{ base: 1, md: 4, lg: 3 }}>
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
