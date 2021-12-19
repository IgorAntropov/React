import './style.css';
import React, {Component} from 'react';

class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar flex-justify-center">
                <div className="group flex-justify-center" onClick={this.handleGroupClick}>
                    <span className="flex-justify-center">Computer</span>
                    <div className="group-item flex-justify-center hidden" onClick={this.handleItemClick}>
                        Computer 1
                    </div>
                    <div className="group-item flex-justify-center hidden" onClick={this.handleItemClick}>
                        Computer 2
                    </div>
                    <div className="group-item flex-justify-center hidden" onClick={this.handleItemClick}>
                        Computer 3
                    </div>
                </div>
                <div className="group flex-justify-center" onClick={this.handleGroupClick}>
                    <span className="flex-justify-center">Phone</span>
                    <div className="group-item flex-justify-center hidden" onClick={this.handleItemClick}>
                        Phone 1
                    </div>
                    <div className="group-item flex-justify-center hidden" onClick={this.handleItemClick}>
                        Phone 2
                    </div>
                    <div className="group-item flex-justify-center hidden" onClick={this.handleItemClick}>
                        Phone 3
                    </div>
                </div>
                <div className="group flex-justify-center" onClick={this.handleGroupClick}>
                    <span className="flex-justify-center">Tablet</span>
                    <div className="group-item flex-justify-center hidden" onClick={this.handleItemClick}>
                        Tablet 1
                    </div>
                    <div className="group-item flex-justify-center hidden" onClick={this.handleItemClick}>
                        Tablet 2
                    </div>
                    <div className="group-item flex-justify-center hidden" onClick={this.handleItemClick}>
                        Tablet 3
                    </div>
                </div>
                <div className="group flex-justify-center" onClick={this.handleGroupClick}>
                    <span className="flex-justify-center">Other</span>
                    <div className="group-item flex-justify-center hidden" onClick={this.handleItemClick}>
                        Other 1
                    </div>
                    <div className="group-item flex-justify-center hidden" onClick={this.handleItemClick}>
                        Other 2
                    </div>
                    <div className="group-item flex-justify-center hidden" onClick={this.handleItemClick}>
                        Other 3
                    </div>
                </div>
            </div>
        );
    }

    handleGroupClick = (e) => {
        let target = e.currentTarget;
        let stateActive = target.classList.contains('item-active');
        let stateOpen = target.classList.contains('open');

        target.classList.add('item-active');
        target.classList.add('open');

        this.changeActiveState(target, stateActive);
        this.displayItems(target, stateOpen === false ? 'open' : '');
    }

    changeActiveState = (target, state) => {
        let itemActive = [...document.getElementsByClassName('item-active')];
        itemActive.map((item) => this.removeClass(item, target, state, 'item-active'));

        let itemOpen = [...document.getElementsByClassName('open')];
        itemOpen.map((item) => this.removeClass(item, target, state, 'open'));
    }

    removeClass = (item, target, state, className) => {
        if (item !== target) {
            item.classList.remove(className);
            this.displayItems(item, '');
        } else {
            if (state) {
                target.classList.remove(className);
            }
        }
    }

    displayItems = (target, state) => {
        let items = [...target.getElementsByTagName('div')];

        items.map((item) => item.classList[state === '' ? 'add' : 'remove']('hidden'));
    }

    handleItemClick = (e) => {
        e.preventDefault();
        e.stopPropagation();

        let target = e.currentTarget;
        let text = target.innerText;

        document.getElementsByClassName('title')[0].innerText = text;
    }
}

export default Sidebar;