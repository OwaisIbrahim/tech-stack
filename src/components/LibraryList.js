import React, { Component } from 'react';
import { connect } from 'react-redux';

class LibraryList extends Component {
    render() {
        console.log(this.props);
        return;
    }
}

const mapStateToProps = (state) => {  //state (global)- take some properties from state and provide as props to other components
    return { libraries: state.libraries };

}

export default connect(mapStateToProps)(LibraryList); //2 process runs first connect call then LibraryList

//`connect()` is used to request to Reducers for data - in redux. ALTERNATIVE: Access data directly from LibraryList.json w/o redux