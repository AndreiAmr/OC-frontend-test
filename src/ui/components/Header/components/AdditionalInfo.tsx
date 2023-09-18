import { Flex, Text, Box, Image } from "@chakra-ui/react";
import UserIcon from "../../../assets/icons/user.svg";

interface AdditionalInfoProps {
  title: string;
  description: string;
}

export const AdditionalInfo = ({ title, description }: AdditionalInfoProps) => {
  return (
    <Box>
      <Text textAlign="right" fontWeight={700} color="alpha400">
        {title}
      </Text>

      <Flex gap="10px" alignItems="center">
        <Image src={UserIcon} />
        <Text textAlign="right" fontWeight={700} color="alpha800">
          {description}
        </Text>
      </Flex>
    </Box>
  );
};
