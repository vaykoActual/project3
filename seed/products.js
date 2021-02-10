const db = require("../db/connection");
const Product = require("../models/product");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const motorcycles = [
    {
      name: "Road Glide",
      imgURL:
        "https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2021/2021-road-glide-special/2021-road-glide-special-e99b/2021-road-glide-special-e99b-motorcycle.jpg?impolicy=myresize&rw=500",
      description:
        "The benchmark for long-distance touring bikes. Runs mile after mile with ease.",
      price: "27000",
      brand: "Harley Davidson",
    },
    {
      name: "Street Glide",
      imgURL:
        "https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2021/2021-street-glide/2021-street-glide-e77/2021-street-glide-e77-motorcycle.jpg?impolicy=myresize&rw=500",
      description: "The original stripped-down hot-rod bagger.",
      price: "25000",
      brand: "Harley Davidson",
    },
    {
      name: "Low Rider S",
      imgURL:
        "https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2021/2021-low-rider-s/2021-low-rider-s-f20/2021-low-rider-s-f20-motorcycle.jpg?impolicy=myresize&rw=500",
      description: "A blacked-out, factory custom performance cruiser.",
      price: "25000",
      brand: "Harley Davidson",
    },
    {
      name: "YZF-R1M",
      imgURL:
        "https://yamaha.scdn5.secure.raxcdn.com/library/img.jpg?id=5f4be2602a0ab63a745a4bac&w=1600",
      description:
        "Featuring next‑generation R‑Series styling, sophisticated electronic control, supersport braking and suspension performance and a high‑performance crossplane engine.",
      price: "26000",
      brand: "Yamaha",
    },
    {
      name: "SUPER TÉNÉRÉ ES",
      imgURL:
        "https://yamaha.scdn5.secure.raxcdn.com/library/img.jpg?id=5fb2b42b2a0ab6222c2b65b7&w=1600",
      description:
        "Rugged, durable and built for superior long distance adventure touring and exploring beyond the pavement.",
      price: "16000",
      brand: "Yamaha",
    },
    {
      name: "YZ450F MONSTER ENERGY YAMAHA RACING EDITION",
      imgURL:
        "https://yamaha.scdn5.secure.raxcdn.com/library/img.jpg?id=5efcfd712a0ab73df85296c4&w=1600",
      description:
        "Race like the Yamaha factory team with your own Monster Energy‑inspired, class‑leading YZ450F.",
      price: "9500",
      brand: "Yamaha",
    },
    {
      name: "ARCH METHODI43",
      imgURL:
        "https://www.archmotorcycle.com/assets/images/method-side-min.jpg",
      description:
        "The ARCH/S&S Method 143ci (2343cc) power plant exhilarates with power and confidence. The largest, most powerful engine employed within an ARCH motorcycle expresses either the outer-limits of two wheeled performance or cultivates itself within the boundaries defined by it’s dual ride modes.",
      price: "15000",
      brand: "Arch",
    },
    {
      name: "ARCH KRGT-1",
      imgURL:
        "https://www.archmotorcycle.com/assets/images/home-krgt-1-side-2-min.jpg",
      description:
        "ARCH KRGT-1 The KRGT-1 is a custom production American performance cruiser. Designed to be ridden aggressively while also being comfortable for long distances. 2020 improvements include design enhancements to the bodywork, updated front suspension and brakes.Each KRGT-1 is custom tailored to provide personalized ergonomics and curated fit and finishes, making every motorcycle unique to its owner.",
      price: "12500",
      brand: "Arch",
    },
    {
      name: "ARCH 1S",
      imgURL:
        "https://www.archmotorcycle.com/assets/images/home-1s-side-min.jpg",
      description:
        "The 1s is the first production single sided swing-arm motorcycle from ARCH. This new model is sport influenced with a more aggressive riding position while still keeping hold of its performance cruiser formulation.CNC Machined Aluminum and extensive use of Carbon Fiber flow within the lines of this elegant yet race inspired motorcycle. As with all ARCH motorcycles, the 1s can be custom tailored to its owner.",
      price: "18500",
      brand: "Arch",
    },
    {
      name: "2021 R nineT Scrambler",
      imgURL: "https://cdp.azureedge.net/products/USA/BM/2020/MC/STREETSTD/R_NINET_SCRAMBLER/50/STEREO_METALLIC_MATT/2000000001.JPG",
      description: "The R nineT Scrambler knows no conventions: rough, unadapted, individual. Its handling is balanced and unique. With the boxer, you can ride around with your head held high, it is available for every spontaneity. And the typical Scrambler look together with the relaxed seating position makes a lot of difference – and above all is a lot of fun. Design your R nineT Scrambler so that it fits perfectly into your life. No matter what the others say. Just typical #Soulfuel.",
      price: "13,495",
      brand: "BMW",
    },
    {
      name: "THE BMW R 1250 R",
      imgURL: "https://mcn-images.bauersecure.com/PageFiles/672103/bmw-r1250r-1.jpg",
      description: "The R 1250 R is designed for a dynamic appearance. Equipped with the all-new Boxer engine – with a maximum torque of 105 lb-ft, the reworked engine delivers more power than ever before. The variable camshaft control BMW ShiftCam is innovative technology that offers optimum performance in every engine speed range. During a relaxed cruise or a sporty tour, experience the pure thrill of riding along with the typical punch of the Boxer engine."
      brand: "BMW",
    },
    {
      name: "2021 R 18 Classic",
      imgURL: "https://lh3.googleusercontent.com/proxy/Qf0szrXP1OmvR_sXcrwY1UOkcMAvhNZ81O7GnQ-LWNKfoi_XA6Dzo3QYw3ck_iU5Mx792pnCI4Bq8s9FNZTRQtr9nvwPo9odx5UeeyRh0_Mi2l8FEg-Mg21yAArn9kIoz15iyOah1p3oWqm5407rVWF9_F9jd9Oze5qu63ooCrp1od5NYpHgmlbLshdGiQ0uL2NOEgTrnJJh_SPO1Gl10kgU-7xQJtWZ-WL9fg",
      description: "The R 18 Classic is a modern cruiser with a nostalgic sense of BMW design. It reminds one of the first BMW cruisers suitable for touring. It also invokes timeless marks of our motorcycle history, such as with the white double pinstripe found on the R 18 Classic First Edition. The heart of the machine is obviously the boxer engine with the most displacement we have ever built. It is designed for relaxing tours and pure enjoyment.",
      price: "19,495",
      brand: "BMW",
    }
  ];

  await Product.insertMany(motorcycles);
  console.log("Created motorcycles!");
};
const run = async () => {
  await main();
  db.close();
};

run();
