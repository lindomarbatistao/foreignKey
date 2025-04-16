import React, {useState, useEffect} from "react";
import axios from 'axios'

export default function Cadastro(){

    const [dados, setDados] = useState([])

    useEffect(()=>{
        const capturar = async()=>{
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/funcionarios')
                setDados(response.data)
            } catch (error) {
                console.error(error)
            }
        }
        capturar()
    },[dados])


    return(
        <div className="container_c">
            <h2>Lista de Funcionários</h2>
            <ul>
                {dados.map((item) => (
                    <li key={item.id}>
                        {item.funcionario} - {item.email} - {item.telefone}
                    </li>
                ))}
            </ul>
        </div>
    )
}