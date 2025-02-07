import { Button, Box } from '@chakra-ui/react';
import { FaWhatsapp } from 'react-icons/fa'; // Importa el icono de WhatsApp

const WhatsAppButton = () => {
    const phoneNumber = '573177828119';
    const defaultMessage = encodeURIComponent('Hola, me gustaría saber más sobre tus servicios.'); // Codifica el mensaje para URL

    const handleClick = () => {
        // Construye la URL de WhatsApp
        const waUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;
        // Redirecciona al usuario a WhatsApp
        window.open(waUrl, '_blank');
    };

    return (
        <Box position="fixed" right="16px" bottom="16px" zIndex={2}> {/* Posicionamiento fijo en la esquina inferior derecha */}
            <Button colorScheme="whatsapp" bg={"green.500"} variant={"solid"} onClick={handleClick} leftIcon={<FaWhatsapp size={"30"} />} size={"md"} borderRadius={"full"} p={5}>
            </Button>
        </Box>
    );
};

export default WhatsAppButton;
