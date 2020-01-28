import axios from 'axios'

export const fetchItem = async () => {
    const { data, status, statusText } = await axios.get('https://jsonplaceholder.typicode.com/posts/1/comments?_start=0&_limit=50')
    if (status === 200) {
        return data
    }
    throw new Error(`Error thrown: ${status}: ${statusText}`)
}
