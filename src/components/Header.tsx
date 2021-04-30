import { Flex, Image } from '@chakra-ui/react'

export function Header() {
    return (
        <Flex
            h="100px"
            align="center"
            justify="center"
        >
            <Image src="./Logo.png" alt="Worldtrip" />
        </Flex>
    )
}