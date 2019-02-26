import React from 'react';
import { Table, Button } from 'react-bootstrap';

import { Aluno } from './../../domain/Aluno';
import { History } from 'history';

type Props = {
  history: History,
  alunos: Aluno[],
  onAddAluno?: (aluno: Aluno) => void;
  onEditAluno: (index: number) => void;
}

const AlunoList: React.FC<Props> = (props) => {

  return (
    <div>

      <Button onClick={() => {props.history.push('/aluno/new')}}>Novo</Button>

      <Table responsive>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Série</th>
            <th>Data Nascimento</th>
            <th>Responsável</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.alunos.map((aluno, index) =>
            <tr key={index}>
              <td>{aluno.nome}</td>
              <td>{aluno.serie}</td>
              <td>{`${aluno.nascimento}`}</td>
              <td>{aluno.responsavel}</td>
              <td>
                  <Button 
                    type="button" 
                    variant="primary"
                    onClick={() => {props.onEditAluno(index)}}>
                    Editar                    
                  </Button>
                </td>
            </tr> 
          )}
        </tbody>
      </Table>
    </div>
  )

}

export default AlunoList;