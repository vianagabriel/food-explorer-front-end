import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/auth";
import { Container, Main } from './styles';
import { Header } from '../../components/Header';
import { Card } from "../../components/Card";

export function Favorites() {
  const { user } = useAuth();
  const [favoritePlates, setFavoritePlates] = useState([]);

  useEffect(() => {
    // Verifica e obtém os pratos favoritos do usuário do Local Storage
    const userId = user ? user.id : null;
    const favoritePlateKeys = Object.keys(localStorage).filter(
      key => key.startsWith(`favoritePlate_${userId}`)
    );
    const favoritePlates = favoritePlateKeys.map(key => {
      const serializedPlate = localStorage.getItem(key);
      return JSON.parse(serializedPlate);
    });

    setFavoritePlates(favoritePlates);
  }, [user]);

  return (
    <Container>
      <Header />
      <Main>
        {favoritePlates.map(plate => (
          <Card
            key={plate.id}
            title={plate.title}
            description={plate.description}
            price={plate.price}
            imageURL={plate.imageURL}
            amount={plate.amount}
            id={plate.id}
          />
        ))}
      </Main>
    </Container>
  );
}
