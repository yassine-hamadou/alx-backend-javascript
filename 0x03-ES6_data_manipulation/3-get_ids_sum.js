export default function getStudentIdsSum(array) {
    array.reduce((accumulator, currentValue) => accumulator.id + currentValue.id)
};