// cammera slider
jQuery(function(){
			jQuery('#camera_wrap_1').camera({
				thumbnails: false,				
			});

			
		});
	
// star bg scripts
$(".snow-canvas").snow();

// star bg scripts
var limit=100, // Max number of starts
container=document.getElementById('container');
loop={
	//initilizeing
	start:function(){
		for (var i=0; i <= 70; i++) {
			var star=this.newStar();
			star.style.top=this.rand()*100+"%";
			star.style.left=this.rand()*100+"%";
			star.style.webkitAnimationDelay=this.rand()+"s";
			star.style.mozAnimationDelay=this.rand()+"s";
			container.appendChild(star);
		};
	},
	//to get random number
	rand:function(){
		return Math.random();
	},
	//createing html dom for star
	newStar:function(){
		var d = document.createElement('div');
		d.innerHTML = '<figure class="star"><figure class="star-top"></figure><figure class="star-bottom"></figure></figure>';
		return d.firstChild;
	},
};
loop.start();

