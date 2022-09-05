function foo(){
    let cc = document.getElementById('text').value;
    console.log(cc);
    async function getdata(){
        let animeurl = await fetch(`https://animechan.vercel.app/api/quotes/anime?title=${cc}`);
        let animedata = await animeurl.json();
        console.log(animedata);

        for(i=0; i<animedata.length; i++){
            let char = animedata[i].character;
            let quote = animedata[i].quote;

            let aa = document.createElement('ul');
            aa.innerHTML=`<b><li>Anime Character: ${char}</li><li>Quote: ${quote}</li></b><hr>`
            aa.style.textDecoration="underliine"
            document.body.append(aa);
        }
        


    }
    getdata();
}