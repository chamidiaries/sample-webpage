	var acc = document.getElementsByClassName("accordion");
	var i;
	for (i = 0; i < acc.length; i++) {
			this.classList.toggle("active");
		acc[i].onclick = function(){
			this.nextElementSibling.classList.toggle("show");
	  }
	}