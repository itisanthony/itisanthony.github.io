var items = document.querySelectorAll(".timeline li");

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function callbackFunc() {
  for (var i = 0; i < items.length; i++) {
    if (isElementInViewport(items[i])) {
      if(!items[i].classList.contains("in-view")){
        items[i].classList.add("in-view");
      }
    } else if(items[i].classList.contains("in-view")) {
        items[i].classList.remove("in-view");
    }
  }
}
 
window.addEventListener("load", callbackFunc);
window.addEventListener("scroll", callbackFunc);



// const dictionary = { 
// 	'bytedance': ['Working as part of TikTok Douyin Tool Line Core Team', 
// 					'Responsible for video production, such as short video recording and editing, props, ﬁlters, special effects, release, and other related functionalities'],
// 	'grindr': ['Rewrote image capture functionality and custom UI from scratch using AVFoundation', 
// 				'Developed new feature proﬁle hashtags and achieved usage rate of over 50%',
// 				'Utilized GCD, Realm, and Moya for multithreading, caching, and network abstraction',
// 				'Migrated codebase from Objective-C to Swift and applied RxSwift following iOS design patterns'],
// 	'ypcloud inc.': ['Developed search engine using NLP, integrated with Google Cloud for production',
// 					'Designed Google Cloud Virtual Machine Time Scheduling Controller, deployed with Docker',
// 					'Created data pipelining using Node-Red and wrote in Node.js'],
// 	'matrix mas': ['Helped redo entire theme for website and add new features for e-commerce',
// 					'Implemented SEO for web crawling and indexing',
// 					'Worked with Google Analytics, Search Console, and Webmaster Tools for the business team']
// }

// const companies = {
// 	'bytedance': 'Software Engineer | 2020',
// 	'grindr': 'Software Engineering Intern | Jun 2019 - Sept 2020',
// 	'ypcloud inc.': 'Software Engineering Intern | Mar 2019 - Jun 2019',
// 	'matrix mas': 'Frontend Engineering Intern | Jul 2018 - Sept 2018'
// }

// function hoverIn(target) {
// 	// target.style.color = '#222222';

// 	var buttonId = target.id;
// 	var key = (target.textContent);
// 	console.log('key', key);

	
// 	// Added company's name
// 	var titlename = document.getElementById('titlename');
// 	titlename.innerHTML = key;

// 	// Added job position at the company
// 	var jobposition = document.getElementById('jobposition');
// 	jobposition.innerHTML = companies[key.toLowerCase()];


// 	// Added job desc
// 	var str = '';
// 	var ul = document.getElementById('modal-list');
// 	dictionary[key.toLowerCase()].forEach(function(text) {
// 		str += '<li>' + text + '</li>';	
// 	});

// 	$('#modal-container').removeAttr('class').addClass(buttonId);
// 	$('body').addClass('modal-active');

// 	var ul = document.getElementById('modal-list');
// 	ul.innerHTML = str;
// }

// function isOnScreen(element) {
//     var curPos = element.offset();
//     var curTop = curPos.top;
//     var screenHeight = $(window).height();
//     return (curTop > screenHeight) ? false : true;
// }

// function hoverOut(target) {
//  //    $('#modal-container').mouseout(function(){
// 	//   $(this).addClass('out');
// 	//   $('body').removeClass('modal-active');
// 	// });
// 	$('#modal-container').click(function(){
// 	  $(this).addClass('out');
// 	  $('body').removeClass('modal-active');
// 	  // target.style.color = '#ffff';
// 	});	
// }

