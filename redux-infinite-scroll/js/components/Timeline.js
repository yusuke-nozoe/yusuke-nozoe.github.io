import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'

class Timeline extends Component {
    render() {
        const { page, loadMore } = this.props;
        let list = [];
        for (let i = 0; i < page*10; i++) {
            list.push(<div key={i} className="list-item">Item {i+1}</div>);
        }
        return (
            <div>
                {list}
                <div onClick={loadMore}>Load More</div>
            </div>
        );
    }
}

Timeline.propTypes = {
    loadMore: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired
}

const mapStateToProps = (state) => {
    return {
        page: state.page
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadMore: () => {
            setTimeout(() => dispatch({type: 'LOAD_MORE'}), 2000);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Timeline);
