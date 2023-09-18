import { PropsWithChildren } from "react";
import { Box, Flex, Text, Image, keyframes } from "@chakra-ui/react";
import RefreshIcon from "../../assets/icons/refresh.svg";
import { ISOToDateString } from "../../../infra/utils/iso-to-date-string";

interface RefreshContainerProps extends PropsWithChildren {
  lastRefresh: string;
  isLoading?: boolean;
  handleRefresh?(): Promise<void>;
}

const spin = keyframes`
  from { transform: rotate(0deg)}
  to { transform: rotate(360deg)}
`;

export const RefreshContainer = ({
  lastRefresh,
  children,
  isLoading,
  handleRefresh,
}: RefreshContainerProps) => {
  const { date, hours } = ISOToDateString(lastRefresh);

  return (
    <Box
      background="white"
      borderRadius="13px"
      boxShadow="0 0.9px 1.8px #00000025"
      pl="45px"
      pb="30px"
    >
      <Flex justifyContent="flex-end">
        <Box
          display="flex"
          flexDirection="column"
          alignItems="flex-end"
          margin="11px 10px"
        >
          <Image
            src={RefreshIcon}
            height="26px"
            animation={isLoading ? `${spin} infinite 2s` : undefined}
            onClick={handleRefresh}
            cursor="pointer"
          />
          <Text
            fontWeight={400}
            color="alpha800"
            fontSize=".75em"
            marginTop="6px"
          >
            Atualizado às {hours}
          </Text>
          <Text fontWeight={400} color="alpha800" fontSize=".75em">
            no dia {date}
          </Text>
        </Box>
      </Flex>

      {children}
    </Box>
  );
};
