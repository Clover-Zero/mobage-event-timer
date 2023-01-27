<script>
            
                    // ID of the element to add the Countdown Clock to
                    var $clockElement = $('[data-countdown]');
                
                    $clockElement.each( function() {
                
                        // Read data from HTML attributes to store in vars
                        var $clock = $(this),
                            eventDisplay = $(this).data('countdown')
                            // Event STARTING time
                            eventStart = $(this).data('countdownStart'),
                            // Event ENDING time
                            eventEnd = $(this).data('countdownEnd'),
                            // Event TIMEZONE
                            eventTimeZone = $(this).data('countdownTimezone');
                
                        // CONVERT eventEnd to MOMENT.JS FORMAT to compare with current time later on.
                        var eventEndTime = moment.tz(eventEnd, eventTimeZone);
                
                        // Time to COUNTDOWN TO
                        var countdownTo = moment.tz(eventDisplay, eventTimeZone);
                
                        $clock.countdown(countdownTo.toDate(), { elapse: true } ).on('update.countdown', function(event) {
                            // Clock Countdown HTML Ouptut
                            var output = '<div class="time seconds"><span class="count">%S</span> <span class="label">sec%!S</span></div>';
                            // Add number of MINUTES left
                            if ( event.offset.totalMinutes > 0 ) {
                                output = '<div class="time minutes"><span class="count">%M</span> <span class="label">min%!M</span></div>' + output;
                            }
                            // Add number of HOURS left
                            if ( event.offset.totalHours > 0 ) {
                                output = '<div class="time hours"><span class="count">%H</span> <span class="label">hr%!H</span></div>' + output;
                            }
                            // Add number of DAYS left
                            if ( event.offset.totalDays > 0 ) {
                                output = '<div class="time days"><span class="count">%-D</span> <span class="label">day%!D</span></div>' + output;
                            }
                
                            // Get CURRENT TIME in the event's timezone
                            var currentTime = moment().tz(eventTimeZone);
                
                            // If CURRENT TIME is GREATER THAN event ENDING TIME, display...
                            if ( currentTime > eventEndTime && event.elapsed ) {
                                $(this).html(''
                                    + '<p>EVENT HAS ENDED.</p>'
                                ).parent().addClass('disabled');
                                // Stop the Countdown
                                $(this).countdown('stop');
                            // Display COUNTDOWN to event...
                            } else {
                                $(this).html( event.strftime(output) );
                            }
                
                        });
                
                    });
                
                </script>
                </div><!--CAROUSEL ITEM-->
              
            <!--CAROUSEL ITEM-->
              <div class="carousel-item">
                    <div class="card bg-dark border-0 rounded-0 p-1">
                        <div class="card border-0 rounded-0" style="height:150px; background-size:cover; background-position:center; background-image:url('https://webusstatic.yo-star.com/uy0news/ae/9cff547e4dca9633d1cf5254226556e8.png');">
                        <p class="d-flex border-0 rounded-0 h-100 justify-content-center align-items-end flex-wrap" style="font-size:large; color:white; text-shadow:1px 1px 5px #000;">Trials for Navigator 1</p>
                        </div>
                    </div>
                
                    <div class="countdown-clock">
                        <div class="countdown-container"
                            data-countdown="2023-01-27 03:59:00"
                            data-countdown-start="2023-01-20 10:00:00"
                            data-countdown-end="2023-01-27 03:59:00"
                            data-countdown-timezone="Canada/Yukon">
                        </div>
                    </div>
                    <script>
                
                        // ID of the element to add the Countdown Clock to
                        var $clockElement = $('[data-countdown]');
                    
                        $clockElement.each( function() {
                    
                            // Read data from HTML attributes to store in vars
                            var $clock = $(this),
                                eventDisplay = $(this).data('countdown')
                                // Event STARTING time
                                eventStart = $(this).data('countdownStart'),
                                // Event ENDING time
                                eventEnd = $(this).data('countdownEnd'),
                                // Event TIMEZONE
                                eventTimeZone = $(this).data('countdownTimezone');
                    
                            // CONVERT eventEnd to MOMENT.JS FORMAT to compare with current time later on.
                            var eventEndTime = moment.tz(eventEnd, eventTimeZone);
                    
                            // Time to COUNTDOWN TO
                            var countdownTo = moment.tz(eventDisplay, eventTimeZone);
                    
                            $clock.countdown(countdownTo.toDate(), { elapse: true } ).on('update.countdown', function(event) {
                                // Clock Countdown HTML Ouptut
                                var output = '<div class="time seconds"><span class="count">%S</span> <span class="label">sec%!S</span></div>';
                                // Add number of MINUTES left
                                if ( event.offset.totalMinutes > 0 ) {
                                    output = '<div class="time minutes"><span class="count">%M</span> <span class="label">min%!M</span></div>' + output;
                                }
                                // Add number of HOURS left
                                if ( event.offset.totalHours > 0 ) {
                                    output = '<div class="time hours"><span class="count">%H</span> <span class="label">hr%!H</span></div>' + output;
                                }
                                // Add number of DAYS left
                                if ( event.offset.totalDays > 0 ) {
                                    output = '<div class="time days"><span class="count">%-D</span> <span class="label">day%!D</span></div>' + output;
                                }
                    
                                // Get CURRENT TIME in the event's timezone
                                var currentTime = moment().tz(eventTimeZone);
                    
                                // If CURRENT TIME is GREATER THAN event ENDING TIME, display...
                                if ( currentTime > eventEndTime && event.elapsed ) {
                                    $(this).html(''
                                        + '<p>EVENT HAS ENDED.</p>'
                                    ).parent().addClass('disabled');
                                    // Stop the Countdown
                                    $(this).countdown('stop');
                                // Display COUNTDOWN to event...
                                } else {
                                    $(this).html( event.strftime(output) );
                                }
                    
                            });
                    
                        });
                    
                    </script>