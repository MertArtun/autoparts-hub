// Affiliate Configuration
const AMAZON_AFFILIATE_TAG = "autopartshub2-20";

/**
 * Append affiliate tag to Amazon URLs.
 * Removes any existing tag and adds the correct one.
 */
function appendAmazonTag(url) {
  try {
    const parsed = new URL(url);
    parsed.searchParams.delete("tag");
    parsed.searchParams.set("tag", AMAZON_AFFILIATE_TAG);
    return parsed.toString();
  } catch {
    return url;
  }
}

// Amazon Products Data
const amazonProducts = [
    {
        id: 1,
        title: "Bosch ICON Windshield Wiper Blades",
        icon: "",
        image: "https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=800&h=600&fit=crop",
        price: "$29.99",
        rating: "⭐⭐⭐⭐⭐ (4.5/5)",
        prime: true,
        description: "Premium beam wiper blades with all-weather performance. Fits most vehicles.",
        amazonLink: "https://www.amazon.com/s?k=bosch+icon+wiper+blades"
    },
    {
        id: 2,
        title: "Mobil 1 Full Synthetic Motor Oil",
        icon: "",
        image: "https://images.unsplash.com/photo-1615906655593-ad0386982a0f?w=800&h=600&fit=crop",
        price: "$49.99",
        rating: "⭐⭐⭐⭐⭐ (4.8/5)",
        prime: true,
        description: "Advanced full synthetic engine oil for superior engine protection and performance.",
        amazonLink: "https://www.amazon.com/s?k=mobil+1+synthetic+oil"
    },
    {
        id: 3,
        title: "ACDelco Professional AGM Battery",
        icon: "",
        image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&h=600&fit=crop",
        price: "$189.99",
        rating: "⭐⭐⭐⭐⭐ (4.6/5)",
        prime: false,
        description: "High-performance AGM battery with excellent cold-cranking power and durability.",
        amazonLink: "https://www.amazon.com/s?k=acdelco+battery"
    },
    {
        id: 4,
        title: "Wagner QuickStop Brake Pads",
        icon: "",
        image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=600&fit=crop",
        price: "$39.99",
        rating: "⭐⭐⭐⭐ (4.3/5)",
        prime: true,
        description: "Premium ceramic brake pads for quiet operation and superior stopping power.",
        amazonLink: "https://www.amazon.com/s?k=wagner+brake+pads"
    },
    {
        id: 5,
        title: "K&N High-Flow Air Filter",
        icon: "",
        image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&h=600&fit=crop",
        price: "$54.99",
        rating: "⭐⭐⭐⭐⭐ (4.7/5)",
        prime: true,
        description: "Washable, reusable air filter designed to increase horsepower and acceleration.",
        amazonLink: "https://www.amazon.com/s?k=k%26n+air+filter"
    },
    {
        id: 6,
        title: "Rain-X Original Glass Treatment",
        icon: "",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
        price: "$9.99",
        rating: "⭐⭐⭐⭐⭐ (4.6/5)",
        prime: true,
        description: "Water repellent treatment for improved visibility and safer driving in rain.",
        amazonLink: "https://www.amazon.com/s?k=rain-x+glass+treatment"
    },
    {
        id: 7,
        title: "Optima RedTop Starting Battery",
        icon: "",
        image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&h=600&fit=crop",
        price: "$279.99",
        rating: "⭐⭐⭐⭐⭐ (4.7/5)",
        prime: false,
        description: "Premium AGM battery with exceptional starting power and long service life.",
        amazonLink: "https://www.amazon.com/s?k=optima+redtop+battery"
    },
    {
        id: 8,
        title: "Michelin Defender All-Season Tire",
        icon: "",
        image: "https://images.unsplash.com/photo-1606577924006-27d39b132ae2?w=800&h=600&fit=crop",
        price: "$159.99",
        rating: "⭐⭐⭐⭐⭐ (4.8/5)",
        prime: false,
        description: "Premium all-season tire with excellent tread life and all-weather traction.",
        amazonLink: "https://www.amazon.com/s?k=michelin+defender+tire"
    }
];

