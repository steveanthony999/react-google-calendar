import styled from 'styled-components';
import { motion } from 'framer-motion';

const Main = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled(motion.button)`
  width: 260px;
  height: 100px;
  background: white;
  font-size: 2rem;
  border: 1px solid black;
  border-radius: 35px;

  &:focus {
    outline: none;
  }

  &:hover {
    cursor: pointer;
  }
`;

const handleClick = (e) => {
  console.log('clicked');
};

function App() {
  return (
    <Main>
      <Button animate={{ y: -3 }} transition={{ duration: 0.52, repeat: Infinity }} onClick={handleClick}>
        Calendar
      </Button>
    </Main>
  );
}

export default App;
