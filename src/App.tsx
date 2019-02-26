import React, { Component } from 'react';
import { Route, Switch, withRouter, RouteComponentProps } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Inicio from './components/Inicio';
import AlunoList from './components/Aluno/AlunoList';
import AvaliacaoList from './components/Avaliacao/AvaliacaoList';
import { Aluno } from './domain/Aluno';
import AlunoPage from './components/Aluno/AlunoPage';

interface AppProps extends RouteComponentProps<any> {
  
}

type State = {
  aluno: Aluno;
  alunos: Aluno[]
}

class App extends Component<AppProps, State> {

  state: State = {
    aluno: {
      id: 0,
      nome: '',
      serie: '',
      nascimento: '',
      responsavel: ''
    },
    alunos: []
  };  

  addAluno = () => {
    const { aluno } = this.state
    console.log('save', aluno);
    this.setState(state => {
      const { alunos } = state;
      return {
        alunos: [
          ...alunos, aluno
        ]
      }
    });
    this.newAluno();
    this.props.history.push('/alunos');
  }

  onChangeDadosAluno = (e: any) => {
    const { name, value} = e.target;
    this.setState(state => {
      const { aluno } = state;
      return {
          aluno: {
          ... aluno,
          [name]: value
        }
      }  
    }, () => {
      console.log(this.state.aluno);
    })
  }

  onEditAluno = (index: number) => {
    this.setState(state => {
      const { alunos } = state;
      return {
        aluno: alunos[index]        
      }  
    }, () => {
      const { aluno } = this.state;
      const alunoAux = {
        ...aluno,
        id: index
      }
      this.props.history.push('/aluno/edit');
      return {
        aluno: alunoAux
      }
    })      
  } 

  newAluno = () => {
    this.setState({
      aluno: {
        id: 0,  
        nome: '',
        serie: '',
        nascimento: '',
        responsavel: ''
      }
    });
  }

  render() {
    
    return (
      <div>
        <React.Fragment>
          <Header />
          <Switch>
            <Route path="/" exact component={Inicio} />
            <Route 
              path="/alunos" 
              exact 
              render={props => 
                <AlunoList 
                  {... props} 
                  alunos={this.state.alunos} 
                  onEditAluno={this.onEditAluno}
                />} 
              />
              <Route 
              path="/aluno/new" 
              exact 
              render={props => 
                <AlunoPage 
                  aluno={this.state.aluno} 
                  addAluno={this.addAluno}
                  onChangeDadosAluno={this.onChangeDadosAluno} />} 
              />
              <Route 
                path="/aluno/edit" 
                exact 
                render={props => 
                  <AlunoPage 
                    aluno={this.state.aluno} 
                    addAluno={this.addAluno}
                    onChangeDadosAluno={this.onChangeDadosAluno} />} 
              />
            <Route path="/avaliacoes" exact component={AvaliacaoList} />
          </Switch>
        </React.Fragment>
      </div>
    );
  }
}

export default withRouter(App);
