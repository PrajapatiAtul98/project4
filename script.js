let jokes=document.getElementById("jokes");
let jokeBtn=document.getElementById("jokeBtn");

let generateJokes= () => {

    const setHeader = {
        headers : {
            Accept : "application/json"
        }
    }
   

    fetch("https://icanhazdadjoke.com/" , setHeader)
    .then((res) =>  res.json()
    )
    .then((data) => {
     jokes.innerHTML = data.joke;
    }).catch((error) => {
        console.log(error);
    });
}

//  const generateJokes = async () => {
    
//     try{
//     const setHeader = {
//         headers : {
//             Accept : "application/json"
//         }
//     }

//     const response = await fetch("https://icanhazdadjoke.com/");
//     const data = await response.json();
//     jokes.innerHTML = data.joke;

//   }catch(error){
//     console.log(`The Error is : ${error}`)
//   }
  
// }

jokeBtn.addEventListener("click",generateJokes);
generateJokes();//so that when i load the page a new joke will render



