export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    const newTask = true;
    const newTask2 = false;
    task = newTask2;
    task2 = newTask;
  }
  return [task, task2];
}
