async function getIpsum(){
    let ipsum = await fetch("https://api.codetabs.com/v1/proxy?quest=http://loripsum.net/api/plaintext");
    console.log(ipsum.json());
}

getIpsum();
