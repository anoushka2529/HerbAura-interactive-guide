const herbs = [ 
    {
        id: "aloeVera",
        name: "Aloe Vera",
        localName: "Lolesara (ಲೋಳೆಸರ)",
        shortDescription: "Aloe Vera is a succulent plant species known for its medicinal and skincare properties.",
        longDescription: "Aloe Vera is a stemless or short-stemmed succulent plant that grows up to 60-100 cm tall. " +
          "Its leaves are thick and fleshy, green to grey-green, with serrated edges. " +
          "The plant is renowned for its medicinal properties, particularly for treating skin conditions and burns. " +
          "Aloe Vera gel, found inside the leaves, is widely used in cosmetics and alternative medicine. " +
          "It's rich in vitamins, minerals, amino acids, and antioxidants. " +
          "Aloe Vera is easy to grow indoors and outdoors in warm climates, requiring minimal care. " +
          "The plant has been used for thousands of years, with records of its use dating back to ancient Egypt. " +
          "Aloe Vera juice is consumed as a health drink, believed to aid digestion and boost immunity. " +
          "The plant can survive in areas of low natural rainfall, making it suitable for water-wise gardening. " +
          "Aloe Vera flowers are tubular and yellow or red, appearing on a spike up to 90 cm tall.",
        imagePath: "discover_images/AloeVera.jpg",
        categories: ["Medicinal", "Ornamental", "Culinary"]
      },
    {
        id: 'amaranthus',
        name: 'Amaranthus',
        localName: 'Chauli (ಚೌಲಿ)',
        shortDescription: 'Amaranthus is known for its nutritional value and is often used in salads. It is rich in proteins, vitamins, and minerals.',
        longDescription: `Amaranthus has various species, some of which are cultivated as leafy vegetables.
        The leaves can be cooked or eaten raw in salads.
        It also has medicinal properties, being used in traditional remedies.
        Amaranthus seeds are gluten-free and can be used in various recipes.
        The plant is drought-resistant, making it suitable for arid regions.
        It is also considered an ornamental plant due to its colorful leaves.
        Amaranthus can be grown easily in home gardens.
        It attracts beneficial insects, aiding in pest control.
        Some species of Amaranthus are used to produce grain-like seeds.
        Overall, it is a versatile plant with multiple uses in cuisine and agriculture.`,
        imagePath: "discover_images/Amaranthus.jpg",
        categories: ['Culinary', 'Medicinal', 'Ornamental']
    },
    {
        id: "barrel_cactus",
        name: "Barrel Cactus",
        localName: "Kagane Kalli (ಕಗನೆ ಕಳ್ಳಿ)",
        shortDescription: "Barrel cacti are iconic, round-shaped cacti known for their ribbed structure and vibrant flowers.",
        longDescription: "Barrel cacti are distinctive for their globe-like shape, often resembling a barrel, which gives them their name. " +
          "These cacti are typically found in deserts and arid regions where water is scarce. " +
          "Their thick, ribbed stems allow for water expansion and contraction, helping them store water during rare rainfalls. " +
          "Barrel cacti have sharp, prominent spines that protect them from herbivores. " +
          "They produce colorful flowers, usually in shades of yellow, red, or orange, which bloom at the top of the plant. " +
          "These flowers provide nectar for pollinators like bees and birds. " +
          "Some species of barrel cactus produce small, edible fruits, often used in traditional food preparations. " +
          "In survival situations, the water stored in barrel cacti has been used as an emergency water source, though it is often bitter. " +
          "These cacti are popular as ornamental plants in gardens and landscapes due to their unique appearance and minimal care needs. " +
          "Barrel cacti are slow-growing but can live for several decades, making them a long-term addition to desert gardens.",
        imagePath: "discover_images/BarrelCactus.jpg",
        categories: ["Ornamental", "Medicinal", "Culinary"]
      },
    
    {
        id: 'basil',
        name: 'Basil',
        localName: 'Tulsi (ತುಳಸಿ)',
        shortDescription: 'Basil is a fragrant herb commonly used in cooking and traditional medicine. It has a distinct aroma and flavor.',
        longDescription: `Basil is widely used in Italian and Southeast Asian cuisines.
        The herb has various medicinal properties, including anti-inflammatory and antibacterial effects.
        Basil is rich in antioxidants and may help reduce stress and improve mental health.
        It's easy to grow in home gardens and can be used fresh or dried.
        Different varieties of basil offer unique flavors, such as sweet basil, Thai basil, and holy basil.
        In some cultures, basil is considered a sacred plant.
        It can be used to make teas, oils, and other herbal preparations.
        Basil is also known to repel some insects, making it useful in organic gardening.
        The plant is often used in aromatherapy for its calming and uplifting scent.
        Basil leaves can be used to flavor vinegars and oils for culinary purposes.`,
        imagePath: "discover_images/Basil.jpg",
        categories: ['Culinary', 'Medicinal', 'Aromatic', 'Sacred', 'Insect-repellent']
    },
    {
        id: 'beans',
        name: 'Beans',
        localName: 'Avarekayi (ಅವರೆಕಾಯಿ)',
        shortDescription: 'Beans are nutritious legumes that come in various types. They are rich in protein, fiber, and essential nutrients.',
        longDescription: `Beans are a staple food in many cultures around the world.
        They are an excellent source of plant-based protein and complex carbohydrates.
        Beans are rich in vitamins and minerals, including iron, potassium, and folate.
        Regular consumption of beans may help lower cholesterol levels and reduce the risk of heart disease.
        They have a low glycemic index, making them suitable for managing blood sugar levels.
        Beans can be prepared in numerous ways, including boiling, baking, and frying.
        Some popular varieties include kidney beans, black beans, and chickpeas.
        They are often used in soups, stews, salads, and as a side dish.
        Beans are an environmentally friendly crop, as they can fix nitrogen in the soil.
        They are relatively easy to grow and store, making them a valuable food source.`,
        imagePath: "discover_images/Beans.jpg",
        categories: ['Culinary', 'Nutritional']
    },
    {
        id: 'beetroot',
        name: 'Beet Root',
        localName: 'Beetroot (ಬೀಟ್ರೂಟ್)',
        shortDescription: 'Beetroot is a vibrant root vegetable known for its deep red color and earthy flavor. It is packed with nutrients and antioxidants.',
        longDescription: `Beetroot is rich in vitamins, minerals, and powerful antioxidants.
        It contains high levels of nitrates, which may help lower blood pressure.
        The vegetable can be eaten raw, cooked, or juiced for various health benefits.
        Beetroot has been shown to improve athletic performance and endurance.
        It's a versatile ingredient used in salads, soups, and even desserts.
        The leaves of the beetroot plant are also edible and nutritious.
        Beetroot has natural detoxifying properties and supports liver function.
        It's a good source of fiber, which aids in digestion and gut health.
        The vegetable has been used traditionally to treat various ailments.
        Beetroot can be easily grown in home gardens and is relatively low-maintenance.`,
        imagePath: "discover_images/Beetroot.jpg",
        categories: ['Culinary', 'Medicinal', 'Nutritional']
    },
    {
        id: 'bellpepper',
        name: 'Bell Pepper',
        localName: 'Donnē Meṇasinakāyi (ದೊಣ್ಣೆ ಮೆಣಸಿನಕಾಯಿ)',
        shortDescription: 'Bell peppers are colorful, crunchy vegetables that are rich in vitamins and antioxidants. They come in various colors and are used in many cuisines.',
        longDescription: `Bell peppers are available in different colors, including green, red, yellow, and orange.
        They are an excellent source of vitamin C, with red peppers containing the highest amount.
        Bell peppers are low in calories and high in nutrients, making them ideal for weight management.
        They contain antioxidants that may help reduce the risk of chronic diseases.
        Bell peppers can be eaten raw, roasted, grilled, or used in various cooked dishes.
        They are a common ingredient in salads, stir-fries, and stuffed vegetable recipes.
        The different colors of bell peppers offer slightly different flavor profiles.
        They are rich in carotenoids, which are beneficial for eye health.
        Bell peppers are easy to grow in home gardens or even in containers.
        They are often used in Mediterranean and Mexican cuisines.`,
        imagePath: "discover_images/BellPepper.jpg",
        categories: ['Culinary', 'Nutritional']
    }
,
    {
        id: 'bhindi',
        name: 'Bhindi',
        localName: 'Bendakaya (ಬೆಂಡೆಕಾಯಿ)',
        shortDescription: 'Bhindi, also known as okra or ladies fingers, is a green vegetable known for its unique texture and nutritional benefits.',
        longDescription: `Bhindi is rich in fiber, vitamins, and minerals, including potassium and vitamin C.
        It has a distinctive mucilaginous texture when cooked, which can be used to thicken soups and stews.
        Bhindi is low in calories and can be beneficial for weight management.
        It contains antioxidants that may help reduce the risk of certain diseases.
        The vegetable is commonly used in Indian, Middle Eastern, and Southern U.S. cuisines.
        Bhindi can be prepared in various ways, including frying, roasting, and stewing.
        It's known to have potential benefits for managing blood sugar levels.
        The seeds of bhindi are edible and can be roasted as a snack.
        Bhindi plants are relatively easy to grow and are suitable for home gardens.
        It's often used in traditional medicine for its various health benefits.`,
        imagePath: "discover_images/Bhindi.jpg",
        categories: ['Culinary', 'Medicinal', 'Nutritional']
    },
    {
        id: "brinjal",
        name: "Brinjal",
        localName: "Badanekayi (ಬದನೆಕಾಯಿ)",
        shortDescription: "Brinjal, also known as eggplant, is a versatile vegetable used in many cuisines. It has a unique texture and absorbs flavors well.",
        longDescription: "Brinjal is a popular vegetable in many parts of the world, especially in Mediterranean and Asian cuisines. " +
            "It comes in various shapes, sizes, and colors, including purple, white, and green. " +
            "Brinjal is low in calories but high in fiber, making it good for digestive health. " +
            "It contains antioxidants like nasunin, which may help protect brain cell membranes. " +
            "Brinjal can be grilled, roasted, fried, or used in curries and stews. " +
            "It's a key ingredient in dishes like ratatouille, baba ganoush, and moussaka. " +
            "The vegetable is rich in vitamins and minerals, including potassium, vitamin C, and vitamin B6. " +
            "Some studies suggest that brinjal may help in managing blood sugar levels. " +
            "It's easy to grow in home gardens and can be quite productive. " +
            "Brinjal has been cultivated for thousands of years and has a rich cultural history in many countries.",
        imagePath: "discover_images/Brinjal.jpg",
        categories: ["Culinary", "Medicinal"]
    },
    {
        id: "broccoli",
        name: "Broccoli",
        localName: "Broccoli (ಬ್ರೊಕೊಲಿ)",
        shortDescription: "Broccoli is a nutrient-dense green vegetable known for its distinctive tree-like appearance and numerous health benefits.",
        longDescription: "Broccoli is a member of the cruciferous vegetable family, related to cabbage and kale. " +
            "It's extremely high in vitamin C and vitamin K, and a good source of folate. " +
            "Broccoli contains powerful antioxidants that may help prevent certain types of cancer. " +
            "It can be eaten raw, steamed, roasted, or stir-fried, and is versatile in many dishes. " +
            "The vegetable is rich in fiber, which aids in digestion and may help lower cholesterol. " +
            "Broccoli contains compounds that may help reduce inflammation in the body. " +
            "It's a good source of plant-based protein, making it valuable for vegetarian and vegan diets. " +
            "The vegetable may help in maintaining healthy bones due to its calcium and vitamin K content. " +
            "Broccoli can be grown in home gardens and is relatively easy to cultivate. " +
            "It's often used in Mediterranean and Asian cuisines and is popular in health-focused diets.",
        imagePath: "discover_images/Broccoli.jpg",
        categories: ["Culinary", "Medicinal"]
    },
    {
        id: "burrosTail",
        name: "Burro's Tail Plant",
        localName: "Gadhegala Bala (ಗಾಧೆಗಳ ಬಾಲ)",
        shortDescription: "Burro's Tail is a succulent plant known for its long, trailing stems covered in fleshy, overlapping leaves.",
        longDescription: "Burro's Tail (Sedum morganianum) is a popular succulent native to southern Mexico and Honduras. " +
          "It's characterized by its long, trailing stems that can grow up to 4 feet long, covered in plump, blue-green leaves. " +
          "The plant's leaves are easily dislodged, which is a survival mechanism that allows for propagation. " +
          "Burro's Tail rarely flowers, but when it does, it produces small pink or red blossoms at the end of the stems. " +
          "It's an excellent choice for hanging baskets due to its trailing nature. " +
          "The plant is drought-tolerant and requires minimal watering, making it ideal for forgetful gardeners. " +
          "Burro's Tail prefers bright, indirect light but can tolerate some direct sunlight. " +
          "It's non-toxic to pets, making it a safe choice for households with animals. " +
          "The plant can be propagated easily from fallen leaves or stem cuttings. " +
          "In its native habitat, Burro's Tail can be found growing on rocky outcroppings.",
        imagePath: "discover_images/BurrosTail.jpg",
        categories: ["Ornamental"]
      },
    {
        id: "cabbage",
        name: "Cabbage",
        localName: "Elekoppu (ಎಲೆಕೋಸು)",
        shortDescription: "Cabbage is a leafy vegetable that comes in various colors and forms. It's known for its versatility in cooking and nutritional benefits.",
        longDescription: "Cabbage is a cruciferous vegetable that comes in green, red, and white varieties. " +
            "It's low in calories but high in vitamins C and K, and a good source of dietary fiber. " +
            "Cabbage can be eaten raw, cooked, or fermented (as in sauerkraut and kimchi). " +
            "It contains powerful antioxidants that may help reduce inflammation and lower the risk of certain diseases. " +
            "Cabbage is a staple in many cuisines worldwide, used in salads, soups, stews, and stir-fries. " +
            "The vegetable is rich in glucosinolates, compounds that may have cancer-fighting properties. " +
            "Fermented cabbage products are beneficial for gut health due to their probiotic content. " +
            "Cabbage is easy to grow and store, making it a popular choice for home gardeners. " +
            "It's often used in traditional dishes like coleslaw, cabbage rolls, and corned beef and cabbage. " +
            "The vegetable has been cultivated for thousands of years and has a long history in traditional medicine.",
        imagePath: "discover_images/Cabbage.jpg",
        categories: ["Culinary", "Medicinal"]
    },
    
    {
        id: "carrot",
        name: "Carrot",
        localName: "Carrot (ಕ್ಯಾರೆಟ್)",
        shortDescription: "Carrots are root vegetables known for their bright orange color and sweet flavor. They are packed with nutrients and offer numerous health benefits.",
        longDescription: "Carrots are rich in beta-carotene, which the body converts into vitamin A. " +
            "They come in various colors including orange, purple, white, and yellow. " +
            "Carrots are an excellent source of antioxidants, particularly beta-carotene and other carotenoids. " +
            "They may help improve eye health due to their high vitamin A content. " +
            "Carrots can be eaten raw, cooked, juiced, or used in baked goods. " +
            "They are low in calories and high in fiber, making them good for weight management. " +
            "The vegetable may help lower cholesterol levels and reduce the risk of heart disease. " +
            "Carrots are easy to grow in home gardens and can be harvested throughout the year. " +
            "They are used in many cuisines worldwide and are popular in both savory and sweet dishes. " +
            "Carrots have been cultivated for thousands of years and were originally grown for medicinal purposes.",
        imagePath: "discover_images/Carrot.jpg",
        categories: ["Culinary", "Medicinal"]
    }
    ,
    
    {
        id: "cauliflower",
        name: "Cauliflower",
        localName: "Hookosu (ಹೂಕೋಸು)",
        shortDescription: "Cauliflower is a versatile cruciferous vegetable known for its mild flavor and numerous health benefits.",
        longDescription: "Cauliflower is low in calories but high in vitamins and minerals, particularly vitamin C and vitamin K. " +
            "It comes in various colors including white, purple, orange, and green. " +
            "Cauliflower is rich in antioxidants and anti-inflammatory compounds. " +
            "It can be eaten raw, roasted, steamed, or used as a low-carb substitute for grains and potatoes. " +
            "The vegetable is a good source of choline, an essential nutrient for brain health. " +
            "Cauliflower contains sulforaphane, a compound that may have cancer-fighting properties. " +
            "It's often used in vegetarian and vegan dishes as a meat substitute. " +
            "The vegetable is easy to grow in home gardens and is relatively pest-resistant. " +
            "Cauliflower is used in many cuisines worldwide, from Indian curries to Italian gratins. " +
            "It's a popular choice for those following low-carb or keto diets.",
        imagePath: "discover_images/Cauliflower.jpg",
        categories: ["Culinary", "Medicinal"]
    },
    {
        id: "chilli",
        name: "Chilli",
        localName: "Menasina Kayi (ಮೆಣಸಿನಕಾಯಿ)",
        shortDescription: "Chilli peppers are spicy fruits known for their heat and flavor. They come in various types and are used in cuisines worldwide.",
        longDescription: "Chilli peppers contain capsaicin, which gives them their spicy heat. " +
            "They are rich in vitamins A and C, and also contain antioxidants. " +
            "Chilli peppers may help boost metabolism and aid in weight loss. " +
            "They come in many varieties, from mild bell peppers to extremely hot ghost peppers. " +
            "Chilli peppers are used in many cuisines around the world for adding heat and flavor. " +
            "They may have pain-relieving properties when applied topically. " +
            "Chilli peppers can be eaten fresh, dried, or used in powdered form. " +
            "They are easy to grow in home gardens or in containers. " +
            "Some studies suggest that regular consumption of chilli peppers may reduce the risk of certain types of cancer. " +
            "Chilli peppers have been used in traditional medicine for thousands of years.",
        imagePath: "discover_images/Chilli.jpg",
        categories: ["Culinary", "Medicinal"]
    },
    {
        id: "coriander",
        name: "Coriander",
        localName: "Kothambari (ಕೊತ್ತಂಬರಿ)",
        shortDescription: "Coriander, also known as cilantro, is an herb known for its distinctive flavor and aroma. Both its leaves and seeds are used in cooking.",
        longDescription: "Coriander leaves (cilantro) and seeds have different flavors and uses in cooking. " +
            "The herb is rich in antioxidants and may have anti-inflammatory properties. " +
            "Coriander is commonly used in Mexican, Indian, and Southeast Asian cuisines. " +
            "It may help lower blood sugar levels and improve insulin sensitivity. " +
            "The seeds are often used as a spice in whole or ground form. " +
            "Coriander has been used in traditional medicine to aid digestion and reduce nausea. " +
            "The herb is a good source of vitamins A, C, and K. " +
            "Coriander is easy to grow in home gardens and can be harvested multiple times. " +
            "Some people have a genetic predisposition to perceive the taste of cilantro as soapy. " +
            "The herb has been cultivated for thousands of years and was used in ancient Egyptian and Greek civilizations.",
        imagePath: "discover_images/Coriander.jpg",
        categories: ["Culinary", "Medicinal", "Aromatic"]
    },
    {
        id: "cucumber",
        name: "Cucumber",
        localName: "Southekayi (ಸೌತೆಕಾಯಿ)",
        shortDescription: "Cucumbers are refreshing vegetables known for their high water content and crisp texture. They are commonly used in salads and for skincare.",
        longDescription: "Cucumbers are composed of about 96% water, making them very hydrating. " +
            "They are low in calories but contain important vitamins and minerals like vitamin K. " +
            "Cucumbers have antioxidant and anti-inflammatory properties. " +
            "They can be eaten raw, pickled, or used in a variety of dishes and beverages. " +
            "Cucumbers are often used in skincare for their cooling and soothing properties. " +
            "They may help reduce blood sugar levels and prevent certain complications of diabetes. " +
            "Cucumbers are easy to grow in home gardens and are quite productive. " +
            "They contain compounds that may help reduce bad breath. " +
            "Cucumbers are used in many cuisines worldwide, from Greek tzatziki to Japanese sunomono. " +
            "They have been cultivated for over 3,000 years, originating in India.",
        imagePath: "discover_images/Cucumber.jpg",
        categories: ["Culinary", "Medicinal"]
    },
    
    {
        id: "marigold",
        name: "Marigold",
        localName: "Chenduhoo (ಚೆಂಡುಹೂ)",
        shortDescription: "Marigolds are bright, cheerful flowers known for their vibrant colors and pest-repelling properties. They are often used in gardening and traditional medicine.",
        longDescription: "Marigolds come in shades of yellow, orange, and red, brightening up gardens. " +
            "They are often used as companion plants in vegetable gardens to repel pests. " +
            "Marigold flowers have been used in traditional medicine for their anti-inflammatory properties. " +
            "They are easy to grow and bloom for a long period, making them popular in landscaping. " +
            "Marigolds are sometimes used as a natural dye for fabrics. " +
            "The flowers are edible and can be used to add color to salads or as a garnish. " +
            "In some cultures, marigolds are used in religious and cultural ceremonies. " +
            "They have potential benefits for skin health when used in topical preparations. " +
            "Marigolds attract beneficial insects like bees and butterflies to the garden. " +
            "The flowers have been used traditionally to make a tea that may aid digestion.",
        imagePath: "discover_images/Marigold.jpg",
        categories: ["Ornamental", "Medicinal", "Insect-repellent"]
    },
    {
        id: "methi",
        name: "Methi",
        localName: "Menthe (ಮೆಂತೆ)",
        shortDescription: "Methi, also known as fenugreek, is an herb known for its distinctive bitter flavor and numerous health benefits.",
        longDescription: "Methi leaves and seeds are both used in cooking and traditional medicine. " +
            "It's a common ingredient in Indian and Middle Eastern cuisines. " +
            "Methi may help control blood sugar levels and is often used in diabetes management. " +
            "The seeds are rich in fiber and may aid in digestion and weight management. " +
            "Methi has been traditionally used to increase milk production in nursing mothers. " +
            "It contains compounds that may help lower cholesterol levels. " +
            "The leaves are rich in vitamins and minerals, including iron and vitamin K. " +
            "Methi seeds can be sprouted and eaten as microgreens. " +
            "It's used in Ayurvedic medicine for various purposes, including improving digestion and reducing inflammation. " +
            "Methi can be easily grown in home gardens or in containers.",
        imagePath: "discover_images/Methi.jpg",
        categories: ["Culinary", "Medicinal"]
    },
    {
        id: "onion",
        name:  "Onion",
        localName: "Eerulli (ಈರುಳ್ಳಿ)",
        shortDescription: "Onions are pungent vegetables used in cuisines worldwide. They are known for their distinctive flavor and numerous health benefits.",
        longDescription: "Onions come in various colors including yellow, red, and white, each with a slightly different flavor profile. " +
            "They are rich in antioxidants, particularly quercetin, which has anti-inflammatory properties. " +
            "Onions may help reduce the risk of certain cancers and heart disease. " +
            "They are a staple in many cuisines and are used raw, cooked, or as a flavoring agent. " +
            "Onions contain compounds that may help control blood sugar levels. " +
            "They are low in calories but high in vitamins and minerals, including vitamin C. " +
            "Onions have antibacterial properties and have been used traditionally to fight infections. " +
            "They are easy to grow in home gardens and can be stored for long periods. " +
            "Onions may help improve bone density, particularly in older women. " +
            "They have been cultivated for thousands of years and have a long history in traditional medicine.",
        imagePath: "discover_images/Onion.jpg",
        categories: ["Culinary", "Medicinal"]
    },
    {
        id: "pansy",
        name: "Pansy",
        localName: "Pansy (ಪ್ಯಾನ್ಸಿ)",
        shortDescription: "Pansies are colorful flowers known for their \"faces\". They are popular in gardens and are also edible, often used as cake decorations.",
        longDescription: "Pansies come in a wide range of colors and are known for their distinctive markings resembling faces. " +
            "They are cool-weather flowers, often planted in spring or fall. " +
            "Pansies are edible and are sometimes used to decorate salads or desserts. " +
            "They are easy to grow and are popular choices for container gardens and borders. " +
            "Pansies have been used in traditional medicine for treating respiratory issues and skin conditions. " +
            "They are rich in antioxidants, particularly in their darker-colored varieties. " +
            "Pansies can bloom for several months with proper care. " +
            "They attract beneficial insects like bees to the garden. " +
            "In the language of flowers, pansies represent loving thoughts. " +
            "Pansies are related to violets and have a mild, sweet flavor when eaten.",
        imagePath: "discover_images/Pansy.jpg",
        categories: ["Ornamental", "Culinary"]
    },
    {
        id: "papaya",
        name: "Papaya",
        localName: "Parangi (ಪರಂಗಿ)",
        shortDescription: "Papaya is a tropical fruit known for its sweet taste and numerous health benefits, particularly for digestion.",
        longDescription: "Papayas are rich in antioxidants, vitamins, and minerals, especially vitamin C and vitamin A. " +
            "They contain an enzyme called papain, which aids in digestion and is used as a meat tenderizer. " +
            "Papayas may help boost immune function due to their high vitamin C content. " +
            "The fruit is low in calories but high in fiber, making it good for weight management. " +
            "Papayas contain lycopene, which may help reduce the risk of certain cancers. " +
            "They can be eaten raw, cooked, or used in smoothies and desserts. " +
            "Papaya leaves are sometimes used to make tea that may have medicinal properties. " +
            "The fruit may help improve heart health by preventing the oxidation of cholesterol. " +
            "Papayas are easy to grow in tropical and subtropical climates. " +
            "They have been used in traditional medicine for centuries, particularly for digestive issues.",
        imagePath:"discover_images/Papaya.jpg",
        categories: ["Culinary", "Medicinal"]
    },
    {
        id: "parsley",
        name: "Parsley",
        localName: "Parsley (ಪಾರ್ಸ್ಲಿ)",
        shortDescription: "Parsley is a versatile herb used in many cuisines. It's known for its fresh flavor and high nutrient content.",
        longDescription: "Parsley is rich in vitamins A, C, and K, as well as antioxidants. " +
            "It comes in two main varieties: curly parsley and flat-leaf (Italian) parsley. " +
            "Parsley may help freshen breath due to its high chlorophyll content. " +
            "It's commonly used as a garnish but also adds flavor to many dishes. " +
            "Parsley has diuretic properties and may help reduce water retention. " +
            "It contains compounds that may have cancer-fighting properties. " +
            "Parsley is easy to grow in home gardens or in containers. " +
            "It's used in many cuisines worldwide, particularly in Middle Eastern and Mediterranean dishes. " +
            "Parsley may help support bone health due to its high vitamin K content. " +
            "It has been used in traditional medicine to treat various ailments, including digestive issues.",
        imagePath: "discover_images/Parsley.jpg",
        categories: ["Culinary", "Medicinal", "Aromatic"]
    },
    {
        id: "peas",
        name: "Peas",
        localName: "Batani (ಬಟಾಣಿ)",
        shortDescription: "Peas are small, round green vegetables known for their sweet taste and nutritional value.",
        longDescription: "Peas are rich in vitamins C and K, and are a good source of plant-based protein. " +
            "They come in several varieties, including garden peas, snow peas, and snap peas. " +
            "Peas are high in fiber, which aids in digestion and may help lower cholesterol. " +
            "They contain antioxidants that may have anti-aging properties and reduce the risk of certain diseases. " +
            "Peas can be eaten fresh, frozen, or canned, and are used in many dishes worldwide. " +
            "They are relatively easy to grow in home gardens and are often one of the first crops to be harvested in spring. " +
            "Peas may help regulate blood sugar levels due to their low glycemic index. " +
            "They are often used in vegetarian and vegan diets as a protein source. " +
            "Peas have been cultivated for thousands of years and were one of the first crops to be domesticated. " +
            "They are versatile and can be used in salads, soups, stir-fries, and many other dishes.",
        imagePath: "discover_images/Peas.jpg",
        categories: ["Culinary", "Medicinal"]
    },
    {
        id: "petunia",
        name: "Petunia",
        localName: "Petunia (ಪೆಟೂನಿಯಾ)",
        shortDescription: "Petunias are popular flowering plants known for their trumpet-shaped blossoms and wide range of colors.",
        longDescription: "Petunias come in a vast array of colors, patterns, and sizes. " +
            "They are popular choices for hanging baskets, window boxes, and garden borders. " +
            "Petunias bloom throughout the summer and into fall in many climates. " +
            "They are relatively easy to grow and maintain, making them popular with both novice and experienced gardeners. " +
            "Some varieties of petunias have a sweet fragrance, especially in the evening. " +
            "Petunias attract pollinators like bees and butterflies to the garden. " +
            "They are often used in landscaping to create colorful displays in public spaces. " +
            "Petunias can be grown as annuals in colder climates or perennials in warmer regions. " +
            "They come in both spreading and upright varieties, suitable for different garden designs. " +
            "Petunias are not typically used for culinary or medicinal purposes but are valued for their ornamental beauty.",
        imagePath: "discover_images/Petunia.jpg",
        categories: ["Ornamental"]
    },
    {
        id: "pumpkin",
        name: "Pumpkin",
        localName: "Kumbalakayi (ಕುಂಬಳಕಾಯಿ)",
        shortDescription: "Pumpkins are large, orange squash known for their use in cooking and as decorative items, especially during autumn.",
        longDescription: "Pumpkins are rich in vitamins A and C, as well as antioxidants like alpha-carotene and beta-carotene. " +
            "They come in various sizes, from small decorative varieties to large ones used for cooking. " +
            "Pumpkin seeds are edible and highly nutritious, rich in magnesium, zinc, and healthy fats. " +
            "The flesh of pumpkins can be used in both sweet and savory dishes, from pies to soups. " +
            "Pumpkins are low in calories but high in fiber, making them good for weight management. " +
            "They are often used as decorative items, particularly during Halloween. " +
            "Pumpkins may help improve heart health due to their high potassium content. " +
            "They are relatively easy to grow and are often planted in home gardens. " +
            "Pumpkin puree can be used as a healthy substitute in baking to reduce fat and calories. " +
            "In some cultures, pumpkins have been used traditionally for medicinal purposes, such as treating parasites.",
        imagePath:"discover_images/Pumpkin.jpg",
        categories: ["Culinary", "Medicinal", "Ornamental"]
    },
    {
        id: "radish",
        name: "Radish",
        localName: "Mullangi (ಮುಲ್ಲಂಗಿ)",
        shortDescription: "Radishes are crunchy root vegetables known for their peppery flavor and quick growing time.",
        longDescription: "Radishes come in various colors including red, white, purple, and black. " +
            "They are low in calories but rich in vitamins and minerals, particularly vitamin C. " +
            "Radishes have a peppery flavor that adds zest to salads and other dishes. " +
            "They are often eaten raw but can also be cooked or pickled. " +
            "Radishes are one of the fastest-growing vegetables, ready to harvest in as little as 3-4 weeks. " +
            "They contain compounds that may help improve digestion and liver function. " +
            "Radishes are easy to grow in home gardens and can be planted multiple times during the growing season. " +
            "They have been used in traditional medicine to treat various ailments, including respiratory problems. " +
            "Radish greens are also edible and nutritious, often used in salads or cooked like other leafy greens. " +
            "In some cultures, large varieties of radishes are used as winter storage vegetables.",
        imagePath: "discover_images/Radish.jpg",
        categories: ["Culinary", "Medicinal"]
    },
    {
        id: "sea_urchin_cactus",
        name: "Sea Urchin Cactus",
        localName: "Samudra Urch Kalli (ಸಮುದ್ರ ಉರ್ಚ್ ಕಳ್ಳಿ)",
        shortDescription: "Sea Urchin Cactus is a small, globular cactus known for its radial symmetry and pastel-colored flowers.",
        longDescription: "The Sea Urchin Cactus, named for its resemblance to a sea urchin, is a compact, spherical cactus often grown as a houseplant. " +
          "Its surface is divided into neat, symmetrical ribs lined with small, soft spines. " +
          "Unlike larger cacti, it stays small, making it ideal for indoor containers and small garden spaces. " +
          "This cactus blooms with stunning flowers in soft pastel hues of pink, yellow, or white, making it a popular choice for decorative displays. " +
          "The Sea Urchin Cactus thrives in well-drained soil and requires minimal water, making it a low-maintenance plant for beginners. " +
          "It is often grown as a potted plant in homes, offices, and terrariums due to its aesthetic appeal and ease of care. " +
          "Though smaller than its desert relatives, it follows the same principles of water storage and drought tolerance. " +
          "Sea Urchin Cacti are highly sought after by collectors due to their unique appearance and vibrant flowers. " +
          "They are ideal for xeriscaping and can be paired with succulents to create diverse, water-efficient gardens. " +
          "Their compact nature and slow growth make them suitable for use in small decorative planters, perfect for modern homes and workspaces.",
        imagePath: "discover_images/SeaUrchinCactus.jpg",
        categories: ["Ornamental", "Medicinal"]
      },
    {
        id: "salvia",
        name: "Salvia",
        localName: "Salvia (ಸಾಲ್ವಿಯಾ)",
        shortDescription: "Salvia, also known as sage, is an aromatic herb known for its culinary uses and potential medicinal properties.",
        longDescription: "Salvia includes many species, with common sage being the most well-known for culinary use. " +
            "It has a strong, earthy flavor and is commonly used in poultry dishes and stuffings. " +
            "Salvia has been used in traditional medicine for its potential cognitive-enhancing properties. " +
            "Some varieties of salvia are grown ornamentally for their beautiful flowers. " +
            "The herb contains antioxidants and anti-inflammatory compounds. " +
            "Salvia may help improve oral health when used as a mouthwash. " +
            "It's relatively easy to grow in home gardens and is drought-tolerant once established. " +
            "Some species of salvia have been used traditionally for their hallucinogenic properties. " +
            "The herb may help reduce menopausal symptoms like hot flashes. " +
            "Salvia has been used in smudging ceremonies by some Native American tribes.",
        imagePath: "discover_images/Salvia.jpg",
        categories: ["Culinary", "Medicinal", "Aromatic", "Ornamental"]
    },
    {
        id: "spinach",
        name: "Spinach",
        localName: "Palak (ಪಾಲಕ್)",
        shortDescription: "Spinach is a leafy green vegetable known for its high nutrient content and versatility in cooking.",
        longDescription: "Spinach is rich in vitamins and minerals, particularly iron, calcium, and vitamins A and C. " +
            "It can be eaten raw in salads or cooked in various dishes. " +
            "Spinach contains high levels of antioxidants, including lutein and zeaxanthin, which are beneficial for eye health. " +
            "It's low in calories but high in fiber, making it good for weight management. " +
            "Spinach may help lower blood pressure due to its high nitrate content. " +
            "It's easy to grow in home gardens and can be harvested multiple times. " +
            "Spinach can be frozen for long-term storage without losing much of its nutritional value. " +
            "It's used in cuisines worldwide, from Indian saag to Greek spanakopita. " +
            "Spinach may help reduce the risk of certain cancers due to its high antioxidant content. " +
            "It has been cultivated for over 2,000 years, originating in ancient Persia.",
        imagePath: "discover_images/Spinach.jpg",
        categories: ["Culinary", "Medicinal"]
    },
    {
        id: "sunflower",
        name: "Sunflower",
        localName: "Suryakanti (ಸೂರ್ಯಕಾಂತಿ)",
        shortDescription: "Sunflowers are tall, bright flowers known for their large yellow blooms and edible seeds.",
        longDescription: "Sunflowers are known for their ability to turn their heads to follow the sun throughout the day. " +
            "They produce edible seeds that are rich in healthy fats, protein, and various nutrients. " +
            "Sunflower oil is commonly used for cooking and is high in vitamin E. " +
            "The flowers are popular in gardens and as cut flowers due to their bright, cheerful appearance. " +
            "Sunflowers are easy to grow and can reach heights of up to 16 feet or more. " +
            "They are often used to produce birdseed and as feed for livestock. " +
            "Sunflowers have been used in phytoremediation to extract toxins from soil. " +
            "The plants are native to North America and were cultivated by indigenous peoples for food. " +
            "Sunflower seeds are a good source of selenium, which is important for thyroid function. " +
            "In some cultures, sunflowers symbolize adoration, loyalty, and longevity.",
        imagePath: "discover_images/Sunflower.jpg",
        categories: ["Ornamental", "Culinary"]
    },
    {
        id: "tomato",
        name: "Tomato",
        localName: "Tomato (ಟೊಮೆಟೊ)",
        shortDescription: "Tomatoes are juicy, flavorful fruits commonly used as vegetables in cooking. They are known for their versatility and nutritional benefits.",
        longDescription: "Tomatoes come in various sizes, shapes, and colors, including red, yellow, and green. " +
            "They are rich in lycopene, an antioxidant that may reduce the risk of certain cancers and heart disease. " +
            "Tomatoes are a good source of vitamins C and K, potassium, and folate. " +
            "They can be eaten raw, cooked, or processed into sauces, juices, and other products. " +
            "Tomatoes may help improve skin health due to their high vitamin C and lycopene content. " +
            "They are relatively easy to grow in home gardens or containers. " +
            "Cooking tomatoes can increase the bioavailability of certain nutrients, particularly lycopene. " +
            "Tomatoes are used in cuisines worldwide and are a key ingredient in many dishes. " +
            "They may help reduce inflammation in the body due to their antioxidant content. " +
            "Tomatoes originated in South America and were spread globally after European colonization.",
        imagePath:"discover_images/Tomato.jpg",
        categories: ["Culinary", "Medicinal"]
    },
    {
        id: "turnip",
        name: "Turnip",
        localName: "Navilu Gadde (ನವಿಲು ಗಡ್ಡೆ)",
        shortDescription: "Turnips are root vegetables known for their white flesh and purple-tinged skin. Both the root and greens are edible.",
        longDescription: "Turnips are low in calories but high in nutrients, particularly vitamin C and fiber. " +
            "Both the root and the greens of turnips are edible and nutritious. " +
            "Turnips have a slightly sweet and peppery flavor that becomes milder when cooked. " +
            "They can be eaten raw, roasted, boiled, or mashed, and are often used in soups and stews. " +
            "Turnip greens are rich in vitamins A and K, and are often cooked like other leafy greens. " +
            "The vegetable may help improve bone health due to its calcium and potassium content. " +
            "Turnips are easy to grow and are often planted as a fall or winter crop. " +
            "They have been cultivated for thousands of years and were an important food source in ancient civilizations. " +
            "Turnips may help reduce inflammation in the body due to their antioxidant content. " +
            "In some cultures, turnips are carved similarly to pumpkins for Halloween celebrations.",
        imagePath: "discover_images/Turnip.jpg",
        categories: ["Culinary", "Medicinal"]
    },
    {
        id: "vinca",
        name: "Vinca",
        localName: "Sadabahar (ಸದಾಬಹಾರ್)",
        shortDescription: "Vinca, also known as periwinkle, is a flowering plant known for its pretty blooms and potential medicinal properties.",
        longDescription: "Vinca comes in various species, with common periwinkle and Madagascar periwinkle being popular garden plants. " +
            "It produces beautiful flowers in shades of pink, purple, and white. " +
            "Vinca is often used as a ground cover due to its spreading habit and evergreen foliage. " +
            "Some species of vinca have been used in traditional medicine to treat various ailments. " +
            "The Madagascar periwinkle is a source of important cancer-fighting compounds. " +
            "Vinca is relatively easy to grow and is drought-tolerant once established. " +
            "The plant is often used in landscaping for its long blooming period and low maintenance needs. " +
            "Vinca contains alkaloids that have been used to produce drugs for treating high blood pressure. " +
            "It's important to note that some species of vinca can be invasive in certain regions. " +
            "In some cultures, vinca symbolizes fond memories and is associated with friendship.",
        imagePath: "discover_images/Vinca.jpg",
        categories: ["Ornamental", "Medicinal"]
    },
    {
        id: "whiteVelvet",
        name: "White Velvet Plant",
        localName: "Bili Meludare Gida (ಬಿಳಿ ಮೆಲುದಾರೆ ಗಿಡ)",
        shortDescription: "The White Velvet Plant is known for its soft, velvety leaves covered in fine white hairs, giving it a unique texture and appearance.",
        longDescription: "The White Velvet Plant, scientifically known as Tradescantia sillamontana, is native to northeast Mexico. " +
          "It's characterized by its thick, fleshy leaves covered in fine white hairs, giving it a soft, velvety texture. " +
          "The plant forms a compact, spreading mound and can reach up to 6-12 inches in height. " +
          "Small pink or purple flowers may appear in summer, contrasting beautifully with the white foliage. " +
          "It's drought-tolerant and prefers well-draining soil, making it suitable for rock gardens or as a groundcover. " +
          "The White Velvet Plant is also popular as a houseplant due to its unique appearance and easy care requirements. " +
          "It can be propagated easily from stem cuttings, allowing for simple multiplication of the plant. " +
          "While primarily grown for its foliage, the plant is also known to have air-purifying qualities. " +
          "In its native habitat, it grows in rocky, arid areas, often in partial shade. " +
          "The plant is non-toxic, making it safe for households with pets and children.",
        imagePath: "discover_images/WhiteVelvet.jpg",
        categories: ["Ornamental"]
      },
      {
        id: "zebra",
        name: "Zebra Plant",
        localName: "Nimbe Gida (ನಿಂಬೆ ಗಿಡ)",
        shortDescription: "The Lime Green Plant, often referring to the lime tree, is known for its citrus fruits and aromatic leaves.",
        longDescription: "Lime trees are small evergreen trees or shrubs known for their tart, green fruits. " +
          "The leaves of lime trees are dark green, glossy, and have a distinctive citrus aroma when crushed. " +
          "Limes are rich in vitamin C and are used extensively in cooking to add flavor to dishes and beverages. " +
          "The juice of limes is often used in cocktails and as a natural preservative in food preparation. " +
          "Lime trees prefer warm climates and are sensitive to cold, thriving in tropical and subtropical regions. " +
          "The essential oils from lime peels are used in aromatherapy and perfumery. " +
          "Limes have been used traditionally to prevent scurvy due to their high vitamin C content. " +
          "The trees can be grown in containers, making them suitable for patios and small gardens. " +
          "Lime leaves are used in some cuisines, particularly in Southeast Asian dishes. " +
          "The fruit and juice have natural antibacterial properties and are used in some cleaning products.",
        imagePath: "discover_images/Zebra.jpg",
        categories: ["Culinary", "Medicinal", "Ornamental"]
      },
    {
        id: "zinnia",
        name: "Zinnia",
        localName: "Zinnia (ಜಿನ್ನಿಯಾ)",
        shortDescription: "Zinnias are colorful flowering plants known for their bright, daisy-like blooms and ease of growing.",
        longDescription: "Zinnias come in a wide range of colors, including red, orange, yellow, pink, and purple. " +
            "They are popular in gardens for their long-lasting blooms and ability to attract butterflies. " +
            "Zinnias are relatively easy to grow from seeds and bloom quickly. " +
            "They make excellent cut flowers, lasting long in bouquets. " +
            "Zinnias are annual plants, completing their life cycle in one growing season. " +
            "They are often used in butterfly gardens as they provide nectar for adult butterflies. " +
            "Zinnias are heat and drought-tolerant, making them suitable for summer gardens. " +
            "They come in various heights, from dwarf varieties to tall plants reaching up to 4 feet. " +
            "Zinnias are not typically used for culinary or medicinal purposes but are valued for their ornamental beauty. " +
            "The plants are native to Mexico and were named after German botanist Johann Gottfried Zinn.",
        imagePath: "discover_images/Zinnia.jpg",
        categories: ["Ornamental"]
    },
    {
        id: "zucchini",
        name: "Zucchini",
        localName: "Zucchini (ಜುಕಿನಿ)",
        shortDescription: "Zucchini is a type of summer squash known for its mild flavor and versatility in cooking.",
        longDescription: "Zucchini is low in calories but high in vitamins and minerals, particularly vitamin A and potassium. " +
            "It can be eaten raw, grilled, roasted, or used in baked goods like zucchini bread. " +
            "Zucchini is a good source of antioxidants, including lutein and zeaxanthin, which are beneficial for eye health. " +
            "The vegetable is very versatile and can be used as a low-carb substitute for pasta. " +
            "Zucchini flowers are edible and are often stuffed and fried in some cuisines. " +
            "It's easy to grow in home gardens and can be very productive. " +
            "Zucchini may help improve digestion due to its high water and fiber content. " +
            "It can be used in both sweet and savory dishes, from ratatouille to chocolate zucchini cake. " +
            "Zucchini is a good source of manganese, which is important for bone health and wound healing. " +
            "The vegetable is native to the Americas but is now cultivated worldwide.",
        imagePath: "discover_images/Zucchini.jpg",
        categories: ["Culinary", "Medicinal"]
    }

];

