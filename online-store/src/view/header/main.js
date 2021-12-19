import './style.css';
import React, {Component} from 'react';
import Search from '../search/main';
import Logo from '../header/logo.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser, faSearch, faShoppingBag } from '@fortawesome/free-solid-svg-icons';

class Header extends Component {
    render() {
        return (
            <div className="header flex-justify-center">
                <div className="logo flex-justify-center" onClick={this.startPage}>
                    <h3>Online store</h3>
                    <img src={Logo} width={30} height={30} />
                </div>
                <div className="menu flex-justify-center">
                    <div className="flex-justify-center general-active" onClick={this.handleHeaderMenuClick}>
                        <span className="catalog">Catalog</span>
                        <FontAwesomeIcon icon={faShoppingBag} />
                    </div>
                    <div className="flex-justify-center">
                        <Search />
                        <FontAwesomeIcon icon={faSearch} />
                    </div>
                    <div className="flex-justify-center" onClick={this.handleHeaderMenuClick}>
                        <span className="shopping-cart">Shopping cart</span>
                        <FontAwesomeIcon icon={faShoppingCart} />
                    </div>
                    <div className="flex-justify-center" onClick={this.handleHeaderMenuClick}>
                        <span className="user">User</span>
                        <FontAwesomeIcon icon={faUser} />
                    </div>
                </div>
            </div>
        );
    }

    startPage = () => {
        window.location.reload();
    }

    handleHeaderMenuClick = (e) => {
        let target = e.currentTarget;

        target.classList.add('general-active');

        target = target.getElementsByTagName('span')[0];

        this.changeActiveState(target);
    }

    changeActiveState = (target) => {
        let itemActive = [...document.getElementsByClassName('general-active')];
        itemActive.map((item) => this.removeClass(item, target, 'general-active', item.getElementsByTagName('span')[0]));

        let itemContainer = [...document.getElementsByClassName('container-item')];
        itemContainer.forEach((item) => {
            let itemValue = item.classList.value.split(/[\s-]+/);
            let targetValue = target.classList.value.split(/[\s-]+/);
            let compare = targetValue.filter( el => itemValue.indexOf( el ) > -1 );

            if (compare.length === 0) {
                item.classList.add('hidden');
            } else {
                this.removeClass(item, target, 'hidden');
            }
        });

        let sidebar = document.getElementsByClassName('sidebar')[0];
        sidebar.classList[target.classList.contains('catalog') ? 'remove' : 'add']('hidden');
    }

    removeClass = (item, target, className, specialItem = '') => {
        let itemForIf = specialItem !== '' ? specialItem : item;

        if (itemForIf !== target) {
            item.classList.remove(className);
        }
    }
}

export default Header;