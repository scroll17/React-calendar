import moment from "moment";
import React, {Component} from "react";

import Tbody from './Tbody-M'
import Thead from './Thead'
import Thoot from './Thoot'

import events from '../events'
import './STYLE/style.css'
import './STYLE/img.css'

class Caption extends Component {
    state = {
        dateObject: moment(),
        isWeek: false,
        click: 0,
        ned: 3    // колчество недель в месяце ( не доработано )
    };

    prevClick = () => {
        if(this.state.isWeek){
            this.setState({
                dateObject: this.state.dateObject.subtract(7,'d')
            })
                if(this.state.click === this.state.ned){
                  this.setState({
                    click: 0
                  });
                }else{
                  this.setState({
                    click: this.state.click+1
                })
            }
        }else{
            this.setState({
                dateObject: this.state.dateObject.subtract(1,'M')
            })
        }
    };
    nextClick = () => {
        if(this.state.isWeek){
            this.setState({
                dateObject: this.state.dateObject.add(7,'d')
            })
            if(this.state.click === this.state.ned){
              this.setState({
                click: 0
              });
            }else{
              this.setState({
                click: this.state.click+1
            })
        }
        }else{
            this.setState({
                dateObject: this.state.dateObject.add(1,'M')
            })
        }
    };
    ocl = w => {
            let f = 'MMM';
            if(w == 'p') return moment(this.state.dateObject).subtract(1,'M').format(f);
            if(w == 'n') return moment(this.state.dateObject).add(1,'M').format(f);
    };
    clickMapping = () => {
        this.setState({
            isWeek: !this.state.isWeek
        })
    }

    render(){
        let current = moment();      // Главынй момент, все остальные идут как наследствие
        let style1 = {width:"25",height:"25"};
        let style2 = {width:"20",height:"20"}

        let st = moment(this.state.dateObject).startOf('w'),
            ed = moment(this.state.dateObject).endOf('w');


        return (
            <table className="cal">
            <div className="caption">
                <caption>

                    <div className="add_event">
                        <p><a href="#"><div className="plus"></div></a></p>
                    </div>

                    <div className="month">
                        <span className="prev"><a href="#" onClick={this.prevClick}>{this.state.isWeek ? 'prev' : this.ocl('p')}</a></span>
                        <span className="month_now">{this.state.dateObject.format('MMM')}</span>
                        <span className="click_month" onClick={this.clickMapping}><a href="#"><div className="arrow"></div></a></span>
                        <span className="next"><a href="#" onClick={this.nextClick}>{this.state.isWeek ? 'next' : this.ocl('n')} </a></span>
                    </div>
                </caption>
            </div>
                <Thead />
                <Tbody momentTime={moment(this.state.dateObject)} mapping={this.state.isWeek}
                       kweek={this.state.dateObject} click={this.state.click}
                />
                <div className="today_all">{this.state.dateObject.format('dddd[,]DD MMM')}</div>
                <Thoot events={events} />
            </table>
      );
    }
}

export default Caption
