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
    const service = useService();
    const query = useQuery();

    useEffect(() => {
        try {
            service.meliData.search(query.get('search'), 4).then(matchedItems => {
                setSearchResult([...matchedItems]);
            });
        } catch (error) {
            console.error(error);
        }
    }, []);

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
                        state_name={item.state_name} free_shipping divider/>)
                    })}
                    {/* <Card thumbnail="http://http2.mlstatic.com/D_955205-MLA44925999950_022021-I.jpg"
                        price="1.980"
                        title="Apple Ipod Touch 5g 16gb Negro Igual A Nuevo Completo Unico!"
                        state_name="Capital Federal" free_shipping divider/>
                    <Card thumbnail="http://http2.mlstatic.com/D_955205-MLA44925999950_022021-I.jpg"
                        price="1.980"
                        title="Apple Ipod Touch 5g 16gb Negro Igual A Nuevo Completo Unico!"
                        state_name="Capital Federal" free_shipping divider/>
                    <Card thumbnail="http://http2.mlstatic.com/D_955205-MLA44925999950_022021-I.jpg"
                        price="1.980"
                        title="Apple Ipod Touch 5g 16gb Negro Igual A Nuevo Completo Unico!"
                        state_name="Capital Federal" free_shipping /> */}
                </Content>
            </Section>
        </Page>
    )
}

export default ResultsPage;
