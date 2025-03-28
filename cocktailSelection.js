const selection_arr = [];

const select_all = document.getElementById("select-all");

const gin_and_tonic = document.getElementById("0");
const screwdriver = document.getElementById("1");
const cuba_libre = document.getElementById("2");
const tequila_sunrise = document.getElementById("3");
const rusty_nail = document.getElementById("4");
const godfather = document.getElementById("5");
const black_russian = document.getElementById("6");
const white_russian = document.getElementById("7");
const moscow_mule = document.getElementById("8");
const woo_woo = document.getElementById("9");
const seabreeze = document.getElementById("10");
const screaming_orgasm = document.getElementById("11");
const el_diablo = document.getElementById("12");
const sex_on_the_beach = document.getElementById("13");
const cosmopolitan = document.getElementById("14");
const daiquiri = document.getElementById("15");
const french_martini = document.getElementById("16");
const lynchburg_lemonade = document.getElementById("17");
const horses_neck = document.getElementById("18");
const tom_collins = document.getElementById("19");
const long_island_iced_tea = document.getElementById("20");
const dry_martini = document.getElementById("21");
const manhatten = document.getElementById("22");
const rob_roy = document.getElementById("23");
const batanga = document.getElementById("24");
const margarita = document.getElementById("25");
const side_car = document.getElementById("26");
const amaretto_sour = document.getElementById("27");
const whiskey_sour = document.getElementById("28");
const clover_club = document.getElementById("29");
const bramble = document.getElementById("30");
const mojito = document.getElementById("31");
const caipirinha = document.getElementById("32");
const mint_julep = document.getElementById("33");
const gin_basil_smash = document.getElementById("34");
const southside = document.getElementById("35");
const b52 = document.getElementById("36");
const pornstar_martini = document.getElementById("37");
const bellini = document.getElementById("38");
const french_75 = document.getElementById("39");
const old_fashioned_quick = document.getElementById("40");
const old_fashioned = document.getElementById("41");
const dark_and_stormy = document.getElementById("42");
const hemingway_daiquiri = document.getElementById("43");
const white_lady = document.getElementById("44");
const aviation = document.getElementById("45");
const negroni = document.getElementById("46");
const boulevardier = document.getElementById("47");
const aperol_spritz = document.getElementById("48");
const mimosa = document.getElementById("49");
const espresso_martini = document.getElementById("50");
const brandy_alexander = document.getElementById("51");
const grasshopper = document.getElementById("52");
const mai_tai = document.getElementById("53");
const kir_royal = document.getElementById("54");
const classic_champagne_cocktail = document.getElementById("55");
const blood_and_sand = document.getElementById("56");
const apple_martini = document.getElementById("57");
const kamikaze = document.getElementById("58");
const singapore_sling = document.getElementById("59");
const gimlet = document.getElementById("60");
const martinez = document.getElementById("61");
const sazerac = document.getElementById("62");
const zombie = document.getElementById("63");
const pina_colada = document.getElementById("64");
const lemon_drop = document.getElementById("65");

function removeItemAll(arr, value) {
  var i = 0;
  while (i < arr.length) {
    if (arr[i] === value) {
      arr.splice(i, 1);
    } else {
      ++i;
    }
  }
  return arr;
}

function startQuiz() {
  // Save the selection array to localStorage
  localStorage.setItem("selection_arr", JSON.stringify(selection_arr));
  
  // Redirect to the quiz page
  window.location.href = "./cocktailGame.html";
}

const selectAllCheckboxes = () => {
  const checkboxes = document.querySelectorAll('input[type=checkbox]');
  checkboxes.forEach((cb) => {
    if (!cb.checked) {
      cb.checked = true;
      // Call the respective checkbox handler directly
      handleCheckboxChange(cb);
    }
  });
}

const unselectAllCheckboxes = () => {
  const checkboxes = document.querySelectorAll('input[type=checkbox]');
  checkboxes.forEach((cb) => {
    if (cb.checked) {
      cb.checked = false;
      // Call the respective checkbox handler directly
      handleCheckboxChange(cb);
    }
  });
}

const handleCheckboxChange = (checkbox) => {
  // Add or remove the cocktail from the selection array based on the checkbox state
  if (checkbox.checked) {
    const index = checkbox.id;
    selection_arr.push(cocktailList[index]);
  } else {
    const index = checkbox.id;
    selection_arr.splice(selection_arr.indexOf(cocktailList[index]), 1);
  }

  // Print the current selection array
  console.log(selection_arr);
  select_all.checked = selection_arr.length === 66; // Check "Select All" if all are selected
};

select_all.addEventListener('change', function () {
  if (select_all.checked) {
    selectAllCheckboxes();
  } else {
    unselectAllCheckboxes();
  }
});

gin_and_tonic.addEventListener('change', function () {
  handleCheckboxChange(gin_and_tonic);
});

screwdriver.addEventListener('change', function () {
  handleCheckboxChange(screwdriver);
});

cuba_libre.addEventListener('change', function () {
  handleCheckboxChange(cuba_libre);
});

tequila_sunrise.addEventListener('change', function () {
  handleCheckboxChange(tequila_sunrise);
});

rusty_nail.addEventListener('change', function () {
  handleCheckboxChange(rusty_nail);
});

godfather.addEventListener('change', function () {
  handleCheckboxChange(godfather);
});

black_russian.addEventListener('change', function () {
  handleCheckboxChange(black_russian);
});

white_russian.addEventListener('change', function () {
  handleCheckboxChange(white_russian);
});

moscow_mule.addEventListener('change', function () {
  handleCheckboxChange(moscow_mule);
});

