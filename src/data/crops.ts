import { Crop } from "types/Crop"

export const crops: Crop[] = [
  {
    "name": "Blue Jazz",
    "seasons": ["spring"],
    "category": "flower",
    "image_key": "blue_jazz",
    "seed_price": 30,
    "growth": {
      "base_days": 7,
      "regrowth_days": null
    },
    "sell_prices": {
      "base": 50,
      "silver": 62,
      "gold": 75,
      "iridium": 100
    },
    "base_gold_per_day": 2.86,
    "artisan_products": ["honey"],
    "description": "A vibrant blue flower with a sweet aroma.",
    "notes": ""
  },
  {
    "name": "Carrot",
    "seasons": ["spring"],
    "category": "vegetable",
    "image_key": "carrot",
    "seed_price": null,
    "growth": {
      "base_days": 3,
      "regrowth_days": null
    },
    "sell_prices": {
      "base": 35,
      "silver": 43,
      "gold": 52,
      "iridium": 70
    },
    "base_gold_per_day": 11.67,
    "artisan_products": ["juice", "pickles"],
    "description": "A crisp, orange root vegetable perfect for snacks.",
    "notes": ""
  },
  {
    "name": "Cauliflower",
    "seasons": ["spring"],
    "category": "vegetable",
    "image_key": "cauliflower",
    "seed_price": 80,
    "growth": {
      "base_days": 12,
      "regrowth_days": null
    },
    "sell_prices": {
      "base": 175,
      "silver": 218,
      "gold": 262,
      "iridium": 350
    },
    "base_gold_per_day": 7.92,
    "artisan_products": ["juice", "pickles"],
    "description": "A large, flowering vegetable with a dense head.",
    "notes": ""
  },
  {
    "name": "Coffee Bean",
    "seasons": ["spring"],
    "category": "special",
    "image_key": "coffee_bean",
    "seed_price": null,
    "growth": {
      "base_days": 10,
      "regrowth_days": 2
    },
    "sell_prices": {
      "base": 60,
      "silver": 75,
      "gold": 90,
      "iridium": 120
    },
    "base_gold_per_day": 5,
    "artisan_products": ["coffee"],
    "description": "A bean that can be brewed into energizing coffee.",
    "notes": "Dust Sprites drop with 1% chance. Can also be found on Traveling Cart for 2500g"
  },
  {
    "name": "Garlic",
    "seasons": ["spring"],
    "category": "vegetable",
    "image_key": "garlic",
    "seed_price": 40,
    "growth": {
      "base_days": 4,
      "regrowth_days": null
    },
    "sell_prices": {
      "base": 60,
      "silver": 75,
      "gold": 90,
      "iridium": 120
    },
    "base_gold_per_day": 5,
    "artisan_products": ["juice", "pickles"],
    "description": "A pungent bulb used in cooking for its strong flavor.",
    "notes": "Availble on Year 2"
  },
  {
    "name": "Green Bean",
    "seasons": ["spring"],
    "category": "vegetable",
    "image_key": "green_bean",
    "seed_price": 60,
    "growth": {
      "base_days": 10,
      "regrowth_days": 3
    },
    "sell_prices": {
      "base": 40,
      "silver": 50,
      "gold": 60,
      "iridium": 80
    },
    "base_gold_per_day": 7.2,
    "artisan_products": ["juice", "pickles"],
    "description": "A crunchy green vegetable that grows on a trellis.",
    "notes": ""
  },
  {
    "name": "Kale",
    "seasons": ["spring"],
    "category": "vegetable",
    "image_key": "kale",
    "seed_price": 70,
    "growth": {
      "base_days": 6,
      "regrowth_days": null
    },
    "sell_prices": {
      "base": 110,
      "silver": 137,
      "gold": 165,
      "iridium": 220
    },
    "base_gold_per_day": 6.67,
    "artisan_products": ["juice", "pickles"],
    "description": "A hearty leafy green vegetable with many nutrients.",
    "notes": ""
  },
  {
    "name": "Parsnip",
    "seasons": ["spring"],
    "category": "vegetable",
    "image_key": "parsnip",
    "seed_price": 20,
    "growth": {
      "base_days": 4,
      "regrowth_days": null
    },
    "sell_prices": {
      "base": 35,
      "silver": 43,
      "gold": 52,
      "iridium": 70
    },
    "base_gold_per_day": 3.75,
    "artisan_products": ["juice", "pickles"],
    "description": "A root vegetable with a mild, earthy taste.",
    "notes": ""
  },
  {
    "name": "Potato",
    "seasons": ["spring"],
    "category": "vegetable",
    "image_key": "potato",
    "seed_price": 50,
    "growth": {
      "base_days": 6,
      "regrowth_days": null
    },
    "sell_prices": {
      "base": 80,
      "silver": 100,
      "gold": 120,
      "iridium": 160
    },
    "base_gold_per_day": 8.33,
    "artisan_products": ["juice", "pickles"],
    "description": "A starchy tuber that can produce bonus yields.",
    "notes": "Produces at least one potato per harvest, with a chance of yielding an additional 0.25 potatoes on average."
  },
  {
    "name": "Rhubarb",
    "seasons": ["spring"],
    "category": "fruit",
    "image_key": "rhubarb",
    "seed_price": 100,
    "growth": {
      "base_days": 4,
      "regrowth_days": null
    },
    "sell_prices": {
      "base": 220,
      "silver": 275,
      "gold": 330,
      "iridium": 440
    },
    "base_gold_per_day": 9.23,
    "artisan_products": ["wine", "jelly"],
    "description": "A tart fruit often used in pies and jams.",
    "notes": ""
  },
  {
    "name": "Strawberry",
    "seasons": ["spring"],
    "category": "fruit",
    "image_key": "strawberry",
    "seed_price": 100,
    "growth": {
      "base_days": 8,
      "regrowth_days": 4
    },
    "sell_prices": {
      "base": 120,
      "silver": 150,
      "gold": 180,
      "iridium": 240
    },
    "base_gold_per_day": 20.83,
    "artisan_products": ["wine", "jelly"],
    "description": "A sweet red berry that produces multiple harvests.",
    "notes": "Can only be purchased during the Egg Festival. 2% chance for additional yeild when picked. If planted on Spring 13 per day gold is 11.67g"
  },
  {
    "name": "Tulip",
    "seasons": ["spring"],
    "category": "flower",
    "image_key": "tulip",
    "seed_price": 20,
    "growth": {
      "base_days": 6,
      "regrowth_days": null
    },
    "sell_prices": {
      "base": 30,
      "silver": 37,
      "gold": 45,
      "iridium": 60
    },
    "base_gold_per_day": 1.67,
    "artisan_products": ["honey"],
    "description": "A colorful flower known for its simple beauty.",
    "notes": ""
  },
  {
    "name": "Unmilled Rice",
    "seasons": ["spring"],
    "category": "vegetable",
    "image_key": "unmilled_rice",
    "seed_price": 40,
    "growth": {
      "base_days": 8,
      "regrowth_days": null
    },
    "sell_prices": {
      "base": 30,
      "silver": 37,
      "gold": 45,
      "iridium": 60
    },
    "base_gold_per_day": 1.25,
    "artisan_products": ["juice", "pickles"],
    "description": "Grain that must be processed before eating.",
    "notes": "Irrigated Rice Shoots mature in 6 days for a per day value of 1.67g"
  }
]
