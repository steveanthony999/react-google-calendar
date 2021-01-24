import styled from 'styled-components';
import { useEffect } from 'react';

const Main = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  useEffect(() => {
    console.log(process.env.REACT_APP_GOOGLE_CLIENT_SECRET);
  }, []);

  return (
    <Main>
      <h1>hello world</h1>
    </Main>
  );
}

export default App;
