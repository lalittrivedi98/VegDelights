import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Video } from "@/components/Video";

export default function Home() {
  return (
    <Container>
      <Hero />

      <SectionTitle
        title="Why choose us?"
      >
        Because Veg delight&apos;blahblah, blahblah,
        blahblah, blahblah, blahblah and blahblah
        is goated.
      </SectionTitle>

      <Video videoId="oVkMYGlSjSA" />

    </Container>
  );
}
