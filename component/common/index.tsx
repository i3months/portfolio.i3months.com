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
  text-decoration-color: rgba(0, 0, 0, 1);
  text-decoration-thickness: 1px;
  font-weight: normal;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #2997fb;
    text-decoration: underline;
    text-decoration-color: #2997fb;
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
