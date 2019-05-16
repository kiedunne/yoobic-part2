import { Component } from "@stencil/core";

@Component({
  tag: "calendar-month",
  styleUrl: "calendar-month.scss"
})
export class CalendarMonth {
  render() {
    const months = [
      { name: "January", days: [...Array(31).keys()] },
      { name: "February", days: [...Array(28).keys()] },
      { name: "March", abr: "Mar", days: [...Array(31).keys()] },
      { name: "April", days: [...Array(30).keys()] },
      { name: "May", days: [...Array(31).keys()] },
      { name: "June", days: [...Array(30).keys()] },
      { name: "July", days: [...Array(31).keys()] },
      { name: "August", days: [...Array(31).keys()] },
      { name: "September", days: [...Array(30).keys()] },
      { name: "October", days: [...Array(31).keys()] },
      { name: "November", days: [...Array(30).keys()] },
      { name: "December", days: [...Array(31).keys()] }
    ];
    return (
      <div>
        <div class="button-wrapper">
        <button data-action="slideLeft"> earlier </button>
        <button data-action="slideRight"> later </button>
        </div>
        {months.map(month => {
          return (
            <div>
              <h1>{month.name}</h1>

              <div class='wrapper'>
                {month.days.map(day => {
                  return <div>{day}</div>;
                })}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
