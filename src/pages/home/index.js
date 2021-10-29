import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { useHistory, Link } from 'react-router-dom';
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
                console.log(data)
                setBairro(data.bairro)
                setLocalidade(data.localidade);
                setUf(data.uf);
                console.log(bairro, localidade, uf)
            });
    }

    const history = useHistory();
    const handleRequest = (string) => {
        history.push({
            pathname: `/plan`,
            state: {
                bairro: string,
                localidade: string,
                uf: string
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
                        <Link to="/plan">
                            <button type="submit" onClick={() => handleRequest("Dado a ser enviado")}><FiSearch size={25} /></button>
                        </Link>
                    </div>
                </form>
            </section>
        </div>
    );

}
