$(document).ready(function () {

    // 네비 부분
    $(".nbtn>li>a").on("click", function(e) {
        console.log(this.hash)
        // let hash=this.hash;
        e.preventDefault();
        if (this.hash !== "") {
            let hash = this.hash;
            $("html,body").animate({
                scrollTop: $(hash).offset().top
            }, 800)
        }
    })


    
    // GyeongMin’s Web Portfolio 반짝이는 효과
    $(".Portfolio_name").hide()
    setInterval(function(){
        $(".Portfolio_name").fadeIn(1500,function(){
            $(".Portfolio_name").fadeOut(1000)
        })
    })





    // 텍스트 랜덤 변경
    function getRandomAlphabet(length){
        const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        const randomIndex = Math.floor(Math.random()*alphabets.length)
        return alphabets[randomIndex];
    }
    function getRandomString(baseStr){
        let result = "";
        for(i=0; i<baseStr.length; i++){
            let char = baseStr[i];
            if(/[A-Z]/.test(char)){
                result += getRandomAlphabet()
            }else{
                result += char;
            }
        }
        return result;
    }

    let baseText1 = $("#introText1").text();
    let baseText2 = $("#introText2").text();
    let baseText3 = $("#introText3").text();

    
    let intervalId = setInterval(function(){
        let randomStr = getRandomString(baseText1)
        $("#introText1").hide().text(randomStr).show()
    },100)

    let intervalId1 = setInterval(function(){
        let randomStr = getRandomString(baseText2)
        $("#introText2").hide().text(randomStr).show()
    },100)

    let intervalId2 = setInterval(function(){
        let randomStr = getRandomString(baseText3)
        $("#introText3").hide().text(randomStr).show()
    },100)


    setTimeout(function(){
        clearInterval(intervalId)
        $("#introText1").hide().text(baseText1).show()
    },3000)

    setTimeout(function(){
        clearInterval(intervalId1)
        $("#introText2").hide().text(baseText2).show()
    },4000)

    setTimeout(function(){
        clearInterval(intervalId2)
        $("#introText3").hide().text(baseText3).show()
    },5000)

    

    // skill 퍼센트 바 sec3 scrollTop의 위치하면 실행
    $(function(){
        let executed = false;

        $(window).on("scroll", function () {
            if(executed) return;
    
            let scrollPos = $(window).scrollTop()
            let secTop = $(".sec3").offset().top
    
            if (scrollPos >= secTop - 500) {
                $(".skill_bg").each(function(i){
                    let skill = $(this).find(".skill_bar");
                    let num = 0;
                    
                    // parseInt 숫자만 나오도록
                    let percent = parseInt(skill.text())
                    
                    skill.delay(i * 1000).animate({
                        width : percent + "%"  //넓이 증가
                    },function(){
                        let increase = setInterval(function(){
                            num++
                            if(num > percent){
                                clearInterval(increase)
                            }else{
                                skill.text(num + "%")
                            }
                        },1)
                    })
                })
                executed = true;
            }
        })
    })
   






    //work experience 문구
    $(".experience").hide()
    $(window).on("scroll",function(){
        let top1 = $(".sec4").offset().top
        let top2 = $(".sec5").offset().top
        let scrollpostion = $(window).scrollTop()
        

        if(scrollpostion > top1 - 500 && scrollpostion < top2 - 400){
            $(".experience").fadeIn(500)
        }else{
            $(".experience").fadeOut(500)
        }
    })



    // work 내용창
    let intro_work = [
        {
            text : "zero waste",
            src : "./img/zero.png",
            borderTop : "5px solid #fa41c7",
            desc : "web/ 우리의 작은 실천이 지구를 구합니다! 🌍 Zero waste는 일상 속 불필요한 쓰레기를 줄이고, 자원 순환을 통해 지속 가능한 삶을 만들어가는 환경 캠페인입니다. '쓰레기를 줄이는 것이 곧 미래를 지키는 길!'⌛ 이곳에서 작은 변화를 시작해 보세요 우리의 생활이 모여 지구를 더 깨끗하고 건강하게 만듭니다.✨ ",
            link : "https://ghdrudals.github.io/zerowaste/",
        },
        {
            text : "ssg landers",
            src : "./img/ssg.png",
            borderTop : "5px solid #FF4C1E",
            desc : "web/ '세상에 없던 프로야구단'⚾️, 인천을 야구의 성지로 SSG 랜더스를 통해 기존과는 다른, 혁신적인 야구 문화를 선보이고자 합니다.🧢 단순히 야구 경기만이 아닌, 팬들에게 다양한 즐거움과 경험을 주는 구단, 인천의 새로운 랜드마크를 만들고, 야구와 엔터테인먼트를 결합한 스포테인먼트 산업을 선도하겠다는 포부를 가지고 있습니다.🥇 ",
            link : "https://ghdrudals.github.io/ssg-Landers/",
        },
        {
            text : "no1showman",
            src : "./img/no1.png",
            borderTop : "5px solid #00E988",
            desc : "web/ 매년 여름 인천광역시에서 열리는 음악 축제 입니다.🎶 국내외 최정상급 록,인디,얼터너티브 등 다양한 장르의 뮤지션들이 참여하며🎤, 음악 팬들에게 다채로운 경험을 제공합니다.🕺 펜타포트라는 이름은 5개의 항구 (인천공항, 인천항, 정보포트, 비즈니스포트, 레저포트)를 의미하며, 인천광역시의 도시 발전 전략을 담고 있습니다.",
            link : "https://ghdrudals.github.io/no1showman/",
        },
        {
            text : "lotte",
            src : "./img/lot.png",
            borderTop : "5px solid #933FED",
            desc : "web/ 롯대월드 민족 박물관은 우리 민족의 역사와 전통문화가 살아 숨쉬는 공간입니다.🎎 우리 민족 고유의 역사와 다양한 문화유산들을 시대별로 감상할 수 있습니다.🏯 어린이와 가족이 함께 즐길 수 있는 교육·체험 프로그램 👨‍👩‍👧👧을 경험할 수 있는 롯데월드 민속박물관에서 경험해 보세요. 🌟",
            link : "https://ghdrudals.github.io/lotte/",
        },
    ]


    $(".sec4_img").on("click",function(){
        let num = $(".sec4_img").index(this)

        $(".site_img_txt").find("h3").text(intro_work[num].text)
        $(".site_img").find("img").attr("src",intro_work[num].src)
        $(".sec4_img_intropage").css("border-top",intro_work[num].borderTop)
        $(".site_img_txt").find("p").text(intro_work[num].desc)
        $(".site_img_title").find("a").attr("href",intro_work[num].link)

        $(".sec4_intropage_background").fadeIn()
    })
    
    $(".sec4_intropage_button").on("click",function(){
        $(".sec4_intropage_background").fadeOut()
    })




}) //jquery end