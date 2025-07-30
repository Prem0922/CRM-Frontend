import React from 'react';
import {
  Box,
  VStack,
  Text,
  Link as ChakraLink,
  Icon,
  Button,
  Flex,
} from '@chakra-ui/react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import {
  FiHome,
  FiCreditCard,
  FiUsers,
  FiMap,
  FiBriefcase,
  FiClock,
  FiAlertTriangle,
  FiLogOut,
} from 'react-icons/fi';

const Navbar: React.FC = () => {
  const location = useLocation();
  const { isAuthenticated, userName, logout } = useAuth();

  const navItems = [
    { name: 'Home', path: '/', icon: FiHome },
    { name: 'Cards', path: '/cards', icon: FiCreditCard },
    { name: 'Customers', path: '/customers', icon: FiUsers },
    { name: 'Trips', path: '/trips', icon: FiMap },
    { name: 'Cases', path: '/cases', icon: FiBriefcase },
    { name: 'Tap History', path: '/tap-history', icon: FiClock },
    { name: 'Fare Disputes', path: '/fare-disputes', icon: FiAlertTriangle },
  ];

  if (!isAuthenticated) {
    return null;
  }

  return (
    <Box
      position="fixed"
      left={0}
      w="250px"
      h="100vh"
      bg="white"
      borderRight="1px"
      borderRightColor="gray.200"
      py={8}
    >
      <VStack spacing={1} align="stretch" h="100%">
        <Box px={8} mb={8}>
          <Text fontSize="lg" fontWeight="bold" color="blue.600">
            Transit Card System
          </Text>
          {userName && (
            <Text fontSize="sm" color="gray.600" mt={2}>
              Welcome, {userName}
            </Text>
          )}
        </Box>

        {navItems.map((item) => (
          <ChakraLink
            key={item.path}
            as={Link}
            to={item.path}
            px={8}
            py={3}
            display="flex"
            alignItems="center"
            color={location.pathname === item.path ? 'blue.600' : 'gray.700'}
            bg={location.pathname === item.path ? 'blue.50' : 'transparent'}
            _hover={{
              bg: 'gray.50',
              color: 'blue.600',
              textDecoration: 'none',
            }}
          >
            <Icon as={item.icon} mr={3} />
            <Text>{item.name}</Text>
          </ChakraLink>
        ))}

        <Flex flex={1} />

        <Box px={8} py={4} borderTop="1px" borderTopColor="gray.200">
          <Button
            leftIcon={<Icon as={FiLogOut} />}
            variant="ghost"
            colorScheme="red"
            size="sm"
            width="full"
            onClick={logout}
          >
            Logout
          </Button>
        </Box>
      </VStack>
    </Box>
  );
};

export default Navbar; 