import React from 'react';
import {ILayout} from "../../interfaces/ILayout";
import Head from "next/head";

const Layout: React.FC<ILayout> = props => {
    const {metaData} = props;
    return (
        <Head>
            <meta charSet='utf-8'/>
            <meta
                name='viewport'
                content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no '
            />

            <title>{metaData.title}{metaData.title}</title>
            <meta name='description' content={metaData.description}/>

        </Head>
    );
};

export default Layout;