// Blog Posts Data
const blogPosts = [
    {
        id: 1,
        title: "10 Essential Car Maintenance Tips Every Owner Should Know",
        category: "maintenance",
        date: "January 15, 2026",
        author: "Mike Johnson",
        icon: "",
        image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=600&fit=crop",
        excerpt: "Regular maintenance keeps your car running smoothly and prevents costly repairs. Learn the most important tasks you should never skip.",
        content: `
            <h3>Introduction: Why Regular Maintenance is Your Best Investment</h3>
            <p>When it comes to car ownership, preventive maintenance isn't just a recommendation—it's an investment that pays dividends in reliability, safety, and long-term cost savings. Studies show that properly maintained vehicles can last well over 200,000 miles, while neglected cars often fail prematurely, leaving owners with expensive repair bills and unexpected breakdowns.</p>
            
            <p>The automotive industry has evolved tremendously, but the fundamentals of car care remain constant. Whether you're driving a brand-new luxury vehicle or a trusty 10-year-old sedan, these essential maintenance practices will keep your car performing at its best. Let's dive into the comprehensive guide every car owner needs.</p>
            
            <h3>1. Oil Changes: The Lifeblood of Your Engine</h3>
            <p>Engine oil performs multiple critical functions: it lubricates moving parts, reduces friction, carries away heat, and suspends contaminants. Over time, oil breaks down and becomes contaminated with dirt, metal particles, and combustion byproducts, losing its effectiveness.</p>
            
            <p><strong>Recommended Interval:</strong> Modern vehicles with synthetic oil can often go 7,500-10,000 miles between changes, while conventional oil requires changes every 3,000-5,000 miles. Always consult your owner's manual for manufacturer-specific recommendations.</p>
            
            <p><strong>What Happens If You Skip It:</strong> Dirty oil can't lubricate properly, leading to increased engine wear, overheating, and eventually catastrophic engine failure. A $50 oil change can prevent a $5,000 engine replacement.</p>
            
            <p><strong>Pro Tip:</strong> Keep a maintenance log and always use the oil grade specified in your owner's manual. Consider upgrading to synthetic oil for better protection, especially in extreme temperatures.</p>
            
            <h3>2. Tire Pressure: The Foundation of Safe Driving</h3>
            <p>Tire pressure affects everything from fuel economy to handling to tire longevity. Yet, it's one of the most overlooked aspects of car maintenance. According to the National Highway Traffic Safety Administration, underinflated tires contribute to thousands of accidents annually.</p>
            
            <p><strong>How to Check:</strong> Use a quality tire pressure gauge when tires are cold (before driving or at least 3 hours after driving). The recommended PSI is found on a sticker inside the driver's door jamb, not on the tire sidewall (which shows maximum pressure).</p>
            
            <p><strong>The Cost of Neglect:</strong> Underinflated tires by just 10 PSI can reduce fuel economy by 3%, cause uneven wear, and increase the risk of blowouts. Overinflated tires create a harsh ride and wear the center tread prematurely.</p>
            
            <p><strong>Seasonal Considerations:</strong> Tire pressure drops about 1 PSI for every 10°F decrease in temperature. Check more frequently during seasonal transitions.</p>
            
            <h3>3. Brake System Inspection: Your Safety Depends On It</h3>
            <p>Brakes are your vehicle's most critical safety system. Unlike engine problems that might leave you stranded, brake failure can be catastrophic. Understanding the warning signs can save your life.</p>
            
            <p><strong>Warning Signs:</strong></p>
            <ul>
                <li><strong>Squealing:</strong> Often caused by wear indicators—thin metal strips designed to make noise when pads are getting low</li>
                <li><strong>Grinding:</strong> Metal-on-metal contact means you've worn through the pads completely and are damaging rotors</li>
                <li><strong>Pulsating pedal:</strong> Indicates warped rotors, often from overheating</li>
                <li><strong>Soft pedal:</strong> Could mean air in the brake lines or a leak in the hydraulic system</li>
                <li><strong>Pulling to one side:</strong> Suggests uneven brake wear or a stuck caliper</li>
            </ul>
            
            <p><strong>Maintenance Schedule:</strong> Have brakes inspected every 12,000 miles. Brake pads typically last 25,000-70,000 miles depending on driving style, terrain, and pad material. Rotors may need resurfacing or replacement every 50,000-70,000 miles.</p>
            
            <p><strong>Cost Perspective:</strong> Replacing brake pads costs $150-$300 per axle. Ignoring the problem until rotors are damaged can double or triple that cost.</p>
            
            <h3>4. Air Filter Replacement: Let Your Engine Breathe</h3>
            <p>Your engine needs a precise mixture of air and fuel to run efficiently. The air filter prevents dirt, debris, and contaminants from entering the engine while allowing maximum airflow.</p>
            
            <p><strong>Engine Air Filter:</strong> Inspect every oil change and replace every 12,000-15,000 miles, or sooner if you drive in dusty conditions. A clogged air filter can reduce fuel economy by up to 10% and decrease acceleration performance.</p>
            
            <p><strong>Cabin Air Filter:</strong> Often overlooked, this filter cleans the air entering your vehicle's interior. Replace annually or when you notice reduced HVAC airflow or musty odors. This is especially important for allergy sufferers.</p>
            
            <p><strong>DIY Tip:</strong> Both filters are typically easy to replace yourself, saving $20-$40 in labor costs. Your owner's manual shows exactly where they're located.</p>
            
            <h3>5. Battery Care: Avoid Unexpected Failures</h3>
            <p>Car batteries typically last 3-5 years, but extreme temperatures, short trips, and electrical drain can shorten their lifespan significantly.</p>
            
            <p><strong>Regular Checks:</strong> Inspect terminals monthly for corrosion (white or greenish deposits). Clean with a wire brush and baking soda solution. Ensure connections are tight—loose connections can prevent starting and damage the alternator.</p>
            
            <p><strong>Testing:</strong> Have your battery tested annually after it's 3 years old. Most auto parts stores offer free testing. A voltmeter should read 12.6 volts or higher with the engine off.</p>
            
            <p><strong>Extend Battery Life:</strong> Take longer drives occasionally to fully recharge the battery, avoid leaving accessories on with the engine off, and consider a battery tender if the vehicle sits for extended periods.</p>
            
            <h3>6. Fluid Levels: The Unsung Heroes</h3>
            <p>Beyond oil, your car relies on several fluids that require periodic checking and replacement:</p>
            
            <p><strong>Coolant/Antifreeze:</strong> Prevents overheating and freezing. Flush and replace every 30,000-50,000 miles. Never open the radiator cap when hot!</p>
            
            <p><strong>Transmission Fluid:</strong> Lubricates transmission components. Check level monthly (consult manual for procedure). Some transmissions are "sealed for life," but changing fluid at 60,000 miles can extend transmission life.</p>
            
            <p><strong>Power Steering Fluid:</strong> Ensures smooth steering. Check monthly and top off if low. Difficulty turning could indicate a leak.</p>
            
            <p><strong>Brake Fluid:</strong> Transfers hydraulic pressure. Should be flushed every 2-3 years as it absorbs moisture over time, reducing effectiveness.</p>
            
            <h3>7. Lights and Electrical System: Visibility and Safety</h3>
            <p>Test all lights monthly: headlights (low and high beam), turn signals, brake lights, reverse lights, and license plate lights. Replace bulbs in pairs for even illumination. Many modern vehicles require professional replacement due to complex headlight assemblies.</p>
            
            <h3>8. Windshield Wipers: Clear Vision in Any Weather</h3>
            <p>Replace wiper blades every 6-12 months or when they start streaking. Good visibility is crucial for safe driving. Consider beam-style blades for better performance and winter blades if you live in snowy climates.</p>
            
            <h3>9. Belts and Hoses: Prevent Breakdown</h3>
            <p>Inspect belts for cracks, fraying, or glazing. The serpentine belt drives critical components like the alternator, power steering pump, and A/C compressor. Replacement typically occurs at 60,000-100,000 miles. Check hoses for cracks, bulges, or soft spots. Failure can lead to overheating and engine damage.</p>
            
            <h3>10. Regular Inspections: Professional Eyes on Your Vehicle</h3>
            <p>Even with diligent DIY maintenance, have your vehicle professionally inspected annually. Mechanics can spot issues you might miss: worn suspension components, exhaust leaks, fluid leaks, and other problems that could become expensive if ignored.</p>
            
            <h3>Creating Your Maintenance Schedule</h3>
            <p>Document every service in a maintenance log. Many apps can track this digitally and send reminders. Your owner's manual contains a detailed maintenance schedule—follow it religiously.</p>
            
            <h3>The Bottom Line: Prevention vs. Repair</h3>
            <p>Regular maintenance isn't glamorous or exciting, but it's the difference between a reliable vehicle and constant breakdowns. A comprehensive annual maintenance program costs $500-$1,000 but can prevent repairs costing thousands. More importantly, it ensures your safety and the safety of your passengers.</p>
            
            <p>Remember: the most expensive car repair is the one you could have prevented. Take care of your car, and it will take care of you for hundreds of thousands of miles.</p>
        `
    },
    {
        id: 2,
        title: "Understanding Your Car's Brake System: A Complete Guide",
        category: "parts",
        date: "January 12, 2026",
        author: "Sarah Martinez",
        icon: "",
        image: "https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=800&h=600&fit=crop",
        excerpt: "Brake systems are complex but essential for your safety. Discover how they work and what components you need to monitor.",
        content: `
            <h3>How Brake Systems Work</h3>
            <p>Your car's brake system is a hydraulic system that uses fluid pressure to multiply the force from your foot on the pedal. Understanding this system helps you maintain it properly.</p>
            
            <h3>Key Components</h3>
            <p><strong>Brake Pads:</strong> These press against the rotors to create friction and slow your vehicle. They wear down over time and need regular replacement.</p>
            
            <p><strong>Rotors:</strong> Metal discs that the brake pads clamp down on. They can become warped or scored and may need resurfacing or replacement.</p>
            
            <p><strong>Calipers:</strong> House the brake pads and use hydraulic pressure to force them against the rotors.</p>
            
            <p><strong>Brake Fluid:</strong> Transfers pressure from the pedal to the calipers. It should be flushed every 2-3 years.</p>
            
            <h3>Warning Signs</h3>
            <ul>
                <li>Squealing or grinding noises</li>
                <li>Vibration when braking</li>
                <li>Soft or spongy brake pedal</li>
                <li>Vehicle pulling to one side</li>
                <li>Warning lights on dashboard</li>
            </ul>
            
            <h3>Maintenance Schedule</h3>
            <p>Inspect brakes every 12,000 miles, replace pads every 25,000-70,000 miles depending on driving style, and flush brake fluid every 2-3 years.</p>
        `
    },
    {
        id: 3,
        title: "Choosing the Right Motor Oil: Synthetic vs Conventional",
        category: "parts",
        date: "January 10, 2026",
        author: "David Chen",
        icon: "",
        image: "https://images.unsplash.com/photo-1615906655593-ad0386982a0f?w=800&h=600&fit=crop",
        excerpt: "Not all motor oils are created equal. Learn the differences between synthetic and conventional oil to make the best choice for your engine.",
        content: `
            <h3>The Great Oil Debate</h3>
            <p>Choosing between synthetic and conventional oil is one of the most common questions car owners face. Let's break down the differences to help you make an informed decision.</p>
            
            <h3>Conventional Oil</h3>
            <p>Derived from crude oil, conventional motor oil has been the standard for decades. It's less expensive but requires more frequent changes.</p>
            <p><strong>Pros:</strong> Lower cost, readily available, suitable for older engines</p>
            <p><strong>Cons:</strong> Breaks down faster, less effective in extreme temperatures</p>
            
            <h3>Synthetic Oil</h3>
            <p>Engineered in laboratories, synthetic oil offers superior performance and longevity. It's designed to withstand extreme conditions better.</p>
            <p><strong>Pros:</strong> Better engine protection, longer intervals between changes, superior performance in extreme temperatures</p>
            <p><strong>Cons:</strong> Higher upfront cost</p>
            
            <h3>Which Should You Choose?</h3>
            <p>For most modern vehicles, synthetic oil is worth the investment. It lasts longer, protects better, and can actually save money over time despite higher initial costs.</p>
            
            <h3>Understanding Viscosity</h3>
            <p>The numbers on oil containers (5W-30, 10W-40) indicate viscosity. The first number represents cold-weather performance, while the second indicates high-temperature viscosity. Always use the grade recommended by your manufacturer.</p>
        `
    },
    {
        id: 4,
        title: "When to Replace Your Car Battery: Signs and Solutions",
        category: "maintenance",
        date: "January 8, 2026",
        author: "Emily Roberts",
        icon: "",
        image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&h=600&fit=crop",
        excerpt: "Don't get stranded with a dead battery. Learn to recognize the warning signs and know when it's time for a replacement.",
        content: `
            <h3>Battery Basics</h3>
            <p>Your car battery provides the electrical current needed to start the engine and power accessories. Most batteries last 3-5 years, but various factors can shorten this lifespan.</p>
            
            <h3>Warning Signs of a Failing Battery</h3>
            <ul>
                <li>Slow engine crank when starting</li>
                <li>Dim headlights or interior lights</li>
                <li>Battery warning light on dashboard</li>
                <li>Swollen battery case</li>
                <li>Corrosion on terminals</li>
                <li>Age over 3 years</li>
            </ul>
            
            <h3>Testing Your Battery</h3>
            <p>Most auto parts stores offer free battery testing. You can also use a multimeter to check voltage. A healthy battery should read 12.6 volts or higher when the engine is off.</p>
            
            <h3>Extending Battery Life</h3>
            <p>Keep terminals clean and tight, avoid short trips that don't allow full recharging, turn off all accessories before shutting off the engine, and park in a garage during extreme weather when possible.</p>
            
            <h3>Choosing a Replacement</h3>
            <p>When buying a new battery, consider Cold Cranking Amps (CCA), Reserve Capacity (RC), and the warranty period. Always match or exceed your manufacturer's specifications.</p>
        `
    },
    {
        id: 5,
        title: "The Ultimate Guide to Tire Care and Maintenance",
        category: "maintenance",
        date: "January 5, 2026",
        author: "James Wilson",
        icon: "",
        excerpt: "Proper tire maintenance improves safety, fuel efficiency, and tire lifespan. Master these essential tire care techniques.",
        content: `
            <h3>Why Tire Maintenance Matters</h3>
            <p>Tires are your only contact with the road, making them crucial for safety. Proper maintenance can extend tire life by thousands of miles and improve fuel economy by up to 3%.</p>
            
            <h3>Checking Tire Pressure</h3>
            <p>Check pressure monthly when tires are cold. Underinflated tires wear unevenly, reduce fuel economy, and can overheat. Overinflated tires provide a harsh ride and wear the center tread prematurely.</p>
            
            <h3>Tread Depth and the Penny Test</h3>
            <p>Insert a penny into the tread with Lincoln's head upside down. If you can see all of Lincoln's head, your tires are worn and should be replaced. Legal minimum tread depth is 2/32", but 4/32" is recommended.</p>
            
            <h3>Rotation and Alignment</h3>
            <p>Rotate tires every 5,000-7,000 miles to ensure even wear. Get alignment checked annually or if you notice uneven wear, pulling, or after hitting a major pothole.</p>
            
            <h3>Balancing</h3>
            <p>Unbalanced tires cause vibration and uneven wear. Have tires balanced when installed and anytime you notice vibration at highway speeds.</p>
            
            <h3>Seasonal Considerations</h3>
            <p>Consider winter tires in cold climates for improved traction. Switch to all-season or summer tires when temperatures consistently exceed 45°F.</p>
        `
    },
    {
        id: 6,
        title: "Top 5 Performance Upgrades for Your Daily Driver",
        category: "tips",
        date: "January 3, 2026",
        author: "Alex Thompson",
        icon: "",
        excerpt: "Want to improve your car's performance without breaking the bank? These five upgrades deliver noticeable results.",
        content: `
            <h3>Performance on a Budget</h3>
            <p>You don't need to spend thousands to improve your car's performance. These five upgrades offer the best bang for your buck and can make a real difference in your daily driving experience.</p>
            
            <h3>1. Cold Air Intake</h3>
            <p>Replacing your restrictive factory air box with a cold air intake allows your engine to breathe better. Benefits include increased horsepower, improved throttle response, and even better fuel economy. Cost: $200-$400.</p>
            
            <h3>2. Performance Exhaust</h3>
            <p>A cat-back exhaust system reduces backpressure, increasing power and giving your car a more aggressive sound. Look for systems made from stainless steel or aluminized steel. Cost: $400-$1,200.</p>
            
            <h3>3. High-Performance Tires</h3>
            <p>Tires are the most cost-effective performance upgrade. Summer performance tires dramatically improve grip, handling, and braking. They make every other modification feel more effective.</p>
            
            <h3>4. Suspension Upgrades</h3>
            <p>Upgraded shocks, struts, or coilovers improve handling and reduce body roll. A stiffer suspension provides better feedback and more predictable handling. Cost: $500-$2,000.</p>
            
            <h3>5. Performance Brake Pads and Rotors</h3>
            <p>High-performance brake components provide better stopping power, reduced fade during hard use, and improved pedal feel. Essential for spirited driving.</p>
        `
    },
    {
        id: 7,
        title: "Understanding Check Engine Lights: Common Causes and Fixes",
        category: "tips",
        date: "December 30, 2025",
        author: "Lisa Anderson",
        icon: "",
        excerpt: "That dreaded check engine light doesn't always mean disaster. Learn what triggers it and when you should worry.",
        content: `
            <h3>Don't Panic</h3>
            <p>The check engine light (CEL) can be alarming, but it doesn't always indicate a major problem. Understanding what triggers it helps you respond appropriately.</p>
            
            <h3>How It Works</h3>
            <p>Your car's computer (ECU) monitors hundreds of sensors. When readings fall outside normal parameters, it stores a diagnostic trouble code (DTC) and illuminates the CEL.</p>
            
            <h3>Common Causes</h3>
            <p><strong>Loose Gas Cap:</strong> The most common cause. Tighten or replace the cap and the light should clear within a few drive cycles.</p>
            
            <p><strong>Oxygen Sensor:</strong> Monitors exhaust gases. A failing O2 sensor reduces fuel economy but won't leave you stranded. Replacement cost: $200-$400.</p>
            
            <p><strong>Catalytic Converter:</strong> Reduces emissions. Failure can be expensive ($1,000-$2,500) but is often caused by neglecting other issues.</p>
            
            <p><strong>Mass Airflow Sensor:</strong> Measures air entering the engine. Failure affects performance and fuel economy. Cost: $200-$400.</p>
            
            <h3>What to Do</h3>
            <p>If the light is steady, get it checked within a few days. If it's flashing, pull over immediately - this indicates a serious issue like misfiring that can damage the catalytic converter.</p>
            
            <h3>Reading Codes</h3>
            <p>Use an OBD-II scanner to read codes yourself. Basic scanners cost $20-$50 and can save you diagnostic fees. Many auto parts stores also offer free code reading.</p>
        `
    },
    {
        id: 8,
        title: "Winter Car Care: Preparing Your Vehicle for Cold Weather",
        category: "maintenance",
        date: "December 28, 2025",
        author: "Robert Taylor",
        icon: "",
        excerpt: "Cold weather is tough on vehicles. Follow this comprehensive guide to prepare your car for winter driving.",
        content: `
            <h3>Why Winter Preparation Matters</h3>
            <p>Cold weather puts extra stress on your vehicle's systems. Proper preparation prevents breakdowns, improves safety, and can save you from costly emergency repairs.</p>
            
            <h3>Battery Check</h3>
            <p>Cold weather reduces battery capacity by up to 60%. Have your battery tested before winter arrives. If it's over 3 years old or showing signs of weakness, replace it proactively.</p>
            
            <h3>Antifreeze/Coolant</h3>
            <p>Ensure proper antifreeze concentration (typically 50/50 mix). This prevents freezing and protects against corrosion. Have the system flushed if it hasn't been done in 2-3 years.</p>
            
            <h3>Tire Considerations</h3>
            <p>All-season tires lose grip below 45°F. In snowy climates, winter tires are essential - they remain flexible in cold temperatures and provide significantly better traction.</p>
            
            <h3>Wiper Blades and Fluid</h3>
            <p>Replace worn wiper blades and switch to winter washer fluid that won't freeze. Keep the reservoir full - you'll use more in winter due to road salt and spray.</p>
            
            <h3>Emergency Kit</h3>
            <p>Pack blankets, flashlight, ice scraper, jumper cables, sand or kitty litter for traction, snacks, water, and a phone charger. Being prepared can make a huge difference if you get stranded.</p>
            
            <h3>Regular Checks</h3>
            <p>Monitor tire pressure weekly (it drops 1 PSI for every 10°F temperature decrease), let the engine warm up for 30 seconds before driving, and keep the gas tank at least half full to prevent fuel line freeze.</p>
        `
    },
    {
        id: 9,
        title: "How to Diagnose Strange Car Noises: A Comprehensive Guide",
        category: "tips",
        date: "December 25, 2025",
        author: "Jennifer Lee",
        icon: "",
        excerpt: "Unusual sounds can indicate serious problems. Learn to identify and diagnose common car noises before they become expensive repairs.",
        content: `
            <h3>Listen to Your Car</h3>
            <p>Strange noises are your car's way of communicating problems. Learning to identify them helps you catch issues early and avoid costly repairs.</p>
            
            <h3>Squealing When Braking</h3>
            <p>High-pitched squealing usually indicates worn brake pads. Most pads have wear indicators that create this sound intentionally. Address this quickly to avoid damaging rotors.</p>
            
            <h3>Grinding Sounds</h3>
            <p>Grinding when braking means you've worn through the pads completely and metal is grinding on metal. This damages rotors and is dangerous. Stop driving and have brakes serviced immediately.</p>
            
            <h3>Clicking While Turning</h3>
            <p>Clicking or popping during turns, especially when accelerating, often indicates worn CV joints. These protect the axle and transfer power to wheels. Replacement is necessary but relatively affordable.</p>
            
            <h3>Knocking From Engine</h3>
            <p>Engine knocking can indicate low oil, bad spark plugs, or more serious internal issues. Check oil level immediately. If it persists, consult a mechanic promptly.</p>
            
            <h3>Whining or Humming</h3>
            <p>A whining noise that changes with vehicle speed might indicate wheel bearing issues. These are safety-critical components that require immediate attention.</p>
            
            <h3>Hissing Sounds</h3>
            <p>Hissing under the hood could be a vacuum leak, coolant leak, or overheating. If accompanied by steam or temperature warning lights, pull over immediately.</p>
            
            <h3>When to Seek Help</h3>
            <p>Any new or worsening noise deserves investigation. Document when it occurs, what it sounds like, and any associated symptoms to help your mechanic diagnose the issue.</p>
        `
    },
    {
        id: 10,
        title: "The Complete Guide to Air Filter Replacement",
        category: "parts",
        date: "December 22, 2025",
        author: "Michael Brown",
        icon: "",
        excerpt: "Air filters are simple but crucial. Learn when and how to replace both engine and cabin air filters for optimal performance.",
        content: `
            <h3>Why Air Filters Matter</h3>
            <p>Your car has two air filters: engine air filter and cabin air filter. Both play important roles and are among the easiest and most cost-effective maintenance items.</p>
            
            <h3>Engine Air Filter</h3>
            <p>Prevents dirt, dust, and debris from entering the engine. A clean filter ensures optimal air flow, improving performance, fuel economy, and engine longevity.</p>
            
            <h3>When to Replace Engine Air Filter</h3>
            <p>Check every oil change and replace every 12,000-15,000 miles or annually, whichever comes first. In dusty conditions, replace more frequently. Signs of a dirty filter include reduced acceleration, increased fuel consumption, and rough idling.</p>
            
            <h3>DIY Replacement</h3>
            <p>Engine air filter replacement is typically very simple:</p>
            <ul>
                <li>Locate the air filter box (usually near the front of the engine)</li>
                <li>Unclip or unscrew the housing</li>
                <li>Remove the old filter and note its orientation</li>
                <li>Clean the housing interior with a damp cloth</li>
                <li>Install the new filter in the same orientation</li>
                <li>Secure the housing</li>
            </ul>
            
            <h3>Cabin Air Filter</h3>
            <p>Filters air entering the passenger compartment through the HVAC system. It removes dust, pollen, and pollutants, improving air quality and system efficiency.</p>
            
            <h3>When to Replace Cabin Filter</h3>
            <p>Replace annually or every 15,000 miles. Signs include reduced airflow from vents, unpleasant odors, increased dust on dashboard, or noisy operation.</p>
            
            <h3>Cost and Benefits</h3>
            <p>Both filters typically cost $15-$30 each. DIY replacement takes 5-10 minutes and saves $30-$50 in labor charges. The performance and health benefits far outweigh the minimal cost.</p>
        `
    }
];

