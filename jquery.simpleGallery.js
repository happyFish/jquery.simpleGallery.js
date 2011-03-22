jQuery.fn.simpleGallery = function(options){
			var defaultOptions = {
				perPage: 3,
				rightButton: '#rightButton',
				leftButton: '#leftButton',
				speed: 200,
				scrollPerPage: 1
			};
			
			var options = $.extend(defaultOptions, options);
			options.perPage = parseInt(options.perPage);
			
			var slide = $(this);

			var num = parseInt(this.children().length);
			var current = 1;
			var width = this.find(':first-child').outerWidth();
						
			if(num <= options.perPage){
				$(options.rightButton).hide();
				$(options.leftButton).hide();
			}
			
			if(num > options.perPage)
				$(options.rightButton).css('opacity', 1);
				
			$(options.rightButton).click(function(){
				if(current + options.perPage > num)
					return false;
				
				var margin = parseInt(slide.css('marginLeft'));
				if(isNaN(margin)) margin = 0;
				slide.animate({'marginLeft' : margin + (width * options.scrollPerPage * -1)}, options.speed);
				
				current = current + options.scrollPerPage;
				checkButtons();
					
			});
			
			$(options.leftButton).click(function(){
				if(current == 1)
					return false;
				
				var margin = parseInt(slide.css('marginLeft'));
				if(isNaN(margin)) margin = 0;
				slide.animate({'marginLeft' : margin + (width * options.scrollPerPage)}, options.speed);
				
				current = current - options.scrollPerPage;
				checkButtons();					
			});
			
			function checkButtons(){
				if(current + options.perPage > num)
					$(options.rightButton).css('opacity', '.3');	
				else
					$(options.rightButton).css('opacity', 1);	
				
				if(current == 1)
					$(options.leftButton).css('opacity', '.3');	
				else
					$(options.leftButton).css('opacity', 1);	
			}
}