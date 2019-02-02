import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {
    componentWillMount() { //Lifecycle Method
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.dataSource = ds.cloneWithRows(this.props.libraries);
    }

    renderRow(library) {
        return <ListItem library={library}/>;
    }

    render() {
        console.log(this.props);
        return (
            <ListView
                dataSource= {this.dataSource}
                renderRow={this.renderRow}
            />
        );
    }
}

const mapStateToProps = (state) => {  //state (global)- take some properties from state and provide as props to other components
    return { libraries: state.libraries };

}

export default connect(mapStateToProps)(LibraryList); //2 process runs first connect call then LibraryList

//`connect()` is used to request to Reducers for data - in redux. ALTERNATIVE: Access data directly from LibraryList.json w/o redux