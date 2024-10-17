var a=["Lakshmi","bhavani","raju","annapoorna"];
var returnval=a.map((val,ind,arr)=>{

return(
    <>
   
    <li key={ind}>{val}</li>
    </>
)
})
function Display(){
    return(
    <ol>{returnval}</ol>
    )
}
export default Display;