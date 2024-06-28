"use client";
import { Text } from "@mantine/core";
import Hero from "@/components/Hero";
import VisiMisi from "@/components/VisiMisi";
import Teams from "@/components/Teams";

export default function Home() {
  return (
    <>
      <Hero />
      <VisiMisi />
      <Teams />
      <Text ta={"center"} mt={100} mb={32}>
        SiPerpus &copy; 2024 | supportsiperpus@gmail.com
      </Text>
    </>
  );
}
