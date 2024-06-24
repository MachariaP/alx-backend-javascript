export default function taskBlock(trueorfalse) {
    let task =false;
    let task2 = true;

    if (trueorfalse) {
        let task = true;
        let task2 = false;
    }

    return [task, task2];
}

