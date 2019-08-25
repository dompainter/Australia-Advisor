import fetch from 'node-fetch'

/**
 * Perform a GET request on the provided URL and return JSON data
 *
 * @param {string} url - URL to make the request to
 * @returns {object} Object response from URL provided
 */
export default async function getData (url) {
    if (!url) {
        // TODO: Error handling
        console.warn('No URL provided to getData')
        return
    }

    const response = await fetch(url)
    const data = await response.json()
    return data.data
}
