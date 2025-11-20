import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { ReservationService } from '../../core/services/reservation.service';

type MenuItem = {
  name: string;
  price: string;
  description?: string;
  image?: string;
};

type SectionImage = {
  src: string;
  alt: string;
};

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html'
})
export class MenuComponent {
  readonly brunchClassics: MenuItem[] = [
    {
      name: 'The Café Full English',
      price: 'Small: £9.50 / Large: £11.50',
      description:
        'Two rashers of bacon, two proper sausages, two fried eggs, roasted mushroom, baked beans, creamy buttered mash, and a grilled tomato. Served with a slice of toast and tea or coffee. (Small includes one of each item.)',
      image: 'assets/images/menu/The Café Full English.png'
    },
    {
      name: 'The Big Scramble on Sourdough',
      price: '£10.00',
      description:
        'Three creamy scrambled eggs on buttered sourdough toast. Served with roasted tomato, baked beans, roasted mushroom, sausage on the side, and a fresh side salad.',
      image: 'assets/images/menu/The Big Scramble on sourdough.png'
    },
    {
      name: 'Proper Bangers & Mash',
      price: '£10.00',
      description: 'Three hearty sausages on creamy buttered mash, topped with rich onion gravy and a perfectly poached egg.',
      image: 'assets/images/menu/Proper Bangers and mash.png'
    },
    {
      name: 'The Ultimate Egg Sandwich',
      price: '£7.50',
      description:
        'House-made egg salad with sliced avocado in a sandwich. Topped with a warm poached egg and served with a fresh side salad.',
      image: 'assets/images/menu/the Ultimate Egg sandwich.png'
    },
    {
      name: 'Three-Egg Cheese Omelette',
      price: '£8.00',
      description:
        'A fluffy three-egg omelette filled with melted mozzarella. Served with roasted mushroom, crispy bacon, sausage, fresh side salad, and a slice of toast.',
      image: 'assets/images/menu/Three-Egg Cheese omelette.png'
    },
    {
      name: 'The Avocado Toast (V)',
      price: '£8.50',
      description:
        'Toasted sourdough with whipped cream cheese and fresh avocado, topped with two perfectly poached eggs and a drizzle of honey. Served with a fresh side salad.',
      image: 'assets/images/menu/The Avocado toast.png'
    },
    {
      name: 'The Royal Avocado Toast',
      price: '£12.00',
      description:
        'Signature avocado toast with whipped cream cheese, fresh sliced avocado, premium Scottish smoked salmon, a poached egg, and rich house-made hollandaise. Served with side salad.',
      image: 'assets/images/menu/The Royal Avocado toast.png'
    },
    {
      name: 'Burrata & Cherry Tomato Toast',
      price: '£11.50',
      description:
        'Toasted sourdough spread with basil pesto, topped with cherry tomatoes, whole creamy burrata, basil leaves, sea salt, and balsamic glaze. Served with side salad.',
        image: 'assets/images/menu/Burrata & Cherry tomato toast.png'

    },
    {
      name: 'Prosciutto & Pistachio Toast',
      price: '£9.50',
      description:
        'Toasted sourdough with whipped cream cheese and basil pesto, layered with prosciutto crudo and finished with crushed pistachios and balsamic glaze. Served with side salad.',
      image: 'assets/images/menu/Prosciutto & Pistachio toast.png'
    },
    {
      name: 'The Soufflé Benedict',
      price: '£10.00',
      description:
        'Two cloud-like soufflé pancakes topped with crispy streaky bacon, two poached eggs, honey drizzle, and generous hollandaise sauce. Served with a side salad.',
      image: 'assets/images/menu/The Soufflé benedict.png'
    },
    {
      name: 'The Soufflé Royale',
      price: '£13.00',
      description:
        'Two signature soufflé pancakes topped with whipped cream cheese, avocado, Scottish smoked salmon, a poached egg, and rich hollandaise. Served with a side salad.',
      image: 'assets/images/menu/soufle royale.png'
    },
    {
      name: 'House Side Salad (V)',
      price: '£2.50',
      description: 'Crisp mixed leaves, cherry tomatoes, cucumber, tossed in house-made vinaigrette.',
      image: 'assets/images/menu/House Side Salad.png'
    }
  ];

