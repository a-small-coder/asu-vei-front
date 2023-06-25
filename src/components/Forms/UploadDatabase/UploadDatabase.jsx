import { Box, Button, Flex, FormControl, FormHelperText, FormLabel, Heading, Icon, Input, Spinner } from "@chakra-ui/react"
import { FiSave } from "react-icons/fi"
import { CopyIcon, DeleteIcon } from "@chakra-ui/icons"
import FileUploader from "../../FileLoader/FileLoader"
import { useEffect, useState } from "react"
import { useFormik } from "formik"
const UploadDatabase = (props) => {
    console.log(props)

    const [ introFile, setIntroFile ] = useState([])

    const saveIntroFile = (newFiles) => {
        setIntroFile([...introFile].concat(newFiles))
    }

    const deleteFile = (fileId) => {
        setIntroFile(introFile.filter(f => f.id != fileId))
    }

    // form logic

    const [loadingForm, setLoadingForm] = useState(false);

    useEffect( () => {
        if (loadingForm) {
            setLoadingForm(false)
        }
        
    }, [setLoadingForm])

    const initialValues = {
        objectName: '',
        equipmentsName: '',
        intro: null, //  (video)
    }
    const SubmitHandler = (formValues) => {
        const values = {
            ...formValues,
            intro: introFile[0].file,
            fileName: introFile[0].file.name
        }
        // console.log(values)
        props.formHandle({
            isSuccess: true,    
            formValue: values
        })
        //  save in store
        // dispatch(getCategories()) 
    }   


    const formik = useFormik({
        initialValues,
        onSubmit: values => {
            setLoadingForm(true)
            SubmitHandler(values)
        },
    });


    return (
        <Box minW='320px' w='100%'>

        <form onSubmit={formik.handleSubmit}>
            {/* header */}
            <Flex
                borderColor='gray.300'
                p='20px 40px'
                w='100%'
                marginTop='40%'
                alignItems='center'
                justifyContent='center'
            >

                <Heading
                    as='h3'
                    fontSize='24px'
                    m='10px 5px'
                >
                    Загрузите архив с файлом базы данных
                </Heading>

            </Flex>

                <Flex
                    p='20px 40px'
                    w='100%'
                    justifyContent='center'
                >
                    {/* <LabelWithPopover props={basePopovers[3]}/> */}

                    <Flex
                        flex='1 0'
                        pl='20px'
                        flexDir='column'
                        alignItems='center'
                        gap='40px'
                    >

                        <Flex
                            p='20px 40px'
                            w='100%'
                            alignItems='center'
                            justifyContent='space-between'
                        >
                            <FormLabel htmlFor="objectName" fontSize='16px' p='0' m='0'>
                                objectName
                            </FormLabel>

                            <Flex
                                pl='20px'
                                flexDir='column'
                            >
                                <FormControl>
                                    
                                    <Input
                                        id="objectName"
                                        name='objectName'
                                        onChange={formik.handleChange}
                                        value={formik.values.objectName}
                                        type="text" 
                                        focusBorderColor='#004389'
                                        minW='320px'
                                    />
                                    {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
                                </FormControl>
                            </Flex>

                        </Flex>

                        <Flex
                            p='20px 40px'
                            w='100%'
                            alignItems='center'
                            justifyContent='space-between'
                        >
                            <FormLabel htmlFor="equipmentsName" fontSize='16px' p='0' m='0'>
                                equipmentsName
                            </FormLabel>

                            <Flex
                                pl='20px'
                                flexDir='column'
                            >
                                <FormControl>
                                    
                                    <Input
                                        id="equipmentsName"
                                        name='equipmentsName'
                                        onChange={formik.handleChange}
                                        value={formik.values.equipmentsName}
                                        type="text" 
                                        focusBorderColor='#004389'
                                        minW='320px'
                                        
                                    />
                                    {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
                                </FormControl>
                            </Flex>

                        </Flex>
            
                        <FormControl>
                            <FileUploader setFiles={saveIntroFile}/>
                                <Flex
                                    flexDir='column'
                                    gap={'10px'}
                                    mt='10px'
                                >
                                    {introFile.map( f => (
                                        <Flex
                                            bg='red.500'
                                            justifyContent='space-between'
                                            alignItems='center'
                                            p='15px 25px'
                                            color='white'
                                            key={f.id}
                                        >
                                            <CopyIcon/>
                                            {f.file.name}
                                            <DeleteIcon 
                                                onClick={()=> {deleteFile(f.id)}}
                                                _hover={{cursor: 'pointer', opacity: '0.7'}}
                                            />
                                        </Flex>
                                    ))}
                                </Flex>
                                {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
                        </FormControl>

                        <Button
                            variant='solid' 
                            colorScheme='blue'
                            borderRadius='25px'
                            p='10px 30px'
                            textAlign='center'
                            color='white'
                            bg='#004389'
                            borderColor='white.100'
                            _hover={{opacity: 0.8, borderColor: 'white'}}
                            w='230px'
                            justifySelf='center'
                            display='flex'
                            justifyContent='space-between'
                            type='submit'
                        >
                            
                            <Icon as={FiSave} h='24px' w='24px'/>
                            { loadingForm ? (
                                <Spinner/>
                                ) : "Сохранить"
                            }
                        </Button>

                    </Flex>

                </Flex>
        </form>
        </Box>
    )
}

export default UploadDatabase