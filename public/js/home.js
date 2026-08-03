/* 234 DISTRICT - Homepage Specific Functionality & Interactive Cart */

// 1. COMPREHENSIVE PRODUCT DATABASE (Referencing exact local assets downloaded from 234district.com)
const PRODUCTS = [
      {
      "id": "acc-1",
      "name": "Aevis Bullet Hair Mule Clogs",
      "price": 200000,
      "category": "accessories",
      "image": "/images/IMG_1455-300x300.jpg",
      "secondaryImage": "/images/IMG_1457-300x300.jpg",
      "badge": ""
    },
    {
      "id": "acc-2",
      "name": "Sunbind Denim Utility Pocket Mules",
      "price": 150000,
      "category": "accessories",
      "image": "/images/IMG_1447-300x300.jpg",
      "secondaryImage": "/images/IMG_1453-300x300.jpg",
      "badge": ""
    },
    {
      "id": "acc-3",
      "name": "Supreme Metal Lighter Holster Necklace",
      "price": 40000,
      "category": "accessories",
      "image": "/images/IMG_1934-300x300.jpg",
      "secondaryImage": "/images/IMG_1942-300x300.jpg",
      "badge": ""
    },
    {
      "id": "hom-4",
      "name": "Supreme ABC Alphabet Ceramic Vase",
      "price": 135000,
      "category": "home-decor",
      "image": "/images/IMG_1932-300x300.jpg",
      "secondaryImage": "/images/IMG_1931-300x300.jpg",
      "badge": ""
    },
    {
      "id": "hom-5",
      "name": "Supreme Spike Collar Ceramic Vase",
      "price": 120000,
      "category": "home-decor",
      "image": "/images/IMG_9541-300x300.jpg",
      "secondaryImage": "/images/IMG_9543-300x300.jpg",
      "badge": ""
    },
    {
      "id": "acc-6",
      "name": "STU x Denim Tears Spade Web Belt",
      "price": 180000,
      "category": "accessories",
      "image": "/images/IMG_1926-300x300.jpg",
      "secondaryImage": "/images/IMG_1927-300x300.jpg",
      "badge": ""
    },
    {
      "id": "acc-7",
      "name": "Arque Sharp Hair-On Leather Belt",
      "price": 51400,
      "category": "accessories",
      "image": "/images/IMG_1917-300x300.jpg",
      "secondaryImage": "/images/IMG_1922-300x300.jpg",
      "badge": ""
    },
    {
      "id": "acc-8",
      "name": "CS Online Graphic Statement Belt",
      "price": 55000,
      "category": "accessories",
      "image": "/images/IMG_1913-300x300.jpg",
      "secondaryImage": "/images/IMG_1915-300x300.jpg",
      "badge": ""
    },
    {
      "id": "acc-9",
      "name": "Roman Catcher Hair-On Leather Belt",
      "price": 51480,
      "category": "accessories",
      "image": "/images/IMG_1909-300x300.jpg",
      "secondaryImage": "/images/IMG_1907-300x300.jpg",
      "badge": ""
    },
    {
      "id": "acc-10",
      "name": "Remedy Crew Star Hair-On Leather Belt",
      "price": 90000,
      "category": "accessories",
      "image": "/images/IMG_1900-300x300.jpg",
      "secondaryImage": "/images/IMG_1901-300x300.jpg",
      "badge": ""
    },
    {
      "id": "acc-11",
      "name": "Alice Iron Cross Riding Gloves",
      "price": 80000,
      "category": "accessories",
      "image": "/images/IMG_1111-300x300.jpg",
      "secondaryImage": "/images/IMG_1892-300x300.jpg",
      "badge": ""
    },
    {
      "id": "acc-12",
      "name": "ERD Gothic Cross Wallet Chain &#038; Lighter Holder",
      "price": 54000,
      "category": "accessories",
      "image": "/images/IMG_1884-300x300.jpg",
      "secondaryImage": "/images/IMG_1885-300x300.jpg",
      "badge": ""
    },
    {
      "id": "top-13",
      "name": "SMILEANDSAD Distressed Cross Graphic Sleeveless Tee",
      "price": 91180,
      "category": "tops",
      "image": "/images/IMG_1876-300x300.jpg",
      "secondaryImage": "/images/IMG_1881-300x300.jpg",
      "badge": ""
    },
    {
      "id": "col-14",
      "name": "VCATECX Vintage Cowboy Graphic Washed T-Shirt",
      "price": 90000,
      "category": "collections",
      "image": "/images/IMG_1872-300x300.jpg",
      "secondaryImage": "/images/IMG_1875-300x300.jpg",
      "badge": "New"
    },
    {
      "id": "col-15",
      "name": "SVEER Woodland Camo Flip Flops",
      "price": 40500,
      "category": "collections",
      "image": "/images/IMG_1864-300x300.jpg",
      "secondaryImage": "/images/IMG_1866-300x300.jpg",
      "badge": "New"
    },
    {
      "id": "bot-16",
      "name": "WANNA LAB Washed Faux Leather Bermuda Shorts",
      "price": 135000,
      "category": "bottoms",
      "image": "/images/IMG_1857-300x300.jpg",
      "secondaryImage": "/images/IMG_1860-300x300.jpg",
      "badge": ""
    },
    {
      "id": "bot-17",
      "name": "WANNA LAB Vintage Wash Wide-Leg Jeans",
      "price": 133000,
      "category": "bottoms",
      "image": "/images/IMG_1852-300x300.jpg",
      "secondaryImage": "/images/IMG_1854-300x300.jpg",
      "badge": ""
    },
    {
      "id": "bot-18",
      "name": "YATREW Double Waist Raw Denim Wide-Leg Jeans",
      "price": 115000,
      "category": "bottoms",
      "image": "/images/IMG_1850-300x300.jpg",
      "secondaryImage": "/images/IMG_1850-300x300.jpg",
      "badge": ""
    },
    {
      "id": "acc-19",
      "name": "Black8Mob Spider Web Plush Slippers",
      "price": 85000,
      "category": "accessories",
      "image": "/images/IMG_1841-300x300.jpg",
      "secondaryImage": "/images/IMG_1840-300x300.jpg",
      "badge": ""
    },
    {
      "id": "bot-20",
      "name": "Project G/R Distressed Moto Denim",
      "price": 119000,
      "category": "bottoms",
      "image": "/images/IMG_1065-300x300.jpg",
      "secondaryImage": "/images/IMG_1064-300x300.jpg",
      "badge": ""
    },
    {
      "id": "bot-21",
      "name": "Athiri Convertible Camo Utility Cargo",
      "price": 139700,
      "category": "bottoms",
      "image": "/images/IMG_1831-300x300.jpg",
      "secondaryImage": "/images/IMG_1835-300x300.jpg",
      "badge": ""
    },
    {
      "id": "bot-22",
      "name": "Athiri Tactical Camo Utility Denim",
      "price": 139700,
      "category": "bottoms",
      "image": "/images/IMG_1825-300x300.jpg",
      "secondaryImage": "/images/IMG_1829-300x300.jpg",
      "badge": ""
    },
    {
      "id": "top-23",
      "name": "Exitmode Maverick Vintage Football Jersey – Red/White",
      "price": 117000,
      "category": "tops",
      "image": "/images/IMG_1821-300x300.jpg",
      "secondaryImage": "/images/IMG_1823-300x300.jpg",
      "badge": ""
    },
    {
      "id": "bot-24",
      "name": "EXITMODE Contrast Panel Carpenter Cargo Pants – Khaki",
      "price": 133500,
      "category": "bottoms",
      "image": "/images/IMG_0958-300x300.jpg",
      "secondaryImage": "/images/IMG_0961-300x300.jpg",
      "badge": ""
    },
    {
      "id": "bot-25",
      "name": "Multi-Pocket Washed Cargo Pants – Black",
      "price": 130000,
      "category": "bottoms",
      "image": "/images/IMG_1048-300x300.jpg",
      "secondaryImage": "/images/IMG_1044-300x300.jpg",
      "badge": ""
    },
    {
      "id": "top-26",
      "name": "Patchwork Badge Raw Hem Shirt – Black",
      "price": 61525,
      "category": "tops",
      "image": "/images/IMG_1808-300x300.jpg",
      "secondaryImage": "/images/IMG_1815-300x300.jpg",
      "badge": ""
    },
    {
      "id": "top-27",
      "name": "Never Deviate Vintage Football Jersey",
      "price": 60000,
      "category": "tops",
      "image": "/images/IMG_1035-300x300.jpg",
      "secondaryImage": "/images/IMG_1034-300x300.jpg",
      "badge": ""
    },
    {
      "id": "col-28",
      "name": "California Raw Edge Vintage T-Shirt – Ivory",
      "price": 65000,
      "category": "collections",
      "image": "/images/IMG_1803-300x300.jpg",
      "secondaryImage": "/images/IMG_1807-300x300.jpg",
      "badge": "New"
    },
    {
      "id": "col-29",
      "name": "Remedy Lips Graphic Oversized T-Shirt – Black",
      "price": 75000,
      "category": "collections",
      "image": "/images/IMG_1794-300x300.jpg",
      "secondaryImage": "/images/IMG_1795-300x300.jpg",
      "badge": "New"
    },
    {
      "id": "col-30",
      "name": "Remedy Crew Hooded Plaid Flannel Shirt – Navy",
      "price": 96500,
      "category": "collections",
      "image": "/images/IMG_1790-300x300.jpg",
      "secondaryImage": "/images/IMG_1792-300x300.jpg",
      "badge": "New"
    },
    {
      "id": "bot-31",
      "name": "Remedy Crew Kiss Mark Distressed Utility Shorts – Olive Wash",
      "price": 123500,
      "category": "bottoms",
      "image": "/images/IMG_1782-1-300x300.jpg",
      "secondaryImage": "/images/IMG_1783-300x300.jpg",
      "badge": ""
    },
    {
      "id": "bot-32",
      "name": "Remedy Crew Kiss Mark Distressed Carpenter Jeans",
      "price": 131000,
      "category": "bottoms",
      "image": "/images/IMG_0988-300x300.jpg",
      "secondaryImage": "/images/IMG_0989-300x300.jpg",
      "badge": ""
    },
    {
      "id": "top-33",
      "name": "Compost The Rich Limited Edition Spray Graphic T-Shirt",
      "price": 74145,
      "category": "tops",
      "image": "/images/IMG_1725-300x300.jpg",
      "secondaryImage": "/images/IMG_1725-300x300.jpg",
      "badge": ""
    },
    {
      "id": "top-34",
      "name": "Compost The Rich Rockstar Spray Graphic T-Shirt",
      "price": 82500,
      "category": "tops",
      "image": "/images/IMG_1723-300x300.jpg",
      "secondaryImage": "/images/IMG_1724-300x300.jpg",
      "badge": ""
    },
    {
      "id": "top-35",
      "name": "Compost The Rich Cross Graphic T-Shirt",
      "price": 82500,
      "category": "tops",
      "image": "/images/IMG_1722-300x300.jpg",
      "secondaryImage": "/images/IMG_1721-1-300x300.jpg",
      "badge": ""
    },
    {
      "id": "top-36",
      "name": "Boneless 92 Performance Football Jersey T-Shirt",
      "price": 102000,
      "category": "tops",
      "image": "/images/IMG_1715-300x300.jpg",
      "secondaryImage": "/images/IMG_1716-300x300.jpg",
      "badge": ""
    },
    {
      "id": "bot-37",
      "name": "Boneless Light Wash Distressed Wide Leg Jeans",
      "price": 112500,
      "category": "bottoms",
      "image": "/images/IMG_1709-300x300.jpg",
      "secondaryImage": "/images/IMG_1713-300x300.jpg",
      "badge": ""
    },
    {
      "id": "acc-38",
      "name": "Censmade Camouflage Crescent Shoulder Bag",
      "price": 110000,
      "category": "accessories",
      "image": "/images/IMG_0953-300x300.jpg",
      "secondaryImage": "/images/IMG_0956-300x300.jpg",
      "badge": ""
    },
    {
      "id": "bot-39",
      "name": "RYE CHASIN 500KG Fatman Jeans",
      "price": 240000,
      "category": "bottoms",
      "image": "/images/IMG_0948-300x300.jpg",
      "secondaryImage": "/images/IMG_0952-300x300.jpg",
      "badge": ""
    },
    {
      "id": "bot-40",
      "name": "RYE CHASIN Duct-Taped Washed Denim Jeans",
      "price": 280000,
      "category": "bottoms",
      "image": "/images/IMG_2325-300x300.jpeg",
      "secondaryImage": "/images/IMG_2329-300x300.jpeg",
      "badge": ""
    },
    {
      "id": "col-41",
      "name": "Layered Plaid Short Sleeve Overshirt",
      "price": 75000,
      "category": "collections",
      "image": "/images/IMG_1694-300x300.jpg",
      "secondaryImage": "/images/IMG_1700-300x300.jpg",
      "badge": "New"
    },
    {
      "id": "top-42",
      "name": "Exitmode Waffle Knit Patch Polo Shirt",
      "price": 121500,
      "category": "tops",
      "image": "/images/IMG_1692-300x300.jpg",
      "secondaryImage": "/images/IMG_1693-300x300.jpg",
      "badge": ""
    },
    {
      "id": "col-43",
      "name": "Antidote World Tour Varsity Jacket",
      "price": 151950,
      "category": "collections",
      "image": "/images/IMG_1683-300x300.jpg",
      "secondaryImage": "/images/IMG_1681-300x300.jpg",
      "badge": "New"
    },
    {
      "id": "bot-44",
      "name": "Black8Mob Vintage Wash Stacked Baggy Denim Jeans",
      "price": 130000,
      "category": "bottoms",
      "image": "/images/IMG_1677-300x300.jpg",
      "secondaryImage": "/images/IMG_1679-300x300.jpg",
      "badge": ""
    },
    {
      "id": "top-45",
      "name": "Exitmode Reversible Plaid Varsity Shirt Jacket",
      "price": 139000,
      "category": "tops",
      "image": "/images/IMG_1667-300x300.jpg",
      "secondaryImage": "/images/IMG_1671-300x300.jpg",
      "badge": ""
    },
    {
      "id": "top-46",
      "name": "DSWN Cross Graphic Plaid Overshirt",
      "price": 125000,
      "category": "tops",
      "image": "/images/IMG_1659-300x300.jpg",
      "secondaryImage": "/images/IMG_1660-300x300.jpg",
      "badge": ""
    },
    {
      "id": "top-47",
      "name": "Route 66 Layered Camo Sleeve Tee",
      "price": 100000,
      "category": "tops",
      "image": "/images/IMG_1652-300x300.jpg",
      "secondaryImage": "/images/IMG_1658-300x300.jpg",
      "badge": ""
    },
    {
      "id": "col-48",
      "name": "4th3ex Performance Boxer Briefs",
      "price": 161450,
      "category": "collections",
      "image": "/images/IMG_1644-300x300.jpg",
      "secondaryImage": "/images/IMG_1643-300x300.jpg",
      "badge": "New"
    },
    {
      "id": "bot-49",
      "name": "Fourth3ex Layered Panel Wide-Leg Sweatpants",
      "price": 161450,
      "category": "bottoms",
      "image": "/images/IMG_1632-300x300.jpg",
      "secondaryImage": "/images/IMG_1634-300x300.jpg",
      "badge": ""
    },
    {
      "id": "bot-50",
      "name": "Chaos Script Utility Shorts",
      "price": 134400,
      "category": "bottoms",
      "image": "/images/IMG_1627-300x300.jpg",
      "secondaryImage": "/images/IMG_1631-300x300.jpg",
      "badge": ""
    },
    {
      "id": "bot-51",
      "name": "Hell System Paint Drip Cargo Pants",
      "price": 130000,
      "category": "bottoms",
      "image": "/images/IMG_1625-300x300.jpg",
      "secondaryImage": "/images/IMG_1623-300x300.jpg",
      "badge": ""
    },
    {
      "id": "bot-52",
      "name": "Rebel Stroke Wide Leg Denim Jeans",
      "price": 98000,
      "category": "bottoms",
      "image": "/images/IMG_1616-300x300.jpg",
      "secondaryImage": "/images/IMG_1621-300x300.jpg",
      "badge": ""
    },
    {
      "id": "bot-53",
      "name": "Distressed Pinstripe Carpenter Jeans",
      "price": 130000,
      "category": "bottoms",
      "image": "/images/IMG_1613-300x300.jpg",
      "secondaryImage": "/images/IMG_0360-300x300.jpg",
      "badge": ""
    },
    {
      "id": "acc-54",
      "name": "Groupmarek Ball Chain Wallet Chain",
      "price": 78000,
      "category": "accessories",
      "image": "/images/IMG_1604-300x300.jpg",
      "secondaryImage": "/images/IMG_1606-300x300.jpg",
      "badge": ""
    },
    {
      "id": "top-55",
      "name": "Group Marek Rich Boys Club Washed Polo",
      "price": 120000,
      "category": "tops",
      "image": "/images/IMG_1602-300x300.jpg",
      "secondaryImage": "/images/IMG_1602-300x300.jpg",
      "badge": ""
    },
    {
      "id": "col-56",
      "name": "Loopson Ice Wash Wide Leg Denim",
      "price": 87000,
      "category": "collections",
      "image": "/images/IMG_1594-300x300.jpg",
      "secondaryImage": "/images/IMG_1591-300x300.jpg",
      "badge": "New"
    },
    {
      "id": "top-57",
      "name": "Loopsoon Classic Archive Rugby Polo",
      "price": 105000,
      "category": "tops",
      "image": "/images/IMG_1586-300x300.jpg",
      "secondaryImage": "/images/IMG_1587-300x300.jpg",
      "badge": ""
    },
    {
      "id": "top-58",
      "name": "Loopson Truth 01 Oversized Long Sleeve Jersey",
      "price": 100000,
      "category": "tops",
      "image": "/images/IMG_1581-300x300.jpg",
      "secondaryImage": "/images/IMG_1580-300x300.jpg",
      "badge": ""
    },
    {
      "id": "bot-59",
      "name": "Loopsoon Oversized Utility Cargo Pants",
      "price": 100000,
      "category": "bottoms",
      "image": "/images/IMG_2336-300x300.jpeg",
      "secondaryImage": "/images/IMG_2338-300x300.jpeg",
      "badge": ""
    },
    {
      "id": "top-60",
      "name": "Loopsoon Striped Utility Overshirt",
      "price": 86000,
      "category": "tops",
      "image": "/images/IMG_1574-300x300.jpg",
      "secondaryImage": "/images/IMG_1573-300x300.jpg",
      "badge": ""
    },
    {
      "id": "top-61",
      "name": "Loopsoon Stealth Archive Oversized Hoodie",
      "price": 93500,
      "category": "tops",
      "image": "/images/IMG_1567-300x300.jpg",
      "secondaryImage": "/images/IMG_1568-300x300.jpg",
      "badge": ""
    },
    {
      "id": "top-62",
      "name": "CSONLINE NATIONS-05-MESH-001",
      "price": 110000,
      "category": "tops",
      "image": "/images/IMG_1561-300x300.webp",
      "secondaryImage": "/images/IMG_1564-300x300.webp",
      "badge": ""
    },
    {
      "id": "bot-63",
      "name": "Until We Rich Faith Baggy Denim Jeans",
      "price": 122000,
      "category": "bottoms",
      "image": "/images/IMG_1546-300x300.jpg",
      "secondaryImage": "/images/IMG_1547-300x300.jpg",
      "badge": ""
    },
    {
      "id": "bot-64",
      "name": "Until We Rich Spider Web Embroidered Baggy Denim Shorts",
      "price": 125000,
      "category": "bottoms",
      "image": "/images/IMG_1538-300x300.jpg",
      "secondaryImage": "/images/IMG_1539-300x300.jpg",
      "badge": ""
    },
    {
      "id": "top-65",
      "name": "Until We Rich Star Logo Oversized T-Shirt",
      "price": 98000,
      "category": "tops",
      "image": "/images/IMG_1531-300x300.jpg",
      "secondaryImage": "/images/IMG_1534-300x300.jpg",
      "badge": ""
    },
    {
      "id": "top-66",
      "name": "Until We Rich Worldwide Striped Rugby Polo",
      "price": 110000,
      "category": "tops",
      "image": "/images/IMG_1525-300x300.jpg",
      "secondaryImage": "/images/IMG_1526-300x300.jpg",
      "badge": ""
    },
    {
      "id": "col-67",
      "name": "Sprayground x RUNto Plaid Graphic Flannel Shirt",
      "price": 125000,
      "category": "collections",
      "image": "/images/IMG_1520-300x300.jpg",
      "secondaryImage": "/images/IMG_1521-300x300.jpg",
      "badge": "New"
    },
    {
      "id": "col-68",
      "name": "Boneless Camo Graffiti Oversized Tee",
      "price": 75000,
      "category": "collections",
      "image": "/images/IMG_1516-300x300.jpg",
      "secondaryImage": "/images/IMG_1519-300x300.jpg",
      "badge": "New"
    },
    {
      "id": "top-69",
      "name": "PeopleSense Vintage Mesh Football Long Sleeve",
      "price": 120000,
      "category": "tops",
      "image": "/images/IMG_1509-300x300.jpg",
      "secondaryImage": "/images/IMG_1512-300x300.jpg",
      "badge": ""
    },
    {
      "id": "bot-70",
      "name": "Yadrew Waxed Straight-Leg Denim Jeans",
      "price": 135000,
      "category": "bottoms",
      "image": "/images/IMG_1497-300x300.jpg",
      "secondaryImage": "/images/IMG_1494-300x300.jpg",
      "badge": ""
    },
    {
      "id": "top-71",
      "name": "Yadrew Lion Totem Graphic Rhinestone Tee",
      "price": 95000,
      "category": "tops",
      "image": "/images/IMG_1489-300x300.jpg",
      "secondaryImage": "/images/IMG_1491-300x300.jpg",
      "badge": ""
    },
    {
      "id": "top-72",
      "name": "Yadrew Rhinestone Plaid Camp Shirt",
      "price": 110000,
      "category": "tops",
      "image": "/images/IMG_1482-300x300.jpg",
      "secondaryImage": "/images/IMG_1483-300x300.jpg",
      "badge": ""
    },
    {
      "id": "top-73",
      "name": "Yadrew Pegasus Polo Jersey",
      "price": 110000,
      "category": "tops",
      "image": "/images/IMG_2251-300x300.webp",
      "secondaryImage": "/images/IMG_1472-300x300.jpg",
      "badge": ""
    },
    {
      "id": "col-74",
      "name": "Eliot Emil Platform Tactical Lug Boots",
      "price": 550000,
      "category": "collections",
      "image": "/images/IMG_1463-300x300.jpg",
      "secondaryImage": "/images/IMG_1464-300x300.jpg",
      "badge": "New"
    },
    {
      "id": "col-75",
      "name": "Terraincognita Croc-Embossed Square Toe Slides",
      "price": 130000,
      "category": "collections",
      "image": "/images/IMG_1219-300x300.jpg",
      "secondaryImage": "/images/IMG_1223-300x300.jpg",
      "badge": "New"
    },
    {
      "id": "col-76",
      "name": "Aevis Bullet Hair Mule Clogs",
      "price": 200000,
      "category": "collections",
      "image": "/images/IMG_1455-300x300.jpg",
      "secondaryImage": "/images/IMG_1460-300x300.jpg",
      "badge": "New"
    },
    {
      "id": "col-77",
      "name": "Sunbind Denim Utility Pocket Mules",
      "price": 150000,
      "category": "collections",
      "image": "/images/IMG_1447-300x300.jpg",
      "secondaryImage": "/images/IMG_1447-300x300.jpg",
      "badge": "New"
    },
    {
      "id": "acc-78",
      "name": "CSOnline Union Graphic Knit Beanie",
      "price": 90000,
      "category": "accessories",
      "image": "/images/IMG_1441-300x300.jpg",
      "secondaryImage": "/images/IMG_1445-300x300.jpg",
      "badge": ""
    },
    {
      "id": "acc-79",
      "name": "LCE Striped Patch Balaclava Beanie",
      "price": 115000,
      "category": "accessories",
      "image": "/images/IMG_1436-300x300.jpg",
      "secondaryImage": "/images/IMG_1437-300x300.jpg",
      "badge": ""
    },
    {
      "id": "acc-80",
      "name": "Esoteric Thing Chase Graphic Cap",
      "price": 160000,
      "category": "accessories",
      "image": "/images/IMG_1434-300x300.jpg",
      "secondaryImage": "/images/IMG_1433-300x300.jpg",
      "badge": ""
    },
    {
      "id": "acc-81",
      "name": "UNIT Esoteric Patch Snapback Cap",
      "price": 160000,
      "category": "accessories",
      "image": "/images/IMG_1428-300x300.jpg",
      "secondaryImage": "/images/IMG_1422-300x300.jpg",
      "badge": ""
    },
    {
      "id": "acc-82",
      "name": "KO-Workers Camo Graphic Trucker Cap",
      "price": 128500,
      "category": "accessories",
      "image": "/images/IMG_2346-300x300.jpeg",
      "secondaryImage": "/images/IMG_2344-300x300.jpeg",
      "badge": ""
    },
    {
      "id": "acc-83",
      "name": "Working Hero Kountry Embroidered Trucker Cap",
      "price": 128500,
      "category": "accessories",
      "image": "/images/IMG_1203-300x300.jpg",
      "secondaryImage": "/images/IMG_1205-300x300.jpg",
      "badge": ""
    },
    {
      "id": "acc-84",
      "name": "Unknownworld Straggler Distressed Cap",
      "price": 110000,
      "category": "accessories",
      "image": "/images/IMG_1188-1-300x300.jpg",
      "secondaryImage": "/images/IMG_1186-300x300.jpg",
      "badge": ""
    },
    {
      "id": "acc-85",
      "name": "Warning Choking Hazard Distressed Baseball Cap",
      "price": 95000,
      "category": "accessories",
      "image": "/images/IMG_1376-300x300.jpg",
      "secondaryImage": "/images/IMG_1377-300x300.jpg",
      "badge": ""
    },
    {
      "id": "acc-86",
      "name": "Vetsworld Pioneer Graphic Trucker Cap",
      "price": 100000,
      "category": "accessories",
      "image": "/images/IMG_1373-300x300.jpg",
      "secondaryImage": "/images/IMG_1371-300x300.jpg",
      "badge": ""
    },
    {
      "id": "acc-87",
      "name": "Haute Couture Metal Detail Distressed Cap",
      "price": 85000,
      "category": "accessories",
      "image": "/images/IMG_2368-300x300.jpeg",
      "secondaryImage": "/images/IMG_2361-300x300.jpeg",
      "badge": ""
    },
    {
      "id": "top-88",
      "name": "YardCrew Textured Waffle Henley Long Sleeve",
      "price": 87500,
      "category": "tops",
      "image": "/images/IMG_1196-300x300.jpg",
      "secondaryImage": "/images/IMG_1192-300x300.jpg",
      "badge": ""
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
