// type Admin = { role: "admin"; permissions: string[] };
// type Guest = { role: "guest"; sessionId: string };
// type User = Admin | Guest;

// function greet(user: User) {
//   if (user.role === "admin") {
//     console.log("Welcome admin, permissions:", user.sessionId);
//   }
// }

type Admin = { role: "admin"; permissions: string[] };
type Guest = { role: "guest"; sessionId: string };
type User = Admin | Guest;

function greet(user: User) {
  if (user.role === "admin") {
    console.log("Welcome admin, permissions:", user.permissions);
  }
  else{
    console.log("Welcome admin, permissions:", user.sessionId);
  }
}