// Initialize blog on page load
document.addEventListener('DOMContentLoaded', () => {
    displayAmazonProducts();
    displayBlogPosts('all');
    setupEventListeners();
    setupScrollAnimations();
});

// Setup scroll animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                const delay = entry.target.dataset.delay || 0;
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, delay);
            }
        });
    }, observerOptions);

    // Observe all animated elements
    document.querySelectorAll('.animate-on-scroll, .category-card, .product-card, .blog-card').forEach(el => {
        observer.observe(el);
    });

    // Parallax effect for hero
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const scrolled = window.pageYOffset;
                const hero = document.querySelector('.hero');
                if (hero && scrolled < window.innerHeight) {
                    hero.style.transform = `translateY(${scrolled * 0.5}px)`;
                    hero.style.opacity = 1 - (scrolled / window.innerHeight);
                }
                ticking = false;
            });
            ticking = true;
        }
    });
}

// Setup event listeners
function setupEventListeners() {
    // Filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            const filter = button.getAttribute('data-filter');
            displayBlogPosts(filter);
        });
    });

    // Hamburger menu
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    // Affiliate disclosure link
    const affiliateLink = document.getElementById('affiliateLink');
    const affiliateModal = document.getElementById('affiliateModal');
    
    affiliateLink.addEventListener('click', (e) => {
        e.preventDefault();
        affiliateModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });

