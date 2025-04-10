const herbGuides = {
  Culinary: [
      { name: 'Basil', guide: { planting: 'Plant in full sun, water regularly, harvest leaves as needed.', growing: 'Thrives in warm climates, requires regular watering.', care: 'Remove dead leaves and trim occasionally.', harvest: 'Pick leaves when they are young.', tips: 'Plant in pots to keep it contained.' } },
      { name: 'Thyme', guide: { planting: 'Prefers well-drained soil, drought-tolerant once established.', growing: 'Requires minimal water, grows best in full sun.', care: 'Cut back after flowering to encourage new growth.', harvest: 'Trim stems as needed.', tips: 'Perfect for dry, rocky soils.' } },
      { name: 'Oregano', guide: { planting: 'Full sun, well-drained soil, water occasionally.', growing: 'Thrives in warm climates, drought-resistant.', care: 'Trim stems to encourage new growth.', harvest: 'Harvest leaves as needed.', tips: 'Adds flavor to pizzas and pastas.' } },
      { name: 'Parsley', guide: { planting: 'Partial shade, fertile soil, regular watering.', growing: 'Requires consistent moisture, grows well in cooler temperatures.', care: 'Trim regularly to prevent flowering.', harvest: 'Pick leaves as needed.', tips: 'Great for garnishes and sauces.' } },
      { name: 'Chives', guide: { planting: 'Full sun, well-drained soil, sow seeds in spring.', growing: 'Water regularly, grows quickly.', care: 'Trim leaves regularly for fresh growth.', harvest: 'Cut leaves when they are 6 inches tall.', tips: 'Perfect for salads and soups.' } },
      { name: 'Cilantro', guide: { planting: 'Partial sun, fertile soil, sow seeds directly.', growing: 'Grows quickly, requires consistent moisture.', care: 'Pinch flowers to extend leaf production.', harvest: 'Pick leaves regularly.', tips: 'Used in salsas and curries.' } },
      { name: 'Tarragon', guide: { planting: 'Full sun, sandy soil, plant cuttings in spring.', growing: 'Needs minimal care, drought-tolerant.', care: 'Prune to maintain size and shape.', harvest: 'Pick leaves as needed.', tips: 'Great for seasoning meats and soups.' } }
  ],
  Medicinal: [
      { name: 'Echinacea', guide: { planting: 'Plant in full sun, tolerates poor soil, drought-resistant.', growing: 'Likes well-drained soil, minimal care.', care: 'Remove dead flowers to encourage growth.', harvest: 'Harvest the root after 2-3 years.', tips: 'Can be used for immune system support.' } },
      { name: 'Chamomile', guide: { planting: 'Prefers partial shade, well-drained soil, regular watering.', growing: 'Needs consistent moisture and moderate temperatures.', care: 'Trim spent flowers for continuous blooming.', harvest: 'Pick flowers early in the morning.', tips: 'Great for teas and relaxation.' } },
      { name: 'Aloe Vera', guide: { planting: 'Full sun, well-drained soil, minimal watering.', growing: 'Requires dry conditions, grows well indoors.', care: 'Trim damaged leaves occasionally.', harvest: 'Cut mature leaves near the base.', tips: 'Use gel for burns and skin care.' } },
      { name: 'Peppermint', guide: { planting: 'Partial shade, moist soil, can be invasive.', growing: 'Requires regular watering and trimming.', care: 'Prune to keep it contained.', harvest: 'Pick leaves as needed.', tips: 'Great for teas and digestion.' } },
      { name: 'Holy Basil', guide: { planting: 'Full sun, fertile soil, water consistently.', growing: 'Thrives in warm climates, requires regular care.', care: 'Pinch flowers to encourage leaf growth.', harvest: 'Pick leaves regularly.', tips: 'Used in Ayurvedic medicine.' } },
      { name: 'Fenugreek', guide: { planting: 'Full sun, fertile soil, sow seeds directly.', growing: 'Requires minimal care, grows quickly.', care: 'Remove weeds and ensure consistent watering.', harvest: 'Harvest leaves or seeds as needed.', tips: 'Great for managing blood sugar levels.' } },
      { name: 'Ginger', guide: { planting: 'Partial shade, rich, moist soil, plant rhizomes.', growing: 'Requires regular watering and humid conditions.', care: 'Remove weeds and ensure good drainage.', harvest: 'Dig up rhizomes when mature.', tips: 'Effective for nausea and colds.' } }
  ],
  'Insect Repellent': [
      { name: 'Citronella', guide: { planting: 'Plant in full sun, rich soil, protect from frost.', growing: 'Prefers moist conditions, needs regular watering.', care: 'Trim back regularly to keep it bushy.', harvest: 'Cut back stems when they get too long.', tips: 'Can be used for natural bug repellent.' } },
      { name: 'Lavender', guide: { planting: 'Needs full sun, well-drained soil, minimal watering.', growing: 'Drought-resistant once established, prefers sandy soil.', care: 'Avoid over-watering, trim stems after blooming.', harvest: 'Cut stems just before full bloom.', tips: 'Effective in repelling mosquitoes.' } },
      { name: 'Marigold', guide: { planting: 'Full sun, fertile soil, water moderately.', growing: 'Deters pests, blooms continuously.', care: 'Deadhead spent flowers.', harvest: 'Focus on visual appeal.', tips: 'Great for companion planting.' } },
      { name: 'Catnip', guide: { planting: 'Partial sun, rich soil, water consistently.', growing: 'Attracts beneficial insects, repels pests.', care: 'Trim to prevent spreading.', harvest: 'Cut leaves when mature.', tips: 'Also attracts cats!' } },
      { name: 'Lemon Balm', guide: { planting: 'Partial shade, moist soil, can spread rapidly.', growing: 'Spreads quickly, requires moderate watering.', care: 'Trim to prevent overgrowth.', harvest: 'Pick leaves as needed.', tips: 'Effective in repelling mosquitoes.' } },
      { name: 'Basil', guide: { planting: 'Full sun, well-drained soil, water regularly.', growing: 'Requires consistent moisture.', care: 'Remove dead leaves.', harvest: 'Pick leaves regularly.', tips: 'Repels flies and mosquitoes.' } },
      { name: 'Garlic', guide: { planting: 'Full sun, loose soil, plant cloves in fall.', growing: 'Requires regular watering, prefers cool weather.', care: 'Remove weeds and loosen soil.', harvest: 'Harvest bulbs in summer.', tips: 'Repels pests like aphids.' } }
  ],
  Aromatic: [
      { name: 'Rosemary', guide: { planting: 'Full sun, well-drained soil, drought-tolerant.', growing: 'Prefers dry conditions once established.', care: 'Trim occasionally to maintain shape.', harvest: 'Harvest in the spring before flowers bloom.', tips: 'Can grow well in pots.' } },
      { name: 'Mint', guide: { planting: 'Partial shade, moist soil, can be invasive, consider container planting.', growing: 'Spreads rapidly, requires regular watering.', care: 'Prune to prevent spreading, remove flower buds to promote leaf growth.', harvest: 'Cut leaves when needed.', tips: 'Great for teas and garnishes.' } },
      { name: 'Anise', guide: { planting: 'Full sun, well-drained soil, sow seeds directly.', growing: 'Requires regular watering, prefers warm climates.', care: 'Thin seedlings to maintain spacing.', harvest: 'Harvest seeds when they turn brown.', tips: 'Used in baking and teas.' } },
      { name: 'Lemongrass', guide: { planting: 'Full sun, fertile soil, plant stalks or seeds.', growing: 'Water regularly, prefers tropical climates.', care: 'Divide clumps every few years to encourage growth.', harvest: 'Cut stalks when they are 1 inch thick.', tips: 'Perfect for soups and teas.' } },
      { name: 'Patchouli', guide: { planting: 'Partial shade, moist soil, propagate from cuttings.', growing: 'Needs humid conditions and consistent watering.', care: 'Prune regularly to prevent legginess.', harvest: 'Trim leaves for oil extraction.', tips: 'Used in perfumes and aromatherapy.' } }
  ],
  Ornamental: [
      { name: 'Sage', guide: { planting: 'Full sun, well-drained soil, drought-tolerant once established.', growing: 'Requires minimal care and water.', care: 'Prune after flowering to maintain shape.', harvest: 'Cut leaves as needed.', tips: 'Can also be used in cooking.' } },
      { name: 'Lemon Balm', guide: { planting: 'Partial shade, moist soil, can spread rapidly.', growing: 'Likes moist, nutrient-rich soil and partial shade.', care: 'Trim to keep it contained, cut back in fall.', harvest: 'Harvest leaves when fresh.', tips: 'Great for teas and culinary uses.' } },
      { name: 'Marigold', guide: { planting: 'Full sun, fertile soil, sow seeds directly into the garden.', growing: 'Thrives in warm climates, water regularly.', care: 'Remove spent flowers to prolong blooming.', harvest: 'Focus on visual appeal.', tips: 'Deters pests naturally.' } },
      { name: 'Lavender', guide: { planting: 'Full sun, well-drained soil, minimal watering.', growing: 'Requires sandy soil and good airflow.', care: 'Prune after blooming, avoid overwatering.', harvest: 'Harvest flowers when they start to bloom.', tips: 'Adds a pleasant aroma to gardens.' } },
      { name: 'Bougainvillea', guide: { planting: 'Full sun, well-drained soil, minimal watering.', growing: 'Thrives in warm climates, drought-resistant.', care: 'Trim to shape and control size.', harvest: 'Not harvested, focus on appearance.', tips: 'Brightens gardens with colorful blooms.' } }
  ]
};

