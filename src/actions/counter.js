export const INC = "increment"
export const DEC = "decrement"
export const INC_ASYNC = "inc_async"

export const increment = () => {
    return {type: INC}
};

export const decrement = () => {
    return {type: DEC}
};

export const incrementAsync = () => {
    return {type: INC_ASYNC}
};
