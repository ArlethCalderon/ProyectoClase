import Botones from "./Botones"


const TablaB = ({noc2}) => {
    const {nombre, apellido, correo, celular} = noc2
    console.log(nombre)
    return (
        <div>
            
           <table>
             <tbody>
                <tr>
                    <td>{nombre}</td>
                    <td>{apellido}</td>
                    <td>{correo}</td>
                    <td>{celular}</td>
                    <td><Botones nombre = "Actualizar"/></td>
                    <td><Botones nombre = "Eliminar"/></td>
                </tr>
            </tbody>
            </table>
            <img src={require("../componentes/imagenes/remy.jfif")} className='d-block w-100' alt="remy"/>

        </div>
        
    )
}

export default TablaB;