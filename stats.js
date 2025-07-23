export function calculateAverage(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        return new Error("Input must be a non-empty array");
    }
    return arr.reduce((a, value) => a + value) / arr.length
}


export const calculateMedian = (arr) => {
    if (!Array.isArray(arr) || arr.length === 0) {
        return new Error("Input must be a non-empty array");
    }
    const newGrades = [...arr].sort((a, b) => a - b)
    let middle = Math.floor(arr.length / 2)
    let residue = newGrades.length % 2
    if (residue) {
        return newGrades[middle]
    }
    return (newGrades[middle - 1] + newGrades[middle]) / 2;
}

export const getApproved = (arr) => {
    return arr.filter((grade) => grade >= 70);
}