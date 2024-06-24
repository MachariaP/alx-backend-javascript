export const taskFirst = () => {
    const tasks = 'I prefer const when I can.';
    return tasks;
};

export function getLast() {
    return 'is okay';
}

export const taskNext = () => {
    let combination = 'But sometimes let';
    combination += getLast();

    return combination;
};