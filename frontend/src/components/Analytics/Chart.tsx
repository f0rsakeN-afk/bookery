import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../ui/chart";
import { NavLink } from "react-router-dom";

/* dummy data ho la */
export const salesData = [
  { date: "2025-05-21", sales: 1200 },
  { date: "2025-05-22", sales: 90 },
  { date: "2025-05-23", sales: 140 },
  { date: "2025-05-24", sales: 2000 },
  { date: "2025-05-25", sales: 160 },
  { date: "2025-05-26", sales: 1800 },
  { date: "2025-05-27", sales: 2400 },
  { date: "2025-05-28", sales: 170 },
  { date: "2025-05-29", sales: 150 },
  { date: "2025-05-30", sales: 210 },
  { date: "2025-05-31", sales: 250 },
];

const AnalyticsLineChart = () => {
  const chartConfig = {
    sales: {
      label: "Sales",
      color: "var(--chart-1)",
    },
  } satisfies ChartConfig;

  return (
    <div className="container mx-auto max-w-6xl px-2 xl:px-0 my-6  xl:my-16">
      <section className="flex justify-end pb-2">
        <NavLink
          to="/users"
          className="text-sm font-medium text-muted-foreground hover:text-primary hover:underline underline-offset-4 transition-colors duration-100"
        >
          View All Users
        </NavLink>
      </section>
      <Card className="font-inter">
        <CardHeader>
          <CardTitle>Sales Line Chart</CardTitle>
          <CardDescription>May 21 - May 31, 2025</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig}>
            <LineChart
              data={salesData}
              margin={{
                top: 20,
                right: 20,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="date"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => value.slice(5)}
              />
              <YAxis tickLine={false} axisLine={false} />
              <ChartTooltip
                cursor={{ strokeDasharray: "3 3" }}
                content={<ChartTooltipContent hideLabel={false} />}
              />
              <Line
                type="monotone"
                dataKey="sales"
                stroke="var(--color-sales)"
                strokeWidth={2}
                dot={{ r: 3 }}
              />
            </LineChart>
          </ChartContainer>
        </CardContent>
        <CardFooter className="flex-col items-start gap-2 text-sm">
          <div className="text-muted-foreground leading-none">
            Showing total sales for the last 11 days
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default AnalyticsLineChart;
