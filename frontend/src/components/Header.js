import React from 'react'
import {Route} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { useHistory } from 'react-router-dom';
import { Navbar,Nav,Container, NavDropdown } from 'react-bootstrap'
import SearchBox from './SearchBox'
import {logout} from '../actions/userActions'

const Header = () => {
  const history = useHistory();

  const dispatch = useDispatch()

  const userLogin = useSelector(state => state.userLogin)
  const {userInfo} = userLogin

  const logoutHandler = () =>{
    dispatch(logout())
    history.push('/');	
  }

  return (
      <header>
        <Navbar bg="primary" variant='dark' expand="lg" collapseOnSelect>
          <Container>
            <LinkContainer to='/'>
              <Navbar.Brand href="/">Magic Lab CR</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Route render={({history}) => <SearchBox history={history}/>}/>
              <Nav className="ml-auto">
                <LinkContainer to='/cart'>
                  <Nav.Link><i className='fas fa-shopping-cart'></i>Carrito</Nav.Link>
                </LinkContainer>
                {userInfo ? (
                  <NavDropdown title={userInfo.name} id='username'>
                    <LinkContainer to='/profile'>
                      <NavDropdown.Item>Perfil</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Item onClick={logoutHandler}>Salir</NavDropdown.Item>
                  </NavDropdown>
                ):
                (<LinkContainer to='/login'>
                  <Nav.Link><i className='fas fa-user'></i>Ingresar</Nav.Link>
                </LinkContainer>)}
                {userInfo && userInfo.isAdmin && (
                  <NavDropdown title='Administrador'id='adminmenu'>
                    <LinkContainer to='/admin/userlist'>
                      <NavDropdown.Item>Usuarios</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to='/admin/productlist'>
                      <NavDropdown.Item>Productos</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to='/admin/orderlist'>
                      <NavDropdown.Item>Ordenes</NavDropdown.Item>
                    </LinkContainer>
                  </NavDropdown>
                )}
              </Nav>    
            </Navbar.Collapse>
          </Container>
        </Navbar>
        
      </header>
  )
}

export default Header
