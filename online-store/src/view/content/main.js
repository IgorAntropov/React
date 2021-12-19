import './style.css';
import React, {Component} from 'react';
import Sidebar from '../sidebar/main';

class Content extends Component {
    render() {
        return (
            <div className="content flex-justify-center">
                <Sidebar />
                <div className="container">
                    <div className="container-item catalog-container flex-justify-center">
                        <h1 className="title">Catalog</h1>
                    </div>
                    <div className="container-item shopping-cart-container flex-justify-center hidden">
                        <h1 className="title">Shopping-cart</h1>
                    </div>
                    <div className="container-item user-container flex-justify-center hidden">
                        <h1 className="title">User</h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;