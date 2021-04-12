import React, { useEffect } from 'react';
import { Route, useHistory } from "react-router-dom";

import ProductListing from './ProductListing';
import AddProduct from './AddProduct';
import EditProduct from './EditProduct';

export default function StockRoutes() {
    const history = useHistory();

    useEffect(() => {
        history.push("/produtos");
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <Route exact path="/produtos" component={ProductListing} />
            <Route path="/adicionar-produto" component={AddProduct} />
            <Route path="/editar-produto" component={EditProduct} />
        </>
    );
};