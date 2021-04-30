import { Flex, Box, Text, Image } from '@chakra-ui/react'

export function Banner() {
    return (
        <Flex
            bgImage="url('./Background.png')"
            bgPosition="center"
            bgRepeat="no-repeat"
            h="368px"
            color="gray.50"
            align="center"
            justify="space-around"
        >
            <Box
                w=""
            >
                <Text
                    fontWeight="500"
                    fontSize="36px"
                    lineHeight="54px"
                    mb="20px"
                >
                    5 Continentes, <br /> infinitas possibilidades.
                </Text>
                <Text
                    fontWeight="400"
                    fontSize="20px"
                    lineHeight="30px"
                >
                    Chegou a hora de tirar do papel a viagem que você <br /> sempre sonhou.
                </Text>
            </Box>
            <Image src="./Airplane.png" alt="airplane" transform="rotate(3deg)" mt="100px" />
            
        </Flex>
    )
}