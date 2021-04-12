import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from "react-router-dom";

import {
    getAllProductsRoute,
    deleteProductByIdRoute,
} from '../../Api/rotas';
import './style.css';

export default function ProductListing() {
    const history = useHistory();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts()
    }, []);

    useEffect(() => {
        getProducts()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ProductListing]);

    async function getProducts() {
        await getAllProductsRoute()
            .then(res => setProducts(res.data))
            .catch(err => console.log(err))
    };

    async function deleteProduct(id) {
        await deleteProductByIdRoute(id)
            .then(() => getProducts())
            .catch(err => console.log(err))
    }

    function handleAddCategoryPage() {
        history.push('/adicionar-produto');
    }

    function handleEditProductPage(id) {
        history.push({ pathname: '/editar-produto', state: id });
    }

    return (
        <div className="content">
            <header>
                <div className="header-content">
                    <div className="image-logo">
                        <img src="https://bahiaeconomica.com.br/wp/wp-content/uploads/2020/02/icone_estoque-1.png" alt="logo" />
                    </div>
                    <div>
                        <h1>Produtos no estoque</h1>
                    </div>
                    <button
                        className="add-buton"
                        onClick={() => handleAddCategoryPage()}>
                        <h4>
                            Adicionar Produto
                        </h4>
                    </button>
                </div>
            </header>

            <div className="list-content">
                <div>
                    <table>
                        <thead>
                            <tr className="title">
                                <th>Produto</th>
                                <th>Quantidade</th>
                                <th>Valor unitário</th>
                                <th className="actions">Ações</th>
                            </tr>
                        </thead>
                        {products.length === 0 || products === undefined ?
                            (
                                <div className="no-data-product">
                                    Nenhum produto cadastrado
                                </div>
                            ) : (
                                <tbody>
                                    {products.map(item => (
                                        <tr key={item.id}>
                                            <td>{item.name}</td>
                                            <td>{item.quantity}</td>
                                            <td>R${item.unit_value}</td>
                                            <td className="actions">
                                                <button
                                                    onClick={() => deleteProduct(item.id)}
                                                >
                                                    <FontAwesomeIcon style={{ color: "#a71f1f" }} icon={faTrash} />
                                                </button>
                                                <button
                                                    onClick={() => handleEditProductPage(item.id)}
                                                >
                                                    <FontAwesomeIcon style={{ color: "#146b4a" }} icon={faEdit} />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            )}
                    </table>
                </div>
            </div>
        </div>
    );
};