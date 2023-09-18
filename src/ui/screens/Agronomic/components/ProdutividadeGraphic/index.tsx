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

export const ProdutividadeGraphic = ({ data }: { data: any[] }) => {
  return (
    <Box
      mt="41px"
      boxShadow="0px 1px 3px #00000015"
      pt="11px"
      borderRadius="10px"
      pl="18px"
      pb="10px"
    >
      <Text fontWeight={800} fontSize="1em" color="gray.900" mb="21px">
        Produtividade média por área (Sc/ha)
      </Text>

      <ResponsiveContainer maxHeight={240}>
        <AreaChart
          height={250}
          data={data}
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
            dataKey="value"
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
