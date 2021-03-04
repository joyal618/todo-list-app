import { useMutation  } from '@apollo/client';
import { DELETE_TODO, UPDATE_TODO, COMPLETED_TODO } from '../../graphQL/mutations'
import { GET_TODOS } from '../../graphQL/queries';


import "./TodoItem.css";
import React,{useState} from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';;






const TodoItem = (props: any) => {
    console.debug({props});
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const [title, setTitle] = useState(props.todo.title)
    const [description, setDescription] = useState('')

    const [completed, setCompleted] = useState(false)
    const [removeTask, { error, data }] = useMutation<{ removeTask: string }, { id: number}>(DELETE_TODO); 
    const [updateTask, { }] = useMutation<{ updateTask: string }, { id: number, title: string, description: string}>(UPDATE_TODO); 
    const [markAsCompleted, {  }] = useMutation<{ markAsCompleted: string }, { id: number}>(COMPLETED_TODO); 

    const handleDelete = () => {
        console.log(props.todo.id)
        removeTask({ 
            variables: { 
                id: props.todo.id,
            },
            refetchQueries: [{ query: GET_TODOS }]
        }); 
        console.log("end ")
 
    }

    const onUpdateDone = () => {
        
        updateTask({ 
            variables: { 
                id: props.todo.id,
                title: title,
                description : description
            },
            refetchQueries: [{ query: GET_TODOS }]
        }); 
        console.log("end ")
        setOpen(false);
    }

    const handleCompleted = () => {
        console.log("in handleCompleted");
        setCompleted(true)
        markAsCompleted({ 
            variables: { 
                id: props.todo.id,
            },
            refetchQueries: [{ query: GET_TODOS }]
        }); 
        console.log(completed)
    }

  
    
    




    return (
        // <h1>{props.todo.title}</h1>
        <>
            <div className="todo-items-container">
                <div className="td-container">
                    <div className="td">
                        {props.todo.title}
                    </div>
                    <div className="td">
                        {props.todo.description}
                    </div>
                </div>
                {props.todo.completedDate ?
                <div className="todo-buttons">
                    <Button id="delete" variant="contained" color="secondary" onClick={handleDelete}>Delete</Button>
                    <Button id="completed" disabled >Completed</Button>
                </div>
                : 
                <div className="todo-buttons">
                <Button id="update" variant="contained" color="primary" onClick={handleClickOpen}>Update</Button>
                <Button id="delete" variant="contained" color="secondary" onClick={handleDelete}>Delete</Button>
                <Button id="completed" variant="contained" className="completed-button" onClick={handleCompleted}>Completed</Button>
            </div>

}   
            </div>



            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Update Task</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To update the task, please enter the task title and task description here. We will update the corresponding task details.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Task title"
                        type="title"
                        fullWidth
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Task Description"
                        type="description"
                        fullWidth
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={onUpdateDone} color="primary">
                        Update Task
                    </Button>
                </DialogActions>
            </Dialog>


        </>
    )
}


export default TodoItem;