import styled from 'styled-components';

const Container = styled.div`
    display:flex;
    flex-direction:column;
    width:60vw;
    height:80vh;
    display:flex;
    padding:20px;
    align-self:center;
`;
const UpperSection = styled.section`
    display:grid;
    grid-template-columns: 35rem 15rem;
    width:100%;    
    min-width:300px;
    max-width:800px;
    height:80%;
    min-height:300px;
    background-color:rgb(232, 232, 48);
`;

const LowerSection = styled.section`
    display:flex;
    flex-direction:column;
    width:100%;
    min-width:300px;
    max-width:800px;
    height:20%;
    min-height:100px;
    background-color:rgb(104, 247, 247);
`;
const ImageArticle = styled.article`    
    background-color:rgb(0, 247, 50);
`;
const CreatorArticle = styled.article`
    background-color:rgb(50, 247, 100);
`;
const Rating = styled.span`
    background-color:rgb(0, 50, 50);
    height: 75px;
`;
const Synopsis = styled.p`
    background-color:rgb(50, 100, 100);
    height: 75px;
`;
const ContentDetail = () => {
    return (
        <Container>
            <UpperSection>
                <ImageArticle ></ImageArticle>
                <CreatorArticle></CreatorArticle>
            </UpperSection>
            <LowerSection>
                <Rating></Rating>
                <Synopsis></Synopsis>
            </LowerSection>
        </Container>
    );
}

export default ContentDetail;