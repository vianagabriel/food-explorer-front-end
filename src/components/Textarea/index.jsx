import { Container } from "./styles";

export function Textarea({ desc, ...rest}){
    return(
      <Container {...rest}>
        {desc}
      </Container>
    );
}