import React, { useState, useEffect } from 'react';
import { Button, Text, View } from 'react-native';
import { useRouter } from 'react';
import { peticionCarta } from '../selectorCartasParaPaquete/funcionesDeSelector';


const prodDetail = () => {
    const { id } = useLocalSearchParams();
    const router = useRouter();
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);


    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const respuesta = await fetch(`https://api.pokemontcg.io/v2/cards/`);
                const data = await respuesta.json();
                setProduct(data);
            } catch (err) {
                console.error('Error al obtener detalles del paquete', err);
            }

        };
        fetchProduct();
    }, [id]);

    if(!product) {
        return (<Text>Cargando...</Text>);
    }

        return (
            <View style={styles.container}>
                <Image 
                    style={styles.image}
                    resizeMode='contain'
                    source={{uri: image}}
                />
                <Text style={styles.title}>{product.id}</Text>
                <Text style={styles.name}>{product.name}</Text>
                <Text style={styles.description}>{product.types}</Text>
                <Text style={styles.description}>{product.rarity}</Text>
                <View style={styles.counterContainer}>
                    <Button title="-" onPress={ () => setQuantity(Math.max(1, quantity - 1))}/>
                    <Text style={styles.quantity}>{quantity}</Text>
                    <Button title="+" onPress={ () => setQuantity(quantity + 1)}/>
                </View>
                <Button title="Agregar al carrito"/>
                <Button title="Remover del carrito"/>
            </View>
        );




        const styles = StyleSheet.create({
            image: {
                width: '100%',
                height: 200,
                marginBottom: 10
            },
            title: {
                fontSize: 18,
                fontWeight: 'bold'
            },
            price: {
                fontSize: 16,
                color: 'green',
                marginBottom: 5
            },
            card: {
                borderWidth: 1,
                borderColor: '#ddd',
                borderRadius: 5,
                padding: 10,
                marginBottom: 10,
                backgroundColor: '#fff',
                width: '80%',
                height: 300
            }
        });
    
    }

    export default prodDetail;
