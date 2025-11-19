export interface MenuDish {
  name: string;
  detail: string;
  image: string;
}

export interface MenuSection {
  title: string;
  mealTime: string;
  badge: string;
  description: string;
  dishes: MenuDish[];
}

export const MENU_SECTIONS: MenuSection[] = [
  {
    title: 'Breakfast Atelier',
    mealTime: 'Breakfast',
    badge: '10 sunrise plates',
    description:
      'Early light favorites layered with maple, coastal seafood, and orchard-fresh fruit.',
    dishes: [
      {
        name: 'Maple Granola Parfait',
        detail: 'Cranberry compote, vanilla skyr, buckwheat crunch',
        image: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'Atlantic Smoked Salmon Bagel',
        detail: 'Herbed cream cheese, pickled shallots, caper pearls',
        image: 'https://images.unsplash.com/photo-1475090169767-40ed8d18f67d?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'Banff Sunrise Skillet',
        detail: 'Maple sausage, roasted peppers, poached egg cloud',
        image: 'https://images.unsplash.com/photo-1504674906699-25ec0b1a0d48?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'Wild Blueberry Pancakes',
        detail: 'Vanilla bean butter, birch syrup drizzle',
        image: 'https://images.unsplash.com/photo-1473093226795-af9932fe5856?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'Yukon Gold Hash Stack',
        detail: 'Duck confit, charred scallions, truffle hollandaise',
        image: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'Chia Pudding Brûlée',
        detail: 'Toasted coconut, saffron mango, mint oil',
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'Lobster Benedict',
        detail: 'Butter-poached claw meat, sea asparagus, citrus hollandaise',
        image: 'https://images.unsplash.com/photo-1504674906241-3590a93f1137?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'Québec Tourtière Hand Pie',
        detail: 'Spiced game, flaky pastry, lingonberry relish',
        image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'Northern Lights Açaí Bowl',
        detail: 'Spruce tips, toasted seeds, frozen berries',
        image: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'Campfire Mocha Oats',
        detail: 'Espresso steel-cut oats, cocoa nib praline',
        image: 'https://images.unsplash.com/photo-1484980972926-edee96e0960d?auto=format&fit=crop&w=900&q=80'
      }
    ]
  },
  {
    title: 'Luminous Lunch',
    mealTime: 'Lunch',
    badge: '20 mid-day plates',
    description:
      'Shareable plates, chef bowls, and modern midday luxuries built for long conversations.',
    dishes: [
      {
        name: 'Cedar Plank Salmon Bowl',
        detail: 'Forbidden rice, shaved fennel, charred citrus',
        image: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'Truffle Foraged Poutine',
        detail: 'Hand-cut fries, mushroom gravy, cheese curds',
        image: 'https://images.unsplash.com/photo-1493770348161-369560ae357d?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'Charred Veggie Shawarma Wrap',
        detail: 'Harissa carrots, labneh, preserved lemon',
        image: 'https://images.unsplash.com/photo-1506086679524-493c64fdfaa6?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'Bison Smash Burger',
        detail: 'Aged cheddar, maple bacon jam, brioche',
        image: 'https://images.unsplash.com/photo-1508739826987-b79cd8b7da12?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'Iceberg Lobster Roll',
        detail: 'Brown butter aioli, celery leaf crunch',
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'Vancouver Sushi Burrito',
        detail: 'Sockeye salmon, sesame rice, pickled veg',
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'Maple Soy Tofu Bowl',
        detail: 'Roasted squash, edamame, ginger miso dressing',
        image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'Montréal Smoked Meat Melt',
        detail: 'Charred sourdough, mustard aioli, dill pickles',
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'Prairie Grain Salad',
        detail: 'Heirloom barley, roasted beets, goat cheese snow',
        image: 'https://images.unsplash.com/photo-1504674906699-25ec0b1a0d48?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'Atlantic Chowder Cup',
        detail: 'Clams, mussels, smoked haddock, dill oil',
        image: 'https://images.unsplash.com/photo-1493770348161-369560ae357d?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'Tandoori Chicken Flatbread',
        detail: 'Mint yogurt, charred onions, cucumber ribbons',
        image: 'https://images.unsplash.com/photo-1546069901-eacef0df6022?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'Korean BBQ Cauliflower',
        detail: 'Gochujang glaze, sesame crunch, citrus zest',
        image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'Crispy Coast Fish Tacos',
        detail: 'Charcoal tortillas, lime crema, pineapple relish',
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'Harvest Farro Risotto',
        detail: 'Roasted pumpkin, sage oil, pepitas',
        image: 'https://images.unsplash.com/photo-1514516430037-13f36af85f20?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'Citrus Beet Carpaccio',
        detail: 'Goat cheese mousse, pistachio dukkah, micro basil',
        image: 'https://images.unsplash.com/photo-1447078806655-40579c2520d6?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'Gochujang Maple Wings',
        detail: 'Toasted sesame, scallions, charred lime',
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'Artisan Cheese Flight',
        detail: 'Seasonal preserves, wine gel, grilled focaccia',
        image: 'https://images.unsplash.com/photo-1505575967455-40e256f73376?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'Burrata Orchard Toast',
        detail: 'Sourdough, heirloom tomatoes, basil oil',
        image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'BC Spot Prawn Ceviche',
        detail: 'Cucumber water, grapefruit pearls, jalapeño',
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'Golden Curry Noodles',
        detail: 'Turmeric coconut broth, grilled veggies, lime leaf oil',
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80'
      }
    ]
  },
  {
    title: 'Signature Dinner',
    mealTime: 'Dinner',
    badge: '20 evening plates',
    description:
      'Tableside theater, slow-aged cuts, and culinary storytelling under candlelight.',
    dishes: [
      {
        name: 'Fire-Grilled Tomahawk',
        detail: 'Charcoal butter baste, black garlic jus',
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'Maple Miso Sablefish',
        detail: 'Lotus root, yuzu beurre blanc, ikura',
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'Brome Lake Duck Breast',
        detail: 'Charred plums, spruce jus, cocoa nib crumble',
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'Truffle Winter Root Roast',
        detail: 'Parsnip silk, hazelnut praline, herb oil',
        image: 'https://images.unsplash.com/photo-1447078806655-40579c2520d6?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'Rocky Mountain Lamb',
        detail: 'Cedar smoke, labneh, charred broccolini',
        image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'Black Garlic Scallops',
        detail: 'Cauliflower velouté, green apple, sorrel oil',
        image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'Wagyu Short Rib',
        detail: 'Potato espuma, pickled mustard seeds, demi',
        image: 'https://images.unsplash.com/photo-1455612693675-112974d4880b?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'Cedar-Smoked Venison',
        detail: 'Juniper jus, roasted carrots, cocoa soil',
        image: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'Lobster Tagliatelle',
        detail: 'Bisque emulsion, charred cherry tomatoes, basil oil',
        image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'Foraged Mushroom Gnocchi',
        detail: 'Brown butter crumbs, pecorino cloud, thyme ash',
        image: 'https://images.unsplash.com/photo-1455612693675-112974d4880b?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'Charred Octopus Mosaic',
        detail: 'Fingerling potato, smoked paprika oil, preserved lemon',
        image: 'https://images.unsplash.com/photo-1447078806655-40579c2520d6?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'Arctic Char Crudo',
        detail: 'Cucumber snow, dill pollen, finger lime pearls',
        image: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'Chanterelle Polenta',
        detail: 'Sweet corn velouté, aged parmesan, micro sorrel',
        image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'Peppercorn Elk Medallions',
        detail: 'Brandy cream, smoked shallots, charred leeks',
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'Smoked Beet Wellington',
        detail: 'Puff pastry, kale pesto, black truffle glaze',
        image: 'https://images.unsplash.com/photo-1432139509613-5c4255815697?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'Seared Foie Gras Toast',
        detail: 'Brioche, late-harvest icewine gel, hazelnut brittle',
        image: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'Citrus Butter Halibut',
        detail: 'Charred brassicas, saffron velouté, chili oil',
        image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'Okanagan Peach Tart',
        detail: 'Vanilla mascarpone, basil granita, honeycomb',
        image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'Chocolate Forest Torte',
        detail: 'Cedar smoke, pine nut brittle, spruce caramel',
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'Tableside Bananas Foster',
        detail: 'Rum flambé, maple praline ice cream, toffee tuile',
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80'
      }
    ]
  }
];

