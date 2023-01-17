import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';
import {withStyles} from '@material-ui/core';

const styles = ()=> ({
    dFlex: {
        display:'flex'
    } 
 });

class AppNavbar extends Component {
    
    state = {
        isOpen: false
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        const {
            classes
        } = this.props
        return (
            <div>
                <Navbar color="dark" dark expand="sm" className="mb-5">
                    <Container className={classes.dFlex}>
                        <NavbarBrand href="/">ShoppingList</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ms-auto" navbar>
                                <NavItem>
                                    <NavLink href="https://www.github.com/fatihemirhangungor">Github</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default withStyles(styles)(AppNavbar);