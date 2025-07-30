import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Card,
  CardBody,
  Icon,
  VStack,
} from '@chakra-ui/react'
import { FaCreditCard, FaUsers, FaRoute, FaFolder, FaHistory } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const QuickAccessCard = ({ to, icon, title, description }: {
  to: string;
  icon: any;
  title: string;
  description: string;
}) => (
  <Card
    as={Link}
    to={to}
    _hover={{
      transform: 'translateY(-4px)',
      shadow: 'lg',
      textDecoration: 'none'
    }}
    transition="all 0.2s"
  >
    <CardBody>
      <VStack spacing={4} align="center">
        <Icon as={icon} boxSize={8} color="blue.500" />
        <Heading size="md">{title}</Heading>
        <Text color="gray.600" textAlign="center">{description}</Text>
      </VStack>
    </CardBody>
  </Card>
)

const Home = () => {
  const quickAccess = [
    {
      to: '/card-search',
      icon: FaCreditCard,
      title: 'Card Search',
      description: 'Search and view detailed card information'
    },
    {
      to: '/customers',
      icon: FaUsers,
      title: 'Customers',
      description: 'View and update customer information'
    },
    {
      to: '/trips',
      icon: FaRoute,
      title: 'Trips',
      description: 'Track trip history and manage incomplete trips'
    },
    {
      to: '/cases',
      icon: FaFolder,
      title: 'Cases',
      description: 'Handle customer support cases and requests'
    },
    {
      to: '/tap-history',
      icon: FaHistory,
      title: 'Tap History',
      description: 'View detailed tap history and device interactions'
    },
    {
      to: '/register-card',
      icon: FaCreditCard,
      title: 'Register Card',
      description: 'Register a new transit card'
    }
  ]

  return (
    <Box>
      <Heading mb={2}>Welcome to CRM Application</Heading>
      <Text color="gray.600" mb={8}>
        Manage transit cards, customer information, and trip history all in one place.
      </Text>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
        {quickAccess.map((item) => (
          <QuickAccessCard key={item.to} {...item} />
        ))}
      </SimpleGrid>
    </Box>
  )
}

export default Home 