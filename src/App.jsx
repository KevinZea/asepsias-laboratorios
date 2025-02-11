
import React, { useEffect } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  Grid,
  Link,
  useColorModeValue,
  Icon,
  Flex,
  SimpleGrid,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Image,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Badge,
  Divider,
} from '@chakra-ui/react';
import { PhoneIcon, EmailIcon, InfoIcon, ChatIcon, CheckIcon } from '@chakra-ui/icons';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';
import logo from "./assets/logo.jpg";
import agua from "./assets/agua.jpg";
import desinfectante from "./assets/desinfectante.jpg";
import aceites from "./assets/aceites.jpg";
import aguas from "./assets/aguas.jpg";
import dieta from "./assets/dieta.jpg";
import alcoholes from "./assets/alcoholes.jpg";
import glicoles from "./assets/glicoles.jpg";
import asesoria from "./assets/asesoria.jpg";
import experiencia from "./assets/experiencia.jpg";
import certificaciones from "./assets/certificaciones.jpg";
import equipo from "./assets/equipo.jpg";
import lab from "./assets/lab.jpg";
import WhatsAppButton from './Components/WhatsappButton/WhatsappButton';
import envase from "./assets/envase.jpg";

const handleClickPdf = (url) => {
  // Construye la URL de WhatsApp
  // Redirecciona al usuario a WhatsApp
  window.open(url, '_blank');
};

const Header = () => {
  const bgColor = useColorModeValue('blue.600', 'blue.800');

  return (
    <Box bg={bgColor} py={3} color="white">
      <Container maxW="container.xl">
        <Grid
          templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }}
          gap={4}
          fontSize="sm"
        >
          <HStack spacing={2}>
            <Icon as={PhoneIcon} />
            <Text>+57 (1) 6017595967 - +57 (1) 6017018416</Text>
          </HStack>
          <HStack spacing={2}>
            <Icon as={EmailIcon} />
            <Text>ayuda@asepsiaslaboratorio.com</Text>
          </HStack>
          <HStack spacing={2}>
            <Icon as={InfoIcon} />
            <Text>Parque Empresarial Mosquera</Text>
          </HStack>
          <HStack spacing={2}>
            <Icon as={ChatIcon} />
            <Text>+57 317 782 8119</Text>
          </HStack>
        </Grid>
      </Container>
    </Box>
  );
};

// Navbar Component
const Navbar = () => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Box
      position="sticky"
      top="0"
      zIndex="1000"
      bg={bgColor}
      borderBottom="1px"
      borderColor={borderColor}
      boxShadow="sm"
    >
      <Container maxW="container.xl" py={4}>
        <Flex justify="space-between" align="center">
          <Image
            src={logo}
            alt="Logo"
            // h="40px"
            boxSize={20}
            borderRadius={"full"}
          />
          <HStack spacing={8} display={{ base: 'none', md: 'flex' }}>
            {['Inicio', 'Servicios', 'Nosotros', 'Contacto'].map((item) => (
              <ScrollLink
                key={item}
                to={item.toLowerCase()}
                smooth={true}
                duration={500}
              >
                <Button variant="ghost" _hover={{ color: 'blue.500' }}>
                  {item}
                </Button>
              </ScrollLink>
              // <Button
              //   variant="ghost"
              //   _hover={{ color: 'blue.500' }}
              //   onClick={() => {
              //     document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
              //   }}
              // >
              //   {item}
              // </Button>
            ))}
          </HStack>
          <Button colorScheme="blue" size="sm">
            Contactar Ahora
          </Button>
        </Flex>
      </Container>
    </Box>
  );
};

