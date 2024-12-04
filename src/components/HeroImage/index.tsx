import {
  Title,
  Text,
  Container,
  Overlay,
  useMantineTheme,
} from "@mantine/core";
import classes from "./index.module.css";
import { companyInfo } from "@constants/CompanyInfo";
import { highlightKeyword } from "@utils/highlighter";

const HeroImageBackground: React.FC = () => {
  const theme = useMantineTheme();
  const { title, highlight, description, image } = companyInfo.hero;

  return (
    <div
      className={classes.wrapper}
      style={{ backgroundImage: `url(${image})` }}
    >
      <Overlay color="#000" opacity={0.65} zIndex={1} />

      <div className={classes.inner}>
        <Title className={classes.title}>
          {highlightKeyword(highlight, title, theme.colors.brand[4])}
        </Title>

        <Container size={640}>
          <Text className={classes.description}>{description}</Text>
        </Container>
      </div>
    </div>
  );
};

export default HeroImageBackground;
