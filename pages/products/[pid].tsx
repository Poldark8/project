import React, {useEffect} from 'react';
import {HandleProducts} from "../../adapter/HandleProducts";
import {IProducts} from "../../interfaces/IProducts";
import Layout from "../../components/Layout/Layout";
import Image from "next/image";
import Card from "../../components/Card/Card";
import Text from "../../components/UI/Text/Text";
import Rate from "../../components/UI/Rate/Rate";
import Bullet from "../../components/UI/Bullet/Bullet";
import Button from "../../components/UI/Button/Button";
import {ReactSVG} from "react-svg";

const Product: React.FC<IProducts> = (props) => {
    const {products} = props;
    return (
        <Layout metaData={{title: products.title, description: products.description}}>
            <div className='h-screen flex mx-10 justify-center items-center xsm:mx-0'>
                <Card className='flex max-w-200 xsm:flex-col xsm:min-h-screen'>
                    <div className='w-60 bg-gradient-to-b from-lightGreen to-darkGreen rounded-l-lg relative
                      xsm:w-full xsm:h-60 xsm:rounded-none '>
                        <div className='flex items-center h-full -ml-4  xsm:hidden'>
                            <Image className='shadow-primaryShadow' src={products.image} width={150} height={200}/>
                        </div>
                        <div className='flex items-center h-full -ml-4 justify-center  xsmGrater:hidden'>
                            <Image className='shadow-primaryShadow' src={products.image} width={80} height={80}/>
                        </div>

                        <div className='flex justify-center w-full absolute bottom-4 gap-1.5'>
                            <Bullet isActive/>
                            <Bullet/>
                            <Bullet/>
                            <Bullet/>
                        </div>
                    </div>
                    <div className='flex-1 py-16 px-8'>
                        <div className='flex justify-between items-center'>
                            <Text className='flex-1' variant='h1'>
                                {products.title}
                            </Text>
                            <Rate className='w-24 md:hidden' value={products.rating.rate} readonly/>
                        </div>
                        <div className='flex justify-between mt-5'>
                            <span className='text-xl text-text font-bold md:text-lg'>${products.price}</span>
                            <Rate className='mdGrater:hidden w-24' value={products.rating.rate} readonly/>
                        </div>

                        <div className='my-8'>
                            <span className='font-bold text-text'>Description</span>
                            <Text className='mt-4'>
                                {products.description}
                            </Text>
                        </div>
                        <div className='flex justify-between items-center'>
                            <Button helperIconName='shopping-cart' label='ADD TO CART'/>
                            <ReactSVG src='/icons/share.svg' className='cursor-pointer'/>
                        </div>
                    </div>
                </Card>
            </div>
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