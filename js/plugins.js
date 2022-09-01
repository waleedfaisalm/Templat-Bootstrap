
/*
    --- hide() : معنتة اخفلي شي معين
*/

/* 
$(document).ready(function() {

    // $("P").hide();
    $("P").css("color", "red");
});
*/





/*
    Events 
    --- click() : عند الضغط عنة ينفذ لي شي معين
    --- dblclick() : عند الضغط عنة مرتين ينفذ لي شي معين
    --- mouseenter() : عندما اشر بي الموس علية  ينفذ لي شي معين
    --- mouseleave() : عنما ابعد الموس من فوقة ينفذا لي شي معين
    --- hover() : ينفذ لي شي معين وكمان يقبل ثنتين فنكشن hover عند ال 

*/
/*
$(document).ready(function() {

    $("button").click(function() {
        // $("P").hide();
        // $("P").css("color", "red");
        // $(this).hide();
        $("button").hide();
    })


    $("button").dblclick(function() {

        // $("p").hide();
        $(this).hide();
    })


    $("button").mouseenter(function() {

        $(this).css("color","#00F");
        
    })


    $("button").mouseleave(function() {

        $("p").css("color","#F00");
        
    })


    $("button").hover(function() 
    {
        $(this).css("color","#00F");
        $("p").css("color", "#080");
        
    },
    function()
    {
        $(this).css("color","#F00");
        $("p").css("color", "#676767");

    });
});
*/





/*
    Effects
    --- hide(Speed, callback) : دلة بتخفي العنصر 
    --- show() : دلة بتضهر العنصر 
    --- toggle() : دلة لو عندي العنصر مخفي يظهرة لو عندي العنصر ضاهر يخفي يعني بيبدل بينهم
*/
/*
$(document).ready(function()
{ 
    $("button").click(function() 
    {
        $("p").hide(2000);
        $("p").hide(3000, function(){
            $("span").show()
        });

        $("p").hide(3000, function(){
            $("button").hide()
        });

        $("p").hide("slow", alert("Pargraph Is Hidden"));

        
        $(this).hide();

        $("p").show();


        $("p").show(3000,function() {
            $("span").toggle();
        });



        $("p").toggle();

        $("p").toggle(3000,function() {
            $("span").toggle();
        });




    });

});
*/





/*
    Effects 
    --- fadeIn(Speed, callback) : show دلة بتضهر العنصر في حالة العنصر مخفي نفس عمل دلة 
    --- fadeOut(Speed, callback) : hide دلة بتخفي العنصر نفس دلة 
    --- fadeToggle() : دلة لو عندي العنصر مخفي يظهرة لو عندي العنصر ضاهر يخفي يعني بيبدل بينهم
    --- fadeTo(Speed, Opacity, callback) : بيفعل شفافية لحد معين ميخفيش العنصر
    */

/*
$(document).ready(function() 
{ 
    $("button").click(function()
    {
        $("div").fadeIn();
        $("div").fadeIn(2000, function() {
            $("span").fadeIn(2000);
        });

        $("div").fadeOut(2000, function() {
            $("span").fadeOut(2000);
        });


        $("div").fadeToggle(2000, function() {
            $("span").fadeToggle(2000);
        });

        $("div").fadeTo(2000, 0.5, function() {
            $("span").fadeOut();
        });


    });

});
*/

/*
    slideDown() :  دلة لو العنصر مخفي بيضهر العنصر 
    slideUp() :  دلة لو العنصر موجود بيخفي العنصر  
    slideToggle() : دلة لو عندي العنصر مخفي يظهرة لو عندي العنصر ضاهر يخفي يعني بيبدل بينهم
    fadeOut() : دلة بتخفي العنصر
    fadeIn() : دلة بتضهر العنصر 
    
*/
/*
$(document).ready(function()
{
    $(".open").click(function(){
        $(".box").slideDown();

    });

});

$(document).ready(function()
{
    $(".open").click(function(){
        $(".box").slideUp(2000);

    });

});

$(document).ready(function()
{
    $(".open").click(function(){
        $(".box").slideToggle(2000);

    });

});
*/


// syntex : animate ( {css properties }, Speed, Callback Function)
/*
$(document).ready(function()
{
    $("div").animate( {
        width:'500px'
    }, 2000, function() { $("span").fadeIn(1000); });

})
*/



