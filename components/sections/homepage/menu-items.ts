interface MenuData {
  heading: string;
  subcategories: Subcategory[];
}

interface Subcategory {
  subheading: string;
  items: MenuItem[];
}

interface MenuItem {
  name: string;
  price: number;
  description?: string;
  image?: string;
}

export const menuData: MenuData[] = [
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
              'A sinful mix of chocolate, marshmallow, and a boozy kick.',
            image: '/assets/menu/boozy-s-mores-milkshake.jpg'
          },
          {
            name: 'Oreo Cookies Shake',
            price: 150,
            description:
              'A creamy blend of Oreo cookies, milk, and vanilla ice cream, topped with crushed cookies.',
            image: '/assets/menu/oreo-cookies-shake.jpg'
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
              'Zesty lime and fresh mint muddled with sparkling soda.',
            image: '/assets/menu/classic-mojito.jpg'
          },
          {
            name: 'Pina Colada',
            price: 150,
            description: 'Tropical blend of pineapple and creamy coconut.',
            image: '/assets/menu/pina-colada.jpg'
          },
          {
            name: 'Matcha Honey Lemon Soda',
            price: 180,
            description:
              'Earthy matcha paired with honey and a tangy lemon fizz.',
            image: '/assets/menu/matcha-honey-lemon-soda.jpg'
          },
          {
            name: 'Blue Redry Soda',
            price: 200,
            description: 'Vibrant blue soda with a hint of citrus.',
            image: '/assets/menu/blue-redry-soda.jpg'
          },
          {
            name: 'Lychee Sky Soda',
            price: 200,
            description: 'Sweet and fragrant lychee soda with a fizzy twist.',
            image: '/assets/menu/lychee-sky-soda.jpg'
          },
          {
            name: 'Peach Coffee Tonic',
            price: 220,
            description:
              'A refreshing mix of peach essence and cold brew coffee topped with tonic water.',
            image: '/assets/menu/peach-coffee-tonic.jpg'
          }
        ]
      },
      {
        subheading: 'Cold Brews',
        items: [
          {
            name: 'Lemon Iced Tea',
            price: 130,
            description: 'Refreshing iced tea with a tangy lemon kick.',
            image: '/assets/menu/lemon-iced-tea.jpg'
          },
          {
            name: 'Peach Iced Tea',
            price: 130,
            description: 'Sweet and fruity iced tea infused with peach flavor.',
            image: '/assets/menu/peach-iced-tea.jpg'
          },
          {
            name: 'Classic Cold Coffee',
            price: 150,
            description: 'A smooth and bold chilled coffee blend.',
            image: '/assets/menu/classic-cold-coffee.jpg'
          },
          {
            name: 'Dalgona Coffee',
            price: 150,
            description: 'Creamy whipped coffee served over iced milk.',
            image: '/assets/menu/dalgona-coffee.jpg'
          },
          {
            name: 'Black Orange Coffee',
            price: 160,
            description: 'Bold black coffee with a citrusy orange twist.',
            image: '/assets/menu/black-orange-coffee.jpg'
          },
          {
            name: 'Iced Caramel Macchiato',
            price: 160,
            description:
              'Chilled coffee with caramel drizzle and velvety milk layers.',
            image: '/assets/menu/iced-caramel-macchiato.jpg'
          },
          {
            name: 'Thai Tea Mocha',
            price: 180,
            description: 'A fusion of Thai iced tea and creamy mocha.',
            image: '/assets/menu/thai-tea-mocha.webp'
          },
          {
            name: 'Iced Nutella Coffee',
            price: 220,
            description:
              'Rich cold coffee infused with Nutella and topped with whipped cream.',
            image: '/assets/menu/iced-nutella-coffee.jpg'
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
              'A spicy and tangy Chinese-style soup topped with crispy noodles.',
            image: '/assets/menu/manchow-soup.jpg'
          },
          {
            name: 'Tomato Basil Soup',
            price: 130,
            description:
              'A classic blend of ripe tomatoes and fresh basil, finished with a touch of cream.',
            image: '/assets/menu/tomato-basil-soup.jpg'
          },
          {
            name: 'Sweet Corn Soup',
            price: 130,
            description:
              'A comforting mix of sweet corn and vegetables in a creamy broth.',
            image: '/assets/menu/sweet-corn-soup.jpg'
          },
          {
            name: 'Creamy Broccoli Soup',
            price: 200,
            description:
              'A rich and velvety soup made with fresh broccoli and subtle spices.',
            image: '/assets/menu/creamy-broccoli-soup.jpg'
          },
          {
            name: 'Mushroom Cappuccino',
            price: 200,
            description:
              'A sophisticated mushroom soup with a frothy top, served cappuccino-style.',
            image: '/assets/menu/mushroom-cappuccino.jpg'
          },
          {
            name: 'Tom Yum Soup',
            price: 200,
            description:
              'Thai-inspired hot and sour soup with vibrant flavors of lemongrass and lime.',
            image: '/assets/menu/tom-yum-soup.jpg'
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
              'Traditional spiced tea brewed with aromatic Indian spices.',
            image: '/assets/menu/indian-masala-tea.jpg'
          },
          {
            name: 'Honey Lemon Ginger Tea',
            price: 80,
            description: 'A soothing blend of ginger, honey, and fresh lemon.',
            image: '/assets/menu/honey-lemon-ginger-tea.jpg'
          },
          {
            name: 'Yogic Tea',
            price: 100,
            description:
              'A unique blend of warming spices and herbs for balance and rejuvenation.',
            image: '/assets/menu/yogic-tea.jpg'
          },
          {
            name: 'Blue Butterfly Pea Tea',
            price: 120,
            description:
              'Vibrant blue tea with earthy tones and a hint of citrus.',
            image: '/assets/menu/blue-butterfly-pea-tea.png'
          },
          {
            name: 'Kambucha Tea',
            price: 150,
            description:
              'A refreshing, fermented tea with a tangy and slightly fizzy twist, packed with probiotics.',
            image: '/assets/menu/kambucha-tea.jpg'
          }
        ]
      },
      {
        subheading: 'Hot Brews',
        items: [
          {
            name: 'Espresso (Single Shot)',
            price: 70,
            description: 'A bold and intense shot of rich espresso.',
            image: '/assets/menu/espresso-single-shot.jpg'
          },
          {
            name: 'Espresso (Double Shot)',
            price: 110,
            description: 'A double dose of strong and aromatic espresso.',
            image: '/assets/menu/espresso-double-shot.jpg'
          },
          {
            name: 'Americano',
            price: 110,
            description:
              'Espresso diluted with hot water for a smooth, robust flavor.',
            image: '/assets/menu/americano.jpg'
          },
          {
            name: 'Cortado',
            price: 120,
            description:
              'A balanced blend of espresso and steamed milk for a smooth finish.',
            image: '/assets/menu/cortado.jpg'
          },
          {
            name: 'Cappuccino',
            price: 130,
            description:
              'A classic mix of espresso, steamed milk, and velvety foam.',
            image: '/assets/menu/cappuccino.jpg'
          },
          {
            name: 'Latte',
            price: 150,
            description:
              'Creamy espresso topped with a generous layer of steamed milk.',
            image: '/assets/menu/latte.jpg'
          },
          {
            name: 'Caramel Macchiato',
            price: 160,
            description: 'Layers of espresso, caramel, and frothy milk.',
            image: '/assets/menu/caramel-macchiato.jpg'
          },
          {
            name: 'Cafe Mocha',
            price: 160,
            description:
              'Chocolatey espresso with steamed milk and whipped cream.',
            image: '/assets/menu/cafe-mocha.jpg'
          },
          {
            name: 'Matcha Latte',
            price: 180,
            description: 'A silky mix of premium matcha and steamed milk.',
            image: '/assets/menu/matcha-latte.jpg'
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
          {
            name: 'Boiled Eggs (2)',
            price: 50,
            image: '/assets/menu/boiled-eggs.jpg'
          },
          {
            name: 'Plain Omelette',
            price: 100,
            image: '/assets/menu/plain-omelette.jpg'
          },
          {
            name: 'Vegetable Omelette',
            price: 120,
            image: '/assets/menu/vegetable-omelette.jpg'
          },
          {
            name: 'Scrambled Eggs',
            price: 130,
            image: '/assets/menu/scrambled-eggs.jpg'
          },
          {
            name: 'Souffle Omelette',
            price: 150,
            image: '/assets/menu/souffle-omelette.jpg'
          }
        ]
      },
      {
        subheading: 'Shakshuka',
        items: [
          {
            name: 'Shakshuka',
            price: 260,
            description:
              'Eggs with cumin poached in a sauce of tomatoes, olive oil, peppers, onion, and garlic, spiced with paprika and cayenne pepper.',
            image: '/assets/menu/shakshuka.jpg'
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
              'Crispy toast loaded with melted cheese and spiced with green chilies for a zesty kick.',
            image: '/assets/menu/cheese-chilli-toast.jpg'
          },
          {
            name: 'Toast with Peanut Butter/Fruit Jam',
            price: 120,
            description:
              'Classic toast with your choice of creamy peanut butter or sweet fruit jam.',
            image: '/assets/menu/toast-with-peanut-butter-fruit-jam.jpg'
          },
          {
            name: 'Toast with Nutella and Banana',
            price: 150,
            description:
              'A delightful combination of Nutella spread and fresh banana slices on toast.',
            image: '/assets/menu/toast-with-nutella-and-banana.jpg'
          },
          {
            name: 'Avocado Toast with Veggies',
            price: 180,
            description:
              'Creamy avocado topped with a medley of fresh, crisp veggies on toasted bread.',
            image: '/assets/menu/avocado-toast-with-veggies.jpg'
          },
          {
            name: 'Avocado Toast with Eggs',
            price: 200,
            description:
              'Hearty avocado toast topped with perfectly cooked eggs.',
            image: '/assets/menu/avocado-toast-with-eggs.jpg'
          },
          {
            name: 'Granola Bowl with Fruits and Nuts',
            price: 200,
            description:
              'Crunchy granola served with seasonal fruits and a sprinkle of nuts.',
            image: '/assets/menu/granola-bowl-with-fruits-and-nuts.jpg'
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
              'Soft pancakes topped with creamy Nutella, fresh banana slices, and a drizzle of chocolate sauce.',
            image: '/assets/menu/nutella-banana-pancakes.jpg'
          },
          {
            name: 'Blueberry Pancakes',
            price: 200,
            description:
              'Classic pancakes infused with blueberries, served with a side of maple syrup.',
            image: '/assets/menu/blueberry-pancakes.jpg'
          },
          {
            name: 'Oats Pancakes with Nuts and Peanut Butter',
            price: 250,
            description:
              'A nutritious option with oats, topped with crunchy nuts and your choice of peanut butter or Nutella.',
            image: '/assets/menu/oats-pancakes-with-nuts-and-peanut-butter.jpg'
          }
        ]
      },
      {
        subheading: 'Sandwiches',
        items: [
          {
            name: 'Coleslaw Sandwich',
            price: 150,
            description: 'Creamy coleslaw sandwiched in whole-grain bread.'
          },
          {
            name: 'Bombay Special Sandwich',
            price: 150,
            description:
              'A Mumbai street-style sandwich with layers of chutney, vegetables, and cheese.'
          },
          {
            name: 'Tandoori Paneer Sandwich',
            price: 200,
            description:
              'Spiced tandoori paneer with onions and bell peppers in a toasted sandwich.'
          },
          {
            name: 'Club Sandwich',
            price: 200,
            description:
              'A classic triple-layer sandwich with fresh vegetables and flavorful spreads.'
          },
          {
            name: 'Corn And Cheese Sandwich',
            price: 220,
            description:
              'A gooey mix of sweet corn and cheese in crispy grilled bread.'
          }
        ]
      },
      {
        subheading: 'Indian Breakfast',
        items: [
          {
            name: 'Kanda Poha',
            price: 80,
            description:
              'Light and flavorful flattened rice with sautéed onions and spices.'
          },
          {
            name: 'Indori Poha',
            price: 100,
            description:
              'A classic Indore-style sweet and sour poha topped with sev, peanuts, and a dash of lemon.'
          }
        ]
      },
      {
        subheading: 'Dosa',
        items: [
          {
            name: 'Plain Ghee Dosa',
            price: 80,
            description:
              'A crispy rice crepe cooked with pure ghee, served with chutney and sambhar.'
          },
          {
            name: 'Podi Dosa',
            price: 100,
            description:
              'A unique dosa infused with spicy podi powder and clarified butter.'
          },
          {
            name: 'Masala Dosa',
            price: 120,
            description: 'Traditional dosa stuffed with spiced potato filling.'
          },
          {
            name: 'Paneer/Tofu Dosa',
            price: 180,
            description:
              'Protein-rich dosa filled with a flavorful paneer or tofu masala mix.'
          },
          {
            name: 'Mysore Special Dosa',
            price: 200,
            description:
              'A spicy dosa layered with tangy Mysore chutney and served with coconut chutney.'
          }
        ]
      },
      {
        subheading: 'Paratha',
        items: [
          {
            name: 'Masala Paratha',
            price: 60,
            description: 'Flavored paratha with a blend of spices and herbs.'
          },
          {
            name: 'Aloo-Pyaaz Stuffed Paratha',
            price: 80,
            description:
              'Classic paratha with a spiced potato and onion filling.'
          },
          {
            name: 'Paneer Paratha',
            price: 100,
            description:
              'Stuffed with soft, seasoned cottage cheese and served with pickle and onion rings.'
          }
        ]
      },
      {
        subheading: 'Salad Bowls',
        items: [
          {
            name: 'Sprouts and Garlic Salad',
            price: 180,
            description:
              'Crunchy sprouts tossed with roasted garlic, herbs, and a light vinaigrette.'
          },
          {
            name: 'Greek Vegan Chickpea Millet Salad',
            price: 200,
            description:
              'A Mediterranean-inspired salad with chickpeas, millet, fresh vegetables, and tangy lemon dressing.'
          },
          {
            name: 'Mexican Bean Pepper Salad',
            price: 220,
            description:
              'A zesty mix of kidney beans, bell peppers, corn, and a lime-cilantro dressing.'
          },
          {
            name: 'Waldorf Pasta Salad',
            price: 250,
            description:
              'A classic twist with fresh apples, walnuts, pasta, and creamy dressing.'
          },
          {
            name: 'Spring Pesto Pasta Salad',
            price: 250,
            description:
              'A vibrant combination of pasta, seasonal vegetables, and basil pesto.'
          },
          {
            name: 'Crunchy Broccoli Millet Salad',
            price: 260,
            description:
              'Protein-rich salad with the crunch of broccoli, almonds, carrots tossed with herby lemon dressing.'
          }
        ]
      },
      {
        subheading: 'Smoothie Bowls',
        items: [
          {
            name: "Strawberries 'n' Cream Smoothie Bowl",
            price: 250,
            description:
              'Smooth blend of strawberries, yogurt, maple syrup, and vanilla topped with the cornflakes, blueberries, almonds, pumpkin seeds, chia seeds.'
          },
          {
            name: 'Tropical Smoothie Bowl',
            price: 250,
            description:
              'A tropical delight with mango, pineapple, kiwi, and shredded coconut.'
          },
          {
            name: 'Chocolate Peanut Butter and Banana Smoothie Bowl',
            price: 250,
            description:
              'A decadent mix of cocoa, peanut butter, and bananas topped with granola and dark chocolate shavings.'
          },
          {
            name: 'Pineapple Banana Peach Smoothie Bowl',
            price: 270,
            description:
              'Sweet blend of pineapple, banana, and peach topped with almonds and flaxseeds.'
          },
          {
            name: 'Avocado and Kale Smoothie Bowl',
            price: 280,
            description:
              'Blend of kale, avocado, banana and almond milk topped with raspberries, chia seeds and granola.'
          }
        ]
      },
      {
        subheading: 'Buddha Bowls',
        items: [
          {
            name: 'Vegan Tofu Himalayan Millet Bowl',
            price: 300,
            description:
              'Steamed Himalayan millet, crispy tofu, and vegetables in a sesame-ginger dressing.'
          },
          {
            name: 'Pad Thai Noodles Bowl',
            price: 280,
            description:
              'A classic Thai bowl with rice noodles, tofu tossed in orange peanut sauce topped with crunchy peanuts.'
          },
          {
            name: 'Middle Eastern Falafel Bowl',
            price: 260,
            description:
              'Crispy falafels served with hummus, pita, and a fresh cucumber-tomato salad.'
          },
          {
            name: 'Mediterranean Bowl',
            price: 300,
            description:
              'Tofu, spinach and veggies are cooked slowly in light tomato herby stew served with gluten-free Himalayan millet rice and a side green salad.'
          },
          {
            name: 'Red Thai Bowl',
            price: 300,
            description:
              'Red Thai curry with Indian Jasmine rice served with Kimchi Salad.'
          }
        ]
      }
    ]
  },
  {
    heading: 'Main Course',
    subcategories: [
      {
        subheading: 'Noodles',
        items: [
          {
            name: 'Vegetable Chowmein',
            price: 100,
            description:
              'A street-style favorite with crunchy vegetables and a savory sauce.'
          },
          {
            name: 'Chilli Garlic Noodles',
            price: 120,
            description:
              'Spicy noodles tossed with garlic, chili, and vegetables for a bold flavor.'
          },
          {
            name: 'Thukpa',
            price: 150,
            description:
              'A Himalayan noodle soup packed with fresh vegetables and flavorful broth.'
          },
          {
            name: 'Hakka Noodles',
            price: 180,
            description:
              'Classic stir-fried noodles with vegetables and a hint of soy sauce.'
          },
          {
            name: 'Thai Tofu Peanut Noodles',
            price: 200,
            description:
              'Creamy and nutty noodles with Thai tofu and a peanut sauce.'
          }
        ]
      },
      {
        subheading: 'Pasta',
        items: [
          {
            name: 'Sicilian Spaghetti',
            price: 200,
            description:
              'A vibrant dish with garlic, olives and a hint of chili.'
          },
          {
            name: 'Penne Arrabiata',
            price: 200,
            description:
              'Penne pasta in a spicy tomato sauce with chili flakes and garlic.'
          },
          {
            name: 'Fusilli In Marinara Sauce',
            price: 220,
            description:
              'Twirled fusilli pasta in a tangy tomato marinara sauce with fresh basil.'
          },
          {
            name: 'Creamy Mushroom Pasta',
            price: 250,
            description: 'Pasta tossed in a creamy mushroom sauce with herbs.'
          }
        ]
      },
      {
        subheading: 'Pizza',
        items: [
          {
            name: 'Pizza Margherita',
            price: 150,
            description:
              'Classic Italian pizza topped with tangy tomato sauce, fresh mozzarella, and basil.'
          },
          {
            name: 'Corn and Cheese Pizza',
            price: 160,
            description:
              'A cheesy delight loaded with sweet corn and a blend of gooey cheeses.'
          },
          {
            name: 'Tandoori Paneer Pizza',
            price: 220,
            description:
              'A fusion treat with marinated tandoori paneer chunks, onions, and bell peppers.'
          },
          {
            name: 'Vegetable Pizza',
            price: 220,
            description:
              'A colorful medley of fresh vegetables, cheese, and savory tomato sauce.'
          }
        ]
      },
      {
        subheading: 'Wraps',
        items: [
          {
            name: 'Kathi Roll',
            price: 160,
            description:
              'An Indian favorite with spiced vegetables wrapped in soft flatbread.'
          },
          {
            name: 'Egg Kathi Roll',
            price: 180,
            description:
              'A protein-rich roll with spiced egg filling and vegetables.'
          },
          {
            name: 'Pesto Wrap',
            price: 250,
            description:
              'A wrap filled with fresh vegetables, greens, and a zesty pesto sauce.'
          }
        ]
      },
      {
        subheading: 'Crepes',
        items: [
          {
            name: 'Nutella Banana Crepe',
            price: 200,
            description:
              'Soft and warm crepes filled with creamy Nutella and fresh banana slices, topped with a drizzle of chocolate sauce.'
          },
          {
            name: 'Brunch Crepe',
            price: 250,
            description:
              'A savory crepe packed with scrambled eggs, sautéed vegetables, and melted cheese, perfect for a hearty meal.'
          },
          {
            name: 'Hawaii Sunset Crepe',
            price: 300,
            description:
              'A sweet and tangy combination of pineapple, caramel sauce, and toasted coconut, reminiscent of an island sunset.'
          },
          {
            name: 'Fruit Island Crepe',
            price: 350,
            description:
              'A tropical treat filled with mixed fruits like strawberries, kiwi and banana, custard cream, and nutella.'
          }
        ]
      },
      {
        subheading: 'Indian Bowls',
        items: [
          {
            name: 'Dal Khichdi',
            price: 150,
            description:
              'A nutritious blend of green lentils, rice, and mild spices, perfect for a wholesome and comforting meal.'
          },
          {
            name: 'Curd Rice',
            price: 160,
            description:
              'A combination of cooked rice and yogurt, delicately seasoned with mustard seeds and curry leaves.'
          },
          {
            name: 'Indian Yogic Bowl',
            price: 200,
            description:
              'A balanced and wholesome bowl of steamed rice with mixed lentil curry, and seasonal vegetables inspired by yogic dietary principles.'
          },
          {
            name: 'Saucy Masala Corn And Herb Rice Bowl',
            price: 250,
            description:
              'Spicy and tangy saucy corn served alongside fragrant herb-infused rice for a delightful combination.'
          }
        ]
      }
    ]
  },
  {
    heading: 'Starters',
    subcategories: [
      {
        subheading: 'Popular Starters',
        items: [
          {
            name: 'Peanut Chaat',
            price: 80,
            description:
              'A crunchy and tangy snack made with roasted peanuts, fresh vegetables, and zesty spices, perfect for a light and flavorful bite.'
          },
          {
            name: 'Masala Papad',
            price: 100,
            description:
              'Crispy roasted papad topped with a mix of fresh onions, tomatoes, and spices for a crunchy and flavorful snack.'
          },
          {
            name: 'Gobhi Manchurian',
            price: 130,
            description:
              'Crispy cauliflower florets tossed in a tangy Indo-Chinese sauce, packed with flavor.'
          },
          {
            name: 'Honey Chilli Potato',
            price: 150,
            description:
              'Crunchy potato fingers coated in a sweet and spicy sauce, a perfect blend of flavors.'
          },
          {
            name: 'Mix Veg Fritters',
            price: 150,
            description:
              'A delicious assortment of vegetables deep-fried in a gram flour batter for a crispy appetizer.'
          },
          {
            name: 'Crispy Fried American Corn',
            price: 180,
            description:
              'Sweet corn kernels fried until golden and tossed with spices for a delightful snack.'
          },
          {
            name: 'Beetroot Kebab',
            price: 180,
            description:
              'Soft and flavorful beetroot patties, mildly spiced and grilled to perfection.'
          },
          {
            name: 'Chilli Mushroom',
            price: 200,
            description:
              'Juicy mushrooms stir-fried with bell peppers in a spicy and tangy sauce.'
          }
        ]
      },
      {
        subheading: 'Breads',
        items: [
          {
            name: 'Plain Tawa Chappati',
            price: 30,
            description:
              '2 Soft and simple whole wheat flatbread, perfect with any curry.'
          },
          {
            name: 'Butter Chappati',
            price: 40,
            description:
              '2 A soft whole wheat flatbread brushed with butter for added richness.'
          },
          {
            name: 'Single Millet Chappati/Mandua ki Roti',
            price: 70,
            description:
              '2 nutritious flatbread made from a single variety of millet i.e, finger millet.'
          },
          {
            name: 'Mix Millet Chappati',
            price: 80,
            description:
              '2 flatbreads made with a blend of millets for a healthy twist.'
          },
          {
            name: 'Plain Paratha',
            price: 40,
            description:
              '1 pc. flaky, layered Indian flatbread, cooked on a griddle.'
          },
          {
            name: 'Lachha Paratha',
            price: 50,
            description:
              '1 pc. A multi-layered, crispy flatbread, rich and indulgent.'
          },
          {
            name: 'Masala Paratha',
            price: 60,
            description:
              '1 pc. spiced flatbread with a perfect balance of flavors.'
          },
          {
            name: 'Malabar Paratha',
            price: 70,
            description:
              '1 pc. A soft, flaky, and slightly sweet flatbread from South India.'
          },
          {
            name: 'Aloo Stuffed Paratha',
            price: 80,
            description:
              '1 pc. hearty flatbread stuffed with spiced mashed potatoes and onion.'
          },
          {
            name: 'Paneer Paratha',
            price: 100,
            description:
              '1 pc. A stuffed bread filled with seasoned cottage cheese, delicious and filling.'
          }
        ]
      },
      {
        subheading: 'Rice',
        items: [
          {
            name: 'Steamed Rice',
            price: 70,
            description:
              'Simple and fluffy white rice, a versatile accompaniment to any dish.'
          },
          {
            name: 'Jeera Rice',
            price: 90,
            description:
              'Aromatic basmati rice flavored with cumin seeds, a light and fragrant choice.'
          },
          {
            name: 'Vegetable Fried Rice',
            price: 120,
            description:
              'Stir-fried rice with colorful vegetables and mild spices, perfect for all tastes.'
          },
          {
            name: 'Egg Fried Rice',
            price: 150,
            description:
              'A protein-rich twist on fried rice with scrambled eggs and a hint of spice.'
          },
          {
            name: 'Veg Biryani',
            price: 200,
            description:
              'A flavorful rice dish layered with aromatic spices, vegetables, and herbs.'
          },
          {
            name: 'Paneer Tikka Pulao',
            price: 250,
            description: 'Aromatic rice cooked with marinated grilled paneer.'
          }
        ]
      },
      {
        subheading: 'Currries',
        items: [
          {
            name: 'Dal Fry',
            price: 150,
            description:
              'Yellow lentils cooked with onions, tomatoes, and spices.'
          },
          {
            name: 'Tarkari Handi',
            price: 180,
            description:
              'Mixed vegetables cooked with Indian spices in a clay pot.'
          },
          {
            name: 'Aloo Gobhi Shimla Mirch',
            price: 180,
            description:
              'Stir-fried potatoes, cauliflower, and bell peppers cooked in Indian gravy.'
          },
          {
            name: 'Anda Masala',
            price: 190,
            description:
              'Boiled eggs coated in a thick, spicy masala, cooked to perfection for a flavorful dry curry.'
          },
          {
            name: 'Egg Curry',
            price: 190,
            description:
              'A flavorful curry with boiled eggs and aromatic spices.'
          },
          {
            name: 'Mushroom Do Pyaza',
            price: 220,
            description: 'Mushrooms cooked with onions in a flavorful gravy.'
          },
          {
            name: 'Kadhai Paneer',
            price: 220,
            description:
              'Cottage cheese in a spicy tomato-based sauce with bell peppers.'
          },
          {
            name: 'Paneer Butter Masala',
            price: 250,
            description: 'Creamy tomato gravy with soft cottage cheese cubes.'
          }
        ]
      },
      {
        subheading: 'ACCOMPANIMENTS',
        items: [
          {
            name: 'Plain Curd',
            price: 50,
            description: 'Simple, refreshing homemade yogurt.'
          },
          {
            name: 'Boondi Raita',
            price: 60,
            description: 'Yogurt with crispy fried gram flour balls.'
          },
          {
            name: 'Mix Veg Raita',
            price: 80,
            description: 'Yogurt mixed with finely chopped fresh vegetables.'
          },
          {
            name: 'Pineapple Raita',
            price: 90,
            description: 'Sweet and tangy yogurt with pineapple chunks.'
          },
          {
            name: 'Sweet Lassi',
            price: 150,
            description: 'A chilled and creamy yogurt-based drink with sugar.'
          },
          {
            name: 'Mango Lassi',
            price: 180,
            description: 'Sweet mango-flavored yogurt drink.'
          },
          {
            name: 'Coconut Lassi',
            price: 200,
            description:
              'Yogurt-based drink prepared using yogurt and tender coconut pulp enhanced with spices.'
          }
        ]
      },
      {
        subheading: 'Desserts',
        items: [
          {
            name: 'Gulab Jamun',
            price: 100,
            description:
              'Soft, golden dumplings made from milk solids, soaked in aromatic sugar syrup.'
          },
          {
            name: 'Ice Creams',
            price: 100,
            description:
              'Creamy and refreshing frozen delights available in a variety of flavors.'
          },
          {
            name: 'Banana Split',
            price: 150,
            description:
              'A delightful treat featuring sliced bananas topped with scoops of ice cream, whipped cream, nuts, and chocolate syrup.'
          },
          {
            name: 'Affogato',
            price: 150,
            description:
              'An Italian dessert comprising a scoop of ice cream topped with hot espresso.'
          },
          {
            name: 'Gajar Halwa',
            price: 150,
            description:
              'A classic Indian sweet made with grated carrots, milk, sugar, and a touch of ghee.'
          },
          {
            name: 'Moong Dal Halwa',
            price: 200,
            description:
              'A rich and decadent dessert made with split yellow lentils, ghee, and sugar.'
          }
        ]
      }
    ]
  }
];
