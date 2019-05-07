import moment from "moment";
import React from "react";

export default function Thoot({events}){
    let k = 0, td = [], tr = [], key = [];
    let sDate = {position:'relative',right:'65px',fontFamily: "Arial Black",top:'-20px',color:'#DCDCDC'},
        sName = {position:'relative',fontFamily: "Arial Black",fontSize:'12px',top:'-13px'},
        sNameF = {position:'relative',fontFamily: "Arial Black",fontSize:'12px',top:'-3px',textAlign:'center'},
        sTime = {position:'relative',fontFamily: "Arial Black",left:'70px',color:'#DCDCDC'};

    //let fd = `hh:mm ${ap.toUpperCase()}`;

    events.forEach( (evn,i,obj) => {
        let state = evn.events[0].active ? 'plan' : 'plan_1';
        if(evn.events.length > 1){
            for(let j=0; j<evn.events.length; j++){
                state = evn.events[j].active ? 'plan' : 'plan_1';
                if( j == 0){
                    td.push(<td className={state} colSpan='7'>
                                <span style={sTime}>{moment(evn.events[0].time,`hh:mm A`).format(`hh:mm A`)}</span>
                                <br />
                                <span style={sDate}>{moment(evn.date,'DD.MM.YYYY').format('ddd[,]DD MMMM')}</span>
                                <br />
                                <span style={sName}>{evn.events[0].name}</span>
                            </td>);
                }else{
                    td.push(<td className={state} colSpan='7'>
                                <span style={sTime}>{moment(evn.events[j].time,`hh:mm A`).format(`hh:mm A`)}</span>
                                <br />
                                <span style={sNameF}>{evn.events[j].name}</span>
                            </td>);
                }
                k++;
            }
        }else{
            td.push(<td className={state} colSpan='7'>
                        <span style={sTime}>{moment(evn.events[0].time,`hh:mm A`).format(`hh:mm A`)}</span>
                        <br />
                        <span style={sDate}>{moment(evn.date,'DD.MM.YYYY').format('ddd[,]DD MMMM')}</span>
                        <br />
                        <span style={sName}>{evn.events[0].name}</span>
                    </td>);
            k++;
        };
    })

    for(let i=0; i<td.length; i++){
        tr.push(<tr key={key[i]}>{td[i]}</tr>);
    }

    return tr;
};