function createHerbCard(herb) {
    const herbCard = document.createElement('div');
    herbCard.className = 'herb-container';
    herbCard.id = herb.id;

    herbCard.innerHTML = `
        <div class="herb-header">
            <img src="${herb.imagePath}" alt="${herb.name}" class="herb-image">
            <div class="herb-info">
                <strong>${herb.name}</strong>
                <em>${herb.localName}</em>
                <p>${herb.shortDescription}</p>
                <span class="see-more" onclick="toggleExtra('${herb.id}')">See more…</span>
            </div>
        </div>
        <div class="extra-info" id="extra-${herb.id}">
            <p>${herb.longDescription}</p>
            <div class="categories">
                <strong>Categories:</strong>
                ${herb.categories.map(category => `<span class="category">${category}</span>`).join('')}
            </div>
        </div>
    `;

    return herbCard;
}

function renderHerbCards(herbsToRender = herbs) {
    const container = document.getElementById('herb-cards-container');
    container.innerHTML = '';
    herbsToRender.forEach(herb => {
        container.appendChild(createHerbCard(herb));
    });
}

function toggleExtra(herbId) {
    const extraInfo = document.getElementById(`extra-${herbId}`);
    const seeMoreBtn = document.querySelector(`#${herbId} .see-more`);
    if (extraInfo.style.display === 'none' || extraInfo.style.display === '') {
        extraInfo.style.display = 'block';
        seeMoreBtn.textContent = 'See less…';
    } else {
        extraInfo.style.display = 'none';
        seeMoreBtn.textContent = 'See more…';
    }
}

