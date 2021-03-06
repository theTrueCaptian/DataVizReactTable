import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import DataVizReactTable from './DataVizReactTable';



let columns = ['d_date_sk', 'd_date_id', 'd_date', 'd_month_seq', 'd_week_seq', 'd_quarter_seq', 'd_year', 'd_dow', 'd_moy', 'd_dom', 'd_qoy', 'd_fy_year', 'd_fy_quarter_seq', 'd_fy_week_seq', 'd_day_name', 'd_quarter_name', 'd_holiday', 'd_weekend', 'd_following_holiday', 'd_first_dom', 'd_last_dom', 'd_same_day_ly', 'd_same_day_lq', 'd_current_day', 'd_current_week', 'd_current_month', 'd_current_quarter', 'd_current_year'];
let columnTypes = {'d_date_sk': 'string', 'd_date_id': 'string', 'd_date': 'string', 'd_month_seq': 'string', 'd_week_seq': 'string', 'd_quarter_seq': 'string', 'd_year': 'string', 'd_dow':'string', 'd_moy':'string', 'd_dom':'string', 'd_qoy':'string', 'd_fy_year':'string', 'd_fy_quarter_seq':'string', 'd_fy_week_seq':'string', 'd_day_name': 'string', 'd_quarter_name':'string', 'd_holiday':'string', 'd_weekend':'string', 'd_following_holiday':'string', 'd_first_dom':'string', 'd_last_dom':'string', 'd_same_day_ly': 'string', 'd_same_day_lq':'string', 'd_current_day':'string', 'd_current_week':'string', 'd_current_month':'string', 'd_current_quarter':'string', 'd_current_year':'string'};
let data ={
    '1':{d_date:'2000-01-01',d_current_week:'N',d_week_seq:'5218',d_current_day:'N',d_first_dom:'2451545',d_moy:'1',d_holiday:'Y',d_month_seq:'1200',d_current_year:'N',d_fy_quarter_seq:'401',d_current_quarter:'N',d_year:'2000',d_weekend:'Y',d_quarter_seq:'401',d_date_id:'AAAAAAAAJFIGFCAA',d_following_holiday:'N',d_fy_year:'2000',d_same_day_lq:'2451453',d_qoy:'1',d_current_month:'N',d_same_day_ly:'2451180',d_dom:'1',d_date_sk:'2451545',d_last_dom:'2451544',d_fy_week_seq:'5218',d_day_name:'Saturday',d_quarter_name:'2000Q1',d_dow:'6'},
    '2':{d_date:'2000-01-02',d_current_week:'N',d_week_seq:'5218',d_current_day:'N',d_first_dom:'2451545',d_moy:'1',d_holiday:'N',d_month_seq:'1200',d_current_year:'N',d_fy_quarter_seq:'401',d_current_quarter:'N',d_year:'2000',d_weekend:'N',d_quarter_seq:'401',d_date_id:'AAAAAAAAKFIGFCAA',d_following_holiday:'Y',d_fy_year:'2000',d_same_day_lq:'2451454',d_qoy:'1',d_current_month:'N',d_same_day_ly:'2451181',d_dom:'2',d_date_sk:'2451546',d_last_dom:'2451544',d_fy_week_seq:'5218',d_day_name:'Sunday',d_quarter_name:'2000Q1',d_dow:'0'},
    '3':{d_date:'2000-01-03',d_current_week:'N',d_week_seq:'5218',d_current_day:'N',d_first_dom:'2451545',d_moy:'1',d_holiday:'N',d_month_seq:'1200',d_current_year:'N',d_fy_quarter_seq:'401',d_current_quarter:'N',d_year:'2000',d_weekend:'N',d_quarter_seq:'401',d_date_id:'AAAAAAAALFIGFCAA',d_following_holiday:'N',d_fy_year:'2000',d_same_day_lq:'2451455',d_qoy:'1',d_current_month:'N',d_same_day_ly:'2451182',d_dom:'3',d_date_sk:'2451547',d_last_dom:'2451544',d_fy_week_seq:'5218',d_day_name:'Monday',d_quarter_name:'2000Q1',d_dow:'1'},
    '4':{d_date:'2000-01-04',d_current_week:'N',d_week_seq:'5219',d_current_day:'N',d_first_dom:'2451545',d_moy:'1',d_holiday:'N',d_month_seq:'1200',d_current_year:'N',d_fy_quarter_seq:'401',d_current_quarter:'N',d_year:'2000',d_weekend:'N',d_quarter_seq:'401',d_date_id:'AAAAAAAAMFIGFCAA',d_following_holiday:'N',d_fy_year:'2000',d_same_day_lq:'2451456',d_qoy:'1',d_current_month:'N',d_same_day_ly:'2451183',d_dom:'4',d_date_sk:'2451548',d_last_dom:'2451544',d_fy_week_seq:'5219',d_day_name:'Tuesday',d_quarter_name:'2000Q1',d_dow:'2'},
    '5':{d_date:'2000-01-05',d_current_week:'N',d_week_seq:'5219',d_current_day:'N',d_first_dom:'2451545',d_moy:'1',d_holiday:'N',d_month_seq:'1200',d_current_year:'N',d_fy_quarter_seq:'401',d_current_quarter:'N',d_year:'2000',d_weekend:'N',d_quarter_seq:'401',d_date_id:'AAAAAAAANFIGFCAA',d_following_holiday:'N',d_fy_year:'2000',d_same_day_lq:'2451457',d_qoy:'1',d_current_month:'N',d_same_day_ly:'2451184',d_dom:'5',d_date_sk:'2451549',d_last_dom:'2451544',d_fy_week_seq:'5219',d_day_name:'Wednesday',d_quarter_name:'2000Q1',d_dow:'3'}
};


