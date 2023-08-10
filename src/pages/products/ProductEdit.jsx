// ProductEdit.js
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from 'yup';
import Header from "../../components/Dashboard/Layout/Header/Header";
import Product from "../../model/Product";
// import { ProductActions } from "../../redux/product-slice";
import ProductForm from "../../components/Dashboard/Product/ProductForm";
import Alert from "../../components/Dashboard/alert/alert";
import { useState } from "react";
import { updateProduct } from "../../redux/product-slice";

const ProductEdit = () => {
    const Prdct = useSelector((state) => state.product.data);
    const { name } = useParams();
    const ProductNow = Prdct.find((item) => item.name === name);
    const [successMessages, setSuccessMessages] = useState([]);

    const dispatch = useDispatch();
    const Navigator = useNavigate();

    const onUpdateProductHandler = (values) => {
        if (!ProductNow) {
            console.error("Product not found!");
            return;
        }

        // const UpdateProduct = new Product(
        //     ProductNow.id,
        //     values.name,
        //     values.description,
        //     values.shortdescription,
        //     values.price,
        //     values.category,
        //     values.image,
        // );

        const UpdateProduct = {
            id: ProductNow.id,
            name: values.name,
            description: values.description,
            shortdescription: values.shortdescription,
            price: values.price,
            category: values.category,
            image: values.image,
        };
        dispatch(updateProduct({ UpdateToProduct: UpdateProduct }));

        setSuccessMessages((prevMessages) => [...prevMessages, "Product Updated Successfully"]);
        setTimeout(() => {
            Navigator("/dashboard/products");
        }, 1000);
    };

    const initialValues = {
        name: ProductNow?.name || '', // Use optional chaining to provide a default value if ProductNow is undefined
        description: ProductNow?.description || '',
        shortdescription: ProductNow?.shortdescription || '',
        price: ProductNow?.price || '',
        category: ProductNow?.category || '',
        image: ProductNow?.image || null,
    };

    function checkIfNameExists(name) {
        return Prdct.some((Prdct) => Prdct.name === name);
    }
    const validationSchema = Yup.object().shape({

        name: Yup.string()
            .required('Name is required')
            .test('unique-name', 'The name already exists', function (value) {
                return !checkIfNameExists(value);
            }),

        description: Yup.string().required('Description is required'),
        shortdescription: Yup.string().required('Short description is required'),
        price: Yup.string().required('Price is required'),
        category: Yup.string().required('Category is required'),
    });

    return (
        <>
            <Header headerName="Product Edit" prevText="Product / " />
            <Alert successMessages={successMessages} setSuccessMessages={setSuccessMessages} background="green" />

            <ProductForm
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onUpdateProductHandler}
            />
        </>
    );
};

export default ProductEdit;
