<template>
    <div class="readme">
        <div class="head"></div>
        <div class="resimg">
            <img src="../assets/hello.jpg">
        </div>
        <div class="constructme">
            <p class="name">小强</p>
            <p class="occupation">一只不断前行的前端攻城狮</p>
            <div class="school">
                <img src="http://oqjgod7s1.bkt.clouddn.com/school.png" class="img">
                <span>2016年毕业于广东省韩山师范学院</span>
            </div>
            <div class="mymsg">
                <span><img src="http://oqjgod7s1.bkt.clouddn.com/phone.png">
                    <a class="link-common">15820146603</a>
                </span>
                <span>
                    <img src="http://oqjgod7s1.bkt.clouddn.com/google.png">
                    <a class="link-common">jqwang1314@163.com</a>
                </span>
            </div>
            <div class="contact">
                <div>
                    <a href="https://github.com/JQ-wang" target="_blank"><img src="http://oqjgod7s1.bkt.clouddn.com/github.png"></a>
                </div>
                <div>
                    <a href="https://segmentfault.com/u/xiaoqiang123" target="_blank">
                        <img src="http://oqjgod7s1.bkt.clouddn.com/segmentfault.png"></a>
                </div>
                <div>
                    <a href="http://weibo.com/u/3781083922/home" target="_blank"><img src="http://oqjgod7s1.bkt.clouddn.com/weibo.png"></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
  export default{}

</script>

<style>
    .readme {
        width: 70%;
        margin: 0 auto;
        height: 100%;
    }

    .head {
        width: 100%;
        height: 140px;
        background: #999;
    }

    .resimg {
        width: 100%;
        height: 100px;
        margin-top: -50px;
    }

    .resimg img {
        display: block;
        z-index: 99;
        width: 100px;
        height: 100px;
        border: solid 3px rgb(255, 255, 255);
        border-radius: 50px;
        border-image-source: initial;
        border-image-slice: initial;
        border-image-width: initial;
        border-image-outset: initial;
        border-image-repeat: initial;
        margin: 0 auto;
    }

    .constructme {
        margin: 10px auto;
        width: 100%;
        letter-spacing: 3px;
    }

    .constructme .name {
        font-size: 30px;
        text-align: center;
        margin-top: 10px;
    }

    .constructme .occupation {
        font-size: 24px;
        text-align: center;
        margin-top: 20px;
    }

    .constructme .school {
        color: #666;
        font-size: 20px;
        margin-top: 20px;
    }

    .constructme .school img {
        display: inline-block;
        width: 25px;
        height: 25px;
        margin-left: 25%;
        margin-bottom: -3px;
    }

    .constructme .mymsg {
        margin-top: 25px;
        color: #666;
        letter-spacing: 0px;
        margin-left: 25%;
    }

    .constructme .mymsg span:first-child {
        margin-right: 10%;
    }

    .constructme .mymsg img {
        display: inline-block;
        width: 25px;
        height: 25px;
        margin-bottom: -5px;
    }

    .contact {
        width: 20%;
        display: flex;
        margin: 35px auto;
    }

    .contact img {
        width: 65%;
        cursor: pointer;
    }
    .contact img:hover {
        color: red;
    }
</style>
