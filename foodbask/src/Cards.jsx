import React, { useState } from 'react';
import './App.css';
import img1 from './img/asun pasta.webp';
import img2 from './img/Egg Fried Rice.jpeg';
import img3 from './img/spicy chicken pasta.jpeg';
import img4 from './img/Native Jollof Rice.webp';
import img5 from './img/fried rice.jpeg';
import img6 from './img/jollof rice.jpeg';

const Cards = () => {

    const [flipped, setFlipped] =useState(Array(6).fill(false));

    const handleFlip = (index) =>{
        const newFlipped = [...flipped];
        newFlipped[index] = !newFlipped[index];
        setFlipped(newFlipped);
    };
  return (
    <div>
      <h4 className="font-bold mt-12 pb- border-b border-gray-200">
        Lastest Recipes
      </h4>
      <div className="mt-8 grid relative lg:grid-cols-3  gap-10">
        {/* cards for lastest recipes goes here */}
        {/* card 1 */}
        <div className={`card hover:shadow-lg ${flipped[0] ? 'flipped' : ''}`} onClick={()=> handleFlip(0)}>
            <div className='card-inner'>
                <div className='card-front'>
                        <img
                    src={img1}
                    alt="Asun"
                    className="w-full h-32 sm:h-48 object-cover"
                    />
                    <div className="m-4">
                        <span className="font-bold">Asun Afredo Pasta</span>
                        <span className="block text-gray-500 text-sm">
                        Recipe by BigGee
                        </span>
                        <div className="badge">
                        <svg
                            class="w-5 inline-block"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="size-6"
                        >
                            <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                            />
                        </svg>
                        <span>90 mins</span>
                        </div>
                    </div>
                </div>
                {/* back of card */}
                <div className='card-back overflow-auto'>
                    <div className='mt-4'>
                        <span className='font-bold'>Ingredients:</span>
                        <ul className='text-gray-500 text-sm mt-2'>
                            <li>Goat Meat</li>
                            <li>Pasta</li>
                            <li>1 Bell pepper to 2 Habanero (scotch bonnet)</li>
                            <li>1 ball of onions</li>
                            <li>Large garlic</li>
                            <li>Bullion cube and salt to taste</li>
                        </ul>
                        <span className='font-bold'>Preparation:</span>
                        <span className='text-gray-500 text-sm mt-2'>
                        Boil your meat. Using a food processor, roughly blend your peppers, onions and garlic.
                        Fry on medium heat and set aside. Drain your goat meat and place on a baking sheet/pan, you can pop this in your oven or air fryer.
                        Keep watching every 10mins and turn over until slightly roasted.
                        Sauté your goat meat in the pepper medly and add some bullion cube and salt to taste.
                        Boil your pasta for 10 mins, with a little salt.
                        Once al dente, drain and turn over in the asun mixture.
                        Allow to cook on very low heat for about 2 minutes, for the the goat meat to release its juice and allow for pasta to absorb.Serve and enjoy.Note: If you're not a fan of goat meat, any other protein can suffice (chicken, beef, even fish).
                        </span>
                    </div>
                </div>
            </div>
        </div>
        {/* card 2 */}
        <div className={`card hover:shadow-lg ${flipped[1] ? 'flipped' : ''}`} onClick={()=> handleFlip(1)}>
            <div className='card-inner'>
                <div className='card-front'>
                    <img
                        src={img2}
                        alt="Asun"
                        className="w-full h-32 sm:h-48 object-cover"
                    />
                    <div className="m-4">
                    <span className="font-bold">Egg fried Rice</span>
                    <span className="block text-gray-500 text-sm">
                    Recipe by Camson
                    </span>
                    <div className="badge">
                    <svg
                        class="w-5 inline-block"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="size-6"
                    >
                        <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                    </svg>
                    <span>45 mins</span>
                    </div>
                </div>
                </div>
                {/* back of card */}
                <div className='card-back overflow-auto'>
                    <div className='mt-4'>
                        <span className='font-bold'>Ingredients:</span>
                        <ul className='text-gray-500 text-sm mt-2'>
                            <li>Grain rice</li>
                            <li>3 tbsp vegetable oil</li>
                            <li>1 onion, finely chopped</li>
                            <li>4 eggs, beaten</li>
                            <li>2 spring onions, sliced, to serve</li>
                            <li>Bullion cube and salt to taste</li>
                        </ul>
                        <span className='font-bold'>Preparation:</span>
                        <span className='text-gray-500 text-sm mt-2'>
                        Cook the rice following pack instructions, then drain, spread it out to steam-dry and set aside.
                        Heat 2 tbsp of the oil in a large wok over a high heat, then add the onion and fry until lightly browned, around 5 mins. Add the rice, stir and toast for about 3 mins, then move to the side of the pan.
                        Add the remaining oil, then tip in the egg mixture. Leave to cook a little, then mix in with the rice – stir vigorously to coat the grains or, if you prefer the egg chunkier, allow to set for a little longer before breaking up and stirring through. Tip into a serving bowl and scatter over the spring onion to serve. You can also add sesame oil, ground white pepper and a splash of soy sauce to season.
                        </span>
                    </div>
                </div>
            </div>
        </div>
        {/* card 3 */}
        <div className={`card hover:shadow-lg ${flipped[2] ? 'flipped' : ''}`} onClick={()=> handleFlip(2)}>
            <div className='card-inner'>
                <div className='card-front'>
                    <img
                        src={img3}
                        alt="Asun"
                        className="w-full h-32 sm:h-48 object-cover"
                    />
                    <div className="m-4">
                        <span className="font-bold">Spicy Chicken Pasta</span>
                        <span className="block text-gray-500 text-sm">
                        Recipe by Magixs
                        </span>
                        <div className="badge">
                        <svg
                            class="w-5 inline-block"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="size-6"
                        >
                            <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                            />
                        </svg>
                        <span>40 mins</span>
                        </div>
                    </div>
                </div>
                {/* back of card */}
                <div className='card-back overflow-auto'>
                    <div className='mt-4'>
                        <span className='font-bold'>Ingredients:</span>
                        <ul className='text-gray-500 text-sm mt-2'>
                            <li>Pasta</li>
                            <li>Chicken</li>
                            <li>Garlic powder</li>
                            <li>onion powder</li>
                            <li>cayenne pepper</li>
                            <li>smoked paprika</li>
                            <li>Olive oil</li>
                            <li>Garlic</li>
                            <li>Tomatoes</li>
                            <li>Crushed red pepper flakes</li>
                            <li>Sugar</li>
                            <li>Coconut Milk</li>
                        </ul>
                        <span className='font-bold'>Preparation:</span>
                        <span className='text-gray-500 text-sm mt-2'>
                        Make the spicy chicken breast first! Begin with slicing the chicken breast in half lengthwise so the pieces are thinner. Then, add them to a bowl with olive oil, salt, pepper, paprika, chili powder, garlic chili sauce, garlic powder and onion powder. Mush everything together so the chicken is well coated.Place the seasoned raw chicken onto a baking sheet lined with foil. Bake in the oven at 400 degrees F until cooked through.Once chicken is cooked and somewhat cooled, slice into thin strips that will later be added to the pasta recipe.Cook the pasta according to package directions, stirring often to prevent the pasta pieces from sticking to each other. Be sure to reserve ½ cup pasta water for later. Strain the pasta once fully cooked, but no need to rinse. I like to cook the pasta almost all the way through, just past the al dente stage.In a large skillet with high sides, you'll saute the onions in oil and vegan butter. Once cooked through a bit, add the garlic and red pepper flakes cooking just until fragrant. Mix in all the spices and the tomato paste.Next, add the coconut milk and chicken or vegetable broth. Simmer over a medium heat.Simmer the sauce for 5 minutes until it's a bit thickened and looks creamy.Add everything to the pot, including the cooked pasta, sliced chicken, cilantro and parsley. And don't forget that ½ cup pasta water! Cook for just a few minutes until the sauce coats the pasta.
                        </span>
                    </div>
                </div>
            </div>
        </div>
      </div>
      {/* cards for lastest recipes goes here */}
      <h4 className="font-bold mt-12 pb- border-b border-gray-200">
          Most Popular Recipes
        </h4>
      <div className="mt-8 grid lg:grid-cols-3 gap-10">
          {/* card 4 */}
          <div className= {`card hover:shadow-lg ${flipped[3] ? 'flipped' : ''}`} onClick={()=> handleFlip(3)}>
            <div className='card-inner'>
              {/* front of card */}
              <div className='card-front'>
                    <img
                    src={img4}
                    alt="Asun"
                    className="w-full h-32 sm:h-48 object-cover"
                  />
                  <div className="m-4">
                    <span className="font-bold">Native Jollof Rice</span>
                    <span className="block text-gray-500 text-sm">
                      Recipe by Kcee
                    </span>
                    <div className="badge">
                      <svg
                        class="w-5 inline-block"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                      <span>65 mins</span>
                    </div>
                  </div>
              </div>
              {/* back of card */}
              <div className='card-back overflow-auto'>
                    <div className='mt-4'>
                        <span className='font-bold'>Ingredients:</span>
                        <ul className='text-gray-500 text-sm mt-2'>
                            <li>2 cups long grain rice</li>
                            <li>1 jar of  Ata Din Din Sauce, drained of oil</li>
                            <li>4 cups of chicken stock</li>
                            <li>¼ teaspoon of sea salt</li>
                            <li>1 tablespoon Iru woro (fermented locust beans)</li>
                            <li>1 teaspoon ground smoked prawns</li>
                            <li>1 tablespoon dried smoked crayfish</li>
                            <li>2 medium cuts of cow skin (ponmo)</li>
                            <li>2 medium dried smoked catfish</li>
                            <li>½ cup of smoked dry prawns</li>
                            <li>1 medium red habanero pepper, diced</li>
                            <li>1 medium onion, diced</li>
                            <li>¼ cup of palm oil</li>
                            <li>1 cup of fresh spinach, julienne cut</li>
                        </ul>
                        <span className='font-bold'>Preparation:</span>
                        <span className='text-gray-500 text-sm mt-2'>
                        Preheat the oven to 350 degrees. In a saucepan over medium heat, add the palm oil and let it heat up for 3 minutes. Then add the diced onion and the Iru (fermented locust beans). Saute until the onion is translucent and the ingredients start to become fragrant, about 3 minutes. Add the Ata Din Din sauce (without the oil), the ground smoked prawns, the dried smoked crayfish, the rehydrated smoked fish and smoked prawns, the habanero pepper, and the cow skin. Cook for another 5 minutes. Add the chicken stock, then cover the pot and let the mixture come to a roiling boil. Taste the stock for salt and adjust accordingly, then add the rinsed rice and cook for about 15 minutes, until it comes back to a rolling boil. Transfer the pot to the preheated oven and allow to cook for another 20 minutes. Take out the pot of rice, add the spinach, and stir it into the cooked rice, then return to the oven and cook for another 10 minutes, until all of the liquid has been absorbed.
                        </span>
                    </div>
                </div>
              </div>
            </div>
            
          {/* card 5 */}
          <div className={`card hover:shadow-lg ${flipped[4] ? 'flipped' : ''}`} onClick={()=> handleFlip(4)}>
            <div className='card-inner'>
              {/* front of card */}
              <div className='card-front'>
                  <img
                  src={img5}
                  alt="Asun"
                  className="w-full h-32 sm:h-48 object-cover"
                />
                <div className="m-4">
                  <span className="font-bold">Fried Rice</span>
                  <span className="block text-gray-500 text-sm">
                    Recipe by BigTits
                  </span>
                  <div className="badge">
                    <svg
                      class="w-5 inline-block"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                    <span>70 mins</span>
                  </div>
                </div>
              </div>
              {/* card-back */}
              <div className='card-back overflow-auto'>
                    <div className='mt-4'>
                        <span className='font-bold'>Ingredients:</span>
                        <ul className='text-gray-500 text-sm mt-2'>
                            <li>4 cups of rice.</li>
                            <li>5 cups of sliced Cabbage.</li>
                            <li>2 cups of sliced Carrot.</li>
                            <li>2 cups of sliced Green beans.</li>
                            <li>Half cup of peas.</li>
                            <li>Cow Liver 300g.</li>
                            <li>2kg of Chicken.</li>
                            <li>Vegetable oil.200ml</li>
                            <li>1 cup of sliced Onions.</li>
                            <li>Curry powder (coloring spice) 2 Tablespoons.</li>
                            <li>Salt and pepper to taste</li>
                        </ul>
                        <span className='font-bold'>Preparation:</span>
                        <span className='text-gray-500 text-sm mt-2'>
                        Parboil chicken and liver (both together) with all the spices (a teaspoon of salt, half cup of sliced onions, a teaspoon of thyme spice, a teaspoon of curry, two seasoning cubes teaspoon each of powdered ginger and garlic). Allow the meat to cook for ten to fifteen minutes, taste for salt, then pick out and deep-fry. Be sure to reserve the stock (meat water). Chop the cabbage, green beans, carrot, liver and set aside in a wide tray. Parboil the 4 cups of rice also and cook with half of the meat stock (water from the meat) and two cups of water, cook until it is about 70% done. Set your cooking pot on heat, allow drying, then pour in about 200ml of vegetable oil. Note: It is better to continue with the same oil you used while frying the meat (that is only if you fried the meats), you can reduce it to 200ml. Allow heating, then add the sliced onions, stir for 1-2 minutes. Then add the chopped carrot and green beans, any of these two can actually go first. Add the chopped liver and sweet corn, stir. Meat stock (water from the meat) should follow, add ground pepper (optional), add a teaspoon of salt and, add 1 seasoning cube then stir and taste, you may add more salt. Add the green peas. Stir for 1-2 minutes then add cabbage and the  curry powder (Curry is a yellowish spice that actually adds the yellowish color to fried rice, add and stir till you are satisfied with the color.) You would have a yellowish mixture that would often taste overly spiced, don't worry the rice would balance the taste. If you are satisfied with the taste, then add the green pepper, stir. Add the almost-done white rice and stir. Stir all together, cover your pot and allow to simmer for 5-7 minutes. That is how to make fried rice.
                        </span>
                    </div>
                </div>
            </div>
          </div>
          {/* card 6 */}
          <div className={`card hover:shadow-lg ${flipped[5] ? 'flipped' : ''}`} onClick={()=> handleFlip(5)}>
            <div className='card-inner'>
              {/* front of card */}
              <div className='card-front'>
                  <img
                  src={img6}
                  alt="Asun"
                  className="w-full h-32 sm:h-48 object-cover"
                />
                <div className="m-4">
                  <span className="font-bold">Jollof Rice</span>
                  <span className="block text-gray-500 text-sm">
                    Recipe by MamiDean
                  </span>
                  <div className="badge">
                    <svg
                      class="w-5 inline-block"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                    <span>65 mins</span>
                  </div>
                </div>
              </div>
              {/* back of card */}
              <div className='card-back overflow-auto'>
                    <div className='mt-4'>
                        <span className='font-bold'>Ingredients:</span>
                        <ul className='text-gray-500 text-sm mt-2'>
                            <li>Tomatoes</li>
                            <li>Red bell pepper</li>
                            <li>Red onion</li>
                            <li>Fresh ginger</li>
                            <li>Garlic</li>
                            <li>Scotch bonnet pepper</li>
                            <li>Sunflower oil</li>
                            <li>Rice</li>
                            <li>Paprika powder</li>
                            <li>Dried thyme</li>
                            <li>Nutmeg</li>
                            <li>Bay leaf</li>
                            <li>Salt</li>
                            <li>Vegetable stock</li>
                        </ul>
                        <span className='font-bold'>Preparation:</span>
                        <span className='text-gray-500 text-sm mt-2'>
                        Chop tomatoes, onions, bell pepper, ginger, garlic, scotch bonnet pepper and puree in a blender/food processor. Cook the pureed mixture in a pot with hot cooking oil over medium-high heat. Stir together and place a lid over it, reduce heat to low, and simmer for 20 minutes. Stir in the spices and seasonings (Paprika, thyme, nutmeg, bay leaf, and salt), then add the rice and vegetable or meat stock and stir together. Place a piece of aluminium foil into the pot, covering the entire surface of the rice, then place a lid over the pot. Cook for 20 minutes on low heat (stirring occasionally). Remove the lid, in the aluminium foil and give the rice a gentle stir, then return the lid and cook for another 5 minutes. 
                        </span>
                    </div>
                </div>
            </div>
          </div>
      </div>
      <div className='flex justify-center mt-4 '>
        <div className='btn bg-secondary-100 text-secondary-200 hover:shadow-inner transform hover:scale-125 hover:bg-opacity-50 transition ease-out duration-300'>
            More Recipes
        </div>
      </div>
    </div>
  );
};

export default Cards;
