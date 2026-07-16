import Todo from "./models.js";




const createTodo = async (req,res)=>{
    const title = req.body.title;
    const completed = req.body.completed;


    if (!title){
        return res.json({
            message:"title is required! "
        })
    }

    const todo = await Todo.create(
        {
            title, 
            completed
        }
    )


    if(!todo){
        return res.json({
            message:"something went wrong while creating todo!!"
        })
    }

    return res.json({
        message: "todo created successfully",
        todo
    })

}



const getTodos = async (req,res)=>{


    const todos = await Todo.find();

    if(!todos){
        return res.json({
            message: "something went wrong while fetching todos",
        })
    }

    return res.json({
        message: "todos fetched successfully",
        todos
    })



}





















export {createTodo, getTodos}







