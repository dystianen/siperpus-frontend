"use client";
import { Container } from "@mantine/core";
import Hero from "@/components/Hero";
import Motivations from "@/components/Motivations";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <Container size={"lg"} mb={100}>
      <Hero />
      <Motivations />
      <Testimonials />
    </Container>
  );
}