// Function to toggle category
function toggleCategory(category) {
  const categoriesContainer = document.getElementById('categories');
  categoriesContainer.innerHTML = ''; // Clear any previously displayed category

  // Create a new section for the selected category
  const categoryDiv = document.createElement('div');
  categoryDiv.classList.add('category');

  const categoryTitle = document.createElement('h3');
  categoryTitle.textContent = category;
  categoryDiv.appendChild(categoryTitle);

  const dropdown = document.createElement('select');
  dropdown.classList.add('dropdown');
  dropdown.innerHTML = `<option value="">Select a plant</option>`;

  // Add options for plants in the selected category
  herbGuides[category].forEach((herb, index) => {
    const option = document.createElement('option');
    option.value = index;
    option.textContent = herb.name;
    dropdown.appendChild(option);
  });

  // Add event listener to the dropdown
  dropdown.addEventListener('change', (e) => {
    const selectedIndex = e.target.value;
    if (selectedIndex !== '') {
      showGuide(category, selectedIndex);
    }
  });

  categoryDiv.appendChild(dropdown);
  categoriesContainer.appendChild(categoryDiv);
}

// Function to show the guide for a selected plant
function showGuide(category, index) {
const categoriesContainer = document.getElementById('categories');

// Clear any previously displayed guide
const existingGuide = categoriesContainer.querySelector('.growing-guide');
if (existingGuide) {
  categoriesContainer.removeChild(existingGuide);
}

const guide = herbGuides[category][index].guide;

const guideDiv = document.createElement('div');
guideDiv.classList.add('growing-guide');

// Create a card for each section of the guide
for (const section in guide) {
  const sectionDiv = document.createElement('div');
  sectionDiv.classList.add('card');
  
  const sectionTitle = document.createElement('h3');
  sectionTitle.textContent = section.charAt(0).toUpperCase() + section.slice(1);
  
  const sectionContent = document.createElement('p');
  sectionContent.textContent = guide[section];
  
  sectionDiv.appendChild(sectionTitle);
  sectionDiv.appendChild(sectionContent);
  guideDiv.appendChild(sectionDiv);
}

// Append the new guide to the container
categoriesContainer.appendChild(guideDiv);
}