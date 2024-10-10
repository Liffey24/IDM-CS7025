const images = [
    "https://as2.ftcdn.net/jpg/00/64/55/67/220_F_64556758_z8nvDTsav4xUd5BeTLeDfoEyB41hkMDZ.jpg",
    "https://i2.wp.com/news.coinsblog.ws/wp-content/uploads/sites/3/2018/11/2018-america-the-beautiful-quarters-coin-block-island-rhode-island-proof-reverse.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/8/84/2005-Penny-Uncirculated-Obverse.png",
    "https://th.bing.com/th/id/R.2ada1359c176d695f4868f5912f23cb0?rik=jOucvCre%2bVmh1A&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2ff%2ff4%2f2010_cent_reverse.jpg&ehk=vRl4nldKKC7aTLRK7Q%2fax2twHcbN7IFnLzGxRvDafcQ%3d&risl=&pid=ImgRaw&r=0",
    "https://th.bing.com/th/id/OIP.tZlm7g3rCNfzw4qC6DZGVgHaHS?rs=1&pid=ImgDetMain",
    "https://upload.wikimedia.org/wikipedia/commons/9/96/US_Nickel_2013_Rev.png",
    ]

document.addEventListener("DOMContentLoaded", async () => {
    console.log("DOM loaded");
   let coin = ["heads", "tails"];
   


   document.getElementById("toss-button").addEventListener("click",getCoinToss);
    
}) 
function getCoinToss () {
    let index = Math.floor(Math.random()*5);
    let image = document.getElementById("image").src = images[index];
}