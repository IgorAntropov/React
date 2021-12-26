import './style.css';
import React, {Component} from 'react';
import GroupItem from '../group-item/main';

class Group extends Component {
    render() {
        return (
            <div className="group flex-justify-center" onClick={this.handleGroupClick}>
                <span className="flex-justify-center">{this.props.name}</span>
                {this.props.collestion.map((item, index) =>
                    <GroupItem key={index} details={item} name={item.name} />
                )}
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
}

export default Group;