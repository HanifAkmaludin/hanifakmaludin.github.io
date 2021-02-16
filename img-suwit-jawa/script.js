// function getPilihanComputer(){
// 	const comp = Math.random();
// 	if(comp < 0.34) return 'gajah';
// 	if(comp >= 0.34 && comp <= 0.67 ) return 'orang';
// 	return 'semut';
// }

function getPilihanComputer(){
    const computer = Math.random();
    if(computer < 0.34) return 'gajah';
    if(computer >= 0.34 && computer <= 0.67 ) return 'orang';
    return 'semut';
}

// function getHasil(comp, p){
// 	if(p == comp) return 'SERI';
// 	if(p == 'gajah') return (comp == 'orang') ? 'MENANG' : 'KALAH';
// 	if(p == 'orang') return (comp == 'gajah') ? 'KALAH' : 'MENANG';
// 	if(p == 'semut') return (comp == 'orang') ? 'KALAH' : 'MENANG';
// }

function getHasil(computer, player){
    if(player == computer) return 'SERI';
    if(player == 'gajah') return (computer == 'orang') ? 'MENANG' : 'KALAH';
    if(player == 'orang') return (computer == 'gajah') ? 'KALAH' : 'MENANG';
    if(player == 'semut') return (computer == 'orang') ? 'KALAH' : 'MENANG';
}

let skorComputer = 0;
let skorPlayer = 0;
function infoskor(hasil){
	if(hasil == 'MENANG') return skorPlayer += 1;
	if(hasil == 'KALAH') return skorComputer += 1;
	if(hasil == 'SERI') return skorPlayer, skorComputer;
}

function putar(){
    const imgComputer = document.querySelector('.img-computer');
    const gambar = ['gajah','semut','orang'];
    let i = 0;
    const waktuMulai = new Date().getTime();
    setInterval(function(){
        if(new Date().getTime() - waktuMulai > 1000){
            clearInterval;
            return;
        }
        imgComputer.setAttribute('src','img/'+gambar[i++]+'.png');
        if(i == gambar.length) i = 0;
    }, 100);
};

const img = document.querySelectorAll('li img');
img.forEach(function(pil){
	pil.addEventListener('click', function(){
		const pilComp = getPilihanComputer();
		const pilPlayer = pil.className;
		const hasil = getHasil(pilComp, pilPlayer);
		putar();
		infoskor(hasil);
		setTimeout(function(){
			const gambar = document.querySelector('.img-computer');
			gambar.setAttribute('src', 'img/'+pilComp+'.png');
			const infoHasil = document.querySelector('.info');
			infoHasil.innerHTML = hasil;
			const skorKomputer = document.querySelector('.skorComp');
			skorKomputer.innerHTML = 'Skor : '+skorComputer;
			const skorUser = document.querySelector('.skorPlayer');
			skorUser.innerHTML = 'Skor : '+skorPlayer;
			console.log(skorComputer);
			console.log(skorPlayer);
		}, 1000);
	});
});