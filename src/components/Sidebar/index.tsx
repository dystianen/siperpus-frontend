import {
  Flex,
  Group,
  ScrollArea,
  Stack,
  UnstyledButton,
  useMantineTheme,
} from "@mantine/core";
import { motion } from "framer-motion";
import { useGetCategoriesQuery } from "@/redux/slice/books.api";
import { useAtom } from "jotai";
import { activeSidebar } from "@/store/GlobalState";
import RenderingSidebar from "./RenderingSidebar";

export const Sidebar = () => {
  const theme = useMantineTheme();
  const [active, setActive] = useAtom(activeSidebar);
  const { data: menu, isFetching } = useGetCategoriesQuery();

  return (
    <Group w={"max-content"} align="start">
      <RenderingSidebar isFetching={isFetching}>
        <ScrollArea.Autosize maw={400} mx="auto">
          <Flex direction={{ base: "row", lg: "column" }} gap={"xs"}>
            {menu?.map((it, index) => {
              const isActive = active === it.category_id;
              return (
                <UnstyledButton
                  key={index}
                  onClick={() => setActive(it.category_id)}
                >
                  <motion.div
                    whileHover={{
                      backgroundColor: "rgba(255,255,255,.1)",
                      color: "white",
                    }}
                    style={{
                      paddingTop: 8,
                      paddingBottom: 8,
                      paddingLeft: 16,
                      paddingRight: 16,
                      borderRadius: 5,
                      backgroundColor: isActive ? "rgba(255, 255, 255, 0.1)" : "",
                      color: isActive ? "white" : "",
                    }}
                  >
                    {it.category_name}
                  </motion.div>
                </UnstyledButton>
              );
            })}
          </Flex>
        </ScrollArea.Autosize>
      </RenderingSidebar>
    </Group>
  );
};
