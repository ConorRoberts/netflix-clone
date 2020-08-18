// async function getIpsum(){
//     let ipsum = await fetch("https://api.codetabs.com/v1/proxy?quest=http://loripsum.net/api/plaintext");
//     console.log(ipsum.json());
// }

// getIpsum();

let dom = {
    myList: document.getElementById("my-list")
};

dom.myList.addEventListener("click",()=>{
    let markup=`
        <li class="movie-element">
            <img class="movie-image" src="https://picsum.photos/200/300">
            <h2 class="movie-title">Movie Title</h2>
        </li>
    `;
    dom.myList.insertAdjacentHTML("beforeend",markup);
});
