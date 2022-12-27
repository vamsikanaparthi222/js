let employees=[{"id":1,"first_name":"Toinette","last_name":"Doche","email":"tdoche0@google.com.au","gender":"Female"},
{"id":2,"first_name":"Augustin","last_name":"Blaycock","email":"ablaycock1@umn.edu","gender":"Male"},
{"id":3,"first_name":"Eddy","last_name":"Bromell","email":"ebromell2@yolasite.com","gender":"Male"},
{"id":4,"first_name":"Jerri","last_name":"Picard","email":"jpicard3@woothemes.com","gender":"Male"},
{"id":5,"first_name":"Tyne","last_name":"Cluelow","email":"tcluelow4@ft.com","gender":"Female"},
{"id":6,"first_name":"Ryon","last_name":"Eymor","email":"reymor5@tuttocitta.it","gender":"Male"},
{"id":7,"first_name":"Britte","last_name":"Alldis","email":"balldis6@topsy.com","gender":"Female"},
{"id":8,"first_name":"Leodora","last_name":"Shuard","email":"lshuard7@networkadvertising.org","gender":"Female"},
{"id":9,"first_name":"Bjorn","last_name":"Rickertsen","email":"brickertsen8@freewebs.com","gender":"Male"},
{"id":10,"first_name":"Clemente","last_name":"Castagnasso","email":"ccastagnasso9@wsj.com","gender":"Male"},
{"id":11,"first_name":"Julietta","last_name":"Potter","email":"jpottera@vinaora.com","gender":"Female"},
{"id":12,"first_name":"Chandler","last_name":"Stallard","email":"cstallardb@intel.com","gender":"Male"},
{"id":13,"first_name":"Joela","last_name":"Howis","email":"jhowisc@house.gov","gender":"Female"},
{"id":14,"first_name":"Obidiah","last_name":"Dryburgh","email":"odryburghd@indiatimes.com","gender":"Male"},
{"id":15,"first_name":"Carree","last_name":"Caton","email":"ccatone@g.co","gender":"Female"},
{"id":16,"first_name":"Boy","last_name":"Quadling","email":"bquadlingf@example.com","gender":"Male"},
{"id":17,"first_name":"Axe","last_name":"McElhargy","email":"amcelhargyg@digg.com","gender":"Genderqueer"},
{"id":18,"first_name":"Luciano","last_name":"Portriss","email":"lportrissh@hp.com","gender":"Male"},
{"id":19,"first_name":"Dayna","last_name":"Mulrean","email":"dmulreani@princeton.edu","gender":"Female"},
{"id":20,"first_name":"Nerta","last_name":"Campos","email":"ncamposj@i2i.jp","gender":"Agender"},
{"id":21,"first_name":"Lothario","last_name":"Barrell","email":"lbarrellk@craigslist.org","gender":"Male"},
{"id":22,"first_name":"Rand","last_name":"Krebs","email":"rkrebsl@intel.com","gender":"Male"},
{"id":23,"first_name":"Freddie","last_name":"McLae","email":"fmclaem@eventbrite.com","gender":"Agender"},
{"id":24,"first_name":"Dorine","last_name":"Pahlsson","email":"dpahlssonn@comcast.net","gender":"Female"},
{"id":25,"first_name":"Quintin","last_name":"Ewdale","email":"qewdaleo@businessweek.com","gender":"Agender"},
{"id":26,"first_name":"Manya","last_name":"Boston","email":"mbostonp@soup.io","gender":"Female"},
{"id":27,"first_name":"Benni","last_name":"Dunniom","email":"bdunniomq@ft.com","gender":"Female"},
{"id":28,"first_name":"Pier","last_name":"Sousa","email":"psousar@sciencedirect.com","gender":"Female"},
{"id":29,"first_name":"Patricio","last_name":"Kubica","email":"pkubicas@mashable.com","gender":"Male"},
{"id":30,"first_name":"Eduino","last_name":"Lanham","email":"elanhamt@sohu.com","gender":"Male"},
{"id":31,"first_name":"Elfrida","last_name":"Lowfill","email":"elowfillu@disqus.com","gender":"Female"},
{"id":32,"first_name":"Essy","last_name":"Richardon","email":"erichardonv@tinyurl.com","gender":"Female"},
{"id":33,"first_name":"Garfield","last_name":"Escalante","email":"gescalantew@livejournal.com","gender":"Male"},
{"id":34,"first_name":"Margarita","last_name":"Scarse","email":"mscarsex@admin.ch","gender":"Female"},
{"id":35,"first_name":"Stephen","last_name":"Perkinson","email":"sperkinsony@ucla.edu","gender":"Male"},
{"id":36,"first_name":"Rhys","last_name":"Millard","email":"rmillardz@uiuc.edu","gender":"Male"},
{"id":37,"first_name":"Cass","last_name":"Dodding","email":"cdodding10@harvard.edu","gender":"Female"},
{"id":38,"first_name":"Aundrea","last_name":"Duckwith","email":"aduckwith11@census.gov","gender":"Female"},
{"id":39,"first_name":"Zondra","last_name":"Fargher","email":"zfargher12@walmart.com","gender":"Female"},
{"id":40,"first_name":"Tersina","last_name":"Belford","email":"tbelford13@gizmodo.com","gender":"Female"},
{"id":41,"first_name":"Josselyn","last_name":"Westoff","email":"jwestoff14@goo.gl","gender":"Female"},
{"id":42,"first_name":"Flint","last_name":"Malyon","email":"fmalyon15@unc.edu","gender":"Male"},
{"id":43,"first_name":"Valeda","last_name":"Jaher","email":"vjaher16@wikispaces.com","gender":"Female"},
{"id":44,"first_name":"Evangelina","last_name":"McQuilliam","email":"emcquilliam17@sakura.ne.jp","gender":"Female"},
{"id":45,"first_name":"Emma","last_name":"Cherrett","email":"echerrett18@cocolog-nifty.com","gender":"Female"},
{"id":46,"first_name":"Deny","last_name":"Pascoe","email":"dpascoe19@webeden.co.uk","gender":"Female"},
{"id":47,"first_name":"Giorgia","last_name":"Lorenc","email":"glorenc1a@forbes.com","gender":"Agender"},
{"id":48,"first_name":"Andrea","last_name":"Fielding","email":"afielding1b@seattletimes.com","gender":"Male"},
{"id":49,"first_name":"Park","last_name":"Parlet","email":"pparlet1c@theatlantic.com","gender":"Male"},
{"id":50,"first_name":"Artemis","last_name":"Astridge","email":"aastridge1d@discovery.com","gender":"Male"}]
  function displayData() {
    let rows = ""
    for (emp of employees) {
      rows =
        rows +
        `<tr>
              <td> ${emp.id}</td> 
              <td> ${emp.first_name}</td> 
              <td> ${emp.email}</td> 
              <td> ${emp.gender}</td>
        </tr>`;
    }
    document.getElementById("tbody_data").innerHTML = rows;
  }