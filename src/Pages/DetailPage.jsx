import React from 'react-dom';
import Section from '../Components/Containers/Section'
import Page from '../Components/Containers/Page';
import Content from '../Components/Containers/Content';

const DetailPage = () => {
    return (
    <Page>
        <Section rounded={4}>
            <Content width={75} maxWidth="1100px">
                <div className="bg-grey-meli pb-7 pt-7 text-grey-dark-meli">
                    <p className="d-inline fs-8">Electronica, Audio y Video</p> &gt; 
                    <p className="d-inline fs-8">iPod</p> &gt; 
                    <p className="d-inline fs-8">Repoductores</p> &gt;
                    <p className="d-inline fs-8">iPod touch</p> &gt; 
                    <p className="d-inline fs-8 fw-bold">32 GB</p>
                </div>
            </Content>
        </Section>
        <Section>
            <Content rounded={4} width={75} maxWidth="1100px" backgroundColor='white'>
                
            </Content>
        </Section>
    </Page>
    )
}

export default DetailPage;
