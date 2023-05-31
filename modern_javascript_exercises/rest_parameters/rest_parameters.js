// Instructions can be found in rest_parameters.md

export function add(...args) {
  //let listToAdd = args;
  return args.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
}

//add(1, 2, 3, 4, 5);

//module.exports = add;
