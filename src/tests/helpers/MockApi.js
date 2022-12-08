const ORDINARY_DRINK = 'Ordinary Drink';

const mockAPI = {
  drinks: [
    {
      idDrink: '15997',
      strDrink: 'GG',
      strCategory: ORDINARY_DRINK,
      strAlcoholic: 'Optional alcohol',
      strInstructions: 'Pour the Galliano liqueur over ice. Fill the remainder of the glass with ginger ale and thats all there is to it. You now have a your very own GG.',
      strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/vyxwut1468875960.jpg',
      strIngredient1: 'Galliano',
      strIngredient2: 'Ginger ale',
      strIngredient3: 'Ice',
      strIngredient4: null,
      strMeasure1: '2 1/2 shots ',
      strMeasure2: null,
    },
    {
      idDrink: '17222',
      strDrink: 'A1',
      strCategory: 'Cocktail',
      strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg',
    },
    {
      idDrink: '13501',
      strDrink: 'ABC',
      strCategory: 'Shot',
      strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/tqpvqp1472668328.jpg',
    },
    {
      idDrink: '17203',
      strDrink: 'Kir',
      strCategory: ORDINARY_DRINK,
      strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/apneom1504370294.jpg',
    },
    {
      idDrink: '14229',
      strDrink: '747',
      strCategory: 'Shot',
      strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/xxsxqy1472668106.jpg',
    },
    {
      idDrink: '15288',
      strDrink: '252',
      strCategory: 'Shot',
      strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/rtpxqw1468877562.jpg',
    },
    {
      idDrink: '17225',
      strDrink: 'Ace',
      strCategory: 'Cocktail',
      strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/l3cd7f1504818306.jpg',
    },
    {
      idDrink: '17837',
      strDrink: 'Adam',
      strCategory: ORDINARY_DRINK,
      strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/v0at4i1582478473.jpg',
    },
    {
      idDrink: '13332',
      strDrink: 'B-53',
      strCategory: 'Shot',
      strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/rwqxrv1461866023.jpg',
    },
    {
      idDrink: '13938',
      strDrink: 'AT&T',
      strCategory: ORDINARY_DRINK,
      strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/rhhwmp1493067619.jpg',
    },
    {
      idDrink: '14610',
      strDrink: 'ACID',
      strCategory: 'Shot',
      strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/xuxpxt1479209317.jpg',
    },
    {
      idDrink: '15853',
      strDrink: 'B-52',
    },
  ],
  meals: [
    {
      idMeal: '52977',
      strMeal: 'Corba',
      strCategory: 'Side',
      strArea: 'Turkish',
      strInstructions: 'Pick through your lentils for any foreign debris, rinse them 2 or 3 times, drain, and set aside.  Fair warning, this will probably turn your lentils into a solid block that you’ll have to break up later\r\nIn a large pot over medium-high heat, sauté the olive oil and the onion with a pinch of salt for about 3 minutes, then add the carrots and cook for another 3 minutes.\r\nAdd the tomato paste and stir it around for around 1 minute. Now add the cumin, paprika, mint, thyme, black pepper, and red pepper as quickly as you can and stir for 10 seconds to bloom the spices. Congratulate yourself on how amazing your house now smells.\r\nImmediately add the lentils, water, broth, and salt. Bring the soup to a (gentle) boil.\r\nAfter it has come to a boil, reduce heat to medium-low, cover the pot halfway, and cook for 15-20 minutes or until the lentils have fallen apart and the carrots are completely cooked.\r\nAfter the soup has cooked and the lentils are tender, blend the soup either in a blender or simply use a hand blender to reach the consistency you desire. Taste for seasoning and add more salt if necessary.\r\nServe with crushed-up crackers, torn up bread, or something else to add some extra thickness.  You could also use a traditional thickener (like cornstarch or flour), but I prefer to add crackers for some texture and saltiness.  Makes great leftovers, stays good in the fridge for about a week.',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/58oia61564916529.jpg',
      strTags: 'Soup',
      strYoutube: 'https://www.youtube.com/watch?v=VVnZd8A84z4',
      strIngredient1: 'Lentils',
      strIngredient2: 'Onion',
      strIngredient3: 'Carrots',
      strIngredient4: 'Tomato Puree',
      strIngredient5: 'Cumin',
      strIngredient6: 'Paprika',
      strIngredient7: 'Mint',
      strIngredient8: 'Thyme',
      strIngredient9: 'Black Pepper',
      strIngredient10: 'Red Pepper Flakes',
      strIngredient11: 'Vegetable Stock',
      strIngredient12: 'Water',
      strIngredient13: 'Sea Salt',
      strIngredient14: '',
      strMeasure1: '1 cup ',
      strMeasure2: '1 large',
      strMeasure3: '1 large',
      strMeasure4: '1 tbs',
      strMeasure5: '2 tsp',
      strMeasure6: '1 tsp ',
      strMeasure7: '1/2 tsp',
      strMeasure8: '1/2 tsp',
      strMeasure9: '1/4 tsp',
      strMeasure10: '1/4 tsp',
      strMeasure11: '4 cups ',
      strMeasure12: '1 cup ',
      strMeasure13: 'Pinch',
      strMeasure14: ' ',
      strSource: 'https://findingtimeforcooking.com/main-dishes/red-lentil-soup-corba/',
    },
    {
      idMeal: '53060',
      strMeal: 'Burek',
      strCategory: 'Side',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/tkxquw1628771028.jpg',
    },
    {
      idMeal: '53065',
      strMeal: 'Sushi',
      strCategory: 'Seafood',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/g046bb1663960946.jpg',
    },
    {
      idMeal: '52978',
      strMeal: 'Kumpir',
      strCategory: 'Side',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/mlchx21564916997.jpg',
    },
    {
      idMeal: '53026',
      strMeal: 'Tamiya',
      strCategory: 'Vegetarian',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/n3xxd91598732796.jpg',
    },
    {
      idMeal: '52785',
      strMeal: 'Dal fry',
      strCategory: 'Vegetarian',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/wuxrtu1483564410.jpg',
    },
    {
      idMeal: '52804',
      strMeal: 'Poutine',
      strCategory: 'Miscellaneous',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/uuyrrx1487327597.jpg',
    },
    {
      idMeal: '52844',
      strMeal: 'Lasagne',
      strCategory: 'Pasta',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/wtsvxx1511296896.jpg',
    },
    {
      idMeal: '52929',
      strMeal: 'Timbits',
      strCategory: 'Dessert',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/txsupu1511815755.jpg',
    },
    {
      idMeal: '52948',
      strMeal: 'Wontons',
      strCategory: 'Pork',
      strArea: 'Chinese',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/1525876468.jpg',
    },
    {
      idMeal: '52971',
      strMeal: 'Kafteji',
      strCategory: 'Vegetarian',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/1bsv1q1560459826.jpg',
    },
    {
      idMeal: '53013',
      strMeal: 'Big Mac',
      strCategory: 'Beef',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/urzj1d1587670726.jpg',
    },
  ],
};

