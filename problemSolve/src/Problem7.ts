{

    enum Day {
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
    }

    function getDayType(day: Day): string {
        switch (day) {
            case Day.Saturday:
            case Day.Friday:
                return "Weekend";
            default:
                return "Weekday";
        }
    }

    // Example usage
    console.log(getDayType(Day.Monday)); // "Weekday"
    console.log(getDayType(Day.Friday)); // "Weekend"


}