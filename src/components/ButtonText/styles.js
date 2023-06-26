import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.Colors.Light_100} ;
`;