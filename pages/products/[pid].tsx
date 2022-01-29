import React, {useEffect} from 'react';
import {HandleProducts} from "../../adapter/HandleProducts";
import {IProducts} from "../../interfaces/IProducts";
import Layout from "../../components/Layout/Layout";

const Product: React.FC<IProducts> = (props) => {
    const {products} = props;
    console.log(products)
    return (
        <Layout metaData={{title: products.title, description: products.description}}>
        </Layout>
    );
}

export const getServerSideProps = async (context: any) => {
    const pid = context.params.pid;
    const productInstance = new HandleProducts();
    const productsResult = await productInstance.getProduct(pid);

    if (!productsResult) {
        return {
            redirect: {
                destination: '/'
            }
        }
    }
    const products = productsResult.data;
    return {
        props: {
            products
        }
    }
}


export default Product;