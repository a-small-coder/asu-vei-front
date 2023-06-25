import { Box, Input } from "@chakra-ui/react"
import { useRef, useState } from "react"


// interface FileUploaderProps {
//     setFiles: (files: any[]) => void
// }

// const FileUploader = ({setFiles}: FileUploaderProps): JSX.Element => {
const FileUploader = (props) => {
    const setFiles = props.setFiles
    const [ drag, setDrag ] = useState(false)

    const inputFile = useRef(null)

    const dragStartHandler = (e) => {
        e.preventDefault()
        setDrag(true)
    }

    const dragLeaveHandler = (e) => {
        e.preventDefault()
        setDrag(false)
    }

    const onDropHandler = (e) => {
        e.preventDefault()
        let files = [...e.dataTransfer.files]
        // console.log(files)
        const newFiles = files.map(f => (
            {
                id: f.name + String(f.size) + String(new Date()),
                file: f
            }
        ))
        setFiles(newFiles)
    }

    const onUploadFile = (e) => {
        e.preventDefault()
        let files = [...e.target.files]
        // console.log(files)
        const newFiles = files.map(f => (
            {
                id: f.name + String(f.size) + String(new Date()),
                file: f
            }
        ))
        setFiles(newFiles)
    }

    const UploaderClickHandler = () => {
        if (inputFile !== null && inputFile.current !== null){
            //@ts-ignore
            inputFile.current.click()
        }
        
    }

    return (
        <Box
            w='100%'
            h='42px'
            border='3px dashed gray'
            display='flex'
            justifyContent='flex-start'
            alignItems='center'
            p='10px 30px'
            onClick={UploaderClickHandler}
            _hover={{bg: 'blue.100', opacity: '0.8', cursor: 'pointer'}}
        >

            <Input
                type='file' 
                display='none' 
                ref={inputFile} 
                onChange={e=> onUploadFile(e)}
            />
                { drag ? (
                    <Box
                        flex='1 0'
                        h='100%'
                        display='flex'
                        justifyContent='flex-start'
                        alignItems='center'
                        onDragStart={e => dragStartHandler(e)}
                        onDragOver={e => dragStartHandler(e)}
                        onDragLeave={e => dragLeaveHandler(e)}
                        onDrop={e => onDropHandler(e)}
                    >
                        Отпустите файл, чтобы загрузить
                        
                    </Box>
                ): (
                    <Box
                        flex='1 0'
                        h='100%'
                        display='flex'
                        justifyContent='flex-start'
                        alignItems='center'
                        onDragStart={e => dragStartHandler(e)}
                        onDragOver={e => dragStartHandler(e)}
                        onDragLeave={e => dragLeaveHandler(e)}
                    >
                        Перетащите файл, чтобы загрузить
                    </Box>
                )}
        </Box>
    )
}

export default FileUploader