  readonly homemadePasta: MenuItem[] = [
    {
      name: 'Creamy Alfredo (V)',
      price: '£8.00',
      description:
        'The timeless classic. A rich, homemade sauce of cream, garlic, and authentic Parmigiano-Reggiano, finished with black pepper and chilli flakes. With Roasted Chicken Breast: £10.00 | With King Prawns: £11.50',
      image: 'assets/images/menu/Creamy Alfredo pasta.png'
    },
    {
      name: 'Creamy Cajun Tomato Pasta (V)',
      price: '£8.50',
      description:
        'A rich and warming bowl of pasta in our signature creamy tomato sauce, boosted with Cajun spices and Parmigiano-Reggiano. Finished with fresh basil, sweet cherry tomatoes, and grated Parmesan. With Roasted Chicken Breast: £10.50 | With King Prawns: £12.00',
      image: 'assets/images/menu/Creamy Cajun Tomato Pasta.png'
    }
  ];

  readonly signaturePastas: MenuItem[] = [
    {
      name: 'Pesto Burrata Pasta (V)',
      price: '£13.50',
      description:
        'Our Showstopper. Your choice of pasta is tossed in a vibrant, creamy sauce made with basil pesto and enriched with a touch of cream and Parmigiano-Reggiano. Topped with a whole creamy burrata, sweet cherry tomatoes, and a sprinkle of crushed pistachios.',
      image: 'assets/images/menu/Pesto Burrata pasta.png'
    },
    {
      name: 'Green Goddess Pasta (V)',
      price: '£10.50',
      description:
        'A rich, creamy sauce made from fresh avocado and basil, blended with cream and Parmigiano-Reggiano. Finished with extra roasted broccoli for a perfect finish.',
      image: 'assets/images/menu/Green Goddess pasta.png'
    },
    {
      name: 'Red Pesto & Burrata Pasta (V)',
      price: '£13.50',
      description:
        'A truly indulgent dish. Al dente pasta coated in a rich sun-dried tomato pesto, enriched with cream and Parmigiano-Reggiano for a velvety texture. Topped with a fresh burrata ready to spill its creamy center, garnished with balsamic glaze, sweet cherry tomatoes, and basil leaves.',
      image: 'assets/images/menu/Red Pesto & burrata pasta.png'
    }
  ];

  readonly addOns: MenuItem[] = [
    { name: 'Sausage (Pork or Chicken)', price: '£1.00' },
    { name: 'Baked Beans', price: '£1.00' },
    { name: 'Grilled Tomato', price: '£1.00' },
    { name: 'Roasted Mushroom', price: '£1.00' },
    { name: 'Cheddar Cheese', price: '£1.00' },
    { name: 'Poached Egg (x1)', price: '£1.50' },
    { name: 'Crispy Bacon (x2)', price: '£1.50' },
    { name: 'Sliced Avocado', price: '£1.50' },
    { name: 'Sourdough Toast', price: '£1.50' },
    { name: 'Homemade Hollandaise', price: '£1.50' },
    { name: 'Whipped Cream Cheese', price: '£1.50' },
    { name: 'Burrata', price: '£2.00' }
  ];

  readonly baseOptions: MenuItem[] = [
    {
      name: 'Fresh Belgian Waffle',
      price: '£7.00',
      description: 'All bases served with maple syrup, homemade maple butter, and whipped cream.',
      image: 'https://images.unsplash.com/photo-1464306076886-da185f6a9d12?auto=format&fit=crop&w=200&q=80'
    },
    {
      name: 'A Stack of 3 Buttermilk Pancakes',
      price: '£7.50',
      description: 'All bases served with maple syrup, homemade maple butter, and whipped cream.',
      image: 'assets/images/menu/The Classic Stack.png'
    },
    {
      name: 'French Toast',
      price: '£7.50',
      description: 'All bases served with maple syrup, homemade maple butter, and whipped cream.',
      image: 'assets/images/menu/The Berry & Banana Stack.png'
    },
    {
      name: '2 Cloud Soufflé Pancakes',
      price: '£8.00',
      description: 'All bases served with maple syrup, homemade maple butter, and whipped cream.',
      image: 'https://images.unsplash.com/photo-1481391032119-d89fee407e44?auto=format&fit=crop&w=200&q=80'
    }
  ];

