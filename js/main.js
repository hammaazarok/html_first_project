$ = (...arg)=>{ return document.querySelector(arg); }
$$= (...arg)=>{ return document.querySelectorAll(arg); }

function addNftList(){
	let page = new String();	
	for( let i=100; i--; ){
		page+=`
			<a href="#" class="uk-padding-small">
				<img src="nft/${i}.png" alt="NFT #${i}"></img>
			</a>
		`;
	};	$('#nft_section').innerHTML = page;
}

function addRandomNft(){
	let page = new String();	
	for( let i=100,j=18; i--; ){
		if( j && (Math.random()>0.7) ){ 
			page+=` <img src="nft/${i}.png" alt="NFT #${i}"></img>`;
			j--;
		}
	};	$('#random_nft').innerHTML = page;
}
			
window.addEventListener( 'load',()=>{
	addNftList(); addRandomNft();
});