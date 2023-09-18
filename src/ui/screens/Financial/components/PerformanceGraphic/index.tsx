import { Box, Skeleton, Text } from "@chakra-ui/react";
import {
  ResponsiveContainer,
  ComposedChart,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Bar,
  Area,
} from "recharts";
import { PerformanceGraphicDataProps } from "../../../../../infra/types/financial";

interface PerformanceGraphicProps {
  isLoading: boolean;
  data?: PerformanceGraphicDataProps[];
}

export const PerformanceGraphic = ({
  isLoading,
  data,
}: PerformanceGraphicProps) => {
  // const data = [
  //   {
  //     name: "Page A",
  //     uv: 4000,
  //     pv: 2400,
  //     amt: 2400,
  //   },
  //   {
  //     name: "Page B",
  //     uv: 3000,
  //     pv: 1398,
  //     amt: 2210,
  //   },
  //   {
  //     name: "Page C",
  //     uv: 2000,
  //     pv: 9800,
  //     amt: 2290,
  //   },
  //   {
  //     name: "Page D",
  //     uv: 2780,
  //     pv: 3908,
  //     amt: 2000,
  //   },
  //   {
  //     name: "Page E",
  //     uv: 1890,
  //     pv: 4800,
  //     amt: 2181,
  //   },
  //   {
  //     name: "Page F",
  //     uv: 2390,
  //     pv: 3800,
  //     amt: 2500,
  //   },
  //   {
  //     name: "Page G",
  //     uv: 3490,
  //     pv: 4300,
  //     amt: 2100,
  //   },
  // ];

  if (isLoading) {
    return <Skeleton w="100%" borderRadius="12px" />;
  }

  return (
    <Box
      display="flex"
      flexDir="column"
      flex={1}
      boxShadow="0px 1px 3px #00000015"
      pt="11px"
      borderRadius="10px"
      pl="18px"
      pb="10px"
      background="white"
    >
      <Text color="gray.850" fontWeight={800} fontSize="1em" my="14px">
        Histórico de Perfomance
      </Text>

      <ResponsiveContainer maxHeight={240}>
        <ComposedChart data={data} barGap="10px" barSize="3px">
          <defs>
            <linearGradient id="area-gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#1A8C6F" stopOpacity={0.26} />
              <stop offset="95%" stopColor="#1A8C6F" stopOpacity={0} />
            </linearGradient>

            <linearGradient id="bar-gradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="5%" stopColor="#313860" stopOpacity={1} />
              <stop offset="95%" stopColor="#151928" stopOpacity={1} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="name"
            allowDataOverflow={false}
            overflow="hidden"
            fontSize="10px"
            tickSize={0}
            style={{
              transform: "translateY(10px) ",
            }}
            axisLine={false}
          />
          <YAxis
            fontSize="10px"
            tickSize={0}
            style={{
              transform: "translateX(10px)",
            }}
            axisLine={false}
            orientation="right"
            dataKey="pv"
            yAxisId="right"
          />
          <YAxis
            tickSize={0}
            fontSize="10px"
            scale="sequential"
            allowDataOverflow={false}
            z={999}
            axisLine={false}
            style={{
              transform: "translateX(-10px)",
            }}
          />
          <Tooltip />

          <CartesianGrid stroke="#E2E8F0" strokeDasharray={"3 3"} />

          <Bar
            dataKey="demand"
            barSize={10}
            fill="url(#bar-gradient)"
            radius={10}
          />

          <Area
            type="natural"
            dataKey="value"
            stroke="#1A8C6F"
            strokeWidth={"2.64px"}
            fillOpacity={1}
            fill="url(#area-gradient) "
          />
        </ComposedChart>
      </ResponsiveContainer>
    </Box>
  );
};
