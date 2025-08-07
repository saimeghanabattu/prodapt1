function Login(){
    return(
        <div style={{width:"300px",margin:"50px auto", padding:"20px",border:"1px solid #ccc",borderWidth:"8px"}}>
      <h1>Login</h1>
      <form>
        <div style={{marginBottom:"10px"}}>
            <label>Email:</label>
            <input
                type="email"
                required
                style={{width:"100%", padding:"8px"}}/>

        </div>
        <div style={{marginBottom:"10px"}}>
            <label>Password:</label>
            <input
                type="password"
                required
                style={{width:"100%",padding:"8px"}}/>
        </div>
        <button type="button" style={{backgroundColor:'blue', width:"100%",padding:"8px"}}>Login</button>
      </form>
    </div>
    );
}
export default Login;