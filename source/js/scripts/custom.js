// main object
var NOR = {
	// window height
	$hgt: $(window).height(),
	// preloader
	$pre: $('#preloader'),
	$body: $('body'),
	// scroll to
	$scroll: $(".scroll"),
	// modal
	$imgPop: $('.general_content img'),
	$mapPop: $('#launch-map'),
	$videoPop: $('#launch-video'),
	$modBod: $('.modal-body'),
	$modTitle: $('.modal-title'),
	
	 // initialize the functions contained within the object
    initialize: function () {
		var _this = this;
		
		// initialize below functions
		_this.flexSliders().launchModals().parsleyValidation().bindHandlers();
		
		$(window).load(function () {
			
			
					
		});
		
		$('.dropdown-menu input, .dropdown-menu label').click(function(e) {
			e.stopPropagation();
		});
		
		return _this
	},
	
	// slideshow functions
	flexSliders: function () {
		var _this = this;
		
		var slider1 = {
			animation: "fade",
			directionNav: false,
			controlNav: false
		};
		var slider2 = {
			animation: "slide",
			controlNav: "thumbnails"
		};
		
		// sliders
		$("#supersized").flexslider(slider1);
		$("#catalogue-slider").flexslider(slider2);
		
		return _this
	},
	
	// modal functions
	launchModals: function () {
		var _this = this;
		
		// modal for content images
		_this.$imgPop.click(function(){
			var _alt = $(this).attr("alt");
			
			_this.$modBod.empty();
			_this.$modTitle.html(_alt);
			$($(this).parents('p').html()).appendTo('.modal-body');
			$('#imgPopUp').modal({show:true});
			//return _this
		});
	
		
		// modal for extensions, general info, pre departure info
		_this.$videoPop.click(function(){
			var _dataLink = $(this).attr("data-link");
			var _dataTitle = $(this).attr("data-title");
			
			_this.$modTitle.empty();
			_this.$modTitle.html(_dataTitle);
			$('#iframe-content').attr('src', _dataLink);
			$('#modal').modal({
				show:true
			});
		});
		
		// modal for content images
		_this.$mapPop.click(function(){
			var _alt = $(this).attr("data-title");
			
			//_this.$modBod.empty();
			_this.$modTitle.html(_alt);
			//$($(this).find('address').html()).appendTo('.modal-body');
			$('#mapPopUp').modal({
				show:true
			});
			//return _this
		});
		
		return _this
	},
	
	// validation function
	parsleyValidation: function () {
		var _this = this;
		
		var parsleyHandler = {
			// integrated for bootstrap
			successClass: 'has-success',
			errorClass: 'has-error',
			errors: {
				classHandler: function(el) {
					return $(el).closest('.form-group, .input-group');
				},
				errorsWrapper: '<span class=\"help-block\"></span>',
				errorElem: '<span></span>'
			},
		};
		$('#contactForm').parsley(parsleyHandler);
		$('#catalog-enquiry').parsley(parsleyHandler);
		$('#subscribe-form').parsley(parsleyHandler);
		
		return _this
	},
	
	// animated scroll to anchor function
	bindHandlers: function () {
		var _this = this;
		
		// page scroll	
		_this.$scroll.click(function(event){		
			event.preventDefault();
			$('html,body').animate({scrollTop:$(this.hash).offset().top}, 700);
		});
		return _this
	},
	
};
// initialize object
jQuery(function (event) {
	NOR.initialize();
});

$("select").selectpicker({style: 'btn-default', menuStyle: ''});

var nowTemp = new Date();
var now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);
 
var checkin = $('#checkin').datepicker({
	onRender: function(date) {
		return date.valueOf() < now.valueOf() ? 'disabled' : '';
	}
}).on('changeDate', function(ev) {
	if (ev.date.valueOf() > checkout.date.valueOf()) {
		var newDate = new Date(ev.date)
		newDate.setDate(newDate.getDate() + 1);
		checkout.setValue(newDate);
	}
	checkin.hide();
	$('#checkout')[0].focus();
}).data('datepicker');

var checkout = $('#checkout').datepicker({
	onRender: function(date) {
		return date.valueOf() <= checkin.date.valueOf() ? 'disabled' : '';
	}
}).on('changeDate', function(ev) {
	checkout.hide();
}).data('datepicker');