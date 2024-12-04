import { Text } from "@mantine/core";
import { ReactNode } from "react";

export function highlightKeyword(
  keyword: string,
  text: string,
  highlightColor: string
): ReactNode {
  return text.split(new RegExp(`(${keyword})`, "gi")).map((part, index) =>
    part.toLowerCase() === keyword.toLowerCase() ? (
      <Text
        component="span"
        inherit
        key={index}
        style={{ color: `${highlightColor}` }}
      >
        {part}
      </Text>
    ) : (
      part
    )
  );
}
