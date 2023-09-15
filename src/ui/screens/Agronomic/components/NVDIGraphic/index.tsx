import { Box, Text } from "@chakra-ui/react";
import {
  ComposedChart,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Area,
  Bar,
  ResponsiveContainer,
} from "recharts";

export const NVDIGraphic = () => {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <Box
      boxShadow="0px 1px 3px #00000015"
      pt="11px"
      borderRadius="10px"
      pl="18px"
      pb="10px"
    >
      <Text fontWeight={800} fontSize="1em" color="#2D3748" mb="21px">
        NVDI médio e Chuva média por área (mm/ha)
      </Text>
      <ResponsiveContainer maxHeight={240}>
        <ComposedChart data={data} barGap="10px" barSize="3px">
          <defs>
            <linearGradient id="area-gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#4FD1C5" stopOpacity={0.26} />
              <stop offset="95%" stopColor="#4FD1C5" stopOpacity={0} />
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
              transform: "translateX(10px) translateY(10px) ",
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

          <Bar dataKey="pv" barSize={20} fill="url(#bar-gradient)" />

          <Area
            type="natural"
            dataKey="uv"
            stroke="#4FD1C5"
            strokeWidth={"2.64px"}
            fillOpacity={1}
            fill="url(#area-gradient) "
          />
        </ComposedChart>
      </ResponsiveContainer>
    </Box>
  );
};