function searchHerbs(query) {
    return herbs.filter(herb => 
        herb.name.toLowerCase().includes(query.toLowerCase()) ||
        herb.localName.toLowerCase().includes(query.toLowerCase())
    );
}

function initializeSearch() {
    const searchBox = document.getElementById('search-box');
    const suggestionsBox = document.getElementById('search-suggestions');

    searchBox.addEventListener('input', (e) => {
        const query = e.target.value;
        if (query.length > 1) {
            const suggestions = searchHerbs(query);
            displaySuggestions(suggestions);
        } else {
            suggestionsBox.innerHTML = '';
            renderHerbCards();
        }
    });
}

function displaySuggestions(suggestions) {
    const suggestionsBox = document.getElementById('search-suggestions');
    suggestionsBox.innerHTML = '';
    suggestions.forEach(herb => {
        const suggestion = document.createElement('div');
        suggestion.className = 'suggestion';
        suggestion.textContent = `${herb.name} (${herb.localName})`;
        suggestion.addEventListener('click', () => {
            document.getElementById('search-box').value = herb.name;
            suggestionsBox.innerHTML = '';
            renderHerbCards([herb]);
        });
        suggestionsBox.appendChild(suggestion);
    });
}

function initializeBackToTop() {
    const backToTopButton = document.getElementById('back-to-top');
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderHerbCards();
    initializeSearch();
    initializeBackToTop();
});