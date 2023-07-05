import { Form, Main } from './styles';
import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { CaretLeft, UploadSimple } from '@phosphor-icons/react';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { Button } from '../../components/Button';
import { Footer } from '../../components/Footer';
import { NoteItem } from '../../components/NoteItem';
import { useState } from 'react';


import { api } from '../../services/api';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';


export function Edit() {
    const navigate = useNavigate();

    const [ingredients, setIngredients] = useState([]);
    const [newIngredient, setNewIngredient] = useState("");

    function handleAddIngredient() {
        if (newIngredient.length < 3) {
            return alert("Erro: Você está tentando inserir um nome de ingrediente inválido!");
        } else {
            setIngredients(prevState => [...prevState, newIngredient]);
            setNewIngredient("");
        }
    }

    function handleRemoveIngredient(deleted) {
        setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted));
    }

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [image, setImage] = useState(null);
    const params = useParams();

   

    async function handleNewPlate() {


        const fileUpload = new FormData();
      

        if (newIngredient.length > 0) {
            return alert('Você deixou um ingrediente pedente no campo para adicionar.')
        }

        try {
            const response = await api.put(`/plates/${params.id}`, {
                title,
                price,
                ingredients,
                description,
                category
            })

            fileUpload.append("image", image)

            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            };

            await api.patch(`/plates/image/${params.id}`, fileUpload, config)

            alert("Prato Atualizado com sucesso!");
            navigate("/");

        } catch (error) {
            navigate('/')
        }
    }
    useEffect(() => {
        async function fetchPlates(){
          const response = await api.get(`/plates/${params.id}`)
          const { title, description, category, price, ingredients, image } = response.data;
          console.log(response)
          

          setTitle(title)
          setCategory(category)
          setPrice(price)
          setDescription(description)
          setImage(image)
          setIngredients(ingredients.map(ingredient => ingredient.name));
        
        }
        
        fetchPlates();
      }, [])
    

    return (
        <>
            <Header />
            <Main>
                <ButtonText to='/' title='Voltar' icon={CaretLeft} />

                <h3>Editar prato</h3>

                <Form >
                    <div className="primaryInputs">
                        <div className="imgPlate">
                            <label htmlFor="">Imagem do prato</label>
                            <label htmlFor="photo" className='input'>
                                <input
                                    type="file"
                                    id='photo'
                                    name='image'
                                    onChange={(e) => setImage(e.target.files[0])}

                                />
                                <Input
                                    isDark
                                    icon={UploadSimple}
                                    iconLarge
                                    readOnly
                                    value='Selecione imagem'
                                />
                            </label>
                        </div>

                        <div className="name">
                            <label htmlFor="">Nome</label>
                            <Input
                                placeholder='Ex: Salada Ceaser'
                                isDark
                                value={title}
                                onChange={e => setTitle(e.target.value)}
                            />
                        </div>

                        <div className="category">
                            <label htmlFor="">Categoria</label>
                            <div className="select">
                                <select
                                    name=""
                                    id=""
                                    value={category}
                                    onChange={e => setCategory(e.target.value)}
                                >
                                    <option value="">Selecione uma opção</option>
                                    <option value="refeições">Refeição</option>
                                    <option value="sobremesas">Sobremesa</option>
                                    <option value="bebidas">Bebidas</option>
                                </select>
                            </div>

                        </div>
                    </div>

                    <div className="secondaryInputs">
                        <div className="ingredients">
                            <label htmlFor="">Ingredientes</label>
                            <div className="containerIngredients">
                                {
                                    ingredients.map((ingredient, index) => (
                                        <NoteItem
                                            key={index}
                                            value={ingredient}
                                            isNew
                                            onClick={() => handleRemoveIngredient(ingredient)}
                                        />
                                    ))


                                }

                                <NoteItem
                                    placeholder='Adicionar'
                                    value={newIngredient}
                                    onChange={e => setNewIngredient(e.target.value)}
                                    onClick={handleAddIngredient}
                                />

                            </div>
                        </div>


                        <div className="price">
                            <label htmlFor="">Preço</label>
                            <Input
                                type='number'
                                placeholder='R$ 00,00'
                                isDark
                                value={price}
                                onChange={e => setPrice(e.target.value)}

                            />
                        </div>
                    </div>

                    <div className="description">
                        <label htmlFor="">Descrição</label>
                        <Textarea
                            placeholder='Fale brevemente sobre o prato, seus ingredientes e composição'
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                        />
                    </div>

                    <Button
                        title='Salvar alterações'
                        onClick={handleNewPlate}
                    />
                </Form>
            </Main>

            <Footer />
        </>

    )
}