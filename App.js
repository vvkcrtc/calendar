//import logo from './logo.svg';
import './App.css';

function OutDayOfMonth(props){

  return (
    <td class={props.class_style}>{props.value} </td>
  )

}

function Calendar({date}){

  const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
  const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", 
            "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

  const tmp_first_day =  new Date(date.getFullYear(), date.getMonth(), 1).getDay(); 
  var first_day = 0;
  tmp_first_day === 0 ? first_day = 7 : first_day = tmp_first_day;
  const days_curr_month = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  const days_prev_month = new Date(date.getFullYear(), date.getMonth(), 0).getDate();

  const total_days = 42;
  var dates = [];

    for(var i = days_prev_month - first_day + 2; i <= days_prev_month; i++){

      dates.push({ value: i, class_style: "ui-datepicker-other-month"})
      
    }
    for(var j = 1; j <= days_curr_month; j++){

      dates.push({ value: j, class_style: "" })

    }
    for(var k = first_day + days_curr_month - 1, day_next_month = 1; k < total_days; k++){
     
      dates.push({ value: day_next_month, class_style: "ui-datepicker-other-month" })
      day_next_month++;
      
    }
    for (var l = 0; l < dates.length; l++){

      if ( dates[l].value ===  date.getDate()){
      
        dates[l].class_style = "ui-datepicker-today";
      
      }


    }
  console.log("first_day",first_day, ".getDay() = ",new Date(date.getFullYear(), date.getMonth(), 1).getDay())
  console.log("dates array:", dates);
  return ( 
    <ul>
      <div class="ui-datepicker">
        <div class="ui-datepicker-material-header">
          <div class="ui-datepicker-material-day">{days[date.getDay()]}</div>
          <div class="ui-datepicker-material-date">
            <div class="ui-datepicker-material-day-num">{date.getDate()}</div>
            <div class="ui-datepicker-material-month">{months[date.getMonth()]}</div>
            <div class="ui-datepicker-material-year">{date.getFullYear()}</div>
          </div>
        </div>
        <div class="ui-datepicker-header">
          <div class="ui-datepicker-title">
            <span class="ui-datepicker-month">{months[date.getMonth()]}</span>&nbsp;
            <span class="ui-datepicker-year">{date.getFullYear()}</span>
          </div>
        </div>
        <table class="ui-datepicker-calendar">
          <colgroup>
            <col/> 
            <col/>
            <col/>
            <col/>
            <col/>
            <col class="ui-datepicker-week-end"/>
            <col class="ui-datepicker-week-end"/>
          </colgroup>
          <thead>
            <tr>
              <th scope="col" title="Понедельник">Пн</th>
              <th scope="col" title="Вторник">Вт</th>
              <th scope="col" title="Среда">Ср</th>
              <th scope="col" title="Четверг">Чт</th>
              <th scope="col" title="Пятница">Пт</th>
              <th scope="col" title="Суббота">Сб</th>
              <th scope="col" title="Воскресенье">Вс</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <OutDayOfMonth value = {dates[0].value}  class_style = {dates[0].class_style}  />
              <OutDayOfMonth value = {dates[1].value}  class_style = {dates[1].class_style}  />
              <OutDayOfMonth value = {dates[2].value}  class_style = {dates[2].class_style}  />
              <OutDayOfMonth value = {dates[3].value}  class_style = {dates[3].class_style}  />
              <OutDayOfMonth value = {dates[4].value}  class_style = {dates[4].class_style}  />
              <OutDayOfMonth value = {dates[5].value}  class_style = {dates[5].class_style}  />
              <OutDayOfMonth value = {dates[6].value}  class_style = {dates[6].class_style}  />            
        
            </tr>
            <tr>
              <OutDayOfMonth value = {dates[7].value}  class_style = {dates[7].class_style}  />
              <OutDayOfMonth value = {dates[8].value}  class_style = {dates[8].class_style}  />
              <OutDayOfMonth value = {dates[9].value}  class_style = {dates[9].class_style}  />
              <OutDayOfMonth value = {dates[10].value}  class_style = {dates[10].class_style}  />
              <OutDayOfMonth value = {dates[11].value}  class_style = {dates[11].class_style}  />
              <OutDayOfMonth value = {dates[12].value}  class_style = {dates[12].class_style}  />
              <OutDayOfMonth value = {dates[13].value}  class_style = {dates[13].class_style}  />            
            </tr>
            <tr>
              <OutDayOfMonth value = {dates[14].value}  class_style = {dates[14].class_style}  />
              <OutDayOfMonth value = {dates[15].value}  class_style = {dates[15].class_style}  />
              <OutDayOfMonth value = {dates[16].value}  class_style = {dates[16].class_style}  />
              <OutDayOfMonth value = {dates[17].value}  class_style = {dates[17].class_style}  />
              <OutDayOfMonth value = {dates[18].value}  class_style = {dates[18].class_style}  />
              <OutDayOfMonth value = {dates[19].value}  class_style = {dates[19].class_style}  />
              <OutDayOfMonth value = {dates[20].value}  class_style = {dates[20].class_style}  />            
            </tr>
            <tr>
              <OutDayOfMonth value = {dates[21].value}  class_style = {dates[21].class_style}  />
              <OutDayOfMonth value = {dates[22].value}  class_style = {dates[22].class_style}  />
              <OutDayOfMonth value = {dates[23].value}  class_style = {dates[23].class_style}  />
              <OutDayOfMonth value = {dates[24].value}  class_style = {dates[24].class_style}  />
              <OutDayOfMonth value = {dates[25].value}  class_style = {dates[25].class_style}  />
              <OutDayOfMonth value = {dates[26].value}  class_style = {dates[26].class_style}  />
              <OutDayOfMonth value = {dates[27].value}  class_style = {dates[27].class_style}  />            
            </tr>
            <tr>
              <OutDayOfMonth value = {dates[28].value}  class_style = {dates[28].class_style}  />
              <OutDayOfMonth value = {dates[29].value}  class_style = {dates[29].class_style}  />
              <OutDayOfMonth value = {dates[30].value}  class_style = {dates[30].class_style}  />
              <OutDayOfMonth value = {dates[31].value}  class_style = {dates[31].class_style}  />
              <OutDayOfMonth value = {dates[32].value}  class_style = {dates[32].class_style}  />
              <OutDayOfMonth value = {dates[33].value}  class_style = {dates[33].class_style}  />
              <OutDayOfMonth value = {dates[34].value}  class_style = {dates[34].class_style}  />            
            </tr>
            <tr>
              <OutDayOfMonth value = {dates[35].value}  class_style = {dates[35].class_style}  />
              <OutDayOfMonth value = {dates[36].value}  class_style = {dates[36].class_style}  />
              <OutDayOfMonth value = {dates[37].value}  class_style = {dates[37].class_style}  />
              <OutDayOfMonth value = {dates[38].value}  class_style = {dates[38].class_style}  />
              <OutDayOfMonth value = {dates[39].value}  class_style = {dates[39].class_style}  />
              <OutDayOfMonth value = {dates[40].value}  class_style = {dates[40].class_style}  />
              <OutDayOfMonth value = {dates[41].value}  class_style = {dates[41].class_style}  />            
            </tr>
          </tbody>
        </table>
      </div>
    </ul>
    )
}

const now = new Date();

function App() {
  return (
    <Calendar date={now} />
  );
}

export default App;
