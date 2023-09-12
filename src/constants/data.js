import images from "./images";

const category = [
    {
        urlImg: images.c_Pumpkin,
        urlImgS: images.stars,
        title: "Pumpkins",
        tags: "Light up horror pumpkins to scare at night",
    },
    {
        urlImg: images.c_Ghost,
        urlImgS: images.stars,
        title: "Ghost",
        tags: "Spooky ghosts to scare in the most haunted houses",
    },
    {
        urlImg: images.c_Hat,
        urlImgS: images.stars,
        title: "Witch Hat",
        tags: "The most elegant witch hats you can wear and scare",
    },
];

const items = [
    {
        urlImg: images.i_Apple,
        title: "Candy Apple",
        price: "$4.99",
    },
    {
        urlImg: images.i_Broom,
        title: "Witch Broom",
        price: "$12.99",
    },
    {
        urlImg: images.i_Pumpkin,
        title: "Pumpkin",
        price: "$7.99",
    },
    {
        urlImg: images.i_Spider,
        title: "Spider",
        price: "$9.99",
    },
    {
        urlImg: images.i_Hat,
        title: "Witch Hat",
        price: "$15.99",
    },
];

export default { category, items };