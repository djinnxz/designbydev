(function() {

            var bodyEl = $('body'),
                navToggleBtn = bodyEl.find('.dropDown');

            navToggleBtn.on('click', function(e) {
                bodyEl.toggleClass('active-nav');
                e.preventDefault();
            });



        })();
