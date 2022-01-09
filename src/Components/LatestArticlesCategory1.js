import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import styles from '../AppStyles.module.css';
import { BlogContext } from "./BlogContext";
import TopPosts from "./TopPosts";


const LatestArticlesCategory1 = () => {
    const [loadMore, setLoadMore] = useState(false);
    const [loadMoreBtn, setLoadMoreBtn] = useState('Load More');
    const [arrow, setArrow] = useState(<i className="fas fa-arrow-down" style={ {color : 'orange'} }></i>);

    const {value1, value2} = useContext(BlogContext);

    const [bollywood] = value1;
    const [hollywood] = value2;

    const handleClick = () => {
        setLoadMore(!loadMore);
        if (loadMoreBtn === 'Load More') {
            setLoadMoreBtn('Load Less');
            setArrow(<i className="fas fa-arrow-up" style={ {color : 'orange'} }></i>);
        }
        else {
            setLoadMoreBtn('Load More');
            setArrow(<i className="fas fa-arrow-down" style={ {color : 'orange'} }></i>);
        }
    }


    return(
        <div className={styles.AllSections_Main}>
            <div className={styles.category1_Top}>
                <div className={styles.AllSections_Header}>Latest Articles</div>
                <hr className={styles.AllSections_Header_Line}/>
            </div>
            <div className={styles.category1_Bottom}>
                <div className={styles.category1_Bottom_Left}>
                    <div className={ styles.category1_Bottom_Left1 }>
                        {   // eslint-disable-next-line
                            bollywood.map((article, index) => {
                                if(!loadMore && index>=bollywood.length-3){
                                    return(
                                        <div key={index} className={ styles.category1_Card }>
                                            <div><img className={ styles.category1_Image } src={ article.ImageAsset } alt="From the Article"/></div>
                                            <div>
                                                <NavLink to={`/article/${article.Title}/${article.CategoryName}`} className={ styles.category1_Title }>{ article.Title }</NavLink>
                                                <div className={ styles.category1_BlogContent }>{ article.BlogContent }</div>
                                                <div>
                                                    <span className={ styles.category1_CategoryName }>{ article.CategoryName }</span>
                                                    <span className={ styles.category1_PublishedDate }> / { article.PublishedDate }</span>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                                else if (loadMore && index>=bollywood.length-5) {
                                    return(
                                        <div key={index} className={ styles.category1_Card }>
                                            <div><img className={ styles.category1_Image } src={ article.ImageAsset } alt="From the Article"/></div>
                                            <div>
                                                <NavLink to={`/article/${article.Title}/${article.CategoryName}`} className={ styles.category1_Title }>{ article.Title }</NavLink>
                                                <div className={ styles.category1_BlogContent }>{ article.BlogContent }</div>
                                                <div>
                                                    <span className={ styles.category1_CategoryName }>{ article.CategoryName }</span>
                                                    <span className={ styles.category1_PublishedDate }> / { article.PublishedDate }</span>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            })
                        }
                    </div>
                    <div><button className={ styles.loadMore_Btn } onClick={handleClick}>{arrow}{loadMoreBtn}</button></div>
                    <div>
                        {   // eslint-disable-next-line
                            hollywood.map(  (article, index) => {
                                if(index>=hollywood.length-1) {
                                    return(
                                        <div className={ styles.category2_Card } key={index}  style={   {backgroundImage: `url(${article.ImageAsset})`,
                                                                                                         backgroundPosition: 'center',
                                                                                                         backgroundSize: 'cover',
                                                                                                         backgroundRepeat: 'no-repeat' }  }>
                                            <div className={ styles.category2_Child}>
                                                <NavLink to={`/article/${article.Title}/${article.CategoryName}`} className={ styles.category2_Title}>{ article.Title }</NavLink>
                                                <div className={ styles.category2_NameAndDate}>{ article.CategoryName } / { article.PublishedDate }</div>
                                            </div>
                                        </div>
                                    )
                                }
                            })
                        }
                    </div>
                </div>
                <div className={styles.category1_Bottom_Right}>
                    <div className={ styles.category1_Bottom_Right1}>
                        <div className={ styles.advertisement }>Advertisement</div>
                    </div>
                    <div className={ styles.category1_Bottom_Right2}>
                        <TopPosts/>
                        {/* <div className={ styles.TopPosts_Bottom}>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LatestArticlesCategory1;


// eslint-disable should be done to avoid the error on the arrow of the map function.
// The error says: Array.prototype.map() expects a value to be returned at the end of arrow function




// const  a = [
//     {id : 10, title:"ABc_First"},
//     {id : 11, title:"ABc_Second"},
//     {id : 12, title:"ABc_Last"}
// ]

// {
//     a.map((article, index) => {
//         if(index<a.length-1){
//             return(
//                 <div key={index}>
//                     {article.title}
//                 </div>
//             )
//         }
//     })
// }


// A code version that works according to the Load More button below:
// 
// {
//     a.map((article, index) => {
//         if(!loadMore && index>=a.length-1){
//             return(
//                 <div key={index}>
//                     {article.title}
//                 </div>
//             )
//         }
//         else if (loadMore && index>=a.length-3) {
//             return(
//                 <div key={index}>
//                     {article.title}
//                 </div>
//             )
//         }
//     })
// }
// 
// In the above code, if the initial state of "loadMore" is false then 
// only the last objects data will be printed out inside the single div jsx.
// If "loadMore" is true then the last three objects data will be fetched and
// printed inside 3 separate divs of jsx.
// This is the concept which can be used for the original code.

// What does the below line of code mean?
// 
//          !loadMore && index<=bollywood.length-3 && index>=bollywood.length-5
// 
// It means that: When "loadMore" is false and 
// the index is less than or equal to the 3rd last index and
// the index is more than or equal to the 5th last index.
// Which means it will display the 3rd last, 4th last and 5th last objects.

