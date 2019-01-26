import React, { Component } from 'react';
import './layout.css';
import Header from '../../../components/Header/header.js';
import Footer from '../../../components/Footer/footer.js';
class Layout extends Component {
    state = {
        showNav: false
    }

    onHideNav = (boolean) => {
        this.setState({
            showNav: boolean
        })
    }

    render() {
        return(
            <div>
                <Header
                showNav={this.state.showNav}
                onHideNav={() => this.toggleSideNav(false)}
                onOpenNav={() => this.toggleSideNav(true)}
                />
                {this.props.children}
                <Footer />
            </div>
        )
    }
}

export default Layout;