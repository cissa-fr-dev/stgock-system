import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from "react-router-dom";
import { Formik } from 'formik';

import Modal from '../../Components/Modal';
import {
    createProductRoute,
    getAllCategoriesRoute,
    createCategoryRoute,
    deleteCategoryByIdRoute,
} from '../../Api/rotas';
import './style.css';

export default function AddProduct() {
    const history = useHistory();
    const [isOpen, setIsOpen] = useState(false);
    const [newCategory, setNewCategory] = useState("")
    const [categories, setCategories] = useState([]);
    const product = {};

    useEffect(() => {
        getAllCategories();
    }, []);

    async function getAllCategories() {
        await getAllCategoriesRoute()
            .then(res => setCategories(res.data))
            .catch(err => console.log(err));
    };

    async function deleteCategory(id) {
        await deleteCategoryByIdRoute(id)
            .then(() => getAllCategories())
            .catch(err => console.log(err));
    };

    async function createCategory(newCategory) {
        const params = {
            id: uniqueID(),
            name: newCategory,
        };

        await createCategoryRoute(params)
            .then(() => getAllCategories())
            .catch(err => console.log(err));
    };

    async function createProduct(values) {
        const params = {
            id: uniqueID(),
            name: values.name,
            quantity: values.quantity,
            unit_value: values.unit_value,
            category_id: values.category_id
        };

        await createProductRoute(params)
            .then(handleBackToProductsPage())
            .catch(err => console.log(err));
    };

    function uniqueID() {
        return Math.floor(Math.random() * Date.now());
    };

    function handleToggleModal() {
        setIsOpen(!isOpen);
        getAllCategories();
    };

    function handleBackToProductsPage() {
        history.push('/produtos');
    };

    return (
        <div className="content">
            <header>
                <div className="header-content">
                    <div className="image-logo"
                        onClick={handleBackToProductsPage}
                    >
                        <img src="https://bahiaeconomica.com.br/wp/wp-content/uploads/2020/02/icone_estoque-1.png" alt="logo" />
                    </div>
                    <div>
                        <h1>Adicionar novo produto</h1>
                    </div>
                    <button className="add-buton" onClick={handleToggleModal}>
                        <h4>
                            Adicionar Categoria
                        </h4>
                    </button>
                </div>
            </header>
            {isOpen && <Modal
                handleToggleModal={handleToggleModal}
                isOpen={isOpen}
                newCategory={newCategory}
                categories={categories}
                setNewCategory={setNewCategory}
                deleteCategory={deleteCategory}
                createCategory={createCategory}
                getAllCategories={getAllCategories}
            />}

            <Formik
                initialValues={product}
                enableReinitialize
                validate={values => {
                    const errors = {};
                    if (!values.name) {
                        errors.name = 'Required';
                    } if (!values.unit_value) {
                        errors.unit_value = 'Required';
                    } if (!values.category_id) {
                        errors.category_id = 'Required';
                    } if (!values.quantity) {
                        errors.quantity = 'Required';
                    }
                    return errors;
                }}

                onSubmit={(values, { setSubmitting }) => {
                    setSubmitting(createProduct(values))
                }}
            >
                {({
                    values,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                }) => (
                    <>
                        <form className="form-content" onSubmit={handleSubmit}>
                            <button
                                className="back-to-products"
                            >
                                <FontAwesomeIcon
                                    style={{ width: "1rem", height: "2rem" }}
                                    className="arrow"
                                    icon={faChevronLeft}
                                    onClick={handleBackToProductsPage}
                                />
                            </button>
                            <div>
                                <div className="row">
                                    <div className="col">
                                        <span>Categoria</span>
                                        <select
                                            type="category_id"
                                            name="category_id"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            placeholder="Escolha a categoria"
                                        >
                                            <option value="" selected disabled hidden>Escolha uma categoria</option>
                                            {categories && categories.map(item => (
                                                <option
                                                    key={item.id}
                                                    value={item.id}
                                                >
                                                    {item.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="col">
                                        <span>Nome</span>
                                        <input
                                            type="name"
                                            name="name"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.name}
                                            placeholder="Nome do produto"
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <span>Valor unitário</span>
                                        <input
                                            type="unit_value"
                                            name="unit_value"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.unit_value}
                                            placeholder="R$__,__"
                                        />
                                    </div>
                                    <div className="col">
                                        <span>Quantidade</span>
                                        <input
                                            type="quantity"
                                            name="quantity"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.quantity}
                                            placeholder="Digite a quantidade"
                                        />
                                    </div>
                                </div>
                            </div>
                        </form>

                        <div className="save-content">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="save-button"
                                onClick={handleSubmit}
                            >
                                Salvar produto
                                </button>
                        </div>
                    </>
                )}
            </Formik>
        </div>
    )
}