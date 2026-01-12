import { Row, Col } from 'reactstrap';
import { PropsWithChildren } from 'react';
import styled from 'styled-components';

export function EmptyRowCol<T = {}>({ children }: PropsWithChildren<T>) {
  return (
    <Row>
      <Col>{children}</Col>
    </Row>
  );
}

const StyledLink = styled.a`
  color: inherit;
  text-decoration: underline;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #2997fb;
    text-decoration: underline;
    text-decoration-thickness: 2px;
  }
`;

export function HrefTargetBlank({ url, text }: PropsWithChildren<{ url: string; text?: string }>) {
  return (
    <StyledLink href={url} target="_blank" rel="noreferrer noopener">
      {text || url}
    </StyledLink>
  );
}