// Modal close - affiliate modal only
    const closeModals = document.querySelectorAll('.close-modal');

    closeModals.forEach(closeBtn => {
        closeBtn.addEventListener('click', () => {
            affiliateModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    });

    window.addEventListener('click', (e) => {
        if (e.target === affiliateModal) {
            affiliateModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Newsletter form
    const newsletterForm = document.querySelector('.newsletter-form');
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = newsletterForm.querySelector('input').value;
        alert(`Thank you for subscribing with ${email}!`);
        newsletterForm.reset();
    });

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Display Amazon products
function displayAmazonProducts() {
    const productsGrid = document.getElementById('productsGrid');
    
    productsGrid.innerHTML = amazonProducts.map((product, index) => `
        <div class="product-card" data-delay="${index * 50}">
            <div class="product-image">
                ${product.image ? `<img src="${product.image}" alt="${product.title}" style="width: 100%; height: 100%; object-fit: cover;" />` : product.icon}
                <span class="amazon-badge">Amazon</span>
            </div>
            <div class="product-details">
                <h3 class="product-title">${product.title}</h3>
                <div class="product-rating">${product.rating}</div>
                <div class="product-price">${product.price}</div>
                ${product.prime ? '<span class="prime-badge">Prime ✓</span>' : ''}
                <p class="product-description">${product.description}</p>
                <a href="${appendAmazonTag(product.amazonLink)}" target="_blank" class="amazon-button" rel="noopener noreferrer nofollow sponsored">
                    View on Amazon →
                </a>
            </div>
        </div>
    `).join('');
    
    // Re-observe new elements
    setTimeout(() => {
        document.querySelectorAll('.product-card').forEach(el => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const delay = entry.target.dataset.delay || 0;
                        setTimeout(() => {
                            entry.target.classList.add('visible');
                        }, delay);
                    }
                });
            }, { threshold: 0.1 });
            observer.observe(el);
        });
    }, 100);
}

