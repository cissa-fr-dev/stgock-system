import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import "./style.css";

export default function Modal(props) {
    const {
        handleToggleModal,
        isOpen,
        categories,
        deleteCategory,
        createCategory,
        newCategory,
        setNewCategory,
    } = props;

    return (
        <>
            {isOpen && (
                <div className="container">
                    <div className="modal-content">
                        <button className="close-button" onClick={handleToggleModal}>X</button>
                        <div className="modal-title">
                            <h2>Adicionar Categoria</h2>
                        </div>
                        <div className="row">
                            <div className="category-name">
                                <span>Categoria</span>
                                <input
                                    type="name"
                                    name="name"
                                    onChange={(e) => {
                                        if (e) {
                                            setNewCategory(e.target.value);
                                        }
                                    }}
                                    value={newCategory}
                                    placeholder="Digite o nome da categoria"
                                />
                            </div>
                        </div>
                        <div className="category-list">
                            <p>Categorias já cadastradas</p>
                            <div className="list">{
                                <>
                                    <div className="list-title">
                                        <p>Nome</p>
                                        <p>Ação</p>
                                    </div>
                                    {categories.length === 0 || categories === undefined ? (
                                        <div className="no-data-category">Nenhuma categoria cadastrada</div>
                                    ) : (categories.map(item => (
                                        <div key={item.id} className="item-list">
                                            {item.name}
                                            <button
                                                className="trash-button"
                                                onClick={() => deleteCategory(item.id)}
                                            >
                                                <FontAwesomeIcon icon={faTrash} />
                                            </button>
                                        </div>
                                    )))}
                                </>
                            }
                            </div>
                        </div>
                        <div className="buttons-container">
                            <button className="cancel-category"
                                onClick={handleToggleModal}
                            >
                                Cancelar
                            </button>
                            <button
                                type="submit"
                                className="save-category"
                                onClick={() => {
                                    createCategory(newCategory)
                                        .then(handleToggleModal)
                                }}
                            >
                                Salvar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}