  readonly sweetCreations: MenuItem[] = [
    {
      name: 'The Classic Stack',
      price: '+£1.00',
      description:
        'The timeless combination. Your chosen base served with two rashers of crispy bacon, homemade maple butter, and maple syrup, served with berries.',
      image: 'https://images.unsplash.com/photo-1481391032119-d89fee407e44?auto=format&fit=crop&w=200&q=80'
    },
    {
      name: 'The Berry & Banana Stack (V)',
      price: '+£1.00',
      description:
        'A fresh and fruity classic. Your chosen base topped with fresh berries, banana, homemade whipped cream, and maple syrup.',
      image: 'https://images.unsplash.com/photo-1464306076886-da185f6a9d12?auto=format&fit=crop&w=200&q=80'
    },
    {
      name: 'The Strawberry Cheesecake Stack (V)',
      price: '+£1.50',
      description:
        'A signature dessert stack. Your chosen base topped with rich house-made strawberry compote and cheesecake cream, garnished with strawberry and fresh raspberries.',
      image: 'assets/images/menu/The Strawberry cheesecake stack.png'
    },
    {
      name: 'The Blueberry Cheesecake Stack (V)',
      price: '+£1.50',
      description:
        'Your chosen base topped with house-made blueberry compote and cheesecake cream. Garnished with blueberry and fresh blackberries.',
      image: 'assets/images/menu/The Blueberry cheesecake stack.png'
    },
    {
      name: 'The Tiramisu Stack (V)',
      price: '+£1.50',
      description:
        'An Italian dream. Your chosen base infused with a coffee note, mascarpone tiramisu cream, dusted with rich cocoa powder, and served with a crisp ladyfinger and banana.',
      image: 'assets/images/menu/The Tiramisu Stack.png'
    },
    {
      name: 'The Sweet & Salty Stack',
      price: '+£2.00',
      description:
        'The ultimate indulgence. Your chosen base topped with house-made caramelized bananas, crispy bacon, homemade vanilla mascarpone cream, and mixed berries.',
      image: 'assets/images/menu/sweet and salty stack.png'
    },
    {
      name: 'Cream Cheese Frosting Stack',
      price: '+£2.50',
      description:
        'Your chosen base served with homemade mixed-berries cream cheese frosting and mixed berries, whipped cream, and caramel sauce.',
      image: 'assets/images/menu/Cream Cheese frosting stack.png'
    },
    {
      name: 'The Pistachio Kunafa Stack',
      price: '+£3.00',
      description:
        'Middle-Eastern fusion delight. Topped with milk chocolate, crunchy pistachio kunafa strands, fresh strawberries, and a sprinkle of chopped pistachios.',
      image: 'assets/images/menu/The Pistachio kunafa stack.png'
    }
  ];

  readonly strawberryCups: MenuItem[] = [
    {
      name: 'Classic Chocolate',
      price: '£6.50',
      description: 'Fresh juicy strawberries layered with rich milk chocolate and creamy white chocolate sauce.',
      image: 'assets/images/menu/Classic Chocolate cup.png'
    },
    {
      name: "S'mores Cup",
      price: '£7.00',
      description: 'Classic Chocolate Strawberry Cup made even better with soft mini marshmallows.',
      image: 'assets/images/menu/S’mores Cup.png'
    },
    {
      name: 'Signature Kunafa',
      price: '£8.00',
      description:
        'The ultimate dessert cup—fresh strawberries layered with milk chocolate, crunchy pistachio kunafa strands, and crushed pistachios.',
      image: 'assets/images/menu/Signature kunafa cup.png'
    }
  ];

  readonly extraToppings: MenuItem[] = [
    { name: 'Strawberry', price: '+60p' },
    { name: 'Banana', price: '+60p' },
    { name: 'Chocolate Flakes', price: '+60p' },
    { name: 'Kit-Kat', price: '+60p' },
    { name: 'Kinder Bueno', price: '+60p' },
    { name: 'Chopped Pistachio', price: '+60p' },
    { name: 'Almond Flakes', price: '+60p' },
    { name: 'Marshmallow', price: '+60p' },
    { name: 'Caramel Fudge', price: '+60p' },
    { name: 'Oreo Crumble', price: '+60p' },
    { name: 'Biscoff Crumble', price: '+60p' },
    { name: 'Chocolate', price: '+75p' },
    { name: 'Maple Syrup', price: '+85p' },
    { name: 'Whipping Cream', price: '+85p' },
    { name: 'Vanilla Mascarpone Cream', price: '+£1.20' },
    { name: 'Cheesecake Cream', price: '+£1.20' },
    { name: 'Mixed Berries', price: '+£2.00' },
    { name: 'Scoop of Gelato', price: '+£2.50' }
  ];

