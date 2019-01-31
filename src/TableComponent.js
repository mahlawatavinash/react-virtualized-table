import React from 'react';
import { Column, Table, SortDirection, SortIndicator } from 'react-virtualized';
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer';
import _ from 'underscore';
import 'react-virtualized/styles.css';

import { fakeJson } from './Data/fakeJson';

const datalist  = fakeJson;
const list = datalist; 
class TableComponent2 extends React.Component {
 
  constructor(){
    super();
     this.state = {
       sortBy: 'username',
       sortDirection: SortDirection.DESC,
       sortedList: list
     }
   }
  
   sort({ sortBy, sortDirection }) {
     console.log(list)
    const tempList = _.sortBy(list, item => item[sortBy]);
    console.log(tempList);
    const sortedList = tempList.update(
        list =>
          sortDirection === SortDirection.DESC ? list.reverse() : list
      );
  
    this.setState({ sortBy, sortDirection, sortedList });
  }

    render() {
      return (
        <AutoSizer disableHeight>
          {({ width }) => (
            <Table
              headerHeight={20}
              height={740}
              rowCount={datalist.length}
              rowGetter={({ index }) => this.state.sortedList[index]}
              rowHeight={60}
              width={width}
              sort={this.sort}
              sortBy={this.state.sortBy}
              sortDirection={this.state.sortDirection}
            >
              <Column
                dataKey='id'
                width={200}
                flexGrow={1}
                label='ID'
              />
              <Column
                dataKey='name'
                width={200}
                flexGrow={1}
                label='NAME'
              />
              <Column
                dataKey='username'
                width={200}
                flexGrow={1}
                label='USERNAME'
              />
            </Table>
          )}
        </AutoSizer>
      );
    }
  }
  
  export default TableComponent2;