woo_woo.addEventListener('change', function () {
  handleCheckboxChange(woo_woo);
});

seabreeze.addEventListener('change', function () {
  handleCheckboxChange(seabreeze);
});

screaming_orgasm.addEventListener('change', function () {
  handleCheckboxChange(screaming_orgasm);
});

el_diablo.addEventListener('change', function () {
  handleCheckboxChange(el_diablo);
});

sex_on_the_beach.addEventListener('change', function () {
  handleCheckboxChange(sex_on_the_beach);
});

cosmopolitan.addEventListener('change', function () {
  handleCheckboxChange(cosmopolitan);
});

daiquiri.addEventListener('change', function () {
  handleCheckboxChange(daiquiri);
});

french_martini.addEventListener('change', function () {
  handleCheckboxChange(french_martini);
});

lynchburg_lemonade.addEventListener('change', function () {
  handleCheckboxChange(lynchburg_lemonade);
});

horses_neck.addEventListener('change', function () {
  handleCheckboxChange(horses_neck);
});

tom_collins.addEventListener('change', function () {
  handleCheckboxChange(tom_collins);
});

long_island_iced_tea.addEventListener('change', function () {
  handleCheckboxChange(long_island_iced_tea);
});

dry_martini.addEventListener('change', function () {
  handleCheckboxChange(dry_martini);
});

manhatten.addEventListener('change', function () {
  handleCheckboxChange(manhatten);
});

rob_roy.addEventListener('change', function () {
  handleCheckboxChange(rob_roy);
});

batanga.addEventListener('change', function () {
  handleCheckboxChange(batanga);
});

margarita.addEventListener('change', function () {
  handleCheckboxChange(margarita);
});

side_car.addEventListener('change', function () {
  handleCheckboxChange(side_car);
});

amaretto_sour.addEventListener('change', function () {
  handleCheckboxChange(amaretto_sour);
});

whiskey_sour.addEventListener('change', function () {
  handleCheckboxChange(whiskey_sour);
});

clover_club.addEventListener('change', function () {
  handleCheckboxChange(clover_club);
});

bramble.addEventListener('change', function () {
  handleCheckboxChange(bramble);
});

mojito.addEventListener('change', function () {
  handleCheckboxChange(mojito);
});

caipirinha.addEventListener('change', function () {
  handleCheckboxChange(caipirinha);
});

mint_julep.addEventListener('change', function () {
  handleCheckboxChange(mint_julep);
});

gin_basil_smash.addEventListener('change', function () {
  handleCheckboxChange(gin_basil_smash);
});

southside.addEventListener('change', function () {
  handleCheckboxChange(southside);
});

b52.addEventListener('change', function () {
  handleCheckboxChange(b52);
});

pornstar_martini.addEventListener('change', function () {
  handleCheckboxChange(pornstar_martini);
});

bellini.addEventListener('change', function () {
  handleCheckboxChange(bellini);
});

french_75.addEventListener('change', function () {
  handleCheckboxChange(french_75);
});

old_fashioned_quick.addEventListener('change', function () {
  handleCheckboxChange(old_fashioned_quick);
});

old_fashioned.addEventListener('change', function () {
  handleCheckboxChange(old_fashioned);
});

dark_and_stormy.addEventListener('change', function () {
  handleCheckboxChange(dark_and_stormy);
});

hemingway_daiquiri.addEventListener('change', function () {
  handleCheckboxChange(hemingway_daiquiri);
});

white_lady.addEventListener('change', function () {
  handleCheckboxChange(white_lady);
});

aviation.addEventListener('change', function () {
  handleCheckboxChange(aviation);
});

negroni.addEventListener('change', function () {
  handleCheckboxChange(negroni);
});

boulevardier.addEventListener('change', function () {
  handleCheckboxChange(boulevardier);
});

aperol_spritz.addEventListener('change', function () {
  handleCheckboxChange(aperol_spritz);
});

mimosa.addEventListener('change', function () {
  handleCheckboxChange(mimosa);
});

espresso_martini.addEventListener('change', function () {
  handleCheckboxChange(espresso_martini);
});

brandy_alexander.addEventListener('change', function () {
  handleCheckboxChange(brandy_alexander);
});

grasshopper.addEventListener('change', function () {
  handleCheckboxChange(grasshopper);
});

mai_tai.addEventListener('change', function () {
  handleCheckboxChange(mai_tai);
});

kir_royal.addEventListener('change', function () {
  handleCheckboxChange(kir_royal);
});

classic_champagne_cocktail.addEventListener('change', function () {
  handleCheckboxChange(classic_champagne_cocktail);
});

blood_and_sand.addEventListener('change', function () {
  handleCheckboxChange(blood_and_sand);
});

apple_martini.addEventListener('change', function () {
  handleCheckboxChange(apple_martini);
});

kamikaze.addEventListener('change', function () {
  handleCheckboxChange(kamikaze);
});

singapore_sling.addEventListener('change', function () {
  handleCheckboxChange(singapore_sling);
});

gimlet.addEventListener('change', function () {
  handleCheckboxChange(gimlet);
});

martinez.addEventListener('change', function () {
  handleCheckboxChange(martinez);
});

sazerac.addEventListener('change', function () {
  handleCheckboxChange(sazerac);
});

zombie.addEventListener('change', function () {
  handleCheckboxChange(zombie);
});

pina_colada.addEventListener('change', function () {
  handleCheckboxChange(pina_colada);
});

lemon_drop.addEventListener('change', function () {
  handleCheckboxChange(lemon_drop);
});