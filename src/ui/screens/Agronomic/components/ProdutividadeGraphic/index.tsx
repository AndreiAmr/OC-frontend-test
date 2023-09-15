import { Box, Text } from "@chakra-ui/react";
import {
  AreaChart,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
  Area,
  ResponsiveContainer,
} from "recharts";

export const ProdutividadeGraphic = () => {
  return (
    <Box
      mt="41px"
      boxShadow="0px 1px 3px #00000015"
      pt="11px"
      borderRadius="10px"
      pl="18px"
      pb="10px"
    >
      <Text fontWeight={800} fontSize="1em" color="#2D3748" mb="21px">
        Produtividade média por área (Sc/ha)
      </Text>

      <ResponsiveContainer maxHeight={240}>
        <AreaChart
          height={250}
          data={[
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
              name: "Page",
              uv: 3490,
              pv: 4300,
              amt: 2100,
            },
          ]}
          margin={{ top: 30, left: 0, bottom: 0 }}
          title="Produtividade média por área (Sc/ha)"
        >
          <defs>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#2D3748" stopOpacity={0.4} />
              <stop offset="95%" stopColor="#2D3748" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid stroke="#E2E8F0" strokeDasharray="3 3" />

          <XAxis
            dataKey="name"
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
            fontSize="10px"
            tickSize={0}
            style={{
              transform: "translateX(-10px)",
            }}
            axisLine={false}
          />

          <Tooltip />

          <Area
            type="monotone"
            dataKey="pv"
            stroke="#2D3748"
            strokeWidth={"2.64px"}
            fillOpacity={1}
            fill="url(#colorPv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </Box>
  );
};
