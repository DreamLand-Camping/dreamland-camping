import { Text, Card, SimpleGrid, Image } from "@mantine/core";
import classes from "./index.module.css";
import { features } from "@constants/Features";
import { StyledContainer } from "@components/StyledContainer";
import AnimatedSection from "@components/AnimatedSection";

const Features: React.FC = () => {
  const featureCards = features.map((feature, index) => (
    <Card
      key={index}
      shadow="md"
      radius="md"
      className={classes.card}
      padding="xl"
    >
      <Image
        src={feature.src}
        className="icon fs-50"
        alt={`Gallery image ${index + 1}`}
      />
      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));

  return (
    <StyledContainer size="lg" py="xl">
      <AnimatedSection animationType="zoom">
        <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
          {featureCards}
        </SimpleGrid>
      </AnimatedSection>
    </StyledContainer>
  );
};

export default Features;
