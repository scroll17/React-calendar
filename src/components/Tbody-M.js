import moment from "moment";
import React, {Component} from "react";

import './STYLE/style.css'

class Tbody extends Component{

    render(){
        let { momentTime } = this.props;
        if(this.props.mapping){
            console.log('---','is week');

            let current = moment(momentTime);
            let { kweek } = this.props;
            let { click } = this.props;

            let diff = current.daysInMonth();
            let index = current.startOf("M").day(); // 3 номер дня недели с которой начинаеться месяц

            const COLS = 7;

            let table = [],
              tr = [],
              k = 1 - index;

            let tab = (k, cols) => {
              for (let j = 0; j < COLS; j++) {
                const a = <a href="#">{k > 0 && k <= diff ? k : ''}</a>;
                if(k == moment(current).date()){
                    tr.push(<td className="active">{a}</td>);
                }else{
                    tr.push(<td>{a}</td>);
                }
                k++;
              }
            };

              if (click !== 0){
                  k = k + kweek.date();
                  tab(k, COLS);
              }else{ tab(k, COLS) }

              table.push(tr);

            return table;

        }else if(!this.props.mapping){
            console.log('---','is month');

            let current = moment(momentTime);
            let diff = current.daysInMonth();
            let index = moment(current).startOf('M').day();   // 3 номер дня недели с которой начинаеться месяц

            const ROWS = Math.ceil((index + diff) / 7); // 5
            const COLS = 7;
            let clock = [];

            let table = [], tr = [], k = 1-index;

            for (let i = 0; i < ROWS; i++) {
              tr = [];
              for (let j = 0; j < COLS; j++) {

                let key = k;
                clock.push(() => {
                    if(key > 0 && key <= diff){
                        console.log(moment().set('date',key).format('DD MMM'))
                    }
                });

                const a = <a href="#" onClick={clock[k+2]}>{k > 0 && k <= diff ? k : ''}</a>;
                if(k == moment(current).date()){
                    tr.push(<td className="active">{a}</td>);
                }else{
                    tr.push(<td>{a}</td>);
                }
                k++;
              }
              table.push(<tr>{tr}</tr>);
            }

            return table;
        }
    }
}

export default Tbody;
