import { CHAT_ID, URI_API, messageHeader } from "../data/telegramBotData"
import apiClient from "../axios"

// objectName: '',
// equipmentsName: '',
// intro: null, //  (video)
// fileName: introFile[0].file.name

const sendMessage = (formData) => {
    console.log('123', formData)
    let message = messageHeader
    message += `имя объекта: \n<b>${formData.objectName}</b>\n`
    message += `имя оборудования: \n<b>${formData.equipmentsName}</b>\n`
    message += `имя архива: \n<b>${formData.fileName}</b>\n`
    apiClient.post(URI_API, {
        chat_id: CHAT_ID,
        parse_mode: 'html',
        text: message
    })
}

export default sendMessage