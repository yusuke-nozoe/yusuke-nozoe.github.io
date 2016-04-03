import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import * as actions from '../actions';
import LoadMore from './LoadMore';

class Timeline extends Component {
    render() {
        const { page } = this.props;
        let list = [];
        for (let i = 0; i < page*10; i++) {
            list.push(<div key={i} className="list-item">Item {i+1}</div>);
        }
        return (
            <div>
                {list}
                <LoadMore loadMore={this._loadMore.bind(this)} />
            </div>
        );
    }
    _loadMore() {
        const { isLoading, loadMore } = this.props;
        if (!isLoading) {
            loadMore();
        }
    }
}

Timeline.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    loadMore: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.isLoading,
        page: state.page
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadMore: () => actions.loadMore(dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Timeline);