columns = ['first_name', 'last_name', 'birth_year',	'city',	'state', 'military', 'gender']
columnTypes = null;
data = {
       1: {'first_name':'Anna', 'last_name':'Shaughn', 'birth_year':1985, 'city':'Lansing', 'state':'MI', 'military':'N', 'gender':'M'},
       2: {'first_name':'Emma', 'last_name':'Shaune', 'birth_year':1998, 'city':'Dearborn', 'state':'MI', 'military':'N', 'gender':'F'},
       3: {'first_name':'Elizabeth', 'last_name':'Shem', 'birth_year':1989, 'city':'Dearborn Heights', 'state':'MI', 'military':'Y', 'gender':'F'},
       4: {'first_name':'Minnie', 'last_name':'Shonn', 'birth_year':1986, 'city':'Wayne', 'state':'MI', 'military':'N', 'gender':'F'},
       5: {'first_name':'Margaret', 'last_name':'Sigurd', 'birth_year':1989, 'city':'Detroit', 'state':'MI', 'military':'Y', 'gender':'M'},
       6: {'first_name':'Ida', 'last_name':'Simcha', 'birth_year':1998, 'city':'Detroit', 'state':'MI', 'military':'N', 'gender':'F'},
       7: {'first_name':'Alice', 'last_name':'Skeeter', 'birth_year':1995, 'city':'Lansing', 'state':'MI', 'military':'N', 'gender':'M'},
       8: {'first_name':'Bertha', 'last_name':'Slyvester', 'birth_year':1994, 'city':'Dearnborn', 'state':'MI', 'military':'Y', 'gender':'M'},
       9: {'first_name':'Sarah', 'last_name':'Smiley', 'birth_year':1999, 'city':'Pontiac', 'state':'MI', 'military':'N', 'gender':'M'},
       10: {'first_name':'Annie', 'last_name':'Soren', 'birth_year':2000, 'city':'Pontiac', 'state':'MI', 'military':'Y', 'gender':'F'}
};


//Required!
let renderConst = {'maxheight': 300};
//Optional params
let options = {
    'title':'Dummy Table',
    'columnWidth': 200,
    'highlightColor': 'yellow',
    'histogramColor': '#5DADE2'
};

ReactDOM.render(
  <React.StrictMode>
    <DataVizReactTable 
        data={data}
        columns={columns}
        columnTypes={columnTypes}
        title='Dummy Table'
        renderConst={renderConst}
        options={options}
    > 
    </DataVizReactTable>
  </React.StrictMode>,
  document.getElementById('root')
);
