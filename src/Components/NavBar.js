import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
import { BrowserRouter as Router,Link, Switch,Route} from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Login from './Login';
import ResponseDare from "./ResponseDare";
import ResponsePlayer from './ResponsePlayer';
import ShareDare from './ShareDare';
export default class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
            flg:true,
            abtflg:false,
            contactflg:false,
            loginflg:false,
        };
    this.onClick = this.onClick.bind(this);
    this.handleSelect= this.handleSelect.bind(this);

    }

    onClick(){
        this.setState({
            collapse: !this.state.collapse,
        });
    }
     handleSelect(value) {
        switch(value){
            case "1":
            this.setState({
                flg:true,
                abtflg:false,
                contactflg:false,
                loginflg:false
             });
             break;
             case "2":
             this.setState({
                 flg:false,
                 abtflg:true,
                 contactflg:false,
                 loginflg:false
              });
              break;
              case "3":
              this.setState({
                  flg:false,
                  abtflg:false,
                  contactflg:true,
                  loginflg:false
               });
               break;
               case "4":
               this.setState({
                   flg:false,
                   abtflg:false,
                   contactflg:false,
                   loginflg:true
                });
                break;
     
 

        }
     
      }
    render() {
        return (
            <Router>
                <div class="container">
               <Navbar color="light blue" expand="md" dark fixed="top" >
                    <NavbarBrand href="#">
                        NewSite
                    </NavbarBrand>
                    { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                    <Collapse isOpen = { this.state.collapse } navbar>
                        <NavbarNav right >
                            <NavItem active={this.state.flg} onClick={()=>{this.handleSelect("1")}} >
                                <NavLink className="nav-link" to="/">Home</NavLink>
                            </NavItem > 
                            <NavItem active={this.state.abtflg} onClick={()=>{this.handleSelect("2")}}>
                                <NavLink className="nav-link" to="/aboutus">About us</NavLink>
                            </NavItem>
                            <NavItem  active={this.state.contactflg} onClick={()=>{this.handleSelect("3")}}>
                                <NavLink className="nav-link" to="/contactus">Contact us</NavLink>
                            </NavItem>
                            <NavItem active={this.state.loginflg} onClick={()=>{this.handleSelect("4")}}>
                                <NavLink className="nav-link" to="/login">LogIn/SignUp</NavLink>
                            </NavItem>
                            
                        </NavbarNav>
                    </Collapse>
                </Navbar>
                <Route exact path="/" component={Home} />
                <Route  path="/aboutus" component={About} />
               <Route  path="/contactus" component={Contact} />
               <Route  path="/dare/:dare_id" component={ResponsePlayer} />
                <Route  path="/login" component={Login} />
                <Route  path="/sharedare" component={ShareDare} />
                    </div>
            </Router>
        );
    }
}