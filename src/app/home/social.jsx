import {
  Badge,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Container,
  Heading,
  HStack,
  SimpleGrid,
  Text,
} from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

const cardData = [
  {
    id: 1,
    title: 'Blueberry Bliss Smoothie',
    description:
      'A creamy blend of fresh blueberries, bananas, and yogurt for a refreshing treat.',
    imageUrl:
      'https://images.unsplash.com/photo-1615478503562-ec2d8aa0e24e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fCVFQyU4QSVBNCVFQiVBQyVCNCVFQiU5NCU5NHxlbnwwfHwwfHx8MA%3D%3D',
    badges: ['Fruity', 'Healthy', 'Smooth', 'Dairy'],
    buttonText: 'Order Now',
  },
  {
    id: 2,
    title: 'Hazelnut Mocha',
    description:
      'Indulge in the rich combination of hazelnut syrup, chocolate, and freshly brewed espresso.',
    imageUrl:
      'https://images.unsplash.com/photo-1615478503562-ec2d8aa0e24e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fCVFQyU4QSVBNCVFQiVBQyVCNCVFQiU5NCU5NHxlbnwwfHwwfHx8MA%3D%3D',
    badges: ['Nutty', 'Chocolate', 'Caffeine'],
    buttonText: 'Try It',
  },
  {
    id: 3,
    title: 'Coconut Water Refresher',
    description:
      'A hydrating mix of pure coconut water with a splash of pineapple juice.',
    imageUrl:
      'https://images.unsplash.com/photo-1615478503562-ec2d8aa0e24e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fCVFQyU4QSVBNCVFQiVBQyVCNCVFQiU5NCU5NHxlbnwwfHwwfHx8MA%3D%3D',
    badges: ['Tropical', 'Hydration', 'Light'],
    buttonText: 'Cool Down',
  },
  {
    id: 4,
    title: 'Pumpkin Spice Latte',
    description:
      'Embrace the season with a cozy blend of pumpkin spice and espresso topped with whipped cream.',
    imageUrl:
      'https://images.unsplash.com/photo-1615478503562-ec2d8aa0e24e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fCVFQyU4QSVBNCVFQiVBQyVCNCVFQiU5NCU5NHxlbnwwfHwwfHx8MA%3D%3D',
    badges: ['Seasonal', 'Spiced', 'Creamy'],
    buttonText: 'Taste Autumn',
  },
]

const cardData2 = [
  {
    id: 1,
    title: 'Blueberry Bliss Smoothie',
    description:
      'A creamy blend of fresh blueberries, bananas, and yogurt for a refreshing treat.',
    imageUrl:
      'https://images.unsplash.com/photo-1615478503562-ec2d8aa0e24e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fCVFQyU4QSVBNCVFQiVBQyVCNCVFQiU5NCU5NHxlbnwwfHwwfHx8MA%3D%3D',
    badges: ['Fruity', 'Healthy'],
  },
  {
    id: 2,
    title: 'Hazelnut Mocha',
    description:
      'Indulge in the rich combination of hazelnut syrup, chocolate, and freshly brewed espresso.',
    imageUrl:
      'https://images.unsplash.com/photo-1615478503562-ec2d8aa0e24e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fCVFQyU4QSVBNCVFQiVBQyVCNCVFQiU5NCU5NHxlbnwwfHwwfHx8MA%3D%3D',
    badges: ['Nutty', 'Chocolate', 'Caffeine'],
  },
]

const Social = () => {
  return (
    <Container>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} className="gap-5 mt-4">
        {cardData.map((card, index) => (
          <Card key={card.description} maxW="xl" bgColor="gray.100">
            <CardBody className="flex flex-col gap-4">
              <Image
                objectFit="cover"
                width={1200}
                height={1200}
                src={card.imageUrl}
                alt={card.title}
                className="aspect-square object-cover"
              />
              <Box>
                <Heading size="md" mb="2">
                  {card.title}
                </Heading>
                <Text>{card.description}</Text>
                <HStack mt="4">
                  {card.badges.map((badge, index) => (
                    <Badge key={index} className="bg-slate-300">
                      {badge}
                    </Badge>
                  ))}
                </HStack>
              </Box>
            </CardBody>
            <CardFooter>
              <Button>{card.buttonText}</Button>
            </CardFooter>
          </Card>
        ))}
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, xl: 2 }} gap="3" mt={4}>
        {cardData2.map((card, index) => (
          <Card
            key={card.id}
            bgColor="gray.100"
            flexDirection={{ base: 'column', md: 'row' }}>
            <CardBody className="flex flex-col md:flex-row gap-4">
              <Image
                objectFit="cover"
                width={1200}
                height={1200}
                src={card.imageUrl}
                alt={card.title}
                className="w-1/3"
              />
              <Box>
                <Heading size="md" className="line-clamp-1 mb-2">
                  {card.title}
                </Heading>
                <Text className="line-clamp-2">{card.description}</Text>
                <HStack className="mt-4">
                  {card.badges.map((badge, index) => (
                    <Badge key={index}>{badge}</Badge>
                  ))}
                </HStack>
              </Box>
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>
    </Container>
  )
}

export default Social
