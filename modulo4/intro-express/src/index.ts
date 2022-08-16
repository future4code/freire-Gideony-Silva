import express { Response }  from "express";

import { AddressInfo } from "net";

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;

//1
app.get("/", (req, res) => {          
    res.send("Hello from Express")
})

//2"
type User = {
    id: number,
    name: string,
    phone: string,
    email: string,
    website: string
    posts: Array<Post>
};

//3
const users: Array<User> = [
    {id: 1, name: "Felipe", phone: "999999999", email: "luis_melotavares@gmail.com", website: "https://www.google.com/", 
    posts: [{id: 1, title: "Post de teste", body: "Esse é um post teste", userId: 1}, {id: 2, title: "Post teste novamente", body: "Mais um post teste", userId: 1}]},

    {id: 2, name: "Silva", phone: "999999999", email: "silva@gmail.com", website: "https://www.google.com/", 
    posts: [{id: 1, title: "Post de teste", body: "Esse é um post teste", userId: 2}]},

    {id: 3, name: "Davi", phone: "999999999", email: "davi@gmail.com", website: "https://www.google.com/", 
    posts: [{id: 1, title: "Post de teste", body: "Esse é um post teste", userId: 2}]},

    {id: 4, name: "amanda", phone: "999999999", email: "aamanda@gmail.com", website: "https://www.google.com/",
    posts: [{id: 1, title: "Post de teste", body: "Esse é um post teste", userId: 2}]},
];

//4
app.get("/users", (req: Request, res: Response) => {
    res.status(200).send(users);
});

//5
type Post = {
    id: number,
    title: string,
    body: string,
    userId: number
};

//6
app.get("/users/posts", (req: Request, res: Response) => {
    res.status(200).send(users.map((user) => user.posts));
});
