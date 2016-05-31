'use srtict'
// Первая часть задания - Поиск картинок
$(function(){

	$('#form').on('submit',function(e){
		e.preventDefault();
		callAjax();
		
	});

	$('.search').on('click', function(){
		callAjax();
	});

});

function callAjax(){

		var result = $('.search_form').val();
		var API_KEY = '2635191-26bc1804549fdc586216531ae';
		var URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+result+"&callback=pixabayCallBack&context=?";

		$.ajax({
			url : URL,
			dataType: 'jsonp'
		});
}

function pixabayCallBack(dataImg){
	var html = $('.search_result').html();
	var content = tmpl(html,{
		data:dataImg
		});
	$('.wrapper').append(content);
}

// Вторая часть задания ООП

function Human(){
	
		this.name = 'Alex',
		this.age = 17,
		this.gender = 'man',
		this.rise = 184,
		this.weight = 80	
}

var newHuman = new Human();

function Worker(){

		this.placeOfWork = 'factory',
		this.wage = 7000,
		this.work = function(){
			console.log('worker');
		}
}

var newWorker = new Worker();
newWorker.__proto__ = newHuman;

console.log('newWorker',newWorker.gender)


function Student(){

		this.placeOfStudy = 'Universaty',
		this.scholarship = 1100,
		this.watchTVShows = function(){
			console.log('watch TV shows');
		}
}

var newStudent = new Student();
newStudent.__proto__ = newHuman;

console.log('newStudent', newStudent.age);


console.log('newStudent ---' , newStudent);
console.log('newWorker ---' , newWorker);
console.log('newHuman ---' , newHuman);