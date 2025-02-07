import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    VStack,
    HStack,
    Text,
    IconButton,
} from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import cartapresentacion from '../../assets/CARTAPRESENTACION.pdf';
import pdfWorker from 'pdfjs-dist/build/pdf.worker.min?url';

// Configurar el worker de PDF.js
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// Usa el worker desde el paquete
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url
).toString();

// pdfjs.GlobalWorkerOptions.workerSrc = pdfWorker;


const PDFViewerButton = ({ pdfPath = cartapresentacion, buttonColor = "blue", buttonText = "Ver PDF", fileName = "Documento" }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
        setPageNumber(1);
    };

    const changePage = (offset) => {
        setPageNumber(prevPageNumber => prevPageNumber + offset);
    };

    const previousPage = () => changePage(-1);
    const nextPage = () => changePage(1);

    return (
        <>
            <Button
                onClick={onOpen}
                colorScheme={buttonColor}
                _hover={{ opacity: 0.8 }}
                _active={{ transform: 'scale(0.98)' }}
            >
                {buttonText}
            </Button>

            <Modal isOpen={isOpen} onClose={onClose} size="xl">
                <ModalOverlay />
                <ModalContent maxW="90vw">
                    <ModalHeader>{fileName}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <VStack spacing={4} align="center" pb={6}>
                            <Document
                                file={pdfPath}
                                onLoadSuccess={onDocumentLoadSuccess}
                                loading={
                                    <Text>Cargando PDF...</Text>
                                }
                                error={
                                    <Text color="red.500">
                                        Error al cargar el PDF. Verifica que la ruta sea correcta.
                                    </Text>
                                }
                            >
                                <Page
                                    pageNumber={pageNumber}
                                    width={Math.min(window.innerWidth * 0.8, 800)}
                                />
                            </Document>

                            <HStack spacing={4} mt={4}>
                                <IconButton
                                    icon={<ChevronLeftIcon />}
                                    onClick={previousPage}
                                    isDisabled={pageNumber <= 1}
                                    aria-label="Página anterior"
                                    colorScheme={buttonColor}
                                />

                                <Text>
                                    Página {pageNumber} de {numPages}
                                </Text>

                                <IconButton
                                    icon={<ChevronRightIcon />}
                                    onClick={nextPage}
                                    isDisabled={pageNumber >= numPages}
                                    aria-label="Página siguiente"
                                    colorScheme={buttonColor}
                                />
                            </HStack>
                        </VStack>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
};

export default PDFViewerButton;