import React, { useState, useEffect } from "react";
import ModalFuncionarios from "../../modals/cadastro";
import { FaPlus } from 'react-icons/fa';
import axios from 'axios'
import './styles.css'

export default function Cadastro() {
    const [dados, setDados] = useState([])
    const [modalOpen, setModalOpen] = useState(false)
    const [funcionarioSelecionado, setFuncionarioSelecionado] = useState([])

    useEffect(() => {

        const buscarFuncionarios = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/funcionarios')
                setDados(response.data)
            } catch (error) {
                console.error("Erro ao buscar funcionários:", error);
            }
        }

        
        buscarFuncionarios()
    }, [])



    return (
        <div className="container_s">
            <div className="title_s">
              <h2>Lista de Funcionários</h2> 
              <FaPlus className="btn_add" onClick={()=>setModalOpen(true)}/> 
            </div>
            

            <div className="bloco_s">
                <ul>
                    {dados.map((item) => (
                        <li key={item.id}>
                            {console.log(item)}
                            {item.funcionario} - {item.email} - {item.telefone} - {item.gestor.id}
                        </li>
                    ))}
                </ul>

                
            </div>
            <ModalFuncionarios
                    isOpen={modalOpen}
                    onClose={() => setModalOpen(false)}
                    funcionarioSelecionado={funcionarioSelecionado}
                />
        </div>
    )
}