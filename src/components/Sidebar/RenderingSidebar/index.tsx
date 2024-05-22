"use client";
import { Box, Flex, Skeleton } from "@mantine/core";
import React, { ReactNode } from "react";

type conditionalRenderingTypes = {
  isFetching: boolean;
  children: ReactNode;
};
const RenderingSidebar = ({
  isFetching,
  children,
}: conditionalRenderingTypes) => {
  return (
    <Box pos={"relative"}>
      {isFetching ? (
        <Flex direction={{ base: "row", lg: "column" }} gap={"xs"}>
          {Array.from({ length: 6 }).map((_, index) => (
            <Skeleton key={index} w={120} h={40} radius={"md"} />
          ))}
        </Flex>
      ) : (
        children
      )}
    </Box>
  );
};

export default RenderingSidebar;
