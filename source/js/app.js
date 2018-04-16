$(function () {

});

//shop
function addToCard(id, count) {

  let needNew = true;

  let massivCooc = getCook();
  addCount(count);


  for (let i = 0; i < massivCooc.length; i++) {
    if (massivCooc[i].id === id) {
      var newval = getNum(massivCooc[i].count);
      console.log(newval);
      newval += count;
      console.log(newval);

      massivCooc[i].count = newval ;
      needNew = false;
    }
  }

  if (needNew) {
    massivCooc.push({
      id: id,
      count: count
    })
  }
  saveCook(massivCooc)
}

function deliteFromCart(id, count) {
  let massivCooc = getCook();

  let needUpdate = false;

  for (let i = 0; i < massivCooc.length; i++) {
    if (massivCooc[i].id === id) {
      massivCooc[i].count = getNum(massivCooc[i].count) - count;
      if (massivCooc[i].count <= 0) {
        massivCooc.splice(i, 1);
        i--;
      }
      needUpdate = true;
    }
  }

  addCount(-count);

  if (needUpdate) {
    saveCook(massivCooc)
  }
}

function deliteAllCart(id) {
  let massivCooc = getCook();

  let needUpdate = false;

  for (let i = 0; i < massivCooc.length; i++) {
    if (massivCooc[i].id === id) {

      addCount(-massivCooc[i].count);

      massivCooc.splice(i, 1);
      needUpdate = true;
    }
  }

  if (needUpdate) {
    saveCook(massivCooc)
  }
}

function getCook() {
  const nameCook = 'cart';

  let massivCooc = $.cookie(nameCook);
  massivCooc = massivCooc ? JSON.parse(massivCooc) : [];

  return massivCooc;
}
function saveCook(newdata) {
  const nameCook = 'cart';

  var massivCooc = JSON.stringify(newdata);
  $.cookie(nameCook, massivCooc, {path: '/'})
}

function initAJAXmore() {
  var btn = $('#loaddtn');
  var container = $('#contentAddHere');
  var containerPagin = $('#bottompagination');
  var cLoading = 'loading';
  var cDisable = 'disable';
  var text = btn.text();

  containerPagin.on('click', '#loaddtn', function (e) {
    e.preventDefault();
    var self = $(this);

    if (self.hasClass(cDisable) || self.hasClass(cLoading)) {
      return;
    }

    var url = self.attr('href');
    var dev = url === '#';


    self.addClass(cLoading);

    url = (dev) ? window.location.href : url;

    self.text('загрузка');

    // $('#morecontent').load(url);
    $.ajax({
      url: url,
      type: "GET",
      success: function (data) {
        if (dev) {
          setTimeout(function () {
            success(data)
          }, 2000)
        } else {
          success(data);
        }
      },
      error: function (error) {
        self.removeClass(cLoading);
        self.text('Ошибка загрузки попробуйте позже');
        self.addClass(cDisable);
      }
    });

    function success(data) {
      //переходим на следующую страницу
      History.pushState(null, document.title, url);

      var newDatat = $(data);
      var newContent = newDatat.find('#contentAddHere').html();
      var newPagination = newDatat.find('#bottompagination').html();
      // console.log(newContent);
      container.append(newContent);
      containerPagin.html(newPagination);
      self.text(text);
      self.removeClass(cLoading);
    }

  });

  History.Adapter.bind(window, 'statechange', function (e) {
    var State = History.getState();
  });
}