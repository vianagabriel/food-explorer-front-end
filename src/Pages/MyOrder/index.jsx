import { Container, Main, MyOrder, Payment } from "./styles";
import { Header } from "../../components/Header";
import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/auth";
import { DiamondsFour, CreditCard, Receipt } from '@phosphor-icons/react';
import qrcode from '../../assets/qrCode.svg'
import approved from '../../assets/approved.png'
import { Button } from "../../components/Button";

export function MyOrders() {
  const { user } = useAuth();
  const userId = user ? user.id : null;

  const [orders, setOrders] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedPayment, setSelectedPayment] = useState('pix');
  const [requestFinished, setRequestFinisehd ] = useState(false);

  function handleRemovePlateOnCart(id) {
    localStorage.removeItem(`plateOnCart_${userId}_${id}`);
    fetchCartItems();
  }

  const fetchCartItems = () => {
    const cartItems = [];
    let totalAmount = 0;
  
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.startsWith("plateOnCart_")) {
        const orderString = localStorage.getItem(key);
        const order = JSON.parse(orderString);
        cartItems.push(order.orders[0]);
  
        const quantity = Number(order.orders[0].quantity);
        const price = parseFloat(order.orders[0].price.replace("R$", "").trim());
        if (!isNaN(price)) {
          totalAmount += quantity * price;
        }
      }
    }
  
    setOrders(cartItems);
    setTotalPrice(totalAmount);
  };

  function handlePaymentSelection(paymentType){
    setSelectedPayment(paymentType)
  }

  function finished (){
    setRequestFinisehd(true);
    localStorage.removeItem(`plateOnCart_${userId}`);
    fetchCartItems()
  }
  
  useEffect(() => {
    localStorage.removeItem(`plateOnCart_${userId}`);
    fetchCartItems();
  }, []);

  return (
    <Container>
      <Header />
      {
        orders.length > 0 ? 
          <Main>
          <MyOrder>
            <h2>Meu Pedido</h2>
  
            {orders.map((order, index) => {
              return (
                <div key={index} className="order">
                  <img src={order.image} alt="" />
  
                  <div className="plateOrder">
                    <div className="plateDetails">
                      <span>{`${order.quantity} x`}</span>
                      <p>{order.title}</p>
                      <span className="price">R$ {order.price}</span>
                    </div>
  
                    <div className="remove">
                      <span
                        className="remove"
                        onClick={() => handleRemovePlateOnCart(order.plate_id)}
                      >
                        Excluir
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
  
            <p> {orders.length > 0 ? `Total: R$ ${totalPrice}`: 'Carrinho vazio!'}</p>
          </MyOrder>
  
          <Payment>
            
            <header>
            <button
                className={selectedPayment === "pix" ? "select" : ""}
                onClick={() => handlePaymentSelection("pix")}
              >
                <DiamondsFour size={20} /> Pix
              </button>
              <button
                className={selectedPayment === "creditCard" ? "select" : ""}
                onClick={() => handlePaymentSelection("creditCard")}
              >
                <CreditCard size={20} /> Cartão de crédito
              </button>
  
            </header>
  
            
            {
              selectedPayment == 'pix' && !requestFinished &&(
                 <div className="pix">
                    <img src={qrcode} alt="" />
                 </div>
                 )
            } 
            
  
            {
              selectedPayment === 'creditCard' && !requestFinished && (
  
              
              <div className="creditCard">
                <div className="numberCard">
                  <label htmlFor="">Número do cartão</label>
                   <input type="text" placeholder="0000 0000 0000 0000" />
                </div>
  
                <div className="validAndCvc">
                  <div className="valid">
                    <label htmlFor="">Validade</label>
                    <input type="text" placeholder="04/25" />
                  </div>
  
                  <div className="cvc">
                    <label htmlFor="">cvc</label>
                    <input type="text" placeholder="000" />
                  </div>
                </div>
  
                <Button title='Finalizar o pagamento' icon={Receipt} onClick={finished}/>
              </div>
  
           )
            }
  
           
  
    {
            requestFinished &&
             <main>
  
               <img src={approved} alt="" />
             </main>
           }
  
  
            
           
          </Payment>
        </Main>
        :
        <h1>Carrinho Vazio!!</h1>
      }
     
    </Container>
  );
}
