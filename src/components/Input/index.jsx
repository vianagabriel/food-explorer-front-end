import { Container } from "./styles";

export function Input({ icon: Icon, isDark, iconLarge, ...rest }){
    return(
        <Container isDark={isDark} iconLarge={iconLarge}>
           {Icon && <Icon/>}
           <input {...rest}/>            
        </Container>
    )
};