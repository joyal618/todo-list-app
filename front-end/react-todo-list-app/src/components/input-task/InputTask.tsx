import "./InputTask.css";
import React,{useState} from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import  {connect} from 'react-redux';
import { addTodo } from '../../redux/todo/todoAction';

const useStyles = makeStyles(theme => ({
    fab: {
        position: 'fixed',
        bottom: theme.spacing(5),
        right: theme.spacing(5),
    },
}));


function InputTask({todoList, addTodo,SetReload}:any) {
    const classes = useStyles();


    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    //const [addTask, { loading, error, data }] = useMutation<{ addTask: Task }, { title: string, description: string}>(ADD_TODO); 
   
    const HandleSubmit = (e:any) => {
        e.preventDefault();

        console.log(title, description);

        
        addTodo(title, description);
        window.location.reload(true);

        
    }



    return (
        <>
            <div>

                <Fab color="primary" aria-label="Add" className={classes.fab} onClick={handleClickOpen}>
                    <AddIcon />
                </Fab>




            </div>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add Task</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                    To add a task, please enter the task title and task description here. We will add the corresponding task details.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Task title"
                        type="title"
                        fullWidth
                        onChange={e => setTitle(e.target.value)}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Task Description"
                        type="description"
                        fullWidth
                        onChange={e => setDescription(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
          </Button>
                    <Button onClick={HandleSubmit} color="primary">
                        Add Task
          </Button>
                </DialogActions>
            </Dialog>

        </>


    );
}

// export default TodoForm;
const mapDispatchToProps = (dispatch : any) => {
    return {
        addTodo : (title :string,description:string) => dispatch(addTodo(title,description))
    }
  }
  function mapStateToProps(state:any) {
    console.log("state")
    console.log(state)
    return { 
      todoList: state.todos 
    }
  }
  

export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(InputTask);