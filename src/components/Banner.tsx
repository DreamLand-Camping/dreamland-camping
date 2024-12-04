import {
  Grid,
  GridCol,
  Image,
  rem,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { StyledContainer } from "@components/StyledContainer";
import AnimatedSection from "@components/AnimatedSection";
import { banner } from "@constants/Banner";
import { highlightKeyword } from "@utils/highlighter";

const Banner: React.FC = () => {
  const theme = useMantineTheme();
  const { title, highlight, description, image } = banner;

  return (
    <StyledContainer>
      <Grid align="center">
        <GridCol span={{ base: 12, sm: 6 }}>
          <AnimatedSection animationType="left">
            <Title>
              {highlightKeyword(highlight, title, theme.colors.brand[7])}
            </Title>
            <Text c="dimmed" mt="md" ta="justify">
              {description}
            </Text>
          </AnimatedSection>
        </GridCol>
        <GridCol span={{ base: 12, sm: 5 }} offset={{ base: 0, sm: 1 }}>
          <AnimatedSection animationType="right">
            <Image
              style={{ borderRadius: rem(8) }}
              src={image}
              alt="Banner Image"
            />
          </AnimatedSection>
        </GridCol>
      </Grid>
    </StyledContainer>
  );
};

export default Banner;
