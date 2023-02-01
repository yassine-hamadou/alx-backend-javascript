export default function setFromArray(array) {
    if (array.length > 0) return {
        ...new Set(array)
    }
}