import { useForm } from "../hooks/useForm"

export const FormularioComponent = () => {
    const initialForm = {
        userName: '',
        email: '',
        password: ''
    }
 
    const {userName, email, password, onInputChange} = useForm(initialForm)

    

    const onSubmit = (event) => {
        event.preventDefault()
        console.log(formState)
    }
  return (
    <form onSubmit={onSubmit}>
        <div className="form-group">
        <label htmlFor="userName">User Name</label>
        <input 
            type="email" 
            className="form-control" 
            name="exampleInputEmail1"  
            placeholder="Enter your user name" 
            value={userName}
            onChange={onInputChange}
            />
        <label htmlFor="email">Email address</label>
        <input 
            type="email" 
            className="form-control" 
            name="email"  
            placeholder="Enter email" 
            value={email}/>
        
        </div>
        <div className="form-group">
        <label htmlFor="password">Password</label>
        <input 
            type="password" 
            className="form-control" 
            name="password" 
            placeholder="Password" 
            value={password}
            />
        </div>
        
        <button type="submit" className="btn btn-primary">Submit</button>
     </form>
  )
}
 