// Hero Section
const Hero = () => {
  const phoneNumber = '573177828119';
  const defaultMessage = encodeURIComponent('Hola, me gustaría saber más sobre tus servicios.'); // Codifica el mensaje para URL
  const handleClick = () => {
    // Construye la URL de WhatsApp
    const waUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;
    // Redirecciona al usuario a WhatsApp
    window.open(waUrl, '_blank');
  };
  return (
    <Box
      bg="blue.600"
      color="white"
      py={20}
      position="relative"
      overflow="hidden"
    >
      <Container maxW="container.xl">
        <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={8} alignItems="center">
          <VStack align="flex-start" spacing={6} data-aos="fade-right">
            <Badge colorScheme="green" px={4} py={2} borderRadius="full">
              Laboratorio Certificado
            </Badge>
            <Heading size="2xl" lineHeight="shorter">
              Soluciones de Calidad para su Laboratorio
            </Heading>
            <Text fontSize="xl">
              Especialistas en productos de higiene y salud pública
            </Text>
            <HStack spacing={4}>
              <Button
                size="lg"
                colorScheme="white"
                variant="outline"
                _hover={{ bg: 'white', color: 'blue.600' }}
                onClick={() => {handleClickPdf("https://drive.google.com/file/d/1l2XIaIOQH17aV3gtXdV3Lgknp5GMnRJF/view?usp=sharing")}}
              >
                1. Conocer Más
                <br />
                (Precontrato de Franquicias)
              </Button>
              <Button
                size="lg"
                bg="green.500"
                color={"white"}
                _hover={{ bg: 'green.600' }}
                leftIcon={<Icon as={FaWhatsapp} />}
                onClick={handleClick}
              >
                Contactar por WhatsApp
              </Button>
            </HStack>
          </VStack>
          <Box data-aos="fade-left" data-aos-delay="300">
            <Image
              src={agua}
              alt="Laboratory"
              borderRadius="xl"
              boxShadow="2xl"
              h={"xl"}
              ml={10}
            />
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

// Services Section with Accordion
const ServicesAccordion = () => {
  const services = [
    {
      title: "Desinfectantes Antivirales Anticovid19",
      description: "Productos especializados para la desinfección y protección contra virus, incluyendo COVID-19. Certificados y probados en laboratorio.",
      features: ["Alta eficacia", "Certificación internacional", "Uso profesional y doméstico"]
    },
    {
      title: "Aceites Esenciales Certificados",
      description: "Amplia gama de aceites esenciales puros y certificados para uso terapéutico y aromático.",
      features: ["100% naturales", "Certificación de pureza", "Múltiples aplicaciones"]
    },
    // ... Añadir más servicios según necesidad
  ];

  return (
    <Accordion allowMultiple>
      {services.map((service, index) => (
        <AccordionItem key={index}>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              <Text fontWeight="bold">{service.title}</Text>
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <VStack align="start" spacing={4}>
              <Text>{service.description}</Text>
              <Box>
                {service.features.map((feature, idx) => (
                  <HStack key={idx} spacing={2}>
                    <Icon as={CheckIcon} color="green.500" />
                    <Text>{feature}</Text>
                  </HStack>
                ))}
              </Box>
            </VStack>
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

// Statistics Section
const Stats = () => {
  const stats = [
    { number: "500+", label: "Productos" },
    { number: "1000+", label: "Clientes Satisfechos" },
    { number: "25+", label: "Años de Experiencia" },
    { number: "24/7", label: "Soporte Técnico" }
  ];

  return (
    <Box bg="gray.50" py={20}>
      <Container maxW="container.xl">
        <SimpleGrid columns={{ base: 2, md: 4 }} spacing={8}>
          {stats.map((stat, index) => (
            <VStack
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <Text fontSize="4xl" fontWeight="bold" color="blue.600">
                {stat.number}
              </Text>
              <Text color="gray.600">{stat.label}</Text>
            </VStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

// Footer Component
const Footer = () => {
  const socialLinks = [
    { icon: FaFacebook, url: "#" },
    { icon: FaTwitter, url: "#" },
    { icon: FaInstagram, url: "#" },
    { icon: FaLinkedin, url: "#" }
  ];

  return (
    <Box bg="gray.900" color="white" py={16}>
      <Container maxW="container.xl">
        <Grid templateColumns={{ base: '1fr', md: 'repeat(4, 1fr)' }} gap={8}>
          <VStack align="start" spacing={4}>
            <Heading size="md">Sobre Nosotros</Heading>
            <Text>
              Laboratorio especializado en productos de higiene y salud pública.
            </Text>
          </VStack>
          <VStack align="start" spacing={4}>
            <Heading size="md">Contacto</Heading>
            <HStack>
              <Icon as={PhoneIcon} />
              <Text>+57 317 782 8119</Text>
            </HStack>
            <HStack>
              <Icon as={EmailIcon} />
              <Text>ayuda@asepsiaslaboratorio.com</Text>
            </HStack>
          </VStack>
          <VStack align="start" spacing={4}>
            <Heading size="md">Enlaces Rápidos</Heading>
            <Link>Productos</Link>
            <Link>Servicios</Link>
            <Link>Certificaciones</Link>
            <Link>Contacto</Link>
          </VStack>
          <VStack align="start" spacing={4}>
            <Heading size="md">Síguenos</Heading>
            <HStack spacing={4}>
              {socialLinks.map((social, index) => (
                <Link key={index} href={social.url}>
                  <Icon
                    as={social.icon}
                    w={6}
                    h={6}
                    _hover={{ color: 'blue.400' }}
                    transition="all 0.3s"
                  />
                </Link>
              ))}
            </HStack>
          </VStack>
        </Grid>
        <Divider my={8} />
        <Text textAlign="center" fontSize="sm">
          © {new Date().getFullYear()} Asepsia's Laboratorio. Todos los derechos reservados.
        </Text>
      </Container>
    </Box>
  );
};

// MainContent Component
const MainContent = () => {
  const cardBg = useColorModeValue('white', 'gray.700');
  const hoverBg = useColorModeValue('blue.50', 'gray.600');

  const departments = [
    {
      title: "Desinfectantes Antivirales Anticovid19",
      icon: desinfectante,
      description: "Soluciones efectivas para la desinfección y protección contra virus.",
      link: "https://drive.google.com/file/d/1cFJ3sDfbVjo18lVlh-d4mVlxjWbGfgPz/view?usp=sharing",
      id: "4"
    },
    {
      title: "Aceites Esenciales Certificados",
      icon: aceites,
      description: "Productos naturales con certificación de calidad internacional.",
      id: "5",
      link: "https://drive.google.com/file/d/1HOcQf-yQn51sy73zoiLp0z2BQKi6Y6dm/view?usp=sharing"
    },
    {
      title: "Aguas Especiales y Técnicas",
      icon: aguas,
      description: "Aguas procesadas para uso específico en laboratorio.",
      id: "6",
    },
    {
      title: "Terapia y Dieta Anticáncer Gerson",
      icon: dieta,
      description: "Protocolos especializados para terapias alternativas.",
      link: "https://drive.google.com/file/d/145AsibIFuoWoZOX2GzcBiGdvPJTqyPzd/view?usp=sharing",
      id: "7",
    },
    {
      title: "Alcoholes de 7 tipos",
      icon: alcoholes,
      description: "Variedad de alcoholes para diferentes aplicaciones.",
      id: "8",
    },
    {
      title: "Glicoles de 7 tipos",
      icon: glicoles,
      description: "Compuestos químicos para usos específicos.",
      id: "9",
    },
    {
      title: "Asesorías en Salud Pública",
      icon: asesoria,
      description: "Consultoría especializada en temas de salud pública.",
      id: "10",
      link: "https://drive.google.com/file/d/145AsibIFuoWoZOX2GzcBiGdvPJTqyPzd/view?usp=sharing"
    },
    {
      title: "Envasado y Etiquetado",
      icon: envase,
      description: "Servicios de envasado y etiquetado de productos.",  
      id: "11",
      link: "https://drive.google.com/file/d/13FOuRBgJ1B6BEYW-Zct8uxCLm7wMmRg6/view?usp=sharing"
    },
  ];

  return (
    <Box py={20} bg={useColorModeValue('gray.50', 'gray.900')}>
      <Container maxW="container.xl">
        <VStack spacing={16}>
          {/* Sección de Departamentos */}
          <VStack spacing={8} data-aos="fade-up">
            <Heading
              size="2xl"
              color="blue.600"
              textAlign="center"
            >
              Asepsia's Laboratorio Departamentos
            </Heading>
            <Text
              fontSize="xl"
              color={useColorModeValue('gray.600', 'gray.400')}
              maxW="container.md"
              textAlign="center"
            >
              Descubra nuestra amplia gama de productos y servicios especializados
            </Text>
            <Grid
              templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
              gap={8}
              w="full"
            >
              {departments.map((dept, index) => (
                <Box
                  key={index}
                  bg={cardBg}
                  p={8}
                  borderRadius="xl"
                  boxShadow="md"
                  _hover={{
                    bg: hoverBg,
                    transform: 'translateY(-5px)',
                    boxShadow: 'xl'
                  }}
                  transition="all 0.3s"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <VStack spacing={4} align="flex-start">
                    <Image
                      src={dept.icon}
                      alt={dept.title}
                      boxSize="80"
                      borderRadius="lg"
                    />
                    <Heading size="md">{dept.title}</Heading>
                    <Text color={useColorModeValue('gray.600', 'gray.400')}>
                      {dept.description}
                    </Text>
                    <Button
                      variant="ghost"
                      colorScheme="blue"
                      size="sm"
                      rightIcon={<Icon as={InfoIcon} />}
                      onClick={() => handleClickPdf(dept.link)}
                    >
                      Más información
                    </Button>
                  </VStack>
                </Box>
              ))}
            </Grid>
          </VStack>

          {/* Sección de Descarga */}
          <Box
            w="full"
            bg="blue.600"
            borderRadius="2xl"
            p={12}
            data-aos="fade-up"
          >
            <VStack spacing={6}>
              <Heading color="white" size="xl" textAlign="center">
                ¿Desea conocer más sobre nuestros servicios?
              </Heading>
              <Text color="white" fontSize="lg" textAlign="center">
                Descargue nuestra carta de presentación completa
              </Text>
              <Button
                size="lg"
                colorScheme="blue"
                variant="outline"
                _hover={{ transform: 'translateY(-2px)', boxShadow: 'lg' }}
                transition="all 0.2s"
                rightIcon={<Icon as={InfoIcon} />}
                onClick={() => handleClickPdf("https://drive.google.com/file/d/18HBacmfKcaK-xwPIBgsvlghErNnE1ie2/view?usp=sharing")}
                color={"white"}
              >
                3. Ver Carta de Presentación
              </Button>
              {/* <PDFViewerButton
                  // pdfPath={cartapresentacion}
                  // pdfPath={"asepsias-laboratorio/src/assets/CARTAPRESENTACION.pdf"}
                  // pdfPath={"./assets/CARTAPRESENTACION.pdf"}
                  pdfPath={"/CARTAPRESENTACION.pdf"}
                  buttonColor="blue"
                  buttonText="Descargar Carta de Presentación"
                  fileName="Carta de Presentación"
                /> */}
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

// AboutUs Component
const AboutUs = () => {
  const features = [
    {
      title: "Experiencia Comprobada",
      description: "Más de 15 años de experiencia en el sector farmacéutico y de laboratorio.",
      icon: experiencia
    },
    {
      title: "Certificaciones",
      description: "Contamos con todas las certificaciones necesarias para garantizar la calidad de nuestros productos.",
      icon: certificaciones
    },
    {
      title: "Equipo Especializado",
      description: "Personal altamente calificado y en constante actualización.",
      icon: equipo
    }
  ];
  const phoneNumber = '573177828119';
  const defaultMessage = encodeURIComponent('Hola, me gustaría saber más sobre tus servicios.'); // Codifica el mensaje para URL
  const handleClick = () => {
    // Construye la URL de WhatsApp
    const waUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;
    // Redirecciona al usuario a WhatsApp
    window.open(waUrl, '_blank');
  };

  return (
    <Box py={20} bg={useColorModeValue('white', 'gray.800')}>
      <Container maxW="container.xl">
        <SimpleGrid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={16} alignItems="center">
          {/* Sección de Información */}
          <VStack align="flex-start" spacing={8} data-aos="fade-right">
            <Badge colorScheme="blue" px={4} py={2} borderRadius="full">
              Sobre Nosotros
            </Badge>
            <Heading size="2xl" color={useColorModeValue('gray.800', 'white')}>
              ¿Quiénes Somos?
            </Heading>
            <Text fontSize="lg" color={useColorModeValue('gray.600', 'gray.400')}>
              Somos un laboratorio especializado en productos de higiene, asesoría en salud pública y más.
              Nuestro compromiso es proporcionar soluciones de alta calidad para satisfacer las necesidades
              de nuestros clientes.
            </Text>
            <Button
              onClick={() => handleClickPdf("https://drive.google.com/file/d/1KewBI35davJsUBZWY-n6jEAv-4sa7O96/view?usp=sharing")}
              colorScheme='blue'
              variant='outline'
            >
              2. Ver Nuestros Mercados
            </Button>

            <VStack spacing={6} align="stretch" w="full">
              {features.map((feature, index) => (
                <HStack
                  key={index}
                  spacing={4}
                  p={4}
                  bg={useColorModeValue('gray.50', 'gray.700')}
                  borderRadius="lg"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    boxSize="40"
                    borderRadius="md"
                  />
                  <VStack align="flex-start" spacing={1}>
                    <Text fontWeight="bold">{feature.title}</Text>
                    <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.400')}>
                      {feature.description}
                    </Text>
                  </VStack>
                </HStack>
              ))}
            </VStack>

            <Button
              size="lg"
              colorScheme="green"
              leftIcon={<Icon as={FaWhatsapp} />}
              _hover={{ transform: 'translateY(-2px)', boxShadow: 'lg' }}
              transition="all 0.2s"
              onClick={handleClick}
            >
              Contáctanos
            </Button>
          </VStack>

          {/* Sección de Imagen */}
          <Box
            position="relative"
            data-aos="fade-left"
          >
            <Image
              src={lab}
              alt="Laboratorio"
              borderRadius="2xl"
              boxShadow="2xl"
              w="full"
              h="auto"
            />
            <Box
              position="absolute"
              bottom={-8}
              right={-8}
              bg="blue.600"
              color="white"
              p={8}
              borderRadius="xl"
              boxShadow="lg"
              maxW="300px"
            >
              <VStack spacing={4}>
                <Heading size="md">Compromiso con la Calidad</Heading>
                <Text fontSize="sm">
                  Garantizamos la más alta calidad en todos nuestros productos y servicios
                </Text>
              </VStack>
            </Box>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>

  );
}

// Main App Component
const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <Box>
      <Header />
      <Navbar />
      <Box id="inicio">
        <Hero />
      </Box>
      <Box id=''>
        <Stats />
      </Box>
      <Box id='servicios'>
        <MainContent />
      </Box>
      <Box id='nosotros'>
        <AboutUs />
      </Box>
      <ServicesAccordion />
      <Box id='contacto'>
        <Footer />
      </Box>
      <Box pos={"absolute"}>
        <WhatsAppButton />
      </Box>
    </Box>
  );
};

export default App;