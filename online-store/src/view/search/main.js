import './style.css';
import React, {Component} from 'react';

class Search extends Component {
    render() {
        return (
            <div className="search flex-justify-center">
                <div className="container flex-justify-center">
                    <input type="text" placeholder="Search..." className="search-input" onFocus={this.handleFocus} onChange={this.handleChange} />
                </div>
            </div>
        );
    }

    handleChange = (e) => {
        let target = e.currentTarget;
        let text = target.value;

        document.getElementsByClassName('title')[0].innerText = text === '' ? 'Search result' : text;
    }

    handleFocus = (e) => {
        e.target.select();
    }
}

export default Search;