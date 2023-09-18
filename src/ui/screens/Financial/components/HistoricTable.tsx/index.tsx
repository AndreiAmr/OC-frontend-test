import { HistoricTableDataProps } from "@/infra/types/financial";
import { Box, Skeleton, Table, Tbody, Th, Thead, Tr } from "@chakra-ui/react";

interface HistoricTableProps {
  isLoading: boolean;
  data?: HistoricTableDataProps[];
}

export const HistoricTable = ({ isLoading, data }: HistoricTableProps) => {
  if (isLoading) {
    return <Skeleton borderRadius="12px" width="480px" />;
  }
  return (
    <Box
      background="white"
      borderRadius={"12px"}
      padding="24px"
      boxShadow="1px 0px 3px #00000015"
    >
      <Table>
        <Thead>
          <Tr>
            <Th fontSize=".8em" color="alpha850" fontWeight={800}>
              Histórico
            </Th>
            <Th
              fontSize=".8em"
              textAlign="right"
              fontWeight={500}
              color="alpha850"
            >
              2019
            </Th>
            <Th
              fontSize=".8em"
              textAlign="right"
              fontWeight={500}
              color="alpha850"
            >
              2020
            </Th>
          </Tr>
        </Thead>

        <Tbody>
          {data?.map((item) => (
            <Tr key={item.title}>
              <Th color="alpha800" fontWeight={500} fontSize=".85em">
                {item.title}
              </Th>
              <Th color="alpha800" fontWeight={500} fontSize=".85em">
                {item[2019]}
              </Th>
              <Th color="alpha800" fontWeight={500} fontSize=".85em">
                {item[2020]}
              </Th>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};
