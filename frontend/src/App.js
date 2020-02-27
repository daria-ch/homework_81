import React, {Component} from 'react';
import './App.css';
import {createShortLink} from "./store/actions";
import {connect} from "react-redux";

class App extends Component {
    state = {
        originalUrl: ''
    };

    inputChangeHandler = event => {
        this.setState({[event.target.name]: event.target.value});
    };

    submitFormHandler = event => {
        event.preventDefault();
        this.props.createShortLink(this.state);
        this.setState({originalUrl: ''});
    };


    render() {
        const shortLink = 'http://localhost:8000/' + this.props.shortUrl;

        let shortLinkStyle = {
            display: 'none'
        };

        if (this.props.shortUrl) {
            shortLinkStyle = {
                display: 'block'
            };
        }

        return (
            <div className='app'>
                <h1>Shorten your link!</h1>
                <form className='form-block' onSubmit={this.submitFormHandler}>
                    <input className='url-input'
                           required
                           type="text"
                           name="originalUrl"
                           id="originalUrl"
                           placeholder="Enter URL here"
                           autoComplete='off'
                           onChange={this.inputChangeHandler}
                           value={this.state.originalUrl}
                    />

                    <button className='shorten-btn'>
                        Shorten!
                    </button>
                </form>
                <div style={shortLinkStyle}>
                    <h3>Your link now looks like this:</h3>
                    <a href={shortLink}>{shortLink}</a>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    shortUrl: state.shortUrl
});

const mapDispatchToProps = dispatch => ({
    createShortLink: (url) => dispatch(createShortLink(url))
});


export default connect(mapStateToProps, mapDispatchToProps)(App);