/*
$(document).ready(function()
{
    $("div").slideUp(2000);
    $("div").slideDown(2000);
    $("div").fadeOut(2000);
    $("div").fadeIn(2000);


    var div = $("div");

    div.slideUp(2000);
    div.slideDown(2000);
    div.fadeOut(2000);
    div.fadeIn(2000);


    $("div")
    .css( { background: '#F00'})
    .slideUp(2000)
    .slideDown(2000)
    .fadeOut(2000)
    .fadeIn(2000)
    .hide(1000)
    .show(1000)
    .animate( { width: '600px', height: '600px'}, 1000);
    

});
*/

/*
    text() : معنتة اضيف نص معين 
    html()
    val() :  GET يجيب البيانات من الصفحة 
    attr() : SET اضيف بيانات لصفحة 
*/
/*
$(document).ready(function()
{
    var div = $("div").text();
    $("p").text(div);

    var div = $("div").html();
    $("p").html(div);

    alert(div);

    $("button").click(function () {

        $("input").val("This Value From jQuery");

        $("div.result").text("You Have Wrote: " + $("input").val() );
        alert("You Have Wrote: " + $("input").val());

        $("input").val( $("a").attr("href") ); // GET
        $("a").attr("class", "jquery"); // SET
    });
});
*/




/*
    append() : لاضافة الحاجة في اخر العنصر 
    prepend() : لاضافة الحاجة في اول العنصر 
    before() : قبل الاب div لاضافة الحاجة قبل ال 
    after() : بعد الاب div لاضافة الحاجة بعد ال 
    appendTo() :  لاضافة الحاجة في اخر العنصر لاكن العكس
    prependTo() : لاضافة الحاجة في اول العنصر لاكن العكس 
*/

/*
$(document).ready(function() {
    $("div").append("<p> Hello </p>");
    $("div").prepend("<span> <a href='#'>Google </a> </span>");
    $("div").before("<span> <a href='#'>Google </a> </span>");
    $("div").after("<span> <a href='#'>Google </a> </span>");

    $("<p> Hello </p>").prependTo("div");

});
*/



/*
    Remove() : بتحذف العنصر من الصفحة تمامن بيحذف الاب مع الابناء الي جوة
    empty() : بيفضي محتوة العنصر 
    addClass() : لاضافة اسم كلاس للعنصر
    removeClass() : لاحذف اسم كلاس لعنصر معين
    toggleClass() : خصية عند الضغط علية يخفي اسم الكلاس اضغط مرة ثاني يرجع اسم الكلاس 
    css() :  css من ملف ال css دلة نجيب فية خصائص ال 
*/
/*
$(document).ready(function() {

    $("button").click(function () {
        // $("div").remove();
        $("div").empty();

        $("p").addClass("custom");
        $("div.waleed, p, span").addClass("custom br").removeClass("waleed");
        $(this).toggleClass("waleed");

        var color = $("p").css("color");




    })
})
/*
    width(): docmint خصية تجبلي عرض الصفحة تتعامل مع ال 
    innerWidth() : padding خصية تجبلي عرض الصفحة  تتعامل ال 
    height() : خصية تجبلي طول الصفحة 

*/

/*
$(document).ready(function() {

    var dw = $(document).width();
    var dw = $(document).height();
    var dw = $(document).innerWidth();
    console.log(dw);
});
*/



/*
    --- parent() : معنها الاب بتاع العنصر الي انا فية 
    --- parents() : معنها الاباء كلها ونت طالع او احداد كلاس معين يجيبزة لي من وسط الاباء 
    --- parentsUntil() : لاكن لو حددت لة اسم كلاس يضل يمشي لو يوصل لعند الكلاس الي حددتة بيوقف عندة  parents معنها الاباء كلها ونت طالع نفس ال 
    --- children() : بتجيب اول طفل فقط الي تحتة علا طول يعني اجيب العنصر الابن للاب الي انا فية 
    --- find() : بتبحث لاخر شي لاخر الجذوار 
    --- siblings() : معنتة اختار الاشقاء بتاع العنصر مش علا العنصر نفسة لا علا الاشقاء معنتة  اخواتي الي جنبي 
    --- next() : معنتة العنصر الي بعدة 
    --- prev() : معنتة العنصر الي قبلة
    --- nextAll() : معنتة جميع العناصر الي بعدة 
    --- prevAll() : معنتة جميع العناصر الي قبلة  
    --- nextUntil() : nextAll معنتة جميع العناصر الي بعدة نفس ال 
    --- prevUntil() : prevAll معنتة جميع العناصر الي قبلة  نفس ال 
    --- first() : معنتة اول عنصر 
    --- last() : معنتة اخر عنصر 
    --- eq(2) : بتقبل رقم نجتيف او بزتيف علاشان تحدد عنصر معين  
    --- filter() : معنتة يفلتر العناصر الي تحددة لة 
    --- not() :  filter معنتة يفلتر العناصر لاكن بس طلعلي العنصر الي محددة لاتفعليش فيبة حاجة وطبقلي الفلتر في جميع العناصر الباقي يعني عكس ال 
    */
