<script context="module">
  export function iso(date) {
    const pad = n => n < 10 ? "0" + n : n;
    return date.getFullYear() + "-" + pad(date.getMonth()+1) + "-" + pad(date.getDate());
  }
</script>

<script>
  export let value = iso(new Date());
  export let days = 'Su|Mo|Tu|We|Th|Fr|Sa'.split('|');
  export let months = 'Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec'.split('|');
  export let start = 0; // first day of the week (0 = Sunday, 1 = Monday)
  export let offset = 0; // offset in months from currently selected date
  export let allowPastDates = true; // new prop to enable/disable past date selection

  let date = iso(new Date());
  let today = iso(new Date());

  $: acceptDate(value);

  function acceptDate(value) {
    const newDate = new Date(value);
    
    if (!isNaN(newDate)) {
      date = iso(newDate);
    }
  }

  function go(direction) {
    offset = offset + direction;
  }

  function selectDate(newValue) {
    if (!allowPastDates && newValue < today) {
      return; // Don't allow selection of past dates if not allowed
    }
    date = newValue;
    value = newValue;
    offset = 0;
  }

  $: viewDate = viewDateFrom(date, offset);
  $: month = months[viewDate.getMonth()];
  $: year = viewDate.getFullYear();
  $: weeks = weeksFrom(viewDate, date, start);

  function viewDateFrom(date, offset) {
    var viewDate = new Date(date);
    viewDate.setMonth(viewDate.getMonth() + offset);
    return viewDate;
  }

  function weeksFrom(viewDate, date, start) {
    var first = new Date(viewDate.getTime());
    first.setDate(1);
    first.setDate(first.getDate() + ((start - first.getDay() - 7) % 7));
    var last = new Date(viewDate.getTime());
    last.setDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 0).getDate());
    last.setDate(last.getDate() + ((start - last.getDay() + 6) % 7));
    var d = new Date(first.getTime()),
        M = viewDate.getMonth(),
        Y = viewDate.getFullYear(),
        week = [],
        weeks = [week];
    while (d.getTime() <= last.getTime()) {
      var dd = d.getDate(),
          mm = d.getMonth(),
          yy = d.getFullYear(),
          value = iso(d);
      week.push({
        date: dd,
        value,
        class: [
          date === value ? "selected" : "",
          mm == M ? "" : ((mm > M ? yy >= Y : yy > Y) ? "future" : "past"),
          value < today ? "past-date" : ""
        ].join(' ')
      });
      d = new Date(d.getFullYear(), d.getMonth(), d.getDate() + 1);
      if (d.getDay() === start) {
        week = [];
        weeks.push(week);
      }
    }
    return weeks;
  }
</script>

<table class="main-table">
  <tr>
    <td class="btn" on:click={() => go(-1)}>&#9664;</td>
    <td colspan=5>{month} {year}</td>
    <td class="btn" on:click={() => go(+1)}>&#9654;</td>
  </tr>
  <tr>
    {#each days as day}
    <th>{day}</th>
    {/each}
  </tr>
  {#each weeks as week}
  <tr>
    {#each week as day}
    <td 
      class="btn {day.class}" 
      on:click={() => selectDate(day.value)}
      class:disabled={!allowPastDates && day.value < today}
    >{day.date}</td>
    {/each}
  </tr>
  {/each}
</table>

<style>
  .main-table {
    width: 100%;
    height: 100%;
  }
  td, th {
    font-size: 15px;
    width: 14%;
    text-align: center;
    border-radius: 4px;
    border: 1px solid black;
    line-height: 80%;
    margin: 0;
    padding: 0;
  }
  td.past, td.future {
    opacity: 0.5;
  }
  .btn {
    cursor: pointer;
  }
  .btn:hover:not(.disabled) {
    background: gray;
    color: white;
  }
  td.selected {
    color: #ffffff;
    font-weight: bold;
    background-color: black;
    border-color: black;
  }
  td.past-date {
    background-color: #D9D9D9;
  }
  .disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  @media only screen and (max-width: 750px){
    td, th {
      font-size: 12px;
      width: 14%;
      text-align: center;
      border-radius: 4px;
      border: 1px solid black;
      line-height: 80%;
      margin: 0;
      padding: 0;
    }
  }
</style>
