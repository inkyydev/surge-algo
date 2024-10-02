jQuery(function($){
	let textEl = document.querySelector('.mode_text');
	let textEl2 = document.querySelector('.mode_text2');
	var lightMode = localStorage.getItem('lightmode');

    if(lightMode){
        if(lightMode == 1){
            document.getElementById("togBtn").checked = true;
            document.getElementById("togBtn2").checked = true;

            textEl.textContent = 'light mode';
            textEl2.textContent = 'light mode';
        }
    }
    else {
        var darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

        if(darkMode){
            
        }else{
            document.getElementById("togBtn").checked = true;
            document.getElementById("togBtn2").checked = true;

            textEl.textContent = 'light mode';
            textEl2.textContent = 'light mode';
        }
    }
    
    
    


    

    $(document).ready(function(){
        var switchStatus = false;
            $("#togBtn").on('change', function() {
                if ($(this).is(':checked')) {
                    switchStatus = $(this).is(':checked');
                    $('body').addClass('light-mode');
                    textEl.textContent = 'light mode';
					localStorage.setItem('lightmode', 1);
                }
                else {
                   switchStatus = $(this).is(':checked');
                    $('body').removeClass('light-mode');
                    textEl.textContent = 'dark mode';
					localStorage.setItem('lightmode', 0);
                }
            });
        });

		$(document).ready(function(){
			let textEl2 = document.querySelector('.mode_text2');
			var switchStatus = false;
				$("#togBtn2").on('change', function() {
					if ($(this).is(':checked')) {
						switchStatus = $(this).is(':checked');
						$('body').addClass('light-mode');
						textEl2.textContent = 'light mode';
					    localStorage.setItem('lightmode', 1);
					}
					else {
					   switchStatus = $(this).is(':checked');
						$('body').removeClass('light-mode');
						textEl2.textContent = 'dark mode';
					    localStorage.setItem('lightmode', 0);
					}
				});
			});
		

});