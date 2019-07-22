//  React
import React, { Component } from 'react';

class QuerySeriesDataRow extends Component {  
  renderItem(item){
    if(typeof item == "boolean"){
      return item===true?"true":"false"
    }else{
      return item
    }
  }
  render() {
    //  Display data row:
    return (
        <tr>
            {this.props.datarow.map(function(item, index) {
                return <td key={index}>{this.renderItem(item)}</td>;
            })}
        </tr>
    );
  }

}

export default QuerySeriesDataRow;
