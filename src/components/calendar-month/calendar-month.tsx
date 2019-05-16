import { Component } from "@stencil/core";

@Component({
  tag: "calendar-month",
  styleUrl: "calendar-month.scss"
})
export class CalendarMonth {
  render() {
    const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
    const months = [
      { name: "January", days: [...Array(32).keys()], dateStart: 2 },
      { name: "February", days: [...Array(29).keys()], dateStart: 4 },
      { name: "March", abr: "Mar", days: [...Array(32).keys()], dateStart: 4 },
      { name: "April", days: [...Array(31).keys()], dateStart: 0 },
      { name: "May", days: [...Array(32).keys()], dateStart: 2 },
      { name: "June", days: [...Array(31).keys()], dateStart: 5 },
      { name: "July", days: [...Array(32).keys()], dateStart: 0 },
      { name: "August", days: [...Array(32).keys()], dateStart: 3 },
      { name: "September", days: [...Array(31).keys()], dateStart: 6 },
      { name: "October", days: [...Array(32).keys()], dateStart: 1 },
      { name: "November", days: [...Array(31).keys()], dateStart: 4 },
      { name: "December", days: [...Array(32).keys()], dateStart: 6 }
    ];

    months.map(month => {
      month.days.splice(0, 1);
    });

    months.map(month => {
      for (var i = 0; i < month.dateStart; i++) {
        month.days.unshift(null);
      }
    });

    return (
      <div>
        <div class="button-wrapper">
          <button data-action="slideLeft"> earlier </button>
          <div id="selectedDate" />
          <button data-action="slideRight"> later </button>
        </div>
        {months.map(month => {
          return (
            <div class="wrapper">
              <div class="carousel" data-target="carousel">
                <h1>{month.name}</h1>
                <div class="day-wrapper">
                  {days.map(day => {
                    return <div>{day}</div>;
                  })}
                </div>
                <div class="day-grid">
                  {month.days.map(day => {
                    return (
                      <div
                        class="card"
                        onClick={() =>
                          (document.getElementById(
                            "selectedDate"
                          ).innerHTML = `${day} ${month.name} 2019`)
                        }
                      >
                        {day}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
