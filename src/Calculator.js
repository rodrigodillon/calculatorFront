import React from 'react';
import axios from "axios";
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content:center;
  height: auto;
  margin: 5px;
`;

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content:center;
  flex-direction: column;
  height: 100vh;
`

const Field1 = styled.input`
  width: 100px;
  height: 20px;
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`

const Field2 = styled.input`
  width: 100px;
  height: 20px;
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`

const Text = styled.text`
  font-size: 14px;
  margin-right:10px;
`

const Button = styled.button`
  width: auto;
  padding: 5px 5px;
  margin: 5px;
`


function Calculadora() {
  const baseURL = 'http://localhost:8080/calculator'
  const [value, setValue] = React.useState({
    number1:0,
    number2:0,
  });

  const [result, setResult] = React.useState({
    result:0
  })

  function post(typeCalculator) {
    axios
      .post(baseURL, {...value,typeCalculator})
        .then((response) => {
          setResult({result:response.data.result})
      });
  }
  
  return (
    <Section>
      <Container>
        <Text>Campo A</Text>
        <Field1 type ='number' onChange={e => {
          setValue({...value,number1: e.target.value})}}/>
      </Container>
      <Container>
        <Text>Campo B</Text>
        <Field2 type='number' onChange={e => setValue({...value,number2: e.target.value})}/>
      </Container>
      <Container>
        <Text>O resultado é {result.result}</Text>
      </Container>
      <Container>
        <Button onClick={e => post(1)}>Somar</Button>
        <Button onClick={e => post(2)}>Subtrair</Button>
      </Container>
    </Section>
    
  );
}

export default Calculadora;
