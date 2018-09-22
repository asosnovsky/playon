import * as React from "react";
import * as moment from "moment";

import { ReactAgenda, guid  } from 'react-agenda';

// require('moment/locale/en.js'); // this is important for traduction purpose


interface IProps {
  items: AgendaItem[];
  startDate: Date;
  maxDate: Date;
  onSelect?: (item: AgendaItem) => void;
}
export default class Agenda extends React.Component<IProps> {
  
  handleCellSelection = (item: string) => {
    console.log('handleCellSelection', item)
  }
  handleItemEdit = (item: AgendaItem) => {
    console.log('handleItemEdit', item)
    if (this.props.onSelect) this.props.onSelect(item);
  }
  handleRangeSelection = (item: AgendaItem) => {
    console.log('handleRangeSelection', item)
  }
  render() {
    return (
      <div>
      <ReactAgenda
          minDate={moment("2018-01-01", "YYYY-MM-DD").toDate()}                           
          maxDate={this.props.maxDate}
          disablePrevButton={true}
          startDate={this.props.startDate}
          cellHeight={25}
          locale={"en"}
          items={this.props.items}
          numberOfDays={5}
          startAtTime={100}
          rowsPerHour={1}
          autoScale={false}
          fixedHeader={true}
          onItemEdit={this.handleItemEdit}
          onCellSelect={this.handleCellSelection}
          onRangeSelection={this.handleRangeSelection}/>                       
      </div>
      );
    }
  }
  
  