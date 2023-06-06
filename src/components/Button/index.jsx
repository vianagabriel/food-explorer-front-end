import { Container } from "./styles";

export function Button({ title, loading = false, isLight, ...rest }){
  return(
    <Container
     isLight={isLight}
     type="button"
     disabled={loading}
     {...rest} 
    >
     { loading ? 'Carregando' : title}
    </Container>
  )
};