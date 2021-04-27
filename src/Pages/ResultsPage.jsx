import React from 'react-dom';
import { useEffect, useState } from 'react';
import Section from '../Components/Containers/Section'
import Page from '../Components/Containers/Page';
import Content from '../Components/Containers/Content';
import Card from '../Components/Containers/Card';
import Navigator from '../Components/Navs/Navigator';
import { useService, useSearch } from '../CustomHooks/useService';
import { useQuery } from '../CustomHooks/useQuery';

import tagLinksMock from '../mocks/tagLinks.json'

const ResultsPage = () => {
    // const [searchResult, setSearchResult] = useState([]);
    const [searchResult, loaded, searchProducts] = useSearch(4);
    // const [loaded, setLoaded] = useState(false);
    // const { search } = useService().meliData;
    const query = useQuery().get('search');

    useEffect(() => {
        searchProducts(query);
        
        console.log(searchResult)
        // try {
        //     const fetchProducts = async () => {
        //         const matchedItems = await search(query, 4);
        //         setSearchResult(matchedItems);
        //         setLoaded(true);
        //         console.log('r')
        //         console.log(matchedItems)
        //     }
        //     fetchProducts();
        // } catch (error) {
        //     console.error(error);
        // }
    }, [query, loaded]);

    if (!loaded) return (<></>);

    return (
        <Page>
            <Section rounded={4}>
                <Content width={75} maxWidth="1100px">
                    <Navigator tag="resultNav" links={tagLinksMock}/>
                </Content>
            </Section>
            <Section>
                <Content rounded={4} width={75} maxWidth="1100px" backgroundColor='white'>
                    {searchResult.map((item, index) => {
                        
                        const hasDivider = (index < searchResult.length - 1);

                        return (<Card key={`card${index}`} {...item} divider={hasDivider}/>)
                    })}
                </Content>
            </Section>
        </Page>
    )
}

export default ResultsPage;
