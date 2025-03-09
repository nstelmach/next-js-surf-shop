import db from "db"
import { Category, Size } from "@prisma/client"

const PRODUCTS = [
  {
    name: "Wave Tiger Tee - Pink Kush",
    description:
      "Wave Tiger Tee is a t-shirt with real character. In a combination of strong graphics in a modern and completely new shade of Indigo, additionally reinforced with a Vintage White background, with a fresh knit color - Pink Kush. The whole is complemented by an expressive, made in the highest technology, embroidery detail on the chest. The model is made of high-quality organic cotton with a higher grammage - 230G. Added stitching, guaranteeing durability of the seams; in a darker color threads, which strengthen the visual effect of the shirt. Neckline finished with a cotton rib, ensuring a better fit. On the shoulders, a contrasting chain stitch and an internal trim, stabilizing the form and shape of the shoulders. We also added a hanger, which is not only decorative, but also extremely practical. A natural label with the brand logo sewn into the side seam. Unisex model.",
    prices: { create: [{ price: 65 }] },
    sizes: [Size.XS, Size.S, Size.M, Size.L, Size.XL],
    images: {
      create: [
        {
          src: "/products/tees/wave-tiger-tee-pink-kush/wave-tiger-tee-pink-kush-1.webp",
        },
        {
          src: "/products/tees/wave-tiger-tee-pink-kush/wave-tiger-tee-pink-kush-2.webp",
        },
        {
          src: "/products/tees/wave-tiger-tee-pink-kush/wave-tiger-tee-pink-kush-3.webp",
        },
      ],
    },
    bestseller: true,
    category: Category.tees,
  },
  {
    name: "Aqua Box Tee - Vintage White",
    description:
      "T-shirt with character - boxy cut, extended sleeve line and slightly cropped cut. Made of high quality organic cotton with a weight of 180g, with a delicate washed effect. Large, monochromatic print on the chest, small graphics on the neck. A natural label with a wave detail sewn into the side seam. Additional stitching, stabilizing seams. Chain stitch reinforcement on the neck and shoulders. Looks great with jeans, joggers, shorts or a skirt - a truly universal product!",
    prices: { create: [{ price: 55 }] },
    sizes: [Size.XS, Size.S, Size.M, Size.L, Size.XL],
    images: {
      create: [
        {
          src: "/products/tees/aqua-box-tee-vintage-white/aqua-box-tee-vintage-white-1.jpg",
        },
        {
          src: "/products/tees/aqua-box-tee-vintage-white/aqua-box-tee-vintage-white-2.webp",
        },
        {
          src: "/products/tees/aqua-box-tee-vintage-white/aqua-box-tee-vintage-white-3.webp",
        },
      ],
    },
    bestseller: true,
    category: Category.tees,
  },
  {
    name: "Sunburn Tee - Super Natural",
    description:
      "Sunburn Tee is a real checkmate for your summer wardrobe. A perfect combination of comfortable, loose form and light graphics. In subtle colors in the shade of Copper, on the foundation of the extremely universal color Super Natural and combined with a delicate print on the front. Made of high-quality organic cotton with a higher grammage - 230G. Added stitching, guaranteeing durability of the seams; in a darker color threads, which enhance the visual effect of the T-shirt. Neckline finished with a cotton rib, ensuring a better fit. On the shoulders, a contrasting chain stitch and an internal trim, stabilizing the form and shape of the shoulders. We also added a hanger, which is not only decorative, but also extremely practical. A natural label with the brand logo sewn into the side seam. Unisex model.",
    prices: { create: [{ price: 65 }] },
    sizes: [Size.XS, Size.S, Size.M, Size.L, Size.XL],
    images: {
      create: [
        {
          src: "/products/tees/sunburn-tee-super-natural/sunburn-tee-super-natural-1.jpg",
        },
        {
          src: "/products/tees/sunburn-tee-super-natural/sunburn-tee-super-natural-2.webp",
        },
        {
          src: "/products/tees/sunburn-tee-super-natural/sunburn-tee-super-natural-3.webp",
        },
      ],
    },
    bestseller: true,
    category: Category.tees,
  },
  {
    name: "No Rules Tee - Paper White",
    description:
      "Unisex 'No Rules' T-shirt in Paper White, characterized by a loose, boxy cut, extended sleeve line and wide neck band. On the back and chest there is a water print with a distinctive graphic and a spreading brand logo on the back. A contrasting chain stitch is visible on the shoulder. The T-shirt has been subjected to a softening process. A Surf logo insert is placed on the side seam. Product made in Poland.",
    prices: { create: [{ price: 65 }] },
    sizes: [Size.XS, Size.S, Size.M, Size.L, Size.XL],
    images: {
      create: [
        {
          src: "/products/tees/no-rules-tee-paper-white/no-rules-tee-paper-white-1.jpg",
        },
        {
          src: "/products/tees/no-rules-tee-paper-white/no-rules-tee-paper-white-2.webp",
        },
        {
          src: "/products/tees/no-rules-tee-paper-white/no-rules-tee-paper-white-3.webp",
        },
      ],
    },
    bestseller: false,
    category: Category.tees,
  },
  {
    name: "Own Business Tee - Super Natural",
    description:
      "Unisex T-shirt, made of 100% organic cotton with a weight of 230G, with an additional premium finish - providing extra softness and lightness of the knit. The Super Natural color perfectly matches the own business graphics. The neckline is finished with a high-quality elastic band, allowing for a better fit. Added stitching, guaranteeing durability of the seams, which enhance the visual effect of the T-shirt. Chain stitch on the shoulders and internal trim, stabilizing the form and shape of the shoulders. We also added a hanger, which is not only decorative, but also extremely practical. A natural label with the brand logo is sewn into the side seam. A large, visible print on the back, perfectly corresponding with the graphics on the front of the T-shirt. The water technique used blends the print into the structure of the knit, ensuring the best quality and durability.",
    prices: { create: [{ price: 85 }] },
    sizes: [Size.XS, Size.S, Size.M, Size.L, Size.XL],
    images: {
      create: [
        {
          src: "/products/tees/own-business-tee-super-natural/own-business-tee-super-natural-1.webp",
        },
        {
          src: "/products/tees/own-business-tee-super-natural/own-business-tee-super-natural-2.webp",
        },
        {
          src: "/products/tees/own-business-tee-super-natural/own-business-tee-super-natural-3.webp",
        },
      ],
    },
    bestseller: true,
    category: Category.tees,
  },
  {
    name: "Power Flower Tee - Dirty White",
    description:
      "Unisex 'Power Flower' T-shirt in Dirty White, characterized by a loose, boxy cut, extended sleeve line and wide neck band. On the back and chest there is a Everything Comes Everything Goes water print closing the SRF flower. Contrasting chain stitching is visible on the shoulder. The T-shirt has undergone a softening process. It is sewn from 270g organic cotton. A Surf logo insert is placed on the side seam. Product made in Poland.",
    prices: { create: [{ price: 65 }] },
    sizes: [Size.XS, Size.S, Size.M, Size.L, Size.XL],
    images: {
      create: [
        {
          src: "/products/tees/power-flower-tee-dirty-white/power-flower-tee-dirty-white-1.jpg",
        },
        {
          src: "/products/tees/power-flower-tee-dirty-white/power-flower-tee-dirty-white-2.webp",
        },
        {
          src: "/products/tees/power-flower-tee-dirty-white/power-flower-tee-dirty-white-3.webp",
        },
      ],
    },
    bestseller: false,
    category: Category.tees,
  },
  {
    name: "Cowboy Feel Tee - Paper White",
    description:
      "Cowboy Feel Tee is a unisex T-shirt designed in collaboration between Surf Inc. and talented graphic designer Jungle Daisy. The model combines the freshness of a cobalt print with the timeless white of the jersey, creating a unique and universal design. The T-shirt is made of 100% organic cotton with an increased grammage of 270G, which ensures exceptional durability and comfort of wearing. The water print blends the graphic into the structure of the material, guaranteeing its high quality and resistance to wear.\n" +
      "\n" +
      "There is a subtle print on the front, perfectly matching the expressive graphic on the back. The whole is complemented by a flag label sewn into the side seam with a snake and moon motif, dedicated to the Snake & Moon collection. The neckline is finished with a cotton rib for a better fit, and the chain stitch on the shoulders adds visual character and stabilizes the form of the T-shirt. Inside, there is a piping that helps maintain its shape. An additional advantage is the practical and aesthetic hanger. Cowboy Feel Tee is a T-shirt created with attention to every detail, being a perfect choice for both everyday wear and more artistic styling.",
    prices: { create: [{ price: 75 }] },
    sizes: [Size.XS, Size.S, Size.M, Size.L, Size.XL],
    images: {
      create: [
        {
          src: "/products/tees/cowboy-feel-tee-paper-white/cowboy-feel-tee-paper-white-1.jpg",
        },
        {
          src: "/products/tees/cowboy-feel-tee-paper-white/cowboy-feel-tee-paper-white-2.webp",
        },
        {
          src: "/products/tees/cowboy-feel-tee-paper-white/cowboy-feel-tee-paper-white-3.webp",
        },
      ],
    },
    bestseller: true,
    category: Category.tees,
  },
  {
    name: "Power Flower Sweat - Pink Kush",
    description:
      "A modern version of sweat - in a more fashionable version, with added volume, with a lowered shoulder line. On the back there is a distinctive, large print, created in an extremely durable water technique. Additionally, a subtle graphic on the front, on the sleeve there is a wave embroidery detail, referring to the brand's logo. Made of thick organic cotton with a weight of 320G. The bottom is brushed - guaranteeing high comfort of use, warmth and the effect of a real wrapping of the body. Finished with high-quality cuffs, ensuring a better fit and appearance. Additional stitching used, stabilizing the seams. pleasant for the body, with a weight of 320G - ensuring durability and reliability in all conditions. Strong graphics on the back, made in an extremely durable water technique, on the front a subtle, perfectly matching print. The whole is closed by an embroidery detail on the sleeve.",
    prices: { create: [{ price: 75 }] },
    sizes: [Size.XS, Size.S, Size.M, Size.L, Size.XL],
    images: {
      create: [
        {
          src: "/products/hoodies/power-flower-sweat-pink-kush/power-flower-sweat-pink-kush-1.jpg",
        },
        {
          src: "/products/hoodies/power-flower-sweat-pink-kush/power-flower-sweat-pink-kush-2.webp",
        },
        {
          src: "/products/hoodies/power-flower-sweat-pink-kush/power-flower-sweat-pink-kush-3.webp",
        },
      ],
    },
    bestseller: true,
    category: Category.hoodies,
  },
  {
    name: "Organic Wave Sweat - Vintage White",
    description:
      "The new version of our bestseller Organic Wave, created exclusively for women. In a new, modern boxy form, with a lowered shoulder line and cut detail in the sleeves. Slightly shortened, with added volume. In a warm, natural color, which has become the perfect base for a summer, pastel print. Made of organic knitwear, consisting of 90% pure cotton and 10% recycled polyester - thanks to this, it is extremely durable, pleasant to the skin and definitely more environmentally friendly. With a strong, large graphic on the back and a subtle print on the chest and sleeve. Finished with a high-quality elastic band, ensuring a better fit to the body. A natural label with the brand logo added in the side seam.",
    prices: { create: [{ price: 75 }] },
    sizes: [Size.XS, Size.S, Size.M, Size.L, Size.XL],
    images: {
      create: [
        {
          src: "/products/hoodies/organic-wave-sweat-vintage-white/organic-wave-sweat-vintage-white-1.webp",
        },
        {
          src: "/products/hoodies/organic-wave-sweat-vintage-white/organic-wave-sweat-vintage-white-2.webp",
        },
        {
          src: "/products/hoodies/organic-wave-sweat-vintage-white/organic-wave-sweat-vintage-white-3.webp",
        },
      ],
    },
    bestseller: true,
    category: Category.hoodies,
  },
  {
    name: "Feel Amazing Sweat - Vintage White",
    description:
      "Feel Amazing Sweat in Vintage White is an oversizesd sweatshirt, created in collaboration with the artist Jungle Daisy. Made of exceptionally thick, organic cotton with a weight of 500g, which provides warmth and comfort all day long, regardless of the weather.\n" +
      "\n" +
      'The sweatshirt has been carefully finished with high-quality cuffs, which ensure a perfect fit, and precise stitching guarantees durability and stability of the shape. The "Snake & Moon" flag placed in the side seam completes the whole, giving the model a unique, subtle character. Go to the rodeo with us and feel amazing!\n' +
      "\n" +
      'On the front there is a subtle cowboy print in cobalt shades, and on the back - a large graphic with the inscription "Surf Inc. Jungle Daisy...", which adds character to this model. On the sleeve there is a delicate star embroidery, which is a nice accent.',
    prices: { create: [{ price: 115 }] },
    sizes: [Size.XS, Size.S, Size.M, Size.L, Size.XL],
    images: {
      create: [
        {
          src: "/products/hoodies/feel-amazing-sweat-vintage-white/feel-amazing-sweat-vintage-white-1.jpg",
        },
        {
          src: "/products/hoodies/feel-amazing-sweat-vintage-white/feel-amazing-sweat-vintage-white-2.webp",
        },
        {
          src: "/products/hoodies/feel-amazing-sweat-vintage-white/feel-amazing-sweat-vintage-white-3.webp",
        },
      ],
    },
    bestseller: true,
    category: Category.hoodies,
  },
  {
    name: "Stamp Cats Hoodie - Acid Black",
    description:
      "The Stamp Cats Hoodie in Acid Black is a unique hoodie model, designed in collaboration with the talented artist Jungle Daisy. The oversizesd cut with dropped shoulders, high cuffs at the bottom and a comfortable two-layer hood give the sweatshirt a modern character, while providing full freedom of movement.\n" +
      "\n" +
      "The sweatshirt is made of 500g organic cotton, characterized by a soft, dense structure that ensures durability and comfort of wearing. A practical pocket on the front and stabilizing stitching make this model not only stylish but also functional.\n" +
      "\n" +
      'On the front there is a "SURF INC." print in black, red and white, which perfectly matches the large graphic on the back. The motif depicting cats in shades of red and white, complemented by the inscription "Wild Relax", adds an artistic expression to the sweatshirt. All prints were made in a durable water technique, ensuring their exceptional quality. On the sleeve, subtle "SRF x JDSY" embroidery underlines the character of the model, while the side seam is decorated with a "Snake & Moon" flag. Even cats know that rest is essential - this sweatshirt is your chill manifesto.',
    prices: { create: [{ price: 130 }] },
    sizes: [Size.XS, Size.S, Size.M, Size.L, Size.XL],
    images: {
      create: [
        {
          src: "/products/hoodies/stamp-cats-hoodie-acid-black/stamp-cats-hoodie-acid-black-1.jpg",
        },
        {
          src: "/products/hoodies/stamp-cats-hoodie-acid-black/stamp-cats-hoodie-acid-black-2.webp",
        },
        {
          src: "/products/hoodies/stamp-cats-hoodie-acid-black/stamp-cats-hoodie-acid-black-3.webp",
        },
      ],
    },
    bestseller: true,
    category: Category.hoodies,
  },
  {
    name: "Wine And Surf Sweat - Vintage White",
    description:
      "Wine and Surf Sweat is a strong item in the collection, reminiscent of the real 90s. Casual form and delicate oversizes, extremely classic and universal color combination. Lowered shoulder line, giving lightness, looseness and nonchalance. The perfect base for many styles - a sweatshirt for literally everything! On the front, old-school, yet minimalist embroidery in the shade of Bottle Green, combined with a detail of embroidered waves on the sleeve and neck. Made of high-quality brushed cotton, soft and pleasant to the body, with a weight of 320G - ensuring durability and reliability in all conditions.",
    prices: { create: [{ price: 90 }] },
    sizes: [Size.XS, Size.S, Size.M, Size.L, Size.XL],
    images: {
      create: [
        {
          src: "/products/hoodies/wine-and-surf-sweat-vintage-white/wine-and-surf-sweat-vintage-white-1.webp",
        },
        {
          src: "/products/hoodies/wine-and-surf-sweat-vintage-white/wine-and-surf-sweat-vintage-white-2.webp",
        },
        {
          src: "/products/hoodies/wine-and-surf-sweat-vintage-white/wine-and-surf-sweat-vintage-white-3.webp",
        },
      ],
    },
    bestseller: false,
    category: Category.hoodies,
  },
  {
    name: "Sunburn Hoodie - Space Black",
    description:
      "The sweatshirt is made of high-quality organic knitwear with a weight of 320G, which provides extraordinary comfort and warmth, and is also very pleasant to the body thanks to the brushed bottom. Its exceptionally loose cut makes wearing it a pure pleasure. The neckline is finished with a large hood, which not only adds style, but also provides additional protection against the cold. There is a practical pocket on the front, ideal for storing small items. Black cotton strings that have been pulled in, allow you to adjust the hood, adapting it to your preferences. The sweatshirt has been carefully finished with high-quality cuffs, which provide better fit and comfort of wearing. Additional stitching stabilizes the seams, which guarantees durability and strength. The internal finish with herringbone tape not only adds a unique character, but also stabilizes the form and shape of the shoulders. There is a subtle graphic on the chest, which perfectly matches the strong, expressive back.",
    prices: { create: [{ price: 100 }] },
    sizes: [Size.XS, Size.S, Size.M, Size.L, Size.XL],
    images: {
      create: [
        {
          src: "/products/hoodies/sunburn-hoodie-acid-black/sunburn-hoodie-acid-black-1.webp",
        },
        {
          src: "/products/hoodies/sunburn-hoodie-acid-black/sunburn-hoodie-acid-black-2.webp",
        },
        {
          src: "/products/hoodies/sunburn-hoodie-acid-black/sunburn-hoodie-acid-black-3.webp",
        },
      ],
    },
    bestseller: false,
    category: Category.hoodies,
  },
  {
    name: "Aqua Sweat - Vintage White",
    description:
      "A sweatshirt in a warm, natural shade, which is the perfect base for a strong, sensual graphic on the back and subtle wave prints on the chest and sleeve. The dropped shoulder line and cut detail in the sleeves make it add a lot of looseness and comfort, while subtly emphasizing the figure and adding character. It is made of organic knitwear, consisting of 90% pure cotton and 10% recycled polyester - thanks to which it is extremely durable, pleasant to the skin and environmentally friendly. It has been finished with a high-quality elastic band, ensuring a better fit to the body. An additional elastic insert at the neckline, finished with a decorative stitching with a render at the edge of the insert.",
    prices: { create: [{ price: 85 }] },
    sizes: [Size.XS, Size.S, Size.M, Size.L, Size.XL],
    images: {
      create: [
        {
          src: "/products/hoodies/aqua-sweat-vintage-white/aqua-sweat-vintage-white-1.webp",
        },
        {
          src: "/products/hoodies/aqua-sweat-vintage-white/aqua-sweat-vintage-white-2.webp",
        },
        {
          src: "/products/hoodies/aqua-sweat-vintage-white/aqua-sweat-vintage-white-3.webp",
        },
      ],
    },
    bestseller: true,
    category: Category.hoodies,
  },
  {
    name: "No Rules LS - Brownie",
    description:
      "The No Rules Longsleeve in a basic Brownie color, decorated with a contrasting graphic on the back in Flamingo Pink, has been designed with comfort and style in mind. It has a loose, boxy cut that is perfect for both everyday use and outdoor activities. The extended sleeve line with a wide cuff on the neck provides additional comfort and freedom of movement. There is a smiley face embroidery on the sleeve, which adds a unique character. The graphic on the T-shirt was made using a water technique, which guarantees durability and intense colors. The contrasting chain stitch on the shoulder and the Surf logo insert on the side seam emphasizes the high quality of workmanship and the Polish origin of the product.",
    prices: { create: [{ price: 75 }] },
    sizes: [Size.XS, Size.S, Size.M, Size.L, Size.XL],
    images: {
      create: [
        {
          src: "/products/longsleeves/no-rules-ls-brownie/no-rules-ls-brownie-1.jpg",
        },
        {
          src: "/products/longsleeves/no-rules-ls-brownie/no-rules-ls-brownie-2.webp",
        },
        {
          src: "/products/longsleeves/no-rules-ls-brownie/no-rules-ls-brownie-3.webp",
        },
      ],
    },
    bestseller: true,
    category: Category.longsleeves,
  },
  {
    name: "Sea Lions LS - Dirty White",
    description:
      "True everyday comfort in a new version - a combination of oversizes form with a completely new quality of knitwear; extremely thick, with an increased grammage of 270G. Sea Lions LS is a fresh and at the same time universal combination of the Dirty White base with modern graphics in perfectly harmonizing shades of mustard and brown. The applied water technique blends the print into the structure of the knitwear, ensuring the best durability. Additional stitching was used in the production of the longsleeve, guaranteeing the durability of the seams. The neckline is finished with a cotton rib, ensuring a better fit. On the shoulders, a contrasting chain stitch, adding an extraordinary visual effect and an internal trim, stabilizing the form and shape of the shoulders. We also added a hanger, which is not only decorative, but also extremely practical. A natural label with the brand's logo is sewn into the side seam. The whole is closed by a visible wave print on the chest and subtle Sea Lion embroidery on the sleeve. Unisex model.",
    prices: { create: [{ price: 75 }] },
    sizes: [Size.XS, Size.S, Size.M, Size.L, Size.XL],
    images: {
      create: [
        {
          src: "/products/longsleeves/sea-lions-ls-dirty-white/sea-lions-ls-dirty-white-1.jpg",
        },
        {
          src: "/products/longsleeves/sea-lions-ls-dirty-white/sea-lions-ls-dirty-white-2.webp",
        },
        {
          src: "/products/longsleeves/sea-lions-ls-dirty-white/sea-lions-ls-dirty-white-3.webp",
        },
      ],
    },
    bestseller: true,
    category: Category.longsleeves,
  },
  {
    name: "Feel Amazing LS - Paper White",
    description:
      "Feel Amazing LS is an oversizesd unisex longsleeve with a dropped sleeve line, created in collaboration with artist Jungle Daisy. The model is made of 100% organic cotton with a weight of 270g, which has undergone a softening process, ensuring comfort of wearing all day long.\n" +
      "\n" +
      'The front is decorated with a subtle graphic with a sun surrounded by the inscriptions "Surf Inc.", and the back is distinguished by a large print of a cowgirl, with the inscriptions "Feel Amazing", "Surf Inc." and "Jungle Daisy". Delicate embroidery in the shape of a star has been added to the sleeve, and a natural "Snake & Moon" label has been placed in the side seam, emphasizing the unique character of the model.\n' +
      "\n" +
      "The longsleeve has been finished with internal piping on the shoulders, contrasting chain stitching and a practical hanger on the neck, which combine form stabilization, functionality and aesthetics. Made in Poland.",
    prices: { create: [{ price: 85 }] },
    sizes: [Size.XS, Size.S, Size.M, Size.L, Size.XL],
    images: {
      create: [
        {
          src: "/products/longsleeves/feel-amazing-ls-paper-white/feel-amazing-ls-paper-white-1.jpg",
        },
        {
          src: "/products/longsleeves/feel-amazing-ls-paper-white/feel-amazing-ls-paper-white-2.webp",
        },
        {
          src: "/products/longsleeves/feel-amazing-ls-paper-white/feel-amazing-ls-paper-white-3.webp",
        },
      ],
    },
    bestseller: false,
    category: Category.longsleeves,
  },
  {
    name: "Face Shine LS - Raspberry Punch",
    description:
      "Face Shine LS in Raspberry Punch is an oversizesd unisex longsleeve, created in collaboration with the talented artist Jungle Daisy. Made from 100% organic cotton with a weight of 180g, it has undergone a softening process for maximum comfort.\n" +
      "\n" +
      'Ribbed cuffs and a wide neck band guarantee a comfortable fit, while the oversizesd cut provides complete freedom. In the side seam you will find the "Snake & Moon" pennant. Details such as contrasting chain stitch on the shoulders and a hanger on the neck complete the whole, emphasizing the functionality and aesthetics of this model. Made in Poland.\n' +
      "\n" +
      'On the front there is a subtle print, and on the back there is a distinctive graphic with the inscription "Melted Sunshine" in white, which attracts the eye. A small floral print on the sleeve adds charm and originality to the model.',
    prices: { create: [{ price: 70 }] },
    sizes: [Size.XS, Size.S, Size.M, Size.L, Size.XL],
    images: {
      create: [
        {
          src: "/products/longsleeves/face-shine-ls-raspberry-punch/face-shine-ls-raspberry-punch-1.jpg",
        },
        {
          src: "/products/longsleeves/face-shine-ls-raspberry-punch/face-shine-ls-raspberry-punch-2.webp",
        },
        {
          src: "/products/longsleeves/face-shine-ls-raspberry-punch/face-shine-ls-raspberry-punch-3.webp",
        },
      ],
    },
    bestseller: false,
    category: Category.longsleeves,
  },
  {
    name: "Only For Flippers LS - Vintage White",
    description:
      "Only for Flippers LS in Vintage White is a unisex longsleeve with a dropped sleeve line, designed in collaboration with the talented artist Jungle Daisy. Made of 100% organic cotton with a weight of 270g, thanks to the material softening process, it provides exceptional comfort and softness.\n" +
      "\n" +
      'Subtle graphics on the front, while on the back there is a large print with a mermaid on a surfboard and the inscriptions "Only for Flippers" and "Surf flop". On the sleeve there is a small plant embroidery, and in the side seam you will find a natural "Snake & Moon" label, which adds a unique character to the whole.\n' +
      "\n" +
      "Attention to detail is visible in precise stitching reinforcing the seams, which increases the durability of the product. Finishing the neckline with a cotton rib ensures a perfect fit, and contrasting chain stitch on the shoulders and inner piping stabilize the form and shape. A practical hanger on the neck combines decorative and practical functions. Made in Poland.",
    prices: { create: [{ price: 85 }] },
    sizes: [Size.XS, Size.S, Size.M, Size.L, Size.XL],
    images: {
      create: [
        {
          src: "/products/longsleeves/only-for-flippers-ls-vintage-white/only-for-flippers-ls-vintage-white-1.jpg",
        },
        {
          src: "/products/longsleeves/only-for-flippers-ls-vintage-white/only-for-flippers-ls-vintage-white-2.webp",
        },
        {
          src: "/products/longsleeves/only-for-flippers-ls-vintage-white/only-for-flippers-ls-vintage-white-3.webp",
        },
      ],
    },
    bestseller: true,
    category: Category.longsleeves,
  },
  {
    name: "Sunburn LS - Optic White",
    description:
      "Sunburn LS is true comfort for every day - a combination of oversizes form with a completely new quality of knitwear, with exceptional softness. Sunburn is a harmonious combination of classic white with a modern graphic design in a completely new shade of indigo, creating a fresh and intriguing combination. The applied water print technique blends the pattern into the structure of the material, guaranteeing its highest durability. Additional stitching ensures the solidity of the seams, and the cotton band at the neckline guarantees a perfect fit. Contrasting stitch on the shoulders adds character, while the inner piping stabilizes the shape of the shoulders. The sewn-on hanger made of basic knitwear not only gives the product individuality, but also full functionality. A natural label with the mother's logo is sewn into the side seam. Large modernist graphics on the back. The whole is complemented by a smaller form of the Surf Inc. print on the chest and delicate star embroidery on the sleeve. Version dedicated to women.",
    prices: { create: [{ price: 75 }] },
    sizes: [Size.XS, Size.S, Size.M, Size.L, Size.XL],
    images: {
      create: [
        {
          src: "/products/longsleeves/sunburn-ls-optic-white/sunburn-ls-optic-white-1.jpg",
        },
        {
          src: "/products/longsleeves/sunburn-ls-optic-white/sunburn-ls-optic-white-2.webp",
        },
        {
          src: "/products/longsleeves/sunburn-ls-optic-white/sunburn-ls-optic-white-3.webp",
        },
      ],
    },
    bestseller: true,
    category: Category.longsleeves,
  },
  {
    name: "Starfish LS - Dirty White",
    description:
      "Starfish LS is a subtle proposition for women and true fans of the depths of the ocean. A combination of a feisty form with a delicate print in extremely harmonious shades of graphite, beige, brown and burgundy. In combination with Dirty White knitwear, it is an extraordinary base for your everyday stylings. The whole thing is combined with contrasting wave embroidery on the sleeve. True everyday comfort in a new version - a combination of oversizes form with a completely new quality of knitwear; extremely thick, with an increased grammage of 270G. The water technique used blends the print into the structure of the knitwear, ensuring the best durability. Additional stitching was used in the production of the longsleeve, guaranteeing the durability of the seams. The neckline is finished with a cotton welt, ensuring a better fit. Contrasting chain stitch on the shoulders, adding an extraordinary visual effect and an internal trim, stabilizing the form and shape of the shoulders. We also added a hanger, which is not only decorative, but also extremely practical. A natural label with the brand logo is sewn into the side seam.",
    prices: { create: [{ price: 75 }] },
    sizes: [Size.XS, Size.S, Size.M, Size.L, Size.XL],
    images: {
      create: [
        {
          src: "/products/longsleeves/starfish-ls-dirty-white/starfish-ls-dirty-white-1.jpg",
        },
        {
          src: "/products/longsleeves/starfish-ls-dirty-white/starfish-ls-dirty-white-2.webp",
        },
        {
          src: "/products/longsleeves/starfish-ls-dirty-white/starfish-ls-dirty-white-3.webp",
        },
      ],
    },
    bestseller: false,
    category: Category.longsleeves,
  },
]

const SHIPPINGS = [
  { label: "InPost", price: 6, name: "inpost" },
  {
    label: "Orlen Paczka",
    price: 5,
    name: "orlen",
  },
  { label: "Poczta Polska", price: 4, name: "poczta" },
  { label: "Kurier DPD", name: "dpd", price: 7 },
]

const PAYMENTS = [
  { label: "BLIK", name: "blik" },
  {
    label: "Online Transfer",
    name: "transfer",
  },
  {
    label: "Payment Card",
    name: "card",
  },
]

const seed = async () => {
  for (const product of PRODUCTS) {
    await db.product.create({
      data: product,
    })
  }

  for (const shipping of SHIPPINGS) {
    await db.shipping.create({
      data: shipping,
    })
  }

  for (const payment of PAYMENTS) {
    await db.payment.create({
      data: payment,
    })
  }
}

export default seed
