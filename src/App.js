import ContentDetail from './templates/ContentDetail';
import styled from 'styled-components';
import GlobalStyles from './GlobalStyles';

const Container = styled.div`
  width:100%;
  height:100%;
  padding:20px;
`;

function App() {
  return (
    <Container>
      <GlobalStyles />
      <ContentDetail />
    </Container>
    
  );
}

export default App;
