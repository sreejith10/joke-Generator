let url="https://official-joke-api.appspot.com/random_joke"
      let p = document.querySelector("p");
      let h = document.querySelector("h"); 
      checkbutton = document.querySelector("#btn");

   
    let Generate= async function() {
      let response = await fetch(url);

      let Data = await response.json();
      let punchLine = Data.punchline;
      console.log(punchLine);

      let setup = Data.setup;
      console.log(setup);

      
      p.innerText = punchLine;
      h.innerText = setup;
    }
     Generate();