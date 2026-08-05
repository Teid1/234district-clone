/* 234 DISTRICT - Homepage Specific Functionality & Interactive Cart */

// 1. COMPREHENSIVE PRODUCT DATABASE (Referencing exact local assets downloaded from 234district.com)
const PRODUCTS = [
  {
    "id": "acc-1",
    "name": "Aevis Bullet Hair Mule Clogs",
    "price": 200000,
    "category": "accessories",
    "image": "/images/IMG_1455.jpg",
    "secondaryImage": "/images/IMG_1457.jpg",
    "badge": "",
    "description": "The Aevis Bullet Hair Mule Clogs merge luxury craftsmanship with contemporary streetwear design. Crafted with a textured hair-finish upper, these statement mules feature striking bullet-hole inspired metallic embellishments arranged across the vamp, creating a bold yet refined visual identity.\n\nBuilt on a comfortable clog-inspired silhouette, the design incorporates an adjustable buckle strap for a secure fit while maintaining effortless slip-on functionality. The monochromatic black finish is elevated by polished silver-tone hardware, making these mules versatile enough for both casual styling and elevated fashion-forward looks.\n\nThe soft textured upper delivers a premium tactile feel, while the durable outsole provides everyday comfort and stability. Designed for individuals who appreciate distinctive footwear that balances luxury, edge, and contemporary street culture.\n\nFeatures:\n\n• Premium hair-texture upper\n• Bullet-hole inspired metal embellishments\n• Adjustable buckle closure\n• Slip-on clog silhouette\n• Cushioned comfort footbed\n• Durable non-slip outsole\n• Silver-tone hardware detailing\n• Lightweight construction\n• Statement luxury streetwear design\n• Unisex styling\n\nStyle Notes:\n\nPair with wide-leg trousers, cargos, washed denim, or tailored black pants for a refined streetwear aesthetic. The metallic detailing creates a strong focal point while the monochrome palette remains easy to style.\n\nFit & Details:\n\n• Upper: Hair-Texture Synthetic Leather\n• Lining: Soft Textile\n• Outsole: Rubber\n• Closure: Adjustable Buckle Strap\n• Color: Black\n• Hardware: Silver Tone\n• Style: Luxury Streetwear / Casual / Contemporary\n• Gender: Unisex"
  },
  {
    "id": "acc-2",
    "name": "Sunbind Denim Utility Pocket Mules",
    "price": 170000,
    "category": "accessories",
    "image": "/images/IMG_1447.jpg",
    "secondaryImage": "/images/IMG_1453.jpg",
    "badge": "",
    "description": "The Sunbind Denim Utility Pocket Mules blend workwear inspiration with contemporary streetwear design. Constructed from washed denim fabric, these slip-on mules feature oversized utility pocket detailing with exposed metal zippers, creating a unique functional aesthetic.\n\nDesigned for comfort and everyday wear, the closed-toe mule silhouette offers easy slip-on convenience while maintaining a bold fashion-forward look. Distressed denim accents, raw-edge finishes, and utility-inspired pockets give the footwear a rugged, vintage character that pairs effortlessly with denim, cargos, and relaxed streetwear fits.\n\nAvailable in both washed blue denim and vintage cream denim colorways, these mules bring a creative twist to casual footwear while remaining comfortable enough for daily wear.\n\nFeatures:\n\n• Washed denim upper construction\n• Functional utility pocket design\n• Metal zipper detailing\n• Slip-on mule silhouette\n• Closed rounded toe\n• Distressed vintage finish\n• Cushioned footbed\n• Durable rubber outsole\n• Lightweight construction\n• Streetwear-inspired design\n\nStyle Notes:\n\nPair with baggy denim, carpenter pants, cargos, or oversized silhouettes for a contemporary streetwear look. The utility pocket detail makes these mules a standout addition to any casual outfit.\n\nFit & Details:\n\n• Upper: Washed Denim Fabric\n• Outsole: Rubber\n• Closure: Slip-On\n• Toe Shape: Round Toe\n• Colors: Vintage Cream, Washed Blue\n• Gender: Unisex\n• Style: Casual / Streetwear / Workwear"
  },
  {
    "id": "acc-3",
    "name": "Supreme Metal Lighter Holster Necklace",
    "price": 50000,
    "category": "accessories",
    "image": "/images/IMG_1934.jpg",
    "secondaryImage": "/images/IMG_1942.jpg",
    "badge": "",
    "description": "The Supreme Metal Lighter Holster Necklace is a statement accessory that combines streetwear culture with functional design. Crafted from polished silver-tone metal, the piece features a miniature lighter holster inspired by the iconic Supreme aesthetic.\n\nDesigned as both a necklace pendant and keychain accessory, the holster securely holds a mini lighter while serving as a standout collectible accessory. The signature red Supreme-style logo panel contrasts against the metallic finish, creating a bold look that pairs effortlessly with contemporary streetwear fits.\n\nWhether worn around the neck, attached to a belt loop, bag, wallet chain, or keys, this versatile accessory delivers a distinctive industrial-inspired aesthetic.\n\nFeatures:\n\n• Polished silver-tone metal construction\n• Supreme-inspired logo detailing\n• Functional mini lighter holder design\n• Detachable ball-chain necklace\n• Keyring attachment included\n• Streetwear collectible accessory\n• Durable metal hardware\n• Multi-use necklace and keychain design\n\nStyle Notes:\n\nWear as a necklace, attach to your keys, or pair with chains, cargos, denim, and oversized streetwear silhouettes for a bold urban look.\n\nFit & Details:\n\n• Material: Metal alloy\n• Finish: Silver-tone polished metal\n• Color: Silver/Red\n• Includes necklace chain\n• Includes keyring attachment\n• Lightweight construction\n• Collectible streetwear accessory"
  },
  {
    "id": "hom-4",
    "name": "Supreme ABC Alphabet Ceramic Vase",
    "price": 160000,
    "category": "home-decor",
    "image": "/images/IMG_1932.jpg",
    "secondaryImage": "/images/IMG_1931.jpg",
    "badge": "",
    "description": "The Supreme ABC Alphabet Ceramic Vase is a unique collectible piece that merges typography, illustration, and functional home décor into one artistic statement.\n\nCrafted from premium glazed ceramic, the vase showcases an imaginative alphabet design where individual letters are formed using illustrated human figures and creative anatomical-inspired artwork. The playful visual composition transforms a traditional vase into a conversation piece suitable for modern interiors and curated living spaces.\n\nIts clean white ceramic finish provides the perfect canvas for the intricate multicolored artwork, making it equally effective as a decorative object or a functional flower vase. Whether displayed on a shelf, coffee table, console, office desk, or art-inspired interior, the vase brings creativity and character to any setting.\n\nFeatures:\n\n• Premium glazed ceramic construction\n• Artistic alphabet-inspired graphic artwork\n• Multicolored illustrated typography design\n• Decorative and functional vase\n• Contemporary collectible aesthetic\n• Smooth glossy finish\n• Statement home décor piece\n• Suitable for fresh or dried floral arrangements\n\nStyle Notes:\n\nDisplay alone as an art object or pair with books, sculptures, candles, and designer accessories. Ideal for contemporary, creative, eclectic, and street-inspired interiors.\n\nFit & Details:\n\n• Ceramic construction\n• Gloss glazed finish\n• Decorative collectible design\n• Functional flower vase\n• Indoor display use\n• Artistic typography artwork\n• Contemporary home décor accessory"
  },
  {
    "id": "hom-5",
    "name": "Supreme Spike Collar Ceramic Vase",
    "price": 160000,
    "category": "home-decor",
    "image": "/images/IMG_9541.jpg",
    "secondaryImage": "/images/IMG_9543.jpg",
    "badge": "",
    "description": "The Supreme Spike Collar Ceramic Vase transforms an iconic punk accessory into a striking home décor statement.\n\nCrafted from glazed ceramic, the vase features oversized spike collar graphics wrapped around its curved silhouette, blending rebellious design influences with modern interior styling. Available in vibrant red and clean white colorways, it functions equally well as a decorative display piece or a functional flower vase.\n\nThe bold artwork and glossy finish make it an eye-catching addition to coffee tables, shelves, desks, consoles, and curated living spaces. Inspired by the intersection of streetwear, music culture, and contemporary design, this piece adds personality and attitude to any interior.\n\nFeatures:\n\n• Premium glazed ceramic construction\n• All-over spike collar artwork\n• Glossy finish\n• Decorative and functional design\n• Suitable for fresh or dried flowers\n• Contemporary streetwear-inspired aesthetic\n• Statement home décor piece\n• Available in multiple colorways\n\nStyle Notes:\n\nDisplay as a standalone centerpiece or pair with books, candles, collectibles, and modern décor accessories. Works especially well in contemporary, industrial, minimalist, and street-inspired interiors.\n\nFit & Details:\n\n• Ceramic construction\n• Gloss glazed finish\n• Decorative vase design\n• Suitable for indoor display\n• Functional flower vase\n• Statement collectible aesthetic"
  },
  {
    "id": "acc-6",
    "name": "STU x Denim Tears Spade Web Belt",
    "price": 180000,
    "category": "accessories",
    "image": "/images/IMG_1926.jpg",
    "secondaryImage": "/images/IMG_1927.jpg",
    "badge": "",
    "description": "The STU x Denim Tears Spade Web Belt combines classic Americana influences with contemporary streetwear design.\n\nConstructed with a durable green woven web strap, the belt features repeating embroidered black spade motifs that create a bold visual identity while maintaining everyday versatility. Vegetable-tanned leather detailing at both ends adds structure, durability, and a refined contrast against the textured webbing.\n\nFinished with an antique brass buckle and embossed leather backing, the belt offers a premium feel suitable for both casual and elevated styling. Whether paired with denim, chinos, cargos, or shorts, it delivers a distinctive finishing touch inspired by heritage craftsmanship and modern fashion culture.\n\nFeatures:\n\n• Durable woven web construction\n• Embroidered spade motif pattern\n• Premium vegetable-tanned leather accents\n• Antique brass buckle hardware\n• Embossed leather backing\n• Adjustable fit\n• Unisex design\n• Everyday and statement styling\n\nStyle Notes:\n\nPair with denim, carpenter pants, cargos, shorts, varsity jackets, knitwear, and oversized streetwear silhouettes. The vibrant green tone adds a subtle pop of color while remaining versatile enough for year-round wear.\n\nFit & Details:\n\n• Unisex design\n• Adjustable buckle closure\n• Woven web strap\n• Vegetable-tanned leather trim\n• Antique brass hardware\n• Comfortable everyday wear\n• Durable construction"
  },
  {
    "id": "acc-7",
    "name": "Arque Sharp Hair-On Leather Belt",
    "price": 51480,
    "category": "accessories",
    "image": "/images/IMG_1917.jpg",
    "secondaryImage": "/images/IMG_1922.jpg",
    "badge": "",
    "description": "The ARGUE CULTURE Hair-On Leather Belt is a bold accessory created for modern streetwear styling and elevated everyday wear.\n\nCrafted from premium hair-on leather, this belt features a distinctive elongated silhouette and an oversized sculpted metal buckle engraved with the Arque logo. Designed to be worn with the extended strap hanging naturally, it delivers a strong visual statement inspired by contemporary fashion and alternative streetwear culture.\n\nAvailable in black and burgundy finishes, the belt pairs effortlessly with baggy denim, cargos, tailored trousers, and oversized tops. The premium construction and unique buckle design make it a standout piece for those who appreciate expressive accessories.\n\nFeatures:\n\n• Premium hair-on leather construction\n• Oversized sculpted Arque buckle\n• Extended tail design\n• Adjustable fit\n• Durable metal hardware\n• Contemporary streetwear aesthetic\n• Unisex styling\n• Statement accessory design\n\nStyle Notes:\n\nWear with wide-leg denim, oversized shirts, cargos, leather jackets, and layered streetwear outfits. The elongated strap is intended to hang naturally for a fashion-forward look.\n\nFit & Details:\n\n• Unisex design\n• Adjustable buckle closure\n• Hair-on leather finish\n• Premium metal buckle\n• Extended strap construction\n• Suitable for everyday wear"
  },
  {
    "id": "acc-8",
    "name": "CS Online Graphic Statement Belt",
    "price": 51480,
    "category": "accessories",
    "image": "/images/IMG_1913.jpg",
    "secondaryImage": "/images/IMG_1915.jpg",
    "badge": "",
    "description": "The CS Online Graphic Statement Belt is designed for those who appreciate expressive accessories and contemporary streetwear culture.\n\nFeaturing an all-over collage-style graphic print inspired by digital art, underground design aesthetics, and early internet culture, this belt transforms a classic accessory into a statement piece. The contrasting black, white, and red artwork is paired with a vintage-finish metal buckle and reinforced eyelets for durability and everyday wear.\n\nWhether styled with washed denim, cargos, oversized tees, or layered streetwear fits, the CS Online Belt adds personality and visual impact to any outfit.\n\nFeatures:\n\n• Full graphic printed design\n• Cyber and streetwear-inspired artwork\n• Vintage-finish metal buckle\n• Reinforced metal eyelets\n• Durable construction\n• Adjustable fit\n• Statement accessory styling\n• Unisex design\n• Everyday wear versatility\n\nStyle Notes:\n\nPerfect with faded denim, baggy jeans, cargos, oversized tops, and alternative streetwear fits. Designed to stand out while complementing monochrome and vintage-inspired wardrobes.\n\nFit & Details:\n\n• Unisex design\n• Adjustable buckle closure\n• Standard belt width\n• Printed leather construction\n• Durable metal hardware"
  },
  {
    "id": "acc-9",
    "name": "Roman Catcher Hair-On Leather Belt",
    "price": 51480,
    "category": "accessories",
    "image": "/images/IMG_1909.jpg",
    "secondaryImage": "/images/IMG_1907.jpg",
    "badge": "",
    "description": "The Roman Catcher Belt is a bold statement accessory designed for those who appreciate distinctive details and elevated streetwear styling.\n\nConstructed from premium hair-on leather, the belt features the iconic Roman Catcher metal buckle, decorative metal conchos, and a textured finish that adds depth and character. Available in both leopard-print and cowhide variations, it blends western influences with contemporary fashion aesthetics.\n\nWhether paired with vintage denim, cargos, tailored trousers, or oversized silhouettes, the Roman Catcher Belt instantly elevates any outfit.\n\nFeatures:\n\n• Premium hair-on leather construction\n• Signature Roman Catcher metal buckle\n• Decorative metal concho hardware\n• Reinforced eyelets\n• Vintage-inspired finish\n• Adjustable fit\n• Durable metal hardware\n• Western and streetwear fusion design\n• Unisex styling\n\nStyle Notes:\n\nPerfect for denim, cargos, carpenter pants, boots, loafers, and layered streetwear looks. Designed to be worn as a standout accessory or integrated into everyday styling.\n\nFit & Details:\n\n• Unisex design\n• Adjustable buckle closure\n• Standard belt width\n• Premium hardware construction\n• Everyday wear durability"
  },
  {
    "id": "acc-10",
    "name": "Remedy Crew Star Hair-On Leather Belt",
    "price": 90000,
    "category": "accessories",
    "image": "/images/IMG_1900.jpg",
    "secondaryImage": "/images/IMG_1901.jpg",
    "badge": "",
    "description": "The Remedy Crew Star Hair-On Leather Belt combines western influences with contemporary streetwear aesthetics.\n\nCrafted with a textured hair-on leather finish, this belt features a statement silver star concho at the tip, a vintage-inspired metal buckle, and reinforced eyelets throughout. Available in both deep burgundy and leopard-print variations, it serves as a standout accessory for denim, cargos, and relaxed tailoring.\n\nThe slim profile makes it ideal for everyday styling while adding character and texture to any outfit.\n\nFeatures:\n\n• Hair-on leather construction\n• Statement silver star concho detail\n• Vintage-finish metal buckle\n• Reinforced metal eyelets\n• Slim profile design\n• Western-inspired aesthetic\n• Streetwear-ready styling\n• Durable hardware construction\n• Adjustable fit\n• Available in multiple finishes\n\nStyle Notes:\n\nWear with washed denim, carpenter pants, cargos, boots, loafers, or oversized tees for a vintage western and contemporary streetwear look.\n\nFit & Details:\n\n• Unisex design\n• Adjustable buckle closure\n• Slim width profile\n• Metal hardware\n• Everyday wear construction"
  },
  {
    "id": "acc-11",
    "name": "Alice Iron Cross Riding Gloves",
    "price": 80000,
    "category": "accessories",
    "image": "/images/IMG_1111.jpg",
    "secondaryImage": "/images/IMG_1892.jpg",
    "badge": "",
    "description": "The Alice Iron Cross Riding Gloves blend motorcycle-inspired aesthetics with everyday streetwear functionality.\n\nDesigned with a breathable mesh upper and flexible performance fabric, these gloves feature oversized iron cross graphics, embossed Alice branding, and reinforced grip panels for comfort and control. Their lightweight construction makes them suitable for riding, cycling, outdoor activities, or completing a biker-inspired streetwear look.\n\nThe fitted wrist cuff provides a secure feel while maintaining flexibility and ease of movement.\n\nFeatures:\n\n• Breathable mesh construction\n• Signature Alice iron cross graphics\n• Embossed logo detailing\n• Lightweight performance fabric\n• Reinforced grip zones\n• Stretch-fit construction\n• Comfortable wrist cuff\n• Touchscreen-compatible fingertips\n• Motorcycle-inspired design\n• Suitable for riding and daily wear\n\nStyle Notes:\n\nPair with cargos, denim, leather jackets, riding boots, and statement accessories for a complete biker and streetwear aesthetic.\n\nFit & Details:\n\n• Unisex design\n• Flexible ergonomic fit\n• Lightweight feel\n• Breathable construction\n• Suitable for all-season casual wear"
  },
  {
    "id": "acc-12",
    "name": "ERD Gothic Cross Wallet Chain &#038; Lighter Holder",
    "price": 54000,
    "category": "accessories",
    "image": "/images/IMG_1884.jpg",
    "secondaryImage": "/images/IMG_1885.jpg",
    "badge": "",
    "description": "The ERD Gothic Cross Wallet Chain & Lighter Holder blends punk, biker, and streetwear influences into one bold accessory.\n\nDesigned with heavyweight metal hardware, the piece features a detachable chain, gothic cross pendant, spike details, and a distressed leather lighter holder with metal eyelets. The multi-clip construction allows attachment to belt loops, bags, keys, wallets, or utility accessories while adding a strong visual statement to any outfit.\n\nWhether paired with denim, cargos, leather pants, or oversized streetwear silhouettes, this accessory delivers a rugged underground aesthetic that stands out.\n\nFeatures:\n\n• Heavy-duty metal chain construction\n• Detachable lighter holder pouch\n• Gothic cross pendant detail\n• Distressed leather-look holder with metal eyelets\n• Industrial clip and carabiner hardware\n• Spike accent details\n• Multi-point attachment system\n• Vintage silver finish\n• Punk and biker-inspired aesthetic\n• Suitable for pants, bags, belts, and accessories\n\nStyle Notes:\n\nPerfect for styling with distressed denim, leather trousers, cargo pants, boots, oversized tees, sleeveless tops, and layered accessories.\n\nUsage:\n\n• Lighter holder\n• Wallet chain\n• Key holder\n• Bag accessory\n• Fashion styling piece\n\nCare Instructions:\n\nAvoid prolonged exposure to moisture. Wipe clean with a soft dry cloth after use."
  },
  {
    "id": "top-13",
    "name": "SMILEANDSAD Distressed Cross Graphic Sleeveless Tee",
    "price": 90180,
    "category": "tops",
    "image": "/images/IMG_1876.jpg",
    "secondaryImage": "/images/IMG_1881.jpg",
    "badge": "",
    "description": "The SMILEANDSAD Distressed Cross Graphic Sleeveless Tee combines grunge aesthetics with modern streetwear styling.\n\nConstructed from heavyweight cotton and finished with a faded vintage wash, this sleeveless top features a bold distressed cross graphic across the front and a subtle SMILEANDSAD emblem on the back. Raw-cut armholes and a worn-in finish create an authentic lived-in appearance, while the relaxed oversized silhouette delivers all-day comfort.\n\nDesigned for layering or standalone wear, this piece pairs effortlessly with baggy denim, cargo pants, shorts, or stacked accessories for a contemporary streetwear look.\n\nFeatures:\n\n• Premium heavyweight cotton fabric\n• Vintage faded wash finish\n• Distressed cross graphic print on front\n• Signature SMILEANDSAD back graphic\n• Raw-edge sleeveless construction\n• Oversized relaxed fit\n• Soft breathable feel\n• Washed charcoal black colorway\n• Reinforced crew neckline\n• Streetwear-inspired silhouette\n\nStyle Notes:\n\nLayer over long sleeves or wear alone with oversized denim, cargos, shorts, boots, or sneakers for a rugged contemporary aesthetic.\n\nFit & Sizing:\n\n• Oversized fit\n• Relaxed body\n• Dropped shoulder silhouette\n• Sleeveless construction\n• True-to-size oversized look"
  },
  {
    "id": "col-14",
    "name": "VCATECX Vintage Cowboy Graphic Washed T-Shirt",
    "price": 88290,
    "category": "collections",
    "image": "/images/IMG_1872.jpg",
    "secondaryImage": "/images/IMG_1875.jpg",
    "badge": "New",
    "description": "The VCATECX Vintage Cowboy Graphic Washed T-Shirt delivers a rugged western aesthetic with a contemporary streetwear silhouette.\n\nCrafted from soft cotton fabric and finished with a vintage sun-faded wash, this tee features a large cowboy rodeo-inspired graphic across the chest. The worn-in effect gives each piece a unique character, while the relaxed oversized fit provides effortless comfort and everyday versatility.\n\nPerfect for pairing with baggy denim, carpenter pants, shorts, or boots, this graphic tee blends Americana influences with modern streetwear styling.\n\nFeatures:\n\n• Premium cotton construction\n• Vintage sunwashed finish\n• Large cowboy graphic print\n• Soft and breathable fabric\n• Relaxed oversized fit\n• Ribbed crew neckline\n• Short sleeves\n• Streetwear-inspired silhouette\n• Unique faded effect throughout\n• Everyday casual styling\n\nStyle Notes:\n\nWear with washed denim, oversized shorts, western boots, or layered accessories for a rugged vintage-inspired look.\n\nFit & Sizing:\n\n• Oversized fit\n• Relaxed silhouette\n• True-to-size oversized look\n• Suitable for everyday wear"
  },
  {
    "id": "col-15",
    "name": "SVEER Woodland Camo Flip Flops",
    "price": 40500,
    "category": "collections",
    "image": "/images/IMG_1864.jpg",
    "secondaryImage": "/images/IMG_1866.jpg",
    "badge": "New",
    "description": "The SVEER Woodland Camo Flip Flops combine casual comfort with a military-inspired camouflage design.\n\nDesigned for everyday wear, these flip flops feature a woodland camouflage printed footbed paired with smooth matte brown straps for a clean and versatile look. The lightweight construction provides all-day comfort, while the durable sole offers reliable support for indoor and outdoor use.\n\nWhether you're heading to the beach, relaxing at home, or styling a laid-back streetwear outfit, these flip flops deliver effortless comfort and understated character.\n\nFeatures:\n\n• Woodland camouflage print footbed\n• Soft matte brown thong straps\n• Lightweight construction\n• Flexible and comfortable sole\n• Slip-on design\n• Durable everyday wear\n• Water-friendly materials\n• Easy-to-clean surface\n• Suitable for indoor and outdoor use\n\nStyle Notes:\n\nPair with cargo shorts, relaxed denim, swimwear, or casual summer outfits for an easy off-duty look.\n\nFit & Sizing:\n\n• Regular fit\n• True to size\n• Lightweight feel\n• Comfortable daily wear"
  },
  {
    "id": "bot-16",
    "name": "WANNA LAB Washed Faux Leather Bermuda Shorts",
    "price": 135000,
    "category": "bottoms",
    "image": "/images/IMG_1857.jpg",
    "secondaryImage": "/images/IMG_1860.jpg",
    "badge": "",
    "description": "The WANNA LAB Washed Faux Leather Bermuda Shorts blend industrial detailing with a bold contemporary silhouette.\n\nCrafted from premium faux leather, these shorts feature a unique cloud-wash finish that creates a naturally aged and worn appearance throughout the garment. The oversized Bermuda cut delivers a relaxed fit while maintaining structure and presence.\n\nA standout feature is the decorative metal clasp fastening system along the front fly and waistband, adding a utilitarian edge to the design. Additional hardware accents at the waistband reinforce the garment's industrial aesthetic.\n\nThe rear pocket features tonal graphic artwork that integrates seamlessly into the washed finish, while the wide-leg construction offers comfort and effortless movement.\n\nFeatures:\n\n• Premium faux leather construction\n• Vintage cloud-wash treatment\n• Oversized Bermuda silhouette\n• Decorative metal clasp fly closure\n• Hardware waistband detailing\n• Five-pocket construction\n• Tonal rear graphic print\n• Durable stitching throughout\n• Relaxed wide-leg fit\n• Statement streetwear design\n\nStyle Notes:\n\nPair with oversized hoodies, cropped jackets, knitwear, or graphic tees for a modern streetwear look. The washed finish and hardware details make these shorts a standout statement piece while remaining versatile enough for everyday styling.\n\nFit & Sizing:\n\n• Relaxed oversized fit\n• Knee-length Bermuda cut\n• Mid-rise waist\n• Wide-leg opening\n• True-to-size waist\n• Designed for a loose draped silhouette"
  },
  {
    "id": "bot-17",
    "name": "WANNA LAB Vintage Wash Wide-Leg Jeans",
    "price": 133000,
    "category": "bottoms",
    "image": "/images/IMG_1852.jpg",
    "secondaryImage": "/images/IMG_1854.jpg",
    "badge": "",
    "description": "The WANNA LAB Vintage Wash Wide-Leg Jeans deliver a perfectly worn-in aesthetic with contemporary oversized proportions.\n\nCrafted from premium heavyweight denim, these jeans feature an all-over vintage wash treatment with naturally faded whiskering across the thighs and knees. The distressed fading creates depth and character, giving the denim an authentic aged appearance without sacrificing durability.\n\nDesigned with a relaxed straight wide-leg silhouette, the fit offers comfort through the seat and thigh while maintaining a clean drape from hip to hem. Raw-edge hems add a subtle rugged finish that complements the vintage-inspired wash.\n\nThe neutral charcoal-grey wash makes these jeans exceptionally versatile, pairing effortlessly with oversized tees, hoodies, knitwear, and statement footwear.\n\nFeatures:\n\n• Premium heavyweight cotton denim\n• Vintage faded wash treatment\n• Natural whiskering details\n• Wide-leg straight silhouette\n• Raw unfinished hems\n• Five-pocket construction\n• Reinforced belt loops\n• Button and zip closure\n• Durable denim build\n• Unisex design\n\nStyle Notes:\n\nPair with oversized streetwear essentials, cropped outerwear, or minimalist basics for a balanced contemporary look. The vintage wash makes these jeans an easy everyday statement piece.\n\nFit & Sizing:\n\n• Relaxed oversized fit\n• Wide straight-leg cut\n• Mid-rise waist\n• True-to-size waist\n• Designed for a loose stacked fit"
  },
  {
    "id": "bot-18",
    "name": "YATREW Double Waist Raw Denim Wide-Leg Jeans",
    "price": 115000,
    "category": "bottoms",
    "image": "/images/IMG_1850.jpg",
    "secondaryImage": "/images/IMG_1850.jpg",
    "badge": "",
    "description": "The YATREW Double Waist Raw Denim Wide-Leg Jeans blend classic denim craftsmanship with contemporary oversized proportions and experimental detailing.\n\nConstructed from heavyweight raw denim, these jeans feature a standout layered double-waistband design that creates a stacked effect around the waistline. The exposed multi-button fly enhances the vintage-inspired aesthetic while maintaining a clean, structured appearance.\n\nDesigned with a relaxed oversized fit, the silhouette falls straight from the hip into a wide-leg profile, creating natural stacking at the hem. Contrast white stitching highlights the construction lines and reinforces the garment's workwear-inspired character.\n\nThe dark indigo wash offers versatility for everyday styling while allowing the unique waistband construction to remain the focal point.\n\nFeatures:\n\n• Premium heavyweight raw denim\n• Double-waistband layered construction\n• Exposed multi-button fly closure\n• Wide-leg oversized fit\n• Contrast white stitching\n• Classic five-pocket design\n• Structured straight-leg silhouette\n• Reinforced belt loops\n• Durable denim construction\n• Unisex design\n\nStyle Notes:\n\nPair with oversized tees, knitwear, cropped jackets, or statement footwear for a modern streetwear look. The double-waist detail works especially well with tucked or cropped tops.\n\nFit & Sizing:\n\n• Oversized fit\n• Wide-leg silhouette\n• High-rise construction\n• True-to-size waist\n• Designed for a relaxed stacked look"
  },
  {
    "id": "acc-19",
    "name": "Black8Mob Spider Web Plush Slippers",
    "price": 65000,
    "category": "accessories",
    "image": "/images/IMG_1841.jpg",
    "secondaryImage": "/images/IMG_1840.jpg",
    "badge": "",
    "description": "The Black8Mob Spider Web Plush Slippers combine comfort, streetwear aesthetics, and playful graphic detailing in a unique indoor footwear silhouette.\n\nCrafted with a soft plush upper, these slippers feature oversized embroidered spider web artwork across both feet, creating a bold visual statement inspired by comic-book and alternative street culture. The cushioned footbed provides comfort for daily wear, while the lightweight construction makes them ideal for lounging at home or styling as part of a contemporary lifestyle setup.\n\nThe monochrome black-and-white color palette allows the design to stand out while remaining easy to pair with a variety of casual looks.\n\nFeatures:\n\n• Soft plush upper construction\n• Embroidered spider web graphics\n• Cushioned comfort footbed\n• Lightweight indoor sole\n• Slip-on design\n• Soft lining for everyday comfort\n• Streetwear-inspired aesthetic\n• Durable stitching throughout\n• Unisex design\n• Comfortable all-day wear\n\nStyle Notes:\n\nPerfect for home wear, content creation, gifting, or adding a playful statement piece to a streetwear-inspired lifestyle collection.\n\nFit & Sizing:\n\n• Regular fit\n• True-to-size\n• Slip-on construction\n• Unisex sizing"
  },
  {
    "id": "bot-20",
    "name": "Project G/R Distressed Moto Denim",
    "price": 110000,
    "category": "bottoms",
    "image": "/images/IMG_1065.jpg",
    "secondaryImage": "/images/IMG_1064.jpg",
    "badge": "",
    "description": "The Project G/R Distressed Moto Denim is a contemporary take on classic biker-inspired trousers, combining a heavily washed finish with exaggerated proportions and technical panel construction.\n\nDesigned with articulated knee sections, curved seam lines, and a relaxed wide-leg profile, the garment delivers a strong futuristic streetwear aesthetic while maintaining everyday wearability. The distressed wash treatment creates a naturally aged appearance that gives every piece unique character and depth.\n\nThe oversized silhouette is designed to stack naturally over footwear, making it ideal for pairing with oversized tees, cropped sweatshirts, hoodies, and technical outerwear.\n\nFeatures:\n\n• Heavywashed vintage finish\n• Articulated moto knee panels\n• Curved ergonomic seam construction\n• Wide-leg oversized fit\n• Stacked-leg silhouette\n• Durable denim construction\n• Reinforced panel detailing\n• Functional front and back pockets\n• Streetwear-inspired design\n• Unisex styling\n\nStyle Notes:\n\nPair with oversized graphic tees, cropped sweatshirts, leather jackets, or technical outerwear for a modern streetwear look. The washed finish works especially well with monochrome and neutral wardrobes.\n\nFit & Sizing:\n\n• Oversized fit\n• Wide-leg silhouette\n• Designed for stacking\n• True-to-size waist\n• Unisex design"
  },
  {
    "id": "bot-21",
    "name": "Athiri Convertible Camo Utility Cargo",
    "price": 140000,
    "category": "bottoms",
    "image": "/images/IMG_1831.jpg",
    "secondaryImage": "/images/IMG_1835.jpg",
    "badge": "",
    "description": "The Athiri Convertible Camo Utility Cargo is built for versatility, combining military-inspired aesthetics with practical functionality. Designed with a detachable lower-leg construction, the trousers can be worn as full-length cargos or converted into shorts depending on the occasion and weather.\n\nConstructed from durable camouflage cotton fabric, the silhouette features oversized proportions, multiple utility pockets, articulated knee panels, and reinforced seam construction for both comfort and durability. The detachable lower section creates a unique layered look when worn as trousers while offering two distinct styling options in a single garment.\n\nWhether paired with oversized graphic tees, hoodies, knitwear, or technical outerwear, the Athiri Convertible Camo Utility Cargo delivers a rugged streetwear aesthetic with everyday practicality.\n\nFeatures:\n\n• Convertible 2-in-1 design\n• Full-length cargo trouser and short option\n• Premium camouflage cotton construction\n• Oversized relaxed fit\n• Multiple utility cargo pockets\n• Reinforced panel construction\n• Articulated leg design\n• Heavy-duty stitching throughout\n• Functional front and rear pockets\n• Streetwear utility aesthetic\n\nStyle Notes:\n\nWear full-length with boots, sneakers, or chunky footwear for a tactical-inspired silhouette. Remove the lower-leg panels for a relaxed summer-ready cargo short look.\n\nFit & Sizing:\n\n• Oversized fit\n• Relaxed wide-leg profile\n• True-to-size waist\n• Designed for stacking over footwear\n• Unisex styling"
  },
  {
    "id": "bot-22",
    "name": "Athiri Tactical Camo Utility Denim",
    "price": 136500,
    "category": "bottoms",
    "image": "/images/IMG_1825.jpg",
    "secondaryImage": "/images/IMG_1829.jpg",
    "badge": "",
    "description": "The Athiri Tactical Camo Utility Denim is designed for those who appreciate functional design, military-inspired aesthetics, and contemporary oversized fits. Constructed from durable camouflage denim, the pants feature a distinctive panelled construction with articulated knee sections and reinforced stitching throughout.\n\nAdjustable waist straps provide a customizable fit while the wide-leg silhouette creates a relaxed drape that stacks naturally over footwear. The curved panel design and moto-inspired ribbed knee detailing add dimension and structure, making the piece ideal for streetwear styling.\n\nBuilt to balance utility and style, these jeans pair effortlessly with oversized graphic tees, hoodies, knitwear, and outerwear for a modern tactical-inspired look.\n\nFeatures:\n\n• Premium camouflage denim construction\n• Wide-leg oversized fit\n• Adjustable side waist straps\n• Articulated moto-style knee panels\n• Reinforced panel construction\n• Heavy-duty stitching details\n• Relaxed stacked leg profile\n• Functional front and rear pockets\n• Streetwear and utility-inspired design\n• Unisex styling\n\nStyle Notes:\n\nPair with oversized washed tees, hoodies, bomber jackets, combat boots, or sneakers for a complete utility streetwear aesthetic. Designed to create a strong silhouette while maintaining everyday comfort.\n\nFit & Sizing:\n\n• Oversized fit\n• Wide-leg silhouette\n• Long stacked profile\n• True-to-size waist\n• Designed for relaxed everyday wear"
  },
  {
    "id": "top-23",
    "name": "Exitmode Maverick Vintage Football Jersey – Red/White",
    "price": 115000,
    "category": "tops",
    "image": "/images/IMG_1821.jpg",
    "secondaryImage": "/images/IMG_1823.jpg",
    "badge": "",
    "description": "The Exitmode Maverick Vintage Football Jersey combines classic football aesthetics with contemporary streetwear styling. Designed with bold red and white vertical stripes, a washed vintage finish, and oversized proportions, this jersey delivers a standout look that blends sports heritage with modern fashion.\n\nFeaturing embroidered-style crest graphics, front and back numbering, and signature Maverick branding, the piece is designed for everyday wear while maintaining the visual appeal of classic football kits. The relaxed fit allows for effortless layering and pairs seamlessly with cargos, denim, shorts, and wide-leg trousers.\n\nConstructed from lightweight breathable fabric, the jersey offers all-day comfort while delivering a distinctive retro-inspired aesthetic.\n\nFeatures:\n\n• Vintage football jersey design\n• Red and white striped pattern\n• Washed distressed finish\n• Front and back graphic details\n• Crew neckline\n• Relaxed oversized fit\n• Lightweight breathable construction\n• Streetwear-inspired styling\n• Unisex design\n\nStyle Notes:\n\nWear with oversized cargos, distressed denim, utility pants, or shorts for a complete streetwear look. Layer under jackets or pair with statement footwear for a modern sports-inspired outfit.\n\nFit & Sizing:\n\n• Oversized fit\n• Relaxed silhouette\n• True-to-size length\n• Designed for comfortable everyday wear"
  },
  {
    "id": "bot-24",
    "name": "EXITMODE Contrast Panel Carpenter Cargo Pants – Khaki",
    "price": 133500,
    "category": "bottoms",
    "image": "/images/IMG_0958.jpg",
    "secondaryImage": "/images/IMG_0961.jpg",
    "badge": "",
    "description": "The EXITMODE Contrast Panel Carpenter Cargo Pants blend classic utility workwear with contemporary streetwear styling. Designed with a relaxed wide-leg fit, these pants feature contrast panel construction across the thighs and rear, highlighted by geometric reinforcement stitching for added visual depth and durability.\n\nLarge utility pockets and carpenter-inspired detailing provide both functionality and character, while the neutral khaki colorway makes styling effortless across seasons. Built for comfort and everyday wear, the oversized silhouette creates a modern stacked look that pairs perfectly with oversized tees, hoodies, shirts, and outerwear.\n\nWhether styled casually or as part of a fashion-forward streetwear fit, these cargo pants deliver a strong balance of utility, comfort, and statement design.\n\nFeatures:\n\n• Relaxed wide-leg fit\n• Contrast utility panel construction\n• Reinforced geometric stitching\n• Carpenter-inspired detailing\n• Multiple oversized utility pockets\n• Durable heavyweight construction\n• Neutral khaki colorway\n• Full-length stacked silhouette\n• Belt loop waistband\n• Unisex styling\n\nStyle Notes:\n\nWear with oversized graphic tees, heavyweight hoodies, workwear jackets, or relaxed shirts. Complements sneakers, boots, and contemporary streetwear footwear.\n\nFit & Sizing:\n\n• Oversized fit\n• Wide-leg silhouette\n• Full-length cut\n• True-to-size waist\n• Designed for a relaxed stacked look"
  },
  {
    "id": "bot-25",
    "name": "Multi-Pocket Washed Cargo Pants – Black",
    "price": 125000,
    "category": "bottoms",
    "image": "/images/IMG_1048.jpg",
    "secondaryImage": "/images/IMG_1044.jpg",
    "badge": "",
    "description": "The Multi-Pocket Washed Cargo Pants combine functional utility design with a bold streetwear aesthetic. Constructed with an oversized relaxed fit, these cargos feature large dimensional cargo pockets positioned along the thighs and rear, creating a distinctive silhouette that stands out from conventional cargo pants.\n\nFinished in a washed black tone for a worn-in appearance, the pants offer depth, texture, and versatility. The wide-leg cut provides comfort while maintaining a strong contemporary profile suitable for everyday wear, creative styling, and fashion-forward streetwear looks.\n\nDesigned for those who appreciate statement pieces, these cargos pair effortlessly with oversized tees, hoodies, technical outerwear, and sneakers.\n\nFeatures:\n\n• Relaxed wide-leg fit\n• Washed black finish\n• Oversized utility cargo pockets\n• Multiple storage compartments\n• Heavy streetwear aesthetic\n• Reinforced panel construction\n• Belt loop waistband\n• Full-length silhouette\n• Durable everyday construction\n• Unisex styling\n\nStyle Notes:\n\nPair with oversized graphic tees, sleeveless tops, hoodies, bomber jackets, or technical outerwear for a modern streetwear fit. Works especially well with chunky sneakers and boots.\n\nFit & Sizing:\n\n• Oversized fit\n• Wide-leg silhouette\n• Full-length cut\n• True-to-size waist\n• Size up for a more exaggerated stacked look"
  },
  {
    "id": "top-26",
    "name": "Patchwork Badge Raw Hem Shirt – Black",
    "price": 61525,
    "category": "tops",
    "image": "/images/IMG_1808.jpg",
    "secondaryImage": "/images/IMG_1815.jpg",
    "badge": "",
    "description": "The Patchwork Badge Raw Hem Shirt combines clean tailoring with vintage-inspired streetwear detailing. Crafted in a versatile black colorway, this long-sleeve button-up features an assortment of embroidered and printed badge-style graphics scattered across the front, creating a unique collectible aesthetic.\n\nDesigned with a relaxed silhouette, classic point collar, and button-front closure, the shirt balances everyday wearability with standout visual character. The unfinished raw-edge hem adds a subtle deconstructed touch, reinforcing its contemporary streetwear appeal.\n\nEasy to style with denim, cargos, tailored trousers, or shorts, this piece works equally well as a standalone statement shirt or layered over a basic tee.\n\nFeatures:\n\n• Relaxed fit silhouette\n• Classic point collar\n• Full button-front closure\n• Vintage-inspired badge graphics\n• Raw-edge unfinished hem\n• Long sleeves with button cuffs\n• Lightweight comfortable construction\n• Minimal back design\n• Streetwear-inspired aesthetic\n• Unisex styling\n\nStyle Notes:\n\nLayer over a plain white tee with baggy denim and sneakers for a clean streetwear outfit, or wear buttoned up with tailored trousers for a more refined look.\n\nFit & Sizing:\n\n• Relaxed fit\n• True-to-size fit\n• Unisex design\n• Dropped shoulder appearance\n• Suitable for layering"
  },
  {
    "id": "top-27",
    "name": "Never Deviate Vintage Football Jersey",
    "price": 60000,
    "category": "tops",
    "image": "/images/IMG_1035.jpg",
    "secondaryImage": "/images/IMG_1034.jpg",
    "badge": "",
    "description": "The Never Deviate Vintage Football Jersey blends retro football culture with modern streetwear aesthetics. Designed with distressed vertical stripe graphics in deep black and burnt red tones, this statement piece delivers a worn-in vintage look while maintaining a clean contemporary silhouette.\n\nThe jersey features a classic V-neck polo collar, contrast white sleeves with graphic detailing, and prominent Never Deviate branding across the chest. Finished with crest-inspired artwork on the front and back, it captures the energy of vintage European football shirts while remaining versatile enough for everyday streetwear styling.\n\nCrafted from lightweight breathable fabric, the jersey offers all-day comfort whether worn casually with denim, cargos, shorts, or layered into a more elevated streetwear outfit.\n\nFeatures:\n\n• Vintage football-inspired design\n• Distressed vertical stripe graphic pattern\n• Contrast white graphic sleeves\n• V-neck polo collar\n• Front Never Deviate branding\n• Crest artwork on front and back\n• Lightweight breathable construction\n• Relaxed fit\n• Streetwear and football culture aesthetic\n• Unisex design\n\nStyle Notes:\n\nPair with baggy denim, carpenter pants, cargo shorts, or vintage sneakers for a complete streetwear look.\n\nFit & Sizing:\n\n• Relaxed fit\n• True-to-size fit\n• Unisex sizing\n• Comfortable everyday wear\n• Easy layering piece"
  },
  {
    "id": "col-28",
    "name": "California Raw Edge Vintage T-Shirt – Ivory",
    "price": 68450,
    "category": "collections",
    "image": "/images/IMG_1803.jpg",
    "secondaryImage": "/images/IMG_1807.jpg",
    "badge": "New",
    "description": "The California Raw Edge Vintage T-Shirt combines effortless vintage aesthetics with contemporary streetwear styling. Crafted from soft lightweight cotton, this piece features a faded California script graphic across the chest and subtle raw-edge detailing along the sleeves and hem for an authentic worn-in look.\n\nDesigned with a relaxed boxy fit, the tee drapes naturally for a casual silhouette that works perfectly with baggy denim, cargos, carpenter pants, or shorts. The lightly washed ivory finish enhances its vintage appeal while keeping the overall look clean and versatile.\n\nWhether worn on its own or layered beneath overshirts and jackets, this tee delivers understated character and everyday comfort.\n\nFeatures:\n\n• Soft lightweight cotton fabric\n• Vintage washed ivory finish\n• California script front graphic\n• Raw-edge sleeve and hem detailing\n• Relaxed boxy fit\n• Breathable construction\n• Minimalist vintage aesthetic\n• Unisex design\n• Easy everyday styling\n• Suitable for layering\n\nStyle Notes:\n\nPair with oversized denim, washed cargos, workwear pants, or vintage sneakers for a timeless streetwear-inspired outfit.\n\nFit & Sizing:\n\n• Relaxed fit\n• Slightly cropped boxy silhouette\n• Dropped shoulders\n• Unisex fit\n• True-to-size relaxed fit"
  },
  {
    "id": "col-29",
    "name": "Remedy Lips Graphic Oversized T-Shirt – Black",
    "price": 75000,
    "category": "collections",
    "image": "/images/IMG_1794.jpg",
    "secondaryImage": "/images/IMG_1795.jpg",
    "badge": "New",
    "description": "The Remedy Lips Graphic Oversized T-Shirt is a statement streetwear essential designed to stand out. Crafted from premium heavyweight cotton, this piece features Remedy’s signature lips artwork boldly printed across the chest, combining vintage pop-art influences with contemporary street culture.\n\nThe oversized silhouette provides a relaxed fit for everyday comfort while maintaining a strong visual presence. The striking contrast between the black body and vibrant graphic creates a standout piece that works effortlessly with baggy denim, cargos, shorts, and layered streetwear outfits.\n\nDesigned for those who appreciate bold graphics and expressive styling, this tee serves as both a wardrobe staple and a conversation piece.\n\nFeatures:\n\n• Premium heavyweight cotton construction\n• Signature Remedy lips graphic print\n• Oversized streetwear fit\n• Soft breathable fabric\n• Ribbed crew neckline\n• Relaxed drop-shoulder silhouette\n• High-quality front print\n• Durable everyday wear\n• Unisex styling\n• Easy layering piece\n\nStyle Notes:\n\nPair with distressed denim, carpenter pants, cargo trousers, oversized shorts, or layered flannel shirts for a complete streetwear look.\n\nFit & Sizing:\n\n• Oversized fit\n• True-to-size oversized silhouette\n• Dropped shoulders\n• Unisex fit\n• Size up for an extra relaxed look"
  },
  {
    "id": "col-30",
    "name": "Remedy Crew Hooded Plaid Flannel Shirt – Navy",
    "price": 96500,
    "category": "collections",
    "image": "/images/IMG_1790.jpg",
    "secondaryImage": "/images/IMG_1792.jpg",
    "badge": "New",
    "description": "The Remedy Crew Hooded Plaid Flannel Shirt blends classic flannel styling with contemporary streetwear design. Constructed from a soft brushed plaid fabric in deep navy tones, this piece features an attached black hood that creates a layered look without the bulk of wearing multiple garments.\n\nDesigned with an oversized silhouette, dropped shoulders, and a relaxed fit, it delivers comfort and versatility for everyday wear. The button-front closure, chest pockets, and subtle Remedy Crew branding maintain a clean aesthetic while preserving its street-inspired identity.\n\nThe hooded construction adds a modern edge, making it ideal for layering over graphic tees, oversized denim, cargo pants, or wide-leg trousers. Whether worn buttoned up or open as an overshirt, this piece offers effortless styling throughout the season.\n\nFeatures:\n\n• Soft brushed flannel fabric\n• Navy plaid pattern\n• Attached black hood\n• Button-front closure\n• Dual chest pockets\n• Relaxed oversized fit\n• Dropped shoulder construction\n• Lightweight layering piece\n• Streetwear-inspired design\n• Unisex styling\n• Everyday comfort\n• Signature Remedy Crew detailing\n\nStyle Notes:\n\nLayer over graphic tees, tank tops, thermal shirts, or hoodies. Pairs perfectly with baggy denim, cargos, carpenter pants, and sneakers for a modern streetwear look.\n\nFit & Sizing:\n\n• Oversized fit\n• True-to-size oversized silhouette\n• Designed for relaxed layering\n• Unisex fit\n• Model wears size L"
  },
  {
    "id": "bot-31",
    "name": "Remedy Crew Kiss Mark Distressed Utility Shorts – Olive Wash",
    "price": 123265,
    "category": "bottoms",
    "image": "/images/IMG_1782-1.jpg",
    "secondaryImage": "/images/IMG_1783.jpg",
    "badge": "",
    "description": "The Remedy Crew Kiss Mark Distressed Utility Shorts in Olive Wash combine rugged workwear influences with modern streetwear aesthetics. Constructed from durable cotton denim and finished with a heavily faded olive wash, these shorts feature distressed abrasions, subtle paint splatter effects, kiss-mark graphics, and utility-inspired pocket detailing.\n\nThe relaxed silhouette provides all-day comfort while maintaining a strong oversized streetwear look. Frayed distressing throughout the garment enhances the worn-in appearance, while the signature kiss-mark graphics add character and individuality.\n\nDesigned with utility side pockets and reinforced rear pockets, these shorts balance function and style effortlessly. The washed olive tone makes them easy to pair with graphic tees, oversized jerseys, hoodies, and sneakers for a complete contemporary streetwear outfit.\n\nFeatures:\n\n• Premium cotton denim construction\n• Vintage olive wash finish\n• Distressed detailing throughout\n• Frayed raw hem\n• Kiss-mark graphic accents\n• Paint splatter effects\n• Utility side pockets\n• Reinforced rear pockets\n• Relaxed fit silhouette\n• Mid-length design\n• Durable everyday construction\n• Streetwear-inspired styling\n• Unisex design\n\nStyle Notes:\n\nWear with oversized graphic tees, vintage sneakers, hoodies, workwear jackets, or mesh jerseys for an effortless streetwear aesthetic.\n\nFit & Sizing:\n\n• Relaxed fit\n• Mid-length shorts\n• True-to-size fit\n• Comfortable everyday wear\n• Designed for a loose streetwear silhouette"
  },
  {
    "id": "bot-32",
    "name": "Remedy Crew Kiss Mark Distressed Carpenter Jeans",
    "price": 131000,
    "category": "bottoms",
    "image": "/images/IMG_0988.jpg",
    "secondaryImage": "/images/IMG_0989.jpg",
    "badge": "",
    "description": "The Remedy Crew Kiss Mark Distressed Carpenter Jeans combine vintage workwear inspiration with expressive streetwear detailing. Crafted from durable heavyweight cotton fabric, these khaki jeans feature an aged washed finish, paint splatter effects, distressed abrasions, and signature kiss-mark graphics placed across the leg and rear panels.\n\nA ripped knee opening with raw frayed edges enhances the worn-in aesthetic, while carpenter-inspired utility pockets provide functional character. The oversized straight-leg silhouette delivers a relaxed drape that stacks naturally over footwear, making the jeans ideal for contemporary streetwear styling.\n\nUnique patchwork branding on the rear pocket and distressed detailing throughout create an authentic vintage appearance that feels naturally aged rather than manufactured. The neutral khaki colorway makes them easy to pair with graphic tees, oversized hoodies, work jackets, flannels, or boots.\n\nFeatures:\n\n• Heavyweight cotton construction\n• Vintage washed khaki finish\n• Distressed knee detailing\n• Raw frayed edges\n• Kiss-mark graphic accents\n• Paint splatter effects\n• Carpenter-inspired utility pockets\n• Oversized wide-leg silhouette\n• Relaxed straight fit\n• Stacked leg effect\n• Rear branded patch detail\n• Reinforced stitching\n• Durable everyday construction\n• Streetwear-inspired design\n• Unisex styling\n\nStyle Notes:\n\nPair with oversized T-shirts, graphic tees, hoodies, workwear jackets, flannels, boots, or sneakers for a rugged streetwear-inspired outfit.\n\nFit & Sizing:\n\n• Relaxed fit\n• Wide-leg silhouette\n• Full-length design\n• True-to-size fit\n• Suitable for stacked styling"
  },
  {
    "id": "top-33",
    "name": "Compost The Rich Limited Edition Spray Graphic T-Shirt",
    "price": 74145,
    "category": "tops",
    "image": "/images/IMG_1725.jpg",
    "secondaryImage": "/images/IMG_1725.jpg",
    "badge": "",
    "description": "The Compost The Rich Limited Edition Spray Graphic T-Shirt embraces raw self-expression through bold graffiti-inspired artwork and handcrafted streetwear aesthetics. Constructed from premium cotton, this white T-shirt features an oversized red spray-painted graphic across the front displaying the phrase “I’m Not Weird, I Am Limited Edition.”\n\nThe intentionally imperfect lettering, overspray details, and distressed paint effect create the appearance of authentic hand-applied street art. Designed to stand out while celebrating individuality, this piece blends underground DIY culture with contemporary fashion.\n\nIts minimalist white base provides the perfect canvas for the bold artwork, making it easy to style with baggy denim, distressed jeans, cargo pants, shorts, or layered streetwear outfits. Whether worn as a statement piece or incorporated into an everyday wardrobe, this T-shirt delivers attitude, personality, and originality.\n\nFeatures:\n\n• Premium cotton construction\n• Soft and breathable fabric\n• Oversized front graphic artwork\n• Hand-sprayed graffiti-inspired design\n• Distressed spray paint effect\n• Statement typography graphic\n• Relaxed streetwear silhouette\n• Ribbed crew neckline\n• Lightweight everyday comfort\n• Durable print application\n• Contemporary streetwear aesthetic\n• Unisex styling\n• Easy layering piece\n• Versatile white colorway\n• Comfortable all-day wear\n\nStyle Notes:\n\nPair with oversized denim, distressed jeans, cargos, sneakers, combat boots, or layered outerwear for a bold streetwear-inspired look.\n\nFit & Sizing:\n\n• Relaxed fit\n• True-to-size silhouette\n• Suitable for layering\n• Unisex design\n• Everyday streetwear comfort"
  },
  {
    "id": "top-34",
    "name": "Compost The Rich Rockstar Spray Graphic T-Shirt",
    "price": 82345,
    "category": "tops",
    "image": "/images/IMG_1723.jpg",
    "secondaryImage": "/images/IMG_1724.jpg",
    "badge": "",
    "description": "The Compost The Rich Rockstar Spray Graphic T-Shirt combines punk-inspired energy with raw streetwear aesthetics. Crafted from soft premium cotton, this cream-colored tee features six bold red stars across the front, finished with a spray-painted effect that gives the garment a handcrafted and rebellious character.\n\nThe back showcases oversized Rockstar graffiti artwork applied in a distressed spray-paint style with a red star accent integrated into the lettering. The intentionally imperfect finish captures the DIY spirit of underground street culture while creating a bold visual statement from every angle.\n\nIts relaxed silhouette and versatile colorway make it easy to style with distressed denim, oversized trousers, cargos, or layered streetwear pieces. Designed for those who appreciate expressive graphics and unconventional design, this T-shirt delivers standout appeal without sacrificing comfort.\n\nFeatures:\n\n• Premium cotton construction\n• Soft and breathable fabric\n• Six-star front graphic\n• Spray-painted visual effect\n• Oversized Rockstar back artwork\n• Distressed graffiti-inspired design\n• Relaxed streetwear fit\n• Durable ribbed crew neckline\n• Lightweight everyday comfort\n• High-quality graphic application\n• Statement front and back graphics\n• Unisex styling\n• Easy layering piece\n• Contemporary streetwear aesthetic\n• Suitable for year-round wear\n\nStyle Notes:\n\nPair with oversized denim, baggy cargos, distressed jeans, sneakers, combat boots, or layered outerwear for a bold streetwear-inspired outfit.\n\nFit & Sizing:\n\n• Relaxed fit\n• True-to-size silhouette\n• Comfortable everyday wear\n• Suitable for layering\n• Unisex design"
  },
  {
    "id": "top-35",
    "name": "Compost The Rich Cross Graphic T-Shirt",
    "price": 74145,
    "category": "tops",
    "image": "/images/IMG_1722.jpg",
    "secondaryImage": "/images/IMG_1721-1.jpg",
    "badge": "",
    "description": "The Compost The Rich Cross Graphic T-Shirt delivers a bold fusion of minimalist design and artistic symbolism. Crafted from soft premium cotton, the tee features a clean front design highlighted by a deep crimson cross positioned at the center chest, creating a striking yet understated aesthetic.\n\nThe back showcases a hand-drawn angelic graphic surrounded by radiant red accents, combining spiritual imagery with contemporary streetwear expression. The artwork's sketch-like execution gives the piece an authentic handcrafted feel while maintaining a modern and wearable silhouette.\n\nIts relaxed fit and versatile off-white colorway make it easy to pair with denim, cargos, shorts, or layered streetwear outfits. Whether worn as a statement piece or incorporated into an everyday wardrobe, this T-shirt offers comfort, individuality, and visual impact.\n\nFeatures:\n\n• Premium cotton construction\n• Soft and breathable fabric\n• Front crimson cross graphic\n• Large back angel illustration\n• Radiating red accent artwork\n• High-quality graphic print\n• Durable neckline construction\n• Relaxed everyday fit\n• Lightweight and comfortable\n• Streetwear-inspired design\n• Unisex styling\n• Easy layering piece\n• Suitable for year-round wear\n• Minimalist front aesthetic\n• Statement back graphic\n\nStyle Notes:\n\nPair with distressed denim, wide-leg jeans, cargo trousers, sneakers, boots, or layered outerwear for a contemporary streetwear look.\n\nFit & Sizing:\n\n• Relaxed fit\n• True-to-size silhouette\n• Comfortable shoulder profile\n• Suitable for everyday wear\n• Unisex design"
  },
  {
    "id": "top-36",
    "name": "Boneless 92 Performance Football Jersey T-Shirt",
    "price": 98995,
    "category": "tops",
    "image": "/images/IMG_1715.jpg",
    "secondaryImage": "/images/IMG_1716.jpg",
    "badge": "",
    "description": "The Boneless 92 Performance Football Jersey T-Shirt combines classic football jersey aesthetics with modern streetwear styling. Designed with a clean athletic silhouette, this jersey features bold Boneless branding across the chest, a premium embroidered crest, contrast piping details, and a large \"92\" graphic on the back for a vintage sports-inspired look.\n\nConstructed from lightweight performance fabric with a breathable mesh-lined interior, the jersey offers excellent airflow and all-day comfort whether worn casually or styled as part of a contemporary streetwear outfit. The raglan sleeve construction improves mobility while enhancing the athletic profile of the garment.\n\nThe minimalist black colorway is accented with crisp white graphics and subtle red interior mesh details, creating a clean yet striking appearance. Its relaxed fit makes it easy to pair with baggy denim, cargo pants, shorts, or layered streetwear looks.\n\nPerfect for everyday wear, sports-inspired styling, festivals, casual outings, and modern urban fashion.\n\nFeatures:\n\n• Lightweight performance fabric\n• Breathable mesh-lined interior\n• Boneless chest branding\n• Embroidered crest patch\n• Large \"92\" back graphic\n• Contrast piping details\n• Athletic football jersey design\n• Raglan sleeve construction\n• Relaxed oversized fit\n• Moisture-managing fabric\n• Soft and comfortable feel\n• Durable graphic application\n• Streetwear-inspired silhouette\n• Unisex design\n• Easy everyday styling\n\nStyle Notes:\n\nWear with oversized denim, cargo pants, parachute trousers, track pants, sneakers, or chunky footwear for a complete sportswear-meets-streetwear aesthetic.\n\nFit & Sizing:\n\n• Relaxed fit\n• Slightly oversized silhouette\n• True-to-size shoulders\n• Comfortable everyday wear\n• Suitable for layering"
  },
  {
    "id": "bot-37",
    "name": "Boneless Light Wash Distressed Wide Leg Jeans",
    "price": 109245,
    "category": "bottoms",
    "image": "/images/IMG_1709.jpg",
    "secondaryImage": "/images/IMG_1713.jpg",
    "badge": "",
    "description": "The Boneless Light Wash Distressed Wide Leg Jeans deliver a clean vintage-inspired aesthetic with contemporary oversized streetwear proportions. Crafted from premium washed denim, these jeans feature a soft faded light-blue finish enhanced by subtle distressing, paint splatter effects, embroidered graphic accents, and naturally worn detailing.\n\nDesigned with a relaxed wide-leg silhouette, the jeans provide a comfortable drape from hip to hem while maintaining a structured shape that complements modern streetwear styling. Adjustable side waist tabs offer improved fit customization, while the classic five-pocket construction preserves everyday functionality.\n\nThe carefully placed embroidered patches, distressed abrasions, paint markings, and faded wash treatment create a lived-in character that gives each pair a unique vintage appearance. The oversized leg opening allows effortless pairing with sneakers, skate shoes, chunky footwear, and contemporary casual looks.\n\nPerfect for everyday wear, these jeans combine comfort, versatility, and authentic street-inspired design, making them an essential addition to any modern wardrobe.\n\nFeatures:\n\n• Premium washed denim construction\n• Vintage-inspired light wash finish\n• Relaxed wide-leg silhouette\n• Oversized streetwear fit\n• Adjustable side waist tabs\n• Distressed detailing\n• Paint splatter accents\n• Embroidered graphic patches\n• Classic five-pocket design\n• Belt loop waistband\n• Button and zip closure\n• Soft faded treatment\n• Durable denim construction\n• Unisex streetwear styling\n• Everyday casual versatility\n\nStyle Notes:\n\nPair with oversized graphic tees, hoodies, flannel shirts, varsity jackets, bomber jackets, skate shoes, retro sneakers, or chunky footwear for a complete streetwear look.\n\nFit & Sizing:\n\n• Wide-leg fit\n• Relaxed through hip and thigh\n• Full-length silhouette\n• Slightly oversized profile\n• True-to-size waist\n• Comfortable everyday wear"
  },
  {
    "id": "acc-38",
    "name": "Censmade Camouflage Crescent Shoulder Bag",
    "price": 110000,
    "category": "accessories",
    "image": "/images/IMG_0953.jpg",
    "secondaryImage": "/images/IMG_0956.jpg",
    "badge": "",
    "description": "The Censmade Camouflage Crescent Shoulder Bag combines military-inspired aesthetics with modern streetwear functionality. Designed with a distinctive crescent silhouette, this oversized shoulder bag features a textured camouflage fabric that adds depth, character, and visual appeal to any outfit.\n\nIts relaxed slouchy construction creates a naturally draped shape while providing generous storage space for daily essentials. The wide integrated shoulder strap ensures comfortable wear throughout the day, making it ideal for commuting, travel, shopping, school, or casual everyday use.\n\nThe spacious interior offers ample room for phones, wallets, tablets, books, accessories, and other essentials while maintaining a lightweight and versatile profile. The camouflage pattern delivers a rugged urban aesthetic that pairs effortlessly with oversized denim, cargo pants, hoodies, graphic tees, workwear, and contemporary streetwear outfits.\n\nWhether worn as a statement accessory or a practical everyday carry bag, the Censmade Crescent Shoulder Bag balances functionality with modern fashion-forward design.\n\nFeatures:\n\n• Textured camouflage fabric construction\n• Oversized crescent shoulder bag design\n• Spacious main compartment\n• Comfortable wide shoulder strap\n• Lightweight everyday carry design\n• Soft slouchy silhouette\n• Large storage capacity\n• Streetwear-inspired aesthetic\n• Durable fabric construction\n• Easy-access opening\n• Unisex design\n• Travel-friendly profile\n• Daily essentials organizer\n• Contemporary urban styling\n\nStyle Notes:\n\nPerfectly pairs with oversized denim, cargo trousers, hoodies, utility jackets, graphic tees, workwear pieces, sneakers, combat boots, and contemporary streetwear outfits.\n\nFit & Capacity:\n\n• One-size design\n• Oversized silhouette\n• Relaxed draped structure\n• Large-capacity interior\n• Comfortable shoulder carry\n• Suitable for everyday essentials and accessories"
  },
  {
    "id": "bot-39",
    "name": "RYE CHASIN 500KG Fatman Jeans",
    "price": 190450,
    "category": "bottoms",
    "image": "/images/IMG_0948.jpg",
    "secondaryImage": "/images/IMG_0952.jpg",
    "badge": "",
    "description": "The RYE CHASIN 500KG Fatman Jeans are an extreme take on contemporary oversized denim. Crafted from heavyweight black denim, these statement jeans feature a dramatically exaggerated wide-leg silhouette with sculpted panel construction that creates volume, structure, and movement from every angle.\n\nDesigned with architectural seam placements, oversized rear utility pockets, and high-contrast stitching, the Fatman Jeans deliver a futuristic streetwear aesthetic while maintaining everyday wearability. The oversized fit creates a stacked effect around the legs, making them ideal for pairing with cropped hoodies, fitted tanks, leather jackets, oversized tees, and chunky footwear.\n\nThe unique panel design extends from the waistband through the legs, creating a distinctive balloon-like profile that defines the silhouette. Finished with premium construction details and durable heavyweight denim, these jeans are built for those who want their denim to be the focal point of an outfit.\n\nFeatures:\n\n• Heavyweight premium black denim\n• Signature 500KG Fatman silhouette\n• Extreme wide-leg construction\n• Sculpted oversized panel detailing\n• Contrast white stitching\n• Oversized rear patch pockets\n• Structured balloon-leg shape\n• Button and zip fly closure\n• Durable reinforced seams\n• Streetwear-inspired design\n• Stacked leg effect\n• Relaxed oversized fit\n• Functional front and rear pockets\n• Statement architectural construction\n• Premium denim fabrication\n\nStyle Notes:\n\nPair with cropped hoodies, fitted tank tops, leather jackets, oversized graphic tees, combat boots, chunky sneakers, platform footwear, or streetwear outerwear for a bold contemporary look.\n\nFit:\n\n• Oversized fit\n• Extremely wide leg\n• Relaxed through waist and hips\n• Structured balloon silhouette\n• Full-length stacked profile\n• True-to-size waist\n• Designed for an exaggerated fit"
  },
  {
    "id": "bot-40",
    "name": "RYE CHASIN Duct-Taped Washed Denim Jeans",
    "price": 228650,
    "category": "bottoms",
    "image": "/images/IMG_2325.jpeg",
    "secondaryImage": "/images/IMG_2329.jpeg",
    "badge": "",
    "description": "The Duct Tape Repair Washed Denim Jeans blend rugged workwear inspiration with contemporary streetwear styling. Constructed from heavyweight 14.5oz premium denim, these jeans feature a heavily washed light-blue finish with strategically distressed details and duct tape-inspired repair graphics throughout the garment.\n\nDesigned with a relaxed lumberjack silhouette, the jeans offer generous room through the thigh and leg while maintaining a structured shape. Oversized utility pockets, exposed repair elements, stacked hems, and a multi-button fly create a distinctive industrial-inspired aesthetic that stands out from traditional denim.\n\nThe contrast repair detailing gives the appearance of a well-worn pair that has been repeatedly restored over time, creating depth, character, and a unique visual identity. Perfect for streetwear enthusiasts looking for statement denim with strong personality and styling versatility.\n\nFeatures:\n\n• Premium 14.5oz heavyweight denim\n• Light washed denim finish\n• Duct tape-inspired repair detailing\n• Heavily distressed design\n• Oversized utility cargo pockets\n• Multi-button fly closure\n• Relaxed lumberjack fit\n• Straight-leg construction\n• Stacked hem effect\n• Reinforced stitching\n• Functional front and rear pockets\n• Vintage workwear inspiration\n• Streetwear-focused silhouette\n• Durable heavyweight fabrication\n• Statement design aesthetic\n\nStyle Notes:\n\nPair with oversized hoodies, graphic tees, varsity jackets, flannel shirts, tank tops, work boots, sneakers, or combat boots for a complete streetwear-inspired look.\n\nFit:\n\n• Relaxed fit\n• Straight leg\n• Slightly oversized silhouette\n• Stacked leg design\n• True-to-size waist\n• Size up for a more exaggerated baggy fit"
  },
  {
    "id": "col-41",
    "name": "Layered Plaid Short Sleeve Overshirt",
    "price": 74395,
    "category": "collections",
    "image": "/images/IMG_1694.jpg",
    "secondaryImage": "/images/IMG_1700.jpg",
    "badge": "New",
    "description": "The Layered Plaid Short Sleeve Overshirt combines classic flannel-inspired aesthetics with a contemporary layered streetwear approach. Crafted from soft plaid fabric in a rich burgundy and beige check pattern, the shirt features a built-in black inner tank top that creates a clean layered look without the need for additional styling pieces.\n\nDesigned with a relaxed silhouette, the shirt offers all-day comfort while maintaining a structured appearance through its camp collar, button-front closure, and chest pocket with diagonal plaid alignment. The integrated inner layer adds depth and contrast, making the garment stand out while simplifying outfit coordination.\n\nIts lightweight construction makes it ideal for warm-weather wear, casual outings, vacations, and everyday styling. Whether worn buttoned up or open, the layered design delivers a modern streetwear-inspired look with minimal effort.\n\nFeatures:\n\n• Integrated black inner tank top\n• Soft plaid woven fabric\n• Relaxed oversized fit\n• Classic camp collar\n• Button-front closure\n• Contrast layered construction\n• Matching chest pocket\n• Lightweight and breathable\n• Short sleeve design\n• Comfortable everyday wear\n• Easy-to-style color palette\n• Streetwear-inspired silhouette\n• Reinforced stitching\n• Unisex styling\n\nStyle Notes:\n\nWear with wide-leg denim, cargo trousers, carpenter pants, shorts, or relaxed chinos. Complete the look with sneakers, loafers, boots, or slides for a versatile casual outfit.\n\nFit:\n\n• Relaxed fit\n• Slightly oversized silhouette\n• Dropped shoulders\n• True-to-size fit\n• Size up for a more oversized look"
  },
  {
    "id": "top-42",
    "name": "Exitmode Waffle Knit Patch Polo Shirt",
    "price": 121500,
    "category": "tops",
    "image": "/images/IMG_1692.jpg",
    "secondaryImage": "/images/IMG_1693.jpg",
    "badge": "",
    "description": "The Exitmode Waffle Knit Patch Polo Shirt delivers a unique blend of vintage motorsport influences and contemporary streetwear design. Constructed from a textured waffle-knit fabric, this polo offers enhanced comfort, breathability, and visual depth compared to traditional jersey polos.\n\nDesigned with a relaxed cropped silhouette, the shirt features multiple embroidered and woven patch details across the chest and sleeves, creating a race-inspired aesthetic that stands out without overwhelming the garment's clean design.\n\nThe structured polo collar and buttonless placket maintain a refined appearance, while the soft waffle texture provides all-day comfort. Its versatile grey colorway allows easy pairing with denim, cargo pants, shorts, and sneakers.\n\nIdeal for casual outings, summer styling, and everyday streetwear looks, this polo combines premium detailing with effortless wearability.\n\nFeatures:\n\n• Premium waffle knit fabric\n• Relaxed streetwear fit\n• Embroidered chest graphics\n• Multi-patch sleeve detailing\n• Textured construction\n• Classic polo collar\n• Soft and breathable fabric\n• Lightweight feel\n• Cropped silhouette\n• Reinforced seams\n• Comfortable everyday wear\n• Motorsport-inspired design\n• Unisex styling\n• Easy layering piece\n\nStyle Notes:\n\nPair with distressed denim, oversized shorts, cargos, or relaxed-fit trousers. Complete the look with sneakers, loafers, or sandals for an elevated casual outfit.\n\nFit:\n\n• Relaxed fit\n• Slightly cropped length\n• Dropped shoulders\n• True-to-size fit\n• Size up for a more oversized look"
  },
  {
    "id": "col-43",
    "name": "Antidote World Tour Varsity Jacket",
    "price": 151950,
    "category": "collections",
    "image": "/images/IMG_1683.jpg",
    "secondaryImage": "/images/IMG_1681.jpg",
    "badge": "New",
    "description": "The Antidote World Tour Varsity Jacket combines classic collegiate aesthetics with contemporary streetwear styling. Crafted in a versatile black colorway, this jacket features multiple embroidered and chenille patches across the front, sleeves, and back, creating a bold varsity-inspired look.\n\nDesigned with a relaxed oversized fit, the jacket offers comfortable layering over hoodies, tees, and knitwear. Ribbed collar, cuffs, and hem provide structure while the snap-button front closure delivers timeless varsity jacket functionality.\n\nThe back showcases a large Antidote World Tour graphic, reinforcing the jacket’s statement appeal, while the premium patchwork detailing adds texture and visual depth throughout the garment.\n\nPerfect for cooler weather, casual outings, and elevated streetwear styling, this varsity jacket pairs effortlessly with baggy denim, cargo pants, and sneakers for a complete urban look.\n\nFeatures:\n\n• Premium varsity jacket construction\n• Oversized streetwear fit\n• Embroidered chenille patches\n• Large back graphic print\n• Snap-button front closure\n• Ribbed collar, cuffs, and hem\n• Multiple sleeve graphics\n• Soft interior lining\n• Durable outer fabric\n• Relaxed shoulder construction\n• Functional side pockets\n• Statement collegiate design\n• Layering-friendly silhouette\n• Unisex styling\n\nStyle Notes:\n\nWear with distressed denim, stacked jeans, cargo pants, oversized tees, hoodies, and sneakers for a complete streetwear-inspired outfit.\n\nFit:\n\n• Oversized fit\n• Relaxed body\n• Dropped shoulders\n• True-to-size for oversized look\n• Size down for a more regular fit"
  },
  {
    "id": "bot-44",
    "name": "Black8Mob Vintage Wash Stacked Baggy Denim Jeans",
    "price": 135000,
    "category": "bottoms",
    "image": "/images/IMG_1677.jpg",
    "secondaryImage": "/images/IMG_1679.jpg",
    "badge": "",
    "description": "The Vintage Wash Stacked Baggy Denim Jeans are crafted for those who appreciate bold proportions and contemporary streetwear aesthetics. Featuring an oversized fit with an exaggerated stacked leg design, these jeans create a striking silhouette that embodies modern urban fashion.\n\nConstructed from durable denim and finished with a heavily faded vintage wash, the jeans showcase a naturally worn-in appearance with subtle distressing throughout. The oversized cut provides exceptional comfort while allowing the fabric to stack dramatically around footwear for a statement look.\n\nThe relaxed rise, roomy thigh construction, and wide-leg profile make these jeans ideal for pairing with oversized graphic tees, flannel shirts, hoodies, varsity jackets, and workwear-inspired boots. Distressed accents and washed effects add character without overwhelming the clean overall design.\n\nWhether styled casually or incorporated into a layered streetwear outfit, these jeans offer versatility while maintaining a distinctive fashion-forward presence.\n\nFeatures:\n\n• Premium heavyweight denim construction\n• Vintage light blue wash\n• Oversized baggy fit\n• Stacked leg design\n• Heavy fading and whiskering effects\n• Distressed detailing\n• Wide-leg silhouette\n• Relaxed rise\n• Classic five-pocket construction\n• Belt loop waistband\n• Durable reinforced seams\n• Streetwear-inspired proportions\n• Comfortable everyday wear\n• Unisex styling\n\nStyle Notes:\n\nPair with oversized graphic tees, cropped jackets, flannel overshirts, varsity jackets, or hoodies for a complete streetwear aesthetic. The stacked hem works especially well with Timberland boots, chunky sneakers, and statement footwear.\n\nFit:\n\n• Extra baggy fit\n• Wide leg opening\n• Extended stacking length\n• Relaxed through seat and thigh\n• True-to-size waist\n• Oversized silhouette"
  },
  {
    "id": "top-45",
    "name": "Exitmode Reversible Plaid Varsity Shirt Jacket",
    "price": 139000,
    "category": "tops",
    "image": "/images/IMG_1667.jpg",
    "secondaryImage": "/images/IMG_1671.jpg",
    "badge": "",
    "description": "The Exitmode Reversible Plaid Varsity Shirt Jacket delivers exceptional versatility by combining two completely different aesthetics into a single statement piece. Designed for individuals who appreciate innovative fashion and adaptable styling, this reversible garment allows effortless transitions between classic plaid streetwear and bold varsity-inspired outerwear.\n\nOn one side, the jacket showcases a clean blue plaid flannel design crafted with a timeless tartan pattern. The shirt-inspired construction features a structured collar, relaxed silhouette, and subtle sleeve graphics including the Maverick lion artwork, creating a refined yet contemporary streetwear appearance.\n\nReverse the garment to reveal a varsity-inspired design featuring contrasting blue and white athletic stripe panels, embroidered chest branding, and a large “03” graphic on the back. This side embraces collegiate sportswear influences while maintaining a premium fashion-forward identity.\n\nConstructed with quality materials and precision craftsmanship, the reversible design offers two distinct outfits in one garment, maximizing styling possibilities without compromising comfort or durability. Whether paired with stacked denim, cargos, wide-leg trousers, or layered over essential basics, this piece serves as a standout addition to any modern wardrobe.\n\nFeatures:\n\n• Fully reversible two-in-one design\n• Blue plaid flannel exterior\n• Varsity-inspired reverse side\n• Premium dual-fabric construction\n• Relaxed oversized fit\n• Structured shirt collar\n• Button-front closure\n• Athletic stripe detailing\n• Embroidered branding elements\n• Large \"03\" back graphic\n• Maverick sleeve artwork\n• Long sleeves with relaxed cuffs\n• Durable reinforced stitching\n• Lightweight layering construction\n• Streetwear-inspired silhouette\n• Unisex styling\n\nReversible Styling Options:\n\nPlaid Side:\n• Classic tartan aesthetic\n• Everyday casual styling\n• Vintage-inspired streetwear look\n• Easy layering with denim and cargos\n\nVarsity Side:\n• Athletic collegiate influence\n• Bold graphic statement appearance\n• Sport-luxury streetwear styling\n• Elevated outerwear aesthetic\n\nStyle Notes:\n\nWear the plaid side for a clean, timeless streetwear look or reverse to the varsity side when a more graphic-driven outfit is desired. Perfectly complements distressed denim, stacked jeans, oversized trousers, utility pants, and statement footwear.\n\nFit:\n\n• Relaxed fit\n• Slightly cropped body length\n• Oversized shoulder profile\n• Comfortable layering silhouette\n• True-to-size fit\n• Unisex sizing"
  },
  {
    "id": "top-46",
    "name": "DSWN Cross Graphic Plaid Overshirt",
    "price": 120000,
    "category": "tops",
    "image": "/images/IMG_1659.jpg",
    "secondaryImage": "/images/IMG_1660.jpg",
    "badge": "",
    "description": "The DSWN Cross Graphic Plaid Overshirt reimagines the classic flannel shirt through a contemporary streetwear lens. Designed with a bold yellow and navy plaid pattern, this piece delivers a strong visual presence while maintaining the versatility expected from an everyday layering essential.\n\nConstructed from heavyweight brushed cotton fabric, the overshirt offers structure, durability, and comfort. The front features dual flap chest pockets, custom metal snap buttons, and premium branded hardware that elevate the garment beyond a traditional plaid shirt. Subtle distressing along key seams enhances its worn-in character and gives the piece an authentic vintage-inspired appeal.\n\nAt the back, a large distressed cross graphic serves as the focal point of the design. The oversized artwork combines gothic influences, industrial aesthetics, and streetwear sensibilities, creating a striking contrast against the vibrant plaid background. The cracked print finish further reinforces the garment’s aged and rebellious identity.\n\nThe relaxed oversized silhouette allows effortless layering over tees, hoodies, and knitwear, making it suitable for year-round styling. Whether worn open as an outer layer or buttoned as a standalone statement piece, this overshirt brings depth, texture, and individuality to any wardrobe.\n\nFeatures:\n\n• Heavyweight brushed cotton construction\n• Yellow and navy plaid pattern\n• Relaxed oversized fit\n• Dual flap chest pockets\n• Custom branded metal hardware\n• Snap button front closure\n• Distressed seam detailing\n• Large back cross graphic print\n• Vintage-inspired cracked artwork finish\n• Structured collar design\n• Durable reinforced stitching\n• Layer-friendly silhouette\n• Streetwear and grunge-inspired aesthetic\n• Unisex design\n\nStyle Notes:\n\nLayer over a washed graphic tee, oversized hoodie, or thermal top. Pair with baggy denim, carpenter pants, cargos, or distressed jeans. Complete the look with combat boots, skate shoes, or vintage-inspired sneakers for a contemporary streetwear outfit.\n\nFit:\n\n• Oversized fit\n• Relaxed shoulder construction\n• Straight body profile\n• Designed for layering\n• Unisex sizing\n• True-to-size oversized fit"
  },
  {
    "id": "top-47",
    "name": "Route 66 Layered Camo Sleeve Tee",
    "price": 98000,
    "category": "tops",
    "image": "/images/IMG_1652.jpg",
    "secondaryImage": "/images/IMG_1658.jpg",
    "badge": "",
    "description": "The Route 66 Layered Camo Sleeve Tee combines vintage Americana references with modern streetwear design, creating a statement piece that feels both rugged and contemporary. Built around a layered construction, the garment merges the relaxed comfort of an oversized short-sleeve tee with the visual depth of distressed camouflage long sleeves.\n\nCrafted from premium heavyweight cotton, the body features a washed black finish that delivers a naturally aged appearance. The front showcases a collection of vintage-inspired graphics including the iconic Route 66 shield, distressed typography, and archival-style artwork that reinforce the garment's nostalgic character.\n\nThe standout feature lies in the integrated camouflage sleeves. Constructed from textured fabric with distressed detailing throughout, the sleeves introduce contrast, dimension, and a military-inspired edge. The layered construction creates the appearance of two garments styled together while maintaining the convenience and comfort of a single piece.\n\nA relaxed oversized silhouette provides effortless drape, making it ideal for contemporary streetwear styling. The split neckline detail further elevates the design, offering a unique alternative to the traditional crewneck while adding subtle visual interest.\n\nDesigned for those who appreciate vintage graphics, layered styling, and experimental streetwear silhouettes, this piece delivers a bold yet versatile addition to any wardrobe.\n\nFeatures:\n\n• Premium heavyweight cotton body\n• Washed vintage black finish\n• Integrated layered long-sleeve construction\n• Distressed camouflage sleeves\n• Route 66 inspired graphic artwork\n• Vintage-style typography print\n• Oversized relaxed fit\n• Unique split-neck collar design\n• Soft and breathable fabric\n• Reinforced stitching throughout\n• Streetwear-inspired proportions\n• Layered look without additional bulk\n• Unisex styling\n• Everyday comfort and versatility\n\nStyle Notes:\n\nPair with distressed denim, cargo pants, oversized trousers, or stacked sweatpants. Complete the look with combat boots, skate shoes, or chunky sneakers for a contemporary streetwear outfit.\n\nFit:\n\n• Oversized fit\n• Dropped shoulders\n• Relaxed body silhouette\n• Extended sleeve coverage\n• Unisex design\n• True-to-size oversized fit"
  },
  {
    "id": "col-48",
    "name": "4th3ex Performance Boxer Briefs",
    "price": 40000,
    "category": "collections",
    "image": "/images/IMG_1644.jpg",
    "secondaryImage": "/images/IMG_1643.jpg",
    "badge": "New",
    "description": "The 4th3ex Performance Boxer Briefs are designed to deliver exceptional comfort, support, and freedom of movement throughout the day. Combining athletic functionality with a clean minimalist aesthetic, these boxer briefs provide a premium foundation for everyday wear.\n\nCrafted from a lightweight stretch-performance fabric, the design conforms naturally to the body while maintaining breathability and flexibility. The smooth construction reduces friction and allows unrestricted movement whether worn during daily activities, travel, training sessions, or extended periods of wear.\n\nA standout feature is the oversized branded elastic waistband, engineered to provide a secure fit without excessive pressure. The dual-logo waistband creates a distinctive visual identity while ensuring long-lasting shape retention and comfort.\n\nThe streamlined silhouette offers a supportive fit through the waist and leg openings, helping maintain stability without restricting mobility. Flatlock seam construction minimizes irritation against the skin, while the moisture-wicking fabric assists in keeping the wearer cool and comfortable throughout the day.\n\nDesigned for those who value both performance and style, the 4th3ex Performance Boxer Briefs combine modern athletic technology with premium everyday comfort.\n\nFeatures:\n\n• Premium stretch-performance fabric\n• Soft-touch lightweight construction\n• Moisture-wicking technology\n• Breathable fabric structure\n• Supportive athletic fit\n• Signature branded elastic waistband\n• Four-way stretch mobility\n• Flatlock seam construction\n• Shape-retention waistband\n• Comfortable all-day wear\n• Lightweight feel\n• Smooth body-contouring fit\n• Minimalist modern design\n• Suitable for daily and active use\n\nStyle Notes:\n\nIdeal as an everyday essential beneath denim, trousers, activewear, or streetwear outfits. Designed to provide comfort and support without compromising mobility.\n\nFit:\n\n• Athletic fit\n• Mid-rise waist\n• Supportive stretch construction\n• True-to-size fit\n• Flexible movement\n• Comfortable all-day wear"
  },
  {
    "id": "bot-49",
    "name": "Fourth3ex Layered Panel Wide-Leg Sweatpants",
    "price": 161800,
    "category": "bottoms",
    "image": "/images/IMG_1632.jpg",
    "secondaryImage": "/images/IMG_1634.jpg",
    "badge": "",
    "description": "The Layered Panel Wide-Leg Sweatpants combine vintage athletic influences with modern streetwear aesthetics. Designed with an oversized silhouette and innovative panel construction, these sweatpants deliver a bold statement while maintaining everyday comfort.\n\nCrafted from heavyweight cotton-blend fleece, the design features a distinctive double-waist effect that creates the illusion of layered garments. The exposed black side panels with contrast stripe detailing draw inspiration from classic track pants while introducing depth and visual movement to the silhouette.\n\nLarge patch pockets at the back enhance functionality while reinforcing the garment's utility-inspired appeal. The wide-leg construction allows the fabric to stack naturally over footwear, creating the relaxed drape associated with contemporary streetwear styling.\n\nThe soft grey body contrasts with the black athletic panels, resulting in a balanced design that feels both nostalgic and modern. The embroidered crest detail on the front adds a subtle statement element without overwhelming the overall aesthetic.\n\nPerfect for pairing with oversized jerseys, graphic tees, hoodies, and sneakers, these sweatpants offer versatility while remaining visually distinctive. Designed for those who appreciate experimental silhouettes and elevated casualwear, the Layered Panel Wide-Leg Sweatpants bring together comfort, function, and progressive design.\n\nFeatures:\n\n• Premium heavyweight cotton-blend fleece\n• Oversized relaxed fit\n• Double-waist layered effect\n• Wide-leg silhouette\n• Contrast side panel construction\n• Athletic stripe detailing\n• Elastic waistband\n• Large rear patch pockets\n• Soft brushed interior\n• Stacked leg profile\n• Reinforced seam construction\n• Comfortable everyday wear\n• Contemporary streetwear aesthetic\n• Unisex styling\n\nStyle Notes:\n\nPair with oversized sports jerseys, graphic tees, hoodies, varsity jackets, or technical outerwear. Complete the look with chunky sneakers or skate-inspired footwear for a modern streetwear outfit.\n\nFit:\n\n• Oversized fit\n• Wide through hip and thigh\n• Extra-long stacked leg\n• Relaxed drape\n• Unisex design\n• True-to-size oversized silhouette"
  },
  {
    "id": "bot-50",
    "name": "Chaos Script Utility Shorts",
    "price": 130000,
    "category": "bottoms",
    "image": "/images/IMG_1627.jpg",
    "secondaryImage": "/images/IMG_1631.jpg",
    "badge": "",
    "description": "The Chaos Script Utility Shorts redefine contemporary streetwear through a combination of utilitarian construction, experimental graphics, and artistic distressing. Crafted from durable cotton-blend fabric in a versatile khaki tone, these shorts deliver a distinctive visual identity inspired by underground fashion, industrial design, and deconstructed workwear aesthetics.\n\nAt the center of the design is an unconventional overlapping front panel that introduces depth, movement, and asymmetry to the garment. This layered construction creates a unique visual profile while reinforcing the shorts' avant-garde appeal. Distressed script graphics spread across the front and rear panels, producing a worn-in, rebellious character that feels both raw and intentional.\n\nHand-applied paint splatter effects in contrasting tones further enhance the garment’s artistic appearance, making every angle visually engaging. Functional utility pockets provide practical storage while maintaining the industrial-inspired design language that defines the piece.\n\nThe oversized silhouette offers generous volume throughout the leg, creating a relaxed drape that sits comfortably while allowing unrestricted movement. Inspired by military utility garments and modern experimental tailoring, these shorts bridge the gap between functionality and statement dressing.\n\nThe clean khaki base allows the distressed graphics and paint details to stand out, making the shorts easy to pair with oversized tees, distressed knitwear, graphic shirts, utility vests, or lightweight jackets. Whether styled casually or as part of a more fashion-forward look, the garment serves as an instant focal point.\n\nDesigned for individuals who appreciate unconventional silhouettes and artistic detailing, the Chaos Script Utility Shorts embody modern streetwear's ongoing evolution toward wearable art.\n\nFeatures:\n\n• Premium cotton-blend construction\n• Oversized relaxed fit\n• Asymmetric overlapping front panel\n• Distressed script graphic artwork\n• Hand-finished paint splatter detailing\n• Utility-inspired pocket configuration\n• Reinforced seam construction\n• Durable hardware accents\n• Wide-leg short silhouette\n• Artistic weathered finish\n• Lightweight yet structured feel\n• Contemporary avant-garde design\n• Functional everyday wearability\n• Statement streetwear aesthetic\n\nStyle Notes:\n\nPair with oversized graphic tees, cropped shirts, distressed outerwear, utility vests, or minimalist sneakers. Complete the look with accessories such as chains, rings, or technical bags for a modern streetwear-inspired outfit.\n\nFit:\n\n• Oversized fit\n• Relaxed through hip and thigh\n• Wide-leg silhouette\n• Falls below the knee\n• Designed for a loose draping effect\n• Unisex styling"
  },
  {
    "id": "bot-51",
    "name": "Hell System Paint Drip Cargo Pants",
    "price": 127500,
    "category": "bottoms",
    "image": "/images/IMG_1625.jpg",
    "secondaryImage": "/images/IMG_1623.jpg",
    "badge": "",
    "description": "The Hell System Paint Drip Cargo Pants deliver a fearless interpretation of modern streetwear through a fusion of utility design and artistic expression. Crafted from durable heavyweight cotton fabric, these trousers showcase a striking paint-drip treatment flowing naturally from the waistband and pocket areas, creating a handcrafted appearance that feels both rebellious and innovative.\n\nThe washed stone-grey finish serves as the perfect foundation for the contrasting black paint effect, producing a visually powerful design that immediately attracts attention. Every drip pattern appears intentional yet organic, giving the garment an experimental character that separates it from traditional cargo pants.\n\nBuilt around a relaxed wide-leg silhouette, the trousers provide generous room through the seat, thigh, and leg for unrestricted movement and effortless stacking over sneakers or boots. Utility-inspired cargo pockets positioned along both legs add both functionality and dimension, reinforcing the industrial workwear influence behind the design.\n\nThe deconstructed pocket flap detailing around the waistband further enhances the garment's unconventional aesthetic, while reinforced panel construction and durable hardware ensure long-lasting wear. Inspired by underground street culture, industrial environments, and avant-garde fashion, these trousers serve as both a wearable statement piece and a functional everyday garment.\n\nWhether styled with oversized graphic tees, distressed hoodies, technical jackets, leather outerwear, or combat-inspired footwear, these cargo pants become the focal point of any outfit. Their unique paint treatment and oversized proportions make them ideal for individuals who embrace boundary-pushing fashion.\n\nFeatures:\n\n• Premium heavyweight cotton construction\n• Signature hand-painted drip effect\n• Washed stone-grey finish\n• Oversized wide-leg silhouette\n• Utility-inspired cargo pocket system\n• Deconstructed waistband pocket detailing\n• Reinforced panel construction\n• Durable metal hardware\n• Relaxed streetwear fit\n• Functional storage compartments\n• Button and zip fly closure\n• Stack-friendly leg opening\n• Industrial-inspired design language\n• Statement artistic treatment\n\nStyle Notes:\n\nPair with oversized graphic tees, distressed knitwear, cropped jackets, technical outerwear, leather jackets, or heavyweight hoodies. Complete the look with combat boots, skate shoes, chunky sneakers, or futuristic footwear for maximum impact.\n\nFit:\n\n• Wide-leg fit\n• Relaxed through seat and thigh\n• Oversized streetwear proportions\n• Designed for natural stacking\n• True-to-size waist measurement\n• Unisex styling"
  },
  {
    "id": "bot-52",
    "name": "Rebel Stroke Wide Leg Denim Jeans",
    "price": 98000,
    "category": "bottoms",
    "image": "/images/IMG_1616.jpg",
    "secondaryImage": "/images/IMG_1621.jpg",
    "badge": "",
    "description": "The Painted Wide Leg Denim Jeans are a contemporary interpretation of classic denim, elevated through artistic surface treatments and an exaggerated wide-leg silhouette. Crafted from durable heavyweight denim, these jeans feature a vintage-inspired light blue wash enhanced by paint-effect markings, faded brushstroke details, and subtle distressed accents that create a uniquely expressive appearance.\n\nDesigned with a relaxed oversized fit, the jeans offer generous room throughout the thigh and leg, creating a naturally stacked effect over sneakers, boots, or statement footwear. The wide-leg construction reflects modern streetwear influences while maintaining the versatility and durability expected from everyday denim.\n\nThe artistic paint-inspired graphics scattered throughout the garment give each piece a handcrafted feel, adding visual texture and character without overwhelming the overall design. The faded wash treatment further contributes to the vintage aesthetic, making the jeans appear naturally aged and well-worn.\n\nBuilt with a traditional five-pocket layout, reinforced seams, and premium denim construction, these jeans balance functionality with standout styling. Their versatile light-wash colorway allows effortless pairing with oversized tees, graphic tops, hoodies, knitwear, cropped jackets, and statement outerwear.\n\nWhether styled for a minimalist streetwear fit or a more expressive fashion-forward look, these jeans serve as a versatile foundation piece capable of elevating any wardrobe.\n\nFeatures:\n\n• Premium heavyweight cotton denim\n• Vintage light blue wash finish\n• Hand-painted inspired detailing\n• Artistic brushstroke and paint-effect graphics\n• Relaxed oversized fit\n• Wide-leg silhouette\n• Stack-friendly leg opening\n• Classic five-pocket construction\n• Reinforced stitching throughout\n• Button and zip fly closure\n• Durable everyday wear construction\n• Streetwear-inspired proportions\n• Vintage aged aesthetic\n\nStyle Notes:\n\nPair with oversized graphic tees, washed hoodies, cropped jackets, knitwear, varsity jackets, or leather outerwear. Complete the look with chunky sneakers, skate shoes, Converse, or workwear boots for a modern streetwear aesthetic.\n\nFit:\n\n• Wide-leg fit\n• Relaxed through seat and thigh\n• Oversized streetwear silhouette\n• Designed for natural stacking\n• True-to-size waist measurement"
  },
  {
    "id": "bot-53",
    "name": "Distressed Pinstripe Carpenter Jeans",
    "price": 130000,
    "category": "bottoms",
    "image": "/images/IMG_1613.jpg",
    "secondaryImage": "/images/IMG_0360.jpg",
    "badge": "",
    "description": "The Distressed Pinstripe Carpenter Jeans combine classic workwear influences with contemporary streetwear design. Constructed from durable heavyweight denim, these trousers feature subtle vertical pinstripes that add texture and visual depth while maintaining a clean vintage-inspired appearance.\n\nDesigned with a relaxed wide-leg silhouette, the jeans offer a comfortable oversized fit that stacks naturally over sneakers and boots. Multiple distressed panels and frayed openings create an authentic worn-in aesthetic, giving each outfit a rebellious edge without sacrificing everyday wearability.\n\nUtility-inspired details such as carpenter pockets, side tool loops, contrast stitching, and reinforced construction pay homage to traditional workwear garments while elevating the overall design for modern streetwear styling. Vintage wash effects and faded treatments throughout the fabric further enhance the aged character of the piece.\n\nThe neutral cream pinstripe colorway makes these jeans highly versatile, pairing effortlessly with graphic tees, oversized hoodies, cropped jackets, leather outerwear, and statement accessories. Whether styled casually or incorporated into a more fashion-forward look, these jeans serve as a standout foundation piece.\n\nFeatures:\n\n• Heavyweight pinstripe denim construction\n• Vintage-inspired cream wash finish\n• Relaxed wide-leg silhouette\n• Distressed and ripped detailing throughout\n• Carpenter-style utility pockets\n• Functional side tool loop\n• Reinforced contrast stitching\n• Classic five-pocket construction\n• Button and zip fly closure\n• Streetwear-inspired oversized fit\n• Stack-friendly leg opening\n• Durable everyday wear construction\n\nStyle Notes:\n\nPair with oversized graphic tees, cropped knitwear, leather jackets, varsity pieces, or vintage-inspired outerwear. Complete the look with Converse, chunky sneakers, work boots, or skate footwear for an authentic streetwear aesthetic.\n\nFit:\n\n• Wide-leg fit\n• Relaxed through the thigh and leg\n• Designed for natural stacking\n• True-to-size waist measurement"
  },
  {
    "id": "acc-54",
    "name": "Groupmarek Ball Chain Wallet Chain",
    "price": 78000,
    "category": "accessories",
    "image": "/images/IMG_1604.jpg",
    "secondaryImage": "/images/IMG_1606.jpg",
    "badge": "",
    "description": "The Groupmarek Ball Chain Wallet Chain is a modern streetwear accessory that combines utility-driven design with bold visual impact. Crafted from polished silver-tone metal beads, the chain delivers a clean industrial aesthetic inspired by punk, skate, and contemporary street culture.\n\nDesigned with dual lobster clasp attachments, the piece can be secured to belt loops, wallets, keys, or bags, making it both a functional accessory and a styling statement. The metallic finish catches light effortlessly, creating subtle movement and detail that elevates even the simplest outfit.\n\nWhether paired with stacked denim, baggy jeans, cargo pants, or shorts, this chain adds depth, texture, and attitude to everyday looks. The signature Groupmarek branding further reinforces its premium streetwear identity while maintaining a minimalist aesthetic.\n\nFeatures:\n\n• Premium silver-tone metal construction\n• Ball chain design\n• Dual lobster clasp closures\n• Multi-purpose styling functionality\n• Can be attached to wallets, keys, belt loops, or bags\n• Durable hardware construction\n• Lightweight everyday wear\n• Industrial streetwear aesthetic\n• Signature Groupmarek branding\n• Suitable for both casual and statement styling\n\nStyle Notes:\n\nWear with baggy denim, wide-leg trousers, cargo pants, or distressed jeans for a complete streetwear-inspired look. Can also be attached to backpacks and crossbody bags as a styling accessory."
  },
  {
    "id": "top-55",
    "name": "Group Marek Rich Boys Club Washed Polo",
    "price": 120000,
    "category": "tops",
    "image": "/images/IMG_1602.jpg",
    "secondaryImage": "/images/IMG_1602.jpg",
    "badge": "",
    "description": "The Rich Boys Club Washed Polo is designed for those who appreciate timeless silhouettes reworked through a contemporary streetwear perspective. Constructed from premium cotton and treated with a vintage wash process, the garment delivers a naturally aged appearance and a soft worn-in feel from the very first wear.\n\nThe relaxed oversized fit allows for effortless styling while maintaining comfort throughout the day. Embroidered red graphics on the chest and sleeve add subtle detailing, while the large Rich Boys Club embroidery across the back creates a strong visual identity that sets the piece apart.\n\nInspired by classic polo shirts but elevated with modern proportions and street culture influences, this piece transitions seamlessly from everyday casual wear to carefully curated statement outfits.\n\nFeatures:\n\n• Premium cotton construction\n• Vintage washed-black finish\n• Oversized relaxed fit\n• Classic polo collar\n• Button placket closure\n• Embroidered chest artwork\n• Embroidered sleeve detail\n• Large Rich Boys Club back embroidery\n• Soft breathable fabric\n• Everyday streetwear essential\n\nStyle Notes:\n\nPair with stacked denim, distressed jeans, cargo pants, or relaxed trousers for a complete contemporary streetwear look. Layer with outerwear during cooler seasons or wear alone for a clean statement fit."
  },
  {
    "id": "col-56",
    "name": "Loopson Ice Wash Wide Leg Denim",
    "price": 86000,
    "category": "collections",
    "image": "/images/IMG_1594.jpg",
    "secondaryImage": "/images/IMG_1591.jpg",
    "badge": "New",
    "description": "The Ice Wash Wide Leg Denim is designed for those who appreciate clean silhouettes, effortless styling, and timeless streetwear aesthetics. Featuring a soft ice-wash finish and a generously cut wide-leg profile, this denim delivers the perfect balance between vintage inspiration and modern oversized fashion.\n\nConstructed from durable premium denim, the jeans are designed to drape naturally from the waist down, creating a relaxed stacked effect around the hem that complements sneakers, boots, and chunky footwear alike. The light wash treatment gives the garment a worn-in appearance while maintaining a clean and refined look that can be styled across seasons.\n\nUnlike heavily distressed denim, the minimalist design allows the fit and wash to become the focal point, making these jeans an easy addition to any wardrobe. Whether paired with oversized hoodies, heavyweight tees, rugby shirts, knitwear, or technical outerwear, the Ice Wash Wide Leg Denim adapts seamlessly to a variety of streetwear and casual looks.\n\nThe classic five-pocket construction provides everyday functionality, while reinforced stitching and durable hardware ensure long-lasting wear. The relaxed fit through the seat and thighs enhances comfort without sacrificing structure, making it suitable for all-day use.\n\nKey Features:\n\n• Premium heavyweight denim construction\n• Vintage-inspired ice wash finish\n• Oversized wide-leg silhouette\n• Relaxed fit through seat and thigh\n• Full-length stacked leg profile\n• Classic five-pocket design\n• Durable button and zip fly closure\n• Clean minimalist aesthetic\n• Comfortable everyday wear\n• Easy to style across multiple outfits\n• Suitable for all-season wear\n• Unisex streetwear appeal\n\nStyle Notes:\n\nPair with oversized hoodies for a relaxed streetwear look, graphic tees for everyday casual wear, or rugby shirts and knitwear for a more elevated contemporary outfit. Complete the look with sneakers, loafers, or boots depending on the occasion.\n\nFit:\n\n• Wide Leg Fit\n• Relaxed Oversized Silhouette\n• Full Length\n• True to Size\n\nA versatile wardrobe essential built for effortless styling and everyday rotation."
  },
  {
    "id": "top-57",
    "name": "Loopsoon Classic Archive Rugby Polo",
    "price": 105000,
    "category": "tops",
    "image": "/images/IMG_1586.jpg",
    "secondaryImage": "/images/IMG_1587.jpg",
    "badge": "",
    "description": "The Loopsoon Classic Archive Rugby Polo is a modern take on traditional rugby sportswear, blending vintage athletic influences with contemporary streetwear styling. Featuring bold horizontal stripe panels, embroidered heritage graphics, and an oversized silhouette, this piece delivers timeless character with everyday versatility.\n\nDesigned with a structured polo collar and heavyweight cotton construction, the rugby shirt offers both durability and comfort. The embroidered crest details, heritage-inspired artwork, and statement sleeve patch create an elevated sportswear aesthetic that stands out without being overwhelming.\n\nAvailable in Red/Navy and Green/Navy colorways, this piece works effortlessly as a statement layer or standalone essential.\n\nFeatures:\n\n• Heavyweight premium cotton construction\n• Classic rugby polo collar\n• Oversized relaxed fit\n• Bold horizontal stripe design\n• Embroidered heritage graphics\n• Statement sleeve patch detail\n• Long sleeve construction\n• Reinforced collar and placket\n• Soft comfortable interior\n• Vintage sportswear aesthetic\n\nStyle Notes:\n\nPair with baggy denim, carpenter pants, cargos, jorts, or relaxed-fit trousers. Finish the look with sneakers, loafers, or boots for a refined streetwear outfit.\n\nFit & Details:\n\n• Colors: Red/Navy, Green/Navy\n• Material: Premium Cotton\n• Fit: Oversized\n• Collar: Rugby Polo Collar\n• Sleeve Length: Long Sleeve\n• Closure: Button Placket\n• Style: Streetwear, Rugby, Vintage Sportswear\n• Gender: Unisex\n• Season: All Season"
  },
  {
    "id": "top-58",
    "name": "Loopson Truth 01 Oversized Long Sleeve Jersey",
    "price": 100000,
    "category": "tops",
    "image": "/images/IMG_1581.jpg",
    "secondaryImage": "/images/IMG_1580.jpg",
    "badge": "",
    "description": "The Truth 01 Oversized Long Sleeve Jersey merges classic sportswear influences with contemporary streetwear styling. Designed with a relaxed oversized silhouette, this statement piece features bold \"TRUTH\" typography across the chest and a distressed \"01\" graphic on the back for a vintage team-inspired look.\n\nContrasting stripe details run from the shoulders through the sleeves, creating a dynamic athletic feel, while raw-edge accents and distressed patchwork elements add character and individuality. The clean black base allows the graphics to stand out while maintaining versatility for everyday styling.\n\nPerfect for layering or wearing as a standalone statement piece, this jersey delivers comfort, attitude, and effortless streetwear appeal.\n\nFeatures:\n\n• Oversized relaxed silhouette\n• Bold TRUTH front graphic\n• Distressed 01 back print\n• Athletic-inspired sleeve stripes\n• Vintage sportswear aesthetic\n• Raw-edge neckline detailing\n• Lightweight comfortable construction\n• Long sleeve design\n• Streetwear-focused fit\n• Unisex styling\n\nStyle Notes:\n\nPair with baggy denim, parachute pants, cargos, jorts, or track pants. Complete the look with sneakers, boots, or a fitted cap for a modern streetwear outfit.\n\nFit & Details:\n\n• Color: Black / Burgundy\n• Material: Cotton Polyester Blend\n• Fit: Oversized\n• Neckline: Crew Neck\n• Sleeve Length: Long Sleeve\n• Style: Streetwear, Sportswear, Casual\n• Gender: Unisex\n• Season: All Season"
  },
  {
    "id": "bot-59",
    "name": "Loopsoon Oversized Utility Cargo Pants",
    "price": 100000,
    "category": "bottoms",
    "image": "/images/IMG_2336.jpeg",
    "secondaryImage": "/images/IMG_2338.jpeg",
    "badge": "",
    "description": "The Loopsoon Oversized Utility Cargo Pants combine modern streetwear proportions with practical utility-inspired detailing. Designed with an ultra-relaxed wide-leg silhouette, these pants deliver a bold contemporary look while maintaining everyday comfort and versatility.\n\nConstructed from durable premium fabric, the design features oversized cargo pockets, clean panel construction, and a structured drape that creates the perfect stacked fit over sneakers, boots, or casual footwear. The minimalist aesthetic allows effortless pairing with hoodies, rugby polos, sweatshirts, graphic tees, and outerwear.\n\nWhether styled for a laid-back streetwear outfit or a statement oversized look, these cargo pants provide both functionality and elevated design.\n\nFeatures:\n\n• Premium durable fabric construction\n• Oversized wide-leg silhouette\n• Large utility cargo pockets\n• Relaxed streetwear fit\n• Clean panel detailing\n• Functional storage compartments\n• Reinforced stitching\n• Comfortable everyday wear\n• Easy styling versatility\n• Modern utility aesthetic\n\nStyle Notes:\n\nPair with oversized hoodies, rugby polos, graphic tees, sweatshirts, or varsity jackets. Complete the look with sneakers, loafers, boots, or slides for a contemporary streetwear fit.\n\nFit & Details:\n\n• Color: Black\n• Material: Premium Cotton Blend\n• Fit: Oversized / Wide Leg\n• Waist: Mid Rise\n• Closure: Button & Zip Fly\n• Pocket Style: Utility Cargo Pockets\n• Style: Streetwear, Utility, Contemporary\n• Gender: Unisex\n• Season: All Season"
  },
  {
    "id": "top-60",
    "name": "Loopsoon Striped Utility Overshirt",
    "price": 86000,
    "category": "tops",
    "image": "/images/IMG_1574.jpg",
    "secondaryImage": "/images/IMG_1573.jpg",
    "badge": "",
    "description": "The Loopsoon Striped Utility Overshirt blends classic tailoring with modern streetwear influences. Designed with a relaxed oversized silhouette, this versatile layering piece features clean vertical stripes, oversized utility patch pockets, and subtle embroidered branding for a refined everyday look.\n\nCrafted from premium cotton fabric, the shirt offers a comfortable feel while maintaining structure and durability. The striped pattern adds visual depth, while the oversized fit allows effortless layering over t-shirts, tanks, and lightweight knitwear.\n\nPerfect for casual outings, city wear, travel, or smart streetwear styling, this shirt transitions seamlessly between seasons and occasions.\n\nFeatures:\n\n• Premium cotton fabric\n• Vertical stripe pattern\n• Oversized relaxed fit\n• Large utility patch pockets\n• Full button-front closure\n• Classic shirt collar\n• Embroidered chest logo detail\n• Durable construction\n• Easy layering piece\n• Contemporary streetwear aesthetic\n\nStyle Notes:\n\nWear open over a plain tee with cargo pants and sneakers for a relaxed streetwear look, or button up and pair with tailored trousers for a clean contemporary outfit.\n\nFit & Details:\n\n• Color: Navy Blue / White Stripe\n• Material: Premium Cotton\n• Fit: Oversized\n• Closure: Button Front\n• Sleeve Length: Long Sleeve\n• Collar: Classic Collar\n• Style: Casual, Streetwear, Utility\n• Gender: Unisex\n• Season: All Season"
  },
  {
    "id": "top-61",
    "name": "Loopsoon Stealth Archive Oversized Hoodie",
    "price": 93500,
    "category": "tops",
    "image": "/images/IMG_1567.jpg",
    "secondaryImage": "/images/IMG_1568.jpg",
    "badge": "",
    "description": "The Loopsoon Stealth Archive Oversized Hoodie combines premium comfort with understated streetwear design. Crafted from a heavyweight cotton-blend fabric, this hoodie features signature archive-inspired graphics across the chest, including the iconic Loopsoon logo, Stealth Archive branding, and heritage-style crest artwork.\n\nDesigned with a relaxed oversized silhouette, dropped shoulders, and a spacious hood, it delivers both comfort and effortless everyday styling. The clean graphic placement keeps the look versatile while maintaining a strong streetwear identity.\n\nFinished with ribbed cuffs, a kangaroo pocket, and a soft brushed interior, this hoodie is built for layering throughout the year.\n\nFeatures:\n\n• Heavyweight cotton-blend construction\n• Oversized relaxed fit\n• Signature Loopsoon logo graphic\n• Stealth Archive chest artwork\n• Heritage-inspired crest detailing\n• Spacious double-layer hood\n• Kangaroo front pocket\n• Ribbed cuffs and hem\n• Soft fleece-lined interior\n• Everyday streetwear essential\n\nStyle Notes:\n\nPair with baggy denim, cargos, sweatpants, or carpenter trousers for a clean contemporary streetwear look. Complete the outfit with sneakers, boots, or a fitted cap.\n\nFit & Details:\n\n• Colors: Navy Blue / Black\n• Material: Cotton Polyester Blend\n• Fit: Oversized\n• Neckline: Hooded\n• Sleeve Length: Long Sleeve\n• Pocket: Kangaroo Pocket\n• Style: Streetwear, Casual, Everyday Wear\n• Gender: Unisex\n• Season: Autumn, Winter, Spring"
  },
  {
    "id": "top-62",
    "name": "CSONLINE NATIONS-05-MESH-001",
    "price": 95000,
    "category": "tops",
    "image": "/images/IMG_1561.webp",
    "secondaryImage": "/images/IMG_1564.webp",
    "badge": "",
    "description": "The Nations 05 Vintage Mesh Long Sleeve Jersey blends motorsport aesthetics, football-inspired graphics, and modern streetwear into one standout piece. Designed with a washed charcoal finish and lightweight mesh construction, this jersey delivers a worn-in vintage appearance while remaining breathable and comfortable.\n\nThe front features signature script branding, racing-inspired patches, and heritage graphics, while the back is dominated by the oversized distressed \"05\" artwork and custom emblem detailing. Contrasting white panel accents add structure and visual depth, giving the jersey an authentic retro-sports feel.\n\nIts relaxed oversized silhouette makes it ideal for layering or wearing as a statement piece on its own.\n\nFeatures:\n\n• Lightweight breathable mesh construction\n• Vintage washed charcoal finish\n• Oversized distressed \"05\" back graphic\n• Racing and heritage-inspired artwork\n• Contrast side and sleeve panel details\n• Long sleeve jersey design\n• Relaxed oversized fit\n• Soft comfortable feel\n• Reinforced neckline construction\n• Streetwear and motorsport-inspired aesthetic\n\nStyle Notes:\n\nWear with baggy denim, cargo pants, carpenter jeans, or oversized shorts. Complete the look with sneakers, boots, or vintage accessories for a strong Y2K and streetwear-inspired outfit.\n\nFit & Details:\n\n• Color: Washed Charcoal / Off White\n• Material: Polyester Mesh Blend\n• Fit: Oversized\n• Neckline: Crew Neck\n• Sleeve Length: Long Sleeve\n• Style: Streetwear, Motorsport, Vintage Sportswear\n• Gender: Unisex\n• Season: All Season"
  },
  {
    "id": "bot-63",
    "name": "Until We Rich Faith Baggy Denim Jeans",
    "price": 122000,
    "category": "bottoms",
    "image": "/images/IMG_1546.jpg",
    "secondaryImage": "/images/IMG_1547.jpg",
    "badge": "",
    "description": "The Until We Rich Faith Baggy Denim Jeans are designed for those who embrace street culture, confidence, and individuality. Crafted from premium heavyweight denim, these jeans feature a vintage light-wash finish paired with the signature \"Until We Rich It's Faith\" graffiti-inspired artwork printed boldly across the front.\n\nThe oversized baggy silhouette creates a relaxed drape that stacks naturally over footwear, making it the perfect foundation for modern streetwear outfits. The minimalist rear design keeps the focus on the statement front graphic while maintaining versatility for everyday styling.\n\nBuilt for comfort and durability, the jeans combine premium construction with an effortlessly worn-in aesthetic that works across seasons.\n\nFeatures:\n\n• Premium heavyweight denim construction\n• Vintage light-wash finish\n• Signature \"Until We Rich It's Faith\" graffiti artwork\n• Oversized baggy fit\n• Natural stacked-leg silhouette\n• Classic five-pocket design\n• Durable reinforced stitching\n• Mid-rise waist construction\n• Button and zip fly closure\n• Everyday streetwear essential\n\nStyle Notes:\n\nPair with oversized graphic tees, rugby shirts, hoodies, or varsity jackets. Complete the look with Timberland boots, sneakers, or chunky footwear for a strong streetwear-inspired fit.\n\nFit & Details:\n\n• Color: Vintage Light Wash\n• Material: Premium Cotton Denim\n• Fit: Oversized / Baggy\n• Waist: Mid Rise\n• Closure: Button and Zip Fly\n• Style: Streetwear, Urban, Casual\n• Gender: Unisex\n• Season: All Season"
  },
  {
    "id": "bot-64",
    "name": "Until We Rich Spider Web Embroidered Baggy Denim Shorts",
    "price": 125000,
    "category": "bottoms",
    "image": "/images/IMG_1538.jpg",
    "secondaryImage": "/images/IMG_1539.jpg",
    "badge": "",
    "description": "The Spider Web Embroidered Baggy Denim Shorts combine Y2K aesthetics, skate culture, and contemporary streetwear into one standout piece. Designed with an oversized relaxed fit, these washed denim shorts feature intricate spider web embroidery across the front and back pockets, enhanced with pearl-inspired embellishments for added texture and depth.\n\nThe light vintage wash creates a worn-in appearance, while subtle distressing and raw hem detailing reinforce the rugged streetwear appeal. A detachable chain accessory adds an extra layer of styling versatility, making these shorts ideal for statement outfits.\n\nConstructed from premium denim, the loose silhouette offers maximum comfort and freedom of movement while maintaining a bold visual presence.\n\nFeatures:\n\n• Premium heavyweight denim construction\n• Vintage washed finish\n• Oversized spider web embroidery\n• Pearl-inspired decorative detailing\n• Distressed accents throughout\n• Detachable chain accessory\n• Raw hem finish\n• Classic five-pocket design\n• Relaxed oversized fit\n• Durable reinforced stitching\n\nStyle Notes:\n\nPair with oversized graphic tees, mesh jerseys, oversized shirts, hoodies, or workwear jackets. Complete the look with Timberland boots, chunky sneakers, or skate shoes for a strong streetwear-inspired outfit.\n\nFit & Details:\n\n• Color: Vintage Light Grey Wash\n• Material: Premium Cotton Denim\n• Fit: Oversized / Baggy\n• Length: Knee Length\n• Waist: Mid Rise\n• Closure: Button and Zip Fly\n• Style: Streetwear, Y2K, Skatewear\n• Gender: Unisex\n• Season: Spring, Summer, Autumn"
  },
  {
    "id": "top-65",
    "name": "Until We Rich Star Logo Oversized T-Shirt",
    "price": 98000,
    "category": "tops",
    "image": "/images/IMG_1531.jpg",
    "secondaryImage": "/images/IMG_1534.jpg",
    "badge": "",
    "description": "The Until We Rich Star Logo Oversized T-Shirt is a clean yet impactful streetwear essential designed for everyday wear. Crafted from premium heavyweight cotton, this piece combines a relaxed oversized silhouette with a vintage-inspired washed charcoal finish.\n\nThe front features the signature Until We Rich distressed star graphic, creating a worn-in aesthetic that blends perfectly with contemporary street fashion. The minimal back keeps the focus on the statement front artwork while maintaining versatility for styling.\n\nDesigned with dropped shoulders and a roomy fit, this tee delivers maximum comfort without sacrificing style. Whether layered over a thermal long sleeve or worn alone, it provides an effortless streetwear look that works year-round.\n\nFeatures:\n\n• Premium heavyweight cotton fabric\n• Vintage washed charcoal finish\n• Signature Until We Rich distressed star graphic\n• Oversized relaxed silhouette\n• Dropped shoulder construction\n• Ribbed crew neckline\n• Soft and breathable feel\n• Durable screen print artwork\n• Minimalist back design\n• Everyday streetwear essential\n\nStyle Notes:\n\nPair with baggy denim, carpenter pants, cargos, or distressed jeans. Complete the look with sneakers, boots, or a fitted cap for a modern streetwear outfit.\n\nFit & Details:\n\n• Color: Washed Charcoal\n• Material: 100% Premium Cotton\n• Fit: Oversized\n• Neckline: Crew Neck\n• Sleeve Length: Short Sleeve\n• Style: Streetwear, Casual, Everyday\n• Gender: Unisex\n• Season: All Season"
  },
  {
    "id": "top-66",
    "name": "Until We Rich Worldwide Striped Rugby Polo",
    "price": 110000,
    "category": "tops",
    "image": "/images/IMG_1525.jpg",
    "secondaryImage": "/images/IMG_1526.jpg",
    "badge": "",
    "description": "The Until We Rich Worldwide Striped Rugby Polo fuses classic rugby heritage with contemporary streetwear aesthetics. Designed with bold black, white, and red vertical stripes, this long-sleeve statement piece delivers a striking visual presence from every angle.\n\nThe front features premium embroidered patches, collegiate-inspired typography, and signature Until We Rich Worldwide branding, creating a vintage athletic look with modern street appeal. The oversized back graphic showcases bold varsity-style numbering that elevates the sportswear influence.\n\nCrafted from soft heavyweight cotton fabric, the rugby polo offers exceptional comfort, durability, and structure. The relaxed oversized fit makes it ideal for layering or wearing as a standalone statement piece.\n\nFeatures:\n\n• Premium heavyweight cotton construction\n• Classic rugby-inspired polo collar\n• Bold vertical stripe design\n• Embroidered chest patches\n• Large front graphic typography\n• Oversized varsity-style back print\n• Long sleeves with ribbed cuffs\n• Relaxed oversized silhouette\n• Durable button placket closure\n• Streetwear and sportswear fusion styling\n\nStyle Notes:\n\nPair with baggy denim, carpenter jeans, or cargo pants and finish with sneakers or boots for a complete streetwear fit. Layer under a varsity jacket during colder seasons for an elevated urban look.\n\nFit & Details:\n\n• Color: Black / White / Red\n• Material: Premium Cotton Blend\n• Fit: Oversized Relaxed Fit\n• Collar: Rugby Polo Collar\n• Sleeve Length: Long Sleeve\n• Closure: Button Placket\n• Style: Streetwear, Rugby, Sportswear\n• Gender: Unisex\n• Season: All Season"
  },
  {
    "id": "col-67",
    "name": "Sprayground x RUNto Plaid Graphic Flannel Shirt",
    "price": 125000,
    "category": "collections",
    "image": "/images/IMG_1520.jpg",
    "secondaryImage": "/images/IMG_1521.jpg",
    "badge": "New",
    "description": "The Sprayground x RUNto Plaid Graphic Flannel Shirt blends contemporary streetwear culture with classic flannel styling. Designed with a washed grey plaid pattern, this statement piece features exclusive collaborative artwork across the front and back, delivering a bold visual identity from every angle.\n\nThe front showcases oversized typography and signature cartoon-inspired graphics, while the back features Sprayground's iconic shark-mouth emblem in a large contrast print. Crafted from premium brushed cotton flannel, the shirt offers a soft feel, relaxed drape, and all-day comfort.\n\nIts oversized fit makes it perfect for layering over tees, hoodies, or tanks, creating effortless streetwear looks throughout the year.\n\nFeatures:\n\n• Exclusive Sprayground x RUNto collaboration\n• Premium brushed cotton flannel\n• Washed grey plaid pattern\n• Large front graphic print\n• Signature shark graphic on back\n• Full button-front closure\n• Classic spread collar\n• Relaxed oversized fit\n• Long sleeves with button cuffs\n• Layer-friendly streetwear silhouette\n\nStyle Notes:\n\nWear open over a graphic tee with baggy denim and sneakers for a casual streetwear outfit, or button it up with cargos and boots for a more elevated look. Perfect as a lightweight overshirt during transitional seasons.\n\nFit & Details:\n\n• Color: Washed Grey Plaid\n• Material: Cotton Flannel\n• Fit: Oversized Relaxed Fit\n• Collar: Classic Shirt Collar\n• Closure: Button Front\n• Sleeve Length: Long Sleeve\n• Style: Streetwear, Casual, Graphic Flannel\n• Gender: Unisex\n• Season: Autumn, Winter, Spring"
  },
  {
    "id": "col-68",
    "name": "Boneless Camo Graffiti Oversized Tee",
    "price": 75000,
    "category": "collections",
    "image": "/images/IMG_1516.jpg",
    "secondaryImage": "/images/IMG_1519.jpg",
    "badge": "New",
    "description": "The BONELESS Camo Graffiti Oversized Tee delivers classic military inspiration through a contemporary streetwear lens. Constructed from premium heavyweight cotton, this relaxed-fit T-shirt features an all-over woodland camouflage pattern paired with a bold graffiti-inspired chest logo that adds an urban edge.\n\nDesigned for everyday wear, the oversized silhouette provides comfort, versatility, and effortless styling. The camouflage edition offers a rugged aesthetic that pairs seamlessly with cargos, denim, shorts, and utility-inspired outfits.\n\nWhether worn as a standalone statement piece or layered into a streetwear rotation, this tee combines durability, comfort, and bold visual appeal.\n\nFeatures:\n\n• Premium heavyweight cotton construction\n• All-over woodland camouflage print\n• Signature graffiti chest graphic\n• Oversized relaxed fit\n• Ribbed crew neckline\n• Soft and breathable fabric\n• Durable print application\n• Streetwear-inspired design\n• Everyday comfort and versatility\n• Unisex styling\n\nStyle Notes:\n\nPair with baggy denim, cargo trousers, carpenter pants, or utility shorts. Complete the look with sneakers, boots, or a fitted cap for a modern streetwear outfit.\n\nFit & Details:\n\n• Color: Woodland Camo\n• Material: 100% Cotton\n• Fit: Oversized\n• Neckline: Crew Neck\n• Sleeve Length: Short Sleeve\n• Style: Streetwear, Military, Casual\n• Gender: Unisex\n• Season: All Season"
  },
  {
    "id": "top-69",
    "name": "PeopleSense Vintage Mesh Football Long Sleeve",
    "price": 150000,
    "category": "tops",
    "image": "/images/IMG_1509.jpg",
    "secondaryImage": "/images/IMG_1512.jpg",
    "badge": "",
    "description": "The PeopleSense Vintage Mesh Football Long Sleeve combines retro football culture with contemporary streetwear design. Crafted from breathable mesh fabric layered over a soft cotton base, this statement piece delivers a worn-in vintage look with a unique distressed aesthetic.\n\nThe front features an oversized football-inspired graphic print with textured mesh overlay, while exposed seam construction and raw-edge details create an authentic reconstructed appearance. The relaxed silhouette offers effortless layering potential, making it an ideal piece for modern streetwear wardrobes.\n\nThe back showcases a bold player-style number graphic that enhances its athletic heritage influence. Lightweight yet visually striking, this top transitions seamlessly from casual everyday wear to elevated street-inspired outfits.\n\nFeatures:\n\n• Premium breathable mesh overlay\n• Vintage football-inspired graphic print\n• Exposed seam detailing\n• Distressed washed finish\n• Long-sleeve construction\n• Oversized relaxed fit\n• Athletic-inspired design\n• Lightweight and breathable\n• Layer-friendly silhouette\n• Statement streetwear aesthetic\n\nStyle Notes:\n\nWear over a fitted tank, thermal base layer, or plain tee for a layered streetwear look. Pair with baggy denim, track pants, cargo trousers, or stacked jeans alongside chunky sneakers or boots for maximum impact.\n\nFit & Details:\n\n• Color: Vintage Ivory / Washed Cream\n• Material: Cotton & Mesh Blend\n• Fit: Oversized Relaxed Fit\n• Neckline: Crew Neck\n• Sleeve Length: Long Sleeve\n• Style: Streetwear, Y2K, Sportswear\n• Gender: Unisex\n• Season: All Season"
  },
  {
    "id": "bot-70",
    "name": "Yadrew Waxed Straight-Leg Denim Jeans",
    "price": 120000,
    "category": "bottoms",
    "image": "/images/IMG_1497.jpg",
    "secondaryImage": "/images/IMG_1494.jpg",
    "badge": "",
    "description": "The Yadrew Waxed Straight-Leg Denim Jeans blend rugged workwear heritage with contemporary streetwear aesthetics. Constructed from heavyweight premium denim and finished with a wax-coated treatment, these jeans deliver a rich textured appearance with a subtle leather-like sheen.\n\nDesigned with a relaxed straight-leg silhouette, the fit stacks naturally over footwear, creating a clean elongated profile that complements modern streetwear outfits. The front features a distinctive five-button fly closure with custom antique-inspired hardware, while reinforced construction ensures durability for everyday wear.\n\nThe waxed finish develops character over time, giving each pair a unique worn-in look. Finished with classic five-pocket styling, branded rear patch detailing, and premium YKK zipper construction.\n\nFeatures:\n\n• Heavyweight premium denim construction\n• Wax-coated vintage finish\n• Relaxed straight-leg fit\n• Stacked leg silhouette\n• Custom antique-style button fly\n• Classic five-pocket design\n• Reinforced stitching throughout\n• Branded rear patch detail\n• Premium YKK zipper hardware\n• Durable everyday construction\n\nStyle Notes:\n\nPair with oversized graphic tees, cropped jackets, hoodies, or statement outerwear for a modern streetwear look. The waxed finish works especially well with boots, chunky sneakers, and elevated casual styling.\n\nFit & Details:\n\n• Color: Vintage Black / Washed Charcoal\n• Material: Premium Waxed Cotton Denim\n• Closure: Button Fly with YKK Zip\n• Fit: Relaxed Straight Leg\n• Rise: Mid Rise\n• Style: Streetwear, Contemporary, Casual\n• Gender: Unisex"
  },
  {
    "id": "top-71",
    "name": "Yadrew Lion Totem Graphic Rhinestone Tee",
    "price": 98000,
    "category": "tops",
    "image": "/images/IMG_1489.jpg",
    "secondaryImage": "/images/IMG_1491.jpg",
    "badge": "",
    "description": "The Yadrew Lion Totem Graphic Rhinestone Tee combines vintage-inspired graphics with modern streetwear attitude. Crafted from a lightweight textured cotton fabric, this statement piece features a bold Yadrew logo enhanced with rhinestone detailing, creating a subtle reflective finish that elevates the design.\n\nThe front artwork showcases the iconic Lion Totem motif, layered with distressed typography, heritage-inspired graphics, and decorative elements that deliver a premium worn-in aesthetic. The relaxed oversized silhouette provides all-day comfort while maintaining a contemporary streetwear fit.\n\nDesigned for effortless styling, this tee pairs seamlessly with baggy denim, cargo pants, shorts, or layered outerwear, making it a versatile addition to any wardrobe.\n\nFeatures:\n\n• Premium textured cotton fabric\n• Rhinestone-embellished Yadrew logo\n• Vintage Lion Totem graphic print\n• Lightweight breathable construction\n• Soft hand feel\n• Relaxed oversized fit\n• Reinforced ribbed neckline\n• Unisex design\n• Streetwear-inspired silhouette\n\nStyle Notes:\n\nWear with wide-leg denim, cargo trousers, statement sneakers, or layered accessories for a modern luxury streetwear look. Perfect as a standalone statement piece or layered under jackets and overshirts.\n\nFit & Details:\n\n• Color: White\n• Material: Premium Cotton Blend\n• Neckline: Crew Neck\n• Sleeve Length: Short Sleeve\n• Fit: Oversized Relaxed Fit\n• Print: Graphic Print with Rhinestone Detailing\n• Style: Streetwear, Casual, Contemporary\n• Gender: Unisex"
  },
  {
    "id": "top-72",
    "name": "Yadrew Rhinestone Plaid Camp Shirt",
    "price": 110000,
    "category": "tops",
    "image": "/images/IMG_1482.jpg",
    "secondaryImage": "/images/IMG_1483.jpg",
    "badge": "",
    "description": "The Yadrew Rhinestone Plaid Camp Shirt blends timeless tailoring with contemporary streetwear luxury. Crafted from a premium plaid fabric, this statement shirt features all-over rhinestone embellishments that create a subtle sparkling effect, delivering a refined balance between sophistication and individuality.\n\nDesigned with a relaxed camp collar silhouette, the shirt offers effortless comfort while maintaining a polished appearance. The carefully placed crystal detailing mimics a starry-night effect across the plaid pattern, while custom decorative buttons and signature Yadrew embroidery elevate the garment with premium finishing touches.\n\nWhether styled casually with denim and sneakers or layered for a more elevated fashion-forward look, this piece adds understated luxury to any wardrobe.\n\nFeatures:\n\n• Relaxed camp collar design\n• Premium plaid woven fabric\n• All-over rhinestone embellishments\n• Signature embroidered Yadrew logo\n• Decorative premium buttons\n• Lightweight breathable construction\n• Short sleeves\n• Relaxed modern fit\n• Unisex styling\n\nStyle Notes:\n\nPair with wide-leg trousers, dark denim, tailored shorts, or cargo pants. Complete the look with statement footwear, silver accessories, or layered outerwear for a refined streetwear aesthetic.\n\nFit & Details:\n\n• Color: Brown Plaid\n• Material: Premium Cotton Blend\n• Collar: Camp Collar\n• Sleeve Length: Short Sleeve\n• Fit: Relaxed Fit\n• Closure: Button Front\n• Style: Streetwear, Contemporary, Luxury Casual\n• Gender: Unisex"
  },
  {
    "id": "top-73",
    "name": "Yadrew Pegasus Polo Jersey",
    "price": 108000,
    "category": "tops",
    "image": "/images/IMG_2251.webp",
    "secondaryImage": "/images/IMG_1472.jpg",
    "badge": "",
    "description": "The Yadrew Pegasus Polo Jersey combines classic sportswear influences with contemporary streetwear aesthetics. Designed with a vintage football-inspired silhouette, this statement piece features an artistic Pegasus graphic across the front, complemented by embroidered crest details, contrast piping, and premium finishing throughout.\n\nCrafted from breathable performance fabric, the jersey delivers lightweight comfort while maintaining structure and visual impact. The rich burgundy accents, heritage-inspired collar, and oversized fit create a versatile piece that effortlessly bridges sport, fashion, and everyday streetwear.\n\nThe striking Pegasus artwork symbolizes strength, freedom, and individuality, making this jersey more than just apparel—it's a statement piece designed for those who move differently.\n\nFeatures:\n\n• Oversized streetwear fit\n• Premium breathable jersey fabric\n• Large Pegasus front graphic\n• Embroidered crest detailing\n• Contrast piping construction\n• Ribbed polo collar\n• Lightweight and comfortable feel\n• Vintage football-inspired design\n• Unisex styling\n\nStyle Notes:\n\nPair with wide-leg denim, cargo pants, shorts, sneakers, or boots for a complete contemporary streetwear look. Layer with caps, accessories, and statement outerwear for elevated styling.\n\nFit & Details:\n\n• Color: White / Burgundy\n• Material: Polyester Performance Knit\n• Collar: Polo Collar\n• Sleeve Length: Short Sleeve\n• Fit: Relaxed / Oversized\n• Style: Streetwear, Vintage Sportswear, Contemporary Fashion\n• Gender: Unisex"
  },
  {
    "id": "col-74",
    "name": "Eliot Emil Platform Tactical Lug Boots",
    "price": 550000,
    "category": "collections",
    "image": "/images/IMG_1463.jpg",
    "secondaryImage": "/images/IMG_1464.jpg",
    "badge": "New",
    "description": "The Eliot Emil Platform Tactical Lug Boots are built for those who appreciate elevated streetwear and avant-garde footwear. Combining a rugged outdoor-inspired silhouette with contemporary luxury detailing, these boots deliver a powerful visual presence while maintaining comfort and durability.\n\nCrafted with a premium mixed-material upper, the design features padded ankle support, heavy-duty metal D-ring hardware, and an oversized lug sole that provides both traction and a commanding stance. The monochromatic black finish allows the boot's sculptural shape and industrial detailing to take center stage.\n\nDesigned to bridge fashion and function, these boots pair effortlessly with cargo pants, oversized denim, technical outerwear, and modern streetwear fits. Whether worn as a statement piece or incorporated into a minimalist wardrobe, they offer versatility with unmistakable character.\n\nFeatures:\n\n• Premium leather and suede combination upper\n• Heavy-duty metal D-ring lacing system\n• Oversized platform lug outsole\n• Cushioned padded ankle collar\n• Durable traction-focused sole construction\n• Industrial-inspired hardware details\n• Reinforced toe protection\n• Contemporary tactical boot silhouette\n\nStyle Notes:\n\nPair with cargos, wide-leg trousers, stacked denim, oversized outerwear, or monochrome looks for a bold streetwear aesthetic. The aggressive sole and clean black finish make these boots an easy centerpiece for elevated everyday styling.\n\nFit & Details:\n\n• Color: Black\n• Upper: Premium Leather & Suede\n• Lining: Soft Textile Interior\n• Outsole: Heavy-Duty Rubber Lug Sole\n• Style: Tactical, Streetwear, Contemporary Fashion\n• Gender: Unisex\n• Closure: Lace-Up"
  },
  {
    "id": "col-75",
    "name": "Terraincognita Croc-Embossed Square Toe Slides",
    "price": 130000,
    "category": "collections",
    "image": "/images/IMG_1219.jpg",
    "secondaryImage": "/images/IMG_1223.jpg",
    "badge": "New",
    "description": "The Terraincognita Croc-Embossed Square Toe Slides combine contemporary minimalism with elevated texture for a refined everyday essential. Crafted with a premium croc-embossed upper, these slides deliver a sophisticated look while maintaining exceptional comfort and versatility.\n\nDesigned with a modern square-toe silhouette and a lightly cushioned footbed, they provide all-day wearability whether you're relaxing at home, heading out casually, or styling them into a clean streetwear fit. The monochromatic black finish makes them easy to pair with everything from tailored trousers and linen sets to oversized tees and cargos.\n\nThe textured upper adds a luxury-inspired touch, while the durable outsole ensures dependable traction and comfort throughout the day.\n\nFeatures:\n\n• Premium croc-embossed upper\n• Contemporary square-toe design\n• Soft cushioned footbed\n• Lightweight and comfortable construction\n• Durable anti-slip outsole\n• Minimal all-black aesthetic\n• Easy slip-on wear\n• Unisex styling appeal\n\nStyle Notes:\n\nPair with relaxed tailoring, linen trousers, wide-leg pants, shorts, or monochrome streetwear fits. The understated luxury aesthetic makes these slides suitable for both casual and elevated everyday looks.\n\nFit & Details:\n\n• Color: Black\n• Upper: Croc-Embossed Synthetic Leather\n• Insole: Cushioned Comfort Footbed\n• Outsole: Durable Rubber Sole\n• Style: Casual, Luxury Casual, Streetwear\n• Gender: Unisex\n• Closure: Slip-On"
  },
  {
    "id": "col-76",
    "name": "Aevis Bullet Hair Mule Clogs",
    "price": 200000,
    "category": "collections",
    "image": "/images/IMG_1455.jpg",
    "secondaryImage": "/images/IMG_1460.jpg",
    "badge": "New",
    "description": "The Aevis Bullet Hair Mule Clogs merge luxury craftsmanship with contemporary streetwear design. Crafted with a textured hair-finish upper, these statement mules feature striking bullet-hole inspired metallic embellishments arranged across the vamp, creating a bold yet refined visual identity.\n\nBuilt on a comfortable clog-inspired silhouette, the design incorporates an adjustable buckle strap for a secure fit while maintaining effortless slip-on functionality. The monochromatic black finish is elevated by polished silver-tone hardware, making these mules versatile enough for both casual styling and elevated fashion-forward looks.\n\nThe soft textured upper delivers a premium tactile feel, while the durable outsole provides everyday comfort and stability. Designed for individuals who appreciate distinctive footwear that balances luxury, edge, and contemporary street culture.\n\nFeatures:\n\n• Premium hair-texture upper\n• Bullet-hole inspired metal embellishments\n• Adjustable buckle closure\n• Slip-on clog silhouette\n• Cushioned comfort footbed\n• Durable non-slip outsole\n• Silver-tone hardware detailing\n• Lightweight construction\n• Statement luxury streetwear design\n• Unisex styling\n\nStyle Notes:\n\nPair with wide-leg trousers, cargos, washed denim, or tailored black pants for a refined streetwear aesthetic. The metallic detailing creates a strong focal point while the monochrome palette remains easy to style.\n\nFit & Details:\n\n• Upper: Hair-Texture Synthetic Leather\n• Lining: Soft Textile\n• Outsole: Rubber\n• Closure: Adjustable Buckle Strap\n• Color: Black\n• Hardware: Silver Tone\n• Style: Luxury Streetwear / Casual / Contemporary\n• Gender: Unisex"
  },
  {
    "id": "col-77",
    "name": "Sunbind Denim Utility Pocket Mules",
    "price": 170000,
    "category": "collections",
    "image": "/images/IMG_1447.jpg",
    "secondaryImage": "/images/IMG_1447.jpg",
    "badge": "New",
    "description": "The Sunbind Denim Utility Pocket Mules blend workwear inspiration with contemporary streetwear design. Constructed from washed denim fabric, these slip-on mules feature oversized utility pocket detailing with exposed metal zippers, creating a unique functional aesthetic.\n\nDesigned for comfort and everyday wear, the closed-toe mule silhouette offers easy slip-on convenience while maintaining a bold fashion-forward look. Distressed denim accents, raw-edge finishes, and utility-inspired pockets give the footwear a rugged, vintage character that pairs effortlessly with denim, cargos, and relaxed streetwear fits.\n\nAvailable in both washed blue denim and vintage cream denim colorways, these mules bring a creative twist to casual footwear while remaining comfortable enough for daily wear.\n\nFeatures:\n\n• Washed denim upper construction\n• Functional utility pocket design\n• Metal zipper detailing\n• Slip-on mule silhouette\n• Closed rounded toe\n• Distressed vintage finish\n• Cushioned footbed\n• Durable rubber outsole\n• Lightweight construction\n• Streetwear-inspired design\n\nStyle Notes:\n\nPair with baggy denim, carpenter pants, cargos, or oversized silhouettes for a contemporary streetwear look. The utility pocket detail makes these mules a standout addition to any casual outfit.\n\nFit & Details:\n\n• Upper: Washed Denim Fabric\n• Outsole: Rubber\n• Closure: Slip-On\n• Toe Shape: Round Toe\n• Colors: Vintage Cream, Washed Blue\n• Gender: Unisex\n• Style: Casual / Streetwear / Workwear"
  },
  {
    "id": "acc-78",
    "name": "CSOnline Union Graphic Knit Beanie",
    "price": 90000,
    "category": "accessories",
    "image": "/images/IMG_1441.jpg",
    "secondaryImage": "/images/IMG_1445.jpg",
    "badge": "",
    "description": "The CSONLINE Union Graphic Knit Beanie blends British-inspired graphics with contemporary streetwear aesthetics. Constructed from a soft stretch-knit fabric, this fitted beanie delivers warmth, comfort, and a streamlined silhouette without unnecessary bulk.\n\nThe all-over distressed print combines oversized typography with a vintage-inspired Union Jack motif, creating a bold visual statement from every angle. Its lightweight construction makes it suitable for year-round wear, whether layered into winter fits or used as a statement accessory during cooler evenings.\n\nDesigned for versatility, the beanie conforms comfortably to the head while maintaining a clean, modern shape. The subtle embroidered OSONE branding completes the design with a premium finishing touch.\n\nFeatures:\n\n• Soft stretch-knit construction\n• Distressed Union Jack graphic print\n• Oversized typography detailing\n• Lightweight and breathable feel\n• Embroidered OSONE branding\n• Flexible one-size fit\n• Unisex design\n• Comfortable skull-cap silhouette\n\nStyle Notes:\n\nWear with oversized tees, hoodies, denim jackets, cargos, or layered streetwear outfits. The monochrome and red graphic combination makes it easy to pair with both neutral and statement pieces.\n\nFit & Details:\n\n• Material: Polyester Blend Knit\n• Color: Multi-Color Graphic Print\n• Fit: One Size Fits Most\n• Style: Streetwear, Casual, Urban\n• Gender: Unisex\n• Season: All Season"
  },
  {
    "id": "acc-79",
    "name": "LCE Striped Patch Balaclava Beanie",
    "price": 100000,
    "category": "accessories",
    "image": "/images/IMG_1436.jpg",
    "secondaryImage": "/images/IMG_1437.jpg",
    "badge": "",
    "description": "The LCE Striped Patch Balaclava Beanie combines motorsport influences, punk-inspired graphics, and contemporary streetwear styling into a standout headwear piece. Constructed from a soft knitted fabric, the design features bold black and white vertical stripes enhanced with embroidered statement patches including racing stars, flame graphics, tongue motifs, and logo detailing.\n\nDesigned with an extended silhouette and horn-inspired top points, this balaclava delivers a distinctive futuristic look while providing warmth and comfort. The stretch-knit construction ensures a secure fit, making it suitable for everyday wear, styling shoots, festivals, and fashion-forward streetwear outfits.\n\nWhether worn with oversized hoodies, leather jackets, racing-inspired pieces, or technical outerwear, this piece instantly elevates any outfit with a rebellious and expressive edge.\n\nFeatures:\n\n• Premium stretch-knit construction\n• Black and white striped design\n• Embroidered graphic patches\n• Balaclava-style coverage\n• Extended horn-tip silhouette\n• Soft and comfortable fit\n• Breathable knit fabric\n• Unisex design\n• Y2K-inspired aesthetic\n• Motorsport and punk influences\n\nStyle Notes:\n\nPair with oversized hoodies, leather jackets, cargo pants, distressed denim, or motocross-inspired pieces for a complete underground streetwear look. Ideal for creating bold statement outfits and layered winter styling.\n\nFit & Details:\n\n• Material: Acrylic Knit Blend\n• Color: Black / White\n• Graphics: Embroidered Patches\n• Style: Balaclava Beanie\n• Fit: Stretch Fit\n• Gender: Unisex\n• Season: Autumn / Winter / All Season Styling\n• Aesthetic: Streetwear, Punk, Motorsport, Y2K"
  },
  {
    "id": "acc-80",
    "name": "Esoteric Thing Chase Graphic Cap",
    "price": 160000,
    "category": "accessories",
    "image": "/images/IMG_1434.jpg",
    "secondaryImage": "/images/IMG_1433.jpg",
    "badge": "",
    "description": "The Esoteric Thing Chase Graphic Cap pushes conventional headwear into artistic territory. Covered in an immersive all-over print featuring abstract graffiti-inspired artwork, surreal facial imagery, and layered visual elements, this cap is designed to stand out from every angle.\n\nBuilt with a structured six-panel construction, the cap combines contemporary streetwear styling with experimental graphic design. The curved visor provides everyday wearability while the adjustable rear strap ensures a secure and comfortable fit.\n\nIts vivid blend of lime green, blue, black, and muted pink tones creates a wearable art piece that pairs effortlessly with oversized silhouettes, cargo pants, technical outerwear, and contemporary streetwear staples.\n\nFeatures:\n\n• All-over graphic artwork print\n• Structured six-panel construction\n• Curved visor design\n• Adjustable rear strap closure\n• Lightweight and comfortable fit\n• High-definition printed graphics\n• Durable everyday construction\n• Unisex styling\n• Statement streetwear accessory\n• Suitable for all seasons\n\nStyle Notes:\n\nPerfect for elevating minimalist outfits or complementing experimental streetwear looks. Pair with oversized tees, washed denim, cargos, technical jackets, or graphic-heavy pieces for maximum impact.\n\nFit & Details:\n\n• Material: Polyester Blend\n• Color: Multi-Color Graphic Print\n• Closure: Adjustable Strap\n• Crown: Structured 6-Panel\n• Visor: Curved Brim\n• Fit: One Size Fits Most\n• Gender: Unisex\n• Style: Streetwear, Contemporary, Graphic, Avant-Garde"
  },
  {
    "id": "acc-81",
    "name": "UNIT Esoteric Patch Snapback Cap",
    "price": 160000,
    "category": "accessories",
    "image": "/images/IMG_1428.jpg",
    "secondaryImage": "/images/IMG_1422.jpg",
    "badge": "",
    "description": "The UNIT Esoteric Patch Snapback Cap blends racing culture, vintage club graphics, and contemporary streetwear into a standout everyday accessory. Constructed from durable cotton twill, this black six-panel cap features bold front UNIT embroidery alongside an array of embroidered patches positioned throughout the crown for a unique custom-built look.\n\nThe structured silhouette is finished with an adjustable snapback closure for a comfortable fit, while the patch-heavy design channels early-2000s racing merchandise and underground streetwear influences. Whether paired with oversized tees, denim, cargos, or technical outerwear, this cap adds instant personality and visual depth to any outfit.\n\nFeatures:\n\n• Premium cotton twill construction\n• Large embroidered UNIT logo on front\n• Multi-patch embroidered detailing\n• Structured six-panel design\n• Flat curved visor profile\n• Adjustable snapback closure\n• Reinforced stitching\n• Lightweight and breathable\n• Unisex design\n• Everyday wear comfort\n\nStyle Notes:\n\nWear with graphic tees, oversized denim, racing jackets, cargo pants, and vintage-inspired sneakers for a complete streetwear look. Perfect for adding a bold statement to casual outfits.\n\nFit & Details:\n\n• Material: Cotton Twill\n• Color: Black\n• Closure: Adjustable Snapback\n• Construction: 6-Panel Structured Cap\n• Graphics: Embroidered Logo & Patches\n• Fit: One Size Fits Most\n• Gender: Unisex\n• Style: Streetwear, Racing, Y2K, Vintage"
  },
  {
    "id": "acc-82",
    "name": "KO-Workers Camo Graphic Trucker Cap",
    "price": 128500,
    "category": "accessories",
    "image": "/images/IMG_2346.jpeg",
    "secondaryImage": "/images/IMG_2344.jpeg",
    "badge": "",
    "description": "The KO-Workers Camo Graphic Trucker Cap blends vintage trucker styling with playful streetwear graphics and military-inspired camouflage accents. Designed with a structured front panel, breathable mesh construction, and a curved camo visor, this cap delivers everyday comfort while making a bold statement.\n\nThe front showcases eye-catching KO-Workers artwork with embroidered and printed graphic elements, complemented by cheerful character details and hand-drawn typography. The camouflage brim and mesh rear panels add a rugged outdoor-inspired finish, making it a standout accessory for casual and streetwear looks.\n\nBuilt for all-day wear, the adjustable snapback closure ensures a secure fit while the lightweight mesh construction keeps airflow moving in warmer conditions.\n\nFeatures:\n\n• Structured foam front panel\n• KO-Workers graphic artwork\n• Camouflage curved visor\n• Breathable mesh side and rear panels\n• Adjustable snapback closure\n• Lightweight construction\n• Durable everyday wear design\n• Unisex styling\n\nStyle Notes:\n\nPair with cargos, utility pants, oversized graphic tees, hoodies, denim, or military-inspired streetwear pieces. The earthy camouflage tones make it easy to style with neutrals, greens, browns, and vintage-inspired outfits.\n\nFit & Details:\n\n• Material: Polyester Foam & Mesh\n• Closure: Adjustable Snapback\n• Brim Style: Curved Camo Visor\n• Fit: One Size Fits Most\n• Color: Olive Green, Brown Camo & Khaki\n• Style: Trucker, Streetwear, Casual, Vintage\n• Gender: Unisex"
  },
  {
    "id": "acc-83",
    "name": "Working Hero Kountry Embroidered Trucker Cap",
    "price": 128500,
    "category": "accessories",
    "image": "/images/IMG_1203.jpg",
    "secondaryImage": "/images/IMG_1205.jpg",
    "badge": "",
    "description": "The Working Hero Kountry Embroidered Trucker Cap combines vintage Americana aesthetics with modern streetwear appeal. Designed with a structured foam front panel and breathable mesh back, this cap delivers comfort, ventilation, and standout style for everyday wear.\n\nThe front showcases playful hand-drawn graphics, bold typography, and motorcycle-inspired artwork, creating a nostalgic workwear-meets-streetwear look. Premium embroidered leaf appliqués on the curved brim add texture and elevate the design with a distinctive finishing touch.\n\nThe breathable trucker construction and adjustable snapback closure ensure a comfortable fit, making it an easy accessory for casual outfits throughout the year.\n\nFeatures:\n\n• Structured foam front panel\n• Breathable mesh side and rear panels\n• Working Hero Kountry graphic print\n• Premium embroidered leaf detailing on brim\n• Curved visor design\n• Adjustable snapback closure\n• Lightweight and comfortable fit\n• Durable construction\n• Unisex styling\n\nStyle Notes:\n\nPair with graphic tees, denim jackets, cargos, workwear-inspired pieces, or vintage streetwear looks. The earthy brown and cream color palette makes it easy to style with neutral and autumn-toned outfits.\n\nFit & Details:\n\n• Material: Polyester Foam & Mesh\n• Closure: Adjustable Snapback\n• Brim Style: Curved\n• Fit: One Size Fits Most\n• Color: Cream, Brown & Black\n• Style: Trucker, Vintage, Streetwear, Casual\n• Gender: Unisex"
  },
  {
    "id": "acc-84",
    "name": "Unknownworld Straggler Distressed Cap",
    "price": 110000,
    "category": "accessories",
    "image": "/images/IMG_1188-1.jpg",
    "secondaryImage": "/images/IMG_1186.jpg",
    "badge": "",
    "description": "The Unknownworld Straggler Distressed Cap combines vintage-inspired wear patterns with contemporary streetwear graphics. Constructed from durable cotton twill, the cap features bold STRAGGLER embroidery across the front panel, layered over an illustrated graphic that gives the piece its distinctive character.\n\nHeavy distressing along the brim and crown creates a naturally worn-in appearance, while the washed charcoal finish adds depth and texture. An adjustable rear strap embroidered with UNKNOWNWORLD branding allows for a customizable fit.\n\nDesigned to complement oversized hoodies, flannels, distressed denim, cargos, and everyday streetwear rotations, this cap delivers effortless attitude with a broken-in feel from day one.\n\nFeatures:\n\n• Premium cotton twill construction\n• STRAGGLER front embroidery\n• Graphic artwork detailing\n• Vintage washed finish\n• Distressed brim and crown accents\n• Adjustable rear strap closure\n• UNKNOWNWORLD back branding\n• Structured six-panel construction\n• Curved visor\n• Unisex design\n\nStyle Notes:\n\nPair with faded denim, oversized outerwear, graphic tees, cargo pants, and rugged footwear for a naturally worn streetwear look. The distressed finish makes it an easy addition to both vintage-inspired and contemporary outfits.\n\nFit & Details:\n\n• Material: Cotton Twill\n• Color: Washed Charcoal Black\n• Closure: Adjustable Strap\n• Crown: 6-Panel Construction\n• Visor: Curved Brim\n• Fit: One Size Fits Most\n• Gender: Unisex\n• Style: Streetwear, Vintage, Distressed, Casual"
  },
  {
    "id": "acc-85",
    "name": "Warning Choking Hazard Distressed Baseball Cap",
    "price": 95000,
    "category": "accessories",
    "image": "/images/IMG_1376.jpg",
    "secondaryImage": "/images/IMG_1377.jpg",
    "badge": "",
    "description": "The Warning Choking Hazard Distressed Baseball Cap delivers a rebellious streetwear aesthetic through bold graphic treatments and heavily worn detailing. Crafted from durable cotton twill, this cap combines a vintage washed finish with distressed edges for a naturally aged appearance.\n\nThe front panel showcases a striking Warning Choking Hazard graphic inspired by industrial labels, while the curved brim features oversized typography that wraps across the visor for a statement look. Frayed detailing along the brim and panel seams adds texture and character, making each outfit stand out effortlessly.\n\nDesigned for everyday wear, the curved silhouette provides a comfortable fit while maintaining a bold street-inspired presence.\n\nFeatures:\n\n• Premium cotton twill construction\n• Distressed vintage wash finish\n• Warning Choking Hazard front graphic\n• Oversized typography visor print\n• Curved brim profile\n• Frayed edge detailing\n• Lightweight and breathable\n• Adjustable rear strap\n• Unisex design\n\nStyle Notes:\n\nPair with oversized graphic tees, distressed denim, cargos, hoodies, or layered streetwear outfits for an edgy urban look. The monochrome colorway makes it easy to style year-round.\n\nFit & Details:\n\n• Material: Cotton Twill\n• Closure: Adjustable Strap\n• Brim Style: Curved\n• Fit: One Size Fits Most\n• Color: Black\n• Style: Streetwear, Vintage, Distressed, Casual\n• Gender: Unisex"
  },
  {
    "id": "acc-86",
    "name": "Vetsworld Pioneer Graphic Trucker Cap",
    "price": 100000,
    "category": "accessories",
    "image": "/images/IMG_1373.jpg",
    "secondaryImage": "/images/IMG_1371.jpg",
    "badge": "",
    "description": "The Vetsworld Pioneer Graphic Trucker Cap delivers a nostalgic Y2K-inspired aesthetic with vibrant colors and oversized typography. Built with a structured foam front panel and breathable mesh rear construction, this cap combines comfort with standout visual appeal.\n\nThe front showcases a layered graphic design featuring bold lettering, stars, and multicolored artwork that captures the energy of vintage racing, pop culture, and early-2000s streetwear influences. Contrasting blue mesh panels and a curved brown visor complete the look, while the adjustable snapback closure ensures a comfortable fit.\n\nWhether paired with oversized hoodies, graphic tees, baggy denim, or cargos, this cap instantly adds color and personality to any outfit.\n\nFeatures:\n\n• High-density front graphic print\n• Structured foam front panel\n• Breathable mesh side and rear panels\n• Curved visor design\n• Adjustable snapback closure\n• Lightweight construction\n• Contrast color blocking\n• Unisex fit\n• Everyday streetwear essential\n\nStyle Notes:\n\nWear with oversized hoodies, relaxed denim, cargo pants, sneakers, and layered streetwear pieces for a bold Y2K-inspired look. The vibrant color palette makes it a standout accessory for casual outfits.\n\nFit & Details:\n\n• Material: Polyester Foam & Mesh\n• Color: Yellow / Blue / Brown\n• Closure: Adjustable Snapback\n• Visor: Curved Brim\n• Fit: One Size Fits Most\n• Gender: Unisex\n• Style: Streetwear, Y2K, Casual, Vintage Inspired"
  },
  {
    "id": "acc-87",
    "name": "Haute Couture Metal Detail Distressed Cap",
    "price": 85000,
    "category": "accessories",
    "image": "/images/IMG_2368.jpeg",
    "secondaryImage": "/images/IMG_2361.jpeg",
    "badge": "",
    "description": "The Haute Couture Metal Detail Distressed Cap combines luxury-inspired graphics with rugged streetwear detailing. Crafted from durable cotton twill, this statement cap features oversized embroidered artwork across the crown and visor, creating a striking layered visual effect.\n\nDistressed abrasions around the panels and brim add a worn-in vintage character, while the polished metallic accents along the edge of the visor elevate the design with a premium fashion-forward touch. The curved brim offers classic everyday styling, and the adjustable rear closure ensures a comfortable fit for all-day wear.\n\nDesigned for those who appreciate bold accessories, this cap easily complements modern streetwear, monochrome outfits, oversized silhouettes, and luxury casual looks.\n\nFeatures:\n\n• Premium cotton twill construction\n• Oversized Haute Couture embroidered artwork\n• Distressed vintage detailing\n• Decorative metallic visor accents\n• Curved brim silhouette\n• Adjustable rear closure\n• Structured crown design\n• Unisex styling\n\nStyle Notes:\n\nPair with oversized tees, distressed denim, cargos, leather jackets, or monochrome fits for a strong luxury-streetwear look. The black-on-black aesthetic makes it versatile while maintaining a bold presence.\n\nFit & Details:\n\n• Material: Cotton Twill\n• Closure: Adjustable Strap\n• Brim Style: Curved\n• Color: Black\n• Fit: One Size Fits Most\n• Style: Streetwear, Luxury Casual, Fashion Cap\n• Gender: Unisex"
  },
  {
    "id": "top-88",
    "name": "YardCrew Textured Waffle Henley Long Sleeve",
    "price": 90000,
    "category": "tops",
    "image": "/images/IMG_1196.jpg",
    "secondaryImage": "/images/IMG_1192.jpg",
    "badge": "",
    "description": "The YardCrew Textured Waffle Henley Long Sleeve blends comfort, texture, and contemporary design into a versatile wardrobe essential. Crafted from a heavyweight waffle-knit fabric with a soft brushed finish, this piece delivers warmth, breathability, and a distinctive tactile feel.\n\nDesigned with a unique asymmetrical Henley placket and tonal embroidered chest detailing, the silhouette balances vintage military inspiration with modern streetwear aesthetics. The relaxed fit and dropped shoulders create an effortless drape, making it ideal for layering or wearing on its own.\n\nThe textured surface adds depth and visual interest while maintaining a clean and minimal appearance suitable for both casual and elevated styling.\n\nFeatures:\n\n• Premium textured waffle-knit construction\n• Asymmetrical Henley button placket\n• Tonal embroidered chest logo detail\n• Relaxed oversized fit\n• Soft-touch brushed finish\n• Ribbed neckline construction\n• Long sleeves with relaxed cuffs\n• Unisex design\n• Suitable for year-round layering\n\nStyle Notes:\n\nPair with wide-leg denim, cargo trousers, tailored pants, or shorts for an elevated casual look. Layer under jackets and outerwear during colder months or wear solo for a clean minimalist outfit.\n\nFit & Details:\n\n• Material: Cotton Blend Waffle Knit\n• Neckline: Henley Collar\n• Sleeve Length: Long Sleeve\n• Fit: Relaxed / Oversized\n• Texture: Heavy Waffle Knit\n• Gender: Unisex\n• Style: Contemporary, Minimalist, Streetwear, Casual"
  }
];

