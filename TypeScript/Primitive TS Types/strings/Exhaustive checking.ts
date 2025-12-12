type Color = 'red' | 'blue' |'yellow';

function checkColor(c: Color): string {
  switch (c) {
    case 'red':
      return "It's red";
    case 'blue':
      return "It's blue";
    case 'yellow':
       return "it's yellow";
    default:
      // If we add 'green' to Color type but forget to add a case for it,
      // 'unreachable' will be of type 'never', triggering a compilation error.
      const unreachable: never = c;
      return `unknown color ${unreachable}`;
  }
}

console.log(checkColor('yellow'))