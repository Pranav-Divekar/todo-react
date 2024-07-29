

// import { useState } from "react";
// import { v4 as uuidv4 } from 'uuid';
// import '@fontsource/roboto/300.css';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';
// import IconButton from '@mui/material/IconButton';
// import DeleteIcon from '@mui/icons-material/Delete';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';
// import SendIcon from '@mui/icons-material/Send';
// import DoneAllIcon from '@mui/icons-material/DoneAll';
// import StarIcon from '@mui/icons-material/Star';

// export default function Todo() {
//     const styles = { color: "red" };
//     const [tasks, setTasks] = useState([{ task: "Sample task", id: uuidv4(), isDone: false }]);
//     const [newTask, setNewTask] = useState("");
//     const [isLiked, setIsLiked] = useState(false);

//     const addToTask = () => {
//         if (newTask.trim()) {
//             setTasks((prevTasks) => [...prevTasks, { task: newTask, id: uuidv4(), isDone: false }]);
//             setNewTask("");
//         }
//     };

//     const deleteTask = (id) => {
//         setTasks(tasks.filter((todo) => todo.id !== id));
//     };

//     const updateValue = (event) => {
//         setNewTask(event.target.value);
//     };

//     const prioritizeOne = (id) => {
//         setTasks((prevTasks) => prevTasks.map((todo) => {
//             if (todo.id === id) {
//                 return { ...todo, task: "*" + todo.task };
//             }
//             return todo;
//         }));
//     };

//     const markDone = (id) => {
//         setTasks((prevTasks) => prevTasks.map((todo) => {
//             if (todo.id === id) {
//                 return { ...todo, isDone: !todo.isDone };
//             }
//             return todo;
//         }));
//     };

//     const likeToggle = () => {
//         setIsLiked(!isLiked);
//     };

//     return (
//         <Container style={{ marginTop: '20px', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
//             <Typography variant="h4" gutterBottom>Todo List</Typography>
//             <TextField
//                 id="taskInput"
//                 label="Enter task"
//                 variant="outlined"
//                 fullWidth
//                 value={newTask}
//                 onChange={updateValue}
//                 style={{ marginBottom: '20px' }}
//             />
//              <Button variant="contained" endIcon={<SendIcon />}  onClick={addToTask}>
//              Add Task
//              </Button>
           
//             <hr style={{ margin: '20px 0' }} />
//             <Typography variant="h6">Tasks below</Typography>
//             <List>
//                 {tasks.map((todo) => (
//                     <ListItem key={todo.id} style={{ justifyContent: 'space-between' }}>
//                         <ListItemText primary={<span style={todo.isDone ? { textDecoration: "line-through" } : {}}>{todo.task}</span>} />
//                         <div>
//                             <IconButton aria-label="delete" onClick={() => deleteTask(todo.id)}>
//                                 <DeleteIcon />
//                             </IconButton>

//                             <IconButton aria-label="done" onClick={() => markDone(todo.id)}>
//                                 <DoneAllIcon />
//                             </IconButton>

//                             <IconButton aria-label="priroritize" onClick={() => prioritizeOne(todo.id)}>
//                                 <StarIcon />
//                             </IconButton>

//                             {/* <Button variant="outlined" color="secondary" onClick={() => prioritizeOne(todo.id)}>Prioritize</Button> */}
//                             <Button variant="outlined" onClick={() => markDone(todo.id)}>{todo.isDone ? "Pending" : "Done"}</Button>

//                             <span onClick={likeToggle} style={{ cursor: 'pointer', marginLeft: '10px' }}>
//                                 {isLiked ? <i style={styles} className="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i>}
//                             </span>
//                         </div>
//                     </ListItem>
//                 ))}
//             </List>
//         </Container>
//     );
// }

import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Container, Typography, List, ListItem, ListItemText, Paper, Divider, Box } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import StarIcon from '@mui/icons-material/Star';

export default function Todo() {
    const styles = { color: "red" };
    const [tasks, setTasks] = useState([{ task: "Sample task", id: uuidv4(), isDone: false }]);
    const [newTask, setNewTask] = useState("");
    const [isLiked, setIsLiked] = useState(false);

    const addToTask = () => {
        if (newTask.trim()) {
            setTasks((prevTasks) => [...prevTasks, { task: newTask, id: uuidv4(), isDone: false }]);
            setNewTask("");
        }
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter((todo) => todo.id !== id));
    };

    const updateValue = (event) => {
        setNewTask(event.target.value);
    };

    const prioritizeOne = (id) => {
        setTasks((prevTasks) => prevTasks.map((todo) => {
            if (todo.id === id) {
                return { ...todo, task: "*" + todo.task };
            }
            return todo;
        }));
    };

    const markDone = (id) => {
        setTasks((prevTasks) => prevTasks.map((todo) => {
            if (todo.id === id) {
                return { ...todo, isDone: !todo.isDone };
            }
            return todo;
        }));
    };

    const likeToggle = () => {
        setIsLiked(!isLiked);
    };

    return (
        <Container maxWidth="sm" style={{ marginTop: '50px', padding: '30px', backgroundColor: '#f9f9f9', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
            <Paper elevation={3} style={{ padding: '20px' }}>
                <Typography variant="h4" gutterBottom>Todo List</Typography>
                <TextField
                    id="taskInput"
                    label="Enter task"
                    variant="outlined"
                    fullWidth
                    value={newTask}
                    onChange={updateValue}
                    style={{ marginBottom: '20px' }}
                />
                <Button variant="contained" endIcon={<SendIcon />} onClick={addToTask}>
                    Add Task
                </Button>
                <Divider style={{ margin: '20px 0' }} />
                <Typography variant="h6">Tasks below</Typography>
                <List>
                    {tasks.map((todo) => (
                        <ListItem key={todo.id} style={{ justifyContent: 'space-between' }}>
                            <ListItemText primary={<span style={todo.isDone ? { textDecoration: "line-through" } : {}}>{todo.task}</span>} />
                            <div>
                                <IconButton aria-label="delete" onClick={() => deleteTask(todo.id)}>
                                    <DeleteIcon style={{color:"red"}}/>
                                </IconButton>
                                <IconButton aria-label="done" onClick={() => markDone(todo.id)}>
                                    <DoneAllIcon style={{color:"blue"}}/>
                                </IconButton>
                                <IconButton aria-label="prioritize" onClick={() => prioritizeOne(todo.id)}>
                                    <StarIcon />
                                </IconButton>
                                <span onClick={likeToggle} style={{ cursor: 'pointer', marginLeft: '10px' }}>
                                    {isLiked ? <i style={styles} className="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i>}
                                </span>
                            </div>
                        </ListItem>
                    ))}
                </List>
            </Paper>
            <Box mt={4} textAlign="center">
                <Typography variant="caption">Made by Pranav Divekar in React</Typography>
            </Box>
        </Container>
    );
}