import { NavLink } from "react-router-dom";
import {
  CartesianGrid,
  XAxis,
  YAxis,
  AreaChart,
  Area,
} from "recharts";
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
import { useGetSalesAnalytics } from "@/services/analytics";

const AnalyticsAreaChart = () => {
  const chartConfig = {
    sales: {
      label: "Sales",
      color: "var(--chart-1)",
    },
  } satisfies ChartConfig;

  const { data, isLoading, isError } = useGetSalesAnalytics();

  if (isLoading) return <h2 className="text-center py-10">Loading...</h2>;

  if (isError || !data || !Array.isArray(data.data)) {
    return (
      <div className="text-center py-10 text-destructive">
        Failed to load sales data.
      </div>
    );
  }

  const salesData = data.data;
  const startDate = salesData?.[0]?.date || "N/A";
  const endDate = salesData?.[salesData.length - 1]?.date || "N/A";

  return (
    <div className="container mx-auto max-w-6xl px-2 xl:px-0 my-6 xl:my-16">
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
          <CardTitle>Sales Area Chart</CardTitle>
          <CardDescription>
            {startDate} - {endDate}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig}>
            <AreaChart
              data={salesData}
              margin={{ top: 20, right: 20, left: 0, bottom: 0 }}
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
              <Area
                type="monotone"
                dataKey="sales"
                stroke="var(--color-sales)"
                fill="var(--color-sales)"
                fillOpacity={0.3}
                strokeWidth={2}
                dot={{ r: 3 }}
              />
            </AreaChart>
          </ChartContainer>
        </CardContent>
        <CardFooter className="flex-col items-start gap-2 text-sm">
          <div className="text-muted-foreground leading-none">
            Showing total sales for the last {salesData.length} days
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default AnalyticsAreaChart;
