
import { useState } from "react"
import { Alert, FlatList,  Text, TextInput, TouchableOpacity, View } from "react-native"
import { Produt } from "../../components/Produt"

import styles from "./styles"

export function Home(){

    const [produts, setProduts] = useState([])
    const [name, setName]  = useState('')  

    function handleProdutAdd(){
        console.log('Adicionando produto')
        setProduts([...produts, name])
        setName('')
        console.log(produts)
    }
   
    function handleProdutRemove(produt){
        Alert.alert("Remover",
        "Remover o produto ?" ,
        [
               {text:"Sim", onPress: () => removeProdut(produt)},
               {text:"Não", style: 'cancel'}
        ]              
        )
    }

    function removeProdut(produt){
          setProduts( prevState => 
            prevState.filter(state => state != produt) )
    }

    return (
       <View style={ styles.container }>
           <Text style={ styles.groupName }>Lista de compras</Text>
           <Text style={ styles.groupDate }>Quinta, 31 de agosto de 2023.</Text>

           <View style={styles.form}>
           <TextInput style={styles.input}
               onChangeText={setName}
               value={name}
           />

            <TouchableOpacity style={styles.button}
               onPress={handleProdutAdd}>
                <Text style={styles.textButton}> ADICIONAR </Text>
            </TouchableOpacity>
            </View>

            <Text style={ styles.groupName }>Produtos </Text>

    {/*
    <ScrollView>
    {
         produts.map(produt => (
             <Produt name={produt} 
                onRemove={handleProdutRemove}/>
         ))
    }
    </ScrollView>
    */}

        <FlatList
            data={produts}
            keyExtractor={produt => produt}
            renderItem={ ({item}) => (
                 <Produt name={item} 
                   key={item}
                   onRemove={() => handleProdutRemove(item)}/>
            )}
            ListEmptyComponent={() =>
            <Text style={styles.listEmpty}> Não existe produtos na sua lista de compras</Text>
            }
        />
         

        </View>
    )
}

