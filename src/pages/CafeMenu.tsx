import React from "react";
import {
  Grid,
  Image,
  Title,
  GridCol,
  List,
  ListItem,
  Text,
  AspectRatio,
} from "@mantine/core";
import { StyledContainer } from "@components/StyledContainer";
import { useMediaQuery } from "@mantine/hooks";
import { menuSections } from "@constants/CafeMenu";
import { MenuSection } from "types/cafemenu";

const SectionContent: React.FC<MenuSection> = ({
  title,
  subTitle,
  timing,
  items,
}) => {
  return (
    <>
      <Title className="title" fw="900">
        {title}
      </Title>
      <Text className="timing">{timing}</Text>

      <List className="list">
        {items.map((item, index) => (
          <ListItem fw="bold" key={index} mb="xs">
            {item}
          </ListItem>
        ))}
      </List>
      <Text className="sub-title">{subTitle}</Text>
    </>
  );
};

const CafeMenu: React.FC = () => {
  const isMobile = useMediaQuery("(max-width: 36em)");

  return (
    <>
      <Title className="title" ta="center" fw={900} pt="xl">
        Menu Card
      </Title>
      <StyledContainer>
        {menuSections.map((section, index) => (
          <Grid
            key={section.title}
            gutter="xl"
            justify="space-between"
            className="cafe-menu"
          >
            {isMobile || index % 2 === 0 ? (
              <>
                <GridCol span={{ base: 12, sm: 6 }}>
                  <SectionContent {...section} />
                </GridCol>
                <GridCol span={{ base: 12, sm: 5 }} inset={{ base: 0, sm: 1 }}>
                  <AspectRatio ratio={4 / 3}>
                    <Image
                      src={section.image}
                      alt={section.title}
                      radius="md"
                    />
                  </AspectRatio>
                </GridCol>
              </>
            ) : (
              <>
                <GridCol span={{ base: 12, sm: 5 }} inset={{ base: 0, sm: 1 }}>
                  <AspectRatio ratio={4 / 3}>
                    <Image
                      src={section.image}
                      alt={section.title}
                      radius="md"
                    />
                  </AspectRatio>
                </GridCol>
                <GridCol span={{ base: 12, sm: 6 }}>
                  <SectionContent {...section} />
                </GridCol>
              </>
            )}
          </Grid>
        ))}
      </StyledContainer>
    </>
  );
};

export default CafeMenu;
