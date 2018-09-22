import * as React from "react";

import { ReactAgenda, guid  } from 'react-agenda';

// require('moment/locale/en.js'); // this is important for traduction purpose

interface IItem {
  _id            : string,
  name          : string,
  startDateTime : Date,
  endDateTime   : Date,
  classes       : string;
}
var colors= {
  'color-1':"rgba(102, 195, 131 , 1)" ,
  "color-2":"rgba(242, 177, 52, 1)" ,
  "color-3":"rgba(235, 85, 59, 1)"
}

var now = new Date();

var items: IItem[] = [
  {
    _id            :guid(),
    name          : 'Meeting , dev staff!',
    startDateTime : new Date(now.getFullYear(), now.getMonth(), now.getDate(), 10, 0),
    endDateTime   : new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12, 0),
    classes       : 'color-1'
  },
  {
    _id            :guid(),
    name          : 'Working lunch , Holly',
    startDateTime : new Date(now.getFullYear(), now.getMonth(), now.getDate()+1, 11, 0),
    endDateTime   : new Date(now.getFullYear(), now.getMonth(), now.getDate()+1, 13, 0),
    classes       : 'color-2 color-3'
  },
  
];

interface IProps {
  
}
interface IState {
  items: IItem[];
  selected: IItem[];
  cellHeight: number;
  showModal: boolean;
  locale: string;
  rowsPerHour: number;
  numberOfDays: number;
  startDate: Date;
}
export default class Agenda extends React.Component<IProps, IState> {
  state = {
    items,
    selected: [] as IItem[],
    cellHeight:30,
    showModal:false,
    locale:"en",
    rowsPerHour:2,
    numberOfDays:4,
    startDate: new Date()
  }
  
  handleCellSelection = (item: string) => {
    console.log('handleCellSelection', item)
  }
  handleItemEdit = (item: IItem) => {
    console.log('handleItemEdit', item)
  }
  handleRangeSelection = (item: IItem) => {
    console.log('handleRangeSelection', item)
  }
  render() {
    return (
      <div>
      <ReactAgenda
          minDate={now}                           
          maxDate={new Date(now.getFullYear(), now.getMonth()+3)}
          disablePrevButton={false}
          startDate={this.state.startDate}
          cellHeight={this.state.cellHeight}
          locale={this.state.locale}
          items={this.state.items}
          numberOfDays={this.state.numberOfDays}
          rowsPerHour={this.state.rowsPerHour}
          itemColors={colors}
          autoScale={false}
          fixedHeader={true}
          onItemEdit={this.handleItemEdit}
          onCellSelect={this.handleCellSelection}
          onRangeSelection={this.handleRangeSelection}/>                       
      </div>
      );
    }
  }
  
  