/*
$(document).ready(function () {
    $("span").parent().css("border", "1px solid #00F");
    $("span").parent().css( {
        padding: '20px',
        border:'1px solid #080',
        width:'80%',
        borderRadius:'10px'
    });

     $("p").parents().css("border", "1px solid #00F");
    $("p").parents(".top").css("border", "1px solid #00F");

    $("span").parentsUntil(".last").css("border", "1px solid #00F");

    $("p").children().css("border", "1px solid #F00");
    $("section").find("span").css("border", "1px solid #F00");

    $("div:contains('jQuery')").siblings() .css("border","5px solid #00F");

    $("div, p").click(function (){

        $(this).next().fadeOut(2000);
        $(this).nextAll().css("background", "#F00");
        $(this).prev().fadeOut(2000);
        $(this).prev(".test").fadeOut(2000);
        $(this).prevAll().css("background", "#F00");
        $(this).nextUntil().css("background", "#F00");
        $(this).prevUntil().css("background", "#F00");
    });


    $("div").first().css("border","5px solid #00F");
    $("div").first().next().css("border","5px solid #00F");

    $("div").last().css("border","5px solid #00F");
    $("div").last().prevAll().css("border","5px solid #00F");

    $("div").eq(2).css("border","5px solid #00F");
    $("div").eq(-2).prevAll().css("border","5px solid #00F");


    $("div").filter(".jquery").css("border","5px solid #00F");
    $("div").filter( $(".jquery")).css("border","5px solid #00F");

    $("div").filter( function (waleed){
        return waleed === 3;
    }).css("border","5px solid #00F");

    $("div").not(".jquery").css("border","5px solid #00F");
    $("div").not( $(".jquery")).css("border","5px solid #00F");

    $("div").not( function (waleed){
        return waleed === 1;
    }).css("border","5px solid #00F");


    $("div").not(":contains('jquery')").css("border","5px solid #00F"); //لونها لي  jquery الي مافيهاش كلمة  div معنتة ال 
    $("div").filter(":contains('jquery')").css("border","5px solid #00F"); // لونها لي  jquery الي فيها كلمة  div معنتة ال 



});
*/




/*
    Selectors 
    --- $("*") : معنتة كل العناصر 
    --- first : بتجيب اول عنصر في الصفحة لة اب فقط
    --- first-child : بتجيب اول عنصر لة  اين كان في كل الصفحة 
    --- last :  بتجيب اخر عنصر  في الصفحة لة اب فقط
    --- last-child : بتجيب اخر عنصر لة  اين كان في كل الصفحة
    --- first-of-type : p معنتة اول طفل نوعة مثلا 
    --- last-of-type : معنتة اخر طفل من نوعة 
    --- nth-child(2) : ويبدا يعد من الاول للاخر  p معنتة بيجبلي ثاني طفل لاي اب ويكون نوعة مثلا 
    --- nth-last-child(2) : معنتة بيبد يعد من الاخر للاول 
    --- nth-of-type(2) : لاكن بمشي من الاول للاخر p معنتة بيجبلي ثاني طفل من نوع مثلا 
    --- nth-last-of-type(2) : لاكن بمشي من الاخر للاول p معنتة بيجبلي ثاني طفل من نوع مثلا 
    --- only-child : معنتة الطفل الوحيد للاب بتاعة 
    --- only-of-type : معنتة يكون لوحدة  p معنتة الطفل الوحيد للاب لاكن نوعة مثلا 
    --- div > p :  p معنتة اول طفل تحصلة دجاهك جو الديف يكون نوعة  
    --- div  p : جو الديف p معنتة جبلي اي 
    --- div + p :  معنتة جبلي البرجرف الي بعد الديف علا طول 
    +  : معنتة الي بعدة علا طول 
    --- div ~ p : معنتة جبلي البرجراف الي هم الاشقاء لديف
    --- gt(1) : معنتة اكبر من واحد وانت طالع
    --- lt(1) : معنتة اقل من واحد وانت نازل  

    --- :header : h6 الا  h1 خاصية تتعامل مع من
    --- :animated : معنتة اي حاجة تتحرك بي الصفحة بتفعلها الخواص الي تشتيها 
    --- focus() : خصية او تفتحت الصفحة يحصلي الفوكس علية علا طول عشان ابد اكتب دخل الحقل
    --- div:contains('javascript') : معنتة يحتوي علا كلمة جفاء اسكريبت contains  
    contains : عن طريقها ابحث عن كلمة معينة دخل الصفحة ونسقها علا ماشتي 
    --- div:has('p') : معنتة اشتي ديف جو عنصر  برجراف 
    --- :empty : معنتة العناصر الفاضية بضفحة افعل خواص لها 
    --- :parent : empty معنتة العناصر الي فية عنصر او اب يعني عكس ال 
    --- :hidden : يدوار علا العناصر المخفية  ومثلا ويضهرهم لي او يحذفهم او اي حاجة 
    --- :visible : hidden العناصر الضاهرة قدامي يعني عكس ال 
    --- :root : بختار الروات الخاص بي الصفحة 

*/

