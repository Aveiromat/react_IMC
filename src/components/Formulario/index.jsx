import { useState } from "react"

const Formulario = () => {
    let [materiaA, setMateriaA] = useState(0);
    let [materiaB, setMateriaB] = useState(0);
    let [materiaC, setMateriaC] = useState(0);


    return (
        <form>
            <input type="number" placeholder="Nota Matéria A" onChange={evento => console.log(evento.target.value)} />
            <input type="number" placeholder="Nota Matéria B" />
            <input type="number" placeholder="Nota Matéria C" />
            <p>O aluno foi aprovado</p>
        </form>
    )
}

export default Formulario