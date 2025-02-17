import styled from "styled-components";

export const white = "#FFFFFF";
export const blue = "#00B0D9";
export const black = "#101010";

interface TitleProps {
  size?: 24 | 28 | 32 | 36 | 38 | 40 | 44 | 46 | 48 | 50;
  weight?: 300 | 400 | 500;
  line?: 40 | 44;
  color?: string;
}

export const Title = styled.h2<TitleProps>`
  font-size: ${(props) => props.size ?? 32}px;
  font-weight: ${(props) => props.weight ?? 300};
  line-height: ${(props) => props.line ?? 40}px;
  color: ${(props) => props.color ?? white};
`;

interface TextProps {
  size?: 9 | 11 | 12 | 14 | 16 | 18 | 20 | 21 | 22 | 24;
  weight?: 300 | 400 | 500;
  line?: 26 | 30;
  color?: string;
}

export const Text = styled.p<TextProps>`
  font-size: ${(props) => props.size ?? 9}px;
  font-weight: ${(props) => props.weight ?? 300};
  line-height: ${(props) => props.line ?? 30}px;
  color: ${(props) => props.color ?? white};
`;

interface SpanProps {
  size?: 9 | 12 | 18 | 21 | 22 | 28 | 32 | 36;
  weight?: 300 | 400 | 500;
  line?: 30 | 40 | 44;
  color?: string;
}

export const Span = styled.span<SpanProps>`
  font-size: ${(props) => props.size ?? 9}px;
  font-weight: ${(props) => props.weight ?? 300};
  line-height: ${(props) => props.line ?? 30}px;
  color: ${(props) => props.color ?? white};
`;
