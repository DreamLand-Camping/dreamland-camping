import { Container, ContainerProps } from "@mantine/core";

export function StyledContainer({ children }: ContainerProps) {
  return <Container className="styled-container">{children}</Container>;
}
