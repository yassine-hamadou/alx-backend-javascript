export default function getStudentIdsSum(array) {
    array.reduce((accumulator, i) => accumulator + i.id)
};