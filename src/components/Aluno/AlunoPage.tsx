import React from 'react';
import { Form, Container, Button } from 'react-bootstrap';
import { Aluno } from '../../domain/Aluno';

type Props = {
  aluno: Aluno;
  onChangeDadosAluno?: (e: any) => void;
  addAluno: () => void;
}

const AlunoPage: React.FC<Props> = (props) => {

  return (
    <div>
      <Container>
        <Form>
          <Form.Group controlId="formGroupNome">
            <Form.Label>Nome:</Form.Label>
            <Form.Control 
              type="text" 
              name="nome" onChange={props.onChangeDadosAluno}
              value={props.aluno.nome}/>
          </Form.Group>
          <Form.Group controlId="formGroupSerie">
            <Form.Label>Série:</Form.Label>
            <Form.Control 
              type="text" 
              name="serie" onChange={props.onChangeDadosAluno}
              value={props.aluno.serie}/>
          </Form.Group>
          <Form.Group controlId="formGroupDataNascimento">
            <Form.Label>Data Nascimento:</Form.Label>
            <Form.Control 
              type="date" 
              name="nascimento" onChange={props.onChangeDadosAluno}
              value={props.aluno.nascimento}/>
          </Form.Group>
          <Form.Group controlId="formGroupResponsavel">
            <Form.Label>Responsável:</Form.Label>
            <Form.Control 
              type="text" 
              name="responsavel" onChange={props.onChangeDadosAluno}
              value={props.aluno.responsavel} />
          </Form.Group>
        </Form>
        <Button variant="primary" type="submit" onClick={props.addAluno}>
          Salvar
        </Button>
      </Container>
    </div>
  )

}

export default AlunoPage;