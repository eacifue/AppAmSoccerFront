import React from 'react'
import {Block, Card, Flex, Text, Title} from '@tremor/react'

const CardBase = ({data}) => {

  return (
    <Card key={data.title} marginTop='mt-6' decoration="top" decorationColor="indigo" >
      <Flex>
        <Block>
          <Title>{data.title}</Title>
          <Text>{data.content}</Text>
        </Block>
      </Flex>
    </Card>
  )
}

export default CardBase
