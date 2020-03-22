import AppetizersImageManager from "../imageManagers/AppetizersImageManager";
import SpecialsImageManager from "../imageManagers/SpecialsImageManager";
import NigirisImageManager from "../imageManagers/NigirisImageManager";
import RollsImageManager from "../imageManagers/RollsImageManager";
import DessertsImageManager from "../imageManagers/DessertsImageManager";

export default Object.create(null, {
    getAppetizers: {
        value: () => {
            let cards = [
                {
                    name: "dumpling",
                    img: AppetizersImageManager.appetizers.dumpling,
                    smallImg: AppetizersImageManager.appetizers.dumplingSingle,
                    cardClass: "card dumpling-card",
                    modifierText: "1 3 6 10 15",
                    modifierSubText: "",
                    totalCount: 1,
                    uniqueIterations: [
                        {
                            count: 1,
                            smallImgCount: 1
                        }
                    ]
    
                },
                {
                    name: "edamame",
                    img: AppetizersImageManager.appetizers.edamame,
                    smallImg: AppetizersImageManager.appetizers.edamameSingle,
                    cardClass: "card edamame-card",
                    modifierText: "1",
                    modifierSubText: "PER OPPONENTS|WITH EDAMAME",
                    totalCount: 12,
                    uniqueIterations: [
                        {
                            count: 1,
                            smallImgCount: 1
                        }
                    ]
                },
                {
                    name: "eel",
                    img: AppetizersImageManager.appetizers.eel,
                    smallImg: AppetizersImageManager.appetizers.eelSingle,
                    cardClass: "card eel-card",
                    modifierText: "x1=-3 x2+=7",
                    modifierSubText: "",
                    totalCount: 12,
                    uniqueIterations: [
                        {
                            count: 1,
                            smallImgCount: 1
                        }
                    ]
                },
                {
                    name: "misosoup",
                    img: AppetizersImageManager.appetizers.misosoup,
                    smallImg: AppetizersImageManager.appetizers.misosoupSingle,
                    cardClass: "card misosoup-card",
                    modifierText: "MOST:",
                    modifierSubText: "2-5P: 6/3|6-8P: 6/4/2",
                    totalCount: 12,
                    uniqueIterations: [
                        {
                            count: 1,
                            smallImgCount: 1
                        }
                    ]
                },
                {
                    name: "onigiri",
                    img: AppetizersImageManager.appetizers.onigiricircle,
                    smallImg: AppetizersImageManager.appetizers.onigiricircleSingle,
                    cardClass: "card onigiri-card",
                    modifierText: "UNIQUE: 1 4 9 16",
                    modifierSubText: "",
                    totalCount: 12,
                    uniqueIterations: [
                        {
                            count: 1,
                            smallImgCount: 1
                        }
                    ]
                },
                {
                    name: "onigiri",
                    img: AppetizersImageManager.appetizers.onigirirectangle,
                    smallImg: AppetizersImageManager.appetizers.onigirirectangleSingle,
                    cardClass: "card onigiri-card",
                    modifierText: "UNIQUE: 1 4 9 16",
                    modifierSubText: "",
                    totalCount: 12,
                    uniqueIterations: [
                        {
                            count: 1,
                            smallImgCount: 1
                        }
                    ]
                },
                {
                    name: "onigiri",
                    img: AppetizersImageManager.appetizers.onigirisquare,
                    smallImg: AppetizersImageManager.appetizers.onigirisquareSingle,
                    cardClass: "card onigiri-card",
                    modifierText: "UNIQUE: 1 4 9 16",
                    modifierSubText: "",
                    totalCount: 12,
                    uniqueIterations: [
                        {
                            count: 1,
                            smallImgCount: 1
                        }
                    ]
                },
                {
                    name: "onigiri",
                    img: AppetizersImageManager.appetizers.onigiritriangle,
                    smallImg: AppetizersImageManager.appetizers.onigiritriangleSingle,
                    cardClass: "card onigiri-card",
                    modifierText: "UNIQUE: 1 4 9 16",
                    modifierSubText: "",
                    totalCount: 12,
                    uniqueIterations: [
                        {
                            count: 1,
                            smallImgCount: 1
                        }
                    ]
                },
                {
                    name: "sashimi",
                    img: AppetizersImageManager.appetizers.sashimi,
                    smallImg: AppetizersImageManager.appetizers.sashimiSingle,
                    cardClass: "card sashimi-card",
                    modifierText: "x3=10",
                    modifierSubText: "",
                    totalCount: 1,
                    uniqueIterations: [
                        {
                            count: 1,
                            smallImgCount: 1
                        }
                    ]
                },
                {
                    name: "tempura",
                    img: AppetizersImageManager.appetizers.tempura,
                    smallImg: AppetizersImageManager.appetizers.tempuraSingle,
                    cardClass: "card tempura-card",
                    modifierText: "x2=5",
                    modifierSubText: "",
                    totalCount: 1,
                    uniqueIterations: [
                        {
                            count: 1,
                            smallImgCount: 1
                        }
                    ]
                },
                {
                    name: "tofu",
                    img: AppetizersImageManager.appetizers.tofu,
                    smallImg: AppetizersImageManager.appetizers.tofuSingle,
                    cardClass: "card tofu-card",
                    modifierText: "x1=2 x2=6 x3+=0",
                    modifierSubText: "",
                    totalCount: 12,
                    uniqueIterations: [
                        {
                            count: 1,
                            smallImgCount: 1
                        }
                    ]
                }
            ]; 

            return cards;
        }
    },
    getSpecials: {
        value: () => {
            let cards = [
                {
                    name: "chopsticks",
                    img: SpecialsImageManager.specials.chopsticks,
                    smallImg: SpecialsImageManager.specials.chopsticksSingle,
                    cardClass: "card chopsticks-card",
                    modifierText: "SWAP|FOR 2",
                    modifierSubText: "",
                    totalCount: 1,
                    uniqueIterations: [
                        {
                            count: 1,
                            smallImgCount: 1
                        }
                    ]
                },
                {
                    name: "menu",
                    img: SpecialsImageManager.specials.menu,
                    smallImg: SpecialsImageManager.specials.menuSingle,
                    cardClass: "card menu-card",
                    modifierText: "",
                    modifierSubText: "DRAW 4 CARDS, PLAY 1,|RETURN THE REST",
                    totalCount: 12,
                    uniqueIterations: [
                        {
                            count: 1,
                            smallImgCount: 1
                        }
                    ]
                },
                {
                    name: "special order",
                    img: SpecialsImageManager.specials.specialorder,
                    smallImg: SpecialsImageManager.specials.specialorderSingle,
                    cardClass: "card specialorder-card",
                    modifierText: "",
                    modifierSubText: "COPIES ANY|CARD YOU|HAVE PLAYED",
                    totalCount: 12,
                    uniqueIterations: [
                        {
                            count: 1,
                            smallImgCount: 1
                        }
                    ]
                },
                {
                    name: "soy sauce",
                    img: SpecialsImageManager.specials.soysauce,
                    smallImg: SpecialsImageManager.specials.soysauceSingle,
                    cardClass: "card soysauce-card",
                    modifierText: "",
                    modifierSubText: "MOST COLORS 4",
                    totalCount: 12,
                    uniqueIterations: [
                        {
                            count: 1,
                            smallImgCount: 1
                        }
                    ]
                },
                {
                    name: "spoon",
                    img: SpecialsImageManager.specials.spoon,
                    smallImg: SpecialsImageManager.specials.spoonSingle,
                    cardClass: "card spoon-card",
                    modifierText: "",
                    modifierSubText: "ASK FOR ANY CARD|FIRST PLAYER TO LEFT|WITH IT IN HAND|SWAPS IT FOR THIS",
                    totalCount: 12,
                    uniqueIterations: [
                        {
                            count: 1,
                            smallImgCount: 1
                        }
                    ]
                },
                {
                    name: "take-out box",
                    img: SpecialsImageManager.specials.takeoutbox,
                    smallImg: SpecialsImageManager.specials.takeoutboxSingle,
                    cardClass: "card takeoutbox-card",
                    modifierText: "",
                    modifierSubText: "FLIP ANY|PLAYED CARDS,|EACH ARE|WORTH 2",
                    totalCount: 12,
                    uniqueIterations: [
                        {
                            count: 1,
                            smallImgCount: 1
                        }
                    ]
                },
                {
                    name: "tea",
                    img: SpecialsImageManager.specials.tea,
                    smallImg: SpecialsImageManager.specials.teaSingle,
                    cardClass: "card tea-card",
                    modifierText: "MOST:",
                    modifierSubText: "2-5P: 6/3|6-8P: 6/4/2",
                    totalCount: 12,
                    uniqueIterations: [
                        {
                            count: 1,
                            smallImgCount: 1
                        }
                    ]
                },
                {
                    name: "wasabi",
                    img: SpecialsImageManager.specials.wasabi,
                    smallImg: SpecialsImageManager.specials.wasabiSingle,
                    cardClass: "card wasabi-card",
                    modifierText: "NEXT NIGIRI x3",
                    modifierSubText: "",
                    totalCount: 1,
                    uniqueIterations: [
                        {
                            count: 1,
                            smallImgCount: 1
                        }
                    ]
                }
            ];

            return cards;
        }
    },
    getNigiris: {
        value: () => {
            let cards = [
                {
                    name: "egg nigiri",
                    img: NigirisImageManager.nigiris.eggnigiri,
                    smallImg: NigirisImageManager.nigiris.eddnigiriSingle,
                    cardClass: "card nigiri-card",
                    modifierText: "1",
                    modifierSubText: "",
                    totalCount: 1,
                    uniqueIterations: [
                        {
                            count: 1,
                            smallImgCount: 1
                        }
                    ]
                },
                {
                    name: "salmon nigiri",
                    img: NigirisImageManager.nigiris.salmonnigiri,
                    smallImg: NigirisImageManager.nigiris.salmonnigiriSingle,
                    cardClass: "card nigiri-card",
                    modifierText: "2",
                    modifierSubText: "",
                    totalCount: 1,
                    uniqueIterations: [
                        {
                            count: 1,
                            smallImgCount: 1
                        }
                    ]
                },
                {
                    name: "squid nigiri",
                    img: NigirisImageManager.nigiris.squidnigiri,
                    smallImg: NigirisImageManager.nigiris.squidnigiriSingle,
                    cardClass: "card nigiri-card",
                    modifierText: "3",
                    modifierSubText: "",
                    totalCount: 1,
                    uniqueIterations: [
                        {
                            count: 1,
                            smallImgCount: 1
                        }
                    ]
                }
            ];

            return cards;
        }
    },
    getRolls: {
        value: () => {
            let cards = [
                {
                    name: "maki",
                    img: RollsImageManager.rolls.maki,
                    smallImg: RollsImageManager.rolls.makiSingle,
                    cardClass: "card maki-card",
                    modifierText: "MOST:",
                    modifierSubText: "2-5P: 6/3|6-8P: 6/4/2",
                    totalCount: 12,
                    uniqueIterations: [
                        {
                            count: 1,
                            smallImgCount: 1
                        }
                    ]
                },
                {
                    name: "temaki",
                    img: RollsImageManager.rolls.temaki,
                    smallImg: RollsImageManager.rolls.temakiSingle,
                    cardClass: "card temaki-card",
                    modifierText: "",
                    modifierSubText: "MOST: 4|LEAST: -4",
                    totalCount: 12,
                    uniqueIterations: [
                        {
                            count: 1,
                            smallImgCount: 1
                        }
                    ]
                },
                {
                    name: "uramaki",
                    img: RollsImageManager.rolls.uramaki,
                    smallImg: RollsImageManager.rolls.uramakiSingle,
                    cardClass: "card uramaki-card",
                    modifierText: "MOST:",
                    modifierSubText: "2-5P: 6/3|6-8P: 6/4/2",
                    totalCount: 12,
                    uniqueIterations: [
                        {
                            count: 1,
                            smallImgCount: 1
                        }
                    ]
                }
            ];

            return cards;
        }
    },
    getDesserts: {
        value: () => {
            let cards = [
                {
                    name: "fruit",
                    img: DessertsImageManager.desserts.fruit,
                    smallImg: DessertsImageManager.desserts.fruitPineapple,
                    cardClass: "card fruit-card",
                    modifierText: "PER TYPE:",
                    modifierSubText: "(-2) 0 1 3 6 10",
                    totalCount: 12,
                    uniqueIterations: [
                        {
                            count: 1,
                            smallImgCount: 1
                        }
                    ]
                },
                
                {
                    name: "green tea ice cream",
                    img: DessertsImageManager.desserts.greenteaicecream,
                    smallImg: DessertsImageManager.desserts.greenteaicecreamSingle,
                    cardClass: "card greenteaicecream-card",
                    modifierText: "x4 = 12",
                    modifierSubText: "",
                    totalCount: 12,
                    uniqueIterations: [
                        {
                            count: 1,
                            smallImgCount: 1
                        }
                    ]
                },
                {
                    name: "pudding",
                    img: DessertsImageManager.desserts.pudding,
                    smallImg: DessertsImageManager.desserts.puddingSingle,
                    cardClass: "card pudding-card",
                    modifierText: "",
                    modifierSubText: "MOST 6|LEAST -6",
                    totalCount: 1,
                    uniqueIterations: [
                        {
                            count: 1,
                            smallImgCount: 1
                        }
                    ]
                }
            ];

            return cards;
        }
    }
});