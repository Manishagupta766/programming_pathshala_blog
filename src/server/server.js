import { createConnection } from 'mysql';
import { Express } from 'express';

const app = Express();
const PORT = "3306";
app.use(Express.json());

const db = createConnection({
    connectionLimit: 100,
    host: "localhost",
    user: "root",
    password: "tarun1801",
    database: "sakila"
})

// Route to get all blogs
app.get("/api.get", (req, res)=>{
    db.query("SELECT * FROM blogs", (err, result)=>{
        if(err) {
            console.log(err);
        }
        res.send(result);
    });
});

// Route to create Blog
app.post('/createBlog', (req, res)=>{

    const title = req.body.title;
    const author_name = req.body.author_name;
    const content = req.body.content;
    const image = req.body.image;
    const date = req.body.date;
    const read_time = req.body.read_time;
    const tags = req.body.tags;

    db.query("INSERT INTO blogs (title, author_name, content, image, date, read_time, tags) VALUES (?,?,?,?,?,?,?)",[title, author_name, content, image, date, read_time, tags], (err, result)=>{
        if(err) {
            console.log(err);
        }
        console.log(result);
    })
})

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})