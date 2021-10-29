import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import line from '../../assets/Line.svg';
import logo from '../../assets/logo-white.svg';
import './styles.css'

export default function Home() {

    const [bairro, setBairro] = useState();
    const [localidade, setLocalidade] = useState();
    const [uf, setUf] = useState();

    const SearchCep = (ev) => {

        const { value } = ev.target;
        const cep = value?.replace(/[^0-9]/g, '');

        if (cep?.length !== 8) {
            return;
        }
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then((res) => res.json())
            .then((data) => {
                
                setBairro(data.bairro)
                setLocalidade(data.localidade);
                setUf(data.uf);
                
            });
    }

    const history = useHistory();
    const handleRequest = (bairro, localidade, uf) => {
        history.push({
            pathname: `/plan`,
            state: {
                bairro: bairro,
                localidade: localidade,
                uf: uf
            },
        });
    }

    return (
        <div className="home-container">
            <img className="logo" src={logo} alt="logo-white" />
            <section className="form">
                <h1 className="h1-home">Olá, que bom ter você aqui!</h1>
            </section>
            <img src={line} alt="line" />
            <section className="form">
                <form>
                    <h2>Vamos encontrar as melhores ofertas</h2>
                    <div className="submit">
                        <input name="CEP" type="text" placeholder="Digite o seu CEP" onBlur={SearchCep} />
                        <button type="submit" onClick={() => handleRequest(bairro, localidade, uf)}><FiSearch size={25} /></button>
                    </div>
                </form>
            </section>
        </div>
    );
}
