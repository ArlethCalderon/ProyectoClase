import React from "react";
import Botones from './componentes/Botones'
import Tabla from './componentes/Tabla'
import Lista from './componentes/Lista'
import ListaO from "./componentes/ListaO";
import { useState } from "react";
import Usuario from "./componentes/Usuario"

const App = () => {

    //let noc = ['Hola', 'yo', 'soy','Arleth']
    //let pos = noc[0] 
    //let pos1 = noc[1]

   //let [pos, pos2, pos3, pos4] = noc
    //let final = `${pos2} ${pos3} ${pos4}`
    //console.log(pos)
    //console.log(final)

    const [contador, setContador] = useState(0);
    const handleSuma =(e) => {e.preventDefault();
    setContador(contador + 1)}

    
    const handleResta =(e) => {e.preventDefault();
        if(contador>0)
    setContador(contador - 1)}


    const handleReiniciar =(e) => {e.preventDefault();
    setContador(0)}

    const handleModificar = (e) => {e.preventDefault();
        setModificar()}
        


    const noc2 = {
            nombre: "Arleth",
            apellido: "Calderon",
            correo: "arleth78@gmail.com",
            celular: "6442343360",

            direcciones: {
                pais: "Mexico",
                estado: "Sonora",
                colonia: "Mar de cortez"
            }
            
    }
        //let {direcciones:{pais,estado}} = noc2
        //console.log(pais)
        //console.log(estado)
        
        let {nombre} = noc2
        console.log(nombre)
   



    console.log(noc2)
    console.log(noc2.nombre)
    console.log(noc2.celular)
    //console.log(noc2.direcciones.pais)

    return (
    <div>

       <Lista nombres= {nombre}/> 

        <ListaO/>
        

        <Botones contador ={contador} clic= {handleSuma} nombre ="Sumar + 1"/>
        <Botones contador ={contador} clic= {handleResta} nombre = "Restar - 1"/>
        <Botones contador ={contador} clic= {handleReiniciar} nombre = "Reiniciar"/>

        

        <br/>
        <Tabla datos = {noc2}/>

        <h3>{noc2.nombre}</h3>
        <h3>{noc2.celular}</h3>
        <h3>{noc2.direcciones.pais}</h3>

        <Usuario clic = {handleModificar} nombre = "Modificar" />


        
    </div>

    )}

    export default App;