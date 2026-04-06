// API calling 
import axios from 'axios';

export async function getMCQ(subject: string) {
    return await axios.get(`https://mcqgeneratorbackend.fastapicloud.dev/model/${subject}`)
}
