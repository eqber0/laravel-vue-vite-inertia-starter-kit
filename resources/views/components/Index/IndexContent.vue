<template>
    <div class="index__content">
        <img v-lazy="babelLogo" alt="" />
        <div>
            <h1 class="txt txt--px24 txt--font600 mt-5 text-center">
                {{ contentTitle }}
            </h1>
            <div class="icon__wrapper">
                <a href="#0" class="icon-item">
                    <Icon name="iconArrow" />
                </a>
                <a href="#0" class="icon-item">
                    <Icon name="iconFacebook" />
                </a>
                <a href="#0" class="icon-item">
                    <Icon name="iconInstagram" />
                </a>
                <a href="#0" class="icon-item">
                    <Icon name="iconLinkedin" />
                </a>
                <a href="#0" class="icon-item">
                    <Icon name="iconYoutube" />
                </a>
                <a href="#0" class="icon-item">
                    <Icon name="iconWhatsapp" />
                </a>
                <a href="#0" class="icon-item">
                    <Icon name="iconTwitter" />
                </a>
            </div>
            <div class="slider__wrapper">
                <swiper :slidesPerView="3" :spaceBetween="40" :loop="true">
                    <swiper-slide v-for="item in slides" :key="item">
                        <div class="slider-item">
                            <img :src="item.img" alt="" />
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/bundle";
import babelLogo from "@/images/babel-logo.png";

// Images
import swiperImg1 from "@/images/laravel-vite-logo.svg";
import swiperImg2 from "@/images/vue-logo.svg";
import swiperImg3 from "@/images/laravel-logo.svg";
export default {
    props: ["contentTitle"],
    components: {
        Swiper,
        SwiperSlide,
    },
    data() {
        return {
            babelLogo: babelLogo,

            slides: [
                {
                    img: swiperImg1,
                },
                {
                    img: swiperImg2,
                },
                {
                    img: swiperImg3,
                },
                {
                    img: swiperImg1,
                },
                {
                    img: swiperImg2,
                },
                {
                    img: swiperImg3,
                },
            ],
        };
    },
};
</script>

<style lang="scss" scoped>
@import "@/sass/config/variables";

.index {
    &__content {
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
}
.slider {
    &__wrapper {
        max-width: 40rem;
        margin-left: auto;
        margin-right: auto;
        margin-top: 4rem;
    }
    &-item {
        height: 5rem;
        display: flex;
        align-items: center;
        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }
}
.icon {
    &__wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 3rem;
        .icon {
            font-size: 1.9rem;
            color: #27353e;
        }
    }
    &-item {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 4rem;
        height: 4rem;
        border-radius: 1.6rem;
        background-color: var(--ui-bg);
        margin-right: 2rem;
        &:last-child {
            margin-right: 0;
        }
    }
}
</style>
