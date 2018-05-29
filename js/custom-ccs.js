! function($) {
  "use strict";
  $(document).ready(function() {
    localStorage['loader'] = '';

    if($('.site').hasClass('loader')) {
      localStorage['loader'] = $('.site').attr('page');
    }

    $('.html-loader').each(function() {
      $(this).load($(this).attr('file'));
    });

    if($('#insights-entries').length) {
      var entries, entries_html, entry_item, title, slug, image, image_url;
      $.getJSON('http://kingcode.mx/wp-json/wp/v2/posts', function(data) {
        $('#insights-entries #entries').hide();
        entries = data;
        $.each(entries, function(index, entry) {
          title = entry.title.rendered;
          slug = entry.slug;
          
          entry_item = '<div class="portfolio-masonry-item masonry-item item-'+ index +' text-center col-lg-4 col-md-4 col-sm-6 col-sm-offset-0 col-xs-10 col-xs-offset-1">';
          entry_item += '<a href="insights-details.html?entry=' + slug +'">';
          entry_item += '<div class="grid-image-wrapper">';
          entry_item += '<div class="grid-overlay" style="background-color: rgba(233, 177, 42, 0.8);"></div>';
          entry_item += '<div class="grid-thumbnail"><img src="" alt="" /></div>';
          entry_item += '<div class="grid-content-wrapper">';
          entry_item += '<div class="grid-content-inner">';
          entry_item += '<div class="grid-content"><h3 class="os-font white">'+ title +'</h3></div>';
          entry_item += '</div>';
          entry_item += '</div>';
          entry_item += '</div>';
          entry_item += '</a>';
          entry_item += '</div>';
    
          $('#insights-entries #entries').append(entry_item);
          $('#insights-entries #entries .item-'+ index).hide();
        });
      }).done(function() {
        $('#insights-entries').find('.loading').hide();
        $('#insights-entries #entries').show();
        $.each(entries, function(index, entry) {
          if(entry._links['wp:featuredmedia'][0].href) {
            image_url = entry._links['wp:featuredmedia'][0].href;
            $.getJSON(image_url, function(data) {
              image = data.guid.rendered;
              $('#insights-entries .item-'+ index +' .grid-thumbnail img').attr('src', image);
              $('#insights-entries #entries .item-'+ index).fadeIn(1000);
            });
          }
          else {
            image = 'images/insight/not-found.png';
            $('#insights-entries .item-'+ index +' .grid-thumbnail img').attr('src', image);
            $('#insights-entries #entries .item-'+ index).fadeIn(1000);
          }
        });
      });
    }

    if($('#insights-entry').length) {
      var entry_url = getUrlParameter('entry');
      if(entry_url) {
        var entry, entry_item, title, content, image, date, date_options, date_formated;
        $.getJSON('http://kingcode.mx/wp-json/wp/v2/posts?slug=' + entry_url, function(data) {
          $('#insights-entry #entry').hide();  
          entry = data;
          title = entry[0].title.rendered;
          content = entry[0].content.rendered;
          date = new Date(entry[0].date);
          date_options = { year: 'numeric', month: 'long' };
          date_formated = date.toLocaleDateString('en-US', date_options)
          
          entry_item = '<div class="content-wrapper">';
          entry_item += '<div><a class="insights-back" href="insights.html">< Back</a></div>'
          entry_item += '<div class="title"><h1 class="text-center os-font">'+ title +'</h1><p class="date text-center os-font">' + date_formated + '</p></div>';
          entry_item += '<div class="image featured-image text-center"><img src="" alt="featured-image" /></div>';
          entry_item += '<div class="content">'+ content +'</div>';
          entry_item += '<div><a class="insights-back" href="insights.html">< Back</a></div>'
          entry_item += '</div>';
          
          $('#insights-entry #entry').append(entry_item);
          $('#insights-entry .content-wrapper').find('.featured-image').hide();
        }).done(function() {
          $('#insights-entry').find('.loading').hide();
          if($('#insights-entry .content img').length) {
            $('#insights-entry .content img').removeClass().addClass('img-responsive');
            $('#insights-entry .content img').parent().addClass('image embedded-image text-center');
          } else {
            if(entry[0]._links['wp:featuredmedia'][0].href) {
              var image_url = entry[0]._links['wp:featuredmedia'][0].href;
              $.getJSON(image_url, function(data) {
                image = data.guid.rendered;
                $('#insights-entry .content-wrapper .image img').attr('src', image);
              });
            } else {
              image = 'images/insight/not-found.png';
              $('#insights-entry .content-wrapper .image img').attr('src', image);
            }
            $('#insights-entry #entry').find('.featured-image').show();
          }
          $('#insights-entry #entry').fadeIn(1000);
        });
      }
      else {
        window.location.href = "insights.html";
      }
    }
  });

  var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;
        
    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
          return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
  };

  var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };
  
  TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
  
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
    var that = this;
    var delta = 300 - Math.random() * 100;
  
    if (this.isDeleting) { delta /= 2; }
  
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
  
    setTimeout(function() {
      that.tick();
    }, delta);
  };
  
  window.onload = function() {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #ccc }";
    document.body.appendChild(css);
  };

  $(window).load(function() {
    $('.main-nav .menu-item').each(function() {
      if(localStorage['loader'] == $(this).attr('item')) {
        $(this).addClass('active');
      }
    });

    var $btn = $('.btn-navbar'),
        $nav = null,
        $logo = '',
        $fixeditems = null;
    if (!$btn.length) {
        return;
    }
    $nav = $('<div class="noo-main-canvas"></div>').appendTo($('<div id="off-canvas-nav"></div>').appendTo($('.mobile-menu')));
    $($btn.data('target')).clone().appendTo($nav);
    //$('.custom-logo-link img').clone().appendTo('.off-canvas-header');
    $('.icon_menu').click(function() {
        if ($('body').hasClass('noo-open-canvas')) {
            hideMenu();
        } else {
            showMenu();
        }
    });    
  });
}(jQuery);