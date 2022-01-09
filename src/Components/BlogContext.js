import React, { createContext, useState } from "react";

export const BlogContext = createContext();

export const BlogProvider = (props) => {
    const [bollywood, setBollywood] = useState([
        {
            "Title" : "Random Title6",
            "CategoryName"  : "Bollywood",
            "PublishedDate" : "Aug 21 2021",
            "ImageAsset"    : "https://cdn.wallpapersafari.com/43/80/hx4LX5.jpg",
            "BlogContent"   : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt.",
            "Likes"         : "500"
        },
        {
            "Title" : "Random Title7",
            "CategoryName"  : "Bollywood",
            "PublishedDate" : "Aug 21 2021",
            "ImageAsset"    : "https://www.desktopbackground.org/download/o/2011/06/08/215608_high-resolution-space-hd-real-space-wallpapers-siwallpaperhd-16206_1440x900_h.jpg",
            "BlogContent"   : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt.",
            "Likes"         : "501"
        },
        {
            "Title" : "Random Title8",
            "CategoryName"  : "Bollywood",
            "PublishedDate" : "Aug 21 2021",
            "ImageAsset"    : "https://wallpaperaccess.com/full/514076.jpg",
            "BlogContent"   : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt.",
            "Likes"         : "502"
        },
        {
            "Title" : "Random Title9",
            "CategoryName"  : "Bollywood",
            "PublishedDate" : "Aug 21 2021",
            "ImageAsset"    : "https://wallpaperbat.com/img/142930-super-high-resolution-space-wallpaper.jpg",
            "BlogContent"   : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt.",
            "Likes"         : "503"
        },
        {
            "Title" : "Random Title1",
            "CategoryName"  : "Bollywood",
            "PublishedDate" : "Aug 21 2021",
            "ImageAsset"    : "https://i.pinimg.com/originals/3e/2a/f6/3e2af664e061013a3d05aa99fa20c1d4.jpg",
            "BlogContent"   : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt.",
            "Likes"         : "504"
        }
    ]);

    const [technology, setTechnology] = useState([
        {
            "Title" : "Random Title10",
            "CategoryName"  : "Technology",
            "PublishedDate" : "Aug 21 2021",
            "ImageAsset"    : "https://f.hubspotusercontent30.net/hubfs/4845432/ECommerce/Spot%20Arm-03.png",
            "BlogContent"   : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt.",
            "Likes"         : "500"
        },
        {
            "Title" : "Random Title11",
            "CategoryName"  : "Technology",
            "PublishedDate" : "Aug 21 2021",
            "ImageAsset"    : "https://media.wired.com/photos/5ea0c37d001a9300085621c7/125:94/w_1904,h_1432,c_limit/Science_bostondynamics_20200410-drspot-v1-pitch.jpg",
            "BlogContent"   : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt.",
            "Likes"         : "501"
        },
        {
            "Title" : "Random Title12",
            "CategoryName"  : "Technology",
            "PublishedDate" : "Aug 21 2021",
            "ImageAsset"    : "https://wallpapershome.com/images/pages/pic_h/22636.jpg",
            "BlogContent"   : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt.",
            "Likes"         : "502"
        },
        {
            "Title" : "Random Title13",
            "CategoryName"  : "Technology",
            "PublishedDate" : "Aug 21 2021",
            "ImageAsset"    : "https://i.ytimg.com/vi/WvTdNwyADZc/maxresdefault.jpg",
            "BlogContent"   : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt.",
            "Likes"         : "503"
        },
        {
            "Title" : "Random Title2",
            "CategoryName"  : "Technology",
            "PublishedDate" : "Aug 21 2021",
            "ImageAsset"    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg1OSHkBIMx3_1jhbksJcjo9DKRJ3V8LrSYQ&usqp=CAU",
            "BlogContent"   : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt.",
            "Likes"         : "504"
        }
    ]);
    
    const [hollywood, setHollywood] = useState([
        {
            "Title" : "Random Title14",
            "CategoryName"  : "Hollywood",
            "PublishedDate" : "Aug 21 2021",
            "ImageAsset"    : "https://images.hdqwalls.com/wallpapers/spider-man-no-way-home-empire-poster-4k-gf.jpg",
            "BlogContent"   : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt.",
            "Likes"         : "500"
        },
        {
            "Title" : "Random Title15",
            "CategoryName"  : "Hollywood",
            "PublishedDate" : "Aug 21 2021",
            "ImageAsset"    : "https://mocah.org/mocahbig/391597-matrix-resurrection-matrix-4-movie-neo-keanu-reeves.jpg",
            "BlogContent"   : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt.",
            "Likes"         : "501"
        },
        {
            "Title" : "Random Title16",
            "CategoryName"  : "Hollywood",
            "PublishedDate" : "Aug 21 2021",
            "ImageAsset"    : "https://cdn.mos.cms.futurecdn.net/gTJ86So5eA82NvuZYCLPH6.jpg",
            "BlogContent"   : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt.",
            "Likes"         : "502"
        },
        {
            "Title" : "Random Title17",
            "CategoryName"  : "Hollywood",
            "PublishedDate" : "Aug 21 2021",
            "ImageAsset"    : "https://occ-0-987-990.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABf07Ihf0o-BL7ks_pjwU1BfBJzxgHA8Ao8jMZ5dfJA8PZ_R7l-NyvQHtTj1TpmnL7lnR2SA8Nv4VGzEO9yJkmJ_fwArM.jpg?r=7c6",
            "BlogContent"   : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt.",
            "Likes"         : "503"
        },
        {
            "Title" : "Random Title3",
            "CategoryName"  : "Hollywood",
            "PublishedDate" : "Aug 21 2021",
            "ImageAsset"    : "https://free4kwallpapers.com/uploads/originals/2015/09/06/hd-beautiful-nature-landsacpe-200808115542-10607.jpg",
            "BlogContent"   : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt.",
            "Likes"         : "504"
        }
    ]);

    const [fitness, setFitness] = useState([
        {
            "Title" : "Random Title18",
            "CategoryName"  : "Fitness",
            "PublishedDate" : "Aug 21 2021",
            "ImageAsset"    : "https://images.unsplash.com/photo-1502224562085-639556652f33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cnVufGVufDB8fDB8fA%3D%3D&w=1000&q=80",
            "BlogContent"   : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt.",
            "Likes"         : "500"
        },
        {
            "Title" : "Random Title19",
            "CategoryName"  : "Fitness",
            "PublishedDate" : "Aug 21 2021",
            "ImageAsset"    : "https://wallpapercave.com/wp/wp4696898.png",
            "BlogContent"   : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt.",
            "Likes"         : "501"
        },
        {
            "Title" : "Random Title20",
            "CategoryName"  : "Fitness",
            "PublishedDate" : "Aug 21 2021",
            "ImageAsset"    : "https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/10/Steak_Veggies_Overhead_1296x728-header-1296x729.jpg?w=1155&h=2268",
            "BlogContent"   : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt.",
            "Likes"         : "502"
        },
        {
            "Title" : "Random Title21",
            "CategoryName"  : "Fitness",
            "PublishedDate" : "Aug 21 2021",
            "ImageAsset"    : "https://wallpapercave.com/wp/wp8461250.jpg",
            "BlogContent"   : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt.",
            "Likes"         : "503"
        },
        {
            "Title" : "Random Title4",
            "CategoryName"  : "Fitness",
            "PublishedDate" : "Aug 21 2021",
            "ImageAsset"    : "https://i.pinimg.com/originals/94/18/c4/9418c44026e3ffb239a88d8b62f4fd12.jpg",
            "BlogContent"   : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt.",
            "Likes"         : "504"
        }
    ]);

    const [food, setFood] = useState([
        {
            "Title" : "Random Title22",
            "CategoryName"  : "Food",
            "PublishedDate" : "Aug 21 2021",
            "ImageAsset"    : "https://wallpaperaccess.com/full/767277.jpg",
            "BlogContent"   : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt.",
            "Likes"         : "500"
        },
        {
            "Title" : "Random Title23",
            "CategoryName"  : "Food",
            "PublishedDate" : "Aug 21 2021",
            "ImageAsset"    : "https://wallpaperaccess.com/full/826922.jpg",
            "BlogContent"   : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt.",
            "Likes"         : "501"
        },
        {
            "Title" : "Random Title24",
            "CategoryName"  : "Food",
            "PublishedDate" : "Aug 21 2021",
            "ImageAsset"    : "https://wallpapersmug.com/download/3840x2400/ebde76/delicious-pizza-food.jpg",
            "BlogContent"   : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt.",
            "Likes"         : "502"
        },
        {
            "Title" : "Random Title25",
            "CategoryName"  : "Food",
            "PublishedDate" : "Aug 21 2021",
            "ImageAsset"    : "https://wallpaperbat.com/img/37643-dark-chocolate-wallpaper-top-free-dark-chocolate-background.jpg",
            "BlogContent"   : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt.",
            "Likes"         : "503"
        },
        {
            "Title" : "Random Title5",
            "CategoryName"  : "Food",
            "PublishedDate" : "Aug 21 2021",
            "ImageAsset"    : "https://images8.alphacoders.com/484/thumb-1920-484717.jpg",
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