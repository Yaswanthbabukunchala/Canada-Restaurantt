import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { ReservationService } from '../../core/services/reservation.service';

type MenuItem = {
  name: string;
  price: string;
  description?: string;
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
      price: 'Small £9.50 / Medium £12.50 / Large £15.50',
      description:
        'Two eggs cooked your way, Cumberland sausage, turkey rashers, hash brown, grilled mushrooms, baked beans, grilled tomato, smashed avocado on sourdough toast.'
    },
    {
      name: 'Three Egg Cheese Omelette (V)',
      price: '£8.00',
      description: 'Freshly cooked 3-egg omelette filled with cheddar cheese. Served with a side salad and sourdough toast.'
    },
    {
      name: 'Proper Bangers',
      price: '£9.50',
      description: 'Two Cumberland sausages on a bed of creamy mashed potato coated with onion gravy. Served with sourdough toast.'
    },
    {
      name: 'The Avocado',
      price: '£6.50',
      description: 'Mashed avocado spread on toast, topped with red chilli flakes and olive oil. Served with a lemon wedge.'
    },
    {
      name: 'The Big Scramble on Sourdough',
      price: '£10.00',
      description: 'Scrambled eggs cooked creamy with butter, topped with smashed avocado and sprinkled with feta. Served on sourdough toast.'
    },
    {
      name: 'The Ultimate Egg Sandwich',
      price: '£9.00',
      description:
        'A warm toasted brioche bun filled with two fried eggs, turkey bacon, cheddar cheese, and caramelised onions. Served with a fresh side salad.'
    },
    {
      name: 'The Soufflé Royale',
      price: '£13.00',
      description:
        'Two light & fluffy soufflé pancakes topped with smoked salmon, hollandaise sauce, avocado slices, and microgreens.'
    },
    {
      name: 'The Soufflé Benedict',
      price: '£10.00',
      description: 'Two soufflé pancakes topped with two poached eggs, turkey bacon, hollandaise sauce, and micro herbs.'
    },
    {
      name: 'Burrata & Cherry Tomato Toast',
      price: '£11.50',
      description: 'Creamy burrata on sourdough toast with cherry tomatoes, basil oil, and balsamic glaze.'
    },
    {
      name: 'Prosciutto & Pistachio Toast',
      price: '£9.50',
      description: 'Sourdough toast layered with ricotta cheese, topped with prosciutto, crushed pistachios and honey drizzle.'
    },
    {
      name: 'House Side Salad (V)',
      price: '£2.50',
      description: 'Fresh mixed greens tossed in a light vinaigrette dressing.'
    }
  ];

  readonly homemadePasta: MenuItem[] = [
    {
      name: 'Creamy Alfredo (V)',
      price: '£8.00',
      description: 'Rich Italian alfredo cooked with butter, cream and parmesan.'
    },
    {
      name: 'Add: Sautéed Mushrooms',
      price: '+£1.00',
      description: '—'
    },
    {
      name: 'Add: Turkey Bacon',
      price: '+£1.50',
      description: '—'
    },
    {
      name: 'Add: Grilled Chicken Breast',
      price: '+£2.00',
      description: '—'
    },
    {
      name: 'Creamy Cajun Tomato Pasta',
      price: '£8.50',
      description: 'Tomato-based creamy Cajun sauce cooked with herbs, garlic and black pepper.'
    },
    {
      name: 'Add: Cajun Chicken Breast',
      price: '+£2.00',
      description: '—'
    },
    {
      name: 'Pesto (V)',
      price: '£8.50',
      description: 'Fresh basil pesto tossed with your choice of pasta.'
    }
  ];

  readonly signaturePastas: MenuItem[] = [
    {
      name: 'Pasta Nutty Pesto',
      price: '£12.50',
      description: 'Fresh pesto pasta topped with crushed pistachios, cherry tomatoes, parmesan and basil leaves.'
    },
    {
      name: 'Red Pesto & Burrata (V)',
      price: '£13.50',
      description: 'A buttery blend of red pesto and fresh cream topped with a whole burrata, cherry tomatoes and basil leaves.'
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

  readonly sweetCreations: MenuItem[] = [
    { name: 'Fresh Belgian Waffle', price: '£7.00', description: 'Served with fresh strawberries and maple syrup.' },
    { name: 'French Toast (V)', price: '£7.50', description: 'Thick brioche slices dipped in vanilla custard, topped with cinnamon sugar.' },
    { name: '2 Classic Soufflé Pancakes', price: '£8.00', description: 'Light and fluffy soufflé pancakes topped with our signature whipped cream.' },
    { name: 'The Banana Stack (V)', price: '+£1.00', description: 'Add banana topping to any soufflé pancakes.' },
    {
      name: 'The Timmi’s Stack (V)',
      price: '+£1.50',
      description: 'Italian dessert–inspired soufflé pancakes topped with coffee cream, mascarpone cheese, and cocoa powder.'
    },
    {
      name: 'The Blueberry Cheesecake Stack (V)',
      price: '+£1.50',
      description: 'Soufflé pancakes topped with blueberry compote and mascarpone cream.'
    },
    {
      name: 'The Sweet & Silky Stack',
      price: '+£2.00',
      description: 'Thick caramel, dulce de leche drizzle, topped with whipped cream and sweetened milk.'
    },
    {
      name: 'The Pistachio Kunafa Stack',
      price: '+£2.50',
      description: 'Soufflé pancakes topped with pistachio cream, crushed pistachios, and golden kunafa strands.'
    },
    {
      name: 'Cream Cheese Frosting Stack (V)',
      price: '+£1.50',
      description: 'Warm frosting poured over pancakes with a hint of vanilla.'
    }
  ];

  readonly strawberryCups: MenuItem[] = [
    {
      name: 'Classic Cup',
      price: '£6.50',
      description: 'A mix of fresh strawberry slices, whipped cream and milk chocolate sauce.'
    },
    { name: 'Chocolate Cup', price: '£7.00', description: 'Strawberries topped with Belgian chocolate & Nutella drizzle.' },
    {
      name: 'S’mores Cup',
      price: '£7.00',
      description: 'Strawberries layered with marshmallow cream, crushed biscuits & chocolate drizzle.'
    },
    {
      name: 'Signature Nutella Cup',
      price: '£8.00',
      description: 'Our signature cup with thick Nutella, chocolate crumble, strawberries & whipped cream.'
    }
  ];

  readonly extraToppings: MenuItem[] = [
    { name: 'Strawberry Drizzle', price: '+50p' },
    { name: 'Fresh Strawberries', price: '+60p' },
    { name: 'Biscoff Crumble', price: '+80p' },
    { name: 'Ferrero / Almond / Pistachio (1 piece)', price: '+75p' },
    { name: 'Oreo Crumble', price: '+60p' },
    { name: 'White Chocolate Chips', price: '+60p' },
    { name: 'Chocolate Drizzle', price: '+75p' },
    { name: 'Maple Syrup', price: '+60p' },
    { name: 'Whipping Cream', price: '+80p' },
    { name: 'Vanilla Mascarpone Cream', price: '+£1.20' },
    { name: 'Mixed Berries', price: '+£2.00' },
    { name: 'Scoop of Gelato', price: '+£1.50' }
  ];

  readonly dessertMenu: MenuItem[] = [
    { name: 'Fresh Belgian Waffle', price: '£7.00', description: 'Served with strawberries, cream & maple syrup.' },
    { name: '2 Classic Soufflé Pancakes', price: '£8.00', description: 'Light, airy, jiggly pancakes topped with whipped cream & maple syrup.' },
    { name: 'The Classic Chocoberry', price: '£7.00', description: 'Strawberries dipped in Belgian chocolate with cream.' },
    { name: 'The Oreo', price: '£6.00', description: 'Soft cheesecake dipped in Oreo crust and topped with cream.' },
    { name: 'The White Dream', price: '£7.00', description: 'Cheesecake dipped in white chocolate with strawberry slices.' },
    { name: 'The Nutella Classic', price: '£6.00', description: 'Soft cheesecake topped with Nutella, crushed Oreo and strawberries.' },
    { name: 'The Bueno Bite', price: '£5.50', description: 'Cheesecake dipped in milk chocolate & topped with Bueno pieces.' },
    { name: 'The Biscoff Bomb', price: '£6.00', description: 'Cheesecake dipped in Biscoff chocolate & topped with crumble.' },
    { name: 'The Pistachio Rush', price: '£7.50', description: 'Cheesecake dipped in pistachio cream and topped with crushed pistachios.' }
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
    dessert: [
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

