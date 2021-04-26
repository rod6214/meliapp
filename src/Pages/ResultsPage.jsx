import React from 'react-dom';
import { useEffect, useState } from 'react';
import Section from '../Components/Containers/Section'
import Page from '../Components/Containers/Page';
import Content from '../Components/Containers/Content';
import Card from '../Components/Containers/Card';
import Navigator from '../Components/Navs/Navigator';
import { useService } from '../CustomHooks/useService';
import { useQuery } from '../CustomHooks/useQuery';

import tagLinksMock from '../mocks/tagLinks.json'

const ResultsPage = () => {
    const [searchResult, setSearchResult] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const { search } = useService().meliData;
    const query = useQuery().get('search');

    useEffect(() => {
        try {
            const fetchProducts = async () => {
                const matchedItems = await search(query, 4);
                setSearchResult(matchedItems);
                setLoaded(true);
            }
            fetchProducts();
        } catch (error) {
            console.error(error);
        }
    }, [search, query]);

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

                        return (<Card key={`card${index}`} thumbnail={item.thumbnail}
                        price={item.price}
                        title={item.title}
                        link={item.link}
                        state_name={item.state_name} free_shipping divider/>)
                    })}
                </Content>
            </Section>
        </Page>
    )
}

export default ResultsPage;
