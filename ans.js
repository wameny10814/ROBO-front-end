/* All following exams please using Javascript only 20220922 */
1.
/**
There is an array, each item has such format:
{firstName: 'xxx', lastName: 'xxx', customerID: 'xxx', note: 'xxx', profession: ‘xxx’}
lastName, note can be empty, customerID can only be a set of digital numbers.
profession can only have ‘student’, ‘freelancer’, ‘productOwner’, ‘engineer’ or
‘systemAnalytics’.
**/
/**
Q1. Please follow the principle (‘firstName’ + ‘lastName’ + ‘customerID’) to sort this
array and print it out.
**/
const user = [
    { firstName: 'John', lastName: 'Doe', customerID: '102', note: 'VIP', profession: 'engineer' },
    { firstName: 'Jane', lastName: 'Smith', customerID: '101', note: '', profession: 'freelancer' },
    { firstName: 'Alice', lastName: '', customerID: '103', note: 'new', profession: 'student' }
  ];
function sortUserName(user) {
    user.forEach(element => {
        let format = `${element.firstName}+${element.lastName}+${element.customerID}`
        console.log('format',format);
    });

    
}
/**
Q2. Please sort by ‘profession’ to follow the principle.
(‘systemAnalytics’ > ‘engineer’ > ‘productOwner’ > ‘freelancer’ > ‘student’’)
**/
function sortByType(user) {
    //設定階層 ‘systemAnalytics’ == 5 ‘engineer’==4 ‘productOwner’==3 ‘freelancer’==2 ‘student’’==1
    const professionOrder = {
        'systemAnalytics': 5,
        'engineer': 4,
        'productOwner': 3,
        'freelancer': 2,
        'student': 1
    };

    const professionOrderreverse = {
        5: 'systemAnalytics',
        4:'engineer',
        3:'productOwner',
        2:'freelancer',
        1:'student'
    };

    const newUserArray = user.map(person => {
        return {
            ...person,  
            profession: professionOrder[person.profession] || 0 
        };
    });

    newUserArray.sort((a, b) => {
        return b.profession - a.profession;
    });


    let userResult = newUserArray.map(person => {
        return {
            ...person,  
            profession: professionOrderreverse[person.profession] 
        };
    });

    console.log('userResult',userResult);
    

}
sortByType(user);

2.
/** HTML
<div class="container">
 <div class="header">5/8 外出確認表</div>
 <div class="content">
 <ol class="shop-list">
 <li class="item">麵包</li>
 <li class="item">短袖衣服</li>
 <li class="item">飲用水</li>
 <li class="item">帳篷</li>
 </ol>
 <ul class="shop-list">
 <li class="item">暈車藥</li>
 <li class="item">感冒藥</li>
 <li class="item">丹木斯</li>
 <li class="item">咳嗽糖漿</li>
 </ul>
 </div>
 <div class="footer">以上僅共參考</div>
 </div>
**/
/** CSS
.container {
 font-size: 14px;
}
.container .header {
 font-size: 18px;
}
.container .shop-list {
 list-style: none;
 margin-left: -15px;
}
.container .shop-list li.item {
 color: green;
}
.container .shop-list .item {
 Q1. /* Explain why does this color not works, and how to fix make it work on 1st list */
 color: blue;
}

 //ans: 因為有上一個css選擇器 .container .shop-list li.item，比起.container .shop-list .item，在classname .item 多了一個選擇元素li，特別指了li 元素底下的.item，故權重較高

Q2. /* Write styling make every other line give background color to next one */

//  .container .shop-list li.item:nth-child(even) {
//     background-color: #f0f0f0; /* 偶數行背景色 */
//  }
 



3.
/**
let items = [1, 1, 1, 5, 2, 3, 4, 3, 3, 3, 3, 3, 3, 7, 8, 5, 4, 9, 0, 1, 3, 2, 6, 7, 5,
4, 4, 7, 8, 8, 0, 1, 2, 3, 1];
Please write down a function to console log unique value from this array.
**/
function getUniqueNumber (items) {

    const uniqueItems = items.filter((item, index) => {
        return items.indexOf(item) === index;
      });
    
      console.log(uniqueItems);
}
4.
/** What is different between <section> and <article>, can you make an example how you
will be using it? **/
{/* <section> and <article> 最大的差別在於獨立性
    section and article 標籤，都是表示一個區塊裡面擁有一個特定主題，但是section 通常代表一個大區塊，例如一個產品官網，可以有很多個section 關於產地 功能等等
    article 標籤傾向獨立主題，例如功能 可以寫成
    <section>
        <article>功能一</article>
        <article>功能二</article>
    </section>
    section 代表功能區塊，每個功能相互獨立使用article
 */}
5.
/** Please explain about what is CSS boxing model and the layout components that it
consists of.
**/

/**
 *BOX MODEL 為CSS 盒模型，想像一個正方形盒子，
 內容為中間為這個區塊核心內容可控制主要長寬 
 內容四邊有邊框BORDER，可想像為內容四邊的邊線
 邊框跟內容中間有PADDING 內邊距
 每個盒子上下左右有外邊距MARGIN 控制盒子跟四周其他盒子的距離
 * **/


6.
/** Can you explain CSS priority, and what principle are your used to writing CSS
stylesheet. **/
/**
 * !important 最高 > inline style > id > classname & 偽類(:hover、:focus)、屬性選擇器( input[type=text]) > 元素選擇器 &  偽元素：p::first-letter { font-size: 20px; } 
 * **/
7.
/** Can you introducing some of Semantic HTML elements that you already know and how you
used it ever, please make some example. **/
/**
Semantic HTML 稱為語意型標籤，帶有語意的標籤。對SEO友善，無障礙友善，以及便於開發者在看到HTML架構時更能夠快速理解
個人使用經驗為
<nav></nav> 網頁的導覽列
<section></section> 特定大主題欄位
<acticle></acticle> 獨立之主題欄位
<figure></figure> 引用圖片欄位
<form></form> 表單欄位
<button></button> 按鈕
<footer></footer> 通常表示網站版權所屬欄位
 * **/

8.
/** The photo below is a page structural layer, please according to SEO friendly rules
write down HTML base structure. Note. Mobile friendly first. **/
// .head {
//     display: flex;
 
// }
// .logo{
//     width: 40vw;
//     max-height: 50px;
//     overflow: hidden;
// }
// .logo img{
//     width: 100%;
// }
// .nav{
//     width: 60vw;
//     display: flex;
//     list-style-type:none
// }
// .hachi{
//     width: 50vw;
// }
// .hachi img{
//     width: 100%;
// }
// .maincontent{
//     display: flex;
// }
// .aside{
//     width: 50vw;
// }
{/* <header class="head">
<figure class="logo">  <img src="./hachi.png"></figure>
<nav>
    <ul class="nav">
        <li><a href="#section1">Home</a></li>
        <li><a href="#section2">About</a></li>
        <li><a href="#section3">Products</a></li>
        <li><a href="#section4">Contact</a></li>
    </ul>
</nav>
</header>
<main class="maincontent">
<figure class="hachi">
    <img src="./hachi.png">
</figure>
<aside class="aside">
    <section>item detail</section>
    <section>
        <ol>
            <li>item</li>
            <li>item</li>
            <li>item</li>
        </ol>
    </section>
</aside>
</main>
<footer> <p>&copy; 2024 Your Company Name. All Rights Reserved.</p></footer> */}