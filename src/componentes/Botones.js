

const Botones = ({nombre, contador, clic, }) => {
    
    return (
        <div>
            <p>Cantidad de Clic: {contador}</p>
            <button onClick={clic}>{nombre}</button>
        </div>

    )
}

export default Botones;