// 2. CART SYSTEM STATE
let cart = localStorage.getItem('district_cart') 
  ? JSON.parse(localStorage.getItem('district_cart')) 
  : [];

document.addEventListener('DOMContentLoaded', () => {
  // Weekly Outfits & Member Session states
  let loggedInUser = localStorage.getItem('loggedInUser') 
    ? JSON.parse(localStorage.getItem('loggedInUser')) 
    : null;

  let activeLookbookIds = localStorage.getItem('activeLookbookIds') 
    ? JSON.parse(localStorage.getItem('activeLookbookIds')) 
    : ['col-1', 'col-2', 'col-3', 'col-4'];

  const cartBadge = document.getElementById('cart-badge');
  const cartBadgeMobile = document.getElementById('cart-badge-mobile');
  const cartItemsList = document.getElementById('cart-items-list');
  const cartSubtotal = document.getElementById('cart-subtotal');
  const currencySelect = document.getElementById('currency-select');

  // ==========================================
  // 3. MULTI-CURRENCY PRICING LOCALIZATION
  // ==========================================
  const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
  let currentCurrency = 'NGN';
  
  if (!userTimeZone.includes('Lagos') && !userTimeZone.includes('Africa')) {
    currentCurrency = 'USD';
  }

  const currencyRates = {
    NGN: 1,
    USD: 1 / 1500,
    GBP: 1 / 1900,
    EUR: 1 / 1600
  };

  const currencySymbols = {
    NGN: '₦',
    USD: '$',
    GBP: '£',
    EUR: '€'
  };

  const formatPrice = (amount) => {
    const converted = amount * currencyRates[currentCurrency];
    const symbol = currencySymbols[currentCurrency];
    return `${symbol}${converted.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })}`;
  };

  // Sync Currency dropdown UI & Dynamic popover price tags
  const syncPopoverPrices = () => {
    document.querySelectorAll('.popover-price').forEach(el => {
      const originalPrice = parseFloat(el.getAttribute('data-price'));
      if (originalPrice) {
        el.textContent = formatPrice(originalPrice);
      }
    });
  };

  if (currencySelect) {
    currencySelect.value = currentCurrency;
    currencySelect.addEventListener('change', (e) => {
      currentCurrency = e.target.value;
      renderAllGrids();
      updateCartUI();
      syncPopoverPrices();
    });
  }

  // Initial popover price sync
  syncPopoverPrices();

  // ==========================================
  // 4. PRODUCT GRID RENDERING (SECTION BY SECTION)
  // ==========================================
  // Intersection Observer for scroll reveal animations on product cards
  const cardRevealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.05
  });

  const renderGridSection = (categoryName, elementId) => {
    const grid = document.getElementById(elementId);
    if (!grid) return;
    grid.innerHTML = '';

    const categoryProducts = PRODUCTS.filter(p => p.category === categoryName);

    categoryProducts.forEach((product, index) => {
      const card = document.createElement('li');
      card.className = 'entry content-bg loop-entry product-card-custom animate-in';
      card.setAttribute('data-product-id', product.id);
      card.style.cursor = 'pointer';
      
      const delay = (index % 4) * 0.1;
      card.style.transitionDelay = `${delay}s`;

      const badgeHtml = product.badge 
        ? `<span class="product-badge-custom ${product.badge.toLowerCase()}">${product.badge}</span>` 
        : '';
      
      const oldPriceHtml = product.oldPrice 
        ? `<span class="product-price-del">${formatPrice(product.oldPrice)}</span>` 
        : '';

      card.innerHTML = `
        <div class="product-img-wrapper-custom">
          ${badgeHtml}
          <a href="#" class="product-link-img" data-product-id="${product.id}">
            <img src="${product.image}" alt="${product.name}" class="product-img-custom primary" loading="lazy">
            <img src="${product.secondaryImage}" alt="${product.name}" class="product-img-custom secondary" loading="lazy">
          </a>
          
          <!-- Slide-Up Hover Size Options tag grid (Overriding prompt prompts) -->
          <div class="quick-add-sizes-overlay">
            <span class="quick-add-label">Quick Add</span>
            <div class="quick-add-size-row">
              <button class="size-select-tag" data-product-id="${product.id}" data-size="S">S</button>
              <button class="size-select-tag" data-product-id="${product.id}" data-size="M">M</button>
              <button class="size-select-tag" data-product-id="${product.id}" data-size="L">L</button>
              <button class="size-select-tag" data-product-id="${product.id}" data-size="XL">XL</button>
              <button class="size-select-tag" data-product-id="${product.id}" data-size="XXL">XXL</button>
            </div>
          </div>
        </div>
        <div class="product-details-custom">
          <h2 class="product-title-custom-link">
            <a href="#" data-product-id="${product.id}">${product.name}</a>
          </h2>
          <span class="price-custom">
            ${formatPrice(product.price)}
            ${oldPriceHtml}
          </span>
        </div>
      `;

      grid.appendChild(card);
      cardRevealObserver.observe(card);
    });
  };

  // Curated Lookbook List Rendering
  const renderLookbookSection = () => {
    const list = document.getElementById('grid-lookbook');
    if (!list) return;
    list.innerHTML = '';

    // Filter based on active selected IDs from admin/staff selection
    let lookbookProducts = PRODUCTS.filter(p => activeLookbookIds.includes(p.id));
    
    // Fallback if not exactly 4 products
    if (lookbookProducts.length === 0) {
      lookbookProducts = PRODUCTS.slice(0, 4);
    }

    // Update the dots in index.html to point to these new dynamic IDs in order!
    const dots = document.querySelectorAll('.lookbook-dot');
    dots.forEach((dot, index) => {
      if (lookbookProducts[index]) {
        dot.setAttribute('data-product-id', lookbookProducts[index].id);
      }
    });

    lookbookProducts.forEach(product => {
      const card = document.createElement('li');
      card.className = 'lookbook-item-card';
      card.setAttribute('data-target-dot', product.id);
      
      let btnText = "Add to Cart";
      let btnClass = "lookbook-btn";
      let isSoldOut = false;

      const lowerName = product.name.toLowerCase();
      if (lowerName.includes('jorts') || lowerName.includes('layered jorts') || product.id === 'bot-3') {
        btnText = "Sold Out";
        btnClass = "lookbook-btn sold-out";
        isSoldOut = true;
      } else if (lowerName.includes('jersey') || lowerName.includes('hoodie') || lowerName.includes('shirt') || lowerName.includes('clog') || lowerName.includes('mule') || lowerName.includes('pants') || lowerName.includes('speedcat') || lowerName.includes('t-shirt') || lowerName.includes('polo')) {
        btnText = "Select Size";
      }

      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="lookbook-item-img">
        <div class="lookbook-item-info">
          <h4 class="lookbook-item-name">${product.name}</h4>
          <span class="lookbook-item-price">${formatPrice(product.price)}</span>
        </div>
        <div class="lookbook-actions-wrapper">
          <button class="${btnClass}" data-product-id="${product.id}" ${isSoldOut ? 'disabled' : ''}>${btnText}</button>
          <svg class="lookbook-arrow" viewBox="0 0 24 24" style="width: 14px; height: 14px; stroke: currentColor; stroke-width: 2.5; fill: none; opacity: 0.7;"><path d="M9 5l7 7-7 7"/></svg>
        </div>
      `;

      list.appendChild(card);
    });

    // Add hotspot hover triggers
    document.querySelectorAll('.lookbook-dot').forEach(dot => {
      const prodId = dot.getAttribute('data-product-id');
      
      // Clean up previous event listeners by cloning node
      const newDot = dot.cloneNode(true);
      dot.parentNode.replaceChild(newDot, dot);
      
      newDot.addEventListener('mouseenter', () => {
        const matchingCard = document.querySelector(`.lookbook-item-card[data-target-dot="${prodId}"]`);
        if (matchingCard) {
          matchingCard.classList.add('highlight');
        }
      });
      newDot.addEventListener('mouseleave', () => {
        const matchingCard = document.querySelector(`.lookbook-item-card[data-target-dot="${prodId}"]`);
        if (matchingCard) {
          matchingCard.classList.remove('highlight');
        }
      });
      newDot.addEventListener('click', () => {
        const isSoldOut = activeLookbookIds.includes(prodId) && (prodId === 'bot-3' || PRODUCTS.find(p => p.id === prodId)?.name.toLowerCase().includes('jorts'));
        if (!isSoldOut) {
          window.location.href = `/product?id=${prodId}`;
        }
      });
    });

    // Add lookbook quick add actions
    document.querySelectorAll('.lookbook-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        if (btn.classList.contains('sold-out')) return;
        const prodId = btn.getAttribute('data-product-id');
        window.location.href = `/product?id=${prodId}`;
      });
    });
  };

  // Render all categories
  const renderAllGrids = () => {
    renderGridSection('collections', 'grid-collections');
    renderGridSection('accessories', 'grid-accessories');
    renderGridSection('tops', 'grid-tops');
    renderGridSection('bottoms', 'grid-bottoms');
    renderGridSection('home-decor', 'grid-home-decor');
    renderLookbookSection();

    // Attach click events to the slide-up size options tags directly
    document.querySelectorAll('.size-select-tag').forEach(tag => {
      tag.addEventListener('click', (e) => {
        e.stopPropagation();
        e.preventDefault();
        const prodId = tag.getAttribute('data-product-id');
        const size = tag.getAttribute('data-size');
        const product = PRODUCTS.find(p => p.id === prodId);
        if (product && size) {
          addToCart(product, size);
        }
      });
    });

    // Attach fallback modal display on card click
    document.querySelectorAll('.product-card-custom').forEach(el => {
      el.addEventListener('click', (e) => {
        if (e.target.closest('.quick-add-sizes-overlay') || e.target.closest('.size-select-tag')) return;
        e.preventDefault();
        const prodId = el.getAttribute('data-product-id');
        if (prodId) {
          window.location.href = `/product?id=${prodId}`;
        }
      });
    });
  };

  renderAllGrids();

  // Handle global search hooks
  document.addEventListener('catalogSearch', (e) => {
    const query = e.detail.toLowerCase();
    const foundProduct = PRODUCTS.find(p => p.name.toLowerCase().includes(query));
    if (foundProduct) {
      const matchElement = document.querySelector(`[data-product-id="${foundProduct.id}"]`);
      if (matchElement) {
        matchElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        const cardParent = matchElement.closest('.product-card-custom');
        if (cardParent) {
          cardParent.style.outline = "2px solid var(--color-black)";
          setTimeout(() => {
            cardParent.style.outline = "none";
          }, 3000);
        }
      }
    } else {
      alert(`No products matching: "${query}" found.`);
    }
  });

  // ==========================================
  // 5. SIZE SELECTOR MODAL & SIZING CHARTS (Fallback lookup)
  // ==========================================
  const getProductDescription = (product) => {
    if (product.description) return product.description;
    
    const name = product.name;
    const cat = (product.category || '').toLowerCase();
    
    // Custom premium description mapping for specific items
    const specificDescriptions = {
      // Clogs & Footwear
      "acc-1": "A premium hair-on leather slip-on clog featuring custom metal bullet stud accents, a comfortable contoured footbed, and a durable rubber outsole. Perfect for high-contrast daily fits.",
      "acc-2": "A unique utility clog crafted from washed blue denim, featuring miniature functional pockets with button closures, rivets, and a slip-on mule silhouette.",
      "acc-3": "An iconic metal lighter case pendant on a sleek silver chain, engraved with classic design details. A stylish and functional streetwear accessory.",
      "acc-11": "Premium leather motorcycle riding gloves featuring custom iron cross stitching, padded knuckles, and adjustable wrist straps. Durable, safe, and style-forward.",
      
      // Vases & Home Decor
      "hom-4": "A premium glazed ceramic decorative vase featuring all-over printed alphabet graphics. A standout collector piece for home decor and display setups.",
      "hom-5": "A collectible ceramic home decor vase featuring a high-gloss finish and a spiked punk-inspired collar design around the neck. Perfect statement piece.",
      
      // Belts
      "acc-6": "A collaborative webbed belt featuring Denim Tears signature spade graphics, finished with a heavy metal clamp buckle. Fully adjustable fit.",
      "acc-7": "A luxury waist belt crafted from real hair-on cowhide leather, featuring sharp metallic accents and a polished buckle for high-fashion rotations.",
      "acc-8": "A graphic web belt featuring custom online printed statement typography and a matte black quick-release buckle.",
      "acc-9": "A classic western-style belt made of textured hair-on leather, featuring custom Roman silver hardware and buckle designs.",
      "acc-10": "A premium leather belt featuring Remedy Crew custom star emblem metal hardware and a rugged hair-on texture."
    };
    
    if (specificDescriptions[product.id]) {
      return specificDescriptions[product.id];
    }
    
    // Dynamic descriptions tailored to category incorporating the exact product name
    const lowerName = name.toLowerCase();
    if (cat.includes('top') || lowerName.includes('shirt') || lowerName.includes('hoodie') || lowerName.includes('jersey') || lowerName.includes('knit')) {
      return `The ${name} is designed for ultimate everyday comfort and streetwear appeal. This piece features a custom relaxed fit, drop-shoulder seams, and premium heavyweight fabric. Finished with custom detailing.`;
    }
    if (cat.includes('bottom') || lowerName.includes('pant') || lowerName.includes('jean') || lowerName.includes('shorts') || lowerName.includes('jorts')) {
      return `The ${name} is tailored with a modern relaxed silhouette. Engineered with custom hardware, utility pocket details, and premium fabric dye. Built for daily durability and clean outfit combinations.`;
    }
    if (cat.includes('accessories') || lowerName.includes('belt') || lowerName.includes('necklace') || lowerName.includes('cap') || lowerName.includes('socks')) {
      return `The ${name} is a refined accessory crafted with a focus on material quality and aesthetic precision. Designed to add a distinct fashion edge to your style rotation.`;
    }
    if (cat.includes('home-decor') || lowerName.includes('decor') || lowerName.includes('vase') || lowerName.includes('pillow') || lowerName.includes('rug')) {
      return `The ${name} is a statement interior piece designed by 234 District. High-grade materials and custom artwork to elevate any living space with premium aesthetics.`;
    }
    return `The ${name} is an exclusive 234 District seasonal release. Designed in-house with curated fabrics and custom aesthetic details. Perfect for elevating your style rotation.`;
  };

  const showProductOptionsModal = (productId) => {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    // Get modal DOM nodes
    const modal = document.getElementById('product-options-modal');
    const productName = document.getElementById('options-product-name');
    const productPrice = document.getElementById('options-product-price');
    const sizeButtonsContainer = document.getElementById('options-size-buttons');
    const addToCartBtn = document.getElementById('options-add-to-cart-btn');
    const buyItNowBtn = document.getElementById('options-buy-it-now-btn');
    const sizeChartTrigger = document.getElementById('options-size-chart-trigger');
    const closeBtn = document.getElementById('close-options-modal');

    if (!modal) return;

    // Populate modal contents
    if (productName) productName.textContent = product.name;
    if (productPrice) productPrice.textContent = formatPrice(product.price);

    const productDesc = document.getElementById('options-product-description');
    if (productDesc) {
      productDesc.textContent = getProductDescription(product);
    }

    // Dynamic Image Slideshow in Modal
    const slideshowWrapper = document.getElementById('modal-slideshow-wrapper');
    const dotsContainer = document.getElementById('modal-slide-dots');
    const prevBtn = document.getElementById('modal-slide-prev');
    const nextBtn = document.getElementById('modal-slide-next');

    if (slideshowWrapper) {
      slideshowWrapper.innerHTML = '';
      if (dotsContainer) dotsContainer.innerHTML = '';

      const images = [];
      if (product.image) images.push(product.image);
      if (product.secondaryImage) images.push(product.secondaryImage);

      let slideIndex = 0;

      images.forEach((imgSrc, idx) => {
        const slide = document.createElement('img');
        slide.src = imgSrc;
        slide.alt = `${product.name} - View ${idx + 1}`;
        slide.className = 'modal-slide-img' + (idx === 0 ? ' active' : '');
        slideshowWrapper.appendChild(slide);

        if (dotsContainer) {
          const dot = document.createElement('span');
          dot.className = 'modal-slide-dot' + (idx === 0 ? ' active' : '');
          dot.addEventListener('click', () => {
            goToSlide(idx);
          });
          dotsContainer.appendChild(dot);
        }
      });

      // Hide navigation arrows if only 1 image exists
      if (images.length <= 1) {
        if (prevBtn) prevBtn.style.display = 'none';
        if (nextBtn) nextBtn.style.display = 'none';
      } else {
        if (prevBtn) prevBtn.style.display = 'flex';
        if (nextBtn) nextBtn.style.display = 'flex';
      }

      const goToSlide = (idx) => {
        slideIndex = idx;
        const slides = slideshowWrapper.querySelectorAll('.modal-slide-img');
        const dots = dotsContainer ? dotsContainer.querySelectorAll('.modal-slide-dot') : [];

        slides.forEach((slide, sIdx) => {
          if (sIdx === idx) {
            slide.classList.add('active');
          } else {
            slide.classList.remove('active');
          }
        });

        dots.forEach((dot, dIdx) => {
          if (dIdx === idx) {
            dot.classList.add('active');
          } else {
            dot.classList.remove('active');
          }
        });
      };

      // Slide arrow click handlers
      const onPrev = () => {
        let newIdx = slideIndex - 1;
        if (newIdx < 0) newIdx = images.length - 1;
        goToSlide(newIdx);
      };

      const onNext = () => {
        let newIdx = (slideIndex + 1) % images.length;
        goToSlide(newIdx);
      };

      if (prevBtn) {
        const newPrev = prevBtn.cloneNode(true);
        prevBtn.parentNode.replaceChild(newPrev, prevBtn);
        newPrev.addEventListener('click', onPrev);
      }
      if (nextBtn) {
        const newNext = nextBtn.cloneNode(true);
        nextBtn.parentNode.replaceChild(newNext, nextBtn);
        newNext.addEventListener('click', onNext);
      }
    }

    // Setup size arrays depending on category (footwear vs. apparel)
    let sizes = ['S', 'M', 'L', 'XL', 'XXL'];
    if (product.category === 'accessories' && (product.slug.includes('shoe') || product.slug.includes('clog') || product.slug.includes('mule') || product.slug.includes('footwear') || product.slug.includes('speedcat'))) {
      sizes = ['UK 5', 'UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11', 'UK 12'];
    } else if (product.category === 'home-decor') {
      sizes = ['O/S'];
    }

    let selectedSize = null;

    // Render Size Option Buttons
    if (sizeButtonsContainer) {
      sizeButtonsContainer.innerHTML = '';
      sizes.forEach(size => {
        const btn = document.createElement('button');
        btn.className = 'size-btn-option';
        btn.textContent = size;
        btn.addEventListener('click', () => {
          sizeButtonsContainer.querySelectorAll('.size-btn-option').forEach(b => b.classList.remove('selected'));
          btn.classList.add('selected');
          selectedSize = size;
        });
        sizeButtonsContainer.appendChild(btn);
      });
      
      // Auto-select first size for comfort (S or UK 7 or O/S)
      const firstBtn = sizeButtonsContainer.querySelector('.size-btn-option');
      if (firstBtn) {
        firstBtn.click();
      }
    }

    // Set dynamic button click listeners
    const cleanupEventListeners = () => {
      // Clone action buttons to wipe previous listeners
      const newAddBtn = addToCartBtn.cloneNode(true);
      const newBuyBtn = buyItNowBtn.cloneNode(true);
      const newChartBtn = sizeChartTrigger.cloneNode(true);
      const newCloseBtn = closeBtn.cloneNode(true);
      
      addToCartBtn.parentNode.replaceChild(newAddBtn, addToCartBtn);
      buyItNowBtn.parentNode.replaceChild(newBuyBtn, buyItNowBtn);
      sizeChartTrigger.parentNode.replaceChild(newChartBtn, sizeChartTrigger);
      closeBtn.parentNode.replaceChild(newCloseBtn, closeBtn);

      return { newAddBtn, newBuyBtn, newChartBtn, newCloseBtn };
    };

    const buttons = cleanupEventListeners();

    // Close Modal action
    const closeModal = () => {
      modal.classList.remove('active');
    };

    buttons.newCloseBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });

    // Sizing Chart Trigger
    buttons.newChartBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const chartModal = document.getElementById('size-chart-modal');
      if (chartModal) {
        chartModal.classList.add('active');
      }
    });

    // Add to Cart
    buttons.newAddBtn.addEventListener('click', () => {
      if (!selectedSize) {
        alert("Please select a size first.");
        return;
      }
      addToCart(product, selectedSize);
      closeModal();
    });

    // Buy it Now (adds and opens drawer)
    buttons.newBuyBtn.addEventListener('click', () => {
      if (!selectedSize) {
        alert("Please select a size first.");
        return;
      }
      addToCart(product, selectedSize);
      closeModal();
      // Cart drawer opens automatically inside addToCart
    });

    // Open options modal
    modal.classList.add('active');
  };

  // ==========================================
  // 6. CART DATA BINDING
  // ==========================================
  const addToCart = (product, size) => {
    const existing = cart.find(item => item.id === product.id && item.size === size);
    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        size: size,
        qty: 1
      });
    }

    updateCartUI();
    
    // Slide out cart drawer automatically
    const openCartTrigger = document.querySelector('[data-drawer-trigger="cart-drawer"]');
    if (openCartTrigger) {
      openCartTrigger.click();
    }
  };

  const updateCartQty = (productId, size, delta) => {
    const itemIndex = cart.findIndex(item => item.id === productId && item.size === size);
    if (itemIndex === -1) return;

    cart[itemIndex].qty += delta;

    if (cart[itemIndex].qty <= 0) {
      cart.splice(itemIndex, 1);
    }

    updateCartUI();
  };

  const removeCartItem = (productId, size) => {
    cart = cart.filter(item => !(item.id === productId && item.size === size));
    updateCartUI();
  };

  const updateCartUI = () => {
    localStorage.setItem('district_cart', JSON.stringify(cart));
    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
    cartBadge.textContent = totalItems;
    if (cartBadgeMobile) {
      cartBadgeMobile.textContent = totalItems;
    }

    if (cart.length === 0) {
      cartItemsList.innerHTML = `<div class="cart-empty-message">Your shopping bag is empty.</div>`;
      cartSubtotal.textContent = formatPrice(0);
      return;
    }

    cartItemsList.innerHTML = '';
    let subtotal = 0;

    cart.forEach(item => {
      const itemCost = item.price * item.qty;
      subtotal += itemCost;

      const itemEl = document.createElement('div');
      itemEl.className = 'cart-item';
      itemEl.innerHTML = `
        <img src="${item.image}" alt="${item.name}" class="cart-item-img">
        <div class="cart-item-details">
          <h4 class="cart-item-title">${item.name}</h4>
          <p class="cart-item-meta">Size: ${item.size}</p>
          <div class="cart-item-price">${formatPrice(item.price)}</div>
          <div class="cart-item-qty">
            <button class="qty-btn dec" data-id="${item.id}" data-size="${item.size}">-</button>
            <span class="qty-val">${item.qty}</span>
            <button class="qty-btn inc" data-id="${item.id}" data-size="${item.size}">+</button>
          </div>
          <a href="#" class="cart-item-remove" data-id="${item.id}" data-size="${item.size}">Remove</a>
        </div>
      `;

      cartItemsList.appendChild(itemEl);
    });

    cartSubtotal.textContent = formatPrice(subtotal);

    // Qty listeners
    document.querySelectorAll('.qty-btn.inc').forEach(btn => {
      btn.addEventListener('click', () => {
        updateCartQty(btn.getAttribute('data-id'), btn.getAttribute('data-size'), 1);
      });
    });

    document.querySelectorAll('.qty-btn.dec').forEach(btn => {
      btn.addEventListener('click', () => {
        updateCartQty(btn.getAttribute('data-id'), btn.getAttribute('data-size'), -1);
      });
    });

    document.querySelectorAll('.cart-item-remove').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        removeCartItem(btn.getAttribute('data-id'), btn.getAttribute('data-size'));
      });
    });
  };

  updateCartUI();

  // ==========================================
  // 7. SCROLL REVEALS & ANIMS
  // ==========================================
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  }, { root: null, threshold: 0.1 });

  document.querySelectorAll('.journal-card, .product-section, .lookbook-section, .reviews-section, .shop-catalog-section').forEach(el => {
    revealObserver.observe(el);
  });

  // ==========================================
  // 8. DYNAMIC SHOP CATALOG CONTROLLER
  // ==========================================
  const initShopCatalog = () => {
    const gridShopAll = document.getElementById('grid-shop-all');
    if (!gridShopAll) return;

    const filterPills = document.querySelectorAll('.filter-pill');
    const searchInput = document.getElementById('catalog-search-input');
    const sortSelect = document.getElementById('catalog-sort-select');
    const loadMoreBtn = document.getElementById('load-more-catalog-btn');

    let currentFilter = 'all';
    let searchQuery = '';
    let currentSort = 'default';
    let itemsLimit = 100; // Show all products initially

    const renderCatalog = () => {
      // 1. Filter products
      let filtered = PRODUCTS.filter(p => {
        // Category filter
        const categoryMatch = currentFilter === 'all' || p.category === currentFilter;
        // Search filter
        const searchMatch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
        return categoryMatch && searchMatch;
      });

      // 2. Sort products
      if (currentSort === 'price-low') {
        filtered.sort((a, b) => a.price - b.price);
      } else if (currentSort === 'price-high') {
        filtered.sort((a, b) => b.price - a.price);
      } else if (currentSort === 'name-az') {
        filtered.sort((a, b) => a.name.localeCompare(b.name));
      }

      // 3. Paginate products
      const paginated = filtered.slice(0, itemsLimit);

      // 4. Render product cards
      gridShopAll.innerHTML = '';
      if (paginated.length === 0) {
        gridShopAll.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 40px 0; color: var(--color-gray); font-family: var(--font-heading); font-size: 0.9rem; font-weight: 800; text-transform: uppercase;">No products matches found.</div>`;
        loadMoreBtn.style.display = 'none';
        return;
      }

      paginated.forEach((product, index) => {
        const card = document.createElement('li');
        card.className = 'entry content-bg loop-entry product-card-custom animate-in';
        card.setAttribute('data-product-id', product.id);
        card.style.cursor = 'pointer';
        
        const delay = (index % 4) * 0.1;
        card.style.transitionDelay = `${delay}s`;

        const badgeHtml = product.badge 
          ? `<span class="product-badge-custom ${product.badge.toLowerCase()}">${product.badge}</span>` 
          : '';
        
        const oldPriceHtml = product.oldPrice 
          ? `<span class="product-price-del">${formatPrice(product.oldPrice)}</span>` 
          : '';

        card.innerHTML = `
          <div class="product-img-wrapper-custom">
            ${badgeHtml}
            <a href="#" class="product-link-img" data-product-id="${product.id}">
              <img src="${product.image}" alt="${product.name}" class="product-img-custom primary" loading="lazy">
              <img src="${product.secondaryImage}" alt="${product.name}" class="product-img-custom secondary" loading="lazy">
            </a>
            
            <!-- Slide-Up Hover Size Options tag grid (Overriding prompt prompts) -->
            <div class="quick-add-sizes-overlay">
              <span class="quick-add-label">Quick Add</span>
              <div class="quick-add-size-row">
                <button class="size-select-tag" data-product-id="${product.id}" data-size="S">S</button>
                <button class="size-select-tag" data-product-id="${product.id}" data-size="M">M</button>
                <button class="size-select-tag" data-product-id="${product.id}" data-size="L">L</button>
                <button class="size-select-tag" data-product-id="${product.id}" data-size="XL">XL</button>
                <button class="size-select-tag" data-product-id="${product.id}" data-size="XXL">XXL</button>
              </div>
            </div>
          </div>
          <div class="product-details-custom">
            <h2 class="product-title-custom-link">
              <a href="#" data-product-id="${product.id}">${product.name}</a>
            </h2>
            <span class="price-custom">
              ${formatPrice(product.price)}
              ${oldPriceHtml}
            </span>
          </div>
        `;
        gridShopAll.appendChild(card);
        cardRevealObserver.observe(card);
      });

      // 5. Attach click events directly for catalog
      gridShopAll.querySelectorAll('.size-select-tag').forEach(tag => {
        tag.addEventListener('click', (e) => {
          e.stopPropagation();
          e.preventDefault();
          const prodId = tag.getAttribute('data-product-id');
          const size = tag.getAttribute('data-size');
          const product = PRODUCTS.find(p => p.id === prodId);
          if (product && size) {
            addToCart(product, size);
          }
        });
      });

      gridShopAll.querySelectorAll('.product-card-custom').forEach(el => {
        el.addEventListener('click', (e) => {
          if (e.target.closest('.quick-add-sizes-overlay') || e.target.closest('.size-select-tag')) return;
          e.preventDefault();
          const prodId = el.getAttribute('data-product-id');
          if (prodId) {
            window.location.href = `/product?id=${prodId}`;
          }
        });
      });

      // 6. Handle load more visibility
      if (filtered.length > itemsLimit) {
        loadMoreBtn.style.display = 'block';
      } else {
        loadMoreBtn.style.display = 'none';
      }
    };

    // Filter Pills Click Events
    filterPills.forEach(pill => {
      pill.addEventListener('click', () => {
        filterPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        currentFilter = pill.getAttribute('data-filter');
        itemsLimit = 100; // Reset limit
        renderCatalog();
      });
    });

    // Search input event
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      itemsLimit = 100;
      renderCatalog();
    });

    // Sort select event
    sortSelect.addEventListener('change', (e) => {
      currentSort = e.target.value;
      itemsLimit = 100;
      renderCatalog();
    });

    // Load More click event
    loadMoreBtn.addEventListener('click', () => {
      itemsLimit += 10;
      renderCatalog();
    });

    // Global Header Search Listener integration
    document.addEventListener('catalogSearch', (e) => {
      searchQuery = e.detail;
      searchInput.value = searchQuery;
      currentFilter = 'all';
      filterPills.forEach(p => p.classList.remove('active'));
      document.querySelector('[data-filter="all"]').classList.add('active');
      itemsLimit = 10;
      renderCatalog();
      
      // Scroll smoothly to shop section
      const section = document.getElementById('shop-all-section');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    });

    // Check URL parameters for initial filter
    const urlParams = new URLSearchParams(window.location.search);
    const categoryParam = urlParams.get('category');
    if (categoryParam) {
      const matchPill = document.querySelector(`.filter-pill[data-filter="${categoryParam}"]`);
      if (matchPill) {
        filterPills.forEach(p => p.classList.remove('active'));
        matchPill.classList.add('active');
        currentFilter = categoryParam;
      }
    }

    // Intercept category navigation links on shop page to avoid full reload
    document.querySelectorAll('a[href*="category="]').forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        const match = href.match(/category=([^&]+)/);
        if (match) {
          const category = match[1];
          const matchPill = document.querySelector(`.filter-pill[data-filter="${category}"]`);
          if (matchPill) {
            e.preventDefault();
            const newUrl = `${window.location.pathname}?category=${category}`;
            window.history.pushState({ path: newUrl }, '', newUrl);
            
            filterPills.forEach(p => p.classList.remove('active'));
            matchPill.classList.add('active');
            currentFilter = category;
            itemsLimit = 100;
            renderCatalog();
            
            // Close mobile menu drawer if active
            const drawer = document.getElementById('mobile-menu-drawer');
            const overlay = document.getElementById('drawer-overlay');
            if (drawer) drawer.classList.remove('active');
            if (overlay) overlay.classList.remove('active');
            document.body.classList.remove('scroll-locked');
          }
        }
      });
    });

    window.addEventListener('popstate', () => {
      const urlParams = new URLSearchParams(window.location.search);
      const categoryParam = urlParams.get('category') || 'all';
      const matchPill = document.querySelector(`.filter-pill[data-filter="${categoryParam}"]`);
      if (matchPill) {
        filterPills.forEach(p => p.classList.remove('active'));
        matchPill.classList.add('active');
        currentFilter = categoryParam;
        itemsLimit = 100;
        renderCatalog();
      }
    });

    // Initial render
    renderCatalog();
  };

  // ==========================================
  // 9. MEMBER LOGIN & WEEKLY LOOKBOOK PORTAL
  // ==========================================
  const initAccountPortal = () => {
    const container = document.getElementById('account-drawer-content');
    const drawerTitle = document.getElementById('account-drawer-title');
    if (!container) return;

    const renderPortal = () => {
      if (!loggedInUser) {
        // Render Login Form
        if (drawerTitle) drawerTitle.textContent = "My Account";
        container.innerHTML = `
          <div class="account-form" id="login-form-wrapper" style="display: flex; flex-direction: column; gap: 16px;">
            <p class="member-dashboard-info-text">Sign in to view exclusive member-only Outfits of the Week, promo codes, and customize lookbooks.</p>
            <div class="form-group">
              <label for="login-email">Email Address</label>
              <input type="email" id="login-email" class="form-input" placeholder="member@234district.com or staff@234district.com" required style="width: 100%; padding: 10px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1); margin-top: 4px; box-sizing: border-box; background: rgba(255,255,255,0.05); color: inherit;">
            </div>
            <div class="form-group">
              <label for="login-pass">Password</label>
              <input type="password" id="login-pass" class="form-input" placeholder="••••••••" required style="width: 100%; padding: 10px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1); margin-top: 4px; box-sizing: border-box; background: rgba(255,255,255,0.05); color: inherit;">
            </div>
            <button class="btn-black" id="submit-login-btn" style="width: 100%; padding: 12px; border-radius: 30px; font-weight: 800; text-transform: uppercase;">Sign In</button>
            <p class="member-dashboard-info-text" style="text-align: center; font-size: 0.65rem; opacity: 0.8; margin-top: 10px; line-height: 1.5;">
              <strong>Staff Login</strong>: staff@234district.com<br>
              <strong>Member Login</strong>: member@234district.com<br>
              <em>Password is any value</em>
            </p>
          </div>
        `;

        // Bind sign in button
        const loginBtn = document.getElementById('submit-login-btn');
        if (loginBtn) {
          loginBtn.addEventListener('click', () => {
            const email = document.getElementById('login-email').value.trim().toLowerCase();
            if (!email) {
              alert("Please enter your email address.");
              return;
            }
            
            if (email === 'staff@234district.com') {
              loggedInUser = { email: 'staff@234district.com', role: 'staff' };
            } else {
              loggedInUser = { email: email, role: 'customer' };
            }
            
            localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
            renderPortal();
            renderLookbookSection();
          });
        }
      } else if (loggedInUser.role === 'customer') {
        // Render Customer Dashboard
        if (drawerTitle) drawerTitle.textContent = "District Dashboard";
        container.innerHTML = `
          <div class="member-dashboard">
            <span class="member-role-badge">District Member</span>
            <h3 class="member-welcome-title" style="margin-top: 5px;">Welcome, Member!</h3>
            <p class="member-dashboard-info-text" style="color: var(--color-gray);">Exclusive early access portal to weekly lookbooks & promos.</p>
            
            <div class="exclusive-code-card">
              <div class="exclusive-code-title">Your Member Code (15% OFF)</div>
              <div class="exclusive-code-val">DISTRICT15</div>
            </div>

            <h4 class="dashboard-section-title">Outfit of the Week Catalog</h4>
            <div class="weekly-outfits-preview-list">
              ${activeLookbookIds.map(id => {
                const prod = PRODUCTS.find(p => p.id === id);
                if (!prod) return '';
                return `
                  <div class="weekly-outfit-preview-item" style="cursor: pointer;" onclick="document.getElementById('close-account').click(); window.location.href='#weekly-lookbook';">
                    <img src="${prod.image}" class="weekly-outfit-preview-img">
                    <span class="weekly-outfit-preview-name">${prod.name}</span>
                    <span class="weekly-outfit-preview-price">₦${prod.price.toLocaleString()}</span>
                  </div>
                `;
              }).join('')}
            </div>
            
            <button class="btn-black-outline" id="signout-btn" style="width: 100%; border-radius: 30px; margin-top: 10px;">Sign Out</button>
          </div>
        `;

        // Bind sign out button
        document.getElementById('signout-btn').addEventListener('click', () => {
          loggedInUser = null;
          localStorage.removeItem('loggedInUser');
          renderPortal();
          renderLookbookSection();
        });
      } else if (loggedInUser.role === 'staff') {
        // Render Staff/Admin Control Panel
        if (drawerTitle) drawerTitle.textContent = "Staff Console";
        container.innerHTML = `
          <div class="member-dashboard">
            <span class="member-role-badge">District Administrator</span>
            <h3 class="member-welcome-title" style="margin-top: 5px;">Weekly Lookbook Editor</h3>
            <p class="member-dashboard-info-text" style="color: var(--color-gray);">Select exactly 4 products to configure as the Outfit of the Week.</p>
            
            <div class="admin-select-status" id="admin-select-count" style="font-weight: 800; font-size: 0.75rem; text-transform: uppercase; margin-bottom: 8px;">Selected: 4 / 4</div>
            <div class="admin-product-select-list" style="margin-bottom: 15px;">
              ${PRODUCTS.map(p => {
                const checked = activeLookbookIds.includes(p.id) ? 'checked' : '';
                return `
                  <label class="admin-product-select-item" style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px; cursor: pointer;">
                    <input type="checkbox" class="admin-product-select-checkbox" data-product-id="${p.id}" ${checked}>
                    <span style="font-size: 0.7rem;">${p.name} (₦${p.price.toLocaleString()})</span>
                  </label>
                `;
              }).join('')}
            </div>
            
            <button class="btn-black" id="update-lookbook-btn" style="width: 100%; border-radius: 30px; padding: 12px;">Update Lookbook</button>
            <button class="btn-black-outline" id="signout-btn" style="width: 100%; border-radius: 30px; margin-top: 10px;">Sign Out</button>
          </div>
        `;

        const checkboxes = container.querySelectorAll('.admin-product-select-checkbox');
        const countLabel = document.getElementById('admin-select-count');

        const updateCheckboxLimits = () => {
          const checkedCount = container.querySelectorAll('.admin-product-select-checkbox:checked').length;
          if (countLabel) countLabel.textContent = `Selected: ${checkedCount} / 4`;
          
          if (checkedCount >= 4) {
            checkboxes.forEach(cb => {
              if (!cb.checked) cb.disabled = true;
            });
          } else {
            checkboxes.forEach(cb => cb.disabled = false);
          }
        };

        // Bind checkbox listeners
        checkboxes.forEach(cb => {
          cb.addEventListener('change', updateCheckboxLimits);
        });

        // Initial run to configure checkboxes
        updateCheckboxLimits();

        // Bind update lookbook button
        document.getElementById('update-lookbook-btn').addEventListener('click', () => {
          const selectedCbs = container.querySelectorAll('.admin-product-select-checkbox:checked');
          if (selectedCbs.length !== 4) {
            alert("Error: You must select exactly 4 products to construct the lookbook.");
            return;
          }
          
          activeLookbookIds = Array.from(selectedCbs).map(cb => cb.getAttribute('data-product-id'));
          localStorage.setItem('activeLookbookIds', JSON.stringify(activeLookbookIds));
          alert("Lookbook successfully updated! The weekly outfit has been changed in real-time.");
          renderPortal();
          renderLookbookSection();
        });

        // Bind sign out button
        document.getElementById('signout-btn').addEventListener('click', () => {
          loggedInUser = null;
          localStorage.removeItem('loggedInUser');
          renderPortal();
          renderLookbookSection();
        });
      }
    };

    renderPortal();
  };

  // Global slideGrid control function for horizontal product slides
  window.slideGrid = (gridId, direction) => {
    const grid = document.getElementById(gridId);
    if (!grid) return;
    const card = grid.querySelector('li');
    if (!card) return;
    const scrollAmount = (card.offsetWidth + 24) * 2; // scroll by 2 items (width + gap)
    grid.scrollBy({
      left: direction * scrollAmount,
      behavior: 'smooth'
    });
  };

  // ==========================================
  // 11. PRODUCT DETAILS PAGE CONTROLLER
  // ==========================================
  const initProductPage = () => {
    const slideshowWrapper = document.getElementById('product-page-slideshow-wrapper');
    if (!slideshowWrapper) return;

    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    if (!productId) {
      window.location.href = '/shop';
      return;
    }

    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) {
      window.location.href = '/shop';
      return;
    }

    // Populate metadata and info fields
    document.title = `${product.name} — 234 DISTRICT`;
    document.getElementById('product-page-name').textContent = product.name;
    document.getElementById('product-page-price').textContent = formatPrice(product.price);
    document.getElementById('product-page-description').textContent = getProductDescription(product);

    // Build Slideshow Images
    slideshowWrapper.innerHTML = '';
    const images = [product.image];
    if (product.secondaryImage) images.push(product.secondaryImage);
    
    images.forEach((img, idx) => {
      const slide = document.createElement('img');
      slide.src = img;
      slide.alt = `${product.name} View ${idx + 1}`;
      slide.className = 'modal-slide-img' + (idx === 0 ? ' active' : '');
      slideshowWrapper.appendChild(slide);
    });

    // Build Slide Dots
    const dotsContainer = document.getElementById('product-page-slide-dots');
    dotsContainer.innerHTML = '';
    images.forEach((_, idx) => {
      const dot = document.createElement('span');
      dot.className = 'modal-slide-dot' + (idx === 0 ? ' active' : '');
      dot.setAttribute('data-index', idx);
      dotsContainer.appendChild(dot);
    });

    // Interactive Slideshow Functionality
    let currentSlideIdx = 0;
    const slides = slideshowWrapper.querySelectorAll('.modal-slide-img');
    const dots = dotsContainer.querySelectorAll('.modal-slide-dot');

    const showSlide = (index) => {
      slides.forEach((slide, idx) => {
        if (idx === index) {
          slide.classList.add('active');
        } else {
          slide.classList.remove('active');
        }
      });
      dots.forEach((dot, idx) => {
        if (idx === index) {
          dot.classList.add('active');
        } else {
          dot.classList.remove('active');
        }
      });
    };

    const prevBtn = document.getElementById('product-page-slide-prev');
    const nextBtn = document.getElementById('product-page-slide-next');

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        currentSlideIdx = (currentSlideIdx - 1 + slides.length) % slides.length;
        showSlide(currentSlideIdx);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        currentSlideIdx = (currentSlideIdx + 1) % slides.length;
        showSlide(currentSlideIdx);
      });
    }

    dots.forEach(dot => {
      dot.addEventListener('click', () => {
        currentSlideIdx = parseInt(dot.getAttribute('data-index'), 10);
        showSlide(currentSlideIdx);
      });
    });

    // Size Selection Handler
    let selectedSize = null;
    const sizeBtns = document.getElementById('product-page-size-group').querySelectorAll('.size-select-btn');
    const sizeError = document.getElementById('product-page-size-error');

    sizeBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        sizeBtns.forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        selectedSize = btn.getAttribute('data-size');
        sizeError.style.display = 'none';
      });
    });

    // ADD TO CART trigger
    document.getElementById('product-page-add-to-cart-btn').addEventListener('click', () => {
      if (!selectedSize) {
        sizeError.style.display = 'block';
        return;
      }
      addToCart(product, selectedSize);
    });

    // BUY IT NOW trigger
    document.getElementById('product-page-buy-now-btn').addEventListener('click', () => {
      if (!selectedSize) {
        sizeError.style.display = 'block';
        return;
      }
      addToCart(product, selectedSize);
      setTimeout(() => {
        window.location.href = '/checkout';
      }, 500);
    });

    // Size Guide Trigger inside Product page
    const sizeChartTrigger = document.getElementById('product-page-size-chart-trigger');
    if (sizeChartTrigger) {
      sizeChartTrigger.addEventListener('click', (e) => {
        e.preventDefault();
        const modal = document.getElementById('size-modal');
        if (modal) modal.classList.add('active');
      });
    }
  };

  initAccountPortal();
  initShopCatalog();
  initProductPage();
});