// Display blog posts
function displayBlogPosts(filter) {
    const blogGrid = document.getElementById('blogGrid');
    let filteredPosts = blogPosts;

    if (filter !== 'all') {
        filteredPosts = blogPosts.filter(post => post.category === filter);
    }

    blogGrid.innerHTML = filteredPosts.map((post, index) => `
        <div class="blog-card" onclick="window.location.href='blog-${post.id}.html'" data-delay="${index * 50}">
            <div class="blog-image">
                ${post.image ? `<img src="${post.image}" alt="${post.title}" />` : post.icon}
            </div>
            <div class="blog-content">
                <div class="blog-meta">
                    <span class="blog-category">${post.category}</span>
                    <span>${post.date}</span>
                </div>
                <h3>${post.title}</h3>
                <p class="blog-excerpt">${post.excerpt}</p>
                <a href="blog-${post.id}.html" class="read-more" onclick="event.stopPropagation()">
                    Read More →
                </a>
            </div>
        </div>
    `).join('');
    
    // Re-observe new elements
    setTimeout(() => {
        document.querySelectorAll('.blog-card').forEach(el => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const delay = entry.target.dataset.delay || 0;
                        setTimeout(() => {
                            entry.target.classList.add('visible');
                        }, delay);
                    }
                });
            }, { threshold: 0.1 });
            observer.observe(el);
        });
    }, 100);
}

