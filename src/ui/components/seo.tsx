import Head from "next/head";

interface Props {
    title: string;
    description: string;
}

export const Seo = ({title,description}: Props) => {
    return(
        <Head>
            <title>Dragon</title>
            <meta 
                name="description"
                content="Description..."
            />
            <meta
                name="viewport"
                content="width-device-width, initial-scal=1"
            />
            <link rel="icon" href="/favicon.ico"/>
        </Head>
    );
};