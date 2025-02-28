const cocktailList = [
  {
    name: "Gin & Tonic",
    glass: "Highball",
    ice: "Cubed",
    procedure: "Build",
    ingredients: [{"Gin" : "40"}, {"Tonic" : "Fill"}],
    recipeLength: 2,
    garnish: "Lime Wedge",
    image: "./Images/Gin&Tonic.jpg"
  },
  {
    name: "Screwdriver",
    glass: "Highball",
    ice: "Cubed",
    procedure: "Build",
    ingredients: [{"Vodka" : "40"}, {"Orange Juice" : "Fill"}],
    recipeLength: 2,
    garnish: "None",
    image: "./Images/Screwdriver.png"
  },
  {
    name: "Cuba Libre",
    glass: "Highball",
    ice: "Cubed",
    procedure: "Build",
    ingredients: [{"Light Rum" : "40"}, {"Fresh Lime Juice" : "10"}, {"Coca Cola" : "Fill"}],
    recipeLength: 3,
    garnish: "Lime Wedge",
    image: "./Images/CubaLibre.png"
  },
  {
    name: "Tequila Sunrise",
    glass: "Highball",
    ice: "Cubed",
    procedure: "Build & Sink",
    ingredients: [{"Tequila" : "40"}, {"Orange Juice" : "Fill"}, {"Grenadine" : "10"}],
    recipeLength: 3,
    garnish: "None",
    image: "./Images/TequilaSunrise.png"
  },
  {
    name: "Rusty Nail",
    glass: "Rocks",
    ice: "Cubed",
    procedure: "Build",
    ingredients: [{"Scotch Whiskey" : "30"}, {"Drambuie" : 30}],
    recipeLength: 2,
    garnish: "Lemon Zest",
    image: "./Images/RustyNail.png"
  },
  {
    name: "Godfather",
    glass: "Rocks",
    ice: "Cubed",
    procedure: "Build",
    ingredients: [{"Scotch Whiskey" : "30"}, {"Amaretto" : "30"}],
    recipeLength: 2,
    garnish: "None",
    image: "./Images/Godfather.png"
  },
  {
    name: "Black Russian",
    glass: "Rocks",
    ice: "Cubed",
    procedure: "Build",
    ingredients: [{"Vodka" : "40"}, {"Kahlua" : "20"}],
    recipeLength: 2,
    garnish: "None",
    image: "./Images/BlackRussian.png"
  },
  {
    name: "White Russian",
    glass: "Rocks",
    ice: "Cubed",
    procedure: "Build",
    ingredients: [{"Vodka" : "40"}, {"Kahlua" : "20"}, {"Milk" : "Fill"}],
    recipeLength: 3,
    garnish: "None",
    image: "./Images/WhiteRussian.png"
  },
  {
    name: "Moscow Mule",
    glass: "Copper Mug",
    ice: "Cubed",
    procedure: "Build",
    ingredients: [{"Vodka" : "40"}, {"Fresh Lime Juice" : "20"}, {"Ginger Beer" : "Fill"}],
    recipeLength: 3,
    garnish: "Lime Wedge",
    image: "./Images/MoscowMule.png"
  },
  {
    name: "Woo Woo",
    glass: "Highball",
    ice: "Cubed",
    procedure: "Build",
    ingredients: [{"Vodka" : "20"}, {"Peachtree" : "20"}, {"Cranberry Juice" : "Fill"}],
    recipeLength: 3,
    garnish: "Lime Wedge",
    image: "./Images/WooWoo.png"
  },
  {
    name: "Seabreeze",
    glass: "Highball",
    ice: "Cubed",
    procedure: "Build & Float",
    ingredients: [{"Vodka" : "40"}, {"Cranberry Juice" : "60"}, {"Grapefruit Juice" : "40"}],
    recipeLength: 3,
    garnish: "None",
    image: "./Images/Seabreeze.png"
  },
  {
    name: "Screaming Orgasm",
    glass: "Rocks",
    ice: "Cubed",
    procedure: "Shake & Strain",
    ingredients: [{"Vodka" : "10"}, {"Kahlua" : "10"}, {"Amaretto" : "10"}, {"Baileys" : "10"}, {"Milk" : "40"}],
    recipeLength: 5,
    garnish: "None",
    image: "./Images/ScreamingOrgasm.png"
  },
  {
    name: "El Diablo",
    glass: "Highball",
    ice: "Cubed",
    procedure: "Build",
    ingredients: [{"Tequila" : "30"}, {"Crème De Casis" : "10"}, {"Fresh Lime Juice" : "10"}, {"Ginger Ale" : "Fill"}],
    recipeLength: 4,
    garnish: "Lime Wedge",
    image: "./Images/ElDiablo.jpg"
  },
  {
    name: "Sex On The Beach",
    glass: "Highball",
    ice: "Cubed",
    procedure: "Build",
    ingredients: [{"Vodka" : "20"}, {"Peachtree" : "20"}, {"Cranberry Juice" : "50"}, {"Orange Juice" : "50"}],
    recipeLength: 4,
    garnish: "None",
    image: "./Images/SexOnTheBeach.png"
  },
  {
    name: "Cosmopolitan",
    glass: "Chilled Martini",
    ice: "None",
    procedure: "Shake & Fine Strain",
    ingredients: [{"Lemon Vodka" : "40"}, {"Cointreau" : "20"}, {"Fresh Lime Juice" : "10"}, {"Cranberry Juice" : "30"}],
    recipeLength: 4,
    garnish: "Orange Zest",
    image: "./Images/Cosmopolitan.jpg"
  },
  {
    name: "Daiquiri",
    glass: "Chilled Martini",
    ice: "None",
    procedure: "Shake & Fine Strain",
    ingredients: [{"Light Rum" : "60"}, {"Fresh Lime Juice" : "30"}, {"Sugar Syrup" : "15"}],
    recipeLength: 3,
    garnish: "None",
    image: "./Images/Daiquiri.png"
  },
  {
    name: "French Martini",
    glass: "Chilled Martini",
    ice: "None",
    procedure: "Shake & Fine Strain",
    ingredients: [{"Vodka" : "40"}, {"Chambord" : "20"}, {"Pineapple Juice" : "40"}],
    recipeLength: 3,
    garnish: "1 Raspberry",
    image: "./Images/FrenchMartini.png"
  },
  {
    name: "Lynchburg Lemonade",
    glass: "Highball",
    ice: "Cubed",
    procedure: "Shake & Strain",
    ingredients: [{"Jack Daniel's" : "40"}, {"Cointreau" : "20"}, {"Fresh Lemon Juice" : "20"}, {"Sugar Syrup" : "10"}, {"Lemonade" : "Top"}],
    recipeLength: 5,
    garnish: "Lemon Wedge",
    image: "./Images/LynchburgLemonade.jpg"
  },
  {
    name: "Horse's Neck",
    glass: "Highball",
    ice: "Cubed",
    procedure: "Build",
    ingredients: [{"Angostura Bitters" : "2 Dashes"}, {"Bourbon" : "40"}, {"Ginger Ale" : "Fill"}],
    recipeLength: 3,
    garnish: "Lemon Spiral",
    image: "./Images/HorsesNeck.png"
  },
  {
    name: "Tom Collins",
    glass: "Highball",
    ice: "Cubed",
    procedure: "Shake & Strain",
    ingredients: [{"Gin" : "60"}, {"Fresh Lemon Juice" : "30"}, {"Sugar Syrup" : "15"}, {"Soda Water" : "Top"}],
    recipeLength: 4,
    garnish: "Lemon Wedge",
    image: "./Images/TomCollins.png"
  },
  {
    name: "Long Island Iced Tea",
    glass: "Highball",
    ice: "Cubed",
    procedure: "Shake & Strain",
    ingredients: [{"Vodka" : "20"}, {"Light Rum" : "20"}, {"Gin" : "20"}, {"Tequila" : "20"}, {"Cointreau" : "20"}, {"Fresh Lemon Juice" : "20"}, {"Sugar Syrup" : "10"}, {"Coca Cola" : "Top"}],
    recipeLength: 8,
    garnish: "Lemon Wedge",
    image: "./Images/LongIslandIcedTea.png"
  },
  {
    name: "Dry Martini",
    glass: "Chilled Martini",
    ice: "None",
    procedure: "Stir & Julep Strain",
    ingredients: [{"Dry Vermouth" : "1 Barspoon"}, {"Gin" : "60"}],
    recipeLength: 2,
    garnish: "Olives",
    image: "./Images/DryMartini.png"
  },
  {
    name: "Manhatten",
    glass: "Chilled Martini",
    ice: "None",
    procedure: "Stir & Julep Strain",
    ingredients: [{"Angostura Bitters" : "2 Dashes"}, {"Sweet Vermouth" : "20"}, {"Bourbon" : "60"}],
    recipeLength: 3,
    garnish: "1 Cherry",
    image: "./Images/Manhatten.jpg"
  },
  {
    name: "Rob Roy",
    glass: "Chilled Martini",
    ice: "None",
    procedure: "Stir & Julep Strain",
    ingredients: [{"Angostura Bitters" : "2 Dashes"}, {"Sweet Vermouth" : "20"}, {"Scotch Whiskey" : "60"}],
    recipeLength: 3,
    garnish: "1 Cherry",
    image: "./Images/RobRoy.png"
  },
  {
    name: "Batanga",
    glass: "Highball",
    ice: "Cubed",
    procedure: "Build",
    ingredients: [{"Tequila" : "40"}, {"Fresh Lime Juice" : "20"}, {"Coca Cola" : "Fill"}],
    recipeLength: 3,
    garnish: "Salt Rim",
    image: "./Images/Batanga.png"
  },
  {
    name: "Margarita",
    glass: "Chilled Martini",
    ice: "None",
    procedure: "Shake & Fine Strain",
    ingredients: [{"Tequila" : "40"}, {"Cointreau" : "20"}, {"Fresh Lime Juice" : "30"}, {"Sugar Syrup" : "10"}],
    recipeLength: 4,
    garnish: "Salt Rim",
    image: "./Images/Margarita.jpg"
  },
  {
    name: "Side Car",
    glass: "Chilled Martini",
    ice: "None",
    procedure: "Shake & Fine Strain",
    ingredients: [{"Cognac" : "40"}, {"Cointreau" : "20"}, {"Fresh Lemon Juice" : "30"}, {"Sugar Syrup" : "10"}],
    recipeLength: 4,
    garnish: "Sugar Rim",
    image: "./Images/SideCar.png"
  },
  {
    name: "Amaretto Sour",
    glass: "Rocks",
    ice: "Cubed",
    procedure: "Dry Shake, Shake & Strain",
    ingredients: [{"Angostura Bitters" : "2 Dashes"}, {"Egg White" : "15"}, {"Amaretto" : "60"}, {"Fresh Lemon Juice" : "30"}, {"Sugar Syrup" : "10"}],
    recipeLength: 5,
    garnish: "Lemon Wedge & Cherry",
    image: "./Images/AmarettoSour.png"
  },
  {
    name: "Whiskey Sour",
    glass: "Rocks",
    ice: "Cubed",
    procedure: "Dry Shake, Shake & Strain",
    ingredients: [{"Ansostura Bitters" : "2 Dashes"}, {"Egg White" : "15"}, {"Bourbon" : "60"}, {"Fresh Lemon Juice" : "30"}, {"Sugar Syrup" : "15"}],
    recipeLength: 5,
    garnish: "Orange Zest & Cherry",
    image: "./Images/WhiskeySour.png"
  },
  {
    name: "Clover Club",
    glass: "Chilled Martini",
    ice: "None",
    procedure: "Dry Shake, Shake & Fine Strain",
    ingredients: [{"Egg White" : "15"}, {"Raspberry Puree" : "15"}, {"Gin" : "60"}, {"Fresh Lemon Juice" : "30"}],
    recipeLength: 4,
    garnish: "1 Raspberry",
    image: "./Images/CloverClub.jpg"
  },
  {
    name: "Bramble",
    glass: "Rocks",
    ice: "Crushed",
    procedure: "Shake, Strain & Float",
    ingredients: [{"Gin" : "40"}, {"Fresh Lemon Juice" : "20"}, {"Sugar Syrup" : "10"}, {"Crème De Mure" : "20"}],
    recipeLength: 4,
    garnish: "Lemon Wedge & 2 Blackberries",
    image: "./Images/Bramble.jpg"
  },
  {
    name: "Mojito",
    glass: "Highball",
    ice: "Crushed",
    procedure: "Muddle, Bash, Build & Churn",
    ingredients: [{"Lime Wedges" : "4 Wedges"}, {"Sugar Syrup" : "20"}, {"Mint Leaves" : "8-12 Leaves"}, {"Light Rum" : "60"}, {"Soda" : "Top"}],
    recipeLength: 5,
    garnish: "Mint Sprig",
    image: "./Images/Mojito.png"
  },
  {
    name: "Caipirinha",
    glass: "Rocks",
    ice: "Crushed",
    procedure: "Muddle, Build & Churn",
    ingredients: [{"Lime Wedges" : "6 Wedges"}, {"Sugar Syrup" : "20"}, {"Cachaca" : "60"}],
    recipeLength: 3,
    garnish: "Lime Wedge",
    image: "./Images/Caipirinha.png"
  },
  {
    name: "Mint Julep",
    glass: "Julep Tin",
    ice: "Crushed",
    procedure: "Soak, Muddle, Bash, Build & Churn",
    ingredients: [{"Angostura Soaked Sugar Cube" : "1 Cube"}, {"Barspoon Of Soda" : "1 Barspoon"}, {"Mint Leaves" : "8-12 Leaves"}, {"Bourbon" : "60"}],
    recipeLength: 4,
    garnish: "Mint Sprig",
    image: "./Images/MintJulep.png"
  },
  {
    name: "Gin Basil Smash",
    glass: "Rocks",
    ice: "Cubed",
    procedure: "Shake & Fine Strain",
    ingredients: [{"Basil Leaves" : "8-12 Leaves"}, {"Gin" : "60"}, {"Fresh Lemon Juice" : "30"}, {"Sugar Syrup" : "15"}],
    recipeLength: 4,
    garnish: "Basil Leaf",
    image: "./Images/GinBasilSmash.jpg"
  },
  {
    name: "Southside",
    glass: "Chilled Martini",
    ice: "None",
    procedure: "Shake & Fine Strain",
    ingredients: [{"Mint Leaves" : "8-12 Leaves"}, {"Gin" : "60"}, {"Fresh Lime Juice" : "30"}, {"Sugar Syrup" : "15"}],
    recipeLength: 4,
    garnish: "Single Mint Leaf",
    image: "./Images/Southside.jpg"
  },
  {
    name: "B52",
    glass: "Shooter",
    ice: "None",
    procedure: "Layer In Order",
    ingredients: [{"Kahlua" : "20"}, {"Baileys" : "20"}, {"Cointreau" : "20"}],
    recipeLength: 3,
    garnish: "None",
    image: "./Images/B52.png"
  },
  {
    name: "Pornstar Martini",
    glass: "Chilled Martini",
    ice: "None",
    procedure: "Shake & Fine Strain",
    ingredients: [{"Vodka" : "40"}, {"Passionfruit Liqueur" : "20"}, {"Passionfruit Puree" : "20"}, {"Fresh Lime Juice" : "20"}, {"Vanilla Syrup" : "10"}, {"Brut Champagne" : "Shot On The Side"}],
    recipeLength: 6,
    garnish: "1/2 Passionfruit",
    image: "./Images/PornstarMartini.png"
  },
  {
    name: "Bellini",
    glass: "Champagne Flute",
    ice: "None",
    procedure: "Build & Stir Gently",
    ingredients: [{"Peach Puree" : "10"}, {"Peachtree" : "10"}, {"Prosecco" : "Fill"}],
    recipeLength: 3,
    garnish: "None",
    image: "./Images/Bellini.jpg"
  },
  {
    name: "French 75",
    glass: "Champagne Flute",
    ice: "None",
    procedure: "Shake & Fine Strain",
    ingredients: [{"Gin" : "40"}, {"Fresh Lemon Juice" : "20"}, {"Sugar Syrup" : "10"}, {"Champagne" : "Top"}],
    recipeLength: 4,
    garnish: "Lemon Zest",
    image: "./Images/French75.png"
  },
  {
    name: "Old Fashioned (Quick)",
    glass: "Rocks",
    ice: "Cubed",
    procedure: "Build & Stir",
    ingredients: [{"Angostura Bitters" : "2 Dashes"}, {"Bourbon" : "60"}, {"Sugar Syrup" : "10"}],
    recipeLength: 3,
    garnish: "Orange Zest",
    image: "./Images/OldFashioned.jpg"
  },
  {
    name: "Old Fashioned",
    glass: "Rocks",
    ice: "Cubed",
    procedure: "Soak, Muddle, Build & Stir Slowly",
    ingredients: [{"Angostura Soaked Sugar Cube" : "1 Cube"}, {"Soda Water" : "1 Barspoon"}, {"Bourbon" : "60"}],
    recipeLength: 3,
    garnish: "Orange Zest",
    image: "./Images/OldFashioned.jpg"
  },
  {
    name: "Dark & Stormy",
    glass: "Highball",
    ice: "Cubed",
    procedure: "Build & Float",
    ingredients: [{"Fresh Lime Juice" : "20"}, {"Ginger Beer" : "Fill"}, {"Dark Rum" : "40"}],
    recipeLength: 3,
    garnish: "Lime Wedge",
    image: "./Images/Dark&Stormy.png"
  },
  {
    name: "Hemingway Daiquiri",
    glass: "Chilled Martini",
    ice: "None",
    procedure: "Shake & Fine Strain",
    ingredients: [{"Light Rum" : "50"}, {"Maraschino" : "10"}, {"Fresh Lime Juice" : "20"}, {"Grapefruit Juice" : "20"}],
    recipeLength: 4,
    garnish: "1 Cherry",
    image: "./Images/HemingwayDaiquiri.png"
  },
  {
    name: "White Lady",
    glass: "Chilled Martini",
    ice: "None",
    procedure: "Shake & Fine Strain",
    ingredients: [{"Gin" : "40"}, {"Cointreau" : "20"}, {"Fresh Lemon Juice" : "30"}, {"Sugar Syrup" : "10"}],
    recipeLength: 4,
    garnish: "Lemon Zest",
    image: "./Images/WhiteLady.png"
  },
  {
    name: "Aviation",
    glass: "Chilled Martini",
    ice: "None",
    procedure: "Shake & Fine Strain",
    ingredients: [{"Gin" : "50"}, {"Maraschino" : "10"}, {"Fresh Lemon Juice" : "30"}, {"Sugar Syrup" : "10"}],
    recipeLength: 4,
    garnish: "1 Cherry",
    image: "./Images/Aviation.jpg"
  },
  {
    name: "Negroni",
    glass: "Rocks",
    ice: "Cubed",
    procedure: "Roll",
    ingredients: [{"Sweet Vermouth" : "20"}, {"Campari" : "20"}, {"Gin" : "20"}],
    recipeLength: 3,
    garnish: "Orange Zest",
    image: "./Images/Negroni.png"
  },
  {
    name: "Boulevardier",
    glass: "Rocks",
    ice: "Cubed",
    procedure: "Roll",
    ingredients: [{"Sweet Vermouth" : "20"}, {"Campari" : "20"}, {"Bourbon" : "20"}],
    recipeLength: 3,
    garnish: "Orange Zest",
    image: "./Images/Boulevardier.jpg"
  },
  {
    name: "Aperol Spritz",
    glass: "Wine Glass",
    ice: "Cubed",
    procedure: "Build In Order",
    ingredients: [{"Prosecco" : "60"}, {"Aperol" : "40"}, {"Soda Water" : "20"}],
    recipeLength: 3,
    garnish: "Orange Slice",
    image: "./Images/AperolSpritz.png"
  },
  {
    name: "Mimosa",
    glass: "Champagne Flute",
    ice: "None",
    procedure: "Build",
    ingredients: [{"Orange Juice" : "1 Part"}, {"Champagne" : "1 Part"}],
    recipeLength: 2,
    garnish: "None",
    image: "./Images/Mimosa.png"
  },
  {
    name: "Espresson Martini",
    glass: "Chilled Martini",
    ice: "None",
    procedure: "Shake & Fine Strain",
    ingredients: [{"Vodka" : "40"}, {"Kahlua" : "20"}, {"Espresson" : "1 Shot"}, {"Sugar Syrup" : "10"}],
    recipeLength: 4,
    garnish: "3 Coffee Beans",
    image: "./Images/EspressoMartini.png"
  },
  {
    name: "Brandy Alexander",
    glass: "Chilled Martini",
    ice: "None",
    procedure: "Shake & Fine Strain",
    ingredients: [{"Brandy" : "40"}, {"Dark Cacao Liqueur" : "20"}, {"Milk" : "40"}],
    recipeLength: 3,
    garnish: "Grated Nutmeg",
    image: "./Images/BrandyAlexander.png"
  },
  {
    name: "Grasshopper",
    glass: "Chilled Martini",
    ice: "None",
    procedure: "Shake & Fine Strain",
    ingredients: [{"Crème De Menthe" : "30"}, {"White Cacao Liqueur" : "30"}, {"Milk" : "40"}],
    recipeLength: 3,
    garnish: "None",
    image: "./Images/Grasshopper.png"
  },
  {
    name: "Mai Tai",
    glass: "Tiki Mug",
    ice: "Crushed",
    procedure: "Shake, Strain & Float",
    ingredients: [{"Dark Rum" : "40"}, {"Cointreau" : "10"}, {"Fresh Lime Juice" : "20"}, {"Orgeat Syrup" : "10"}, {"Overproof Rum" : "10"}],
    recipeLength: 5,
    garnish: "Mint Sprig",
    image: "./Images/MaiTai.png"
  },
  {
    name: "Kir Royal",
    glass: "Champagne Flute",
    ice: "None",
    procedure: "Build",
    ingredients: [{"Crème De Cassis" : "20"}, {"Champagne" : "Fill"}],
    recipeLength: 2,
    garnish: "None",
    image: "./Images/KirRoyal.png"
  },
  {
    name: "Classic Champagne Cocktail",
    glass: "Champagne Flute",
    ice: "None",
    procedure: "Soak & Build",
    ingredients: [{"Angostura Soaked Sugar Cube" : "1 Cube"}, {"Cognac" : "20"}, {"Champagne" : "Fill"}],
    recipeLength: 3,
    garnish: "None",
    image: "./Images/ClassicChampagneCocktail.png"
  },
  {
    name: "Blood & Sand",
    glass: "Chilled Martini",
    ice: "None",
    procedure: "Shake & Fine Strain",
    ingredients: [{"Scotch Whiskey" : "20"}, {"Sweet Vermouth" : "20"}, {"Cherry Brandy" : "20"}, {"Orange Juice" : "20"}],
    recipeLength: 4,
    garnish: "Orange Zest",
    image: "./Images/Blood&Sand.jpg"
  },
  {
    name: "Apple Martini",
    glass: "Chilled Martini",
    ice: "None",
    procedure: "Shake & Fine Strain",
    ingredients: [{"Vodka" : "40"}, {"Apple Liqueur" : "20"}, {"Fresh Lemon Juice" : "30"}, {"Sugar Syrup" : "10"}],
    recipeLength: 4,
    garnish: "Lemon Zest",
    image: "./Images/AppleMartini.png"
  },
  {
    name: "Kamikaze",
    glass: "Shooter",
    ice: "None",
    procedure: "Shake & Fine Strain",
    ingredients: [{"Vodka" : "20"}, {"Cointreau" : "10"}, {"Fresh Lime Juice" : "10"}],
    recipeLength: 3,
    garnish: "None",
    image: "./Images/Kamikaze.png"
  },
  {
    name: "Singapore Sling",
    glass: "Sling",
    ice: "Cubed",
    procedure: "Shake & Strain",
    ingredients: [{"Angostura Bitters" : "1 Dash"}, {"Grenadine" : "1 Dash"}, {"Benedectine D.O.M" : "5"}, {"Cointreau" : "5"}, {"Cherry Brandy" : "10"}, {"Fresh Lime Juice" : "10"}, {"Gin" : "20"}, {"Pineapple Juice" : "80"}],
    recipeLength: 8,
    garnish: "Pineapple Wedge & Cherry",
    image: "./Images/SingaporeSling.jpg"
  },
  {
    name: "Gimlet",
    glass: "Chilled Martini",
    ice: "None",
    procedure: "Stir & Julep Strain",
    ingredients: [{"Gin" : "60"}, {"Lime Cordial" : "10"}],
    recipeLength: 2,
    garnish: "Lime Zest",
    image: "./Images/Gimlet.png"
  },
  {
    name: "Martinez",
    glass: "Chilled Martini",
    ice: "None",
    procedure: "Stir & Julep Strain",
    ingredients: [{"Orange Bitters" : "2 Dashes"}, {"Maraschino" : "1 Barspoon"}, {"Sweet Vermouth" : "20"}, {"Gin" : "60"}],
    recipeLength: 4,
    garnish: "Lemon Zest",
    image: "./Images/Martinez.png"
  },
  {
    name: "Sazerac",
    glass: "Rocks",
    ice: "None",
    procedure: "Rinse, Stir & Julep Strain",
    ingredients: [{"Absinthe" : "Rinse"}, {"Peychaud's Bitters" : "3 Dashes"}, {"Cognac" : "60"}, {"Sugar Syrup" : "10"}],
    recipeLength: 4,
    garnish: "Lemon Zest",
    image: "./Images/Sazerac.png"
  },
  {
    name: "Zombie",
    glass: "Tiki Mug",
    ice: "Crushed",
    procedure: "Shake & Strain",
    ingredients: [{"Angostura Bitters" : "4 Dashes"}, {"Absinthe" : "2 Dashes"}, {"Overproof Rum" : "10"}, {"Dark Rum" : "20"}, {"Light Rum" : "20"}, {"Grenadine" : "10"}, {"Cinnamon Syrup" : "20"}, {"Fresh Lime Juice" : "20"}, {"Grapefruit Juice" : "20"}],
    recipeLength: 9,
    garnish: "Mint Sprig",
    image: "./Images/Zombie.png"
  },
  {
    name: "Pina Colada",
    glass: "Hurricane",
    ice: "Cubed",
    procedure: "Shake & Strain",
    ingredients: [{"Light Rum" : "40"}, {"Coconut Liqueur" : "20"}, {"Fresh Lime Juice" : "10"}, {"Pineapple Juice" : "60"}, {"Coconut Cream" : "40"}],
    recipeLength: 5,
    garnish: "Pineapple Wedge & Cherry",
    image: "./Images/PinaColada.png"
  },
  {
    name: "Lemon Drop",
    glass: "Shooter",
    ice: "None",
    procedure: "Shake & Fine Strain",
    ingredients: [{"Vodka" : "20"}, {"Fresh Lemon Juice" : "10"}, {"Sugar Syrup" : "10"}],
    recipeLength: 3,
    garnish: "Sugar Coated Lemon Wedge",
    image: "./Images/LemonDrop.png"
  }
];