// Show blog detail on page
function openModal(postId) {
    const post = blogPosts.find(p => p.id === postId);
    const blogGrid = document.getElementById('blogGrid');
    const blogDetail = document.getElementById('blogDetail');
    const blogDetailContent = document.getElementById('blogDetailContent');
    const filterButtons = document.querySelector('.filter-buttons');

    blogDetailContent.innerHTML = `
        <div class="blog-detail-header">
            ${post.image ? `<img src="${post.image}" alt="${post.title}" class="blog-detail-image" />` : ''}
            <span class="blog-category">${post.category}</span>
            <h2>${post.title}</h2>
            <div class="blog-detail-meta">
                <span>📅 ${post.date}</span>
                <span>✍️ ${post.author}</span>
            </div>
        </div>
        <div class="blog-detail-body">
            ${post.content}
        </div>
    `;

    blogGrid.style.display = 'none';
    filterButtons.style.display = 'none';
    blogDetail.style.display = 'block';
    
    // Scroll to top of blog section
    document.getElementById('blog').scrollIntoView({ behavior: 'smooth' });
}

// Close blog detail and return to grid
function closeBlogDetail() {
    const blogGrid = document.getElementById('blogGrid');
    const blogDetail = document.getElementById('blogDetail');
    const filterButtons = document.querySelector('.filter-buttons');
    
    blogDetail.style.display = 'none';
    blogGrid.style.display = 'grid';
    filterButtons.style.display = 'flex';
    
    // Scroll to top of blog section
    document.getElementById('blog').scrollIntoView({ behavior: 'smooth' });
}

// Add scroll animation effect
window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.blog-card, .category-card');
    elements.forEach(element => {
        const position = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (position < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
});

// Initialize scroll animation styles
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.blog-card, .category-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease';
    });
});