/*
$(document).ready(function () {
    $("*").click(function() {
        $(this).fadeOut(500);
    });

    $("body *").css("border","2px solid #00F");

    $(".waleed").css("border","2px solid #00F");
    $("#waleed").css("border","2px solid #00F");
    $(".waleed, .kalil").css("border","2px solid #00F");

    $("div").css("border","2px solid #00F");
    $("p, div, aside").css("border","5px solid #00F");

    $("div:even").css("border","5px solid #00F"); // div:even : بيلوان الاول ويفلت الي بعدة وهكذ 
    $("div:odd").css("border","5px solid #00F");

    $("p:first").css("border","5px solid #00F");
    $("p:first-child").css("border","5px solid #00F");

    $("p:last").css("border","5px solid #00F");

    $("p:last-child").css("border","5px solid #00F");

    $("p:first-of-type").css("border","5px solid #00F");
    $("p:last-of-type").css("border","5px solid #00F");

    $("p:nth-child(2)").css("border","5px solid #00F");
    $("p:nth-last-child(3)").css("border","5px solid #00F");

    $("p:nth-of-type(2)").css("border","5px solid #00F");
    $("p:nth-last-of-type(2)").css("border","5px solid #00F");

    $("p:only-child").css("border","5px solid #00F");
    $("p:only-of-type").css("border","5px solid #00F");
    $("div > p").css("border","5px solid #00F");
    $("div  p").css("border","5px solid #00F");

    $("div + p").css("border","5px solid #00F");
    // $("div ~ p").css("border","5px solid #00F");


    $(":header").css("color","#00F");
    $("div").animate( {width: '500px'}, 8000);
    $("div").animate( {height: '300px'}, 8000);

    $("p").animate( {width: '500px'}, 8000);

    $("h3").click(function () {
        
    $(":animated").css( {background: '#F00',color: '#FFF'});


    });

    $("input").focus();
    $(":focus").css("padding","20px");

    $("div:contains('javascript')").animate( {width: '500px'}, 8000).css("background", "#F00" );

    $("div:has('p')").css("color","#080");
    $("div:has('.waleed')").css("color","#080");

    $(":empty").css("background", "#080");
    $(":parent").css("border", "1px solid #F00");



});
*/

