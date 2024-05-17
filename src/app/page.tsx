"use client";
import { Container, Text } from "@mantine/core";
import Hero from "@/components/Hero";
import Motivations from "@/components/Motivations";
import Testimonials from "@/components/Testimonials";
import VisiMisi from "@/components/VisiMisi";

export default function Home() {
  return (
    <Container size={"lg"}>
      <Hero />
      <VisiMisi />
      <Motivations />
      <Testimonials />
      <Text ta={"center"} mt={100} mb={32}>SiPerpus &copy; 2024 | supportsiperpus@gmail.com</Text>
    </Container>
  );
}
