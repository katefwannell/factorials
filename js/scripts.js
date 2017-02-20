function factorial(n) {
  if (n === 0) {
    return 1;
  }
  // This is it! Recursion!!
  return n * factorial(n - 1);
}

$(document).ready(function() {

	$("form#factorial").submit(function(event) {
		event.preventDefault();

		$("#factorial-results").show();
		$("input:checkbox[name=factorial]:checked").each(function(){
			var thisFactorial = factorial(parseInt($(this).val()));
			$("#factorial-results").append($(this).val() + "! = " + thisFactorial + "<br>");
		});

		$("#factorial").hide();

	});
});
