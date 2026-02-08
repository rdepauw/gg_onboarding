import type { GolfDestination } from "./types";

export const destinations: GolfDestination[] = [
  // ─────────────────────────────────────────────────────────────
  // 1. SCOTTSDALE, AZ — The template destination, fully fleshed
  // ─────────────────────────────────────────────────────────────
  {
    slug: "scottsdale-az",
    city: "Scottsdale",
    state: "AZ",
    coordinates: { lat: 33.4942, lng: -111.9261 },
    tagline: "Desert golf at its finest — championship layouts carved through saguaro-studded Sonoran terrain",
    flightCode: "GG-SCO",
    stats: {
      coursesCount: 200,
      avgGreenFee: "$100-250",
      bestMonth: "February",
      avgTemp: "73°F",
    },
    courseTiers: [
      {
        tier: "top_tier",
        label: "Top Tier",
        description:
          "Bucket-list desert tracks that host PGA Tour events and rank among the best public courses in the country",
        courses: [
          {
            name: "TPC Scottsdale — Stadium Course",
            type: "resort",
            greenFee: "$250-400",
            signatureFeature:
              "Home of the WM Phoenix Open and the legendary par-3 16th hole coliseum",
            rating: 5,
          },
          {
            name: "Troon North — Monument Course",
            type: "public",
            greenFee: "$200-350",
            signatureFeature:
              "Tom Weiskopf design weaving through granite boulders with sweeping McDowell Mountain views",
            rating: 5,
          },
          {
            name: "We-Ko-Pa — Saguaro Course",
            type: "public",
            greenFee: "$150-310",
            signatureFeature:
              "Coore & Crenshaw minimalist masterpiece on Fort McDowell Yavapai Nation land — no homes, pure desert",
            rating: 5,
          },
        ],
      },
      {
        tier: "ole_reliable",
        label: "Ole Reliables",
        description:
          "Consistently excellent courses that deliver a great round without the premium price tag",
        courses: [
          {
            name: "Grayhawk — Raptor Course",
            type: "public",
            greenFee: "$130-250",
            signatureFeature:
              "Tom Fazio design with immaculate conditioning and a legendary post-round scene at Phil's Grill",
            rating: 4,
          },
          {
            name: "TPC Scottsdale — Champions Course",
            type: "resort",
            greenFee: "$100-200",
            signatureFeature:
              "The Stadium's quieter sibling — same resort quality with friendlier green fees and less crowds",
            rating: 4,
          },
          {
            name: "Troon North — Pinnacle Course",
            type: "public",
            greenFee: "$175-300",
            signatureFeature:
              "Slightly gentler than Monument with wider fairways and equally stunning desert panoramas",
            rating: 4,
          },
        ],
      },
      {
        tier: "hidden_gem",
        label: "Hidden Gems",
        description:
          "Under-the-radar plays that locals love — quality golf at value prices",
        courses: [
          {
            name: "Papago Golf Course",
            type: "public",
            greenFee: "$45-75",
            signatureFeature:
              "Phoenix muni with red-rock butte backdrops — where local scratch players sharpen their games",
            rating: 4,
          },
          {
            name: "We-Ko-Pa — Cholla Course",
            type: "public",
            greenFee: "$130-280",
            signatureFeature:
              "Scott Miller design with dramatic elevation changes and cactus-lined corridors at half the Saguaro hype",
            rating: 4,
          },
          {
            name: "Lookout Mountain Golf Club",
            type: "resort",
            greenFee: "$80-150",
            signatureFeature:
              "Tucked inside the Pointe Hilton Tapatio Cliffs with mountain-framed holes and surprisingly affordable twilight rates",
            rating: 3,
          },
        ],
      },
    ],
    neighborhoods: [
      {
        name: "Old Town Scottsdale",
        vibe: "Walkable arts district with gallery-lined streets, rooftop bars, and late-night energy",
        priceRange: "$$$",
        bestFor: "Nightlife, dining, and staying in the center of the action",
      },
      {
        name: "Kierland",
        vibe: "Upscale open-air shopping and dining with a polished, modern feel",
        priceRange: "$$$",
        bestFor: "Young professionals who want trendy restaurants and easy access to north Scottsdale courses",
      },
      {
        name: "Arcadia",
        vibe: "Tree-lined residential streets with a thriving brunch and coffee scene",
        priceRange: "$$$",
        bestFor: "A quieter base with excellent neighborhood restaurants near Camelback Mountain",
      },
      {
        name: "North Scottsdale",
        vibe: "Sprawling desert luxury with resort properties and wide-open mountain views",
        priceRange: "$$$$",
        bestFor: "Resort stays near Troon North and We-Ko-Pa with world-class spas",
      },
    ],
    dining: [
      {
        name: "Fat Ox",
        cuisine: "Regional Italian",
        priceRange: "$$$",
        highlight:
          "Wagyu beef cheek gnocchi and handmade pastas in a sleek Old Town setting",
      },
      {
        name: "Uchi",
        cuisine: "Japanese",
        priceRange: "$$$",
        highlight:
          "James Beard Award-winning chef Tyson Cole's nontraditional sushi with daily omakase",
      },
      {
        name: "Barrio Queen",
        cuisine: "Interior Mexican",
        priceRange: "$$",
        highlight:
          "Centuries-old recipes from Mexico including cochinta pibil and tableside guacamole",
      },
      {
        name: "Olive & Ivy",
        cuisine: "Mediterranean",
        priceRange: "$$$",
        highlight:
          "Waterfront patio on the Scottsdale Waterfront with seasonal craft cocktails",
      },
      {
        name: "Mastro's City Hall",
        cuisine: "Steakhouse",
        priceRange: "$$$$",
        highlight:
          "Power-dining steakhouse with live music, towering seafood towers, and a scene",
      },
    ],
    breweries: [
      {
        name: "Goldwater Brewing Co.",
        style: "West Coast IPAs and craft lagers",
        highlight:
          "Artisanal Scottsdale brewery since 2014 with a strong local following and rotating taps",
      },
      {
        name: "OHSO Brewery + Distillery",
        style: "Eclectic ales and house spirits",
        highlight:
          "Dog-friendly patio, in-house distillery, and a massive beer selection spanning every style",
      },
      {
        name: "Pinnacle Brewing Co.",
        style: "European-leaning craft",
        highlight:
          "Scottsdale Airpark newcomer specializing in Belgian and German styles with a modern taproom",
      },
    ],
    activities: [
      {
        name: "Camelback Mountain — Echo Canyon Trail",
        category: "outdoors",
        description:
          "Iconic 2,704-foot scramble with panoramic valley views — go at sunrise to beat the heat and the crowds",
      },
      {
        name: "Scottsdale Arts District Gallery Walk",
        category: "culture",
        description:
          "Thursday evening gallery walks through dozens of contemporary and Western art galleries in the Marshall Way district",
      },
      {
        name: "Joya Spa at Omni Scottsdale",
        category: "wellness",
        description:
          "Rooftop relaxation pool, desert-inspired treatments, and a tequila bar — the perfect post-round recovery",
      },
      {
        name: "Sunrise Hot Air Balloon Ride",
        category: "outdoors",
        description:
          "Float over the Sonoran Desert at dawn with champagne toast upon landing — surreal views of saguaro forests",
      },
      {
        name: "Lower Salt River Kayaking",
        category: "outdoors",
        description:
          "Paddle through Tonto National Forest with wild horse sightings and bald eagles overhead",
      },
    ],
    bestTimeToVisit:
      "January through April for ideal 65-85°F weather and peak course conditions. February and March are the sweet spot — warm days, cool evenings, and the WM Phoenix Open buzz.",
    nearestAirport: "PHX — Phoenix Sky Harbor International Airport",
    seoKeywords: [
      "scottsdale golf trip",
      "best golf courses scottsdale",
      "scottsdale golf vacation",
      "desert golf arizona",
      "TPC scottsdale tee times",
      "troon north golf",
      "scottsdale golf packages",
      "phoenix golf trip",
    ],
  },

  // ─────────────────────────────────────────────────────────
  // 2. MYRTLE BEACH, SC
  // ─────────────────────────────────────────────────────────
  {
    slug: "myrtle-beach-sc",
    city: "Myrtle Beach",
    state: "SC",
    coordinates: { lat: 33.6891, lng: -78.8867 },
    tagline: "The golf capital of the world — 80+ courses along the Grand Strand at every price point",
    flightCode: "GG-MYR",
    stats: {
      coursesCount: 80,
      avgGreenFee: "$60-150",
      bestMonth: "October",
      avgTemp: "70°F",
    },
    courseTiers: [
      {
        tier: "top_tier",
        label: "Top Tier",
        description:
          "The crown jewels of the Grand Strand — nationally ranked courses that anchor any Myrtle Beach trip",
        courses: [
          {
            name: "Caledonia Golf & Fish Club",
            type: "public",
            greenFee: "$130-250",
            signatureFeature:
              "Live-oak-lined entry drive and Lowcountry beauty — Golf Digest Top 100 Public and #3 in South Carolina",
            rating: 5,
          },
          {
            name: "TPC Myrtle Beach",
            type: "public",
            greenFee: "$100-200",
            signatureFeature:
              "Tom Fazio design through natural wetlands with PGA Tour-caliber conditioning",
            rating: 5,
          },
          {
            name: "Grande Dunes Resort Club",
            type: "resort",
            greenFee: "$80-180",
            signatureFeature:
              "Intracoastal Waterway views and ranked among America's 100 Greatest Public Courses",
            rating: 5,
          },
        ],
      },
      {
        tier: "ole_reliable",
        label: "Ole Reliables",
        description:
          "Consistent quality and great value — the courses that keep groups coming back year after year",
        courses: [
          {
            name: "True Blue Golf Club",
            type: "public",
            greenFee: "$90-160",
            signatureFeature:
              "Mike Strantz design with massive greens and creative bunkering — Caledonia's bolder sibling",
            rating: 4,
          },
          {
            name: "Tidewater Golf Club",
            type: "public",
            greenFee: "$60-130",
            signatureFeature:
              "Perched on a peninsula between the Intracoastal and Cherry Grove inlet with ocean views",
            rating: 4,
          },
          {
            name: "Barefoot Resort — Dye Course",
            type: "resort",
            greenFee: "$70-150",
            signatureFeature:
              "Pete Dye's strategic masterclass — the most acclaimed of Barefoot's four courses",
            rating: 4,
          },
          {
            name: "Barefoot Resort — Love Course",
            type: "resort",
            greenFee: "$60-130",
            signatureFeature:
              "Davis Love III design with generous fairways and Intracoastal marshland beauty",
            rating: 4,
          },
        ],
      },
      {
        tier: "hidden_gem",
        label: "Hidden Gems",
        description:
          "Budget-friendly and underrated plays that punch above their green fee",
        courses: [
          {
            name: "Pawleys Plantation Golf & Country Club",
            type: "semi-private",
            greenFee: "$50-100",
            signatureFeature:
              "Jack Nicklaus signature design through Lowcountry marsh with surprisingly affordable rates",
            rating: 4,
          },
          {
            name: "Thistle Golf Club",
            type: "public",
            greenFee: "$40-80",
            signatureFeature:
              "27-hole Scottish links-inspired layout in Sunset Beach — outstanding value with a charming clubhouse",
            rating: 3,
          },
          {
            name: "Rivers Edge Golf Club",
            type: "public",
            greenFee: "$40-80",
            signatureFeature:
              "Arnold Palmer design along the Shallotte River with wildlife-rich wetlands and no crowds",
            rating: 3,
          },
        ],
      },
    ],
    neighborhoods: [
      {
        name: "The Market Common",
        vibe: "Walkable mixed-use village on a former Air Force base with boutiques and al fresco dining",
        priceRange: "$$",
        bestFor: "Couples and foodies wanting a quieter, curated alternative to the boardwalk",
      },
      {
        name: "Pawleys Island",
        vibe: "Laid-back Lowcountry charm with historic inns and marshside restaurants",
        priceRange: "$$$",
        bestFor: "Golfers playing Caledonia and True Blue who want a slower pace",
      },
      {
        name: "North Myrtle Beach",
        vibe: "Family-friendly beach town with shag dancing heritage and less commercial density",
        priceRange: "$$",
        bestFor: "Groups wanting beach access plus proximity to Barefoot and Tidewater",
      },
      {
        name: "Broadway at the Beach",
        vibe: "Entertainment complex with restaurants, attractions, and nightlife on a central lake",
        priceRange: "$$",
        bestFor: "Buddy trips that want post-round nightlife and variety",
      },
    ],
    dining: [
      {
        name: "Frank's Restaurant & Bar",
        cuisine: "Lowcountry fine dining",
        priceRange: "$$$",
        highlight:
          "Pawleys Island institution known for grouper and she-crab soup — reservations essential",
      },
      {
        name: "Sea Captain's House",
        cuisine: "Coastal Southern",
        priceRange: "$$",
        highlight:
          "Oceanfront dining in a 1930s beach cottage with award-winning she-crab soup",
      },
      {
        name: "The Wicked Tuna",
        cuisine: "Seafood",
        priceRange: "$$",
        highlight:
          "Fresh-catch restaurant on the Murrells Inlet Marshwalk with sunset waterway views",
      },
      {
        name: "Thoroughbreds Chophouse",
        cuisine: "Steakhouse",
        priceRange: "$$$",
        highlight:
          "Equestrian-themed fine dining with prime cuts and an extensive wine cellar",
      },
      {
        name: "Prosser's BBQ",
        cuisine: "South Carolina BBQ",
        priceRange: "$",
        highlight:
          "Buffet-style whole-hog barbecue with hash, rice, and all the Southern sides since 1971",
      },
    ],
    breweries: [
      {
        name: "New South Brewing",
        style: "Southern-inspired ales and lagers",
        highlight:
          "Myrtle Beach's original craft brewery with a spacious taproom and rotating seasonal brews",
      },
      {
        name: "Crooked Hammock Brewery",
        style: "Beach-friendly session ales",
        highlight:
          "Barefoot-friendly backyard brewery with hammocks, lawn games, and coastal vibes at Barefoot Landing",
      },
      {
        name: "Liberty Brewery & Grill",
        style: "Pub ales and IPAs",
        highlight:
          "Lodge-style brewery near Broadway at the Beach with house-brewed beers and an outdoor beer garden",
      },
    ],
    activities: [
      {
        name: "Murrells Inlet Marshwalk",
        category: "food_tour",
        description:
          "Half-mile boardwalk lined with seafood restaurants and live music venues along the salt marsh",
      },
      {
        name: "Brookgreen Gardens",
        category: "culture",
        description:
          "National Historic Landmark with sculpture gardens, Lowcountry trails, and a zoo on a former rice plantation",
      },
      {
        name: "Barefoot Landing",
        category: "nightlife",
        description:
          "Waterfront shopping and entertainment complex with House of Blues, alligator exhibits, and live music",
      },
      {
        name: "Kayaking the Waccamaw River",
        category: "outdoors",
        description:
          "Paddle through blackwater cypress swamps with turtles, herons, and old-growth timber",
      },
    ],
    bestTimeToVisit:
      "Late September through November for warm 65-75°F days, lower green fees, thinner crowds, and peak fall course conditions. Spring (March-May) is the other prime window.",
    nearestAirport: "MYR — Myrtle Beach International Airport",
    seoKeywords: [
      "myrtle beach golf trip",
      "best golf courses myrtle beach",
      "myrtle beach golf packages",
      "grand strand golf",
      "caledonia golf club",
      "myrtle beach golf vacation",
      "cheap myrtle beach golf",
      "buddy golf trip myrtle beach",
    ],
  },

  // ─────────────────────────────────────────────────────────
  // 3. PINEHURST, NC
  // ─────────────────────────────────────────────────────────
  {
    slug: "pinehurst-nc",
    city: "Pinehurst",
    state: "NC",
    coordinates: { lat: 35.1955, lng: -79.4695 },
    tagline: "The cradle of American golf — a pilgrimage to sand-capped greens and century-old pines",
    flightCode: "GG-PIN",
    stats: {
      coursesCount: 40,
      avgGreenFee: "$80-250",
      bestMonth: "April",
      avgTemp: "68°F",
    },
    courseTiers: [
      {
        tier: "top_tier",
        label: "Top Tier",
        description:
          "Historic championship layouts that have hosted multiple U.S. Opens and define American golf heritage",
        courses: [
          {
            name: "Pinehurst No. 2",
            type: "resort",
            greenFee: "$250-595",
            signatureFeature:
              "Donald Ross's masterwork with crowned, wire-grass-framed greens — host of six U.S. Opens",
            rating: 5,
          },
          {
            name: "Pinehurst No. 4",
            type: "resort",
            greenFee: "$200-350",
            signatureFeature:
              "Gil Hanse redesign channeling Pinehurst's sandy, natural soul with modern strategy",
            rating: 5,
          },
          {
            name: "Mid Pines Inn & Golf Club",
            type: "resort",
            greenFee: "$80-210",
            signatureFeature:
              "Intimate 1921 Donald Ross gem — the best value in the Sandhills for world-class architecture",
            rating: 5,
          },
        ],
      },
      {
        tier: "ole_reliable",
        label: "Ole Reliables",
        description:
          "Excellent Sandhills courses that round out a Pinehurst itinerary without the No. 2 price tag",
        courses: [
          {
            name: "Pine Needles Lodge & Golf Club",
            type: "resort",
            greenFee: "$100-225",
            signatureFeature:
              "Sister property to Mid Pines — another Ross classic that hosted three U.S. Women's Opens",
            rating: 4,
          },
          {
            name: "Pinehurst No. 8",
            type: "resort",
            greenFee: "$150-275",
            signatureFeature:
              "Tom Fazio design named in tribute to the sport's centurions — the resort's most modern layout",
            rating: 4,
          },
          {
            name: "Pinehurst No. 9",
            type: "resort",
            greenFee: "$100-200",
            signatureFeature:
              "Jack Nicklaus design through longleaf pine forests — less famous but beautifully conditioned",
            rating: 4,
          },
        ],
      },
      {
        tier: "hidden_gem",
        label: "Hidden Gems",
        description:
          "Sandhills sleepers with character and value that surprise even seasoned Pinehurst visitors",
        courses: [
          {
            name: "Tobacco Road Golf Club",
            type: "public",
            greenFee: "$100-130",
            signatureFeature:
              "Mike Strantz's wild, polarizing links through reclaimed sand quarries — love it or hate it, you won't forget it",
            rating: 4,
          },
          {
            name: "Talamore Golf Resort",
            type: "resort",
            greenFee: "$60-120",
            signatureFeature:
              "Rees Jones design with llama caddies (yes, real llamas) and solid Sandhills conditioning",
            rating: 3,
          },
          {
            name: "Southern Pines Golf Club",
            type: "public",
            greenFee: "$30-60",
            signatureFeature:
              "Recently restored 1906 Donald Ross course — criminally affordable for the architecture",
            rating: 4,
          },
        ],
      },
    ],
    neighborhoods: [
      {
        name: "Pinehurst Village",
        vibe: "New England-style village green with charming shops, brick walkways, and a timeless resort atmosphere",
        priceRange: "$$$",
        bestFor: "Staying on-property at Pinehurst Resort for the full immersive experience",
      },
      {
        name: "Southern Pines",
        vibe: "Small-town downtown with independent restaurants, coffee shops, and a growing craft scene",
        priceRange: "$$",
        bestFor: "A walkable base with more dining variety and a less resort-centric feel",
      },
      {
        name: "Aberdeen",
        vibe: "Quiet residential town with historic charm and budget-friendly accommodation options",
        priceRange: "$",
        bestFor: "Value-oriented stays with easy access to all Sandhills courses",
      },
    ],
    dining: [
      {
        name: "The 1895 Grille",
        cuisine: "New American fine dining",
        priceRange: "$$$$",
        highlight:
          "Pinehurst Resort's flagship restaurant with Carolina farm-sourced ingredients in an elegant wood-paneled room",
      },
      {
        name: "Ironwood Cafe",
        cuisine: "American bistro",
        priceRange: "$$",
        highlight:
          "Charming garden patio, refined brunch, and a local favorite for post-round meals in Pinehurst Village",
      },
      {
        name: "The Drum & Quill Public House",
        cuisine: "Gastropub",
        priceRange: "$$",
        highlight:
          "Craft cocktails and elevated pub fare in a bookshop-meets-bar atmosphere on the village green",
      },
      {
        name: "Dugan's Pub",
        cuisine: "Irish pub",
        priceRange: "$$",
        highlight:
          "Proper pints and comfort food at Market Square — the unofficial 19th hole for visiting golfers",
      },
    ],
    breweries: [
      {
        name: "Pinehurst Brewing Company",
        style: "Sandhills ales and seasonal brews",
        highlight:
          "The area's most beloved brewery with a laid-back taproom and rotating taps near the village",
      },
      {
        name: "Southern Pines Brewing Company",
        style: "Hop-forward IPAs and farmhouse ales",
        highlight:
          "Downtown Southern Pines taproom with food trucks and live music on weekends",
      },
    ],
    activities: [
      {
        name: "Pinehurst Resort Spa",
        category: "wellness",
        description:
          "Full-service spa with signature Carolina-inspired treatments — the perfect recovery after 36 holes",
      },
      {
        name: "The Pinehurst Putting Course (Thistle Dhu)",
        category: "culture",
        description:
          "Whimsical 18-hole putting course on the resort grounds — a must-do tradition for any Pinehurst visit",
      },
      {
        name: "Weymouth Woods Sandhills Nature Preserve",
        category: "outdoors",
        description:
          "900 acres of longleaf pine savanna with hiking trails, wildlife viewing, and the oldest trees in Moore County",
      },
      {
        name: "Seagrove Pottery Trail",
        category: "culture",
        description:
          "Day trip to America's handmade pottery capital — 80+ studios within 30 minutes of Pinehurst",
      },
    ],
    bestTimeToVisit:
      "March through May and September through November for 60-80°F temperatures and peak course conditions. Spring azalea season is particularly scenic. Summer can be hot and humid.",
    nearestAirport: "RDU — Raleigh-Durham International Airport (70 miles)",
    seoKeywords: [
      "pinehurst golf trip",
      "pinehurst no 2 green fees",
      "best golf pinehurst",
      "sandhills nc golf",
      "pinehurst golf packages",
      "tobacco road golf",
      "mid pines golf",
      "donald ross golf courses",
    ],
  },

  // ─────────────────────────────────────────────────────────
  // 4. BANDON DUNES, OR
  // ─────────────────────────────────────────────────────────
  {
    slug: "bandon-dunes-or",
    city: "Bandon",
    state: "OR",
    coordinates: { lat: 43.1868, lng: -124.4087 },
    tagline: "Links golf as nature intended — windswept oceanside holes on the rugged Oregon coast",
    flightCode: "GG-BDN",
    stats: {
      coursesCount: 7,
      avgGreenFee: "$150-375",
      bestMonth: "July",
      avgTemp: "62°F",
    },
    courseTiers: [
      {
        tier: "top_tier",
        label: "Top Tier",
        description:
          "World-ranked links courses perched on Pacific cliffs — this is what you traveled to Bandon for",
        courses: [
          {
            name: "Pacific Dunes",
            type: "resort",
            greenFee: "$175-375",
            signatureFeature:
              "Tom Doak's #1 public course in America with oceanside holes along 100-foot bluffs",
            rating: 5,
          },
          {
            name: "Sheep Ranch",
            type: "resort",
            greenFee: "$175-375",
            signatureFeature:
              "13 holes with ocean views on a clifftop layout with no defined rough — play it how you see it",
            rating: 5,
          },
          {
            name: "Bandon Dunes",
            type: "resort",
            greenFee: "$175-375",
            signatureFeature:
              "The original David McLay Kidd course that started it all — Scottish links transplanted to Oregon",
            rating: 5,
          },
        ],
      },
      {
        tier: "ole_reliable",
        label: "Ole Reliables",
        description:
          "More outstanding resort courses that complete the Bandon experience",
        courses: [
          {
            name: "Old Macdonald",
            type: "resort",
            greenFee: "$175-375",
            signatureFeature:
              "Tom Doak & Jim Urbina tribute to C.B. Macdonald with bold template holes and massive greens",
            rating: 5,
          },
          {
            name: "Bandon Trails",
            type: "resort",
            greenFee: "$175-375",
            signatureFeature:
              "Coore & Crenshaw design through coastal forest and meadows — the inland complement to the ocean courses",
            rating: 4,
          },
        ],
      },
      {
        tier: "hidden_gem",
        label: "Hidden Gems",
        description:
          "Short courses and off-property plays for variety between your championship rounds",
        courses: [
          {
            name: "Bandon Preserve",
            type: "resort",
            greenFee: "$100-150",
            signatureFeature:
              "13-hole par-3 course with ocean views — proceeds go to the Wild Rivers Coast Alliance",
            rating: 4,
          },
          {
            name: "Shorty's",
            type: "resort",
            greenFee: "$50-100",
            signatureFeature:
              "Lit-up par-3 course open until dark — the perfect way to settle bets on your last evening",
            rating: 3,
          },
          {
            name: "Bandon Crossings Golf Course",
            type: "public",
            greenFee: "$40-89",
            signatureFeature:
              "The local public course — a solid Grant Bennett design through cranberry bogs at a fraction of resort prices",
            rating: 3,
          },
        ],
      },
    ],
    neighborhoods: [
      {
        name: "Bandon Dunes Resort",
        vibe: "Self-contained golf commune on the bluffs — lodges, restaurants, and fire pits with Pacific sunsets",
        priceRange: "$$$$",
        bestFor: "The full immersive experience — you never need to leave the property",
      },
      {
        name: "Old Town Bandon",
        vibe: "Small coastal village with art galleries, seafood shacks, and a working harbor",
        priceRange: "$",
        bestFor: "Fresh crab, local color, and a break from the resort bubble",
      },
      {
        name: "Bandon Beach / Face Rock",
        vibe: "Dramatic sea stacks and beach trails with a wild, untamed Pacific coastline",
        priceRange: "$",
        bestFor: "Morning walks and photography before your tee time",
      },
    ],
    dining: [
      {
        name: "The Gallery at Bandon Dunes",
        cuisine: "Pacific Northwest",
        priceRange: "$$$",
        highlight:
          "Resort flagship with panoramic views of Pacific Dunes — Oregon lamb, Dungeness crab, and local wines",
      },
      {
        name: "Ghost Tree Grill",
        cuisine: "Steakhouse & raw bar",
        priceRange: "$$$",
        highlight:
          "On-property steakhouse inspired by Pacific Northwest bounty with craft cocktails and a raw bar",
      },
      {
        name: "Tony's Crab Shack",
        cuisine: "Seafood",
        priceRange: "$",
        highlight:
          "No-frills harbor shack famous for whole Dungeness crab, clam chowder, and fish & chips",
      },
      {
        name: "The Wheelhouse Restaurant",
        cuisine: "Coastal American",
        priceRange: "$$",
        highlight:
          "Bandon locals' favorite for fresh seafood with waterfront views from the Crowsnest Lounge upstairs",
      },
      {
        name: "Bandon Baking Co. & Deli",
        cuisine: "Bakery & deli",
        priceRange: "$",
        highlight:
          "Scratch-made cinnamon rolls, pastries, and soups in Old Town — essential pre-round fuel",
      },
    ],
    breweries: [
      {
        name: "Bandon Rain Cider Co.",
        style: "Hard ciders from local apples",
        highlight:
          "Small-batch Oregon cider crafted from Bandon-area orchards — the local alternative to craft beer",
      },
      {
        name: "7 Devils Brewing Co.",
        style: "Pacific Northwest ales and stouts",
        highlight:
          "Coos Bay taproom (30 min north) with ocean-inspired brews, pub food, and a dog-friendly patio",
      },
    ],
    activities: [
      {
        name: "Face Rock Beach Walk",
        category: "outdoors",
        description:
          "Iconic sea stack formations, tide pools, and driftwood-strewn beaches — dramatic Oregon coast at its best",
      },
      {
        name: "Bandon Marsh National Wildlife Refuge",
        category: "outdoors",
        description:
          "Birding and kayaking through tidal marshlands at the mouth of the Coquille River",
      },
      {
        name: "Coquille River Lighthouse",
        category: "culture",
        description:
          "Photogenic 1896 lighthouse on the Bandon jetty — short walk from Old Town with interpretive exhibits",
      },
      {
        name: "McKay's Library Lounge",
        category: "nightlife",
        description:
          "On-property speakeasy with locally sourced cocktails, spirits, and a cozy post-round atmosphere",
      },
    ],
    bestTimeToVisit:
      "June through September for the driest weather with highs in the low 60s. July and August are prime, but bring layers — wind and fog are part of the Bandon experience year-round.",
    nearestAirport: "OTH — Southwest Oregon Regional Airport (25 miles, limited service) or EUG — Eugene Airport (170 miles)",
    seoKeywords: [
      "bandon dunes golf trip",
      "bandon dunes green fees",
      "pacific dunes tee times",
      "best links golf america",
      "bandon dunes resort",
      "oregon golf trip",
      "sheep ranch golf",
      "bucket list golf trips",
    ],
  },

  // ─────────────────────────────────────────────────────────
  // 5. PEBBLE BEACH, CA
  // ─────────────────────────────────────────────────────────
  {
    slug: "pebble-beach-ca",
    city: "Pebble Beach",
    state: "CA",
    coordinates: { lat: 36.5725, lng: -121.9486 },
    tagline: "The most iconic address in golf — cliffside holes above the crashing Pacific on the Monterey Peninsula",
    flightCode: "GG-PBL",
    stats: {
      coursesCount: 15,
      avgGreenFee: "$200-675",
      bestMonth: "September",
      avgTemp: "65°F",
    },
    courseTiers: [
      {
        tier: "top_tier",
        label: "Top Tier",
        description:
          "Three legendary Pebble Beach Resorts courses that belong on every golfer's lifetime list",
        courses: [
          {
            name: "Pebble Beach Golf Links",
            type: "resort",
            greenFee: "$625-675",
            signatureFeature:
              "The par-3 7th and par-5 18th along Carmel Bay — host of six U.S. Opens and the AT&T Pro-Am",
            rating: 5,
          },
          {
            name: "Spyglass Hill Golf Course",
            type: "resort",
            greenFee: "$475-525",
            signatureFeature:
              "Robert Trent Jones Sr. design opening through dunes above the Pacific before diving into Del Monte Forest",
            rating: 5,
          },
          {
            name: "The Links at Spanish Bay",
            type: "resort",
            greenFee: "$300-350",
            signatureFeature:
              "Scottish-style links through coastal dunes with a lone bagpiper at sunset — pure atmosphere",
            rating: 5,
          },
        ],
      },
      {
        tier: "ole_reliable",
        label: "Ole Reliables",
        description:
          "Outstanding Monterey Peninsula courses that offer world-class golf at a more accessible price",
        courses: [
          {
            name: "Poppy Hills Golf Course",
            type: "public",
            greenFee: "$150-275",
            signatureFeature:
              "NCGA's home course — Robert Trent Jones Jr. design through the Del Monte Forest with PGA Tour pedigree",
            rating: 4,
          },
          {
            name: "Pacific Grove Golf Links",
            type: "public",
            greenFee: "$55-65",
            signatureFeature:
              "The 'Poor Man's Pebble Beach' — oceanside back nine with Monterey Bay views at municipal prices",
            rating: 4,
          },
          {
            name: "Bayonet & Black Horse (Bayonet)",
            type: "public",
            greenFee: "$80-160",
            signatureFeature:
              "Military heritage course in Seaside with ocean views and Gen. Robert B. McClure's notoriously tough design",
            rating: 4,
          },
        ],
      },
      {
        tier: "hidden_gem",
        label: "Hidden Gems",
        description:
          "Peninsula sleepers that deliver memorable rounds without the resort prices",
        courses: [
          {
            name: "Del Monte Golf Course",
            type: "resort",
            greenFee: "$125-175",
            signatureFeature:
              "The oldest continuously operating course west of the Mississippi (1897) — quiet charm and playable design",
            rating: 3,
          },
          {
            name: "Quail Lodge Golf Club",
            type: "resort",
            greenFee: "$100-175",
            signatureFeature:
              "Carmel Valley retreat with mountain views and a serene, uncrowded feel away from the coastal fog",
            rating: 3,
          },
        ],
      },
    ],
    neighborhoods: [
      {
        name: "Carmel-by-the-Sea",
        vibe: "Storybook village with no street addresses, European bakeries, and art galleries in every cottage",
        priceRange: "$$$$",
        bestFor: "Couples who want fine dining, wine tasting, and the most charming town on the California coast",
      },
      {
        name: "Monterey / Cannery Row",
        vibe: "Historic waterfront with seafood restaurants, the world-class aquarium, and a working wharf",
        priceRange: "$$$",
        bestFor: "Non-golf activities and family-friendly attractions between rounds",
      },
      {
        name: "Pacific Grove",
        vibe: "Victorian-era residential charm with monarch butterflies, lighthouse walks, and quiet beaches",
        priceRange: "$$",
        bestFor: "A more affordable, low-key base within minutes of all the courses",
      },
      {
        name: "Carmel Valley",
        vibe: "Sun-drenched wine country with tasting rooms, ranch estates, and Michelin-starred dining",
        priceRange: "$$$",
        bestFor: "Wine enthusiasts wanting sunshine (Carmel Valley averages 280 sunny days)",
      },
    ],
    dining: [
      {
        name: "Aubergine at L'Auberge Carmel",
        cuisine: "California fine dining",
        priceRange: "$$$$",
        highlight:
          "Two Michelin stars — the only multi-starred restaurant between SF and LA with a tasting menu sourced hyper-locally",
      },
      {
        name: "Hog's Breath Inn",
        cuisine: "American grill",
        priceRange: "$$",
        highlight:
          "Clint Eastwood's former Carmel haunt with a stone courtyard, oak-fired steaks, and old Hollywood charm",
      },
      {
        name: "Passionfish",
        cuisine: "Sustainable seafood",
        priceRange: "$$$",
        highlight:
          "Pacific Grove institution committed to sustainable sourcing with a legendary wine list at fair markups",
      },
      {
        name: "The Bench at The Lodge at Pebble Beach",
        cuisine: "Coastal American",
        priceRange: "$$$$",
        highlight:
          "Floor-to-ceiling views of the 18th green and Carmel Bay — the definitive post-round dining experience",
      },
      {
        name: "Cultura Comida y Bebida",
        cuisine: "Oaxacan Mexican",
        priceRange: "$$",
        highlight:
          "Carmel's vibrant Oaxacan kitchen with house-made moles, mezcal cocktails, and a colorful atmosphere",
      },
    ],
    breweries: [
      {
        name: "Alvarado Street Brewery",
        style: "West Coast IPAs and sours",
        highlight:
          "World Beer Cup gold medalist with a downtown Monterey taproom and a rotating menu of creative brews",
      },
      {
        name: "Peter B's Brewpub",
        style: "Classic American craft ales",
        highlight:
          "Monterey's oldest brewpub at the Portola Hotel — casual spot with solid IPAs and a game-day atmosphere",
      },
      {
        name: "Dust Bowl Brewing Co.",
        style: "Central Valley ales and barrel-aged beers",
        highlight:
          "Monterey tasting room from the Turlock-based brewery with hop-heavy IPAs and a relaxed patio",
      },
    ],
    activities: [
      {
        name: "17-Mile Drive",
        category: "outdoors",
        description:
          "Legendary scenic drive through Pebble Beach with Lone Cypress, Bird Rock, and crashing surf at every turn",
      },
      {
        name: "Monterey Bay Aquarium",
        category: "culture",
        description:
          "World-renowned aquarium on Cannery Row with kelp forests, sea otters, and open ocean exhibits",
      },
      {
        name: "Carmel-by-the-Sea Wine Walk",
        category: "food_tour",
        description:
          "Stroll through a dozen tasting rooms in village cottages — Monterey County produces more wine than Napa",
      },
      {
        name: "Point Lobos State Natural Reserve",
        category: "outdoors",
        description:
          "The 'crown jewel of the state park system' — tide pools, sea lions, cypress groves, and whale watching",
      },
      {
        name: "Refuge Spa",
        category: "wellness",
        description:
          "Outdoor thermal cycle spa in Carmel Valley with hot pools, cold plunges, and steam rooms set in a eucalyptus grove",
      },
    ],
    bestTimeToVisit:
      "August through October for the warmest, clearest weather (65-75°F) after the summer fog clears. September is ideal. Spring is beautiful but foggy mornings are common.",
    nearestAirport: "MRY — Monterey Regional Airport (5 miles) or SJC — San Jose International Airport (80 miles)",
    seoKeywords: [
      "pebble beach golf trip",
      "pebble beach green fees",
      "spyglass hill tee times",
      "monterey peninsula golf",
      "pebble beach golf packages",
      "carmel golf vacation",
      "bucket list golf courses",
      "best golf courses california",
    ],
  },

  // ─────────────────────────────────────────────────────────
  // 6. AUSTIN, TX
  // ─────────────────────────────────────────────────────────
  {
    slug: "austin-tx",
    city: "Austin",
    state: "TX",
    coordinates: { lat: 30.2672, lng: -97.7431 },
    tagline: "Hill Country vibes meet live music capital — Texas golf with craft beer and brisket on the side",
    flightCode: "GG-AUS",
    stats: {
      coursesCount: 50,
      avgGreenFee: "$50-175",
      bestMonth: "March",
      avgTemp: "72°F",
    },
    courseTiers: [
      {
        tier: "top_tier",
        label: "Top Tier",
        description:
          "Premium Hill Country courses with elevation changes, lake views, and resort-caliber conditioning",
        courses: [
          {
            name: "Omni Barton Creek — Fazio Foothills Course",
            type: "resort",
            greenFee: "$185-285",
            signatureFeature:
              "Tom Fazio's dramatic Hill Country layout with canyon carries and waterfall backdrops — host of the PGA Professional Championship",
            rating: 5,
          },
          {
            name: "Wolfdancer Golf Club at Hyatt Regency Lost Pines",
            type: "resort",
            greenFee: "$80-150",
            signatureFeature:
              "Colorado River-adjacent resort course through Texas wilderness with wildflower meadows and pecan groves",
            rating: 4,
          },
          {
            name: "Falconhead Golf Club",
            type: "public",
            greenFee: "$70-100",
            signatureFeature:
              "Premium public course on Austin's western edge near Bee Cave with Hill Country elevation and fast greens",
            rating: 4,
          },
        ],
      },
      {
        tier: "ole_reliable",
        label: "Ole Reliables",
        description:
          "Well-maintained public courses that deliver consistently solid rounds at fair prices",
        courses: [
          {
            name: "Avery Ranch Golf Club",
            type: "public",
            greenFee: "$65-85",
            signatureFeature:
              "North Austin favorite with limestone canyon holes and a well-reviewed finishing stretch",
            rating: 4,
          },
          {
            name: "Omni Barton Creek — Coore Crenshaw Course",
            type: "resort",
            greenFee: "$150-235",
            signatureFeature:
              "Minimalist design from the Bandon Dunes architects with natural Hill Country topography and native grasses",
            rating: 4,
          },
          {
            name: "Crystal Falls Golf Club",
            type: "public",
            greenFee: "$45-75",
            signatureFeature:
              "Jack Miller design through Austin hill country with canyon views and excellent value in Leander",
            rating: 3,
          },
        ],
      },
      {
        tier: "hidden_gem",
        label: "Hidden Gems",
        description:
          "Budget-friendly Austin munis and under-the-radar tracks with personality",
        courses: [
          {
            name: "Lions Municipal Golf Course",
            type: "public",
            greenFee: "$22-42",
            signatureFeature:
              "Austin's first public course (1924) — a historic muni beloved by locals with a community-saved legacy",
            rating: 3,
          },
          {
            name: "Hancock Golf Course",
            type: "public",
            greenFee: "$14-25",
            signatureFeature:
              "9-hole gem and the oldest course in Texas (1899) — walk-on, no-frills golf in central Austin",
            rating: 3,
          },
          {
            name: "Plum Creek Golf Course",
            type: "public",
            greenFee: "$35-65",
            signatureFeature:
              "Kyle, TX sleeper with wetland-routed holes — one of the best values within 30 minutes of downtown",
            rating: 3,
          },
        ],
      },
    ],
    neighborhoods: [
      {
        name: "South Congress (SoCo)",
        vibe: "Eclectic boutiques, food trucks, vintage shops, and the iconic 'I Love You So Much' mural",
        priceRange: "$$$",
        bestFor: "Walkable Austin culture with live music, cocktail bars, and people-watching",
      },
      {
        name: "Rainey Street",
        vibe: "Bungalow-turned-bar district with backyard patios, food trucks, and a social, late-night scene",
        priceRange: "$$",
        bestFor: "Post-round hangs with craft cocktails and a relaxed, Austin-weird energy",
      },
      {
        name: "East Austin",
        vibe: "Creative district with murals, mezcal bars, craft breweries, and Austin's hottest new restaurants",
        priceRange: "$$",
        bestFor: "Foodies and craft beer enthusiasts looking for the newest openings",
      },
      {
        name: "Lakeway / Bee Cave",
        vibe: "Lake Travis suburb with hill country views, resort living, and proximity to top courses",
        priceRange: "$$$",
        bestFor: "Staying close to Barton Creek and Falconhead while enjoying Lake Travis sunsets",
      },
    ],
    dining: [
      {
        name: "Franklin Barbecue",
        cuisine: "Texas BBQ",
        priceRange: "$$",
        highlight:
          "The most famous barbecue in Texas — brisket worth the legendary line, or order ahead online",
      },
      {
        name: "Uchi",
        cuisine: "Japanese",
        priceRange: "$$$",
        highlight:
          "James Beard Award-winning chef Tyson Cole's flagship — inventive Japanese with local Texas ingredients",
      },
      {
        name: "Lenoir",
        cuisine: "Hot-weather food",
        priceRange: "$$$",
        highlight:
          "South Austin gem serving globally-inspired 'hot-weather food' on a magical backyard wine garden patio",
      },
      {
        name: "Eldorado Cafe",
        cuisine: "Tex-Mex",
        priceRange: "$$",
        highlight:
          "Neighborhood Tex-Mex institution with house-made tortillas, enchiladas, and a warm, welcoming vibe",
      },
      {
        name: "Loro",
        cuisine: "Asian smokehouse",
        priceRange: "$$",
        highlight:
          "Tyson Cole and Aaron Franklin collaboration — Thai-inspired dishes meet Texas smoked meats on a sprawling patio",
      },
    ],
    breweries: [
      {
        name: "Zilker Brewing Company",
        style: "Hill Country ales and lagers",
        highlight:
          "East Austin taproom with a spacious patio, food trucks, and their flagship Marco IPA",
      },
      {
        name: "Lazarus Brewing",
        style: "Latin-inspired ales and stouts",
        highlight:
          "East Side brewery with a taqueria inside — pair a Mexican lager with breakfast tacos",
      },
      {
        name: "Austin Beerworks",
        style: "Bold IPAs and craft lagers",
        highlight:
          "North Austin staple known for their Pearl Snap Pils and Fire Eagle IPA with a lively beer hall",
      },
    ],
    activities: [
      {
        name: "Barton Springs Pool",
        category: "outdoors",
        description:
          "68°F spring-fed swimming hole in the heart of Zilker Park — the essential Austin cool-down after a hot round",
      },
      {
        name: "South Congress Live Music",
        category: "nightlife",
        description:
          "Catch live sets at iconic venues like the Continental Club, C-Boy's Heart & Soul, or the Saxon Pub",
      },
      {
        name: "Lady Bird Lake Kayaking",
        category: "outdoors",
        description:
          "Paddle through downtown Austin on the Colorado River with skyline views and bat bridge sightings at dusk",
      },
      {
        name: "Mount Bonnell",
        category: "outdoors",
        description:
          "Quick 100-step climb to the highest point in Austin with panoramic Lake Austin and Hill Country views",
      },
      {
        name: "Jester King Brewery",
        category: "food_tour",
        description:
          "Hill country farmhouse brewery 30 minutes west of Austin with wild ales, pizza, and a sprawling pastoral setting",
      },
    ],
    bestTimeToVisit:
      "March through May for wildflower season, SXSW energy, and warm but not scorching 70-85°F days. October and November are equally great with cooler temps and fall color.",
    nearestAirport: "AUS — Austin-Bergstrom International Airport",
    seoKeywords: [
      "austin golf trip",
      "best golf courses austin",
      "austin golf vacation",
      "texas hill country golf",
      "barton creek golf",
      "austin golf packages",
      "austin bachelor party golf",
      "things to do austin golf",
    ],
  },

  // ─────────────────────────────────────────────────────────
  // 7. SAN DIEGO, CA
  // ─────────────────────────────────────────────────────────
  {
    slug: "san-diego-ca",
    city: "San Diego",
    state: "CA",
    coordinates: { lat: 32.7157, lng: -117.1611 },
    tagline: "Year-round sunshine, ocean-view munis, and craft beer perfection — golf paradise without the pretense",
    flightCode: "GG-SAN",
    stats: {
      coursesCount: 90,
      avgGreenFee: "$50-250",
      bestMonth: "October",
      avgTemp: "72°F",
    },
    courseTiers: [
      {
        tier: "top_tier",
        label: "Top Tier",
        description:
          "World-famous courses with Pacific Ocean backdrops and U.S. Open pedigree",
        courses: [
          {
            name: "Torrey Pines — South Course",
            type: "public",
            greenFee: "$250-310",
            signatureFeature:
              "Municipal course that hosted two U.S. Opens — ocean-cliff par-3 3rd and the iconic downhill 12th",
            rating: 5,
          },
          {
            name: "Maderas Golf Club",
            type: "public",
            greenFee: "$160-230",
            signatureFeature:
              "Poway hillside layout with dramatic elevation, waterfalls, and conditioning that rivals any private club",
            rating: 5,
          },
          {
            name: "Torrey Pines — North Course",
            type: "public",
            greenFee: "$155-195",
            signatureFeature:
              "Tom Weiskopf renovation with coastal views at roughly half the South Course price — outstanding value",
            rating: 4,
          },
        ],
      },
      {
        tier: "ole_reliable",
        label: "Ole Reliables",
        description:
          "Consistent San Diego courses with views, variety, and solid conditioning year-round",
        courses: [
          {
            name: "The Grand Golf Club at The Grand Del Mar",
            type: "resort",
            greenFee: "$175-275",
            signatureFeature:
              "Tom Fazio design through Los Penasquitos Canyon with a five-star resort experience to match",
            rating: 4,
          },
          {
            name: "Coronado Municipal Golf Course",
            type: "public",
            greenFee: "$40-90",
            signatureFeature:
              "Skyline views of downtown San Diego, Coronado Bridge, and the bay from a walkable seaside muni",
            rating: 4,
          },
          {
            name: "Steele Canyon Golf Club",
            type: "public",
            greenFee: "$60-110",
            signatureFeature:
              "Three nines through dramatic Jamul canyon terrain with boulders, oaks, and mountain views east of the city",
            rating: 4,
          },
          {
            name: "Aviara Golf Club",
            type: "resort",
            greenFee: "$175-295",
            signatureFeature:
              "Arnold Palmer design in Carlsbad with ocean views, lush landscaping, and LPGA Tour history",
            rating: 4,
          },
        ],
      },
      {
        tier: "hidden_gem",
        label: "Hidden Gems",
        description:
          "Local favorites and value plays that punch well above their green fee weight class",
        courses: [
          {
            name: "Balboa Park Golf Course",
            type: "public",
            greenFee: "$30-55",
            signatureFeature:
              "Historic 1915 muni in the heart of Balboa Park with Expo-era character and downtown skyline views",
            rating: 3,
          },
          {
            name: "Encinitas Ranch Golf Course",
            type: "public",
            greenFee: "$60-95",
            signatureFeature:
              "North County coastal course with ocean peeks, excellent conditioning, and a friendly twilight rate",
            rating: 3,
          },
          {
            name: "Mt. Woodson Golf Club",
            type: "public",
            greenFee: "$35-60",
            signatureFeature:
              "Ramona mountain course at 1,500 feet elevation with unique boulder-framed holes and cooler temps",
            rating: 3,
          },
        ],
      },
    ],
    neighborhoods: [
      {
        name: "La Jolla",
        vibe: "Coastal village with sea caves, upscale boutiques, and sunset cocktails above the cove",
        priceRange: "$$$$",
        bestFor: "Staying close to Torrey Pines with beach walks and ocean-view dining",
      },
      {
        name: "Gaslamp Quarter",
        vibe: "Victorian-era downtown blocks packed with rooftop bars, restaurants, and late-night energy",
        priceRange: "$$$",
        bestFor: "Nightlife, group dinners, and the most walkable base in the city",
      },
      {
        name: "Little Italy",
        vibe: "Foodie epicenter with Italian trattorias, craft cocktail bars, and the Saturday farmers market",
        priceRange: "$$$",
        bestFor: "The best food neighborhood in San Diego — dining is the activity here",
      },
      {
        name: "North Park",
        vibe: "Craft beer capital with 30+ tasting rooms, indie coffee shops, and a creative neighborhood buzz",
        priceRange: "$$",
        bestFor: "Beer geeks and anyone who wants the local, non-touristy San Diego experience",
      },
    ],
    dining: [
      {
        name: "Juniper & Ivy",
        cuisine: "New American",
        priceRange: "$$$",
        highlight:
          "Celebrity chef Richard Blais's flagship in Little Italy — inventive dishes in a converted warehouse space",
      },
      {
        name: "Herb & Wood",
        cuisine: "Wood-fired California",
        priceRange: "$$$",
        highlight:
          "Brian Malarkey's Little Italy gem with a soaring dining room, craft cocktails, and a wood-fired menu",
      },
      {
        name: "George's at the Cove",
        cuisine: "Coastal California",
        priceRange: "$$$",
        highlight:
          "Three levels of dining above La Jolla Cove — the Ocean Terrace rooftop has some of the best views in the city",
      },
      {
        name: "Tacos El Gordo",
        cuisine: "Tijuana-style street tacos",
        priceRange: "$",
        highlight:
          "Legendary late-night taco stand in Chula Vista with adobada off the trompo — the best $3 meal in San Diego",
      },
      {
        name: "Crack Shack",
        cuisine: "Fried chicken sandwiches",
        priceRange: "$",
        highlight:
          "Top Chef alum Richard Blais's casual chicken concept in Little Italy with an outdoor bocce court",
      },
      {
        name: "Addison",
        cuisine: "French-Californian fine dining",
        priceRange: "$$$$",
        highlight:
          "San Diego's only two-Michelin-star restaurant in the Fairmont Grand Del Mar — chef William Bradley's tasting menu",
      },
    ],
    breweries: [
      {
        name: "Societe Brewing Company",
        style: "West Coast IPAs and Belgian-inspired ales",
        highlight:
          "Kearny Mesa taproom widely considered the best brewery in San Diego — The Pupil IPA is world-class",
      },
      {
        name: "Pure Project Brewing",
        style: "Hazy IPAs and clean lagers",
        highlight:
          "North Park and Balboa Park locations with adventure-inspired brews and a cult following for their hazies",
      },
      {
        name: "Stone Brewing World Bistro & Gardens — Liberty Station",
        style: "Aggressive hop-forward ales",
        highlight:
          "Acre-wide beer garden in Point Loma with 40+ taps, full restaurant, and the godfather of SD craft beer",
      },
    ],
    activities: [
      {
        name: "La Jolla Sea Caves Kayaking",
        category: "outdoors",
        description:
          "Paddle through the seven sea caves of La Jolla Cove with sea lions, leopard sharks, and crystal-clear water",
      },
      {
        name: "Balboa Park Museums",
        category: "culture",
        description:
          "1,200-acre urban park with 17 museums, the San Diego Zoo, botanical gardens, and Spanish Colonial architecture",
      },
      {
        name: "Sunset Cliffs",
        category: "outdoors",
        description:
          "Point Loma's dramatic oceanfront bluffs — the best free sunset show in Southern California",
      },
      {
        name: "North Park Beer Mile",
        category: "food_tour",
        description:
          "Walk between 10+ craft breweries on 30th Street — San Diego's most concentrated beer corridor",
      },
      {
        name: "Torrey Pines State Natural Reserve",
        category: "outdoors",
        description:
          "Coastal hiking trails through rare Torrey pine groves with clifftop ocean panoramas — right next to the golf course",
      },
    ],
    bestTimeToVisit:
      "September through November for the warmest, clearest weather (72-80°F), lowest humidity, and thinner tourist crowds. San Diego is playable year-round with 260+ sunny days.",
    nearestAirport: "SAN — San Diego International Airport (Lindbergh Field)",
    seoKeywords: [
      "san diego golf trip",
      "torrey pines tee times",
      "best golf courses san diego",
      "san diego golf vacation",
      "torrey pines green fees",
      "san diego golf packages",
      "maderas golf club",
      "california golf trip",
    ],
  },
];
