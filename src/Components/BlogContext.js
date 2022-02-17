import React, { createContext, useState } from "react";

export const BlogContext = createContext();

export const BlogProvider = (props) => {
    const [bollywood, setBollywood] = useState([
        {
            "Title" : "Chennai Express (2013)",
            "CategoryName"  : "Bollywood",
            "PublishedDate" : "Aug 21 2021",
            "ImageAsset"    : "https://m.media-amazon.com/images/M/MV5BMWRkNGZmNjUtMzAxZC00MzFjLWE2MmUtNDFiYmNmNjA5Yjc0XkEyXkFqcGdeQXVyNTE0MDc0NTM@._V1_.jpg",
            "BlogContent"   : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt.",
            "Likes"         : "500"
        },
        {
            "Title" : "Airlift (2016)",
            "CategoryName"  : "Bollywood",
            "PublishedDate" : "Aug 21 2021",
            "ImageAsset"    : "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2016/01/22/417391-airlift-poster.jpg",
            "BlogContent"   : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt.",
            "Likes"         : "501"
        },
        {
            "Title" : "PK (2014)",
            "CategoryName"  : "Bollywood",
            "PublishedDate" : "Aug 21 2021",
            "ImageAsset"    : "https://static01.nyt.com/images/2014/12/20/arts/peekay/peekay-superJumbo.jpg",
            "BlogContent"   : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt.",
            "Likes"         : "502"
        },
        {
            "Title" : "Kabir Singh (2019)",
            "CategoryName"  : "Bollywood",
            "PublishedDate" : "Aug 21 2021",
            "ImageAsset"    : "https://ichef.bbci.co.uk/news/976/cpsprodpb/8F9A/production/_107526763_58462021_406552023468743_2926755006583406592_o.jpg",
            "BlogContent"   : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt.",
            "Likes"         : "503"
        },
        {
            "Title" : "Sooryavanshi (2021)",
            "CategoryName"  : "Bollywood",
            "PublishedDate" : "Aug 21 2021",
            "ImageAsset"    : "https://www.deccanherald.com/sites/dh/files/articleimages/2021/11/05/file7i2b5yoa8rm15oggujxu-1047654-1636124367.jpg",
            "BlogContent"   : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt.",
            "Likes"         : "504"
        }
    ]);

    const [technology, setTechnology] = useState([
        {
            "Title" : "Robot Dog deployed at US national grid",
            "CategoryName"  : "Technology",
            "PublishedDate" : "Aug 21 2021",
            "ImageAsset"    : "https://f.hubspotusercontent30.net/hubfs/4845432/ECommerce/Spot%20Arm-03.png",
            "BlogContent"   : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt.",
            "Likes"         : "500"
        },
        {
            "Title" : "Robot Dog in the Metaverse",
            "CategoryName"  : "Technology",
            "PublishedDate" : "Aug 21 2021",
            "ImageAsset"    : "https://media.wired.com/photos/5ea0c37d001a9300085621c7/125:94/w_1904,h_1432,c_limit/Science_bostondynamics_20200410-drspot-v1-pitch.jpg",
            "BlogContent"   : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt.",
            "Likes"         : "501"
        },
        {
            "Title" : "Robot Interacts with Homeless People",
            "CategoryName"  : "Technology",
            "PublishedDate" : "Aug 21 2021",
            "ImageAsset"    : "https://wallpapershome.com/images/pages/pic_h/22636.jpg",
            "BlogContent"   : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt.",
            "Likes"         : "502"
        },
        {
            "Title" : "Robot Patrol Dogs",
            "CategoryName"  : "Technology",
            "PublishedDate" : "Aug 21 2021",
            "ImageAsset"    : "https://i.ytimg.com/vi/WvTdNwyADZc/maxresdefault.jpg",
            "BlogContent"   : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt.",
            "Likes"         : "503"
        },
        {
            "Title" : "Most boring robot",
            "CategoryName"  : "Technology",
            "PublishedDate" : "Aug 21 2021",
            "ImageAsset"    : "https://spectrum.ieee.org/media-library/boston-dynamics-spot.jpg?id=25589757&width=1240&height=930",
            "BlogContent"   : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt.",
            "Likes"         : "504"
        }
    ]);
    
    const [hollywood, setHollywood] = useState([
        {
            "Title" : "No Way Home (2021)",
            "CategoryName"  : "Hollywood",
            "PublishedDate" : "Aug 21 2021",
            "ImageAsset"    : "https://images.hdqwalls.com/wallpapers/spider-man-no-way-home-empire-poster-4k-gf.jpg",
            "BlogContent"   : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt.",
            "Likes"         : "500"
        },
        {
            "Title" : "The Matrix Resurrections (2021)",
            "CategoryName"  : "Hollywood",
            "PublishedDate" : "Aug 21 2021",
            "ImageAsset"    : "https://mocah.org/mocahbig/391597-matrix-resurrection-matrix-4-movie-neo-keanu-reeves.jpg",
            "BlogContent"   : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt.",
            "Likes"         : "501"
        },
        {
            "Title" : "Cobra Kai S4 (2021)",
            "CategoryName"  : "Hollywood",
            "PublishedDate" : "Aug 21 2021",
            "ImageAsset"    : "https://cdn.mos.cms.futurecdn.net/gTJ86So5eA82NvuZYCLPH6.jpg",
            "BlogContent"   : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt.",
            "Likes"         : "502"
        },
        {
            "Title" : "Don't Look Up (2021)",
            "CategoryName"  : "Hollywood",
            "PublishedDate" : "Aug 21 2021",
            "ImageAsset"    : "https://occ-0-987-990.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABf07Ihf0o-BL7ks_pjwU1BfBJzxgHA8Ao8jMZ5dfJA8PZ_R7l-NyvQHtTj1TpmnL7lnR2SA8Nv4VGzEO9yJkmJ_fwArM.jpg?r=7c6",
            "BlogContent"   : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt.",
            "Likes"         : "503"
        },
        {
            "Title" : "Red Notice (2021)",
            "CategoryName"  : "Hollywood",
            "PublishedDate" : "Aug 21 2021",
            "ImageAsset"    : "https://images.ottplay.com/articles/2021q4/Red_Notice_review_D_OTTplay_critics_cover_image_1_109.jpeg",
            "BlogContent"   : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt.",
            "Likes"         : "504"
        }
    ]);

    const [fitness, setFitness] = useState([
        {
            "Title" : "Running",
            "CategoryName"  : "Fitness",
            "PublishedDate" : "Aug 21 2021",
            "ImageAsset"    : "https://images.unsplash.com/photo-1502224562085-639556652f33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cnVufGVufDB8fDB8fA%3D%3D&w=1000&q=80",
            "BlogContent"   : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt.",
            "Likes"         : "500"
        },
        {
            "Title" : "Fresh Veggies",
            "CategoryName"  : "Fitness",
            "PublishedDate" : "Aug 21 2021",
            "ImageAsset"    : "https://wallpapercave.com/wp/wp4696898.png",
            "BlogContent"   : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt.",
            "Likes"         : "501"
        },
        {
            "Title" : "Balanced Diet",
            "CategoryName"  : "Fitness",
            "PublishedDate" : "Aug 21 2021",
            "ImageAsset"    : "https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/10/Steak_Veggies_Overhead_1296x728-header-1296x729.jpg?w=1155&h=2268",
            "BlogContent"   : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt.",
            "Likes"         : "502"
        },
        {
            "Title" : "Hiking",
            "CategoryName"  : "Fitness",
            "PublishedDate" : "Aug 21 2021",
            "ImageAsset"    : "https://wallpapercave.com/wp/wp8461250.jpg",
            "BlogContent"   : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt.",
            "Likes"         : "503"
        },
        {
            "Title" : "Local Fitness Center",
            "CategoryName"  : "Fitness",
            "PublishedDate" : "Aug 21 2021",
            "ImageAsset"    : "https://media.cms.blinkfitness.com/media/sites/2/20210513092611/1.png",
            "BlogContent"   : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt.",
            "Likes"         : "504"
        }
    ]);

    const [food, setFood] = useState([
        {
            "Title" : "Garlic Bread",
            "CategoryName"  : "Food",
            "PublishedDate" : "Aug 21 2021",
            "ImageAsset"    : "https://wallpaperaccess.com/full/767277.jpg",
            "BlogContent"   : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt.",
            "Likes"         : "500"
        },
        {
            "Title" : "Super Supreme",
            "CategoryName"  : "Food",
            "PublishedDate" : "Aug 21 2021",
            "ImageAsset"    : "https://wallpaperaccess.com/full/826922.jpg",
            "BlogContent"   : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt.",
            "Likes"         : "501"
        },
        {
            "Title" : "Pepperoni Pizza",
            "CategoryName"  : "Food",
            "PublishedDate" : "Aug 21 2021",
            "ImageAsset"    : "https://wallpapersmug.com/download/3840x2400/ebde76/delicious-pizza-food.jpg",
            "BlogContent"   : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt.",
            "Likes"         : "502"
        },
        {
            "Title" : "Dark Chocolate",
            "CategoryName"  : "Food",
            "PublishedDate" : "Aug 21 2021",
            "ImageAsset"    : "https://wallpaperbat.com/img/37643-dark-chocolate-wallpaper-top-free-dark-chocolate-background.jpg",
            "BlogContent"   : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt.",
            "Likes"         : "503"
        },
        {
            "Title" : "Healthy Foods",
            "CategoryName"  : "Food",
            "PublishedDate" : "Aug 21 2021",
            "ImageAsset"    : "https://i0.wp.com/post.healthline.com/wp-content/uploads/2021/10/breakfast-foods-eggs-scrambled-pan-1296x728-header.jpg?w=1155&h=1528",
            "BlogContent"   : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt.",
            "Likes"         : "504"
        }
    ]);

    return(
        <BlogContext.Provider   value={ { value1 : [bollywood, setBollywood],
                                          value2 : [hollywood,setHollywood],
                                          value3 : [technology, setTechnology],
                                          value4 : [fitness, setFitness],
                                          value5 : [food, setFood] } }>
            {props.children}
        </BlogContext.Provider>
    )
}