  readonly dessertBases: MenuItem[] = [
    {
      name: 'Fresh Belgian Waffle',
      price: '£7.00',
      description: 'Loaded with one of our signature topping combinations.',
      image: 'https://images.unsplash.com/photo-1464306076886-da185f6a9d12?auto=format&fit=crop&w=200&q=80'
    },
    {
      name: 'A Stack of 3 Buttermilk Pancakes',
      price: '£7.50',
      description: 'Loaded with one of our signature topping combinations.',
      image: 'https://images.unsplash.com/photo-1481391032119-d89fee407e44?auto=format&fit=crop&w=200&q=80'
    },
    {
      name: '2 Cloud Soufflé Pancakes',
      price: '£8.00',
      description: 'Loaded with one of our signature topping combinations.',
      image: 'https://images.unsplash.com/photo-1481391032119-d89fee407e44?auto=format&fit=crop&w=200&q=80'
    }
  ];

  readonly signatureToppings: MenuItem[] = [
    {
      name: 'The Classic Chocoberry',
      price: '',
      description: 'Melted milk chocolate, fresh strawberries, toasted almonds, and a dusting of icing sugar.',
      image: 'assets/images/menu/The Classic Chocoberry.png'
    },
    {
      name: 'The White Chocolate Dream',
      price: '',
      description: 'Creamy white chocolate, fresh strawberries and banana, finished with a sprinkle of strawberry powder.',
      image: 'assets/images/menu/The White Chocolate Dream.png'
    },
    {
      name: 'The Biscoff Bomb',
      price: '+80p',
      description: 'A generous layer of Biscoff chocolate, topped with crushed Biscoff biscuits and a swirl of homemade cream.',
      image: 'assets/images/menu/The Biscoff bomb.png'
    },
    {
      name: 'The Pistachio Crush',
      price: '+£1.50',
      description: 'A luxurious mix of creamy pistachio sauce, fresh strawberries, and crushed pistachios.',
      image: 'assets/images/menu/The Pistachio. Crush.png'
    },
    {
      name: 'The Oreo Cream',
      price: '+80p',
      description: 'White chocolate topped with real Oreo crumbles and homemade cream.',
      image: 'assets/images/menu/The Oreo Cream.png'
    },
    {
      name: 'The Nutella Classic',
      price: '+80p',
      description: 'Warm Nutella, fresh banana slices, and homemade cream.',
      image: 'assets/images/menu/The Nutella classic.png'
    },
    {
      name: 'The Bueno Bliss',
      price: '+£1.50',
      description:
        'The bestseller. Drizzled with authentic Bueno-style white hazelnut chocolate and topped with chunky Kinder Bueno pieces and chocolate flakes.',
      image: 'assets/images/menu/The Bueno bliss.png'
    }
  ];

  readonly sectionImagery: Record<string, SectionImage[]> = {
    brunch: [
      {
        src: 'https://images.unsplash.com/photo-1475856034131-5f03917f35d6?auto=format&fit=crop&w=500&q=80',
        alt: 'Plated brunch with eggs and greens'
      },
      {
        src: 'https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=500&q=80',
        alt: 'Sourdough toast with avocado'
      }
    ],
    pasta: [
      {
        src: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=500&q=80',
        alt: 'Creamy pasta bowl'
      },
      {
        src: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=500&q=80',
        alt: 'Fresh pesto pasta'
      }
    ],
    addOns: [
      {
        src: 'https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&w=500&q=80',
        alt: 'Breakfast toppings assortment'
      }
    ],
    sweet: [
      {
        src: 'https://images.unsplash.com/photo-1481391032119-d89fee407e44?auto=format&fit=crop&w=500&q=80',
        alt: 'Soufflé pancakes with cream'
      },
      {
        src: 'https://images.unsplash.com/photo-1464306076886-da185f6a9d12?auto=format&fit=crop&w=500&q=80',
        alt: 'Stack of waffles with berries'
      }
    ],
    cups: [
      {
        src: 'https://images.unsplash.com/photo-1430163393927-3dab9af7ea38?auto=format&fit=crop&w=500&q=80',
        alt: 'Layered strawberry dessert cup'
      }
    ],
    toppings: [
      {
        src: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=500&q=80',
        alt: 'Dessert toppings and sauces'
      }
    ],
    dessertt: [
      {
        src: 'https://images.unsplash.com/photo-1481391032119-d89fee407e44?auto=format&fit=crop&w=500&q=80',
        alt: 'Cheesecake slice with chocolate drizzle'
      },
      {
        src: 'https://images.unsplash.com/photo-1505250469679-203ad9ced0cb?auto=format&fit=crop&w=500&q=80',
        alt: 'Dessert platter with berries'
      }
    ]
  };

  constructor(readonly reservationState: ReservationService) {}
}

