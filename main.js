// $(document).on('ready', function() {
  
// });

$(".editable-data").on("click",function(){
	var currentState = $(this);
	currentState.hide();
	$(this).after('<textarea class="editable-area">'+currentState.text()+'</textarea>');
	console.log(this);
	$(".editable-area").on("blur", function(){
		// console.log("Test");
		var newState = $(".editable-area").val();
		console.log(newState);
		$(this).after(newState);
		// currentState.show();
		$(".editable-area").remove();

	})
	// $(".new-text").
		// $(".personal-data").on("blur",function(){
		// // console.log("test it out");

		// });
	});

// $(".personal-data").on("blur",function(){
// 	console.log("test it out");

// 	});




		// $(".personal-data").off("click",function(){
		// 	$(this).blur();
		// });