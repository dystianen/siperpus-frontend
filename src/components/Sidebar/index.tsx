import { Group, Stack, UnstyledButton } from "@mantine/core";
import { motion } from "framer-motion";
import { useGetCategoriesQuery } from "@/redux/slice/books.api";
import { useAtom } from "jotai";
import { activeSidebar } from "@/config/GlobalState";
import RenderingSidebar from "./RenderingSidebar";

export const Sidebar = () => {
  const [active, setActive] = useAtom(activeSidebar);
  const { data: menu, isFetching } = useGetCategoriesQuery();

  return (
    <Group w={"max-content"} align="start">
      <RenderingSidebar isFetching={isFetching}>
        <Stack w={"max-content"}>
          {menu?.map((it, index) => {
            const isActive = active === it.category_id;
            return (
              <UnstyledButton
                key={index}
                onClick={() => setActive(it.category_id)}
              >
                <motion.div
                  whileHover={{
                    backgroundColor: !isActive ? "#c2c2c2" : "#557153",
                    color: "white",
                  }}
                  style={{
                    paddingTop: 10,
                    paddingBottom: 10,
                    paddingLeft: 16,
                    paddingRight: 16,
                    borderRadius: 5,
                    backgroundColor: isActive ? "#557153" : "",
                    color: isActive ? "white" : "",
                  }}
                >
                  {it.category_name}
                </motion.div>
              </UnstyledButton>
            );
          })}
        </Stack>
      </RenderingSidebar>
    </Group>
  );
};
