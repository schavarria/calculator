$(document).ready(function(){

//addition

$("#plus").on('click', function(){
	var num1 = Number($('#num_1').val())
	var num2 = Number($('#num_2').val())
	var answer = num1 + num2 
	console.log (answer)
	$("#answer").text(answer)
})


$("#minus").on('click', function(){
	var num1 = Number($('#num_1').val())
	var num2 = Number($('#num_2').val())
	var answer = num1 - num2 
	console.log (answer)
	$("#answer").text(answer)

})

$("#mult").on('click', function(){
	var num1 = Number($('#num_1').val())
	var num2 = Number($('#num_2').val())
	var answer = num1 * num2 
	console.log (answer)
	$("#answer").text(answer)

})

$("#divi").on('click', function(){
	var num1 = Number($('#num_1').val())
	var num2 = Number($('#num_2').val())
	var answer = num1 / num2 
	console.log (answer)
	$("#answer").text(answer)

})


















})