/*
    Events
    --- bind() : event فكرتة يمكن افعل اكثر من 
    --- on(Event, Child Selector[optinal], Data, Function, Map) : click معنتة اول مضغط علا شي معين مثلا ال 
    --- preventDefalt() : معنتة منع الافتراضي علا عنصر معين 
    --- isDefaultPrevented() : معنتة هل هيا الافتراضي بتعها ممنوع الافتراضي ولا لا
    --- keydown() : معنتة ونت رايح تضغط علا الزار او الفرم ينفذ  لي حاجة معينة
    --- keypress() : معنتة تضغط علا الزرار او الفرم ينفذ لي حاجة معينة
    --- keyup() : معنتة لما ابعد من عند الزرار او من الفروم ينفذ لي حاجة معينة 
    --- change() : خصية لما ابعد عن الفورم تشتغل 
    --- focus() : خصية لما اكتب بي الفرم طولي ينفذ لي حاجة معينة 
    --- blur() : خصية لما اكتب بي الفرم وبعد عن الفرم ينفذ لي حاجة معينة
    --- one() : مرة وحدة بس  event خصية بتنفذ ال 
    --- select() : معنتة اختيار مثلا عند الضغط علا كود او شي يفعل نسخ 
    --- resize : خصية اعادة تحجيم لشاشة مثلا اصغره الشاشة 
    --- scroll : خصية تفعل اسكرول يعني في حال لم تنزل يفعل شي معين وهكذا 
    --- offset() : خصية بيقدر يخليك تتحكم في مكان العنصر فين في الصفحة بناء علا مكان العنصر اضهر حاجة جنبة 
    --- submit() : خصية ممكن من خلالها مثلا اخلي مايشتغلش الا لما اعمل حجات معينة 

*/
/*
$(function () {
    "use strict";

    // Single Event
    $(".notmal").bind("click" ,function () {
        $(this).hide();

    });
      
    // Multi Event
    $(".notmal").bind("mouseenter mouseleave" ,function () {
        $(this).toggleClass("color");

    });

    // Event Map : لها فنكشن وهكذا event فكرتة كل 

    $(".map").bind( {
        click: function() { 
            $(this).text("You Have Clicked Me");

        },
        dblclick: function() { $(this).text("You Have Double Clicked Me"); },
        mouseenter: function() { $(this).text("You Have Mouse  Me On"); },
        mouseleave: function() { $(this).text("the mouse has gone"); },

    });

    // Custom Event : باسمي Event معنتة اشتي افعل 

    $(".custom").bind("myCustomtEvent" ,function (even, myname, myAge) {
        $(this).text("Hello " + myname + myAge) ;

    });
    $("button").click(function () {
        $(".custom").trigger("myCustomtEvent", ["waleed ", "22"]);

    })

})



$(function () {
    

     // Single Event  With On

    $(".normal").on("click", function () {
        $(this).hide();

    });

      // Multi Event With On

    $(".normal").on("mouseenter mouseleave" ,function () {
        $(this).toggleClass("color");

    });

    $("button").on("click", function () {
        $("<p>This Is Created p </p>").insertAfter($ (this));

    });

    $("body").on("click", "p", function () {
      $(this).fadeOut(1000);

    });


    $("p").one("click dblclick", function () {
        $(this).animate( {
            fontSize: "+=3px"
        });
    })


    $("textarea").on("click", function() {
        $(this).select();
    })

    $(window).on("scroll", function() {

        console.log("You Are Scrolling Now");
    });



});

*/



/*
    Effects Reference
    --- delay() : الخاصة بي لغة الجفاء اسكربت setTimeOut خاصية تاخر كود معين او شي معين يتنفذ نفس خاصية 
   
*/
/*
$(function () {
    
    $("button").click(function () {
        $("span").text("Hello Message From jQuery").fadeIn(1000).delay(5000).fadeOut(1000);
    });
});
*/




/*
    Html/Css Reference 
    --- clone() : معنتة الاستنسخ يعني انسخ عنصر بي العناصر الي جوة لي مكان ثاني اشتيه
    --- remove() : الي جوة مع كل شي  event خصية بتحذف العنصر مع العناصر الي جوة مع  
    --- datach() : بتعهم عشان لو اشتي ارجعهم مرة ثاني واستخدمها  event خاصية بتحذف العنصر مع العناصر الي جوة لاكن تحفضهم تحفض معاهم ال 
    --- hasclass() : خاصية بتعرفك وتشيك هل العنصر هذا يحتوي علا كلاس معين ولا لا بناء علة بتعمل ال يشتي 

*/

// $(function () {
    
    // $("button").on('click', function () {

    //     $('div').clone().appendTo('body');
    // })

    // var ele = $('div');

    // $('#remove').on('click', function () {

    //     ele.detach();
    // });

    // $('#add').on('click', function () {
        
    //     $('body').prepend(ele);

    // });

    // ele.on('click', function () {

    //     $(this).css('color', "#00F");
    // });

//     $('li').each(function () {

//         if ($ (this).hasClass('active')) {

//             $(this).css('color', "#F00");
//         }
//     });

// });

// $(document).ready(function () {
//     $(".carousel").carousel( {
//         interval:500
//     });

// });


// });
