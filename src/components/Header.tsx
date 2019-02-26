import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header: React.FC<{}> = () => {

  return (
    <Navbar bg="primary" variant="dark">
      <Nav className="ml-auto">
        <div>
          <Button variant="light" style={{ marginRight: 10 }}><NavLink to="/">Início</NavLink></Button>
          <Button variant="light" style={{ marginRight: 10 }}><NavLink to="/alunos">Alunos</NavLink></Button>
          <Button variant="light" style={{ marginRight: 10 }}><NavLink to="/avaliacoes">Avaliações</NavLink></Button>
        </div>
      </Nav>
    </Navbar>
  )

}

export default Header;