export const mockCategory = {
  meals: [
    {
      strCategory: 'Beef',
    },
    {
      strCategory: 'Breakfast',
    },
    {
      strCategory: 'Chicken',
    },
    {
      strCategory: 'Dessert',
    },
    {
      strCategory: 'Goat',
    },
  ],
};

export const mockBeefCategory = {
  meals: [
    {
      strMeal: 'Beef and Mustard Pie',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/sytuqu1511553755.jpg',
      idMeal: '52874',
    },
    {
      strMeal: 'Beef and Oyster pie',
    },
    {
      strMeal: 'Beef Banh Mi Bowls with Sriracha Mayo, Carrot & Pickled Cucumber',
    },
    {
      strMeal: 'Beef Bourguignon',
    },
    {
      strMeal: 'Beef Brisket Pot Roast',
    },
    {
      strMeal: 'Beef Dumpling Stew',
    },
    {
      strMeal: 'Beef Lo Mein',
    },
    {
      strMeal: 'Beef Rendang',
    },
    {
      strMeal: 'Beef stroganoff',
    },
    {
      strMeal: 'Beef Sunday Roast',
    },
    {
      strMeal: 'Beef Wellington',
    },
    {
      strMeal: 'Big Mac',
    },
  ],
};

export const mockMealDetail = {
  meals: [
    {
      idMeal: '53060',
      strMeal: 'Burek',
      strCategory: 'Side',
      strArea: 'Croatian',
      strInstructions: 'Fry the finely chopped onions and minced meat in oil. Add the salt and pepper. Grease a round baking tray and put a layer of pastry in it. Cover with a thin layer of filling and cover this with another layer of filo pastry which must be well coated in oil. Put another layer of filling and cover with pastry. When you have five or six layers, cover with filo pastry, bake at 200ºC/392ºF for half an hour and cut in quarters and serve.',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/tkxquw1628771028.jpg',
      strYoutube: 'https://www.youtube.com/watch?v=YsJXZwE5pdY',
      strIngredient1: 'Filo Pastry',
      strIngredient2: 'Minced Beef',
      strIngredient3: 'Onion',
      strIngredient4: 'Oil',
      strIngredient5: 'Salt',
      strIngredient6: 'Pepper',
      strIngredient7: '',
      strIngredient8: '',
      strIngredient9: '',
      strMeasure1: '1 Packet',
      strMeasure2: '150g',
      strMeasure3: '150g',
      strMeasure4: '40g',
      strMeasure5: 'Dash',
      strMeasure6: 'Dash',
      strMeasure7: ' ',
      strMeasure8: ' ',
    },
  ],
};

export const mockDrinkDetail = {
  drinks: [
    {
      idDrink: '13501',
      strDrink: 'ABC',
      strCategory: 'Shot',
      strAlcoholic: 'Alcoholic',
      strGlass: 'Shot glass',
      strInstructions: 'Layered in a shot glass.',
      strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/tqpvqp1472668328.jpg',
      strIngredient1: 'Amaretto',
      strIngredient2: 'Baileys irish cream',
      strIngredient3: 'Cognac',
      strIngredient4: null,
      strIngredient5: null,
      strMeasure1: '1/3 ',
      strMeasure2: '1/3 ',
      strMeasure3: '1/3 ',
      strMeasure4: null,
      strMeasure5: null,
    },
  ],
};
export default mockAPI;
