import React, { useState, useEffect } from "react";
import "./styles.css";
import axios from "axios";

const ModalFuncionarios = ({
    isOpen,
    onClose,
    funcionarioSelecionado,
}) => {
    if (!isOpen) return null;

    const [id, setId] = useState(funcionarioSelecionado?.id || "");
    const [sn, setSn] = useState(funcionarioSelecionado?.sn || "")
    const [funcionario, setFuncionario] = useState(funcionarioSelecionado?.funcionario || "")
    const [email, setEmail] = useState(funcionarioSelecionado?.email || "")
    const [telefone, setTelefone] = useState(funcionarioSelecionado?.telefone || "")
    const [gestor, setGestor] = useState(funcionarioSelecionado?.gestor || "")
    const [gestores, setGestores] = useState([]);
    const [selecionado, setSelecionado] = useState('');

    useEffect(() => {
        if (funcionarioSelecionado) {
            setId(funcionarioSelecionado.id)
            setSn(funcionarioSelecionado.sn)
            setFuncionario(funcionarioSelecionado.funcionario)
            setEmail(funcionarioSelecionado.email)
            setTelefone(funcionarioSelecionado.telefone)
            setGestor(funcionarioSelecionado.gestor)
        } else {
            setSn("")
            setFuncionario("")
            setEmail("")
            setTelefone("")
            setGestor("")
        }

        const buscarGestores = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/gestores');
                setGestores(response.data);
            } catch (error) {
                console.error("Erro ao buscar gestores:", error);
            }
        };

        buscarGestores();

    }, [funcionarioSelecionado]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const novoProfessor = { ni, nome, email, cel, ocup };
        if (funcionarioSelecionado) {
            atualizar({ ...funcionarioSelecionado, ...novoProfessor });
        } else {
            criar(novoProfessor);
        }
    };

    const cadastrarFuncionario = async () => {
        try {
            await axios.post('http://127.0.0.1:8000/api/funcionarios',
                {
                    sn: sn,
                    funcionario: funcionario,
                    email: email,
                    telefone: telefone,
                    gestor: gestor
                }
            )
            console.log("Funcionário cadastrado com sucesso!");
        } catch (error) {
            console.log(error);

        }
    }




    return (
        <div className="modal-overlay">
            <div className="modal-container">
                <button className="close-button" onClick={onClose}>X</button>
                <h2>{funcionarioSelecionado ? "Editar Professor" : "Cadastrar Professor"}</h2>
                <div className="body_modal">
                    <div className="caixa1">
                        <form onSubmit={handleSubmit}>
                            <input
                                className="sn_modal"
                                value={sn}
                                onChange={(e) => setSn(e.target.value)}
                                placeholder="sn"
                            />
                            <input
                                className="funcionario_modal"
                                value={funcionario}
                                onChange={(e) => setFuncionario(e.target.value)}
                                placeholder="funcionario"
                            />
                            <input
                                className="email_modal"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email"
                            />
                            <input
                                className="telefone_modal"
                                value={telefone}
                                onChange={(e) => setTelefone(e.target.value)}
                                placeholder="Telefone"
                            />
                            <input
                                className="gestor_modal"
                                value={gestor}
                                onChange={(e) => setGestor(e.target.value)}
                                placeholder="gestor"
                            />

                            <select value={selecionado} onChange={(event) => { setSelecionado(event.target.value) }}>
                                <option value="">-- Escolha um gestor --</option>
                                {gestores.map((gestor) => (
                                    <option key={gestor.id} value={gestor.id}>
                                        {gestor.gestor}
                                    </option>
                                ))}
                            </select>

                            {selecionado && (
                                <p>Gestor selecionado: <strong>{gestores.find(g => g.id == selecionado)?.gestor}</strong></p>
                            )}
                            <button type="submit">{funcionarioSelecionado ? "Atualizar" : "Salvar"}</button>
                        </form>
                    </div>
                    <div className="caixa2">
                        <div className="image">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalFuncionarios;
