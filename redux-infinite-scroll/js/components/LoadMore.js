import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'

let _checkLoad;

function _loadRequired(node) {
    var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    return node.offsetTop < scrollTop + window.innerHeight;
}

export default class LoadMore extends Component {
    componentDidMount() {
        _checkLoad = this._checkLoad.bind(this);
        window.addEventListener('scroll', _checkLoad);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', _checkLoad);
    }
    render() {
        const { isLoading, loadMore } = this.props;
        let dadada = (isLoading) ? '...' : '';
        return <div className="infinite-loader" onClick={loadMore}>Load More{dadada}</div>;
    }
    _checkLoad(e) {
        var node = ReactDOM.findDOMNode(this);
        if (_loadRequired(node)) {
            this.props.loadMore();
        }
    }
}

LoadMore.propTypes = {
    loadMore: PropTypes.func.isRequired
}
