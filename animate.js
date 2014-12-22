$(document).ready(function(){
  console.log('animate');
  // Sun vars
  // Idealy, load sun via external file to keep HTML clean
  // var sun = Snap.select('#sun');
  // var sunCircle = sun.select('#circle');
  // var sunRays = sun.select('#rays');
  //
  // // Sun events
  // raysAnimation();
  //
  // // Infinite animation for the sun rays
  // function raysAnimation(){
  //   sunRays.stop().animate(
  //     { transform: 'r90,256,256'}, // Basic rotation around a point. No frills.
  //       10000, // Nice slow turning rays
  //       function(){
  //         sunRays.attr({ transform: 'rotate(0 256 256)'}); // Reset the position of the rays.
  //         raysAnimation(); // Repeat this animation so it appears infinite.
  //       }
  //     );
  //
  //   }
  //
  //   var cloud_snow = Snap.select('#cloud_snow');
  //   var flakes = ['flake-1','flake-2','flake-3']; // Setup our snow. Matches IDs in SVG.
  //
  //   snow();
  //
  //   function snow(){
  //     for (var i=0; i<flakes.length; i++){
  //       var flakeId = flakes[i];
  //       var flake = cloud_snow.select('#'+flakeId); // Select each individual flake from our list
  //       var cx = flake.getBBox().cx; // Get its initial coordinates
  //       var cy = flake.getBBox().cy;
  //
  //       animateFlake(flake, cx, cy); // Send it to be infinitely animated
  //     }
  //   }
  //
  //   function animateFlake(flake, cx, cy){
  //     flake.attr({ transform: 't0 -200'}); // Reset the flake's position to behind the cloud
  //     var timing = getRandomArbitrary(2000,10000); // Random transition time between times we specify
  //     var deg = getRandomArbitrary(-360,360); // Random rotation (allows it to go either direction)
  //     // Animate the flake and do a new animation for it when it's done (repeat this function)
  //     flake.stop().animate({ transform: 't0 200 r'+deg+' '+cx+' '+cy}, timing, function(){ animateFlake(flake, cx, cy);});
  //   }


    var s = Snap("#light");
    Snap.load("gear_and_logo.svg", function (f) {
        s.append(f);

      var your_code = Snap.select('#your_code');
      var time_per_tooth = 16000 / (16 * 6.8);
      var codeShake = function () {
        your_code.stop().animate({ transform: 't-3 0'},
          time_per_tooth,
              function(){
                your_code.stop().animate({ transform: 't-3 -5 r-5'},
                  time_per_tooth,
                  function(){
                    your_code.stop().animate({ transform: 't-3 -5 r-10'},
                    time_per_tooth,
                    function(){
                      your_code.stop().animate({ transform: 't-3 -2 r-5'},
                      time_per_tooth,
                      function(){
                        your_code.stop().animate({ transform: 't-1 0 r-5'},
                        time_per_tooth,
                        function(){
                          your_code.stop().animate({ transform: 't0 0'},
                          time_per_tooth,
                          function(){
                            codeShake();
                          });
                        });
                      });
                    });
                  });

              });
      };
      codeShake();
    });

    var t = Snap("#track");
    Snap.load("new_round_track.svg", function (f) {
      t.append(f);
      var tooth = $('#tooth');
      var total_num = 46;
      var delay = 0.2;
      var total_time = delay * total_num;

      tooth.find('animateMotion').attr({
        dur: total_time
      });

      for (var i = 1; i < total_num; i++) {
        var g = tooth.clone();
        g.find('animateMotion').attr({
          begin: delay * i,
          dur: total_time
        });
        $('#svg2').append(g);

      }
    });

    // Lets us get random numbers from within a range we specify. From MDN docs.
    function getRandomArbitrary(min, max) {
      return Math.random() * (max - min) + min;
    }
  });
