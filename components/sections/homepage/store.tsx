'use client';
import React from 'react';
import { cn, Image } from '@nextui-org/react';

interface MenuItem {
  name: string;
  price: number;
  description?: string;
  image?: string;
}

interface Subcategory {
  subheading: string;
  items: MenuItem[];
}

interface Heading {
  heading: string;
  subcategories: Subcategory[];
}

export default function MenuComponent() {
  return (
    <div className="container mx-auto px-4 py-8">
      {menuData.map((category: Heading, categoryIndex) => (
        <div key={categoryIndex} className="mb-8">
          <h2 className="mb-4 text-2xl font-bold text-gray-800">
            {category.heading}
          </h2>
          {category.subcategories.map((subcategory, subcategoryIndex) => (
            <div key={subcategoryIndex} className="mb-6">
              <h3 className="mb-2 text-xl font-semibold text-gray-700">
                {subcategory.subheading}
              </h3>
              <div className="mx-auto my-auto grid max-w-7xl grid-cols-1 gap-5 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {subcategory.items.map((item, itemIndex) => (
                  <div
                    className={cn(
                      'relative flex w-full flex-none flex-col gap-3'
                    )}
                  >
                    <Image
                      isBlurred
                      isZoomed
                      width={800}
                      alt={item.name}
                      className="aspect-[3/4] w-full !max-w-full hover:scale-110"
                      isLoading={item.image ? false : true}
                      src={item.image || '/no-image.png'}
                    />

                    <div className="mt-1 flex flex-col gap-2 px-1">
                      <div className="flex items-start justify-between gap-1">
                        <h3 className="text-small font-medium capitalize text-default-700">
                          {item.name}
                        </h3>
                      </div>
                      {item.description && (
                        <p className="text-small text-default-500">
                          {item.description}
                        </p>
                      )}
                      <p className="text-small font-medium text-default-500">
                        ₹{item.price}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

const menuData = [
  {
    heading: 'Beverages',
    subcategories: [
      {
        subheading: 'Icy Sips Juices',
        items: [
          {
            name: 'Mausambi (Sweet Lime) Juice',
            price: 120,
            image: '/assets/menu/masambi-juice.jpeg'
          },
          {
            name: 'Pineapple Juice',
            price: 150,
            image: '/assets/menu/pineapple-juice.jpg'
          },
          {
            name: 'Watermelon Juice',
            price: 120,
            image: '/assets/menu/watermelon-juice.jpg'
          },
          {
            name: 'Apple beetroot carrot Juice',
            price: 150,
            image: '/assets/menu/apple-beetroot-carrot-juice.jpg'
          }
        ]
      },
      {
        subheading: 'Shakes',
        items: [
          {
            name: 'Strawberry milkshake',
            price: 150,
            description:
              'A refreshing blend of fresh strawberries, milk, and creamy ice cream.',
            image: '/assets/menu/strawberry-milkshake.jpg'
          },
          {
            name: 'Peanut Butter Brownie Shake',
            price: 200,
            description:
              'Decadent shake loaded with peanut butter, brownie chunks, and whipped cream.',
            image: '/assets/menu/peanut-butter-brownie-shake.jpg'
          },
          {
            name: 'Caramel Pretzel',
            price: 200,
            description:
              'Sweet and salty indulgence with caramel sauce and crunchy pretzel bits.',
            image: '/assets/menu/caramel-pretzel.jpg'
          },
          {
            name: "Boozy S'mores milkshake",
            price: 200,
            description:
              'A sinful mix of chocolate, marshmallow, and a boozy kick.'
          },
          {
            name: 'Oreo Cookies Shake',
            price: 150,
            description:
              'A creamy blend of Oreo cookies, milk, and vanilla ice cream, topped with crushed cookies.'
          }
        ]
      },
      {
        subheading: 'Mocktails',
        items: [
          {
            name: 'Classic Mojito',
            price: 100,
            description:
              'Zesty lime and fresh mint muddled with sparkling soda.'
          },
          {
            name: 'Pina Colada',
            price: 150,
            description: 'Tropical blend of pineapple and creamy coconut.'
          },
          {
            name: 'Matcha Honey Lemon Soda',
            price: 180,
            description:
              'Earthy matcha paired with honey and a tangy lemon fizz.'
          },
          {
            name: 'Blue Redry Soda',
            price: 200,
            description: 'Vibrant blue soda with a hint of citrus.'
          },
          {
            name: 'Lychee Sky Soda',
            price: 200,
            description: 'Sweet and fragrant lychee soda with a fizzy twist.'
          },
          {
            name: 'Peach Coffee Tonic',
            price: 220,
            description:
              'A refreshing mix of peach essence and cold brew coffee topped with tonic water.'
          }
        ]
      },
      {
        subheading: 'Cold Brews',
        items: [
          {
            name: 'Lemon Iced Tea',
            price: 130,
            description: 'Refreshing iced tea with a tangy lemon kick.'
          },
          {
            name: 'Peach Iced Tea',
            price: 130,
            description: 'Sweet and fruity iced tea infused with peach flavor.'
          },
          {
            name: 'Classic Cold Coffee',
            price: 150,
            description: 'A smooth and bold chilled coffee blend.'
          },
          {
            name: 'Dalgona Coffee',
            price: 150,
            description: 'Creamy whipped coffee served over iced milk.'
          },
          {
            name: 'Black Orange',
            price: 160,
            description: 'Bold black coffee with a citrusy orange twist.'
          },
          {
            name: 'Iced Caramel Macchiato',
            price: 160,
            description:
              'Chilled coffee with caramel drizzle and velvety milk layers.'
          },
          {
            name: 'Thai Tea Mocha',
            price: 180,
            description: 'A fusion of Thai iced tea and creamy mocha.'
          },
          {
            name: 'Iced Nutella Coffee',
            price: 220,
            description:
              'Rich cold coffee infused with Nutella and topped with whipped cream.'
          }
        ]
      }
    ]
  },
  {
    heading: 'Soothing Sips',
    subcategories: [
      {
        subheading: 'Soups',
        items: [
          {
            name: 'Manchow Soup',
            price: 100,
            description:
              'A spicy and tangy Chinese-style soup topped with crispy noodles.'
          },
          {
            name: 'Tomato Basil Soup',
            price: 130,
            description:
              'A classic blend of ripe tomatoes and fresh basil, finished with a touch of cream.'
          },
          {
            name: 'Sweet Corn Soup',
            price: 130,
            description:
              'A comforting mix of sweet corn and vegetables in a creamy broth.'
          },
          {
            name: 'Creamy Broccoli Soup',
            price: 200,
            description:
              'A rich and velvety soup made with fresh broccoli and subtle spices.'
          },
          {
            name: 'Mushroom Cappuccino',
            price: 200,
            description:
              'A sophisticated mushroom soup with a frothy top, served cappuccino-style.'
          },
          {
            name: 'Tom Yum Soup',
            price: 200,
            description:
              'Thai-inspired hot and sour soup with vibrant flavors of lemongrass and lime.'
          }
        ]
      },
      {
        subheading: 'Tea',
        items: [
          {
            name: 'Indian Masala Tea',
            price: 40,
            description:
              'Traditional spiced tea brewed with aromatic Indian spices.'
          },
          {
            name: 'Honey Lemon Ginger Tea',
            price: 80,
            description: 'A soothing blend of ginger, honey, and fresh lemon.'
          },
          {
            name: 'Yogic Tea',
            price: 100,
            description:
              'A unique blend of warming spices and herbs for balance and rejuvenation.'
          },
          {
            name: 'Blue Butterfly Pea Tea',
            price: 120,
            description:
              'Vibrant blue tea with earthy tones and a hint of citrus.'
          },
          {
            name: 'Kambucha',
            price: 150,
            description:
              'A refreshing, fermented tea with a tangy and slightly fizzy twist, packed with probiotics.'
          }
        ]
      },
      {
        subheading: 'Hot Brews',
        items: [
          {
            name: 'Espresso (Single Shot)',
            price: 70,
            description: 'A bold and intense shot of rich espresso.'
          },
          {
            name: 'Espresso (Double Shot)',
            price: 110,
            description: 'A double dose of strong and aromatic espresso.'
          },
          {
            name: 'Americano',
            price: 110,
            description:
              'Espresso diluted with hot water for a smooth, robust flavor.'
          },
          {
            name: 'Cortado',
            price: 120,
            description:
              'A balanced blend of espresso and steamed milk for a smooth finish.'
          },
          {
            name: 'Cappuccino',
            price: 130,
            description:
              'A classic mix of espresso, steamed milk, and velvety foam.'
          },
          {
            name: 'Latte',
            price: 150,
            description:
              'Creamy espresso topped with a generous layer of steamed milk.'
          },
          {
            name: 'Caramel Macchiato',
            price: 160,
            description: 'Layers of espresso, caramel, and frothy milk.'
          },
          {
            name: 'Cafe Mocha',
            price: 160,
            description:
              'Chocolatey espresso with steamed milk and whipped cream.'
          },
          {
            name: 'Matcha Latte',
            price: 180,
            description: 'A silky mix of premium matcha and steamed milk.'
          }
        ]
      }
    ]
  },
  {
    heading: 'Breakfast',
    subcategories: [
      {
        subheading: 'Eggs to Order',
        items: [
          { name: 'Boiled Eggs (2)', price: 50 },
          { name: 'Plain Omelette', price: 100 },
          { name: 'Vegetable Omelette', price: 120 },
          { name: 'Scrambled Eggs', price: 130 },
          { name: 'Souffle Omelette', price: 150 }
        ]
      },
      {
        subheading: 'Shakshuka',
        items: [
          {
            name: 'Shakshuka',
            price: 260,
            description:
              'Eggs with cumin poached in a sauce of tomatoes, olive oil, peppers, onion, and garlic, spiced with paprika and cayenne pepper.'
          }
        ]
      },
      {
        subheading: 'Toasts & Cereal',
        items: [
          {
            name: 'Cheese Chilli Toast',
            price: 120,
            description:
              'Crispy toast loaded with melted cheese and spiced with green chilies for a zesty kick.'
          },
          {
            name: 'Toast with Peanut Butter/Fruit Jam',
            price: 120,
            description:
              'Classic toast with your choice of creamy peanut butter or sweet fruit jam.'
          },
          {
            name: 'Toast with Nutella and Banana',
            price: 150,
            description:
              'A delightful combination of Nutella spread and fresh banana slices on toast.'
          },
          {
            name: 'Avocado Toast with Veggies',
            price: 180,
            description:
              'Creamy avocado topped with a medley of fresh, crisp veggies on toasted bread.'
          },
          {
            name: 'Avocado Toast with Eggs',
            price: 200,
            description:
              'Hearty avocado toast topped with perfectly cooked eggs.'
          },
          {
            name: 'Granola Bowl with Fruits and Nuts',
            price: 200,
            description:
              'Crunchy granola served with seasonal fruits and a sprinkle of nuts.'
          }
        ]
      },
      {
        subheading: 'Pancakes',
        items: [
          {
            name: 'Nutella Banana Pancakes',
            price: 200,
            description:
              'Soft pancakes topped with creamy Nutella, fresh banana slices, and a drizzle of chocolate sauce.'
          },
          {
            name: 'Blueberry Pancakes',
            price: 200,
            description:
              'Classic pancakes infused with blueberries, served with a side of maple syrup.'
          },
          {
            name: 'Oats Pancakes with Nuts and Peanut Butter',
            price: 250,
            description:
              'A nutritious option with oats, topped with crunchy nuts and your choice of peanut butter or Nutella.'
          }
        ]
      }
    ]
  }
];
