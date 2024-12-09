import { Heading } from '@/lib/interface';

export const menuData: Heading[] = [
  {
    heading: 'Beverages',
    subcategories: [
      {
        subheading: 'Icy Sips Juices',
        items: [
          {
            name: 'Mausambi (Sweet Lime) Juice',
            price: 120,
            image: '/assets/menu/masambi-juice.jpeg',
            tags: ['fresh', 'citrusy']
          },
          {
            name: 'Pineapple Juice',
            price: 150,
            image: '/assets/menu/pineapple-juice.jpg',
            tags: ['fresh', 'tropical']
          },
          {
            name: 'Watermelon Juice',
            price: 120,
            image: '/assets/menu/watermelon-juice.jpg',
            tags: ['fresh', 'refreshing']
          },
          {
            name: 'Apple beetroot carrot Juice',
            price: 150,
            image: '/assets/menu/apple-beetroot-carrot-juice.jpg',
            tags: ['fresh', 'healthy']
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
            image: '/assets/menu/strawberry-milkshake.jpg',
            tags: ['fresh', 'fruity']
          },
          {
            name: 'Peanut Butter Brownie Shake',
            price: 200,
            description:
              'Decadent shake loaded with peanut butter, brownie chunks, and whipped cream.',
            image: '/assets/menu/peanut-butter-brownie-shake.jpg',
            tags: ['rich', 'indulgent']
          },
          {
            name: 'Caramel Pretzel',
            price: 200,
            description:
              'Sweet and salty indulgence with caramel sauce and crunchy pretzel bits.',
            image: '/assets/menu/caramel-pretzel.jpg',
            tags: ['sweet', 'salty']
          },
          {
            name: "Boozy S'mores milkshake",
            price: 200,
            description:
              'A sinful mix of chocolate, marshmallow, and a boozy kick.',
            image: '/assets/menu/boozy-s-mores-milkshake.jpg',
            tags: ['decadent', 'boozy']
          },
          {
            name: 'Oreo Cookies Shake',
            price: 150,
            description:
              'A creamy blend of Oreo cookies, milk, and vanilla ice cream, topped with crushed cookies.',
            image: '/assets/menu/oreo-cookies-shake.jpg',
            tags: ['classic', 'creamy']
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
            image: '/assets/menu/classic-mojito.jpg',
            tags: ['refreshing', 'citrusy']
          },
          {
            name: 'Pina Colada',
            price: 150,
            description: 'Tropical blend of pineapple and creamy coconut.',
            image: '/assets/menu/pina-colada.jpg',
            tags: ['tropical', 'creamy']
          },
          {
            name: 'Matcha Honey Lemon Soda',
            price: 180,
            description:
              'Earthy matcha paired with honey and a tangy lemon fizz.',
            image: '/assets/menu/matcha-honey-lemon-soda.jpg',
            tags: ['earthy', 'tangy']
          },
          {
            name: 'Blue Redry Soda',
            price: 200,
            description: 'Vibrant blue soda with a hint of citrus.',
            image: '/assets/menu/blue-redry-soda.jpg',
            tags: ['colorful', 'citrusy']
          },
          {
            name: 'Lychee Sky Soda',
            price: 200,
            description: 'Sweet and fragrant lychee soda with a fizzy twist.',
            image: '/assets/menu/lychee-sky-soda.jpg',
            tags: ['fragrant', 'sweet']
          },
          {
            name: 'Peach Coffee Tonic',
            price: 220,
            description:
              'A refreshing mix of peach essence and cold brew coffee topped with tonic water.',
            image: '/assets/menu/peach-coffee-tonic.jpg',
            tags: ['refreshing', 'fruity']
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
            image: '/assets/menu/lemon-iced-tea.jpg',
            tags: ['refreshing', 'citrusy']
          },
          {
            name: 'Peach Iced Tea',
            price: 130,
            description: 'Sweet and fruity iced tea infused with peach flavor.',
            image: '/assets/menu/peach-iced-tea.jpg',
            tags: ['sweet', 'fruity']
          },
          {
            name: 'Classic Cold Coffee',
            price: 150,
            description: 'A smooth and bold chilled coffee blend.',
            image: '/assets/menu/classic-cold-coffee.jpg',
            tags: ['creamy', 'bold']
          },
          {
            name: 'Dalgona Coffee',
            price: 150,
            description: 'Creamy whipped coffee served over iced milk.',
            image: '/assets/menu/dalgona-coffee.jpg',
            tags: ['creamy', 'whipped']
          },
          {
            name: 'Black Orange Coffee',
            price: 160,
            description: 'Bold black coffee with a citrusy orange twist.',
            image: '/assets/menu/black-orange-coffee.jpg',
            tags: ['bold', 'citrusy']
          },
          {
            name: 'Iced Caramel Macchiato',
            price: 160,
            description:
              'Chilled coffee with caramel drizzle and velvety milk layers.',
            image: '/assets/menu/iced-caramel-macchiato.jpg',
            tags: ['creamy', 'caramel']
          },
          {
            name: 'Thai Tea Mocha',
            price: 180,
            description: 'A fusion of Thai iced tea and creamy mocha.',
            image: '/assets/menu/thai-tea-mocha.webp',
            tags: ['creamy', 'bold']
          },
          {
            name: 'Iced Nutella Coffee',
            price: 220,
            description:
              'Rich cold coffee infused with Nutella and topped with whipped cream.',
            image: '/assets/menu/iced-nutella-coffee.jpg',
            tags: ['rich', 'creamy']
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
            image: '/assets/menu/manchow-soup.jpg',
            tags: ['spicy', 'tangy']
          },
          {
            name: 'Tomato Basil Soup',
            price: 130,
            description:
              'A classic blend of ripe tomatoes and fresh basil, finished with a touch of cream.',
            image: '/assets/menu/tomato-basil-soup.jpg',
            tags: ['classic', 'creamy']
          },
          {
            name: 'Sweet Corn Soup',
            price: 130,
            description:
              'A comforting mix of sweet corn and vegetables in a creamy broth.',
            image: '/assets/menu/sweet-corn-soup.jpg',
            tags: ['comforting', 'creamy']
          },
          {
            name: 'Creamy Broccoli Soup',
            price: 200,
            description:
              'A rich and velvety soup made with fresh broccoli and subtle spices.',
            image: '/assets/menu/creamy-broccoli-soup.jpg',
            tags: ['rich', 'velvety']
          },
          {
            name: 'Mushroom Cappuccino',
            price: 200,
            description:
              'A sophisticated mushroom soup with a frothy top, served cappuccino-style.',
            image: '/assets/menu/mushroom-cappuccino.jpg',
            tags: ['sophisticated', 'frothy']
          },
          {
            name: 'Tom Yum Soup',
            price: 200,
            description:
              'Thai-inspired hot and sour soup with vibrant flavors of lemongrass and lime.',
            image: '/assets/menu/tom-yum-soup.jpg',
            tags: ['hot', 'sour']
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
            image: '/assets/menu/indian-masala-tea.jpg',
            tags: ['spiced', 'aromatic']
          },
          {
            name: 'Honey Lemon Ginger Tea',
            price: 80,
            description: 'A soothing blend of ginger, honey, and fresh lemon.',
            image: '/assets/menu/honey-lemon-ginger-tea.jpg',
            tags: ['soothing', 'citrusy']
          },
          {
            name: 'Yogic Tea',
            price: 100,
            description:
              'A unique blend of warming spices and herbs for balance and rejuvenation.',
            image: '/assets/menu/yogic-tea.jpg',
            tags: ['unique', 'warming']
          },
          {
            name: 'Blue Butterfly Pea Tea',
            price: 120,
            description:
              'Vibrant blue tea with earthy tones and a hint of citrus.',
            image: '/assets/menu/blue-butterfly-pea-tea.png',
            tags: ['vibrant', 'earthy']
          },
          {
            name: 'Kambucha Tea',
            price: 150,
            description:
              'A refreshing, fermented tea with a tangy and slightly fizzy twist, packed with probiotics.',
            image: '/assets/menu/kambucha-tea.jpg',
            tags: ['refreshing', 'fermented']
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
            image: '/assets/menu/espresso-single-shot.jpg',
            tags: ['bold', 'intense', 'coffee']
          },
          {
            name: 'Espresso (Double Shot)',
            price: 110,
            description: 'A double dose of strong and aromatic espresso.',
            image: '/assets/menu/espresso-double-shot.jpg',
            tags: ['strong', 'aromatic', 'coffee']
          },
          {
            name: 'Americano',
            price: 110,
            description:
              'Espresso diluted with hot water for a smooth, robust flavor.',
            image: '/assets/menu/americano.jpg',
            tags: ['smooth', 'robust', 'coffee']
          },
          {
            name: 'Cortado',
            price: 120,
            description:
              'A balanced blend of espresso and steamed milk for a smooth finish.',
            image: '/assets/menu/cortado.jpg',
            tags: ['balanced', 'smooth', 'coffee']
          },
          {
            name: 'Cappuccino',
            price: 130,
            description:
              'A classic mix of espresso, steamed milk, and velvety foam.',
            image: '/assets/menu/cappuccino.jpg',
            tags: ['classic', 'velvety', 'coffee']
          },
          {
            name: 'Latte',
            price: 150,
            description:
              'Creamy espresso topped with a generous layer of steamed milk.',
            image: '/assets/menu/latte.jpg',
            tags: ['creamy', 'generous', 'coffee']
          },
          {
            name: 'Caramel Macchiato',
            price: 160,
            description: 'Layers of espresso, caramel, and frothy milk.',
            image: '/assets/menu/caramel-macchiato.jpg',
            tags: ['layered', 'frothy', 'coffee']
          },
          {
            name: 'Cafe Mocha',
            price: 160,
            description:
              'Chocolatey espresso with steamed milk and whipped cream.',
            image: '/assets/menu/cafe-mocha.jpg',
            tags: ['chocolatey', 'whipped', 'coffee']
          },
          {
            name: 'Matcha Latte',
            price: 180,
            description: 'A silky mix of premium matcha and steamed milk.',
            image: '/assets/menu/matcha-latte.jpg',
            tags: ['silky', 'premium', 'tea']
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
            image: '/assets/menu/boiled-eggs.jpg',
            tags: ['protein-rich']
          },
          {
            name: 'Plain Omelette',
            price: 100,
            image: '/assets/menu/plain-omelette.jpg',
            tags: ['classic']
          },
          {
            name: 'Vegetable Omelette',
            price: 120,
            image: '/assets/menu/vegetable-omelette.jpg',
            tags: ['nutritious']
          },
          {
            name: 'Scrambled Eggs',
            price: 130,
            image: '/assets/menu/scrambled-eggs.jpg',
            tags: ['creamy']
          },
          {
            name: 'Souffle Omelette',
            price: 150,
            image: '/assets/menu/souffle-omelette.jpg',
            tags: ['fluffy']
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
            image: '/assets/menu/shakshuka.jpg',
            tags: ['spicy', 'flavorful']
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
            image: '/assets/menu/cheese-chilli-toast.jpg',
            tags: ['crispy', 'spicy']
          },
          {
            name: 'Toast with Peanut Butter/Fruit Jam',
            price: 120,
            description:
              'Classic toast with your choice of creamy peanut butter or sweet fruit jam.',
            image: '/assets/menu/toast-with-peanut-butter-fruit-jam.jpg',
            tags: ['classic', 'creamy']
          },
          {
            name: 'Toast with Nutella and Banana',
            price: 150,
            description:
              'A delightful combination of Nutella spread and fresh banana slices on toast.',
            image: '/assets/menu/toast-with-nutella-and-banana.jpg',
            tags: ['delightful', 'sweet']
          },
          {
            name: 'Avocado Toast with Veggies',
            price: 180,
            description:
              'Creamy avocado topped with a medley of fresh, crisp veggies on toasted bread.',
            image: '/assets/menu/avocado-toast-with-veggies.jpg',
            tags: ['creamy', 'fresh']
          },
          {
            name: 'Avocado Toast with Eggs',
            price: 200,
            description:
              'Hearty avocado toast topped with perfectly cooked eggs.',
            image: '/assets/menu/avocado-toast-with-eggs.jpg',
            tags: ['hearty', 'nutritious']
          },
          {
            name: 'Granola Bowl with Fruits and Nuts',
            price: 200,
            description:
              'Crunchy granola served with seasonal fruits and a sprinkle of nuts.',
            image: '/assets/menu/granola-bowl-with-fruits-and-nuts.jpg',
            tags: ['crunchy', 'nutritious']
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
            image: '/assets/menu/nutella-banana-pancakes.jpg',
            tags: ['creamy', 'sweet']
          },
          {
            name: 'Blueberry Pancakes',
            price: 200,
            description:
              'Classic pancakes infused with blueberries, served with a side of maple syrup.',
            image: '/assets/menu/blueberry-pancakes.jpg',
            tags: ['classic', 'fruity']
          },
          {
            name: 'Oats Pancakes with Nuts and Peanut Butter',
            price: 250,
            description:
              'A nutritious option with oats, topped with crunchy nuts and your choice of peanut butter or Nutella.',
            image: '/assets/menu/oats-pancakes-with-nuts-and-peanut-butter.jpg',
            tags: ['nutritious', 'crunchy']
          }
        ]
      },
      {
        subheading: 'Sandwiches',
        items: [
          {
            name: 'Coleslaw Sandwich',
            price: 150,
            description: 'Creamy coleslaw sandwiched in whole-grain bread.',
            image: '/assets/menu/coleslaw-sandwich.jpg',
            tags: ['creamy', 'crunchy']
          },
          {
            name: 'Bombay Special Sandwich',
            price: 150,
            description:
              'A Mumbai street-style sandwich with layers of chutney, vegetables, and cheese.',
            image: '/assets/menu/bombay-special-sandwich.jpg',
            tags: ['spicy', 'cheesy']
          },
          {
            name: 'Tandoori Paneer Sandwich',
            price: 200,
            description:
              'Spiced tandoori paneer with onions and bell peppers in a toasted sandwich.',
            image: '/assets/menu/tandoori-paneer-sandwich.jpg',
            tags: ['spiced', 'toasted']
          },
          {
            name: 'Club Sandwich',
            price: 200,
            description:
              'A classic triple-layer sandwich with fresh vegetables and flavorful spreads.',
            image: '/assets/menu/club-sandwich.jpg',
            tags: ['classic', 'flavorful']
          },
          {
            name: 'Corn And Cheese Sandwich',
            price: 220,
            description:
              'A gooey mix of sweet corn and cheese in crispy grilled bread.',
            image: '/assets/menu/corn-and-cheese-sandwich.jpg',
            tags: ['gooey', 'crispy']
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
              'Light and flavorful flattened rice with sautéed onions and spices.',
            image: '/assets/menu/kanda-poha.jpg',
            tags: ['light', 'flavorful']
          },
          {
            name: 'Indori Poha',
            price: 100,
            description:
              'A classic Indore-style sweet and sour poha topped with sev, peanuts, and a dash of lemon.',
            image: '/assets/menu/indori-poha.jpg',
            tags: ['sweet', 'sour']
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
              'A crispy rice crepe cooked with pure ghee, served with chutney and sambhar.',
            image: '/assets/menu/plain-ghee-dosa.jpg',
            tags: ['crispy', 'buttery']
          },
          {
            name: 'Podi Dosa',
            price: 100,
            description:
              'A unique dosa infused with spicy podi powder and clarified butter.',
            image: '/assets/menu/podi-dosa.jpg',
            tags: ['unique', 'spicy']
          },
          {
            name: 'Masala Dosa',
            price: 120,
            description: 'Traditional dosa stuffed with spiced potato filling.',
            image: '/assets/menu/masala-dosa.jpg',
            tags: ['traditional', 'spiced']
          },
          {
            name: 'Paneer/Tofu Dosa',
            price: 180,
            description:
              'Protein-rich dosa filled with a flavorful paneer or tofu masala mix.',
            image: '/assets/menu/paneer-tofu-dosa.jpg',
            tags: ['protein-rich', 'flavorful']
          },
          {
            name: 'Mysore Special Dosa',
            price: 200,
            description:
              'A spicy dosa layered with tangy Mysore chutney and served with coconut chutney.',
            image: '/assets/menu/mysore-special-dosa.jpg',
            tags: ['spicy', 'tangy']
          }
        ]
      },
      {
        subheading: 'Paratha',
        items: [
          {
            name: 'Masala Paratha',
            price: 60,
            description: 'Flavored paratha with a blend of spices and herbs.',
            image: '/assets/menu/masala-paratha.jpg',
            tags: ['flavored', 'spicy']
          },
          {
            name: 'Aloo-Pyaaz Stuffed Paratha',
            price: 80,
            description:
              'Classic paratha with a spiced potato and onion filling.',
            image: '/assets/menu/aloo-pyaaz-stuffed-paratha.jpg',
            tags: ['classic', 'spiced']
          },
          {
            name: 'Paneer Paratha',
            price: 100,
            description:
              'Stuffed with soft, seasoned cottage cheese and served with pickle and onion rings.',
            image: '/assets/menu/paneer-paratha.jpg',
            tags: ['soft', 'seasoned']
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
              'Crunchy sprouts tossed with roasted garlic, herbs, and a light vinaigrette.',
            image: '/assets/menu/sprouts-and-garlic-salad.jpg',
            tags: ['crunchy', 'herby']
          },
          {
            name: 'Greek Vegan Chickpea Millet Salad',
            price: 200,
            description:
              'A Mediterranean-inspired salad with chickpeas, millet, fresh vegetables, and tangy lemon dressing.',
            image: '/assets/menu/greek-vegan-chickpea-millet-salad.jpg',
            tags: ['Mediterranean', 'tangy']
          },
          {
            name: 'Mexican Bean Pepper Salad',
            price: 220,
            description:
              'A zesty mix of kidney beans, bell peppers, corn, and a lime-cilantro dressing.',
            image: '/assets/menu/mexican-bean-pepper-salad.jpg',
            tags: ['zesty', 'colorful']
          },
          {
            name: 'Waldorf Pasta Salad',
            price: 250,
            description:
              'A classic twist with fresh apples, walnuts, pasta, and creamy dressing.',
            image: '/assets/menu/waldorf-pasta-salad.jpg',
            tags: ['classic', 'creamy']
          },
          {
            name: 'Spring Pesto Pasta Salad',
            price: 250,
            description:
              'A vibrant combination of pasta, seasonal vegetables, and basil pesto.',
            image: '/assets/menu/spring-pesto-pasta-salad.jpg',
            tags: ['vibrant', 'herby']
          },
          {
            name: 'Crunchy Broccoli Millet Salad',
            price: 260,
            description:
              'Protein-rich salad with the crunch of broccoli, almonds, carrots tossed with herby lemon dressing.',
            image: '/assets/menu/crunchy-broccoli-millet-salad.jpg',
            tags: ['protein-rich', 'crunchy']
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
              'Smooth blend of strawberries, yogurt, maple syrup, and vanilla topped with the cornflakes, blueberries, almonds, pumpkin seeds, chia seeds.',
            image: '/assets/menu/strawberries-n-cream-smoothie-bowl.jpg',
            tags: ['smooth', 'creamy']
          },
          {
            name: 'Tropical Smoothie Bowl',
            price: 250,
            description:
              'A tropical delight with mango, pineapple, kiwi, and shredded coconut.',
            image: '/assets/menu/tropical-smoothie-bowl.jpg',
            tags: ['tropical', 'fruity']
          },
          {
            name: 'Chocolate Peanut Butter and Banana Smoothie Bowl',
            price: 250,
            description:
              'A decadent mix of cocoa, peanut butter, and bananas topped with granola and dark chocolate shavings.',
            image:
              '/assets/menu/chocolate-peanut-butter-and-banana-smoothie-bowl.jpg',
            tags: ['decadent', 'chocolaty']
          },
          {
            name: 'Pineapple Banana Peach Smoothie Bowl',
            price: 270,
            description:
              'Sweet blend of pineapple, banana, and peach topped with almonds and flaxseeds.',
            image: '/assets/menu/pineapple-banana-peach-smoothie-bowl.jpg',
            tags: ['sweet', 'nutty']
          },
          {
            name: 'Avocado and Kale Smoothie Bowl',
            price: 280,
            description:
              'Blend of kale, avocado, banana and almond milk topped with raspberries, chia seeds and granola.',
            image: '/assets/menu/avocado-and-kale-smoothie-bowl.jpg',
            tags: ['nutritious', 'green']
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
              'Steamed Himalayan millet, crispy tofu, and vegetables in a sesame-ginger dressing.',
            image: '/assets/menu/vegan-tofu-himalayan-millet-bowl.jpg',
            tags: ['nutritious', 'flavorful']
          },
          {
            name: 'Pad Thai Noodles Bowl',
            price: 280,
            description:
              'A classic Thai bowl with rice noodles, tofu tossed in orange peanut sauce topped with crunchy peanuts.',
            image: '/assets/menu/pad-thai-noodles-bowl.jpg',
            tags: ['classic', 'crunchy']
          },
          {
            name: 'Middle Eastern Falafel Bowl',
            price: 260,
            description:
              'Crispy falafels served with hummus, pita, and a fresh cucumber-tomato salad.',
            image: '/assets/menu/middle-eastern-falafel-bowl.jpg',
            tags: ['crispy', 'fresh']
          },
          {
            name: 'Mediterranean Bowl',
            price: 300,
            description:
              'Tofu, spinach and veggies are cooked slowly in light tomato herby stew served with gluten-free Himalayan millet rice and a side green salad.',
            image: '/assets/menu/mediterranean-bowl.jpg',
            tags: ['herby', 'gluten-free']
          },
          {
            name: 'Red Thai Bowl',
            price: 300,
            description:
              'Red Thai curry with Indian Jasmine rice served with Kimchi Salad.',
            image: '/assets/menu/red-thai-bowl.jpg',
            tags: ['spicy', 'flavorful']
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
              'A street-style favorite with crunchy vegetables and a savory sauce.',
            image: '/assets/menu/vegetable-chowmein.jpg'
          },
          {
            name: 'Chilli Garlic Noodles',
            price: 120,
            description:
              'Spicy noodles tossed with garlic, chili, and vegetables for a bold flavor.',
            image: '/assets/menu/chilli-garlic-noodles.jpg'
          },
          {
            name: 'Thukpa',
            price: 150,
            description:
              'A Himalayan noodle soup packed with fresh vegetables and flavorful broth.',
            image: '/assets/menu/thukpa.jpg'
          },
          {
            name: 'Hakka Noodles',
            price: 180,
            description:
              'Classic stir-fried noodles with vegetables and a hint of soy sauce.',
            image: '/assets/menu/hakka-noodles.jpg'
          },
          {
            name: 'Thai Tofu Peanut Noodles',
            price: 200,
            description:
              'Creamy and nutty noodles with Thai tofu and a peanut sauce.',
            image: '/assets/menu/thai-tofu-peanut-noodles.jpg'
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
              'A vibrant dish with garlic, olives and a hint of chili.',
            image: '/assets/menu/sicilian-spaghetti.jpg'
          },
          {
            name: 'Penne Arrabiata',
            price: 200,
            description:
              'Penne pasta in a spicy tomato sauce with chili flakes and garlic.',
            image: '/assets/menu/penne-arrabiata.jpg'
          },
          {
            name: 'Fusilli In Marinara Sauce',
            price: 220,
            description:
              'Twirled fusilli pasta in a tangy tomato marinara sauce with fresh basil.',
            image: '/assets/menu/fusilli-in-marinara-sauce.jpg'
          },
          {
            name: 'Creamy Mushroom Pasta',
            price: 250,
            description: 'Pasta tossed in a creamy mushroom sauce with herbs.',
            image: '/assets/menu/creamy-mushroom-pasta.jpg'
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
              'Classic Italian pizza topped with tangy tomato sauce, fresh mozzarella, and basil.',
            image: '/assets/menu/pizza-margherita.jpg'
          },
          {
            name: 'Corn and Cheese Pizza',
            price: 160,
            description:
              'A cheesy delight loaded with sweet corn and a blend of gooey cheeses.',
            image: '/assets/menu/corn-and-cheese-pizza.jpg'
          },
          {
            name: 'Tandoori Paneer Pizza',
            price: 220,
            description:
              'A fusion treat with marinated tandoori paneer chunks, onions, and bell peppers.',
            image: '/assets/menu/tandoori-paneer-pizza.jpg'
          },
          {
            name: 'Vegetable Pizza',
            price: 220,
            description:
              'A colorful medley of fresh vegetables, cheese, and savory tomato sauce.',
            image: '/assets/menu/vegetable-pizza.jpg'
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
              'An Indian favorite with spiced vegetables wrapped in soft flatbread.',
            image: '/assets/menu/kathi-roll.jpg'
          },
          {
            name: 'Egg Kathi Roll',
            price: 180,
            description:
              'A protein-rich roll with spiced egg filling and vegetables.',
            image: '/assets/menu/egg-kathi-roll.jpg'
          },
          {
            name: 'Pesto Wrap',
            price: 250,
            description:
              'A wrap filled with fresh vegetables, greens, and a zesty pesto sauce.',
            image: '/assets/menu/pesto-wrap.jpg'
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
              'Soft and warm crepes filled with creamy Nutella and fresh banana slices, topped with a drizzle of chocolate sauce.',
            image: '/assets/menu/nutella-banana-crepe.jpg'
          },
          {
            name: 'Brunch Crepe',
            price: 250,
            description:
              'A savory crepe packed with scrambled eggs, sautéed vegetables, and melted cheese, perfect for a hearty meal.',
            image: '/assets/menu/brunch-crepe.jpg'
          },
          {
            name: 'Hawaii Sunset Crepe',
            price: 300,
            description:
              'A sweet and tangy combination of pineapple, caramel sauce, and toasted coconut, reminiscent of an island sunset.',
            image: '/assets/menu/hawaii-sunset-crepe.jpg'
          },
          {
            name: 'Fruit Island Crepe',
            price: 350,
            description:
              'A tropical treat filled with mixed fruits like strawberries, kiwi and banana, custard cream, and nutella.',
            image: '/assets/menu/fruit-island-crepe.jpg'
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
              'A nutritious blend of green lentils, rice, and mild spices, perfect for a wholesome and comforting meal.',
            image: '/assets/menu/dal-khichdi.jpg'
          },
          {
            name: 'Curd Rice',
            price: 160,
            description:
              'A combination of cooked rice and yogurt, delicately seasoned with mustard seeds and curry leaves.',
            image: '/assets/menu/curd-rice.jpg'
          },
          {
            name: 'Indian Yogic Bowl',
            price: 200,
            description:
              'A balanced and wholesome bowl of steamed rice with mixed lentil curry, and seasonal vegetables inspired by yogic dietary principles.',
            image: '/assets/menu/indian-yogic-bowl.jpg'
          },
          {
            name: 'Saucy Masala Corn And Herb Rice Bowl',
            price: 250,
            description:
              'Spicy and tangy saucy corn served alongside fragrant herb-infused rice for a delightful combination.',
            image: '/assets/menu/saucy-masala-corn-and-herb-rice-bowl.jpg'
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
              'A crunchy and tangy snack made with roasted peanuts, fresh vegetables, and zesty spices, perfect for a light and flavorful bite.',
            image: '/assets/menu/peanut-chaat.jpg',
            tags: ['crunchy', 'tangy']
          },
          {
            name: 'Masala Papad',
            price: 100,
            description:
              'Crispy roasted papad topped with a mix of fresh onions, tomatoes, and spices for a crunchy and flavorful snack.',
            image: '/assets/menu/masala-papad.jpg',
            tags: ['crispy', 'flavorful']
          },
          {
            name: 'Gobhi Manchurian',
            price: 130,
            description:
              'Crispy cauliflower florets tossed in a tangy Indo-Chinese sauce, packed with flavor.',
            image: '/assets/menu/gobhi-manchurian.jpg',
            tags: ['crispy', 'tangy']
          },
          {
            name: 'Honey Chilli Potato',
            price: 150,
            description:
              'Crunchy potato fingers coated in a sweet and spicy sauce, a perfect blend of flavors.',
            image: '/assets/menu/honey-chilli-potato.jpg',
            tags: ['crunchy', 'sweet']
          },
          {
            name: 'Mix Veg Fritters',
            price: 150,
            description:
              'A delicious assortment of vegetables deep-fried in a gram flour batter for a crispy appetizer.',
            image: '/assets/menu/mix-veg-fritters.jpg',
            tags: ['crispy', 'delicious']
          },
          {
            name: 'Crispy Fried American Corn',
            price: 180,
            description:
              'Sweet corn kernels fried until golden and tossed with spices for a delightful snack.',
            image: '/assets/menu/crispy-fried-american-corn.jpg',
            tags: ['golden', 'delightful']
          },
          {
            name: 'Beetroot Kebab',
            price: 180,
            description:
              'Soft and flavorful beetroot patties, mildly spiced and grilled to perfection.',
            image: '/assets/menu/beetroot-kebab.jpg',
            tags: ['soft', 'flavorful']
          },
          {
            name: 'Chilli Mushroom',
            price: 200,
            description:
              'Juicy mushrooms stir-fried with bell peppers in a spicy and tangy sauce.',
            image: '/assets/menu/chilli-mushroom.jpg',
            tags: ['juicy', 'spicy']
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
              '2 Soft and simple whole wheat flatbread, perfect with any curry.',
            image: '/assets/menu/plain-tawa-chappati.jpg',
            tags: ['soft', 'simple']
          },
          {
            name: 'Butter Chappati',
            price: 40,
            description:
              '2 A soft whole wheat flatbread brushed with butter for added richness.',
            image: '/assets/menu/butter-chappati.jpg',
            tags: ['rich', 'soft']
          },
          {
            name: 'Single Millet Chappati/Mandua ki Roti',
            price: 70,
            description:
              '2 nutritious flatbread made from a single variety of millet i.e, finger millet.',
            image: '/assets/menu/single-millet-chappati.jpg',
            tags: ['nutritious', 'healthy']
          },
          {
            name: 'Mix Millet Chappati',
            price: 80,
            description:
              '2 flatbreads made with a blend of millets for a healthy twist.',
            image: '/assets/menu/mix-millet-chappati.jpg',
            tags: ['healthy', 'nutritious']
          },
          {
            name: 'Plain Paratha',
            price: 40,
            description:
              '1 pc. flaky, layered Indian flatbread, cooked on a griddle.',
            image: '/assets/menu/plain-paratha.jpg',
            tags: ['flaky', 'layered']
          },
          {
            name: 'Lachha Paratha',
            price: 50,
            description:
              '1 pc. A multi-layered, crispy flatbread, rich and indulgent.',
            image: '/assets/menu/lachha-paratha.jpg',
            tags: ['multi-layered', 'crispy']
          },
          {
            name: 'Masala Paratha',
            price: 60,
            description:
              '1 pc. spiced flatbread with a perfect balance of flavors.',
            image: '/assets/menu/masala-paratha.jpg',
            tags: ['spiced', 'flavorful']
          },
          {
            name: 'Malabar Paratha',
            price: 70,
            description:
              '1 pc. A soft, flaky, and slightly sweet flatbread from South India.',
            image: '/assets/menu/malabar-paratha.jpg',
            tags: ['soft', 'flaky']
          },
          {
            name: 'Aloo Stuffed Paratha',
            price: 80,
            description:
              '1 pc. hearty flatbread stuffed with spiced mashed potatoes and onion.',
            image: '/assets/menu/aloo-stuffed-paratha.jpg',
            tags: ['hearty', 'spiced']
          },
          {
            name: 'Paneer Paratha',
            price: 100,
            description:
              '1 pc. A stuffed bread filled with seasoned cottage cheese, delicious and filling.',
            image: '/assets/menu/paneer-paratha.jpg',
            tags: ['seasoned', 'filling']
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
              'Simple and fluffy white rice, a versatile accompaniment to any dish.',
            image: '/assets/menu/steamed-rice.jpg'
          },
          {
            name: 'Jeera Rice',
            price: 90,
            description:
              'Aromatic basmati rice flavored with cumin seeds, a light and fragrant choice.',
            image: '/assets/menu/jeera-rice.jpg',
            tags: ['aromatic', 'fragrant']
          },
          {
            name: 'Vegetable Fried Rice',
            price: 120,
            description:
              'Stir-fried rice with colorful vegetables and mild spices, perfect for all tastes.',
            image: '/assets/menu/vegetable-fried-rice.jpg',
            tags: ['colorful', 'mild']
          },
          {
            name: 'Egg Fried Rice',
            price: 150,
            description:
              'A protein-rich twist on fried rice with scrambled eggs and a hint of spice.',
            image: '/assets/menu/egg-fried-rice.jpg',
            tags: ['protein-rich', 'spicy']
          },
          {
            name: 'Veg Biryani',
            price: 200,
            description:
              'A flavorful rice dish layered with aromatic spices, vegetables, and herbs.',
            image: '/assets/menu/veg-biryani.jpg',
            tags: ['flavorful', 'aromatic']
          },
          {
            name: 'Paneer Tikka Pulao',
            price: 250,
            description: 'Aromatic rice cooked with marinated grilled paneer.',
            image: '/assets/menu/paneer-tikka-pulao.jpg',
            tags: ['aromatic', 'grilled']
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
              'Yellow lentils cooked with onions, tomatoes, and spices.',
            image: '/assets/menu/dal-fry.jpg'
          },
          {
            name: 'Tarkari Handi',
            price: 180,
            description:
              'Mixed vegetables cooked with Indian spices in a clay pot.',
            image: '/assets/menu/tarkari-handi.jpg'
          },
          {
            name: 'Aloo Gobhi Shimla Mirch',
            price: 180,
            description:
              'Stir-fried potatoes, cauliflower, and bell peppers cooked in Indian gravy.',
            image: '/assets/menu/aloo-gobhi-shimla-mirch.jpg'
          },
          {
            name: 'Anda Masala',
            price: 190,
            description:
              'Boiled eggs coated in a thick, spicy masala, cooked to perfection for a flavorful dry curry.',
            image: '/assets/menu/anda-masala.jpg'
          },
          {
            name: 'Egg Curry',
            price: 190,
            description:
              'A flavorful curry with boiled eggs and aromatic spices.',
            image: '/assets/menu/egg-curry.jpg'
          },
          {
            name: 'Mushroom Do Pyaza',
            price: 220,
            description: 'Mushrooms cooked with onions in a flavorful gravy.',
            image: '/assets/menu/mushroom-do-pyaza.jpg'
          },
          {
            name: 'Kadhai Paneer',
            price: 220,
            description:
              'Cottage cheese in a spicy tomato-based sauce with bell peppers.',
            image: '/assets/menu/kadhai-paneer.jpg'
          },
          {
            name: 'Paneer Butter Masala',
            price: 250,
            description: 'Creamy tomato gravy with soft cottage cheese cubes.',
            image: '/assets/menu/paneer-butter-masala.jpg'
          }
        ]
      },
      {
        subheading: 'Accompaniments',
        items: [
          {
            name: 'Plain Curd',
            price: 50,
            description: 'Simple, refreshing homemade yogurt.',
            image: '/assets/menu/plain-curd.jpg',
            tags: ['refreshing']
          },
          {
            name: 'Boondi Raita',
            price: 60,
            description: 'Yogurt with crispy fried gram flour balls.',
            image: '/assets/menu/boondi-raita.jpg',
            tags: ['crispy']
          },
          {
            name: 'Mix Veg Raita',
            price: 80,
            description: 'Yogurt mixed with finely chopped fresh vegetables.',
            image: '/assets/menu/mix-veg-raita.jpg',
            tags: ['fresh']
          },
          {
            name: 'Pineapple Raita',
            price: 90,
            description: 'Sweet and tangy yogurt with pineapple chunks.',
            image: '/assets/menu/pineapple-raita.jpg',
            tags: ['sweet', 'tangy']
          },
          {
            name: 'Sweet Lassi',
            price: 150,
            description: 'A chilled and creamy yogurt-based drink with sugar.',
            image: '/assets/menu/sweet-lassi.jpg',
            tags: ['creamy']
          },
          {
            name: 'Mango Lassi',
            price: 180,
            description: 'Sweet mango-flavored yogurt drink.',
            image: '/assets/menu/mango-lassi.jpg',
            tags: ['mango']
          },
          {
            name: 'Coconut Lassi',
            price: 200,
            description:
              'Yogurt-based drink prepared using yogurt and tender coconut pulp enhanced with spices.',
            image: '/assets/menu/coconut-lassi.jpg',
            tags: ['spiced']
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
              'Soft, golden dumplings made from milk solids, soaked in aromatic sugar syrup.',
            image: '/assets/menu/gulab-jamun.jpg',
            tags: ['soft', 'aromatic']
          },
          {
            name: 'Ice Creams',
            price: 100,
            description:
              'Creamy and refreshing frozen delights available in a variety of flavors.',
            image: '/assets/menu/ice-creams.jpg',
            tags: ['creamy', 'refreshing']
          },
          {
            name: 'Banana Split',
            price: 150,
            description:
              'A delightful treat featuring sliced bananas topped with scoops of ice cream, whipped cream, nuts, and chocolate syrup.',
            image: '/assets/menu/banana-split.jpg',
            tags: ['delightful']
          },
          {
            name: 'Affogato',
            price: 150,
            description:
              'An Italian dessert comprising a scoop of ice cream topped with hot espresso.',
            image: '/assets/menu/affogato.jpg',
            tags: ['Italian']
          },
          {
            name: 'Gajar Halwa',
            price: 150,
            description:
              'A classic Indian sweet made with grated carrots, milk, sugar, and a touch of ghee.',
            image: '/assets/menu/gajar-halwa.jpg',
            tags: ['classic']
          },
          {
            name: 'Moong Dal Halwa',
            price: 200,
            description:
              'A rich and decadent dessert made with split yellow lentils, ghee, and sugar.',
            image: '/assets/menu/moong-dal-halwa.jpg',
            tags: ['rich', 'decadent']
          }
        ]
      }
    ]
  }
];
