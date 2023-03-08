export const incNum = (num) => {
    return {
        type: "Increment",
        payload: num,
    }
}

export const decNum = () => {
    return {
        type: "Decrement"
    }
}
