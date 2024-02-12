<script setup lang="ts">
import 'mdui';
import 'mdui/mdui.css';
// import { getColorFromImage } from 'mdui/functions/getColorFromImage';
import { setColorScheme } from 'mdui/functions/setColorScheme';

// const img = new Image();
// img.src = './bg.png';
// getColorFromImage(img).then(e=>setColorScheme(e));
setColorScheme('#656d88');

</script>

<template lang="pug">
#bg
.container
  #left
    .container
      h1.title
        | Hi!
        br
        span Hellolin
        br
        | Here.
      .btns
        mdui-button(icon='book' end-icon='arrow_forward' href='https://blog.hellolin.top/' target='_blank') Blog
        br
        mdui-button(variant='tonal' icon='bookmarks' end-icon='arrow_forward' href='https://note.hellolin.top/' target='_blank') Notes
        br
        mdui-button(variant='tonal' icon='code' end-icon='arrow_forward' href='https://github.com/hellolin-oi' target='_blank') GitHub
        br
        mdui-tooltip(variant='rich' content='Under developing...' placement='bottom' trigger='click hover focus')
          mdui-button(variant='tonal' icon='apps' end-icon='arrow_forward') Apps
      mdui-button.down(disabled variant='text' icon='arrow_downward')
        | Scroll down!
  #right
    .container
      .info
        h2 About me
        mdui-list
          mdui-list-item(description='No.4 Middle School of Linyi' icon='school' rounded) Developer & OIer & Student
          mdui-list-item(description='UTC+8' icon='location_city' rounded) Shandong, China
          mdui-list-item(description='Always learning!' icon='language' rounded) zh-CN (Native) / en-US / ja-JP
          mdui-list-item(description='Most used languages' icon='computer' rounded) C++, TypeScript, C#, Kotlin
          mdui-list-item(description='Click to email me' icon='email' rounded href='mailto://hellolinoi@outlook.com') hellolinoi@outlook.com
          mdui-list-item(description='Click to view my PGP Public Key' icon='key' rounded href='https://github.com/hellolin-oi.gpg' target='_blank') Key ID: 6D27 69C0 6088 2947
      .society
        h2 Contact me
        mdui-list
          mdui-list-item(href='https://github.com/hellolin-oi' target='_blank' rounded)
            mdui-icon(slot='icon' src='https://cdn.hellolin.top/npm/simple-icons/icons/github.svg')
            | GitHub
          mdui-list-item(href='https://twitter.com/hellolin_oi' target='_blank' rounded)
            mdui-icon(slot='icon' src='https://cdn.hellolin.top/npm/simple-icons/icons/twitter.svg')
            | X(Twitter)
          mdui-list-item(href='https://t.me/hellolin_oi' target='_blank' rounded)
            mdui-icon(slot='icon' src='https://cdn.hellolin.top/npm/simple-icons/icons/telegram.svg')
            | Telegram
          mdui-list-item(href='http://www.coolapk.com/u/28126054' target='_blank' rounded)
            mdui-icon(slot='icon' src='./static/coolapk.svg')
            | Coolapk
          mdui-list-item(href='https://weibo.com/hellolinoi' target='_blank' rounded)
            mdui-icon(slot='icon' src='https://cdn.hellolin.top/npm/simple-icons/icons/sinaweibo.svg')
            | Sina Weibo
          mdui-list-item(href='https://www.zhihu.com/people/hellolin.cf' target='_blank' rounded)
            mdui-icon(slot='icon' src='https://cdn.hellolin.top/npm/simple-icons/icons/zhihu.svg')
            | Zhihu
          mdui-list-item(href='https://steamcommunity.com/id/hellolin/' target='_blank' rounded)
            mdui-icon(slot='icon' src='https://cdn.hellolin.top/npm/simple-icons/icons/steam.svg')
            | Steam
          mdui-list-item(href='https://discord.com/users/1060072430355370094' target='_blank' rounded)
            mdui-icon(slot='icon' src='https://cdn.hellolin.top/npm/simple-icons/icons/discord.svg')
            | Discord
          mdui-list-item(href='https://www.youtube.com/channel/UCbel521H5BneYixYlWth_qg' target='_blank' rounded)
            mdui-icon(slot='icon' src='https://cdn.hellolin.top/npm/simple-icons/icons/youtube.svg')
            | Youtube
#project.footer
  a(href='https://github.com/hellolin-oi/HomePage' target='_blank') Source Code
  |
  | Copyright 2022-2024 hellolin, all rights reserved.
#bginfo.footer
  | Image: Pixiv
  |
  a(href='https://www.pixiv.net/artworks/88386138' target='_blank') 砂狼シロコ
</template>
