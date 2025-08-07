function SignUp(){
    return(
          <div style={{width:"300px",margin:"50px auto", padding:"20px",border:"1px solid #ccc",borderWidth:"8px"}}>
      <h1>SignUp</h1>
      <form>
        <div style={{marginBottom:"10px"}}>
            <label>Username/Email:</label>
            <input
                type="text"
                required
                style={{width:"100%", padding:"8px"}}/>

        </div>
        <div style={{marginBottom:"10px"}}>
            <label>Enter Password:</label>
            <input
                type="password"
                required
                style={{width:"100%",padding:"8px"}}/>
        </div>
        <div style={{marginBottom:"10px"}}>
            <label>Confirm Password:</label>
            <input
                type="password"
                required
                style={{width:"100%",padding:"8px"}}/>
        </div>
        <button type="button" style={{backgroundColor:'green', width:"100%",padding:"8px"}}>SignUp</button>
      </form>
    </div>
    );
}
export default SignUp;