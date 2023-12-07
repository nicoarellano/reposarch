import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import Badge from "@mui/material/Badge";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { PickersDay, PickersDayProps } from "@mui/x-date-pickers/PickersDay";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { DayCalendarSkeleton } from "@mui/x-date-pickers/DayCalendarSkeleton";
import { arcn5005Lectures } from "../../app/arcn5005Lectures";

const classDays = arcn5005Lectures.map((lecture) => lecture.date);
const quizes = [dayjs("2023-10-05"), dayjs("2023-11-30")];
const assignments = [
  dayjs("2023-10-19"),
  dayjs("2023-11-16"),
  dayjs("2023-12-07"),
];
const fallBreak = [dayjs("2023-10-26")];

const initialValue = dayjs();

function ServerDay(
  props: PickersDayProps<Dayjs> & { highlightedDays?: Dayjs[] }
) {
  const { highlightedDays = [], day, outsideCurrentMonth, ...other } = props;

  const isSelected =
    !outsideCurrentMonth &&
    highlightedDays.some((date) => date.isSame(day, "day"));

  const isClassDay = classDays.some((classDay) => classDay.isSame(day, "day"));
  const isAssignmentDay = assignments.some((assignmentDay) =>
    assignmentDay.isSame(day, "day")
  );
  const isQuizDay = quizes.some((quizDay) => quizDay.isSame(day, "day"));
  const isFallBreakDay = fallBreak.some((fallBreakDay) =>
    fallBreakDay.isSame(day, "day")
  );
  const isFinalAssignmentDay = day.isSame(dayjs("2023-12-20"), "day");

  return (
    <Badge
      key={day.toString()}
      overlap="circular"
      badgeContent={
        isFinalAssignmentDay
          ? "🏁"
          : isAssignmentDay
          ? "🔴"
          : isQuizDay
          ? "🟡"
          : isFallBreakDay
          ? "✖️"
          : isSelected
          ? "🔵"
          : undefined
      }
    >
      <PickersDay
        {...other}
        outsideCurrentMonth={outsideCurrentMonth}
        day={day}
        onMouseOver={() => {
          if (isClassDay) {
          }
        }}
      />
    </Badge>
  );
}

export default function Calendar() {
  const [isLoading] = React.useState(false);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar
        defaultValue={initialValue}
        loading={isLoading}
        renderLoading={() => <DayCalendarSkeleton />}
        slots={{
          day: ServerDay,
        }}
        slotProps={{
          day: {
            highlightedDays: classDays,
          } as PickersDayProps<Dayjs> & { highlightedDays?: Dayjs[] },
        }}
      />
    </LocalizationProvider>
  );
}
