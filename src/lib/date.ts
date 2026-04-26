type MonthFormat = "long" | "short";

export function formatDate(date: Date, month: MonthFormat = "long") {
  return date.toLocaleDateString("zh-TW", {
    year: "numeric",
    month,
    day: "numeric",
  });
}
