(function () {
  function giphySearch() {
    return fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${key}`) 
      .then(response => response.json());
	  
  }
  function stickerSearch() {
    return fetch(`https://api.giphy.com/v1/stickers/trending?api_key=${key}`)
      .then(response => response.json());
  }

  function appendImage(img) {
		let $div = $('<div class="img-wrapper1"></div>');
    	$('<div class="inner1"></div>').append(img).appendTo($div);
    	$('#gifs').append($div);
  }
	
  function appendImage2(img) {let $div = $('<div class="img-wrapper2"></div>');
    	$('<div class="inner2"></div>').append(img).appendTo($div);
    	$('#stickers').append($div);}
	
function errorImage(img) {
	let $div = $('<div class="img-error"></div>');
    	$('<div class="inner"></div>').append(img).appendTo($div);
    	$('.error').append($div);
  }
	
  function showLoader() {
    $('.loader-wrapper').addClass('shown');
  }

  function hideLoader() {
    $('.loader-wrapper').removeClass('shown');
  }

  async function main() {
    const result = await giphySearch();
	const result2= await stickerSearch();
    await $('#gifs').html('');
	await $('#stickers').html('');
   
	if(result2.data.length&&result.data.length){
		 showLoader();
		let loadedImageCount = 0,loadedImageCount2 =0;
			await result.data.forEach(gif => {
			let img = new Image();
			img.src = gif.images.original.url;
		 // promises.push(onImgLoad(img));
			img.onload = () => {
			loadedImageCount++;
			if (loadedImageCount === result.data.length){
			  hideLoader();
			}
			};
		  appendImage(img);
		});
		  result2.data.forEach(gif => {
		  let img = new Image();
		  img.src = gif.images.original.url;
		  img.onload = () => {
			loadedImageCount2++;
			if (loadedImageCount2 === result2.data.length){
			  hideLoader();
			}
		  };
		  appendImage2(img);
		});    
    }else{
		let img = new Image();
      	img.src = "https://speckyboy.com/wp-content/uploads/2019/04/404-page-web-design-inspiration-34.jpg";
		await errorImage(img);
		
	}
}
	$( window ).on( "load", main );
})();

