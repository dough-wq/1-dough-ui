
import Icon from 'packages/components/icon';


import Button from 'packages/components/button';

<template>
    <div>
        app
        <d-button></d-button>
        <d-icon name="camera"></d-icon>
        <!-- bem规范 -->
        <!-- 外部 -->
        <div class="d-icon">
            <!-- 局部：__内容 -->
            <div class="d-icon__header"></div>
            <!-- 表示修饰：--内容 -->
            <div class="d-icon--primary"></div>
            <!-- 
                1.全部：d-xx
                2.局部：__xx
                3.修饰：--xx
                4.状态：is-xx
             -->
        </div>
    </div>
</template>